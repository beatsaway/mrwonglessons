(() => {
  if (window.__LAZY_BG_ROTATOR_INIT__) return;
  window.__LAZY_BG_ROTATOR_INIT__ = true;

  let minMs = 30_000;
  let maxMs = 60_000;
  let sections = [];
  let activeIndex = 0;
  let loadedIndex = -1;
  const players = [];
  let unvisited = new Set();
  let nextAt = 0;
  let timeoutId = 0;
  let tickerId = 0;
  let lastAdvanceAt = 0;
  let lastPlaybackTime = 0;
  let ytReadyPromise = null;
  let activating = false;

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
      .video[data-lazy-mount]:empty {
        background: #111;
      }
    `;
    document.head.appendChild(style);
  })();

  const panel = (() => {
    const overlay = document.createElement("div");
    overlay.id = "bg-range-panel";
    overlay.style.cssText =
      "position:fixed;inset:0;z-index:10001;display:none;align-items:center;justify-content:center;padding:1rem;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);";

    const box = document.createElement("div");
    box.style.cssText =
      "width:min(24rem,100%);padding:1rem 1.1rem;border-radius:14px;background:rgba(22,22,26,0.96);border:1px solid rgba(255,255,255,0.12);box-shadow:0 16px 48px rgba(0,0,0,0.45);color:rgba(255,255,255,0.9);font-family:system-ui,sans-serif;";

    const title = document.createElement("div");
    title.textContent = "Timer range (seconds)";
    title.style.cssText = "font-size:13px;margin-bottom:0.6rem;";

    const row = document.createElement("div");
    row.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;";

    const minInput = document.createElement("input");
    minInput.type = "number";
    minInput.min = "3";
    minInput.max = "180";
    minInput.step = "1";
    minInput.style.cssText =
      "width:100%;padding:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:rgba(0,0,0,0.25);color:white;";

    const maxInput = document.createElement("input");
    maxInput.type = "number";
    maxInput.min = "3";
    maxInput.max = "180";
    maxInput.step = "1";
    maxInput.style.cssText = minInput.style.cssText;

    const hint = document.createElement("div");
    hint.style.cssText = "font-size:12px;color:rgba(255,255,255,0.62);margin-top:0.6rem;";
    hint.textContent = "Press M to toggle, Enter to apply, Esc to close. Lazy load: one embed at a time.";

    const readout = document.createElement("div");
    readout.style.cssText = "font-size:12px;color:rgba(255,255,255,0.7);margin-top:0.4rem;";

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

    row.append(minInput, maxInput);
    box.append(title, row, readout, hint);
    overlay.appendChild(box);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) hidePanel();
    });
    document.body.appendChild(overlay);
    apply();

    return {
      showPanel() {
        minInput.value = String(Math.round(minMs / 1000));
        maxInput.value = String(Math.round(maxMs / 1000));
        overlay.style.display = "flex";
        window.setTimeout(() => minInput.focus(), 0);
      },
      hidePanel() {
        overlay.style.display = "none";
      },
      isVisible() {
        return overlay.style.display !== "none";
      },
    };
  })();

  const setCountdownText = (msLeft) => {
    if (!countdownEl) return;
    const sec = Math.max(0, Math.ceil(msLeft / 1000));
    countdownEl.textContent = String(sec);
  };

  const mountAt = (idx) => sections[idx]?.querySelector(".video[data-lazy-mount], .video");

  const metaAt = (idx) => {
    const section = sections[idx];
    const mount = mountAt(idx);
    if (!section) return null;
    const id = section.getAttribute("data-video-id") || mount?.getAttribute("data-video-id");
    if (!id) return null;
    const startRaw = section.getAttribute("data-start-sec") || mount?.getAttribute("data-start-sec");
    const start = startRaw != null && startRaw !== "" ? parseFloat(startRaw) : 0;
    return {
      id,
      start: Number.isFinite(start) && start >= 0 ? start : 0,
      short: section.hasAttribute("data-short") || mount?.hasAttribute("data-short"),
      loopEnd: section.getAttribute("data-loop-end-sec") || mount?.getAttribute("data-loop-end-sec"),
      loopStart: section.getAttribute("data-loop-start-sec") || mount?.getAttribute("data-loop-start-sec"),
    };
  };

  const isShortAt = (idx) => Boolean(metaAt(idx)?.short);

  const embedUrl = (id, start = 0) => {
    const s = Math.max(0, Math.floor(start));
    return `https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${id}&start=${s}&controls=0&modestbranding=1&playsinline=1&rel=0`;
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
      if (!section?.classList) return;
      section.classList.toggle("bg-active", idx === activeIndex);
    });
  };

  const ensureYouTubeApi = () => {
    if (ytReadyPromise) return ytReadyPromise;
    ytReadyPromise = new Promise((resolve) => {
      const done = () => {
        if (window.YT && typeof window.YT.Player === "function") resolve();
        else window.setTimeout(done, 50);
      };

      if (window.YT && typeof window.YT.Player === "function") {
        resolve();
        return;
      }

      const priorReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof priorReady === "function") {
          try {
            priorReady();
          } catch (e) {}
        }
        done();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    });
    return ytReadyPromise;
  };

  const unloadIndex = (idx) => {
    if (idx < 0) return;
    const p = players[idx];
    if (p) {
      try {
        if (typeof p.stopVideo === "function") p.stopVideo();
      } catch (e) {}
      try {
        if (typeof p.destroy === "function") p.destroy();
      } catch (e) {}
    }
    players[idx] = null;
    const mount = mountAt(idx);
    if (mount) mount.innerHTML = "";
    if (loadedIndex === idx) loadedIndex = -1;
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

  const loadIndex = async (idx) => {
    const meta = metaAt(idx);
    const mount = mountAt(idx);
    if (!meta || !mount) return false;

    await ensureYouTubeApi();

    if (loadedIndex === idx && players[idx]) {
      try {
        players[idx].mute();
        players[idx].playVideo();
      } catch (e) {}
      return true;
    }

    if (loadedIndex >= 0 && loadedIndex !== idx) unloadIndex(loadedIndex);

    mount.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.setAttribute("data-video-id", meta.id);
    if (meta.short) iframe.setAttribute("data-short", "");
    iframe.src = embedUrl(meta.id, meta.start);
    iframe.allow = "autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    mount.appendChild(iframe);

    return new Promise((resolve) => {
      players[idx] = new YT.Player(iframe, {
        events: {
          onReady: (ev) => {
            loadedIndex = idx;
            try {
              ev.target.mute();
              ev.target.playVideo();
            } catch (e) {}
            if (meta.loopEnd != null && meta.loopEnd !== "") {
              const end = parseFloat(meta.loopEnd);
              const start =
                meta.loopStart != null && meta.loopStart !== "" ? parseFloat(meta.loopStart) : 0;
              attachEarlyLoop(ev.target, end, start);
            }
            resolve(true);
          },
          onStateChange: (ev) => {
            if (!window.YT?.PlayerState) return;
            if (ev.data === window.YT.PlayerState.ENDED && idx === activeIndex) {
              advanceNow("ended");
            }
          },
          onError: () => {
            if (idx === activeIndex) advanceNow("error");
          },
        },
      });
    });
  };

  const scheduleNext = () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = 0;

    if (isShortAt(activeIndex)) {
      nextAt = 0;
      if (countdownEl) countdownEl.textContent = "short";
      return;
    }

    const delay = nextDelayMs();
    nextAt = Date.now() + delay;
    setCountdownText(delay);
    timeoutId = window.setTimeout(() => advanceNow("timer"), delay);

    if (!tickerId) {
      tickerId = window.setInterval(() => setCountdownText(nextAt - Date.now()), 100);
    }
  };

  const setActive = async (idx) => {
    if (!Number.isFinite(idx) || !sections.length) return;
    const next = ((idx % sections.length) + sections.length) % sections.length;
    if (next === activeIndex && loadedIndex === next && players[next]) return;

    activeIndex = next;
    lastPlaybackTime = 0;
    applyActiveVisualFocus();

    if (countdownEl) countdownEl.textContent = "…";
    await loadIndex(next);
    scheduleNext();
  };

  const advanceNow = async (reason) => {
    const now = Date.now();
    if (now - lastAdvanceAt < 250) return;
    if (reason === "timer" && isShortAt(activeIndex)) return;
    if (activating) return;
    activating = true;
    lastAdvanceAt = now;

    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = 0;
    }

    try {
      if (!sections.length) return;
      const nextIdx = pickNextIndex();
      sections[nextIdx].scrollIntoView({ behavior: "smooth", block: "center" });
      await setActive(nextIdx);
    } finally {
      activating = false;
    }
  };

  const watchPlaybackEnd = () => {
    window.setInterval(() => {
      if (!sections.length || loadedIndex !== activeIndex) return;
      const p = players[activeIndex];
      const meta = metaAt(activeIndex);
      if (!p || !meta?.short || meta.loopEnd) return;

      try {
        if (!window.YT || p.getPlayerState() !== window.YT.PlayerState.PLAYING) return;
        const dur = p.getDuration();
        const cur = p.getCurrentTime();
        if (dur > 3 && lastPlaybackTime >= dur - 1.5 && cur < 2.5) {
          advanceNow("ended");
          return;
        }
        lastPlaybackTime = cur;
      } catch (e) {}
    }, 300);
  };

  window.addEventListener(
    "load",
    () => {
      sections = Array.from(document.querySelectorAll(".section[data-video-id]"));
      if (!sections.length) {
        if (countdownEl) countdownEl.textContent = "No videos found";
        return;
      }

      sections.forEach((section) => {
        const mount = section.querySelector(".video");
        if (mount) mount.setAttribute("data-lazy-mount", "");
      });

      queueMicrotask(() => {
        refillUnvisited();
        if (sections.length > 1) unvisited.delete(activeIndex);
        applyActiveVisualFocus();
      });

      ensureYouTubeApi();
      watchPlaybackEnd();
      setActive(activeIndex);
    },
    { once: true }
  );

  window.addEventListener("keydown", (e) => {
    if (e.key === "m" || e.key === "M") {
      const t = e.target;
      const tag = t && t.tagName;
      if (!panel.isVisible() && (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT")) return;
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
