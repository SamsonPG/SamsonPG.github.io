/**
 * Show "Offline demo" only when the live product origin is unreachable.
 * Live CTAs stay as-is. Uses no-cors probes (opaque OK = reachable).
 */
(function () {
  var TIMEOUT_MS = 4500

  function probe(url) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null
    var timer = setTimeout(function () {
      if (ctrl) ctrl.abort()
    }, TIMEOUT_MS)

    var opts = { method: 'GET', mode: 'no-cors', cache: 'no-store', credentials: 'omit' }
    if (ctrl) opts.signal = ctrl.signal

    return fetch(url, opts)
      .then(function () {
        clearTimeout(timer)
        return true
      })
      .catch(function () {
        clearTimeout(timer)
        // Fallback: image ping (some networks block fetch oddly)
        return new Promise(function (resolve) {
          var img = new Image()
          var done = false
          function finish(ok) {
            if (done) return
            done = true
            resolve(ok)
          }
          img.onload = function () {
            finish(true)
          }
          img.onerror = function () {
            finish(false)
          }
          setTimeout(function () {
            finish(false)
          }, TIMEOUT_MS)
          try {
            var u = new URL(url)
            img.src = u.origin + '/favicon.ico?_=' + Date.now()
          } catch (e) {
            finish(false)
          }
        })
      })
  }

  function setVisible(el, on) {
    if (!el) return
    if (on) {
      el.hidden = false
      el.removeAttribute('aria-hidden')
    } else {
      el.hidden = true
      el.setAttribute('aria-hidden', 'true')
    }
  }

  var demos = document.querySelectorAll('[data-live-check]')
  var hub = document.querySelectorAll('[data-offline-hub]')
  if (!demos.length) return

  // Hide until we know a site is down (avoid flashing when everything is up)
  demos.forEach(function (el) {
    setVisible(el, false)
  })
  hub.forEach(function (el) {
    setVisible(el, false)
  })

  var pending = demos.length
  var anyDown = false

  demos.forEach(function (el) {
    var live = el.getAttribute('data-live-check')
    if (!live) {
      setVisible(el, true)
      pending -= 1
      return
    }
    probe(live).then(function (up) {
      if (!up) {
        anyDown = true
        setVisible(el, true)
      } else {
        setVisible(el, false)
      }
      pending -= 1
      if (pending <= 0) {
        hub.forEach(function (h) {
          setVisible(h, anyDown)
        })
      }
    })
  })
})()
