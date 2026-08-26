/**
 * WHAT: Capture the live llm-docs-lab page into static/llm-docs-lab/index.html.
 * WHY:  This has now been done by hand three times, and each hand-rolled version quietly
 *       lost something the one before it had — first the "static copy" explanation for the
 *       ask box, then the noindex directive, which left the clone free to compete with the
 *       page it is a copy of. A script in the repository cannot be lost with a scratchpad.
 * HOW:  node scripts/capture-llm-docs-page.mjs
 *
 * The two directives below are the whole point of the file and are ASSERTED, not hoped for:
 * a capture that silently produced an indexable clone is exactly the failure that prompted
 * this, so it fails loudly instead of writing a bad file.
 *
 * LAYER: Build tooling.
 */

import { writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'static', 'llm-docs-lab', 'index.html');
const SOURCE = process.env.LLM_DOCS_URL || 'https://llmdocs.acsaven.com/';

const ROBOTS = '<meta name="robots" content="noindex,follow">';
const CANONICAL = `<link rel="canonical" href="${SOURCE}">`;
const GUARD = '<script src="./offline-guard.js"></script>';

const res = await fetch(SOURCE);
if (!res.ok) {
  console.error(`  capture failed: ${SOURCE} returned HTTP ${res.status}`);
  process.exit(1);
}
let html = await res.text();
console.log(`  fetched ${(html.length / 1024).toFixed(1)} KB from ${SOURCE}`);

/*
  Replace-or-insert, never replace-only.

  The live page carries no robots meta — it is the original and wants indexing — so a
  regex replace against it matches nothing and does nothing. That is precisely how the
  directive went missing last time: the code looked correct and silently no-opped.
*/
function ensure(pattern, tag, label) {
  if (pattern.test(html)) {
    html = html.replace(pattern, tag);
    console.log(`  ${label}: replaced`);
  } else {
    html = html.replace('</title>', `</title>\n${tag}`);
    console.log(`  ${label}: inserted`);
  }
}

ensure(/<meta[^>]*name=["']robots["'][^>]*>/i, ROBOTS, 'robots');
ensure(/<link[^>]*rel=["']canonical["'][^>]*>/i, CANONICAL, 'canonical');

if (!html.includes('offline-guard.js')) {
  html = html.replace('</body>', `${GUARD}\n</body>`);
  console.log('  offline guard: added');
} else {
  console.log('  offline guard: already present');
}

/*
  Refuse to write a capture that is missing any of the three. Each exists for a reason that
  is invisible when it works: without noindex the clone competes with the original in search,
  without the canonical the duplicate has no owner, and without the guard the ask box shows
  a raw 404 to whoever is evaluating the work.
*/
const problems = [];
if (!html.includes(ROBOTS)) problems.push('robots noindex missing');
if (!html.includes(CANONICAL)) problems.push('canonical missing');
if (!html.includes('offline-guard.js')) problems.push('offline guard missing');
if (!existsSync(join(root, 'static', 'llm-docs-lab', 'offline-guard.js'))) {
  problems.push('offline-guard.js is not in the folder, so the reference would 404');
}
if (problems.length) {
  console.error(`  NOT WRITTEN — ${problems.length} problem(s):`);
  for (const p of problems) console.error(`    - ${p}`);
  process.exit(1);
}

writeFileSync(OUT, html);
console.log(`  written: ${OUT} (${(html.length / 1024).toFixed(1)} KB)`);
console.log('  robots, canonical and offline guard all verified present');
