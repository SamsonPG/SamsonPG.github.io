/**
 * static offline guard — no outside network for rendering.
 * Same-origin (this Pages folder) only. Blocks fetch/XHR/beacons and
 * strips dynamically injected external <script>/<link>.
 */
(function () {
  'use strict'
  if (window.__static_OFFLINE__) return
  window.__static_OFFLINE__ = true

  function isExternal(url) {
    if (!url || typeof url !== 'string') return false
    var s = url.trim()
    if (!s || s.charAt(0) === '#' || s.indexOf('data:') === 0 || s.indexOf('blob:') === 0) return false
    if (s.indexOf('//') === 0) return true
    try {
      if (/^https?:/i.test(s)) {
        var u = new URL(s, location.href)
        return u.origin !== location.origin
      }
    } catch (e) {
      return /^https?:/i.test(s)
    }
    return false
  }

  function emptyJson() {
    return Promise.resolve(
      new Response('{"success":true,"data":null}', {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
  }

  function emptyOk() {
    return Promise.resolve(new Response('', { status: 204 }))
  }

  /*
    The demo endpoints do not exist here, and a 404 is the wrong thing to show for it.

    This folder is a capture of a page whose ask box talks to a Cloudflare Worker. On GitHub
    Pages that Worker is absent, so /ask returned 404 and the page reported "Something went
    wrong: HTTP 404" — describing a working system as a broken one, to the audience most
    likely to be evaluating it.

    This lives in the guard rather than in the capture script on purpose: the guard is copied
    with the page, so a later re-capture cannot quietly lose the explanation. That has already
    happened once.

    The reply is shaped to match what the page expects. In events mode that is a server-sent
    error frame, which the page's existing handler already renders properly, rather than a
    second code path that would have to be kept in step with the first.
  */
  var DEMO_API = /^\/(ask|agent)(\/|$|\?)/
  var NOTICE =
    'This is a static copy, kept so the design and the measured results survive if the live ' +
    'demo is unreachable. Answering needs the Cloudflare Worker, which is not part of this ' +
    'copy — the live demo is at https://llmdocs.acsaven.com and the measurements are in ../results/.'

  function demoPath(url) {
    try {
      var full = new URL(url, location.href)
      if (full.origin !== location.origin) return ''
      // The capture is served from a subfolder, so compare against the folder root.
      var base = location.pathname.replace(/[^/]*$/, '')
      return full.pathname.indexOf(base) === 0 ? '/' + full.pathname.slice(base.length) : full.pathname
    } catch (e) {
      return String(url || '')
    }
  }

  function staticNotice(url) {
    if (/[?&]events=1(&|$)/.test(String(url || ''))) {
      var frame =
        'event: error\ndata: ' +
        JSON.stringify({ reason: 'static', message: NOTICE }) +
        '\n\n'
      return Promise.resolve(
        new Response(frame, {
          status: 200,
          headers: { 'Content-Type': 'text/event-stream; charset=utf-8' },
        }),
      )
    }
    return Promise.resolve(
      new Response(NOTICE, {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'x-sources': '%5B%5D' },
      }),
    )
  }

  var _fetch = window.fetch.bind(window)
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : input && input.url
    if (isExternal(url)) return emptyJson()
    if (DEMO_API.test(demoPath(url))) return staticNotice(url)
    return _fetch(input, init)
  }

  if (window.XMLHttpRequest) {
    var XO = XMLHttpRequest.prototype.open
    var XS = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.open = function (method, url) {
      this.__dd_ext = isExternal(String(url || ''))
      if (!this.__dd_ext) return XO.apply(this, arguments)
      this.__dd_blocked = true
      return XO.call(this, method, 'data:application/json,{}', true)
    }
    XMLHttpRequest.prototype.send = function () {
      if (this.__dd_blocked) {
        var self = this
        setTimeout(function () {
          Object.defineProperty(self, 'status', { value: 200 })
          Object.defineProperty(self, 'responseText', { value: '{}' })
          if (self.onreadystatechange) self.onreadystatechange()
          if (self.onload) self.onload()
        }, 0)
        return
      }
      return XS.apply(this, arguments)
    }
  }

  if (navigator.sendBeacon) {
    navigator.sendBeacon = function () {
      return true
    }
  }

  var _append = Element.prototype.appendChild
  var _insert = Element.prototype.insertBefore
  function scrubNode(node) {
    if (!node || node.nodeType !== 1) return node
    var tag = node.tagName
    if (tag === 'SCRIPT' || tag === 'LINK' || tag === 'IFRAME' || tag === 'IMG') {
      var attr = tag === 'LINK' ? 'href' : 'src'
      var v = node.getAttribute && node.getAttribute(attr)
      if (isExternal(v)) {
        if (tag === 'SCRIPT' || tag === 'IFRAME') {
          node.removeAttribute(attr)
          node.type = 'text/plain'
          node.setAttribute('data-offline-blocked', v)
        } else if (tag === 'LINK') {
          node.removeAttribute('href')
          node.setAttribute('data-offline-blocked', v)
        } else if (tag === 'IMG') {
          // keep broken-external images from hanging; use transparent pixel
          node.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
          node.setAttribute('data-offline-blocked', v)
        }
      }
    }
    return node
  }
  Element.prototype.appendChild = function (child) {
    return _append.call(this, scrubNode(child))
  }
  Element.prototype.insertBefore = function (newNode, ref) {
    return _insert.call(this, scrubNode(newNode), ref)
  }

  // Block Image() constructor loading remote URLs used for tracking pixels
  if (typeof Image !== 'undefined') {
    var _Image = Image
    window.Image = function (w, h) {
      var img = new _Image(w, h)
      var desc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src')
      if (desc && desc.set) {
        Object.defineProperty(img, 'src', {
          configurable: true,
          enumerable: true,
          get: function () {
            return desc.get.call(this)
          },
          set: function (v) {
            if (isExternal(v)) v = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            desc.set.call(this, v)
          },
        })
      }
      return img
    }
    window.Image.prototype = _Image.prototype
  }

  // Neutralize any external <img>/<script>/<link>/<iframe> already in the document
  function scrubDocument() {
    var nodes = document.querySelectorAll('img[src],script[src],iframe[src],link[href]')
    for (var i = 0; i < nodes.length; i++) scrubNode(nodes[i])
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrubDocument)
  } else {
    scrubDocument()
  }
})()
