/**
 * Best-effort: size + center the installed desktop PWA window once per session.
 * Matches TryTokka's StandaloneWindowCenter — OS may still block resize/move.
 */
(function () {
  var SESSION_KEY = 'acsaven-pwa-window-placed';
  var DEFAULT_WIDTH = 1280;
  var DEFAULT_HEIGHT = 840;

  var standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: window)').matches ||
    window.navigator.standalone === true;
  if (!standalone) return;
  if (!window.matchMedia('(min-width: 1024px)').matches) return;
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
  } catch (e) {
    return;
  }

  var width = Math.min(DEFAULT_WIDTH, window.screen.availWidth - 48);
  var height = Math.min(DEFAULT_HEIGHT, window.screen.availHeight - 48);
  var left = Math.round((window.screen.width - width) / 2);
  var top = Math.round((window.screen.height - height) / 2);

  try {
    window.resizeTo(width, height);
    window.moveTo(left, top);
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch (e) {
    /* resize/move blocked in some browsers */
  }

  document.documentElement.dataset.pwa = 'standalone';
})();
