// Мова сторінки: ?lang=en або #en, інакше українська. Вибір запам’ятовуємо.
(function () {
  var q = new URLSearchParams(location.search).get('lang') || location.hash.slice(1);
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = q === 'en' || q === 'uk' ? q : saved === 'en' ? 'en' : 'uk';
  function set(l) {
    document.documentElement.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === l)); });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  set(lang);
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.set); }); });
})();
