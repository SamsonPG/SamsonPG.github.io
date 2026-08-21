/**
 * Offline 20X demo — remap absolute /apis|/media|/images to this folder
 * and serve cached CMS JSON for homepage APIs.
 */
(function () {
  var path = location.pathname || '/'
  // /doomsday/20x/ or /doomsday/20x/index.html → /doomsday/20x
  var BASE = path.replace(/\/index\.html$/i, '').replace(/\/$/, '')
  if (!BASE || BASE === '') BASE = '.'

  function abs(rel) {
    if (BASE === '.') return rel.replace(/^\//, './')
    return BASE + (rel.charAt(0) === '/' ? rel : '/' + rel)
  }

  var API_MAP = {
    '/apis/home-content': abs('/api-json/home-content.json'),
    '/apis/features/public': abs('/api-json/features-public.json'),
    '/apis/footer/all': abs('/api-json/footer-all.json'),
    '/apis/meta-data/global': abs('/api-json/meta-global.json'),
    '/apis/meta-data/page/home/default': abs('/api-json/meta-home.json'),
    '/apis/settings': abs('/api-json/settings.json'),
    '/apis/blog': abs('/api-json/blog-published.json'),
  }

  function mapUrl(url) {
    if (!url || typeof url !== 'string') return url
    // absolute same-origin
    try {
      if (url.indexOf('http') === 0) {
        var u = new URL(url, location.href)
        if (u.origin === location.origin) url = u.pathname + u.search
        else return url
      }
    } catch (e) {}

    if (url.indexOf('/apis/') === 0) {
      var pathOnly = url.split('?')[0]
      if (API_MAP[pathOnly]) return API_MAP[pathOnly]
      if (url.indexOf('/apis/features/public') === 0) return API_MAP['/apis/features/public']
      if (url.indexOf('/apis/blog') === 0) return API_MAP['/apis/blog']
      // unknown API → empty JSON so UI doesn't crash
      return 'data:application/json,{"success":true,"data":[]}'
    }

    if (
      url.indexOf('/media/') === 0 ||
      url.indexOf('/images/') === 0 ||
      url.indexOf('/assets/') === 0 ||
      url === '/og-image.jpg' ||
      url === '/favicon.ico' ||
      url === '/logo.png'
    ) {
      return abs(url.split('?')[0])
    }
    return url
  }

  var _fetch = window.fetch
  window.fetch = function (input, init) {
    if (typeof input === 'string') {
      return _fetch.call(this, mapUrl(input), init)
    }
    if (input && typeof Request !== 'undefined' && input instanceof Request) {
      var mapped = mapUrl(input.url)
      if (mapped !== input.url) {
        return _fetch.call(this, new Request(mapped, input), init)
      }
    }
    return _fetch.call(this, input, init)
  }

  // <img src="/media/..."> set after hydrate — patch Image/src via HTML base is weak;
  // also rewrite existing absolute URLs when DOM updates
  var _obs = new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      m.addedNodes &&
        m.addedNodes.forEach(function (node) {
          if (!node || node.nodeType !== 1) return
          if (node.tagName === 'IMG' || node.tagName === 'SOURCE') rewriteEl(node)
          if (node.querySelectorAll) {
            node.querySelectorAll('img[src],source[src],link[href],script[src]').forEach(rewriteEl)
          }
        })
      if (m.type === 'attributes' && m.target) rewriteEl(m.target)
    })
  })

  function rewriteEl(el) {
    ;['src', 'href'].forEach(function (attr) {
      if (!el.getAttribute) return
      var v = el.getAttribute(attr)
      if (!v) return
      var n = mapUrl(v)
      if (n && n !== v) el.setAttribute(attr, n)
    })
  }

  function start() {
    document.querySelectorAll('img[src],source[src]').forEach(rewriteEl)
    _obs.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'href'],
    })
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start)
  else start()

  window.__XX_DEMO_BASE__ = BASE
})()
