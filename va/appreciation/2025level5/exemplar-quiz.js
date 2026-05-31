/* Fill-in-the-blank quiz: toggle via ✏️ in header */
(function () {
  var quizOn = false;
  var saved = new WeakMap();
  var selectedChip = null;

  function kwClass(el) {
    return Array.prototype.find.call(el.classList, function (c) {
      return c.indexOf("kw-") === 0;
    }) || "";
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function ansParas(root) {
    return (root || document).querySelectorAll("section[id$='-a'] .ans");
  }

  function restorePara(p) {
    if (!saved.has(p)) return;
    p.innerHTML = saved.get(p);
    p.classList.remove("quiz-active");
    saved.delete(p);
    var bank = p.nextElementSibling;
    if (bank && bank.classList.contains("quiz-bank")) bank.remove();
  }

  function restoreAll() {
    ansParas().forEach(restorePara);
    selectedChip = null;
    document.body.classList.remove("quiz-mode");
  }

  function makeBlank(cls, answer, idx) {
    var b = document.createElement("span");
    b.className = "quiz-blank " + cls;
    b.dataset.answer = answer;
    b.dataset.idx = String(idx);
    b.style.minWidth = Math.max(2.4, answer.length * 0.52 + 1.2) + "em";
    b.setAttribute("role", "button");
    b.setAttribute("tabindex", "0");
    b.setAttribute("aria-label", "Blank " + (idx + 1));
    return b;
  }

  function quizPara(p) {
    if (saved.has(p)) return;
    saved.set(p, p.innerHTML);

    var spans = Array.prototype.slice.call(p.querySelectorAll("span[class*='kw-']"));
    var words = spans.map(function (s) {
      return { text: s.textContent.trim(), cls: kwClass(s) };
    });
    if (!words.length) {
      saved.delete(p);
      return;
    }

    spans.forEach(function (span, i) {
      span.parentNode.replaceChild(makeBlank(kwClass(span), span.textContent.trim(), i), span);
    });

    var bank = document.createElement("div");
    bank.className = "quiz-bank";
    shuffle(words).forEach(function (w) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-word " + w.cls;
      btn.textContent = w.text;
      btn.dataset.word = w.text;
      bank.appendChild(btn);
    });

    p.classList.add("quiz-active");
    p.insertAdjacentElement("afterend", bank);

    bank.addEventListener("click", onChipClick);
    p.addEventListener("click", onBlankClick);
    p.addEventListener("keydown", onBlankKey);
  }

  function quizSection(sectionEl) {
    if (!sectionEl || !/-a$/.test(sectionEl.id)) return;
    sectionEl.querySelectorAll(".ans").forEach(quizPara);
  }

  function onChipClick(e) {
    var btn = e.target.closest(".quiz-word");
    if (!btn || btn.classList.contains("used")) return;
    document.querySelectorAll(".quiz-word.selected").forEach(function (b) {
      b.classList.remove("selected");
    });
    btn.classList.add("selected");
    selectedChip = btn;
  }

  function fillBlank(blank, chip) {
    var fill = chip.textContent.trim();
    var answer = blank.dataset.answer;
    blank.textContent = fill;
    blank.classList.add("filled");
    blank.classList.remove("correct", "wrong");

    if (fill.toLowerCase() === answer.toLowerCase()) {
      blank.classList.add("correct");
      chip.classList.add("used");
      chip.classList.remove("selected");
      if (selectedChip === chip) selectedChip = null;
    } else {
      blank.classList.add("wrong");
    }
  }

  function onBlankClick(e) {
    var blank = e.target.closest(".quiz-blank");
    if (!blank || !selectedChip) return;
    fillBlank(blank, selectedChip);
  }

  function onBlankKey(e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var blank = e.target.closest(".quiz-blank");
    if (!blank || !selectedChip) return;
    e.preventDefault();
    fillBlank(blank, selectedChip);
  }

  function enterQuiz() {
    document.body.classList.add("quiz-mode");
    var active = document.querySelector("section.active");
    if (active) quizSection(active);
  }

  function toggle(btn) {
    quizOn = !quizOn;
    btn.classList.toggle("active", quizOn);
    btn.setAttribute("aria-pressed", quizOn ? "true" : "false");
    if (quizOn) enterQuiz();
    else restoreAll();
  }

  function onSectionChange(sectionEl) {
    if (!quizOn) return;
    ansParas().forEach(function (p) {
      if (!sectionEl.contains(p)) restorePara(p);
    });
    quizSection(sectionEl);
  }

  window.ExemplarQuiz = {
    toggle: toggle,
    onSectionChange: onSectionChange,
    isOn: function () { return quizOn; }
  };

  function init() {
    var btn = document.getElementById("quiz-toggle");
    if (btn) btn.addEventListener("click", function () { toggle(btn); });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
