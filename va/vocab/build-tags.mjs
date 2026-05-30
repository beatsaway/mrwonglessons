import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const parseSrc = fs.readFileSync(path.join(dir, "vocab-data.js"), "utf8");
const parseVocabRaw = new Function(`${parseSrc}; return parseVocabRaw;`)();
const text = fs.readFileSync(path.join(dir, "raw"), "utf8");
const entries = parseVocabRaw(text).flatMap((s) => s.entries);

/** id, label, group (for UI sections) */
export const TAG_META = [
  { id: "impressionism", label: "Impressionism", group: "movement" },
  { id: "post-impressionism", label: "Post-Impressionism", group: "movement" },
  { id: "cubism", label: "Cubism", group: "movement" },
  { id: "surrealism", label: "Surrealism", group: "movement" },
  { id: "expressionism", label: "Expressionism", group: "movement" },
  { id: "abstract-expressionism", label: "Abstract Expressionism", group: "movement" },
  { id: "fauvism", label: "Fauvism", group: "movement" },
  { id: "dada", label: "Dada", group: "movement" },
  { id: "pop-art", label: "Pop Art", group: "movement" },
  { id: "op-art", label: "Op Art", group: "movement" },
  { id: "minimalism", label: "Minimalism", group: "movement" },
  { id: "realism", label: "Realism", group: "movement" },
  { id: "romanticism", label: "Romanticism", group: "movement" },
  { id: "baroque", label: "Baroque", group: "movement" },
  { id: "renaissance", label: "Renaissance", group: "movement" },
  { id: "rococo", label: "Rococo", group: "movement" },
  { id: "gothic", label: "Gothic", group: "movement" },
  { id: "art-nouveau", label: "Art Nouveau", group: "movement" },
  { id: "bauhaus", label: "Bauhaus", group: "movement" },
  { id: "futurism", label: "Futurism", group: "movement" },
  { id: "constructivism", label: "Constructivism", group: "movement" },
  { id: "symbolism", label: "Symbolism", group: "movement" },
  { id: "neoclassicism", label: "Neoclassicism", group: "movement" },
  { id: "postmodernism", label: "Postmodernism", group: "movement" },
  { id: "primitivism", label: "Primitivism", group: "movement" },
  { id: "abstract", label: "Abstract", group: "style" },
  { id: "chinese", label: "Chinese art", group: "culture" },
  { id: "japanese", label: "Japanese art", group: "culture" },
  { id: "western", label: "Western art", group: "culture" },
  { id: "painting", label: "Painting", group: "medium" },
  { id: "sculpture", label: "Sculpture", group: "medium" },
  { id: "ceramics", label: "Ceramics", group: "medium" },
  { id: "printmaking", label: "Printmaking", group: "medium" },
  { id: "photography", label: "Photography", group: "medium" },
  { id: "design", label: "Design", group: "medium" },
  { id: "architecture", label: "Architecture", group: "medium" },
  { id: "calligraphy", label: "Calligraphy", group: "medium" },
  { id: "installation", label: "Installation", group: "medium" },
  { id: "digital", label: "Digital", group: "medium" },
  { id: "colour", label: "Colour", group: "formal" },
  { id: "composition", label: "Composition", group: "formal" },
  { id: "perspective", label: "Perspective", group: "formal" },
  { id: "appreciation", label: "Appreciation", group: "formal" }
];

