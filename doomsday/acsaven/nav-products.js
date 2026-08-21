/**
 * Products <details> dropdown: close on outside click, Escape, or menu item select.
 */
(function () {
  function closeAll(except) {
    document.querySelectorAll('details.nav-products[open]').forEach(function (el) {
      if (el !== except) el.removeAttribute('open');
    });
  }

  document.addEventListener(
    'click',
    function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return;

      // Autoclose after choosing a product / panel link
      var panelLink = t.closest('details.nav-products .nav-products-panel a');
      if (panelLink) {
        var parent = panelLink.closest('details.nav-products');
        if (parent) parent.removeAttribute('open');
        return;
      }

      var open = document.querySelector('details.nav-products[open]');
      if (!open) return;
      if (open.contains(t)) return;
      closeAll();
    },
    true,
  );

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('details.nav-products[open]');
    if (!open) return;
    closeAll();
    var summary = open.querySelector('summary');
    if (summary instanceof HTMLElement) summary.focus();
  });
})();
