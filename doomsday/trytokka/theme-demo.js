/**
 * Offline TryTokka demo — light / dark / system theme (no React hydration).
 * Mirrors lib/theme.ts + ThemeToggle click behavior.
 */
(function () {
  var KEY = 'trytokka-theme'
  var CANVAS = { light: '#F2F9F5', dark: '#080C0B' }

  function getPreference() {
    try {
      var s = localStorage.getItem(KEY)
      if (s === 'light' || s === 'dark') return s
    } catch (e) {}
    return 'system'
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function resolve(pref) {
    return pref === 'system' ? getSystemTheme() : pref
  }

  function apply(theme) {
    var root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', CANVAS[theme] || CANVAS.dark)
  }

  function syncButtons(pref) {
    ;['light', 'dark', 'system'].forEach(function (id) {
      document.querySelectorAll('[data-testid="theme-toggle-' + id + '"]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', pref === id ? 'true' : 'false')
        btn.setAttribute('aria-disabled', 'false')
        btn.classList.remove('pointer-events-none', 'opacity-50')
      })
    })
    document.querySelectorAll('.theme-switch').forEach(function (el) {
      el.classList.add('theme-switch--ready')
      el.classList.remove('theme-switch--pending')
    })
  }

  function setPreference(pref) {
    try {
      if (pref === 'system') localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, pref)
    } catch (e) {}
    apply(resolve(pref))
    syncButtons(pref)
  }

  function boot() {
    var pref = getPreference()
    apply(resolve(pref))
    syncButtons(pref)

    document.addEventListener('click', function (ev) {
      var btn = ev.target && ev.target.closest
        ? ev.target.closest('[data-testid^="theme-toggle-"]')
        : null
      if (!btn) return
      ev.preventDefault()
      ev.stopPropagation()
      var id = (btn.getAttribute('data-testid') || '').replace('theme-toggle-', '')
      if (id === 'light' || id === 'dark' || id === 'system') setPreference(id)
    })

    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (getPreference() === 'system') apply(getSystemTheme())
      })
    } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
  else boot()
})()