const RULES = [
  { tag: "impressionism", en: /impressionism|impressionist|impression\b/i, zh: /印象/ },
  { tag: "post-impressionism", en: /post-impression|post impression/i, zh: /後印象/ },
  { tag: "cubism", en: /cubism|cubist/i, zh: /立體主義|立體派/ },
  { tag: "surrealism", en: /surreal/i, zh: /超現實/ },
  { tag: "expressionism", en: /expressionism|expressionist/i, zh: /表現主義|表現派/ },
  { tag: "abstract-expressionism", en: /abstract expressionism/i, zh: /抽象表現主義/ },
  { tag: "fauvism", en: /fauvism|fauve/i, zh: /野獸/ },
  { tag: "dada", en: /dada/i, zh: /達達/ },
  { tag: "pop-art", en: /pop art/i, zh: /普普|大眾藝術/ },
  { tag: "op-art", en: /op art|optical art/i, zh: /歐普|光效應/ },
  { tag: "minimalism", en: /minimal art|minimalism/i, zh: /極簡|至簡/ },
  { tag: "realism", en: /realism|realist/i, zh: /寫實主義|寫實派|寫實/ },
  { tag: "romanticism", en: /romanticism|romantic/i, zh: /浪漫主義|浪漫/ },
  { tag: "baroque", en: /baroque/i, zh: /巴洛克|巴羅克/ },
  { tag: "renaissance", en: /renaissance/i, zh: /文藝復興/ },
  { tag: "rococo", en: /rococo/i, zh: /洛可可|羅可可/ },
  { tag: "gothic", en: /gothic/i, zh: /哥德|哥特/ },
  { tag: "art-nouveau", en: /art nouveau/i, zh: /新藝術/ },
  { tag: "bauhaus", en: /bauhaus/i, zh: /包浩斯/ },
  { tag: "futurism", en: /futurism|futurist/i, zh: /未來主義|未來派/ },
  { tag: "constructivism", en: /constructivism/i, zh: /構成主義/ },
  { tag: "symbolism", en: /symbolism|symbolist/i, zh: /象徵主義/ },
  { tag: "neoclassicism", en: /neo-classic|neoclassic/i, zh: /新古典/ },
  { tag: "postmodernism", en: /post-modern|postmodern/i, zh: /後現代/ },
  { tag: "primitivism", en: /primitiv/i, zh: /原始主義|原始藝術/ },
  { tag: "abstract", en: /abstract(?! expressionism)/i, zh: /抽象/ },
  { tag: "chinese", en: /chinese|wenrenhua|yunwen|leiwen|boshan|boneless/i, zh: /中國|國畫|書法|水墨|文人畫|冊頁|手卷|掛軸|篆刻|沒骨|雲紋|雷紋|博山|宣紙|景泰藍/ },
  { tag: "japanese", en: /ukiyo|temmoku/i, zh: /浮世繪|天目釉/ },
  { tag: "western", en: /western|easel|oil paint|renaissance|baroque|gothic|acrylic|fresco|tempera|venetian/i, zh: /西洋|油畫|濕壁畫|蛋彩|威尼斯/ },
  { tag: "painting", en: /painting|paint\b|gouache|watercolour|watercolor|mural|fresco|impasto|canvas|easel|brush|palette/i, zh: /繪畫|油畫|水彩|壁畫|畫布|畫筆|調色|筆觸|颜料|顏料/ },
  { tag: "sculpture", en: /sculpt|carv|cast|relief|statue|bust|armature|bronze cast/i, zh: /雕塑|雕刻|浮雕|塑像|雕像|鑄/ },
  { tag: "ceramics", en: /clay|kiln|glaze|firing|pottery|ceramic|slip|wheel|bat wash|bisque|porcelain|earthenware|stoneware|raku/i, zh: /陶|瓷|釉|窯|坯/ },
  { tag: "printmaking", en: /etch|engrav|woodcut|litho|screen print|intaglio|relief print|mezzotint|aquatint|collagraph|serigraph|stencil/i, zh: /版畫|印刷|蚀|腐蝕|木刻|石印|絲印|網印/ },
  { tag: "photography", en: /photo|camera|lens|shutter|aperture|exposure|dark room|film\b|pixel|view camera/i, zh: /攝影|相機|鏡頭|光圈|曝光|菲林|黑房/ },
  { tag: "design", en: /design|graphic|typography|poster|logo|layout|branding|packaging|font\b|typeface/i, zh: /設計|平面|字體|海報|標誌|包裝|排版/ },
  { tag: "architecture", en: /arch\b|column|vault|façade|buttress|dome|pediment|cornice|architrave|cantilever|basilica/i, zh: /建築|柱|拱|穹|立面|扶壁/ },
  { tag: "calligraphy", en: /calligraphy|lettering|typography/i, zh: /書法|篆刻|字體/ },
  { tag: "installation", en: /installation|happening|land art|site-specific/i, zh: /裝置|地景|偶發/ },
  { tag: "digital", en: /digital|computer|cad|cam\b|pixel|bitmap|vector|software/i, zh: /數碼|電腦|像素|向量/ },
  { tag: "colour", en: /colour|color|hue|chroma|tone|tint|shade|palette|monochrom|complementary|analogous|saturation/i, zh: /色|彩度|色相|明度|色調|配色/ },
  { tag: "composition", en: /composition|balance|proportion|rhythm|unity|emphasis|focal|layout|symmetr|grid\b/i, zh: /構圖|均衡|比例|節奏|統一|重心|布局/ },
  { tag: "perspective", en: /perspective|vanishing|foreshorten|aerial view|bird.?s.?eye/i, zh: /透視|滅點|鳥瞰|空氣透視/ },
  {
    tag: "appreciation",
    en: /aesthetic|critic|appreciation|interpret|judg|perception|connoisseur|critique/i,
    zh: /評賞|批評|美學|審美|詮釋|評論|鑑賞/
  }
];

