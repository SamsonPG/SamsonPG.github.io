# samsonpg.github.io

Personal site — static HTML, no framework, no build step.

## Why static

GitHub Actions is unavailable on this account, so anything with a build step would never
deploy. Plain HTML is served directly by GitHub Pages and cannot rot: no dependencies to
patch, nothing to re-audit in a year.

## Files

| | |
|---|---|
| `index.html` | the whole page |
| `styles.css` | one stylesheet, dark by default with a light variant |
| `CNAME` | only if a custom domain is added later |

## Editing

Change `index.html` and push. Pages rebuilds in a minute or two.

Facts on this page are verifiable — API route counts, migrations and test totals come from
the repositories themselves. Keep it that way; if a number changes, change it here too.

## Deploy

Settings → Pages → Source: `main`, folder `/ (root)`.
