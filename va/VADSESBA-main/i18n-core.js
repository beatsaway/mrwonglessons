(function (window, document) {
  var STORAGE_KEY = "sba-ui-lang";
  var VALID = { en: true, ne: true, ur: true };
  var registry = {};

  function mergeStrings(obj) {
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] && typeof obj[k] === "object") {
        registry[k] = obj[k];
      }
    }
  }

  function getLang() {
    var c = localStorage.getItem(STORAGE_KEY);
    return VALID[c] ? c : "en";
  }

  function pick(lang, key) {
    var t = registry[key];
    if (!t) return null;
    if (lang === "en") return t.en != null ? t.en : null;
    if (t[lang] != null && String(t[lang]).length) return t[lang];
    return t.en != null ? t.en : null;
  }

  function applyDocument() {
    var lang = getLang();
    var list = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      var html = pick(lang, key);
      if (html != null) el.innerHTML = html;
    }
    applyTitle(lang);
  }

  function applyTitle(lang) {
    if (!document.documentElement.dataset.titleDefault) {
      document.documentElement.dataset.titleDefault = document.title;
    }
    var main = document.querySelector("main[data-page]");
    var slug = main && main.getAttribute("data-page");
    var key = slug ? "doc.title." + slug : null;
    if (!key || !registry[key]) {
      if (lang === "en") {
        document.title = document.documentElement.dataset.titleDefault || document.title;
      }
      return;
    }
    var t = pick(lang, key);
    if (t != null) document.title = t;
    else if (lang === "en") {
      document.title = registry[key].en || document.documentElement.dataset.titleDefault;
    }
  }

  function setLang(code) {
    if (!VALID[code]) code = "en";
    localStorage.setItem(STORAGE_KEY, code);
    var html = document.documentElement;
    html.setAttribute("lang", code === "ur" ? "ur" : code === "ne" ? "ne" : "en");
    html.setAttribute("dir", code === "ur" ? "rtl" : "ltr");
    html.classList.toggle("lang-ur", code === "ur");
    html.classList.toggle("lang-ne", code === "ne");
    applyDocument();
    syncLangButtons();
    window.dispatchEvent(new CustomEvent("sba:langchange", { detail: { lang: code } }));
  }

  function refreshAll() {
    setLang(getLang());
  }

  function syncLangButtons() {
    var lang = getLang();
    var root = document.getElementById("site-nav-root");
    if (!root) return;
    var btns = root.querySelectorAll(".site-lang__btn");
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("site-lang__btn--active", on);
    }
  }

  window.SBA_i18n = {
    getLang: getLang,
    setLang: setLang,
    mergeStrings: mergeStrings,
    refreshAll: refreshAll,
    applyDocument: applyDocument,
    syncLangButtons: syncLangButtons,
    t: function (key) {
      var v = pick(getLang(), key);
      return v != null ? v : "";
    },
  };
})(window, document);
