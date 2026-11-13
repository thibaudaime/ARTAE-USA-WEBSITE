/* ARTAE USA — language toggle, mobile nav, cookie banner, contact form */
(function () {
  var html = document.documentElement;

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ---- Language ---- */
  function applyLang(lang) {
    html.setAttribute('lang', lang);
    var btns = document.querySelectorAll('.lang');
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = lang === 'en' ? 'FR' : 'EN';
      btns[i].setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
    }
    var t = document.querySelector('title');
    if (t) {
      var en = t.getAttribute('data-en'), fr = t.getAttribute('data-fr');
      if (en && fr) t.textContent = lang === 'en' ? en : fr;
    }
  }
  var saved = read('artae-lang');
  if (saved !== 'en' && saved !== 'fr') {
    var nav = (navigator.language || 'en').toLowerCase();
    saved = nav.indexOf('fr') === 0 ? 'fr' : 'en';
  }
  applyLang(saved);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang');
    if (!b) return;
    var next = html.getAttribute('lang') === 'en' ? 'fr' : 'en';
    applyLang(next);
    store('artae-lang', next);
  });

  /* ---- Mobile nav ---- */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Cookie banner (no tracking scripts are loaded on this site) ---- */
  var ck = document.querySelector('.cookies');
  if (ck && !read('artae-cookies')) ck.classList.add('show');
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-cookie]');
    if (!b || !ck) return;
    store('artae-cookies', b.getAttribute('data-cookie'));
    ck.classList.remove('show');
  });

  /* ---- Contact form: no server yet, so we show the message to copy/send ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lang = html.getAttribute('lang');
      var lines = [
        (lang === 'fr' ? 'Nom : ' : 'Name: ') + (f.get('name') || ''),
        'Email: ' + (f.get('email') || ''),
        (lang === 'fr' ? 'Téléphone : ' : 'Phone: ') + (f.get('phone') || ''),
        (lang === 'fr' ? 'Projet : ' : 'Project: ') + (f.get('project') || ''),
        'Budget: ' + (f.get('budget') || ''),
        '',
        f.get('message') || ''
      ];
      var out = document.querySelector('#form-out');
      var ok = document.querySelector('.form-ok');
      if (out) out.textContent = lines.join('\n');
      form.style.display = 'none';
      if (ok) ok.classList.add('show');
      var copy = document.querySelector('#copy-msg');
      if (copy) {
        copy.onclick = function () {
          try {
            navigator.clipboard.writeText(lines.join('\n')).then(function () {
              copy.textContent = lang === 'fr' ? 'Copié ✓' : 'Copied ✓';
            }, function () {});
          } catch (err) {}
        };
      }
    });
  }


  /* ---- Simple carousel (testimonials) ---- */
  document.querySelectorAll('[data-carousel]').forEach(function (box) {
    var track = box.querySelector('.tm-track');
    var prev = box.querySelector('.tm-prev');
    var next = box.querySelector('.tm-next');
    if (!track) return;
    function step() {
      var s = track.querySelector('.tm-slide');
      return s ? s.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 300;
    }
    function go(dir) {
      var max = track.scrollWidth - track.clientWidth;
      var target = track.scrollLeft + dir * step();
      if (dir > 0 && track.scrollLeft >= max - 4) target = 0;
      if (dir < 0 && track.scrollLeft <= 4) target = max;
      track.scrollTo({ left: target, behavior: 'smooth' });
    }
    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });
  });

  /* ---- Year ---- */
  var y = document.querySelector('#year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
