(function () {
  const content = document.getElementById("content");
  const headerSearch = document.getElementById("headerSearch");
  const headerSearchDropdown = document.getElementById("headerSearchDropdown");
  const vocabExerciseOverlay = document.getElementById("vocabExerciseOverlay");

  let currentScript = null;
  let currentSets = null;
  let currentSessionIndex = 0;
  let currentTopic = null;
  let selectedVocabWord = null;
  let isCyclingTopics = false;
  let levelFilter = null;

  const HAT_LABELS = {
    "white-hat": "facts",
    "red-hat": "feelings",
    "yellow-hat": "benefits",
    "black-hat": "risks",
    "green-hat": "ideas",
    "blue-hat": "process"
  };

  const HAT_QUESTIONS = [
    { hat: "white-hat", emoji: "📊", make: (name) => `Define two key terms from ${name} and explain why they matter in design.` },
    { hat: "red-hat", emoji: "😊", make: (name) => `How might a user feel when a product ignores ideas from ${name}?` },
    { hat: "yellow-hat", emoji: "🌟", make: (name) => `What are the main benefits of applying ${name} in a real product?` },
    { hat: "black-hat", emoji: "⚠️", make: (name) => `What problems or limitations appear if designers ignore ${name}?` },
    { hat: "green-hat", emoji: "💡", make: (name) => `Suggest one new design idea inspired by ${name}.` },
    { hat: "blue-hat", emoji: "📋", make: (name) => `What steps would you take to research or test ${name} in a design project?` }
  ];

  const SLUG_ALIASES = {
    "resources-reserves": "resources-and-reserves.html",
    "material-graphs": "material-graphs-selection.html"
  };

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slugToKey(slug) {
    return SLUG_ALIASES[slug] || slug + ".html";
  }

  function isFullTopic(slug) {
    return window.ibTopicRegistry.fullTopics.includes(slug);
  }

  function getTopicPool() {
    if (levelFilter === "sl") return window.ibTopicRegistry.slTopics;
    if (levelFilter === "hl") return window.ibTopicRegistry.hlTopics;
    return window.ibTopicRegistry.allTopics;
  }

  function chineseFor(word) {
    return (window.ibKeyVocabZh && window.ibKeyVocabZh[word]) || "—";
  }

  function buildVocabList(vocabObj) {
    return Object.keys(vocabObj).map((word) => ({
      word,
      translation: chineseFor(word),
      emoji: "📘"
    }));
  }

  function buildVocabEx(vocabObj, topicKey) {
    const custom = window.ibKeyVocabEx && window.ibKeyVocabEx[topicKey];
    if (custom) return custom;

    const entries = Object.entries(vocabObj);
    const picked = entries.slice(0, Math.min(5, entries.length));
    return picked.map(([word], index) => {
      const blank = `<span class='vocab-blank' data-answer='${word.replace(/'/g, "&#39;")}'></span>`;
      return (index ? " " : "") + `In DT, <strong>${word}</strong> refers to ${blank}.`;
    }).join("");
  }

  function wikiUrlFor(topic) {
    const links = window.ibWikiLinks || {};
    return (
      links[topic.slug] ||
      "https://en.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(topic.name)
    );
  }

  function wikiLinkHtml(topic) {
    const url = wikiUrlFor(topic);
    return `<p><a href="${url}" target="_blank" rel="noopener">Read more on Wikipedia →</a></p>`;
  }

  function levelNoteHtml(topic) {
    return topic.level === "HL"
      ? "This is an <strong>HL extension</strong> topic (syllabus topics 7–10)."
      : "This is a <strong>core SL</strong> topic (syllabus topics 1–6), also required for HL.";
  }

  function buildArticleFromVocab(topic, vocabObj) {
    const items = Object.entries(vocabObj)
      .map(([word, definition]) => `<li><strong>${escapeHtml(word)}</strong> — ${escapeHtml(definition)}</li>`)
      .join("");
    return (
      `<p><strong>${escapeHtml(topic.name)}</strong> (${escapeHtml(topic.ref)}). ${levelNoteHtml(topic)}</p>` +
      `<p>Read the key terms below, complete the fill-in-the-blank exercise, then discuss the six questions.</p>` +
      `<ul>${items}</ul>` +
      wikiLinkHtml(topic)
    );
  }

  function buildGeneratedArticle(topic) {
    const overview = window.ibTopicOverviews && window.ibTopicOverviews[topic.slug];
    if (overview && overview.articleText) return overview.articleText;

    const intro =
      (window.ibSectionIntros && window.ibSectionIntros[topic.sectionNum]) ||
      "This topic connects design theory to real products and production.";
    const level =
      topic.level === "HL"
        ? "an HL extension topic (syllabus topics 7–10)"
        : "a core topic studied by both SL and HL students (syllabus topics 1–6)";
    return (
      `<p><strong>${escapeHtml(topic.name)}</strong> (${escapeHtml(topic.ref)}) is ${level} in IB Design Technology. It sits within <em>Topic ${topic.sectionNum}: ${escapeHtml(topic.sectionTitle)}</em>.</p>` +
      `<p>${escapeHtml(intro)} For this subtopic, focus on how <strong>${escapeHtml(topic.name)}</strong> affects real design, production, and user outcomes.</p>` +
      `<p>As you read, look for: (1) clear definitions, (2) a product example, (3) one benefit and one limitation, and (4) how a designer would apply this in a project.</p>` +
      wikiLinkHtml(topic)
    );
  }

  function buildSetsFromVocab(topic) {
    const overview = window.ibTopicOverviews && window.ibTopicOverviews[topic.slug];
    const vocab = window.ibKeyVocab[slugToKey(topic.slug)];

    if (!vocab || Object.keys(vocab).length === 0) {
      const set = {
        title: topic.name,
        articleText: buildGeneratedArticle(topic),
        questions: HAT_QUESTIONS.map((q) => ({ emoji: q.emoji, text: q.make(topic.name), hat: q.hat })),
        autoGenerated: true
      };
      if (overview && overview.vocablist) set.vocablist = overview.vocablist;
      if (overview && overview.vocabex) set.vocabex = overview.vocabex;
      return [set];
    }

    const set = {
      title: topic.name,
      articleText: buildArticleFromVocab(topic, vocab),
      vocablist: buildVocabList(vocab),
      vocabex: buildVocabEx(vocab, slugToKey(topic.slug)),
      questions: HAT_QUESTIONS.map((q) => ({ emoji: q.emoji, text: q.make(topic.name), hat: q.hat })),
      autoGenerated: true
    };
    if (overview && overview.vocabex) set.vocabex = overview.vocabex;
    if (overview && overview.vocablist) set.vocablist = overview.vocablist;
    return [set];
  }

  function levelTagsHtml(topic) {
    const tags = topic.levelTags || (topic.level === "HL" ? ["HL"] : ["SL", "HL"]);
    return tags.map((t) => `<span class="level-pill ${t.toLowerCase()}">${t}</span>`).join("");
  }

  function renderSearchResults(matches) {
    headerSearchDropdown.innerHTML = "";
    if (!matches.length) {
      headerSearchDropdown.classList.remove("active");
      return;
    }

    let lastSection = null;
    matches.forEach((topic) => {
      if (topic.sectionTitle !== lastSection) {
        lastSection = topic.sectionTitle;
        const label = document.createElement("div");
        label.className = "search-group-label";
        label.textContent = `Topic ${topic.sectionNum}: ${topic.sectionTitle}`;
        headerSearchDropdown.appendChild(label);
      }
      const link = document.createElement("a");
      link.href = "#";
      link.innerHTML =
        `${escapeHtml(topic.name)} <span class="search-meta">${escapeHtml(topic.ref)} ${levelTagsHtml(topic)}</span>`;
      link.addEventListener("mousedown", (e) => {
        e.preventDefault();
        loadTopic(topic);
        headerSearch.value = "";
        headerSearchDropdown.classList.remove("active");
      });
      headerSearchDropdown.appendChild(link);
    });
    headerSearchDropdown.classList.add("active");
  }

  function filterTopics(term) {
    const pool = getTopicPool();
    if (!term) return pool;
    const lower = term.toLowerCase();
    return pool.filter(
      (t) =>
        t.name.toLowerCase().includes(lower) ||
        t.slug.includes(lower) ||
        t.ref.toLowerCase().includes(lower) ||
        t.sectionTitle.toLowerCase().includes(lower)
    );
  }

  function loadTopicBySlug(slug) {
    const topic = window.ibTopicRegistry.allTopics.find((t) => t.slug === slug);
    if (topic) loadTopic(topic);
  }

  function loadTopic(topic) {
    currentTopic = topic;
    currentSessionIndex = 0;
    content.innerHTML = '<div class="loading">Loading…</div>';

    const url = new URL(location.href);
    url.searchParams.set("topic", topic.slug);
    if (levelFilter) url.searchParams.set("level", levelFilter);
    else url.searchParams.delete("level");
    history.replaceState(null, "", url);

    if (currentScript) {
      currentScript.remove();
      delete window.ibTopicSets;
    }

    const finish = (sets) => {
      currentSets = sets;
      renderContent(sets, 0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (isFullTopic(topic.slug)) {
      currentScript = document.createElement("script");
      currentScript.src = "topics/" + topic.slug + ".js";
      currentScript.onload = () => finish(window.ibTopicSets || buildSetsFromVocab(topic));
      currentScript.onerror = () => finish(buildSetsFromVocab(topic));
      document.head.appendChild(currentScript);
      return;
    }

    finish(buildSetsFromVocab(topic));
  }

  function renderContent(sets, sessionIndex) {
    if (!sets || !sets.length) {
      content.innerHTML = '<div class="empty-state">No content available</div>';
      return;
    }

    const set = sets[sessionIndex] || sets[0];
    const setId = "set-" + sessionIndex;
    const levelClass = currentTopic.level === "HL" ? "hl" : "both";

    let html = `<div class="topic">`;
    html += `<div class="topic-meta">${currentTopic.sectionEmoji} Topic ${currentTopic.sectionNum} · ${escapeHtml(currentTopic.ref)}`;
    html += `<span class="level-tag ${levelClass}">${escapeHtml(currentTopic.levelLabel || (currentTopic.level === "HL" ? "HL" : "SL · HL"))}</span></div>`;
    html += `<h1 class="main-topic-title" id="mainTopicTitle"><span class="topic-prefix">Let's learn </span><span id="topicNameDisplay">${escapeHtml(currentTopic.name)}</span></h1>`;

    if (sets.length > 1) {
      html += `<select class="session-dropdown" onchange="window.ibApp.selectSession(parseInt(this.value, 10))">`;
      sets.forEach((s, idx) => {
        html += `<option value="${idx}"${idx === sessionIndex ? " selected" : ""}>${escapeHtml(s.title)}</option>`;
      });
      html += `</select>`;
    } else if (set.title !== currentTopic.name) {
      html += `<h2 class="session-title">${escapeHtml(set.title)}</h2>`;
    }

    html += `<div class="topic-actions">`;
    if (set.articleText) {
      html += `<span class="article-toggle" data-set-id="${setId}">Read text</span>`;
    }
    html += `</div>`;

    if (set.vocablist && set.vocablist.length) {
      html += `<div class="vocab-list"><div class="vocab-items">`;
      html += `<span class="vocab-list-title">Key terms</span>`;
      set.vocablist.forEach((vocab, i) => {
        html += `<div class="vocab-item" data-vocab-index="${i}">`;
        html += `<span>${vocab.emoji || "📘"}</span>`;
        html += `<span class="vocab-word">${escapeHtml(vocab.word)}</span>`;
        if (vocab.translation) {
          html += `<span class="vocab-translation">${escapeHtml(vocab.translation)}</span>`;
        }
        html += `</div>`;
      });
      html += `</div></div>`;
    }

    if (set.articleText) {
      html += `<div class="article-text" id="${setId}">${set.articleText}`;
      if (set.vocabex) {
        html += `<p class="article-exercise-prompt"><span class="vocab-exercise-link" data-exercise="${sessionIndex}">Fill in the blanks →</span></p>`;
      }
      html += `</div>`;
    }

    if (set.questions && set.questions.length) {
      html += `<div class="questions">`;
      set.questions.forEach((q) => {
        html += `<div class="question" data-hat="${q.hat}">`;
        if (q.emoji) html += `<span class="question-emoji">${q.emoji}</span>`;
        html += `<span class="question-text">${escapeHtml(q.text)}</span>`;
        html += `<span class="question-label">${HAT_LABELS[q.hat] || ""}</span>`;
        html += `</div>`;
      });
      html += `</div>`;
    }

    html += `</div>`;
    content.innerHTML = html;

    document.getElementById("mainTopicTitle")?.addEventListener("click", cycleThroughTopics);

    content.querySelectorAll(".article-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.setId)?.classList.toggle("show");
      });
    });

    content.querySelectorAll(".vocab-item").forEach((item) => {
      item.addEventListener("click", () => item.classList.toggle("revealed"));
    });

    content.querySelectorAll("[data-exercise]").forEach((el) => {
      el.addEventListener("click", () => openVocabExercise(parseInt(el.dataset.exercise, 10)));
    });

    content.querySelectorAll(".question").forEach((q) => {
      q.addEventListener("click", () => {
        const hat = q.dataset.hat;
        const revealed = q.classList.contains("revealed");
        q.classList.remove("white-hat", "red-hat", "yellow-hat", "black-hat", "green-hat", "blue-hat");
        q.classList.toggle("revealed");
        if (!revealed) q.classList.add(hat);
      });
    });
  }

  function cycleThroughTopics() {
    if (isCyclingTopics) return;
    const pool = getTopicPool();
    if (pool.length < 2) return;

    isCyclingTopics = true;
    let next;
    do {
      next = pool[Math.floor(Math.random() * pool.length)];
    } while (next.slug === currentTopic?.slug && pool.length > 1);

    const display = document.getElementById("topicNameDisplay");
    if (display) {
      display.style.transition = "opacity 0.25s";
      display.style.opacity = "0";
      setTimeout(() => {
        loadTopic(next);
        isCyclingTopics = false;
      }, 250);
    } else {
      loadTopic(next);
      isCyclingTopics = false;
    }
  }

  function openVocabExercise(setIndex) {
    const set = currentSets?.[setIndex];
    if (!set?.vocabex) return;

    selectedVocabWord = null;
    document.getElementById("vocabExerciseTitle").textContent = set.title + " — fill in the blanks";
    const textEl = document.getElementById("vocabExerciseText");
    const keywords = [...set.vocablist].sort(() => Math.random() - 0.5);

    let html = `<div class="vocab-exercise-keywords">`;
    keywords.forEach((v) => {
      html += `<button type="button" class="vocab-exercise-keyword" data-word="${escapeHtml(v.word)}">${escapeHtml(v.word)}</button>`;
    });
    html += `</div><div>${set.vocabex}</div>`;
    textEl.innerHTML = html;

    textEl.querySelectorAll(".vocab-exercise-keyword").forEach((btn) => {
      btn.addEventListener("click", () => {
        textEl.querySelectorAll(".vocab-exercise-keyword").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedVocabWord = btn.dataset.word;
      });
    });

    textEl.querySelectorAll(".vocab-blank").forEach((blank) => {
      if (!blank.textContent.trim()) blank.innerHTML = "&nbsp;";
      blank.addEventListener("click", () => handleBlankClick(blank));
    });

    vocabExerciseOverlay.classList.add("open");
  }

  function handleBlankClick(blank) {
    if (blank.classList.contains("filled")) {
      blank.textContent = "";
      blank.classList.remove("filled", "correct", "incorrect");
      blank.innerHTML = "&nbsp;";
      return;
    }
    if (!selectedVocabWord) return;
    blank.textContent = selectedVocabWord;
    blank.classList.add("filled");
    blank.classList.toggle("correct", selectedVocabWord === blank.dataset.answer);
    blank.classList.toggle("incorrect", selectedVocabWord !== blank.dataset.answer);
  }

  function closeVocabExercise() {
    vocabExerciseOverlay.classList.remove("open");
    selectedVocabWord = null;
  }

  function showSearchDropdown() {
    renderSearchResults(filterTopics(headerSearch.value.toLowerCase().trim()));
  }

  headerSearch.addEventListener("input", showSearchDropdown);

  headerSearch.addEventListener("focus", showSearchDropdown);

  // Re-open when clicking an already-focused search box (focus does not fire again).
  headerSearch.addEventListener("click", showSearchDropdown);

  // Close on outside mousedown — avoids the focus-then-click race that hid the list on first tap.
  document.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".header-search-container")) {
      headerSearchDropdown.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVocabExercise();
  });

  window.ibApp = {
    selectSession(index) {
      currentSessionIndex = index;
      renderContent(currentSets, index);
    },
    closeVocabExercise
  };

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const level = params.get("level");
    if (level === "sl" || level === "hl") levelFilter = level;

    const slug = params.get("topic");
    if (slug) {
      loadTopicBySlug(slug);
      return;
    }

    loadTopicBySlug("human-factors");
  });
})();
