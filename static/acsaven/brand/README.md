# Acsaven brand kit

Original Acsaven identity. **Commercial use OK.** No Logo.com templates, no paid stock marks, no Google Fonts CDN on the live hub.

## Quick rules

| Rule | Detail |
|------|--------|
| Name | **Acsaven** (sentence case) — never ACSAVEN, AcSaven, or “ACS” alone |
| Mark | Mountain-A monogram (black / white) — original Illustrator artwork |
| Wordmark | Path outlines from **Source Sans 3 Bold** (SIL OFL 1.1) |
| Live hub UI | System font stack only (no runtime webfonts — site policy) |
| Marketing / Figma / print | Install OFL fonts from `fonts/` |

## Logo files

| File | Use |
|------|-----|
| `acsaven-mark.svg` | Favicon, app icon, avatar (**prefer this**) |
| `icon.svg` | Alias of the mark |
| `wordmark.svg` | Name only — dark ink on light |
| `wordmark-light.svg` | Name only — light ink on dark |
| `logo-light.svg` | Mark + wordmark on light backgrounds |
| `logo.svg` | Mark + wordmark on dark backgrounds |
| `lockup-og.svg` | Wide social / Open Graph style lockup (SVG) |
| `lockup-preview.png` | Raster OG / Twitter card image |
| `brand-board.png` | Quick visual brand board |
| `haven-veil.svg` / `haven-veil-light.svg` | Full-section symmetric mist overlay |
| `haven-range.svg` / `haven-range-light.svg` | Soft balanced twin ridges |
| `haven-stars.svg` / `haven-stars-light.svg` | C-swirl starfield for dark / light |
| `haven-mesh.svg` | Dark composite atmosphere (1600×900) |
| `haven-mesh-recipe.html` | Side-by-side dark + light preview |

Regenerate outlines anytime:

```bash
npm run gen:brand
```

## Colors

| Token | Hex | Role |
|-------|-----|------|
| Slate | `#64748b` | Mark fill, primary accent |
| Slate deep | `#475569` | Light-theme brand, gradients |
| Ink on mark | `#0f1419` | A on slate |
| Ink | `#121014` | Dark surfaces / dark logo ink |
| Paper | `#f5f0f4` | Light surfaces / light logo ink |

## Haven Aura v6 (artistic painterly field)

Visible color mesh + abstract rings/petals. Mountains abandoned (they collapsed into a muddy smear). All same-origin SVG/CSS — no CDN.

| Layer | Role |
|-------|------|
| CSS mesh | Azure / sky / cyan / peach / gold / rose blooms |
| `haven-veil.svg` | Concentric rings + mirrored petals |
| `haven-stars.svg` | Fine spark accents |
| Grain | Film craft |

Recreate: [`haven-mesh-recipe.html`](./haven-mesh-recipe.html)

## Typography (100% legal — SIL OFL)

### Official brand type

**Source Sans 3** — Adobe, [SIL Open Font License 1.1](https://scripts.sil.org/OFL)

| Role | File in `fonts/` | Weight |
|------|------------------|--------|
| Wordmark / display | `SourceSans3-Bold.ttf` | Bold |
| UI / body (marketing) | `SourceSans3-Regular.ttf` | Regular |
| Emphasis | `SourceSans3-Semibold.ttf` | Semibold |
| License | `LICENSE-SourceSans3.md` | — |

Allowed: commercial products, logos (as outlines), apps, print, ads, embedding in docs.  
Not allowed: selling the font files alone as a product.

### Optional alternate (also OFL)

**Plus Jakarta Sans** — Tokotype, SIL OFL 1.1 (`OFL-PlusJakartaSans.txt`)

Use in Figma/Canva for marketing headlines if you want a slightly rounder geometric voice. Official SVG wordmarks ship as **Source Sans 3** outlines so every platform renders identically.

## Legal summary

1. **Mark** — original Acsaven artwork; you own it for the brand.
2. **Wordmark SVGs** — documents *created with* Source Sans 3. OFL §5: the license does **not** apply to documents created using the font. You can use the SVG logos commercially without redistributing the TTF.
3. **Font files in `fonts/`** — redistributed under OFL with license texts included. Keep those license files when you share the font folder.
4. **Hub site** — does **not** load Google Fonts or any CDN webfont (privacy + performance policy). Logos are SVG paths; page text uses `system-ui`.

## Do not

- Buy or paste Logo.com / Looka / Hatchful marks into this kit
- Add fake cities, “Est. 20XX”, or stock “shield lock” icons
- Lead with bare short names (QuickImg, DevSnip) — products always include **Try**
- Hotlink fonts.googleapis.com on acsaven.com

## Specimen

Open [`identity.html`](./identity.html) locally or at `/brand/identity.html` after deploy.

## Launch / Product Hunt assets

Directory captions + gallery: [`launches/`](./launches/) (see `launches/README.md`).

```bash
npm run gen:launches      # brand cards → launches/gallery/ph-*.png
npm run gen:ph-screens    # live UI slides 2–3 (system Chrome)
```
