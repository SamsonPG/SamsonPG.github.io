# Launch kit — directories & maker platforms

Copy-paste captions for **Product Hunt, AlternativeTo, GitHub, Dev.to, Hacker News, SaaSHub, Indie Hackers, Peerlist, Uneed, BetaList** — plus gallery images.

Matches voice from `brand/social-posts/CAPTIONS.md` and facts from `content/products.json`.

## Files

| File | Use |
|------|-----|
| `SAASHUB.md` | Index of all SaaSHub fill sheets |
| `UNEED.md` | Index of all Uneed fill sheets |
| `PEERLIST.md` | Index of all Peerlist fill sheets |
| `BETALIST.md` | Index of all BetaList fill sheets (**paid** · parked) |
| `PRODUCTHUNT.md` | Product Hunt index (Tokka first · all 4) |
| `producthunt-*.md` | PH Main info / media / first comment per product |
| `HACKERNEWS.md` | Show HN index (one per day) |
| `hackernews-*.md` | Show HN title + text per product |
| `LISTINGS.md` | Live directory URLs (Uneed, SaaSHub, Peerlist, BetaList, IH, …) |
| `uneed-*.md` / `peerlist-*.md` / `betalist-*.md` / `indiehacker-*.md` | Paste sheets per product |
| `saashub-tryquickimg.md` | SaaSHub paste sheet |
| `saashub-trydevsnip.md` | SaaSHub paste sheet |
| `saashub-trycalculatingnow.md` | SaaSHub paste sheet |
| `saashub-trytokka.md` | SaaSHub paste sheet (freemium) |
| `saashub-acsaven.md` | SaaSHub paste sheet (optional studio) |
| `VIDEOS.md` | YouTube demo URLs |
| `CHECKLIST.md` | Day-by-day calendar + exact submit URLs |
| `CAPTIONS.md` | Master index + posting order |
| `acsaven.md` | Studio / parent submissions |
| `tryquickimg.md` | All platform fields — copy fences |
| `trydevsnip.md` | Same |
| `trycalculatingnow.md` | Same (product name; folder may say TryCalcNest) |
| `trytokka.md` | Same — SaaS flagship |
| `gallery/` | PH cards + live UI slides (`ph-*-2.png`, `ph-*-3.png`) |
| `videos/` | Landscape feature demos (`demo-*.mp4`) |
| `../social-posts/post-*.png` | Square social (reuse on LinkedIn/X) |
| `../products/*-512.png` | Icons / avatars / PH thumbnail source |

Regenerate gallery cards: `npm run gen:launches`  
Recapture live slides 2–3: `npm run gen:ph-screens` (uses system Chrome)  
Rebuild landscape feature demos: `npm run gen:feature-videos` → `brand/launches/videos/demo-*.mp4`

### For agents (Cursor / Claude / etc.)

When the user asks to refresh Product Hunt / directory screenshots or launch assets:

1. Read this folder + `AGENTS.md` → **Launch marketing**.
2. Run from repo root: `npm run gen:ph-screens` (live UI) and/or `npm run gen:launches` (brand cards) and/or `npm run gen:feature-videos` (demo MP4s).
3. Commit updated `brand/launches/gallery/*.png` / `videos/*.mp4` and push/deploy per `AGENTS.md`.
4. Captions live in `brand/launches/{product}.md` — do not invent new taglines; prefer `content/products.json` + existing fences.
5. Never publish `acsaven.pages.dev` as the studio URL — use `https://acsaven.com/`.
6. Vertical Shorts already live in `brand/social-posts/youtube/short-*.mp4`. Landscape demos: `brand/launches/videos/demo-*.mp4` (SaaSHub/PH often need a YouTube URL — upload unlisted, then paste).

## Recommended order (don’t dump everything in one day)

| Day | Product | Why |
|-----|---------|-----|
| 1 | **TryQuickImg** | Clearest “private browser tool” story; AlternativeTo + Uneed + Peerlist + BetaList |
| 2 | **TryDevSnip** | Dev.to + Show HN + GitHub Discussion + SaaSHub |
| 3 | **TryCalculatingNow** | Student / calc directories; Indie Hackers “shipped” note |
| 4 | **TryTokka** | **Product Hunt** primary (paid SaaS); Indie Hackers product page; Peerlist |
| 5 | **Acsaven** | Soft studio post on LinkedIn / Peerlist / IH “building in public” — link family, don’t compete with product launches |

Social (X/IG/LinkedIn/Reddit) already lives in `brand/social-posts/CAPTIONS.md` — post those the same week as the matching product.

## Platform notes (quick)

- **Product Hunt** — one product per launch day; TryTokka first for hunters; free tools can follow later or stay on directories only.
- **Hacker News** — Show HN; no marketing speak; lead with what it does + privacy.
- **Dev.to** — long-form; one article per product (templates in each `.md`).
- **AlternativeTo** — list real alternatives you replace; honest “free / open / privacy” tags.
- **GitHub** — prefer public `acsavenhq/*` brand links when live; otherwise your public remotes.
- **Indie Hackers** — maker story + metrics later; ship the product page with pricing honesty (Tokka paid; others free).
- **Names** — always **Try**…; **TryTokka ≠ TikTok**; **TryCalculatingNow** not TryCalcNest; **Acsaven** sentence case.

## Assets to upload

| Platform | Image |
|----------|--------|
| Product Hunt thumbnail | `brand/products/{slug}-512.png` |
| Product Hunt gallery | `brand/launches/gallery/ph-{slug}.png` (1270×760) |
| AlternativeTo / SaaSHub / Uneed / BetaList / Peerlist | gallery + 512 icon |
| Dev.to cover | `gallery/ph-{slug}.png` or `social-posts/post-{slug}.png` |
| GitHub social | existing OG / `post-*.png` |

## Contact

hello.acsaven@gmail.com · https://acsaven.com/ · Founder: Samson PG
