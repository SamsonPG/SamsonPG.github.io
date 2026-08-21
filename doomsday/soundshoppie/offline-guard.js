/**
 * Doomsday offline guard — no outside network for rendering.
 * Same-origin (this Pages folder) only. Blocks fetch/XHR/beacons and
 * strips dynamically injected external <script>/<link>.
 */
(function () {
  'use strict'
  if (window.__DOOMSDAY_OFFLINE__) return
  window.__DOOMSDAY_OFFLINE__ = true

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

  var _fetch = window.fetch.bind(window)
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : input && input.url
    if (isExternal(url)) return emptyJson()
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
})()
