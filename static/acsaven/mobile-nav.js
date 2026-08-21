/**
 * Mobile hamburger drawer — matches Try utility sites (dialog + aria-expanded).
 */
(function () {
  var dialog = document.getElementById('site-nav-dialog');
  var openBtn = document.getElementById('site-nav-open');
  var closeBtn = document.getElementById('site-nav-close');
  if (!dialog || !openBtn) return;

  function setExpanded(open) {
    openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function open() {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    setExpanded(true);
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    setExpanded(false);
    openBtn.focus();
  }

  openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', function () {
    setExpanded(false);
    if (document.activeElement === dialog || dialog.contains(document.activeElement)) {
      openBtn.focus();
    }
  });
})();
