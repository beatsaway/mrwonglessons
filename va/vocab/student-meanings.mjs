/**
 * Plain UK English meanings for art students — not template filler.
 */

export function isGenericGloss(text) {
  if (!text || text.length < 20) return true;
  return (
    /a studio term for materials or process/i.test(text) ||
    /a photography term for camera/i.test(text) ||
    /the Visual Arts term/i.test(text) ||
    /used when describing and judging artworks/i.test(text) ||
    /an appreciation and criticism term:/i.test(text) ||
    /art-historical style or movement known as/i.test(text) ||
    /you apply it by citing visual evidence/i.test(text) ||
    /name what you see in the finished work that shows it was used/i.test(text) ||
    /a term linking art to society and culture.*explain who made/i.test(text)
  );
}

/** English headword → what it actually means (one or two clear sentences). */
const TERM = {
  overexposure:
    "when too much light hits the film or sensor, so bright areas lose detail and look washed out or pure white",
  underexposure:
    "when too little light is recorded, so shadow areas go very dark and detail is lost in the blacks",
  exposure:
    "the amount of light recorded in a photograph, controlled by shutter speed, aperture and ISO (sensitivity)",
  "double exposure":
    "two images on one frame or file — the same negative or sensor exposed twice so pictures overlap",
  aperture:
    "the opening in the lens; a wider aperture (small f-number) lets in more light and gives a shallower depth of field",
  shutter:
    "the mechanism that controls how long light is allowed to reach the sensor or film",
  "depth of field":
    "how much of the scene looks sharp from near to far — shallow depth of field blurs the background",
  photography:
    "making images by recording light, usually with a camera, rather than by hand with paint or pencil",
  acropolis:
    "the fortified high citadel of an ancient Greek city, often crowned with temples",
  aquatint:
    "a printmaking technique that uses fine dots or grains on the plate to create soft tonal areas",
  "back cover": "the rear cover of a book or catalogue — part of graphic and publication design",
  composition:
    "how things are arranged in the frame — where the subject sits, balance, and where the viewer’s eye is led",
  chiaroscuro:
    "strong contrast between light and dark used to model form and create drama",
  perspective:
    "a way of showing depth on a flat surface so objects seem to recede into the distance",
  "linear perspective":
    "depth shown with lines converging towards vanishing point(s), often on a horizon line",
  "negative space":
    "the empty areas around and between subjects; it is part of the design, not just background",
  texture:
    "how the surface looks or feels — rough, smooth, gritty, soft — in the image or on the object",
  balance:
    "how visual weight is spread in the composition so it feels stable, or deliberately lopsided",
  contrast:
    "difference between elements (light/dark, large/small) used to make parts stand out",
  impressionism:
    "a late nineteenth-century approach that catches fleeting light and atmosphere, often with visible brushstrokes outdoors",
  cubism:
    "early twentieth-century art that breaks objects into facets and shows several viewpoints at once",
  surrealism:
    "art that uses dream-like, unexpected combinations to explore the unconscious mind",
  batik:
    "a fabric technique: wax is applied to cloth before dyeing so the waxed areas resist the colour",
  ceramics:
    "objects made from clay that are shaped and then hardened by heat, often with glaze on the surface",
  etching:
    "a printmaking process where lines are bitten into a metal plate with acid, then inked and printed",
  "critical appreciation":
    "looking at art carefully: describe what you see, use evidence from the work, and explain your judgement with reasons"
};

/** Chinese sense → plain English (when headword alone is not enough). */
const ZH = {
  過度曝光: TERM.overexposure,
  曝光不足: TERM.underexposure,
  曝光: TERM.exposure,
  雙重曝光: TERM["double exposure"],
  光圈: TERM.aperture,
  快門: TERM.shutter,
  構圖: TERM.composition,
  透視: "showing depth on a flat picture surface",
  明暗法: TERM.chiaroscuro,
  批判性評賞: TERM["critical appreciation"],
  負空間: TERM["negative space"],
  質感: TERM.texture,
  平衡: TERM.balance,
  對比: TERM.contrast,
  攝影: TERM.photography,
  衛城: TERM.acropolis
};

export function studentMeaning(term, zhCore, cat) {
  const key = term.toLowerCase().split(",")[0].trim();
  if (TERM[key]) return TERM[key];
  if (ZH[zhCore]) return ZH[zhCore];

  if (cat === "photo" || /曝光|快門|光圈|菲林|鏡頭|攝影|顯影|定影/.test(zhCore)) {
    if (/過度|過曝/.test(zhCore)) return TERM.overexposure;
    if (/不足|欠曝/.test(zhCore)) return TERM.underexposure;
    if (/曝光/.test(zhCore)) return TERM.exposure;
    if (/光圈/.test(zhCore)) return TERM.aperture;
    if (/快門/.test(zhCore)) return TERM.shutter;
    return `a photography term: ${term.replace(/-/g, " ")} — describe the effect you see in the print or on screen (light, focus, tone), not only the label`;
  }

  if (cat === "composition" || /構圖/.test(zhCore)) {
    return TERM.composition;
  }

  if (cat === "colour" || /色|調|明暗/.test(zhCore)) {
    return `a colour or tone quality in the image — say how it affects mood, space or focus`;
  }

  if (cat === "movement") {
    return `an art style or movement (${term.replace(/-/g, " ")}) — link period, typical look and at least one feature in the work`;
  }

  return null;
}

/** One short sentence on how to use the term in an appreciation answer. */
export function studentApplyTip(term, cat) {
  const name = term.replace(/-/g, " ");
  if (cat === "photo") {
    return `In your answer, point to where the effect appears (sky, face, background) and whether it looks intentional or accidental.`;
  }
  if (cat === "ceramic" || cat === "print" || cat === "material") {
    return `Name the material or step and one visible trace on the object (glaze, imprint, texture, firing mark).`;
  }
  if (cat === "movement") {
    return `Link the work to its period and name typical features (brushwork, colour, subject) you can actually see.`;
  }
  if (cat === "composition" || cat === "form" || cat === "colour") {
    return `Describe what you see in the picture (placement, line, tone) before you interpret meaning.`;
  }
  if (cat === "concept") {
    return `Use visual evidence from the work before you state your interpretation.`;
  }
  if (cat === "social") {
    return `Say who made or used it, in what setting, and what it meant to that audience.`;
  }
  if (cat === "architecture") {
    return `Note scale, material and whether the feature is structural or decorative.`;
  }
  return `Give one concrete observation from a work you are discussing.`;
}
