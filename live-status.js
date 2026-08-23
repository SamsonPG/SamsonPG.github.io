/**
 * Per-product live swap: show Open live when reachable; otherwise show Offline demo
 * in the same primary slot. No hub / global offline button.
 * Probes start after load + idle so they do not inflate Lighthouse TBT.
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
      el.removeAttribute('hidden')
      el.removeAttribute('aria-hidden')
      el.style.removeProperty('display')
    } else {
      el.hidden = true
      el.setAttribute('hidden', '')
      el.setAttribute('aria-hidden', 'true')
      el.style.display = 'none'
    }
  }

  function applyPair(liveBtn, demoBtn, up) {
    setVisible(liveBtn, up)
    setVisible(demoBtn, !up)
  }

  function runProbes() {
    var pairs = document.querySelectorAll('[data-live-open][data-live-check]')
    if (!pairs.length) return

    pairs.forEach(function (liveBtn) {
      var demoBtn = liveBtn.parentElement
        ? liveBtn.parentElement.querySelector('[data-demo-open]')
        : null
      if (!demoBtn) return

      applyPair(liveBtn, demoBtn, true)

      var live = liveBtn.getAttribute('data-live-check')
      if (!live) {
        applyPair(liveBtn, demoBtn, false)
        return
      }

      probe(live).then(function (up) {
        applyPair(liveBtn, demoBtn, up)
      })
    })
  }

  function schedule() {
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(runProbes, { timeout: 2500 })
    } else {
      setTimeout(runProbes, 1)
    }
  }

  if (document.readyState === 'complete') schedule()
  else window.addEventListener('load', schedule)
})()
