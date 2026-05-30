/**
 * Learner context: art history, studio practice, social/cultural, or formal viewing.
 */

const DOM_LENS = {
  版畫: "studio",
  陶藝: "studio",
  攝影: "studio",
  建築: "history",
  繪畫: "viewing",
  設計: "social",
  印刷: "studio",
  色彩學: "viewing",
  雕塑: "viewing",
  工藝: "social",
  油畫: "studio",
  中國繪畫: "history",
  書法: "history"
};

/** @returns {'history'|'studio'|'social'|'viewing'} */
export function detectLens(en, zh, cat, doms = []) {
  const t = en.toLowerCase();
  const z = zh;
  for (const d of doms) {
    if (DOM_LENS[d]) return DOM_LENS[d];
  }
  if (cat === "material") return "studio";
  if (cat === "social") return "social";
  if (cat === "movement") return "history";
  if (cat === "concept") return "viewing";
  if (cat === "design") return "social";
  if (cat === "ceramic" || cat === "print" || cat === "photo") return "studio";
  if (cat === "architecture") return "history";
  if (/folk|ritual|religion|icon|sacred|temple|shrine|ancestor|ceremon/i.test(t)) return "social";
  if (/民間|民俗|鄉土|宗教|祭|廟|儀|巫|皮影|剪紙|織|籃|工藝|工匠|社會|文化|傳統|皇|宮|帝|墓|碑/.test(z))
    return "social";
  if (/主義|流派|畫派|世紀|時代|古典|浪漫|寫實主義|印象派|印象主義|立體|超現實|野獸|達達|未來派|構成主義|表現主義|抽象主義|前衛|巴洛克|哥德|洛可可|文藝復興/.test(z))
    return "history";
  if (/紙|墨|筆|硯|絹|礬|釉|窯|燒|版|腐蝕|曝光|快門|顯影|定影|調色|泥|坯|拉坯|鑄|刻|刀|刨|膠|溶劑|化學|劑/.test(z))
    return "studio";
  if (/構圖|透視|色|調|明暗|質感|肌理|筆觸|留白|空間|形式|造形|節奏|平衡|對比|統一|象徵|寫意|工筆/.test(z))
    return "viewing";
  if (/博物|畫廊|展覽|拍賣|版權|批評|評賞|審美|美學/.test(z)) return "social";
  return cat === "general" ? "viewing" : cat === "form" || cat === "colour" || cat === "composition" ? "viewing" : "studio";
}

export function zhLensLabel(lens) {
  const m = {
    history: "（藝術史／風格脈絡）",
    studio: "（創作工藝／媒材）",
    social: "（社會與文化脈絡）",
    viewing: "（評賞與形式分析）"
  };
  return m[lens] || "";
}

export function enLensPhrase(lens) {
  const m = {
    history: "In art history",
    studio: "In studio practice",
    social: "In social and cultural context",
    viewing: "When analysing artworks"
  };
  return m[lens] || "In visual arts";
}

export function buildLearnerExample(term, senses, cat, lens, doms) {
  const s0 = (senses[0] || "").replace(/[（(][^）)]+[）)]/g, "").trim();
  const t = term;
  const area = doms.length ? doms[0] : "";

  const byLens = {
    history: {
      en: `Example sentence: "Treating this work as ${t}, I date it to the late nineteenth century because of the broken brushstrokes, outdoor light and everyday subjects — features typical of that movement."`,
      zh: `例句：「把此作視為${s0 || t}，可從筆觸、光線與題材指出時代特徵（如十九世紀前後、戶外光色與日常場景），並連繫當時創作意圖。」`
    },
    studio: {
      en: `Example sentence: "Because the piece uses ${t} (${s0 || "see Chinese note"}), I can point to [specific trace on the surface] and explain how that material or step shaped the final look."`,
      zh: `例句：「作品涉及${s0 || t}，宜指出具體痕跡（如釉色、版痕、紙紋、火痕），並說明該工序如何造成所見效果。」`
    },
    photo: {
      en: `Example: "The photograph shows ${t} — for instance the sky is bleached white with no cloud detail, so the figure reads as a dark silhouette."`,
      zh: `例句：「照片呈現${s0 || t}的效果，例如天空過曝成一片白、缺乏雲層細節，人物成為剪影。」`
    },
    social: {
      en: `Example sentence: "Here ${t} matters socially: the image was made for [festival / ritual / trade / court] and the symbols would have been read by [audience] in that setting."`,
      zh: `例句：「${s0 || t}帶有社會文化背景，宜說明製作／使用情境（節慶、儀式、市井、宮廷等）與當時觀者如何理解圖像。」`
    },
    viewing: {
      en: `Example sentence: "I use ${t} to describe the [foreground / figure / sky]: the choice makes the subject feel [closer / calmer / more dramatic] and supports my reading of the work."`,
      zh: `例句：「以${s0 || t}描寫畫面［部位］的視覺效果（如前後景、明暗、線條走向），並說明此選擇如何加強氣氛或意義。」`
    }
  };

  const catTpl = {
    movement: byLens.history,
    ceramic: byLens.studio,
    print: byLens.studio,
    photo: byLens.photo,
    architecture: byLens.history,
    design: byLens.social,
    concept: byLens.viewing,
    colour: byLens.viewing,
    composition: byLens.viewing,
    form: byLens.viewing,
    sculpture: byLens.viewing,
    material: byLens.studio,
    social: byLens.social
  };

  const pick = catTpl[cat] || byLens[lens] || byLens.viewing;
  if (area && pick.zh && !pick.zh.includes(area)) {
    return { ...pick, zh: pick.zh.replace("。", `（常見於${area}）。`) };
  }
  return pick.zh.endsWith("。") ? pick : { ...pick, zh: pick.zh + "。" };
}
