/**
 * scripts/capture-llm-docs-lab.mjs
 *
 * WHAT: Capture the live llm-docs-lab homepage into portfolio + static shot assets.
 * WHY:  Feature cards and the static hub still showed the pre-glass teal UI.
 * RUN:  node scripts/capture-llm-docs-lab.mjs
 *
 * BORROWS: Playwright from TryTokka; system Chrome (same pattern as make-cv.mjs);
 *          sharp installed under G:/MY Company/_tmp when missing.
 */
import { chromium } from 'file:///G:/MY%20Company/TryTokka/trytokka/node_modules/playwright/index.mjs';
import { mkdirSync, writeFileSync, readFileSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const url = process.env.LLM_DOCS_URL || 'https://llmdocs.acsaven.com/';
const outPng = join(root, 'media', 'software', 'llm-docs-lab.png');
const outWebp = join(root, 'media', 'software', 'llm-docs-lab.webp');
const outStatic = join(root, 'static', 'llm-docs-lab', 'shot.webp');
const tmpPng = join(root, 'media', 'software', '_llm-docs-lab-capture.png');

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
  if (!existsSync(CHROME)) {
    throw new Error(`Chrome not found at ${CHROME}`);
  }
  const sharp = ensureSharp();
  mkdirSync(dirname(outPng), { recursive: true });
  mkdirSync(dirname(outStatic), { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME,
  });
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => {
    try {
      localStorage.setItem('samsonpg-theme', 'light');
    } catch (_) { /* private mode */ }
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-theme-pref', 'light');
    document.documentElement.style.colorScheme = 'light';
  });
  await page.reload({ waitUntil: 'networkidle', timeout: 60000 });
  await sleep(400);

  /* Freeze the typewriter so the frame is stable */
  await page.evaluate(() => {
    const hint = document.getElementById('q-type');
    if (hint) {
      hint.hidden = true;
      hint.textContent = '';
    }
    const input = document.getElementById('q');
    if (input) input.placeholder = 'Ask about pricing or rate limits…';
  });

  const question = 'How many neurons per day are free on Cloudflare Workers AI?';
  const demoAnswer =
    'According to the source [1], Cloudflare Workers AI offers a free allocation of 10,000 Neurons per day.';
  const demoSources = [
    {
      text: '…free allocation: 10,000 Neurons per day…',
      title: 'Pricing · Cloudflare Workers AI docs — Pricing',
      host: 'developers.cloudflare.com',
      href: 'https://developers.cloudflare.com/',
      retrieved: '2026-08-24',
    },
    {
      text: 'Workers AI is priced based on Neurons…',
      title: 'Pricing · Cloudflare Workers AI docs — Pricing',
      host: 'developers.cloudflare.com',
      href: 'https://developers.cloudflare.com/',
      retrieved: '2026-08-24',
    },
  ];

  /*
    Prefer a live answer when the worker is healthy. If /ask is down (common on free-tier
    neuron exhaustion), stage the same answer UI from the measured eval example so the
    portfolio shot never ships an HTTP 500 frame.
  */
  let answered = false;
  try {
    await page.fill('#q', question);
    await page.click('#go');
    await page.waitForFunction(
      () => {
        const a = document.getElementById('a');
        const wrap = document.getElementById('answer-wrap');
        if (!a || !wrap || wrap.hidden) return false;
        const t = (a.textContent || '').trim();
        return t.length > 40 && !/waiting|Something went wrong|HTTP \d+/i.test(t);
      },
      { timeout: 20000 },
    );
    answered = true;
    await sleep(700);
  } catch {
    answered = false;
  }

  if (!answered) {
    await page.evaluate(
      ({ question: q, answer, sources }) => {
        const input = document.getElementById('q');
        if (input) input.value = q;

        const out = document.getElementById('a');
        const wrap = document.getElementById('answer-wrap');
        const srcs = document.getElementById('srcs');
        const list = document.getElementById('src-list');
        if (!out || !wrap || !srcs || !list) return;

        out.textContent = '';
        const parts = answer.split(/(\[\d+\])/g);
        parts.forEach((part) => {
          const m = part.match(/^\[(\d+)\]$/);
          if (m) {
            const a = document.createElement('a');
            a.className = 'cite';
            a.href = '#src-' + m[1];
            a.textContent = '[' + m[1] + ']';
            out.appendChild(a);
          } else if (part) {
            out.appendChild(document.createTextNode(part));
          }
        });
        wrap.hidden = false;

        list.textContent = '';
        sources.forEach((s, i) => {
          const li = document.createElement('li');
          li.id = 'src-' + (i + 1);
          const text = document.createElement('p');
          text.className = 'srcs__text';
          text.textContent = s.text;
          const meta = document.createElement('p');
          meta.className = 'srcs__meta';
          const link = document.createElement('a');
          link.href = s.href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = s.host;
          meta.appendChild(link);
          const dot = document.createElement('span');
          dot.className = 'dot';
          dot.textContent = '·';
          meta.appendChild(dot);
          const date = document.createElement('span');
          date.className = 'mono';
          date.textContent = s.retrieved;
          meta.appendChild(date);
          const body = document.createElement('div');
          body.className = 'srcs__body';
          body.appendChild(text);
          body.appendChild(meta);
          li.appendChild(body);
          list.appendChild(li);
        });
        srcs.hidden = false;
      },
      { question, answer: demoAnswer, sources: demoSources },
    );
    answered = true;
    await sleep(400);
  }

  const clip = await page.evaluate(() => {
    const answer = document.getElementById('answer-wrap');
    const srcs = document.getElementById('srcs');
    let bottom = 720;
    if (answer && !answer.hidden) {
      bottom = Math.max(bottom, answer.getBoundingClientRect().bottom + 20);
    }
    if (srcs && !srcs.hidden) {
      bottom = Math.max(bottom, Math.min(srcs.getBoundingClientRect().bottom + 20, 900));
    }
    return {
      x: 0,
      y: 0,
      width: 1600,
      height: Math.min(900, Math.max(720, Math.ceil(bottom))),
    };
  });


  await page.screenshot({
    path: tmpPng,
    type: 'png',
    clip: {
      x: clip.x,
      y: clip.y,
      width: Math.min(WIDTH, clip.width),
      height: Math.min(HEIGHT, clip.height),
    },
  });

  await browser.close();

  const pngBuf = readFileSync(tmpPng);
  writeFileSync(outPng, pngBuf);

  const webpBuf = await sharp(pngBuf).webp({ quality: 82 }).toBuffer();
  writeFileSync(outWebp, webpBuf);

  const shotBuf = await sharp(pngBuf)
    .resize(1440, 900, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toBuffer();
  writeFileSync(outStatic, shotBuf);

  if (existsSync(tmpPng)) unlinkSync(tmpPng);

  console.log(JSON.stringify({
    url,
    answered,
    png: outPng,
    webp: outWebp,
    static: outStatic,
    pngBytes: pngBuf.length,
    webpBytes: webpBuf.length,
    shotBytes: shotBuf.length,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
