(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var links = document.querySelectorAll('[data-nav]');
  var sections = [
    { id: 'software', el: document.getElementById('software') },
    { id: 'path', el: document.getElementById('path') },
    { id: 'creative', el: document.getElementById('creative') },
    { id: 'faq', el: document.getElementById('faq') },
    { id: 'contact', el: document.getElementById('contact') }
  ];

  function setActive() {
    var y = window.scrollY + 130;
    var current = 'software';
    sections.forEach(function (s) {
      if (!s.el) return;
      var top = s.el.getBoundingClientRect().top + window.scrollY;
      if (top <= y) current = s.id;
    });
    links.forEach(function (a) {
      var match = a.getAttribute('href') === '#' + current;
      a.classList.toggle('is-active', match);
      if (match) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* Acsaven-style dialog drawer */
  var dialog = document.getElementById('site-nav-dialog');
  var openBtn = document.getElementById('site-nav-open');
  var closeBtn = document.getElementById('site-nav-close');
  var dockMenu = document.querySelector('[data-dock-menu]');

  function openNav() {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }
  if (openBtn) openBtn.addEventListener('click', openNav);
  if (dockMenu) dockMenu.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeNav();
    });
    dialog.querySelectorAll('[data-drawer-link]').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* Lightweight reveal */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal, .soft-card, .rail__step, .publish__card').forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
  }
})();