function domains(zh) {
  return [...zh.matchAll(/[（(]([^）)]+)[）)]/g)]
    .map((m) => m[1].trim())
    .filter((d) => d && !/^\d+$/.test(d));
}

function tagEntry(entry) {
  const en = entry.en;
  const zh = entry.zh;
  const hay = `${en} ${zh}`;
  const tags = new Set();

  for (const r of RULES) {
    if ((r.en && r.en.test(en)) || (r.zh && r.zh.test(zh)) || (r.en && r.en.test(hay))) {
      tags.add(r.tag);
    }
  }

  for (const d of domains(zh)) {
    if (d.includes("版畫")) tags.add("printmaking");
    if (d.includes("陶藝")) tags.add("ceramics");
    if (d.includes("攝影")) tags.add("photography");
    if (d.includes("建築")) tags.add("architecture");
    if (d.includes("繪畫")) tags.add("painting");
    if (d.includes("設計") || d.includes("印刷")) tags.add("design");
    if (d.includes("中國")) tags.add("chinese");
    if (d.includes("書法")) tags.add("calligraphy");
  }

  return [...tags].sort();
}

const VOCAB_TAGS = {};
for (const e of entries) {
  VOCAB_TAGS[e.en.toLowerCase()] = tagEntry(e);
}

const overridesPath = path.join(dir, "vocab-tags-overrides.json");
if (fs.existsSync(overridesPath)) {
  const over = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
  for (const [k, v] of Object.entries(over)) {
    VOCAB_TAGS[k.toLowerCase()] = [...new Set(v)].sort();
  }
}

const out = `/* Generated by build-tags.mjs */
const VOCAB_TAG_META = ${JSON.stringify(TAG_META)};
const VOCAB_TAGS = ${JSON.stringify(VOCAB_TAGS)};

function getEntryTags(en) {
  const raw = (en || "").trim().toLowerCase();
  return VOCAB_TAGS[raw] || VOCAB_TAGS[raw.split(",")[0].trim()] || [];
}
`;

fs.writeFileSync(path.join(dir, "vocab-tags.js"), out);

const counts = {};
for (const tags of Object.values(VOCAB_TAGS)) {
  for (const t of tags) counts[t] = (counts[t] || 0) + 1;
}
console.log(`tags → vocab-tags.js (${entries.length} entries)`);
console.log(
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([k, v]) => `${k}:${v}`)
    .join(", ")
);
