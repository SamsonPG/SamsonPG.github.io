/**
 * Theme toggle — Light / Dark / System (matches Try utility sites).
 * Preference in localStorage only for light/dark; system clears storage.
 */
(function () {
  const KEY = 'acsaven-theme';
  const LIGHT_META = '#f3f4f6';
  const DARK_META = '#101216';

  function boot(root) {
    const key = root.getAttribute('data-theme-key') || KEY;
    const lightMeta = root.getAttribute('data-theme-light') || LIGHT_META;
    const darkMeta = root.getAttribute('data-theme-dark') || DARK_META;
    const buttons = Array.from(root.querySelectorAll('[data-theme-pref]'));

    function getStored() {
      try {
        const s = localStorage.getItem(key);
        if (s === 'light' || s === 'dark') return s;
      } catch {
        /* private browsing */
      }
      return 'system';
    }

    function getSystem() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function resolve(pref) {
      return pref === 'system' ? getSystem() : pref;
    }

    function apply(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', theme === 'dark' ? darkMeta : lightMeta);
    }

    function syncPressed(pref) {
      // Keep every Light/Dark/System control in sync (header + drawer).
      document.querySelectorAll('.theme-switch[data-theme-key] [data-theme-pref]').forEach((btn) => {
        const id = btn.getAttribute('data-theme-pref');
        btn.setAttribute('aria-pressed', id === pref ? 'true' : 'false');
      });
    }

    function setPreference(pref) {
      try {
        if (pref === 'system') localStorage.removeItem(key);
        else localStorage.setItem(key, pref);
      } catch {
        /* ignore */
      }
      apply(resolve(pref));
      syncPressed(pref);
    }

    const initial = getStored();
    apply(resolve(initial));
    syncPressed(initial);
    root.classList.remove('theme-switch--pending');
    root.classList.add('theme-switch--ready');

    for (const btn of buttons) {
      btn.addEventListener('click', () => {
        const pref = btn.getAttribute('data-theme-pref');
        if (pref === 'light' || pref === 'dark' || pref === 'system') setPreference(pref);
      });
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      if (getStored() !== 'system') return;
      apply(getSystem());
      syncPressed('system');
    });

    window.addEventListener('storage', (event) => {
      if (event.key !== key) return;
      const pref = getStored();
      apply(resolve(pref));
      syncPressed(pref);
    });
  }

  document.querySelectorAll('.theme-switch[data-theme-key]').forEach((el) => boot(el));
})();
