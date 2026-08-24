/**
 * scripts/make-cv.mjs
 *
 * WHAT: Generates the QR code, then prints cv.html to the PDF that the portfolio and the
 *       QR hub both serve.
 * WHY:  The CV must exist as a real downloadable file, and hand-editing a PDF guarantees
 *       the web copy and the download drift apart. One HTML source, one print step.
 * WHEN: By hand, whenever cv.html changes. This repo has no build step, deliberately —
 *       GitHub Actions is unavailable on this account, so anything requiring a build
 *       would simply never deploy.
 *
 * RUN:  node scripts/make-cv.mjs
 *
 * BORROWED DEPENDENCIES: playwright and qrcode both come from sibling repos that already
 * install them. A static site with no package.json should not acquire a ~300 MB browser
 * dependency to print one PDF a quarter.
 *
 * LAYER: Developer tooling (manual, local only).
 */
import { chromium } from 'file:///G:/MY%20Company/TryTokka/trytokka/node_modules/playwright/index.mjs';
import QRCode from 'file:///G:/MY%20Company/TryQuickImg/tryquickimg/node_modules/qrcode/lib/index.js';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { statSync, copyFileSync, existsSync, writeFileSync, readFileSync } from 'node:fs';
import zlib from 'node:zlib';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'cv.html');

const NAME = 'Samson-P-G-CV-Full-Stack-Engineer.pdf';
const out = join(root, NAME);
const QR_REPO = 'G:/MY Company/QR-Code';

/** Where a scan lands: the link hub, not the portfolio — it fans out to everything else. */
const QR_TARGET = 'https://samsonpg.github.io/QR-Code/';

/*
  Error correction level H (~30% recoverable).

  A CV gets printed on office printers, photocopied, and scanned off a screen at an
  angle. L would be smaller and denser; H survives all of that. The URL is short enough
  that H still fits in a low-version symbol with large, forgiving modules.
*/
const qrSvg = await QRCode.toString(QR_TARGET, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 0,
  color: { dark: '#14181a', light: '#ffffff' },
});

writeFileSync(join(root, 'cv-qr.svg'), qrSvg, 'utf8');
console.log(`  cv-qr.svg  ->  ${QR_TARGET}`);

/*
  System Chrome, not Playwright's bundled Chromium.

  G:/playwright-browsers holds build 1234 while this Playwright wants 1228, and
  redownloading a browser costs ~150 MB on a machine that has repeatedly run out of
  disk. Chrome is already installed and is the same engine — the PDF is identical.
*/
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
if (!existsSync(CHROME)) {
  console.error(`  FAIL: Chrome not found at ${CHROME}. Install it or point CHROME at another Chromium build.`);
  process.exit(1);
}

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage();

await page.goto(pathToFileURL(source).href, { waitUntil: 'networkidle' });

/*
  Confirm the QR actually loaded, while the page is still open.

  A missing cv-qr.svg makes a broken <img>, which prints as blank white space — the CV
  still looks finished and nobody discovers it until someone scans a printout and
  nothing happens. Checked here rather than in the PDF because the QR is vector: it
  leaves no image object to look for afterwards.
*/
const qrOk = await page.evaluate(() => {
  const img = document.querySelector('.qr img');
  return Boolean(img && img.complete && img.naturalWidth > 0);
});
if (!qrOk) {
  await browser.close();
  console.error('  FAIL: the QR image did not load — check cv-qr.svg exists beside cv.html.');
  process.exit(1);
}

await page.pdf({
  path: out,
  format: 'A4',
  // cv.html's @page rule owns the margins; this makes the CSS authoritative.
  preferCSSPageSize: true,
  printBackground: true,
});

await browser.close();

const kb = (statSync(out).size / 1024).toFixed(0);
const pdf = readFileSync(out, 'latin1');
const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length;

console.log(`  ${NAME}  ${kb} KB  ${pages} page(s)`);

/*
  Two things worth failing over here; the QR was already checked in the browser above.
*/
let failed = false;

// 1. Length. A CV past two pages does not get read to the end.
if (pages > 2) {
  console.error(`  FAIL: ${pages} pages - trim cv.html.`);
  failed = true;
}

/*
  2. The text layer — the check that actually matters.

  An applicant tracking system reads the PDF's text, not its appearance. If the content
  ends up as vector outlines or images it scores zero on every keyword and no human ever
  sees it.

  Extracted with pdf.js, the engine Firefox ships, rather than by hand. The hand-rolled
  first attempt inflated the content streams and read the literal strings out of them,
  and reported every term missing on a perfectly good PDF: Chrome subsets its fonts and
  writes glyph identifiers, so the bytes in the stream are not letters. Reading them
  needs the font's ToUnicode map, which is precisely the work a real parser does. Using
  an approximation here would have meant the check could never pass — as useless as one
  that could never fail.
*/
async function extractText(file) {
  const pdfjs = await import(
    'file:///G:/MY%20Company/TryQuickImg/tryquickimg/node_modules/pdfjs-dist/legacy/build/pdf.mjs'
  );
  // destroy() lives on the loading task, not the document.
  const task = pdfjs.getDocument({
    data: new Uint8Array(readFileSync(file)),
    // No canvas in Node, and none is needed for text.
    isEvalSupported: false,
    useSystemFonts: false,
  });
  const doc = await task.promise;

  let text = '';
  for (let n = 1; n <= doc.numPages; n += 1) {
    const content = await (await doc.getPage(n)).getTextContent();
    text += content.items.map((it) => it.str).join(' ') + '\n';
  }
  await task.destroy();
  return text;
}

const MUST_EXTRACT = [
  // Identity and contact — useless if a parser cannot read them back.
  'Samson', 'samsonpg077@gmail.com', 'samsonpg.github.io', 'linkedin.com/in/samson-p-g-335964133',
  // Keywords a role match depends on.
  'TypeScript', 'Next.js', 'PostgreSQL', 'Node.js', 'React', 'Acsaven',
  /*
    The section headings, as whole words.

    These were the actual bug: `letter-spacing` on h2 made Chrome place every glyph
    separately, and extraction returned "P R O F E S S I O N A L  S U M M A R Y" and
    "E D U C AT I O N". A parser segments a CV by finding these headings, so tracked-out
    ones quietly cost the document its structure while it still looked immaculate on
    screen. Asserted here so no future styling change can reintroduce it.
  */
  'PROFESSIONAL SUMMARY', 'TECHNICAL SKILLS', 'PROFESSIONAL EXPERIENCE', 'EDUCATION',
];
const extracted = await extractText(out);
const missing = MUST_EXTRACT.filter((s) => !extracted.includes(s));

if (missing.length) {
  console.error(`  FAIL: these do not survive text extraction: ${missing.join(', ')}`);
  console.error('        An ATS would not see them. Check for text rendered as outlines or images.');
  failed = true;
} else {
  console.log(`  text layer OK - ${extracted.length} chars extractable, all key terms present`);
}

/*
  Copy only a PDF that passed.

  The first version copied before evaluating `failed`, so a rejected three-page draft was
  published to the QR hub anyway — the gate reported the problem and shipped it regardless.
*/
if (failed) {
  console.error('  NOT copied to the QR hub: fix the failures above and re-run.');
  process.exit(1);
}

if (existsSync(QR_REPO)) {
  copyFileSync(out, join(QR_REPO, NAME));
  console.log(`  copied -> ${join(QR_REPO, NAME)}`);
} else {
  console.warn(`  QR repo not found at ${QR_REPO}; skipped that copy.`);
}
