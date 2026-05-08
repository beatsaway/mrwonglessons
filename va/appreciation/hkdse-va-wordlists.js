/**
 * HKDSE VA Appreciation Wordlists
 * --------------------------------
 * Reusable language banks for teaching students to write
 * English responses using the 4-step method:
 * Description -> Analysis -> Interpretation -> Judgement
 */

const HKDSE_VA_WORDLISTS = {
  elementsOfArt: {
    core: ["color", "line", "space", "shape", "form", "texture", "value"],
    colorWords: [
      "hue",
      "saturation",
      "intensity",
      "value",
      "warm",
      "cool",
      "muted",
      "vibrant",
      "monochromatic",
      "complementary"
    ],
    lineWords: [
      "continuous",
      "broken",
      "jagged",
      "curved",
      "vertical",
      "horizontal",
      "diagonal",
      "contour",
      "implied line",
      "flowing"
    ],
    spaceWords: [
      "positive space",
      "negative space",
      "foreground",
      "middle ground",
      "background",
      "depth",
      "distance",
      "overlap",
      "perspective",
      "spatial tension"
    ],
    shapeWords: [
      "geometric",
      "organic",
      "angular",
      "rounded",
      "flat",
      "silhouette",
      "contour shape",
      "repeated shape"
    ],
    formWords: [
      "three-dimensional",
      "volume",
      "mass",
      "solid",
      "cylindrical",
      "spherical",
      "cubic",
      "architectural"
    ],
    textureWords: [
      "smooth",
      "rough",
      "soft",
      "hard",
      "grainy",
      "layered",
      "glossy",
      "matte",
      "tactile",
      "implied texture"
    ],
    valueWords: [
      "light",
      "dark",
      "mid-tone",
      "high contrast",
      "tonal gradation",
      "highlight",
      "shadow",
      "chiaroscuro"
    ]
  },

  principlesOfDesign: {
    core: [
      "balance",
      "contrast",
      "emphasis",
      "proportion",
      "movement",
      "rhythm",
      "pattern",
      "repetition",
      "unity",
      "variety"
    ],
    balanceWords: ["symmetrical", "asymmetrical", "radial", "visual weight", "stability"],
    contrastWords: ["opposition", "difference", "light-dark contrast", "size contrast", "color contrast"],
    emphasisWords: ["focal point", "dominant area", "highlighted element", "visual priority"],
    proportionWords: ["scale", "relative size", "enlarged", "miniaturized", "distorted proportion"],
    movementRhythmWords: ["flow", "direction", "visual path", "beat", "tempo", "alternation"],
    patternRepetitionWords: ["motif", "repeated unit", "sequence", "regular pattern", "irregular pattern"],
    unityVarietyWords: ["coherence", "harmony", "consistency", "variation", "diversity"]
  },

  fourStepMethod: {
    description: {
      displayWords: [
        "medium",
        "subject matter",
        "composition",
        "foreground",
        "middle ground",
        "background",
        "figure",
        "object",
        "setting",
        "viewpoint",
        "color scheme",
        "tone",
        "shape",
        "form",
        "texture",
        "line quality",
        "positive space",
        "negative space",
        "scale",
        "proportion",
        "both",
        "similarly",
        "in contrast",
        "whereas",
        "compared with",
        "contains",
        "features",
        "depicts",
        "shows",
        "presents"
      ],
      sentenceStarters: [
        "In this work, I can see...",
        "The artwork shows...",
        "Both artworks feature...",
        "A common feature is...",
        "The medium appears to be..."
      ],
      objectiveNouns: [
        "medium",
        "subject matter",
        "foreground",
        "background",
        "composition",
        "objects",
        "figures",
        "setting",
        "color scheme"
      ],
      comparisonConnectors: ["both", "similarly", "in contrast", "while", "whereas", "compared with"]
    },

    analysis: {
      displayWords: [
        "organizes",
        "emphasizes",
        "creates",
        "balances",
        "contrasts",
        "guides",
        "repeats",
        "unifies",
        "distorts",
        "layers",
        "movement",
        "rhythm",
        "pattern",
        "repetition",
        "unity",
        "variety",
        "balance",
        "contrast",
        "emphasis",
        "proportion",
        "dynamic",
        "harmonious",
        "tense",
        "dramatic",
        "calm",
        "eye-catching",
        "spacious",
        "crowded",
        "coherent",
        "chaotic"
      ],
      actionVerbs: [
        "organizes",
        "emphasizes",
        "creates",
        "balances",
        "contrasts",
        "guides",
        "repeats",
        "unifies",
        "distorts",
        "layers"
      ],
      effectWords: [
        "dynamic",
        "calm",
        "tense",
        "harmonious",
        "dramatic",
        "eye-catching",
        "balanced",
        "crowded",
        "spacious",
        "expressive"
      ],
      structureFrames: [
        "The artist uses [element/principle] to create...",
        "The use of [color/line/value] makes the image feel...",
        "By repeating [shape/form], the artist establishes..."
      ]
    },

    interpretation: {
      displayWords: [
        "identity",
        "memory",
        "conflict",
        "isolation",
        "freedom",
        "power",
        "tradition",
        "change",
        "hope",
        "anxiety",
        "loss",
        "resilience",
        "alienation",
        "belonging",
        "spirituality",
        "social tension",
        "cultural symbol",
        "metaphor",
        "narrative",
        "emotion",
        "suggests",
        "implies",
        "symbolizes",
        "reflects",
        "communicates"
      ],
      sentenceStarters: [
        "This suggests that...",
        "The artist may be expressing...",
        "The image could symbolize...",
        "This might reflect...",
        "The mood implies..."
      ],
      conceptWords: [
        "identity",
        "memory",
        "conflict",
        "isolation",
        "freedom",
        "power",
        "tradition",
        "change",
        "hope",
        "anxiety"
      ]
    },

    judgement: {
      displayWords: [
        "effective",
        "convincing",
        "original",
        "memorable",
        "coherent",
        "innovative",
        "refined",
        "powerful",
        "impactful",
        "thought-provoking",
        "successful",
        "limited",
        "ordinary",
        "inconsistent",
        "overwhelming",
        "balanced",
        "sophisticated",
        "engaging",
        "persuasive",
        "clear intention",
        "because",
        "as",
        "since",
        "therefore",
        "which makes"
      ],
      sentenceStarters: [
        "I consider this work successful because...",
        "In my view, the work is effective because...",
        "The piece is less successful in...",
        "I prefer work (A/B) because...",
        "The strongest aspect is..."
      ],
      judgementWords: [
        "effective",
        "convincing",
        "original",
        "memorable",
        "coherent",
        "innovative",
        "ordinary",
        "inconsistent",
        "overwhelming",
        "refined"
      ],
      reasonConnectors: ["because", "since", "as", "therefore", "so", "which makes"]
    }
  },

  quickBanks: {
    adjectivesForMood: [
      "calm",
      "peaceful",
      "joyful",
      "nostalgic",
      "melancholic",
      "tense",
      "chaotic",
      "mysterious",
      "hopeful",
      "solemn"
    ],
    comparisonPhrases: [
      "both works present...",
      "work A focuses on..., while work B emphasizes...",
      "similarly, both artists use...",
      "in contrast, the second work..."
    ],
    evidencePhrases: [
      "This is shown by...",
      "For example,...",
      "This can be seen in...",
      "A clear example is..."
    ]
  }
};

// Browser global (file:// safe)
if (typeof window !== "undefined") {
  window.HKDSE_VA_WORDLISTS = HKDSE_VA_WORDLISTS;
}
