/** Merge PDF-style lines (English then Chinese on separate lines). */
function normalizeGlossaryRaw(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const out = [];
  let pendingEn = null;
  let started = false;

  const flushEn = () => {
    if (pendingEn) {
      out.push(pendingEn.trim());
      pendingEn = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^source:/i.test(line) || /^\d+$/.test(line)) continue;

    if (/^[A-Z]$/.test(line)) {
      flushEn();
      started = true;
      out.push(line);
      continue;
    }

    if (!started) continue;

    const hasCjk = /[\u4e00-\u9fff]/.test(line);
    const hasLatin = /[A-Za-z]/.test(line);

    if (hasCjk && hasLatin) {
      flushEn();
      out.push(line);
      continue;
    }

    if (hasCjk) {
      if (pendingEn) {
        out.push(`${pendingEn} ${line}`.trim());
        pendingEn = null;
      } else if (out.length) {
        out[out.length - 1] = `${out[out.length - 1]} ${line}`.trim();
      }
      continue;
    }

    if (hasLatin) {
      pendingEn = pendingEn ? `${pendingEn} ${line}` : line;
    }
  }

  flushEn();
  return out.join("\n");
}

/** Parsed from EDB Visual Arts glossary (raw). */
function parseVocabRaw(text) {
  let sections = parseVocabCore(text);
  const count = sections.reduce((n, s) => n + s.entries.length, 0);
  if (count < 500) sections = parseVocabCore(normalizeGlossaryRaw(text));
  return sections;
}

function parseVocabCore(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const sections = [];
  let section = null;
  let pending = null;

  const flush = () => {
    if (!section || !pending) {
      pending = null;
      return;
    }
    const en = pending.en.replace(/\s+/g, " ").trim();
    const zh = pending.zh.replace(/\s+/g, " ").trim();
    if (en || zh) section.entries.push({ en, zh });
    pending = null;
  };

  const isSection = (line) => /^[A-Z]$/.test(line);
  const cjkIndex = (line) => {
    const m = line.match(/[\u4e00-\u9fff]/);
    return m ? m.index : -1;
  };
  const isLatinContinuation = (line) =>
    /[A-Za-z]/.test(line) && cjkIndex(line) < 0;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^source:/i.test(line)) continue;
    if (/^\d+$/.test(line)) continue;

    if (isSection(line)) {
      flush();
      section = { letter: line, entries: [] };
      sections.push(section);
      continue;
    }

    if (!section) continue;

    const idx = cjkIndex(line);
    if (idx > 0) {
      flush();
      let en = line.slice(0, idx).trim().replace(/\s*\(\d+\)\s*$/, "");
      pending = { en, zh: line.slice(idx).trim() };
      continue;
    }

    if (pending) {
      if (isLatinContinuation(line)) {
        pending.en = `${pending.en} ${line}`.trim();
        continue;
      }
      pending.zh = `${pending.zh} ${line}`.trim();
      continue;
    }

    if (/^[A-Za-z]/.test(line)) {
      pending = { en: line, zh: "" };
    }
  }

  flush();
  return sections.filter((s) => s.entries.length > 0);
}

if (typeof module !== "undefined") {
  module.exports = { parseVocabRaw, normalizeGlossaryRaw };
}
