# Peerlist Articles — Acsaven Family

---

## Article 1: TryTokka

**Title:** TryTokka — AI spend monitoring so you never miss a threshold

**Body:**

AI API bills can creep up without warning — especially when you're running multiple providers across projects. TryTokka connects to your providers, syncs spend daily, and alerts you the moment you cross your threshold.

**What it does:**
Connect your AI provider API keys (OpenAI, Anthropic, Google Gemini, OpenRouter, Azure, Bedrock, xAI). TryTokka syncs your spend daily and emails you the moment you cross a threshold you set — $5, $20, $100, whatever makes sense for you.

**How it works:**
- Daily cron reads your usage from each provider's billing API
- Compares against your configured threshold
- Fires an email + browser push + Chrome extension notification if you're over
- Dashboard shows today, this month, rolling 30-day, and a forecast

**What it costs you:**
Free tier: 1 provider, monthly summary email. Solo/Team plans for multiple providers and daily alerts.

**The manual alternative:**
If you don't want to connect keys, there's a free spreadsheet tracker on acsaven.com — log spend by hand, same 30-day projection. TryTokka just automates it.

→ https://trytokka.com

---

## Article 2: TryCalculatingNow

**Title:** 95+ calculators, zero signup, everything stays in your browser

**Body:**

Every semester, students Google "what do I need on my final to pass?" and land on ad-heavy sites that require accounts for no reason. Finance calculators are the same — SIP, EMI, tax estimators locked behind email walls.

I built TryCalculatingNow to be the opposite.

**What's in it:**
- Final grade calculator ("I need X on my final to get a B")
- GPA/CGPA calculator (weighted, 4.0 scale)
- SIP, compound interest, loan/EMI with amortization
- Tax calculators (US, Canada, India, Australia)
- Invoice generator, rent receipt generator
- Hourly-to-salary converter
- Percentage math (% of, % change, increase/decrease)

**Privacy:**
All math runs client-side. Your grades and financial numbers never leave your device. Works offline.

**Why "no signup wall":**
Basic calculators shouldn't need an account. You need a number — you should get the number.

→ https://trycalculatingnow.com

---

## Article 3: TryQuickImg

**Title:** Compress and convert images without uploading them anywhere

**Body:**

Most image tools upload your photos to a server, compress them there, and send them back. That's a privacy problem — especially for screenshots with sensitive content, personal photos, or client work.

TryQuickImg does everything in your browser tab. Nothing leaves your machine.

**What it does:**
- Compress HEIC, JPG, PNG
- Convert between formats
- Resize and crop
- Batch processing (multiple files at once)

**How it works:**
Canvas API + WebAssembly. Your images are processed in-memory, then you download the result. The server never sees a single pixel.

**Who it's for:**
Anyone who needs quick image compression without trusting a third-party server — bloggers, developers, designers, or anyone with privacy-sensitive screenshots.

→ https://tryquickimg.com

---

## Article 4: TryDevSnip

**Title:** The developer utilities that run entirely in your browser

**Body:**

Every project, same throwaway scripts: format this JSON, decode this timestamp, validate this cron expression. TryDevSnip is a permanent home for those utilities.

**What's in it:**
- JSON formatter and validator
- Cron expression builder and explainer
- Unix timestamp converter
- UUID generator
- Base64 encode/decode
- URL encode/decode
- And more developer-focused tools

**Same privacy model as the rest of the Try family:**
Everything runs locally. No server calls. Paste your API response, your JWT, your malformed JSON — it never leaves your browser.

→ https://trydevsnip.com

---

## Article 5: Astro Production Starter

**Title:** 6 gates that catch what your test suite can't

**Body:**

Running live Astro sites taught me that production breaks in ways tests can't catch — stale cached HTML after a deploy, an outdated claim, a broken internal link, a third-party font CDN injecting a tracking pixel.

The fixes are now a reusable engine: @acsaven/astro-ops.

**The 6 gates:**

1. **Build ID** — Content-hashed build identifier so edge caches can't serve stale HTML after deploy
2. **Freshness watchdogs** — Flags claims that reference external facts (pricing, dates) and warns when they're stale
3. **Lighthouse budgets** — Automated performance budgets that fail the build if you regress
4. **Generated sitemaps + schema + llms.txt** — SEO artifacts built from your content, not hand-maintained
5. **Links gate** — Catches broken internal/external links before deploy
6. **Third-party tripwire** — Alerts if a new external asset appears that you didn't explicitly allow

**Not a theme. Not a UI kit.**
It's opinionated about what happens *after* your site looks right. The gates are extracted from real failures on live Try sites.

**Free. MIT. No paid tier.**

→ https://github.com/SamsonPG/astro-ops

---

## Article 6: Acsaven

**Title:** Tools that stay with you — the studio behind the Try family

**Body:**

Acsaven is a one-person studio. I build browser-first tools under one principle: your data stays on your device unless there's a clear reason it shouldn't.

**The family:**

| Product | What it does | URL |
|---------|-------------|-----|
| TryQuickImg | Compress and convert images privately | tryquickimg.com |
| TryDevSnip | JSON, cron, timestamps for developers | trydevsnip.com |
| TryCalculatingNow | 95+ calculators, no signup | trycalculatingnow.com |
| TryTokka | AI API spend alerts | trytokka.com |

**What's free, what's paid:**
- The three browser Try apps (QuickImg, DevSnip, CalcNow) are free forever. No accounts, no limits.
- The Astro Production Starter is free and MIT-licensed.
- The AI spend spreadsheet is a free download.
- TryTokka has a free tier (1 provider) and paid plans for teams/multiple providers.

**Why "Try":**
Every product starts with "Try" because you should be able to try it — immediately, without signing up, without committing. If it's useful, keep using it.

→ https://acsaven.com
