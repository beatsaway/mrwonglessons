/* Level 5 rubric: <strong> in column 2 → clickable <span> (not link-styled); optional data-mini-guide="key" for term popups. */
(function () {
  var backdrop;
  var dialog;
  var bodyEl;
  var closeBtn;
  var titleEl;
  var lastFocus;
  var currentGuideKey = null;

  function ensureShell() {
    if (backdrop) return;
    backdrop = document.createElement("div");
    backdrop.id = "rubric-guide-backdrop";
    backdrop.className = "rubric-guide-backdrop";
    backdrop.setAttribute("hidden", "");
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal();
    });

    dialog = document.createElement("div");
    dialog.className = "rubric-guide-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "rubric-guide-title");
    dialog.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "rubric-guide-close";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", closeModal);

    titleEl = document.createElement("h2");
    titleEl.id = "rubric-guide-title";
    titleEl.className = "rubric-guide-title";

    bodyEl = document.createElement("div");
    bodyEl.className = "rubric-guide-body";

    dialog.appendChild(closeBtn);
    dialog.appendChild(titleEl);
    dialog.appendChild(bodyEl);
    backdrop.appendChild(dialog);
    document.body.appendChild(backdrop);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && backdrop && !backdrop.hasAttribute("hidden")) {
        closeModal();
      }
    });
  }

  function getTitleHtml() {
    if (!window.SBA_i18n) return "Level 5 guide";
    return window.SBA_i18n.t("rubric.guide.modal_title") || "Level 5 guide";
  }

  function getCloseLabel() {
    if (!window.SBA_i18n) return "Close";
    return window.SBA_i18n.t("rubric.guide.close_aria") || "Close";
  }

  function syncChromeStrings() {
    ensureShell();
    titleEl.innerHTML = getTitleHtml();
    closeBtn.setAttribute("aria-label", getCloseLabel());
  }

  function openModal(guideKey) {
    if (!window.SBA_i18n) return;
    currentGuideKey = guideKey;
    ensureShell();
    syncChromeStrings();
    var html = window.SBA_i18n.t(guideKey);
    if (!html || !String(html).trim()) {
      bodyEl.innerHTML =
        window.SBA_i18n.t("rubric.guide.empty") ||
        "<p>This guide is not available in this language yet.</p>";
    } else {
      bodyEl.innerHTML = html;
    }
    lastFocus = document.activeElement;
    backdrop.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    currentGuideKey = null;
    if (!backdrop || backdrop.hasAttribute("hidden")) return;
    backdrop.setAttribute("hidden", "");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      try {
        lastFocus.focus();
      } catch (e) {}
    }
  }

  function guideKeyFromItemKey(i18nKey) {
    if (!i18nKey || typeof i18nKey !== "string") return null;
    var parts = i18nKey.split(".");
    if (parts.length !== 2 || !/^p3[bc]$/.test(parts[0]) || !/^b\d+$/.test(parts[1])) return null;
    return parts[0] + ".guide." + parts[1];
  }

  function strongToSpanTrigger(strongEl, fallbackGuideKey) {
    var mini = strongEl.getAttribute("data-mini-guide");
    var gk = (mini && String(mini).trim()) || fallbackGuideKey;
    var span = document.createElement("span");
    span.className = "rubric-guide-trigger";
    span.setAttribute("role", "button");
    span.setAttribute("tabindex", "0");
    span.setAttribute("data-guide-key", gk);
    span.innerHTML = strongEl.innerHTML;
    strongEl.parentNode.replaceChild(span, strongEl);
  }

  function enhanceLevel5Cells(mainSel) {
    var main = document.querySelector(mainSel);
    if (!main) return;
    var cells = main.querySelectorAll("tbody tr > td:nth-child(2)");
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var items = cell.querySelectorAll("li[data-i18n], p[data-i18n]");
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        var key = item.getAttribute("data-i18n");
        var gk = guideKeyFromItemKey(key);
        if (!gk) continue;
        var strongs = item.querySelectorAll("strong");
        for (var k = 0; k < strongs.length; k++) {
          strongToSpanTrigger(strongs[k], gk);
        }
      }
    }
  }

  function enhanceBoth() {
    enhanceLevel5Cells('main[data-page="part3b"]');
    enhanceLevel5Cells('main[data-page="part3c"]');
  }

  function onTriggerActivate(target) {
    var gk = target.getAttribute("data-guide-key");
    if (gk) openModal(gk);
  }

  function bindLayer(mainSel) {
    var main = document.querySelector(mainSel);
    if (!main) return;
    main.addEventListener(
      "click",
      function (e) {
        var t = e.target && e.target.closest && e.target.closest(".rubric-guide-trigger");
        if (!t || !main.contains(t)) return;
        e.preventDefault();
        onTriggerActivate(t);
      },
      false
    );
    main.addEventListener(
      "keydown",
      function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        var t = e.target;
        if (!t || !t.classList || !t.classList.contains("rubric-guide-trigger")) return;
        if (!main.contains(t)) return;
        e.preventDefault();
        onTriggerActivate(t);
      },
      false
    );
  }

  function onLangChange() {
    syncChromeStrings();
    enhanceBoth();
    if (currentGuideKey && bodyEl && window.SBA_i18n && backdrop && !backdrop.hasAttribute("hidden")) {
      var html = window.SBA_i18n.t(currentGuideKey);
      bodyEl.innerHTML =
        html && String(html).trim()
          ? html
          : window.SBA_i18n.t("rubric.guide.empty") ||
            "<p>This guide is not available in this language yet.</p>";
    }
  }

  window.addEventListener("sba:langchange", onLangChange);

  function init() {
    bindLayer('main[data-page="part3b"]');
    bindLayer('main[data-page="part3c"]');
    enhanceBoth();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
