/**
 * Pre-build clear UK English glosses for Chinese senses (avoids fragment translation).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { expandPhraseUK } from "./phrase-expand.mjs";
import { isGenericGloss } from "./student-meanings.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const parseSrc = fs.readFileSync(path.join(dir, "vocab-data.js"), "utf8");
const parseVocabRaw = new Function(`${parseSrc}; return parseVocabRaw;`)();
const entries = parseVocabRaw(fs.readFileSync(path.join(dir, "raw"), "utf8")).flatMap(
  (s) => s.entries
);

function stripZhDomain(zh) {
  return zh.replace(/[（(][^）)]+[）)]/g, "").trim();
}

function parseSenses(zh) {
  const cleaned = zh.replace(/\s+/g, " ").trim();
  const parts = cleaned.split(/\s*,\s*(?=\(\d+\)\s*)/).map((p) =>
    p.replace(/^\(\d+\)\s*/, "").trim()
  );
  if (parts.length === 1 && !/^\(\d+\)/.test(cleaned)) return [cleaned];
  return parts.filter(Boolean);
}

function category(en, zh) {
  const t = en.toLowerCase();
  if (/aesthetic|critic|appreciation|theory|interpret|judg|perception|concept/i.test(t))
    return "concept";
  if (/ism$|baroque|renaissance|impression|cubism|surreal|dada|gothic/i.test(t) || /主義|流派/.test(zh))
    return "movement";
  if (/民間|民俗|宗教|祭祀/.test(zh)) return "social";
  if (/紙|墨|筆|釉|窯|泥|版|腐蝕|顯影/.test(zh)) return "material";
  return "general";
}

const phrase = {};
for (const e of entries) {
  const term = e.en.split(",")[0].trim();
  const cat = category(e.en, e.zh);
  for (const s of parseSenses(e.zh)) {
    const core = stripZhDomain(s);
    if (!core || phrase[core]) continue;
    const gloss = expandPhraseUK(term, core, cat, []);
    if (!isGenericGloss(gloss)) phrase[core] = gloss;
  }
}

fs.writeFileSync(path.join(dir, "phrase-gloss.json"), JSON.stringify(phrase, null, 0));
console.log(`phrase-gloss.json: ${Object.keys(phrase).length} phrases`);
