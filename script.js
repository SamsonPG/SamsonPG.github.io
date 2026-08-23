(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var links = document.querySelectorAll('[data-nav]');
  var sections = [
    { id: 'home', el: document.getElementById('home') },
    { id: 'software', el: document.getElementById('software') },
    { id: 'path', el: document.getElementById('path') },
    { id: 'creative', el: document.getElementById('creative') },
    { id: 'faq', el: document.getElementById('faq') },
    { id: 'contact', el: document.getElementById('contact') }
  ];

  var navLockUntil = 0;

  function markNavActive(id) {
    links.forEach(function (a) {
      var match = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', match);
      if (match) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function lockNav(id, ms) {
    markNavActive(id);
    navLockUntil = Date.now() + (ms || 700);
  }

  function setActive() {
    if (Date.now() < navLockUntil) return;

    var offset = 130;
    var current = sections[0] ? sections[0].id : 'home';
    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    if (window.scrollY >= maxScroll - 16) {
      current = sections[sections.length - 1].id;
      markNavActive(current);
      return;
    }

    for (var i = sections.length - 1; i >= 0; i--) {
      var s = sections[i];
      if (!s.el) continue;
      if (s.el.getBoundingClientRect().top <= offset) {
        current = s.id;
        break;
      }
    }

    markNavActive(current);
  }

  function syncFromHash() {
    var id = window.location.hash.slice(1);
    if (!id) return;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === id) {
        lockNav(id, 800);
        return;
      }
    }
  }

  window.addEventListener('scroll', setActive, { passive: true });
  syncFromHash();
  setActive();

  links.forEach(function (a) {
    a.addEventListener('click', function () {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      lockNav(href.slice(1), 800);
      window.setTimeout(setActive, 850);
    });
  });

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

  var creativeAccordion = document.querySelector('.creative-accordion');
  function openCreativeIfTargeted() {
    if (!creativeAccordion) return;
    if (window.location.hash === '#creative') creativeAccordion.open = true;
  }
  openCreativeIfTargeted();
  window.addEventListener('hashchange', function () {
    syncFromHash();
    window.setTimeout(setActive, 850);
    openCreativeIfTargeted();
  });
})();
