# static — homepage design demos

Static **theme / dummy homepage** clones of Samson P G products.

**Live:** https://samsonpg.github.io/static/

## Core idea

If a paid domain is blocked or down, Portfolio / QR **Offline** links open these demos so a recruiter still sees the product look (brand + hero + original homepage capture).

Not full apps — design showcases only.

## Products

trytokka, tryquickimg, trydevsnip, trycalculatingnow, acsaven, soundshoppie, 20x, llm-docs-lab, portfolio

Each folder: themed index.html + shot.webp (live homepage capture).

llm-docs-lab carries one extra thing: `results/`, the measured retrieval, model-comparison
and prompt-injection numbers. They are original content rather than a capture, so unlike
the clones that page stays indexable and canonicals to itself. The clone beside it is
`noindex,follow` and canonicals to llmdocs.acsaven.com, like every other folder here.
Its ask box cannot reach a Cloudflare Worker from GitHub Pages, so it answers in place
and points at the live demo rather than failing into an error.

## Refresh a shot

1. Capture desktop homepage (1440×900).
2. Convert to WebP → replace shot.webp.
3. Push SamsonPG.github.io main.