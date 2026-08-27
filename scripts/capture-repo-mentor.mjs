/**
 * scripts/capture-repo-mentor.mjs
 *
 * WHAT: Capture Repo Mentor Blueprint (neuron atlas) into portfolio thumbnails.
 * WHY:  Hero/feature still used a stylised SVG cover instead of a live UI shot.
 * RUN:  node scripts/capture-repo-mentor.mjs
 *
 * BORROWS: Playwright from TryTokka; system Chrome; sharp under G:/tmp when missing.
 * SEEDS:  local public/scans/repo-mentor-brain.json into the live app's localStorage
 *         so the Blueprint board has a full product brain (not the tiny mini-repo).
 */
import { chromium } from 'file:///G:/MY%20Company/Repo-mentor/node_modules/playwright/index.mjs';
import { mkdirSync, writeFileSync, readFileSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const mentorRoot = 'G:/MY Company/Repo-mentor';
/** Prefer local `npm run preview -- --host 127.0.0.1 --port 4177` when capturing; live URL is flaky under headless Chrome. */
const url = process.env.REPO_MENTOR_URL || 'http://127.0.0.1:4177/';
const brainPath =
  process.env.REPO_MENTOR_BRAIN ||
  join(mentorRoot, 'public', 'scans', 'repo-mentor-brain.json');

const outPng = join(root, 'media', 'software', 'repo-mentor.png');
const outWebp = join(root, 'media', 'software', 'repo-mentor.webp');
const outStatic = join(root, 'static', 'repo-mentor', 'shot.webp');
const tmpPng = join(root, 'media', 'software', '_repo-mentor-capture.png');

const WIDTH = 1600;
const HEIGHT = 900;
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function ensureSharp() {
  const candidates = [
    'G:/MY Company/Acsaven/acsaven/node_modules/sharp',
    'G:/tmp/capture-sharp/node_modules/sharp',
  ];
  for (const dir of candidates) {
    try {
      return createRequire(join(dir, 'package.json'))(dir);
    } catch {
      /* try next */
    }
  }
  const cache = 'G:/tmp/npm-cache';
  const prefix = 'G:/tmp/capture-sharp';
  mkdirSync(prefix, { recursive: true });
  mkdirSync(cache, { recursive: true });
  const npm = spawnSync(
    'npm',
    ['install', 'sharp@0.33.5', '--prefix', prefix, '--cache', cache, '--no-fund', '--no-audit'],
    {
      encoding: 'utf8',
      env: {
        ...process.env,
        TEMP: 'G:\\tmp',
        TMP: 'G:\\tmp',
        npm_config_cache: cache,
      },
      shell: true,
    },
  );
  if (npm.status !== 0) {
    console.error(npm.stdout);
    console.error(npm.stderr);
    throw new Error('sharp install failed');
  }
  return createRequire(join(prefix, 'node_modules', 'sharp', 'package.json'))(
    join(prefix, 'node_modules', 'sharp'),
  );
}

async function main() {
  if (!existsSync(CHROME)) throw new Error(`Chrome not found at ${CHROME}`);
  if (!existsSync(brainPath)) throw new Error(`Brain not found: ${brainPath}`);

  const sharp = ensureSharp();
  const brainRaw = readFileSync(brainPath, 'utf8');
  const brain = JSON.parse(brainRaw);
  mkdirSync(dirname(outPng), { recursive: true });
  mkdirSync(dirname(outStatic), { recursive: true });

  console.log('launching…', url);
  let browser;
  try {
    // Prefer Playwright's bundled Chromium — system Chrome often hits ERR_INSUFFICIENT_RESOURCES here
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.warn('bundled Chromium failed, trying system Chrome:', err.message);
    if (!existsSync(CHROME)) throw err;
    browser = await chromium.launch({
      headless: true,
      executablePath: CHROME,
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
    });
  }
  console.log('browser up');
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
  });
  page.setDefaultNavigationTimeout(45000);

  console.log('goto');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log('landed', page.url());
  await sleep(800);

  const seeded = await page.evaluate(
    ({ brainJson, repoName, repoPath }) => {
      const brain = JSON.parse(brainJson);
      try {
        localStorage.setItem('repo-mentor.onboarding.v1', '1');
        localStorage.setItem('repo-mentor-theme', 'dark');
        localStorage.setItem('repo-mentor.brain.v1', brainJson);
        if (brain.scan) {
          localStorage.setItem('repo-mentor.scan.v1', JSON.stringify(brain.scan));
        }
        const session = {
          repo: {
            id: 'capture-repo-mentor',
            name: repoName || brain.repoName || 'Repo Mentor',
            path: repoPath || brain.repoPath || '.',
            connectedAt: new Date().toISOString(),
          },
          currentLevelId: 3,
          levels: Array.from({ length: 12 }, (_, i) => ({
            levelId: i,
            status: i < 3 ? 'completed' : i === 3 ? 'current' : 'locked',
          })),
          understandingNotes: '',
          learningTrack: 'familiar',
          updatedAt: new Date().toISOString(),
        };
        localStorage.setItem('repo-mentor.session.v1', JSON.stringify(session));
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.colorScheme = 'dark';
        return { ok: true, bytes: brainJson.length };
      } catch (err) {
        return { ok: false, error: String(err) };
      }
    },
    {
      brainJson: brainRaw,
      repoName: brain.repoName || 'Repo Mentor',
      repoPath: brain.repoPath || mentorRoot,
    },
  );

  console.log('seed', seeded);
  if (!seeded.ok) {
    throw new Error(`localStorage seed failed: ${seeded.error}`);
  }

  console.log('reload');
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(1000);
  console.log('post-reload', await page.title());

  // Open Blueprint tab — richest visual for the portfolio thumbnail
  console.log('open blueprint');
  const blueprintTab = page.locator('#tab-blueprint, [data-tab="blueprint"], button:has-text("Blueprint")').first();
  await blueprintTab.click({ timeout: 20000 });
  await page.waitForSelector('.bp-jarvis-canvas, .bp-jarvis-stage, #panel-blueprint', {
    timeout: 45000,
  });
  console.log('blueprint ready');
  await sleep(800);

  // Bring the neuron atlas into view — avoid clipping the TOC strip
  const jarvis = page.locator('.bp-jarvis').first();
  await jarvis.waitFor({ state: 'visible', timeout: 20000 });
  await jarvis.scrollIntoViewIfNeeded();
  await sleep(900);

  // Full 1600×900 viewport: site chrome + Blueprint header + neuron stage
  await page.screenshot({
    path: tmpPng,
    type: 'png',
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
  });

  await browser.close();

  const pngBuf = readFileSync(tmpPng);
  // Normalize to 1600×900 cover for hero/feature consistency
  const coverPng = await sharp(pngBuf)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(outPng, coverPng);

  const webpBuf = await sharp(coverPng).webp({ quality: 82 }).toBuffer();
  writeFileSync(outWebp, webpBuf);

  const shotBuf = await sharp(coverPng)
    .resize(1440, 900, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toBuffer();
  writeFileSync(outStatic, shotBuf);

  if (existsSync(tmpPng)) unlinkSync(tmpPng);

  console.log(
    JSON.stringify(
      {
        url,
        brain: brainPath,
        repoName: brain.repoName,
        seededBytes: seeded.bytes,
        png: outPng,
        webp: outWebp,
        static: outStatic,
        pngBytes: coverPng.length,
        webpBytes: webpBuf.length,
        shotBytes: shotBuf.length,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
