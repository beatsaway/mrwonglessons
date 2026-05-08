(function () {
  var current =
    (typeof location !== "undefined" && location.pathname.split("/").pop()) ||
    "index.html";
  if (!current || current === "" || current.indexOf(".") === -1) {
    current = "index.html";
  }

  /* [href, i18n key, nav group] — groups drive sidebar colour accents */
  var items = [
    ["index.html", "nav.how_to", "start"],
    ["part1.html", "nav.intro", "start"],
    ["part2.html", "nav.req", "study"],
    ["part3.html", "nav.criteria", "study"],
    ["part3b.html", "nav.rw_rubric", "rubrics"],
    ["part3c.html", "nav.art_rubric", "rubrics"],
    ["part4.html", "nav.conduct", "conduct"],
    ["part5.html", "nav.admin", "integrity"],
    ["part6.html", "nav.moderation", "integrity"],
    ["part7.html", "nav.malpractice", "integrity"],
  ];

  var root = document.getElementById("site-nav-root");
  if (!root) return;

  var backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  backdrop.id = "nav-backdrop";
  backdrop.setAttribute("aria-hidden", "true");

  var sidebar = document.createElement("aside");
  sidebar.className = "site-sidebar";
  sidebar.id = "site-sidebar";
  sidebar.setAttribute("aria-label", "Guide");

  var langBar = document.createElement("div");
  langBar.className = "site-lang";
  langBar.setAttribute("role", "group");
  langBar.setAttribute("aria-label", "Language");

  var langLabel = document.createElement("span");
  langLabel.className = "site-lang__label";
  langLabel.setAttribute("data-i18n", "chrome.lang_label");
  langLabel.textContent = "";
  langBar.appendChild(langLabel);

  var langBtns = document.createElement("div");
  langBtns.className = "site-lang__btns";
  [["en", "EN"], ["ne", "नेपाली"], ["ur", "اردو"]].forEach(function (L) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "site-lang__btn";
    b.setAttribute("data-lang", L[0]);
    b.setAttribute("aria-pressed", "false");
    b.textContent = L[1];
    b.addEventListener("click", function () {
      if (window.SBA_i18n) window.SBA_i18n.setLang(L[0]);
    });
    langBtns.appendChild(b);
  });
  langBar.appendChild(langBtns);

  var head = document.createElement("div");
  head.className = "site-sidebar__head";
  var brand = document.createElement("a");
  brand.className = "site-sidebar__brand";
  brand.href = "index.html";
  brand.setAttribute("data-i18n", "nav.brand");
  brand.textContent = "";
  head.appendChild(brand);

  var nav = document.createElement("nav");
  nav.className = "site-sidebar__nav";
  nav.setAttribute("aria-label", "Section navigation");

  for (var i = 0; i < items.length; i++) {
    var href = items[i][0];
    var i18nKey = items[i][1];
    var group = items[i][2] || "start";
    var a = document.createElement("a");
    a.href = href;
    a.setAttribute("data-i18n", i18nKey);
    a.setAttribute("data-nav-group", group);
    a.textContent = "";
    if (i > 0 && items[i][2] !== items[i - 1][2]) {
      a.classList.add("site-sidebar__nav-link--section-gap");
    }
    if (href === current) {
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  }

  sidebar.appendChild(langBar);
  sidebar.appendChild(head);
  sidebar.appendChild(nav);

  var topbar = document.createElement("div");
  topbar.className = "mobile-topbar";
  topbar.setAttribute("role", "banner");

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-sidebar");
  toggle.setAttribute("aria-label", "Open navigation menu");
  toggle.innerHTML =
    '<span class="nav-toggle__icon" aria-hidden="true"></span><span class="nav-toggle__text">Menu</span>';

  var topBrand = document.createElement("a");
  topBrand.className = "mobile-topbar__brand";
  topBrand.href = "index.html";
  topBrand.setAttribute("data-i18n", "nav.brand");
  topBrand.textContent = "";

  topbar.appendChild(toggle);
  topbar.appendChild(topBrand);

  root.appendChild(backdrop);
  root.appendChild(sidebar);
  root.appendChild(topbar);

  function isMobileLayout() {
    return typeof window.matchMedia === "function"
      ? window.matchMedia("(max-width: 767px)").matches
      : window.innerWidth <= 767;
  }

  function setOpen(open) {
    var html = document.documentElement;
    if (open) {
      html.classList.add("nav-is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      backdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    } else {
      html.classList.remove("nav-is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  function closeNav() {
    setOpen(false);
  }

  function toggleNav() {
    setOpen(!document.documentElement.classList.contains("nav-is-open"));
  }

  toggle.addEventListener("click", function () {
    toggleNav();
  });

  backdrop.addEventListener("click", closeNav);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.documentElement.classList.contains("nav-is-open")) {
      closeNav();
      toggle.focus();
    }
  });

  window.addEventListener(
    "resize",
    function () {
      if (!isMobileLayout()) {
        closeNav();
      }
    },
    { passive: true }
  );

  nav.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.tagName === "A" && isMobileLayout()) {
      closeNav();
    }
  });

  window.addEventListener("sba:langchange", function () {
    if (window.SBA_i18n) window.SBA_i18n.syncLangButtons();
  });

  if (window.SBA_i18n) {
    window.SBA_i18n.refreshAll();
  }
})();
