import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineEnglish, padOverrideNote } from "./learner-english.mjs";
import { detectLens, zhLensLabel, buildLearnerExample } from "./note-context.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const parseSrc = fs.readFileSync(path.join(dir, "vocab-data.js"), "utf8");
const parseVocabRaw = new Function(`${parseSrc}; return parseVocabRaw;`)();
const text = fs.readFileSync(path.join(dir, "raw"), "utf8");
const sections = parseVocabRaw(text);
const entries = sections.flatMap((s) => s.entries.map((e) => ({ ...e, letter: s.letter })));

/** Same English headword may appear on multiple lines in raw (e.g. alum paper → 礬紙 and 熟紙). */
function mergeEntriesByEnglish(list) {
  const map = new Map();
  for (const e of list) {
    const key = primaryEn(e.en).toLowerCase();
    if (!map.has(key)) {
      map.set(key, { ...e });
      continue;
    }
    const prev = map.get(key);
    const prevSenses = parseSenses(prev.zh);
    const addSenses = parseSenses(e.zh);
    const combined = [...prevSenses];
    for (const s of addSenses) {
      if (!combined.includes(s)) combined.push(s);
    }
    prev.zh =
      combined.length === 1
        ? combined[0]
        : combined.map((s, i) => `(${i + 1}) ${s}`).join(" ");
  }
  return [...map.values()];
}

function primaryEn(en) {
  return en.split(",")[0].trim();
}

function parseSenses(zh) {
  const cleaned = zh.replace(/\s+/g, " ").trim();
  const parts = cleaned.split(/\s*,\s*(?=\(\d+\)\s*)/).map((p) =>
    p.replace(/^\(\d+\)\s*/, "").trim()
  );
  if (parts.length === 1 && !/^\(\d+\)/.test(cleaned)) return [cleaned];
  return parts.filter(Boolean);
}

function domains(zh) {
  return [
    ...new Set(
      [...zh.matchAll(/[（(]([^）)]+)[）)]/g)]
        .map((m) => m[1].trim())
        .filter((d) => d && !/^\d+$/.test(d))
    )
  ];
}

function category(en, zh) {
  const t = en.toLowerCase();
  const d = domains(zh).join(" ");
  if (/aesthetic|critic|appreciation|theory|interpret|judg|perception|concept|ideolog|symbolism/i.test(t))
    return "concept";
  if (d.includes("版畫") || /etch|print|woodcut|litho|screen|engrav|intaglio|stencil/i.test(t))
    return "print";
  if (d.includes("陶藝") || /clay|kiln|glaze|firing|pottery|ceramic|slip|wheel|bat/i.test(t))
    return "ceramic";
  if (d.includes("攝影") || /photo|camera|lens|exposure|aperture|shutter/i.test(t))
    return "photo";
  if (d.includes("建築") || /arch|column|vault|façade|buttress|dome|order/i.test(t))
    return "architecture";
  if (
    /ism$|baroque|renaissance|romantic|impression|cubism|surreal|dada|gothic|rococo|nouveau/i.test(
      t
    ) ||
    /主義|流派|畫派|派$|風格|世紀|時代/.test(zh)
  )
    return "movement";
  if (/民間|民俗|風俗|儀式|宗教|祭祀|原始|土著|鄉土/.test(zh)) return "social";
  if (/紙|墨|筆|硯|顏料|釉|窯|泥|坯|溶劑|化學|劑|膠|版|腐蝕|顯影|定影|石膏|銼|蠟|染|刀|刨|錘|鑿|絲|布|畫布/i.test(zh))
    return "material";
  if (/wood|plaster|rasp|brush|paper|ink|clay|glaze|kiln|canvas|easel|palette/i.test(t)) return "material";
  if (/colour|color|hue|tone|chroma|palette|tint|shade|saturation|monochrom/i.test(t))
    return "colour";
  if (/perspective|composition|balance|proportion|focal|layout|symmetr|space|foreground/i.test(t))
    return "composition";
  if (/brush|stroke|drawing|paint|sketch|line|contour|texture|value|form|shape/i.test(t))
    return "form";
  if (/sculpt|relief|carv|cast|armature|statue|bust/i.test(t)) return "sculpture";
  if (/design|layout|typography|poster|graphic|logo/i.test(t)) return "design";
  return "general";
}

const ZH_LEARN = {
  history: "學習提示：寫作時寫清楚時代、典型技法與作品例證，不要只寫標籤名稱。",
  studio: "學習提示：寫作時寫清楚媒材或工序，並在畫面／器物上指出可見痕跡。",
  social: "學習提示：寫作時寫清楚誰在甚麼情境使用或觀看，以及文化或社會意義。",
  viewing: "學習提示：寫作時先描寫看得見的特徵，再說明氣氛或詮釋。"
};

function zhMeaning(term, senses, doms, lens) {
  const dom = doms.length ? `常見於${[...new Set(doms)].join("、")}。` : "";
  const tag = zhLensLabel(lens);
  const tip = ZH_LEARN[lens] || "";
  const head = `${term}：`;
  if (senses.length === 1) return `${head}${senses[0]}。${tag}${tip}${dom}`;
  return `${head}${senses.map((s, i) => `（${i + 1}）${s}`).join("；")}。${tag}${tip}${dom}`;
}

function buildNote(entry) {
  const term = primaryEn(entry.en);
  const senses = parseSenses(entry.zh);
  const doms = domains(entry.zh);
  const cat = category(entry.en, entry.zh);
  const lens = detectLens(entry.en, entry.zh, cat, doms);
  return {
    meaning: {
      en: defineEnglish(term, senses, cat, doms),
      zh: zhMeaning(term, senses, doms, lens)
    },
    example: buildLearnerExample(term, senses, cat, lens, doms)
  };
}

const notes = {};
for (const e of mergeEntriesByEnglish(entries)) {
  notes[e.en.toLowerCase()] = buildNote(e);
}

const overridesPath = path.join(dir, "vocab-notes-overrides.json");
if (fs.existsSync(overridesPath)) {
  const ov = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
  for (const [k, note] of Object.entries(ov)) {
    notes[k] = padOverrideNote(k, note, notes[k]);
  }
}

const out = `/* Generated by build-notes.mjs */
const VOCAB_NOTES = ${JSON.stringify(notes)};

function lookupVocabNote(en) {
  const raw = (en || "").trim().toLowerCase();
  if (VOCAB_NOTES[raw]) return VOCAB_NOTES[raw];
  const first = raw.split(",")[0].trim();
  return VOCAB_NOTES[first] || null;
}

function getVocabNote(entry) {
  return lookupVocabNote(entry.en);
}
`;

fs.writeFileSync(path.join(dir, "vocab-notes.js"), out);
console.log(`notes ${Object.keys(notes).length} → vocab-notes.js`);
