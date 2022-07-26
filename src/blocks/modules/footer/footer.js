(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(42880474, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});

(function (w, d, c) {
  var s = d.createElement("script"),
    h = d.getElementsByTagName("script")[0],
    e = d.documentElement;
  if ((" " + e.className + " ").indexOf(" ya-page_js_yes ") === -1) {
    e.className += " ya-page_js_yes";
  }
  s.type = "text/javascript";
  s.async = true;
  s.charset = "utf-8";
  s.src =
    (d.location.protocol === "https:" ? "https:" : "http:") +
    "//site.yandex.net/v2.0/js/all.js";
  h.parentNode.insertBefore(s, h);
  (w[c] || (w[c] = [])).push(function () {
    Ya.Site.Form.init();
  });
})(window, document, "yandex_site_callbacks");
