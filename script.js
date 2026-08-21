(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Active nav */
  var links = document.querySelectorAll('[data-nav]');
  var sections = [
    { id: 'software', el: document.getElementById('software') },
    { id: 'path', el: document.getElementById('path') },
    { id: 'creative', el: document.getElementById('creative') },
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
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* Mobile drawer */
  var menuBtn = document.querySelector('.top__menu');
  var drawer = document.getElementById('mobile-drawer');
  function closeDrawer() {
    if (!drawer || !menuBtn) return;
    drawer.classList.remove('is-open');
    drawer.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
  }
  function openDrawer() {
    if (!drawer || !menuBtn) return;
    drawer.hidden = false;
    drawer.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
  }
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) closeDrawer();
      else openDrawer();
    });
    drawer.querySelectorAll('[data-drawer-link]').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

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
