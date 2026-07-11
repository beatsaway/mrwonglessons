(function () {
  var TIP_STORAGE_KEY = "pronunciation-tip-id";
  var currentTip = null;
  var picks = [];

  function plainTitle(s) {
    return String(s || "").replace(/<[^>]+>/g, "");
  }

  function tipLabel(tip, lang) {
    var t = tip.title[lang] || tip.title.en;
    return plainTitle(t);
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function shuffle(copy) {
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  function buildOptions(items) {
    var html = '<option value="">⋯</option>';
    shuffle(items.slice()).forEach(function (item) {
      html += '<option value="' + esc(item) + '">' + esc(item) + "</option>";
    });
    return html;
  }

  function buildKwOptions(items) {
    var html = '<option value="">…</option>';
    shuffle(items.slice()).forEach(function (item) {
      html += '<option value="' + esc(item.v) + '">' + esc(window.pronKwLabel(item)) + "</option>";
    });
    return html;
  }

  function updatePick(sel) {
    sel.classList.remove("ok", "bad");
    var row = sel.closest(".match-row");
    if (row) row.classList.remove("ok", "bad");
    if (!sel.value) return;
    var ans = (sel.getAttribute("data-answer") || "").trim();
    var ok = sel.value === ans;
    sel.classList.add(ok ? "ok" : "bad");
    if (row) row.classList.add(ok ? "ok" : "bad");
  }

  function bindSelect(sel, keywordOptions) {
    if (sel.classList.contains("kw-pick")) {
      sel.innerHTML = buildKwOptions(keywordOptions);
    }
    sel.addEventListener("change", function () { updatePick(sel); });
  }

  function refreshQuizSelects(keywordOptions, phraseAnswers) {
    document.querySelectorAll("select.kw-pick").forEach(function (sel) {
      var saved = sel.value;
      sel.innerHTML = buildKwOptions(keywordOptions);
      if (saved) sel.value = saved;
      updatePick(sel);
    });
    document.querySelectorAll("select.match-pick:not(.kw-pick)").forEach(function (sel) {
      var saved = sel.value;
      sel.innerHTML = buildOptions(phraseAnswers);
      if (saved) sel.value = saved;
      updatePick(sel);
    });
    picks = Array.prototype.slice.call(document.querySelectorAll("select.match-pick"));
  }

  function initQuiz(keywordOptions, phraseAnswers) {
    document.querySelectorAll("select.match-pick").forEach(function (sel) {
      bindSelect(sel, keywordOptions);
    });
    document.querySelectorAll("select.match-pick:not(.kw-pick)").forEach(function (sel) {
      sel.innerHTML = buildOptions(phraseAnswers);
    });
    picks = Array.prototype.slice.call(document.querySelectorAll("select.match-pick"));
    window.pronRefreshKwSelects = function () {
      refreshQuizSelects(keywordOptions, phraseAnswers);
    };
  }

  function renderKeywordRows(rows) {
    return rows.map(function (row) {
      return (
        '<li class="match-row"><p class="match-prompt">' +
        '<span class="ui-en">' + row.prompt.en + "</span>" +
        '<span class="ui-zh">' + row.prompt.zh + "</span>" +
        '</p><select class="match-pick kw-pick" data-answer="' + esc(row.answer) + '" aria-label="' + esc(row.aria) + '"></select></li>'
      );
    }).join("");
  }

  function renderPhraseRows(phrases) {
    return phrases.map(function (p) {
      return (
        '<li class="match-row"><p class="sound" lang="en">' + esc(p.sound) +
        '</p><select class="match-pick" data-answer="' + esc(p.answer) + '" aria-label="' + esc(p.sound) + '"></select></li>'
      );
    }).join("");
  }

  function updateFormLink(formUrl) {
    var a = document.getElementById("discussion-google-form");
    if (!a) return;
    var u = (formUrl || "").trim();
    a.style.pointerEvents = "";
    a.style.opacity = "";
    if (u && /^https?:\/\//i.test(u)) {
      a.href = u;
      a.innerHTML = '<span class="ui-en">Open Google Form</span><span class="ui-zh">開啟 Google 表單</span>';
      return;
    }
    a.removeAttribute("href");
    a.style.pointerEvents = "none";
    a.style.opacity = "0.6";
    a.innerHTML = '<span class="ui-en">Google Form (link from teacher)</span><span class="ui-zh">Google 表單（聽老師公佈連結）</span>';
  }

  window.pronRefreshFormLink = function () {
    updateFormLink(currentTip && currentTip.formUrl);
  };

  function setIntroMode(isIntro) {
    var tabFill = document.getElementById("tab-fill");
    var tabRead = document.getElementById("tab-read");
    var panelRead = document.getElementById("panel-read");
    var panelFill = document.getElementById("panel-fill");
    if (!tabFill || !panelFill) return;
    tabFill.hidden = isIntro;
    if (isIntro) {
      tabRead.setAttribute("aria-selected", "true");
      tabFill.setAttribute("aria-selected", "false");
      panelRead.hidden = false;
      panelFill.hidden = true;
    }
  }

  function renderTip(tip) {
    currentTip = tip;
    document.title = tip.docTitle;
    var isIntro = !!tip.introOnly;

    document.getElementById("fill-examples").innerHTML = tip.fillExamples || "";
    document.getElementById("kw-list").innerHTML = renderKeywordRows(tip.keywordRows || []);
    document.getElementById("phrase-list").innerHTML = renderPhraseRows(tip.phrases || []);
    document.getElementById("panel-read").innerHTML = tip.readHtml || "";

    var discuss = document.getElementById("discussion-text");
    if (discuss && tip.discussion) {
      discuss.innerHTML =
        '<span class="ui-en">' + (tip.discussion.en || "") + "</span>" +
        '<span class="ui-zh">' + (tip.discussion.zh || "") + "</span>";
    }

    var phraseAnswers = (tip.phrases || []).map(function (p) { return p.answer; });
    phraseAnswers.sort(function (a, b) { return a.localeCompare(b, "en", { sensitivity: "base" }); });
    initQuiz(tip.keywordOptions || [], phraseAnswers);
    updateFormLink(tip.formUrl);
    setIntroMode(isIntro);
    if (!isIntro && typeof window.pronSetTab === "function") {
      window.pronSetTab("read");
    }

    var dlg = document.getElementById("discuss-success-dialog");
    if (dlg && dlg.open) dlg.close();
  }

  function tipFromUrl() {
    var m = /[?&]tip=(\d+)/.exec(window.location.search);
    if (m) return parseInt(m[1], 10);
    try {
      var saved = parseInt(localStorage.getItem(TIP_STORAGE_KEY), 10);
      if (saved >= 0 && saved <= 7) return saved;
    } catch (e) {}
    return 0;
  }

  function setTipId(id, pushUrl) {
    id = Math.max(0, Math.min(7, id));
    var tips = window.PRON_TIPS || {};
    if (!tips[id]) return;
    var sel = document.getElementById("tip-select");
    if (sel) sel.value = String(id);
    renderTip(tips[id]);
    try { localStorage.setItem(TIP_STORAGE_KEY, String(id)); } catch (e) {}
    if (pushUrl) {
      var url = new URL(window.location.href);
      url.searchParams.set("tip", String(id));
      window.history.replaceState({ tip: id }, "", url.pathname + url.search);
    }
  }

  function populateTipSelect() {
    var sel = document.getElementById("tip-select");
    if (!sel) return;
    var tips = window.PRON_TIPS || {};
    var lang = typeof window.pronUiLang === "function" ? window.pronUiLang() : "en";
    var html = "";
    for (var i = 0; i <= 7; i++) {
      if (!tips[i]) continue;
      var label = tipLabel(tips[i], lang);
      html += '<option value="' + i + '">' + esc(label) + "</option>";
    }
    sel.innerHTML = html;
    sel.addEventListener("change", function () {
      setTipId(parseInt(sel.value, 10), true);
    });
  }

  window.pronRefreshTipSelect = function () {
    var sel = document.getElementById("tip-select");
    if (!sel) return;
    var current = sel.value;
    populateTipSelectFresh(current);
  };

  function populateTipSelectFresh(selectedValue) {
    var sel = document.getElementById("tip-select");
    if (!sel) return;
    var tips = window.PRON_TIPS || {};
    var lang = typeof window.pronUiLang === "function" ? window.pronUiLang() : "en";
    var html = "";
    for (var i = 0; i <= 7; i++) {
      if (!tips[i]) continue;
      var label = tipLabel(tips[i], lang);
      html += '<option value="' + i + '">' + esc(label) + "</option>";
    }
    sel.innerHTML = html;
    if (selectedValue) sel.value = selectedValue;
  }

  function initTabs() {
    var tabRead = document.getElementById("tab-read");
    var tabFill = document.getElementById("tab-fill");
    var panelRead = document.getElementById("panel-read");
    var panelFill = document.getElementById("panel-fill");
    function setTab(w) {
      if (currentTip && currentTip.introOnly) {
        tabRead.setAttribute("aria-selected", "true");
        tabFill.setAttribute("aria-selected", "false");
        panelRead.hidden = false;
        panelFill.hidden = true;
        return;
      }
      var isRead = w === "read";
      tabRead.setAttribute("aria-selected", isRead ? "true" : "false");
      tabFill.setAttribute("aria-selected", isRead ? "false" : "true");
      panelRead.hidden = !isRead;
      panelFill.hidden = isRead;
    }
    tabRead.addEventListener("click", function () { setTab("read"); });
    tabFill.addEventListener("click", function () { setTab("fill"); });
    setTab("read");
    window.pronSetTab = setTab;
  }

  function initTipJumps() {
    document.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest && e.target.closest(".tip-jump[data-tip]");
      if (!btn) return;
      e.preventDefault();
      setTipId(parseInt(btn.getAttribute("data-tip"), 10), true);
    });
  }

  function initReveal() {
    var discussDlg = document.getElementById("discuss-success-dialog");
    document.addEventListener("keydown", function (e) {
      if (e.code !== "Space" && e.key !== " ") return;
      var p = document.getElementById("panel-fill");
      if (!p || p.hidden) return;
      if (discussDlg && discussDlg.open) return;
      var t = e.target;
      if (t && t.closest && (t.closest("#discuss-success-dialog") || t.closest("select") || t.closest("#tip-select"))) return;
      if (t && t.closest && t.closest(".tabs") && t.tagName === "BUTTON") return;
      e.preventDefault();
      picks.forEach(function (b) {
        var d = (b.getAttribute("data-answer") || "").trim();
        if (d) b.value = d;
        b.classList.remove("bad");
        b.classList.add("ok");
        var row = b.closest(".match-row");
        if (row) { row.classList.remove("bad"); row.classList.add("ok"); }
      });
    }, true);
    document.getElementById("discuss-dialog-close").addEventListener("click", function () {
      discussDlg.close();
    });
  }

  function init() {
    populateTipSelect();
    initTabs();
    initReveal();
    initTipJumps();
    setTipId(tipFromUrl(), true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
