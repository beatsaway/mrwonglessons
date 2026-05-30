/**
 * Pre-compute English glosses for all Chinese senses in raw → gloss-auto.json
 * Merged at build time into translations (reduces weak fallbacks).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ZH_GLOSS_BASE, stripZhDomain, expandFromZhCore, isBadGlossText } from "./gloss-zh-en.mjs";
import { segmentTranslate } from "./zh-to-en.mjs";

function lookupBase(core) {
  if (ZH_GLOSS_BASE[core]) return ZH_GLOSS_BASE[core];
  const seg = segmentTranslate(core);
  if (seg && seg.length >= 10 && !/^[\w-]+$/.test(seg)) return seg;
  const guess = (seg || core).split(/[;\s]/)[0].slice(0, 40);
  const exp = expandFromZhCore(core, guess, "general");
  if (exp && exp.length >= 14 && !/^Term used in /.test(exp)) return exp;
  return seg && seg.length >= 4 ? seg : null;
}

const dir = path.dirname(fileURLToPath(import.meta.url));
const parseSrc = fs.readFileSync(path.join(dir, "vocab-data.js"), "utf8");
const parseVocabRaw = new Function(`${parseSrc}; return parseVocabRaw;`)();
const entries = parseVocabRaw(fs.readFileSync(path.join(dir, "raw"), "utf8")).flatMap(
  (s) => s.entries
);

const senses = new Set();
for (const e of entries) {
  const zh = e.zh.replace(/\s+/g, " ").trim();
  zh.split(/\s*,\s*(?=\(\d+\)\s*)/).forEach((p) => {
    const s = p.replace(/^\(\d+\)\s*/, "").trim();
    if (s) senses.add(s);
  });
}

const auto = {};
let added = 0;
for (const s of senses) {
  const core = stripZhDomain(s);
  if (ZH_GLOSS_BASE[core] || auto[core]) continue;
  const en = lookupBase(core);
  if (en && en.length >= 2 && !/[\u4e00-\u9fff]/.test(en) && !isBadGlossText(en)) {
    auto[core] = en;
    added++;
  }
}

fs.writeFileSync(
  path.join(dir, "gloss-auto.json"),
  JSON.stringify(auto, null, 0)
);
console.log(`gloss-auto.json: +${added} entries (${Object.keys(auto).length} total)`);
