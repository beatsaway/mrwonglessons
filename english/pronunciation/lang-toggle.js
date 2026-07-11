(function () {
  var STORAGE_KEY = "pronunciation-ui-lang";

  function uiLang() {
    return document.body.getAttribute("data-ui-lang") === "zh" ? "zh" : "en";
  }

  function setUiLang(lang) {
    lang = lang === "zh" ? "zh" : "en";
    document.body.setAttribute("data-ui-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    var enBtn = document.getElementById("lang-en");
    var zhBtn = document.getElementById("lang-zh");
    if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    if (zhBtn) zhBtn.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    if (typeof window.pronRefreshKwSelects === "function") window.pronRefreshKwSelects();
    if (typeof window.pronRefreshFormLink === "function") window.pronRefreshFormLink();
    if (typeof window.pronRefreshTipSelect === "function") window.pronRefreshTipSelect();
  }

  window.pronUiLang = uiLang;
  window.pronSetUiLang = setUiLang;
  window.pronKwLabel = function (item) {
    var lang = uiLang();
    return (item && item[lang]) || (item && item.en) || (item && item.v) || "";
  };

  function init() {
    document.body.setAttribute("data-ui-lang", "en");
    var enBtn = document.getElementById("lang-en");
    var zhBtn = document.getElementById("lang-zh");
    if (enBtn) enBtn.addEventListener("click", function () { setUiLang("en"); });
    if (zhBtn) zhBtn.addEventListener("click", function () { setUiLang("zh"); });
    setUiLang("en");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
