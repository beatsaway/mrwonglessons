/**
 * Definitions in plain UK English for art students — what the term means, then how to use it.
 */
import { domainPhraseEn } from "./gloss-zh-en.mjs";
import { expandPhraseUK } from "./phrase-expand.mjs";
import { isSegmentGarbage, toUkEnglish } from "./uk-english.mjs";
import { studentMeaning, studentApplyTip, isGenericGloss } from "./student-meanings.mjs";

function openSentence(term, zhCore, meaning) {
  const name = term.replace(/-/g, " ");
  const m = toUkEnglish(meaning.replace(/\.$/, ""));
  if (/[\u4e00-\u9fff]/.test(zhCore)) {
    return `${name} (「${zhCore}」) is ${m.charAt(0).toLowerCase() + m.slice(1)}.`;
  }
  return `${name} is ${m.charAt(0).toLowerCase() + m.slice(1)}.`;
}

function resolveMeaning(term, zhCore, cat, doms) {
  const direct = studentMeaning(term, zhCore, cat);
  if (direct) return direct;

  let fromPhrase = expandPhraseUK(term, zhCore, cat, doms);
  if (isGenericGloss(fromPhrase) || isSegmentGarbage(fromPhrase)) {
    const retry = studentMeaning(term, zhCore, cat);
    if (retry) return retry;
    fromPhrase = expandPhraseUK(term, zhCore, cat, doms);
  }
  return fromPhrase;
}

export function proseForSense(term, zhSense, cat, doms) {
  const zhCore = zhSense.replace(/[（(][^）)]+[）)]/g, "").trim();
  const meaning = resolveMeaning(term, zhCore, cat, doms);
  const tip = studentApplyTip(term, cat);
  const domNote = doms.length ? ` Often used in ${[...new Set(doms)].join(", ")}.` : "";
  return toUkEnglish(`${openSentence(term, zhCore, meaning)} ${tip}${domNote}`.replace(/\s+/g, " ").trim());
}

export function defineEnglish(term, senses, cat, doms) {
  return buildLearnerDefinition(term, senses, cat, doms);
}

export function padOverrideNote(key, override, builtNote) {
  if (!override?.meaning?.en) return override;
  return { ...override, meaning: { ...override.meaning, en: toUkEnglish(override.meaning.en.trim()) } };
}

export function buildLearnerDefinition(term, senses, cat, doms) {
  const dom = domainPhraseEn(doms);
  const blocks = senses.map((s, i) => {
    const p = proseForSense(term, s, cat, doms);
    return senses.length > 1 ? `(${i + 1}) ${p}` : p;
  });

  const seen = new Set();
  const uniq = [];
  for (const b of blocks) {
    const k = b.replace(/^\(\d+\)\s*/, "").slice(0, 90).toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    uniq.push(b);
  }

  return toUkEnglish(uniq.join(" ") + dom);
}
