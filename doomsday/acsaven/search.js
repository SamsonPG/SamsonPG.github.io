/**
 * Client-side search palette for Acsaven.
 * Loads /search-index.json from this origin only (no third-party).
 */
(function () {
  const ITEMS_URL = '/search-index.json';

  const BRAND_TOKENS = ['acsaven', 'tryquickimg', 'trydevsnip', 'trycalculatingnow', 'trytokka'];
  const BRAND_ALIASES = {
    acsavan: 'acsaven',
    acsavin: 'acsaven',
    acsavon: 'acsaven',
    acsavem: 'acsaven',
    aksaven: 'acsaven',
    axaven: 'acsaven',
    accsaven: 'acsaven',
    acssaven: 'acsaven',
    asaven: 'acsaven',
    acaven: 'acsaven',
    acsaen: 'acsaven',
    acsavn: 'acsaven',
    acsave: 'acsaven',
    saven: 'acsaven',
    acseven: 'acsaven',
    acsavenhq: 'acsaven',
    acsavencom: 'acsaven',
    acsawen: 'acsaven',
    acsavrn: 'acsaven',
    acsavwn: 'acsaven',
    acsavne: 'acsaven',
    acasven: 'acsaven',
    casaven: 'acsaven',
    tryquickimage: 'tryquickimg',
    tryquickimge: 'tryquickimg',
    tryquickimgg: 'tryquickimg',
    tryqickimg: 'tryquickimg',
    triquickimg: 'tryquickimg',
    tryquickim: 'tryquickimg',
    quickimg: 'tryquickimg',
    quickimage: 'tryquickimg',
    tryquick: 'tryquickimg',
    trydevsnips: 'trydevsnip',
    trydevsnipp: 'trydevsnip',
    trydevsnop: 'trydevsnip',
    devsnip: 'trydevsnip',
    devsnips: 'trydevsnip',
    trydev: 'trydevsnip',
    trycalcnest: 'trycalculatingnow',
    trycalcnst: 'trycalculatingnow',
    calcnest: 'trycalculatingnow',
    calculatingnow: 'trycalculatingnow',
    trycalculating: 'trycalculatingnow',
    trycalcnow: 'trycalculatingnow',
    trycalnow: 'trycalculatingnow',
    trycalculatinow: 'trycalculatingnow',
    tryakka: 'trytokka',
    trytoka: 'trytokka',
    trytokkaa: 'trytokka',
  };

  function oneEdit(a, b) {
    if (a === b) return true;
    const la = a.length;
    const lb = b.length;
    if (Math.abs(la - lb) > 1) return false;
    let i = 0;
    let j = 0;
    let edits = 0;
    while (i < la && j < lb) {
      if (a[i] === b[j]) {
        i += 1;
        j += 1;
        continue;
      }
      edits += 1;
      if (edits > 1) return false;
      if (la > lb) i += 1;
      else if (lb > la) j += 1;
      else {
        i += 1;
        j += 1;
      }
    }
    return edits + (la - i) + (lb - j) <= 1;
  }

  function expandBrandQuery(raw) {
    const q = String(raw || '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()
      .replace(/\s+/g, ' ');
    if (!q) return '';
    const compacted = q.replace(/\s+/g, '');
    if (BRAND_ALIASES[compacted]) return BRAND_ALIASES[compacted];
    if (compacted.length >= 5) {
      for (const brand of BRAND_TOKENS) {
        if (oneEdit(compacted, brand)) return brand;
      }
    }
    return q
      .split(' ')
      .map((w) => {
        if (BRAND_ALIASES[w]) return BRAND_ALIASES[w];
        if (w.length >= 5) {
          for (const brand of BRAND_TOKENS) {
            if (oneEdit(w, brand)) return brand;
          }
        }
        return w;
      })
      .join(' ');
  }

  function matchSearch(items, q) {
    const tokens = expandBrandQuery(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    return items
      .map((it) => {
        const hay = `${it.title} ${it.description} ${it.keywords || ''} ${it.category}`.toLowerCase();
        let score = 0;
        for (const t of tokens) {
          if (!hay.includes(t)) return null;
          if (it.title.toLowerCase().includes(t)) score += 3;
          else score += 1;
        }
        return { it, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || a.it.title.localeCompare(b.it.title))
      .map((x) => x.it);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  }

  function ensureDialog() {
    let dialog = document.getElementById('site-search-dialog');
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.id = 'site-search-dialog';
    dialog.className = 'search-dialog';
    dialog.setAttribute('aria-labelledby', 'site-search-title');
    dialog.innerHTML = `
      <div class="search-dialog-form" role="search">
        <p id="site-search-title" class="visually-hidden">Search Acsaven</p>
        <div class="search-dialog-bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            id="site-search-input"
            type="search"
            inputmode="search"
            autocomplete="off"
            placeholder="Search products &amp; pages…"
            aria-label="Search products and pages"
            aria-autocomplete="list"
            aria-controls="site-search-results"
            aria-describedby="site-search-status"
          />
          <button type="button" id="site-search-close" class="search-dialog-close" aria-label="Close search">Close</button>
        </div>
        <p id="site-search-status" class="visually-hidden" role="status" aria-live="polite"></p>
        <ul id="site-search-results" class="search-results" role="listbox" aria-label="Search results" tabindex="0"></ul>
        <p class="search-dialog-foot">
          <a href="/tools/">All tools</a>
          <span class="search-dialog-hint"><kbd>↑</kbd><kbd>↓</kbd> move · <kbd>↵</kbd> open</span>
        </p>
      </div>`;
    document.body.appendChild(dialog);
    return dialog;
  }

  const dialog = ensureDialog();
  const input = document.getElementById('site-search-input');
  const results = document.getElementById('site-search-results');
  const status = document.getElementById('site-search-status');
  const openBtn = document.getElementById('site-search-open');
  if (!dialog || !input || !results || !status || typeof dialog.showModal !== 'function') return;

  let items = [];
  let loaded = false;
  let active = -1;
  let current = [];
  let lastQuery = null;
  let renderTimer = 0;
  const RESULT_CAP = 10;
  const RENDER_DEBOUNCE_MS = 100;

  openBtn?.setAttribute('aria-expanded', 'false');
  openBtn?.setAttribute('aria-controls', 'site-search-dialog');
  openBtn?.setAttribute('aria-haspopup', 'dialog');

  async function ensureIndex() {
    if (loaded) return;
    try {
      const res = await fetch(ITEMS_URL);
      items = await res.json();
      loaded = true;
    } catch {
      results.innerHTML =
        '<li class="search-empty" role="option" aria-disabled="true">Search unavailable — close this and browse from the menu above.</li>';
    }
  }

  function syncActiveDescendant() {
    if (active >= 0) input.setAttribute('aria-activedescendant', `site-search-option-${active}`);
    else input.removeAttribute('aria-activedescendant');
  }

  function render() {
    const q = input.value.trim();
    if (q === lastQuery) return;
    lastQuery = q;
    if (!q) {
      current = [];
      active = -1;
      status.textContent = '';
      results.innerHTML = `<li class="search-empty" role="option" aria-disabled="true">Type to search ${items.length} pages…</li>`;
      syncActiveDescendant();
      return;
    }
    current = matchSearch(items, q).slice(0, RESULT_CAP);
    active = current.length ? 0 : -1;
    if (!current.length) {
      status.textContent = `No matches for ${q}`;
      results.innerHTML = `<li class="search-empty" role="option" aria-disabled="true">No matches for “${escapeHtml(q)}”. Browse <a href="/tools/">All tools</a> for workshop links.</li>`;
      syncActiveDescendant();
      return;
    }
    status.textContent = `${current.length} result${current.length === 1 ? '' : 's'}`;
    results.innerHTML = current
      .map(
        (it, i) =>
          `<li class="search-result${i === active ? ' is-active' : ''}" role="presentation">` +
          `<a href="${it.href}" role="option" id="site-search-option-${i}" aria-selected="${i === active ? 'true' : 'false'}" tabindex="-1"><span class="search-result-cat">${escapeHtml(it.category)}</span>` +
          `<span class="search-result-title">${escapeHtml(it.title)}</span>` +
          `<span class="search-result-desc">${escapeHtml(it.description)}</span></a></li>`,
      )
      .join('');
    syncActiveDescendant();
  }

  function scheduleRender() {
    if (renderTimer) window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(() => {
      renderTimer = 0;
      render();
    }, RENDER_DEBOUNCE_MS);
  }

  function paint() {
    const els = results.querySelectorAll('.search-result');
    els.forEach((el, i) => {
      const on = i === active;
      el.classList.toggle('is-active', on);
      el.querySelector('a')?.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    els[active]?.scrollIntoView({ block: 'nearest' });
    syncActiveDescendant();
  }

  function move(delta) {
    if (!current.length) return;
    active = (active + delta + current.length) % current.length;
    paint();
  }

  function go() {
    const item = current[active] ?? current[0];
    if (item) location.href = item.href;
  }

  async function open() {
    if (dialog.open) return;
    dialog.showModal();
    openBtn?.setAttribute('aria-expanded', 'true');
    await ensureIndex();
    lastQuery = null;
    render();
    input.focus();
  }

  openBtn?.addEventListener('click', open);
  document.getElementById('site-search-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    openBtn?.setAttribute('aria-expanded', 'false');
    active = -1;
    input.removeAttribute('aria-activedescendant');
    openBtn?.focus();
  });

  document.addEventListener('keydown', (e) => {
    const t = e.target;
    const typing =
      t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      open();
    }
  });

  input.addEventListener('input', scheduleRender);
  input.addEventListener('change', render);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      move(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      move(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go();
    }
  });

  const bootQ = new URLSearchParams(location.search).get('q');
  if (bootQ) {
    input.value = bootQ;
    open();
  }
})();
