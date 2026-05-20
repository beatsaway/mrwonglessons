(() => {
  if (window.__BG_ROTATOR_INIT__) return;
  window.__BG_ROTATOR_INIT__ = true;

  let minMs = 30_000;
  let maxMs = 60_000;
  let sections = [];
  let activeIndex = 0;
  const players = [];
  let unvisited = new Set();
  let nextAt = 0;
  let timeoutId = 0;
  let tickerId = 0;
  let lastAdvanceAt = 0;
  let playersReady = false;

  const clampMs = (ms) => Math.min(180_000, Math.max(3_000, ms));

  const countdownEl = (() => {
    const existing = document.getElementById("countdown");
    if (existing) return existing;
    const el = document.createElement("div");
    el.id = "countdown";
    el.textContent = "--";
    document.body.appendChild(el);
    return el;
  })();

  (() => {
    const style = document.createElement("style");
    style.textContent = `
      .section.bg-active {
        padding-top: 8px !important;
        padding-bottom: 8px !important;
      }
      .section.bg-active .wrap {
        width: min(96vw, calc(96svh * 16 / 9)) !important;
      }
      .section.bg-active .video {
        padding-top: 0 !important;
        height: min(96svh, calc(96vw * 9 / 16)) !important;
      }
    `;
    document.head.appendChild(style);
  })();

  const panel = (() => {
    const overlay = document.createElement("div");
    overlay.id = "bg-range-panel";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "10001";
    overlay.style.display = "none";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.padding = "1rem";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.backdropFilter = "blur(4px)";

    const box = document.createElement("div");
    box.style.width = "min(24rem, 100%)";
    box.style.padding = "1rem 1.1rem";
    box.style.borderRadius = "14px";
    box.style.background = "rgba(22,22,26,0.96)";
    box.style.border = "1px solid rgba(255,255,255,0.12)";
    box.style.boxShadow = "0 16px 48px rgba(0,0,0,0.45)";
    box.style.color = "rgba(255,255,255,0.9)";
    box.style.fontFamily = "system-ui, sans-serif";

    const title = document.createElement("div");
    title.textContent = "Timer range (seconds)";
    title.style.fontSize = "13px";
    title.style.marginBottom = "0.6rem";

    const row = document.createElement("div");
    row.style.display = "grid";
    row.style.gridTemplateColumns = "1fr 1fr";
    row.style.gap = "0.55rem";

    const minInput = document.createElement("input");
    minInput.type = "number";
    minInput.min = "3";
    minInput.max = "180";
    minInput.step = "1";
    minInput.placeholder = "min";
    minInput.style.width = "100%";
    minInput.style.padding = "0.5rem";
    minInput.style.borderRadius = "8px";
    minInput.style.border = "1px solid rgba(255,255,255,0.2)";
    minInput.style.background = "rgba(0,0,0,0.25)";
    minInput.style.color = "white";

    const maxInput = document.createElement("input");
    maxInput.type = "number";
    maxInput.min = "3";
    maxInput.max = "180";
    maxInput.step = "1";
    maxInput.placeholder = "max";
    maxInput.style.width = "100%";
    maxInput.style.padding = "0.5rem";
    maxInput.style.borderRadius = "8px";
    maxInput.style.border = "1px solid rgba(255,255,255,0.2)";
    maxInput.style.background = "rgba(0,0,0,0.25)";
    maxInput.style.color = "white";

    const hint = document.createElement("div");
    hint.style.fontSize = "12px";
    hint.style.color = "rgba(255,255,255,0.62)";
    hint.style.marginTop = "0.6rem";
    hint.textContent = "Press M to toggle, Enter to apply, Esc to close.";

    const readout = document.createElement("div");
    readout.style.fontSize = "12px";
    readout.style.color = "rgba(255,255,255,0.7)";
    readout.style.marginTop = "0.4rem";

    const apply = () => {
      let lo = parseFloat(minInput.value);
      let hi = parseFloat(maxInput.value);
      if (!Number.isFinite(lo)) lo = Math.round(minMs / 1000);
      if (!Number.isFinite(hi)) hi = Math.round(maxMs / 1000);
      if (hi < lo) {
        const t = lo;
        lo = hi;
        hi = t;
      }
      minMs = clampMs(lo * 1000);
      maxMs = clampMs(hi * 1000);
      if (maxMs <= minMs) maxMs = minMs + 1000;
      readout.textContent = `Active range: ${Math.round(minMs / 1000)}-${Math.round(maxMs / 1000)} s`;
      if (sections.length) scheduleNext();
    };

    minInput.addEventListener("change", apply);
    maxInput.addEventListener("change", apply);
    minInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") apply();
    });
    maxInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") apply();
    });

    row.appendChild(minInput);
    row.appendChild(maxInput);
    box.appendChild(title);
    box.appendChild(row);
    box.appendChild(readout);
    box.appendChild(hint);
    overlay.appendChild(box);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) hidePanel();
    });

    document.body.appendChild(overlay);
    apply();

    function showPanel() {
      minInput.value = String(Math.round(minMs / 1000));
      maxInput.value = String(Math.round(maxMs / 1000));
      overlay.style.display = "flex";
      window.setTimeout(() => minInput.focus(), 0);
    }
    function hidePanel() {
      overlay.style.display = "none";
    }
    function isVisible() {
      return overlay.style.display !== "none";
    }
    return { showPanel, hidePanel, isVisible };
  })();

  const setCountdownText = (msLeft) => {
    if (!countdownEl) return;
    const sec = Math.max(0, Math.ceil(msLeft / 1000));
    countdownEl.textContent = String(sec);
  };

  const refillUnvisited = () => {
    unvisited = new Set(sections.map((_, idx) => idx));
  };

  const pickNextIndex = () => {
    const n = sections.length;
    if (n <= 1) return 0;

    if (unvisited.size === 0) {
      refillUnvisited();
      unvisited.delete(activeIndex);
    }

    let pool = [...unvisited];
    if (pool.length > 1) {
      const skipCur = pool.filter((idx) => idx !== activeIndex);
      if (skipCur.length) pool = skipCur;
    }
    const next = pool[Math.floor(Math.random() * pool.length)];
    unvisited.delete(next);
    return next;
  };

  const delayRangeMsForSection = (idx) => {
    const el = sections[idx];
    if (!el) return { lo: minMs, hi: maxMs };
    const aMin = el.getAttribute("data-gap-min-sec");
    const aMax = el.getAttribute("data-gap-max-sec");
    if (aMin == null || aMin === "" || aMax == null || aMax === "") {
      return { lo: minMs, hi: maxMs };
    }
    let lo = parseFloat(aMin) * 1000;
    let hi = parseFloat(aMax) * 1000;
    if (!Number.isFinite(lo) || !Number.isFinite(hi)) return { lo: minMs, hi: maxMs };
    lo = clampMs(lo);
    hi = clampMs(hi);
    if (hi <= lo) hi = lo + 1000;
    return { lo, hi };
  };

  const nextDelayMs = () => {
    const { lo, hi } = delayRangeMsForSection(activeIndex);
    return lo + Math.floor(Math.random() * (hi - lo + 1));
  };

  const applyActiveVisualFocus = () => {
    sections.forEach((section, idx) => {
      if (!section || !section.classList) return;
      section.classList.toggle("bg-active", idx === activeIndex);
    });
  };

  const setActive = (idx) => {
    if (!Number.isFinite(idx) || !sections.length) return;
    const next = ((idx % sections.length) + sections.length) % sections.length;
    if (next === activeIndex && players.length) return;
    activeIndex = next;
    applyActiveVisualFocus();

    players.forEach((p, pi) => {
      if (!p || typeof p.pauseVideo !== "function") return;
      if (pi === activeIndex) return;
      try {
        p.pauseVideo();
      } catch (e) {}
    });

    const active = players[activeIndex];
    if (active && typeof active.playVideo === "function") {
      try {
        active.mute();
        active.playVideo();
      } catch (e) {}
    }
  };

  const scheduleNext = () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = 0;

    const delay = nextDelayMs();
    nextAt = Date.now() + delay;
    setCountdownText(delay);

    timeoutId = window.setTimeout(() => advanceNow("timer"), delay);

    if (!tickerId) {
      tickerId = window.setInterval(() => setCountdownText(nextAt - Date.now()), 100);
    }
  };

  const advanceNow = (_reason) => {
    const now = Date.now();
    if (now - lastAdvanceAt < 250) return;
    lastAdvanceAt = now;

    if (!sections.length) return;
    const nextIdx = pickNextIndex();
    sections[nextIdx].scrollIntoView({ behavior: "smooth", block: "center" });
    setActive(nextIdx);
    scheduleNext();
  };

  const attachEarlyLoop = (player, endSec, startSec = 0) => {
    if (!player || typeof player.getCurrentTime !== "function") return;
    const end = Number(endSec);
    const start = Number(startSec);
    if (!Number.isFinite(end) || end <= 0) return;
    const s = Number.isFinite(start) && start >= 0 ? start : 0;
    window.setInterval(() => {
      try {
        if (player.getPlayerState() !== 1) return;
        if (player.getCurrentTime() >= end) player.seekTo(s, true);
      } catch (e) {}
    }, 150);
  };

  const initPlayers = () => {
    if (playersReady || !(window.YT && typeof window.YT.Player === "function")) return;
    playersReady = true;

    const iframes = Array.from(document.querySelectorAll("iframe[data-video-id]"));
    if (!iframes.length) return;

    iframes.forEach((el, idx) => {
      const id = el.getAttribute("data-video-id");
      if (!id) return;

      const loopEndSec = el.getAttribute("data-loop-end-sec");
      const loopStartSec = el.getAttribute("data-loop-start-sec");

      players[idx] = new YT.Player(el, {
        events: {
          onReady: (ev) => {
            try {
              ev.target.mute();
            } catch (e) {}
            if (idx === activeIndex) {
              try {
                ev.target.playVideo();
              } catch (e) {}
            } else {
              try {
                ev.target.pauseVideo();
              } catch (e) {}
            }

            if (loopEndSec != null && loopEndSec !== "") {
              const end = parseFloat(loopEndSec);
              const start =
                loopStartSec != null && loopStartSec !== "" ? parseFloat(loopStartSec) : 0;
              attachEarlyLoop(ev.target, end, start);
            }
          },
          onStateChange: (ev) => {
            if (!window.YT || !window.YT.PlayerState) return;
            if (ev.data === window.YT.PlayerState.ENDED && idx === activeIndex) {
              advanceNow("ended");
            }
          },
        },
      });
    });
  };

  const ensureYouTubeApi = () => {
    if (window.YT && typeof window.YT.Player === "function") {
      initPlayers();
      return;
    }

    const priorReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof priorReady === "function") {
        try {
          priorReady();
        } catch (e) {}
      }
      initPlayers();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
  };

  window.addEventListener(
    "load",
    () => {
      sections = Array.from(document.querySelectorAll(".section"));
      if (!sections.length) {
        if (countdownEl) countdownEl.textContent = "No videos found";
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          let best = null;
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
          }
          if (!best) return;
          const idx = sections.indexOf(best.target);
          if (idx >= 0) setActive(idx);
        },
        { threshold: [0.6, 0.75, 0.9] }
      );
      sections.forEach((s) => io.observe(s));

      queueMicrotask(() => {
        refillUnvisited();
        if (sections.length > 1) unvisited.delete(activeIndex);
        applyActiveVisualFocus();
      });

      ensureYouTubeApi();
      scheduleNext();
    },
    { once: true }
  );

  window.addEventListener("keydown", (e) => {
    if (e.key === "m" || e.key === "M") {
      const t = e.target;
      const tag = t && t.tagName;
      if (!panel.isVisible() && (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT")) {
        return;
      }
      e.preventDefault();
      if (panel.isVisible()) panel.hidePanel();
      else panel.showPanel();
      return;
    }
    if (e.key === "Escape" && panel.isVisible()) {
      panel.hidePanel();
      e.preventDefault();
    }
  });
})();
