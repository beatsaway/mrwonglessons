import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  ZH_GLOSS,
  EN_TERM_DEF,
  expandFromZhCore,
  expandMovementFromZh,
  isBadGlossText,
  isTautology,
  translateZhSense
} from "./gloss-zh-en.mjs";
import { isSegmentGarbage, toUkEnglish } from "./uk-english.mjs";
import { studentMeaning, isGenericGloss } from "./student-meanings.mjs";

const _dir = path.dirname(fileURLToPath(import.meta.url));
const _phrasePath = path.join(_dir, "phrase-gloss.json");
const PHRASE_GLOSS_RAW = fs.existsSync(_phrasePath)
  ? JSON.parse(fs.readFileSync(_phrasePath, "utf8"))
  : {};
const PHRASE_GLOSS = {};
for (const [k, v] of Object.entries(PHRASE_GLOSS_RAW)) {
  if (!isGenericGloss(v)) PHRASE_GLOSS[k] = v;
}

/** Hand-checked UK glosses for phrases that fragment when machine-translated. */
export const ZH_PHRASE_UK = {
  批判性評賞:
    "structured appreciation of art: you describe what you see, use evidence from the work, and give reasoned judgement rather than opinion alone",
  批判性對話:
    "reasoned discussion about artworks, using questions and exchange of views to deepen understanding",
  藝術評賞: "the practice of looking closely at artworks and responding with informed description and judgement",
  藝術批評: "published or spoken evaluation of art using evidence, context and clear argument",
  藝術評論: "written commentary on artworks, exhibitions or artists",
  美的品味: "standards used to judge what is considered beautiful in art",
  審美趣味: "a viewer’s cultivated interest and sensitivity when engaging with visual works",
  加色法原理: "additive colour mixing — combining light (e.g. RGB on screen) to build hues",
  累積色原理: "additive colour theory — colours build towards lighter mixes, as with light",
  高視: "a high viewpoint looking down on the subject",
  俯視: "a view from above (bird’s-eye view)",
  鳥瞰法: "bird’s-eye view — seeing the subject from high above",
  高視: "a high viewpoint — looking down on the subject from above",
  俯視: "a view from above (overhead viewpoint)",
  筆繪作品: "a work defined mainly by brush handling and visible stroke character",
  透明水彩畫: "watercolour painting using transparent washes on paper",
  幼點腐蝕法: "fine aquatint etching using many small dots to create tone",
  盲繪: "blind drawing — drawing without looking at the paper to free line and observation",
  筆法: "brushwork — the character of marks made by the brush or tool",
  筆觸: "visible brushstrokes that show the artist’s handling of paint",
  磨光法: "burnishing — polishing a surface to a shine (metal, clay or print)",
  中國書法: "Chinese calligraphy — the art of expressive writing with brush and ink",
  泥條成形法: "coiling — building clay forms from rolled clay coils",
  輪廓線: "contour line — a line that defines the edge of a form",
  諷刺畫: "caricature — exaggerated likeness for satire or humour",
  漫畫: "cartoon — simplified or sequential drawn images, often humorous",
  卡通: "cartoon imagery — simplified figures or scenes for humour or design",
  地圖投影法: "cartographic projection — representing the globe on a flat map grid",
  組織識別: "corporate identity — the visual system (logo, type, colour) identifying an organisation",
  木銼: "a coarse wood rasp used to shape timber",
  石膏: "plaster powder mixed with water for casts, moulds or surface coating",
  蠟染: "batik — applying wax resist before dyeing fabric",
  印象派: "a late nineteenth-century approach capturing fleeting light and atmosphere with broken colour",
  印象主義: "a late nineteenth-century movement focused on light, modern life and visible brushwork outdoors",
  抽象畫: "abstract painting — non-representational or highly simplified imagery"
};

const ZH_TOOL = {
  木銼: ZH_PHRASE_UK.木銼,
  石膏: ZH_PHRASE_UK.石膏,
  窯板保護劑:
    "bat wash — a protective coating on kiln shelves so glazed ware lifts cleanly after firing"
};

export function expandPhraseUK(term, zhCore, cat = "general", doms = []) {
  const key = term.toLowerCase();
  const student = studentMeaning(term, zhCore, cat);
  if (student) return student;

  if (/；/.test(zhCore)) {
    const parts = zhCore
      .split(/；/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length > 1) {
      return parts
        .map((p) => expandPhraseUK(term, p, cat, doms))
        .filter(Boolean)
        .join("; ");
    }
  }
  if (ZH_PHRASE_UK[zhCore]) return ZH_PHRASE_UK[zhCore];
  if (PHRASE_GLOSS[zhCore]) return PHRASE_GLOSS[zhCore];
  if (ZH_TOOL[zhCore]) return ZH_TOOL[zhCore];

  if (EN_TERM_DEF[key]) {
    const d = EN_TERM_DEF[key];
    return toUkEnglish(d.includes(":") ? d.replace(/^[^:]+:\s*/, "").trim() : d);
  }

  let t = translateZhSense(zhCore);
  if (t) {
    const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(new RegExp(`^${esc}\\s*[-—]\\s*`, "i"), "");
  }
  if (t && !isSegmentGarbage(t) && !isBadGlossText(t) && !isTautology(term, t) && t.length >= 40) {
    return toUkEnglish(t.replace(/^In [^,]+,\s*/i, "").replace(/\.$/, ""));
  }

  const movement = expandMovementFromZh(zhCore, term);
  if (movement) return toUkEnglish(movement);

  let raw = expandFromZhCore(zhCore, term, cat, doms);
  raw = toUkEnglish(raw.replace(/^In [^,]+,\s*/gi, "").replace(/\.$/, ""));

  if (!isSegmentGarbage(raw) && !isGenericGloss(raw) && raw.length >= 40) return raw;

  const retry = studentMeaning(term, zhCore, cat);
  if (retry) return retry;

  const name = term.replace(/-/g, " ");
  if (cat === "photo") {
    return `in photography, ${name} affects how light and tone appear in the image`;
  }
  if (cat === "movement") {
    return `an art style or movement (${name}) — typical period, subjects and techniques`;
  }
  if (cat === "concept") {
    return `an idea used in art appreciation (${name})`;
  }
  if (cat === "ceramic") {
    return `a ceramics term (${name}) — clay, glaze or firing`;
  }
  if (cat === "print") {
    return `a printmaking term (${name}) — plate, ink or paper process`;
  }
  if (cat === "material") {
    return `a material or tool used when making art (${name})`;
  }
  if (cat === "social") {
    return `linked to community life, belief or tradition (${name})`;
  }
  return `a visual arts vocabulary item (${name})`;
}
