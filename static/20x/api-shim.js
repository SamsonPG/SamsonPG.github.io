/**
 * Offline 20X demo — local CMS JSON + media, zero outside network for render.
 */
(function () {
  'use strict'
  var path = location.pathname || '/'
  var BASE = path.replace(/\/index\.html$/i, '').replace(/\/$/, '')
  if (!BASE) BASE = '.'

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

  function isExternal(url) {
    if (!url || typeof url !== 'string') return false
    var s = url.trim()
    if (!s || s.charAt(0) === '#' || s.indexOf('data:') === 0 || s.indexOf('blob:') === 0) return false
    if (s.indexOf('//') === 0) return true
    try {
      if (/^https?:/i.test(s)) return new URL(s, location.href).origin !== location.origin
    } catch (e) {
      return true
    }
    return false
  }

  function mapUrl(url) {
    if (!url || typeof url !== 'string') return url

    // CDN CSS the SPA sometimes injects for blog templates → local vendor
    if (url.indexOf('cdn.jsdelivr.net/npm/bootstrap@') >= 0) return abs('/vendor/bootstrap.min.css')
    if (url.indexOf('cdn.jsdelivr.net/npm/bootstrap-icons@') >= 0) return abs('/vendor/bootstrap-icons.min.css')

    try {
      if (url.indexOf('http') === 0) {
        var u = new URL(url, location.href)
        if (u.origin !== location.origin) return null // blocked — no outside render deps
        url = u.pathname + u.search
      }
    } catch (e) {
      return null
    }

    if (url.indexOf('/apis/') === 0 || url.indexOf('apis/') === 0) {
      if (url.charAt(0) !== '/') url = '/' + url
      var pathOnly = url.split('?')[0]
      if (API_MAP[pathOnly]) return API_MAP[pathOnly]
      if (url.indexOf('/apis/features/public') === 0) return API_MAP['/apis/features/public']
      if (url.indexOf('/apis/blog') === 0) return API_MAP['/apis/blog']
      return 'data:application/json,{"success":true,"data":[]}'
    }

    if (
      url.indexOf('/media/') === 0 ||
      url.indexOf('/images/') === 0 ||
      url.indexOf('/assets/') === 0 ||
      url.indexOf('/vendor/') === 0 ||
      url === '/og-image.jpg' ||
      url === '/favicon.ico' ||
      url === '/logo.png'
    ) {
      return abs(url.split('?')[0])
    }
    return url
  }

  var _fetch = window.fetch.bind(window)
  window.fetch = function (input, init) {
    var raw = typeof input === 'string' ? input : input && input.url
    if (isExternal(raw) && !(raw && (raw.indexOf('cdn.jsdelivr.net/npm/bootstrap') >= 0))) {
      // allow only if mapUrl remaps bootstrap CDN → local; else block
      var mappedExt = mapUrl(raw)
      if (!mappedExt || isExternal(mappedExt)) {
        return Promise.resolve(
          new Response('{"success":true,"data":null}', {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        )
      }
      return _fetch(mappedExt, init)
    }
    if (typeof input === 'string') {
      var m = mapUrl(input)
      if (m == null) {
        return Promise.resolve(
          new Response('{"success":true,"data":null}', {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        )
      }
      return _fetch(m, init)
    }
    if (input && typeof Request !== 'undefined' && input instanceof Request) {
      var mapped = mapUrl(input.url)
      if (mapped == null) {
        return Promise.resolve(
          new Response('{"success":true,"data":null}', {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        )
      }
      if (mapped !== input.url) return _fetch(new Request(mapped, input), init)
    }
    return _fetch(input, init)
  }

  function rewriteEl(el) {
    ;['src', 'href'].forEach(function (attr) {
      if (!el.getAttribute) return
      var v = el.getAttribute(attr)
      if (!v) return
      if (isExternal(v) && v.indexOf('cdn.jsdelivr.net/npm/bootstrap') < 0) {
        if (el.tagName === 'SCRIPT' || el.tagName === 'IFRAME') {
          el.removeAttribute(attr)
          el.setAttribute('data-offline-blocked', v)
          return
        }
        if (el.tagName === 'LINK') {
          var local = mapUrl(v)
          if (local && !isExternal(local)) el.setAttribute(attr, local)
          else {
            el.removeAttribute(attr)
            el.setAttribute('data-offline-blocked', v)
          }
          return
        }
      }
      var n = mapUrl(v)
      if (n && n !== v) el.setAttribute(attr, n)
    })
  }

  var _obs = new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      m.addedNodes &&
        m.addedNodes.forEach(function (node) {
          if (!node || node.nodeType !== 1) return
          rewriteEl(node)
          if (node.querySelectorAll) {
            node.querySelectorAll('img[src],source[src],link[href],script[src],iframe[src]').forEach(rewriteEl)
          }
        })
      if (m.type === 'attributes' && m.target) rewriteEl(m.target)
    })
  })

  function start() {
    document.querySelectorAll('img[src],source[src],link[href],script[src]').forEach(rewriteEl)
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
