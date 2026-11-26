/* ARTAE USA — language toggle, mobile nav, cookie banner, contact form */
(function () {
  var html = document.documentElement;

  document.documentElement.classList.add('js');
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
    var tr = document.querySelectorAll('option[data-en], textarea[data-en]');
    for (var k = 0; k < tr.length; k++) {
      var txt = tr[k].getAttribute('data-' + lang);
      if (tr[k].tagName === 'TEXTAREA') tr[k].setAttribute('placeholder', txt);
      else tr[k].textContent = txt;
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



  /* ---- Webinar registration: opens the visitor's mail app with a pre-filled message ---- */
  var wf = document.querySelector('#webinar-form');
  if (wf) {
    wf.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(wf);
      var name = (f.get('name') || '').toString().trim();
      var mail = (f.get('email') || '').toString().trim();
      var err = wf.querySelector('.form-err');
      if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail) || !f.get('consent')) {
        if (err) err.style.display = 'block';
        return;
      }
      if (err) err.style.display = 'none';
      var body = 'Nom / Name: ' + name + '\nEmail: ' + mail + '\nTéléphone / Phone: ' + (f.get('phone') || '') + '\n\nJe souhaite m\u2019inscrire au webinaire du 03/12.';
      window.location.href = 'mailto:thibaud@artae.immo?subject=' + encodeURIComponent('Inscription webinaire du 03/12') + '&body=' + encodeURIComponent(body);
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

  /* ---- Concierge page: tabs, scroll reveal, video ---- */
  var cgTabs = document.querySelectorAll('.cg-tab');
  for (var q = 0; q < cgTabs.length; q++) {
    cgTabs[q].addEventListener('click', function () {
      var id = this.id.replace('tab-', '');
      var all = document.querySelectorAll('.cg-tab');
      for (var a = 0; a < all.length; a++) {
        var on = all[a] === this;
        all[a].classList.toggle('active', on);
        all[a].setAttribute('aria-selected', on ? 'true' : 'false');
      }
      var panels = document.querySelectorAll('.cg-panel');
      for (var b = 0; b < panels.length; b++) panels[b].classList.toggle('active', panels[b].id === 'panel-' + id);
    });
  }
  var revs = document.querySelectorAll('.reveal');
  if (revs.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        for (var r = 0; r < entries.length; r++) {
          if (entries[r].isIntersecting) { entries[r].target.classList.add('in'); io.unobserve(entries[r].target); }
        }
      }, { threshold: 0.15 });
      for (var r2 = 0; r2 < revs.length; r2++) io.observe(revs[r2]);
    } else {
      for (var r3 = 0; r3 < revs.length; r3++) revs[r3].classList.add('in');
    }
  }
  var cgVideo = document.querySelector('.cg-video');
  if (cgVideo && cgVideo.play) { try { var pr = cgVideo.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e2) {} }
})();

/* ---- Home hero video: slow motion ---- */
(function () {
  var hv = document.querySelector('.hero-home .cg-video');
  if (!hv) return;
  var slow = function () { try { hv.playbackRate = 0.5; } catch (e) {} };
  slow();
  hv.addEventListener('loadedmetadata', slow);
  hv.addEventListener('play', slow);
})();

/* Clean address bar: show /about instead of /about.html (cosmetic, no reload) */
(function () {
  try {
    var path = window.location.pathname;
    var clean = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    if (clean !== path && window.history && history.replaceState) {
      history.replaceState(null, '', clean + window.location.search + window.location.hash);
    }
  } catch (e) {}
})();
