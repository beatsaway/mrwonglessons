// Past paper demo data for HKDSE VA Appreciation Guide.
// Loaded as a global so it works under file:// without module imports.
(function () {
  const EXTRA_KEYWORDS = {
    en: [
      "composition", "pictorial", "symbolic", "narrative", "cultural",
      "psychological", "spatial", "atmosphere", "material", "identity",
      "rhythm", "contrast", "balance", "emphasis", "coherence", "evaluation"
    ],
    zh: [
      "構圖", "空間", "線條", "色彩", "明暗", "形體", "質感",
      "對比", "平衡", "重點", "節奏", "統一", "變化", "象徵", "文化", "評價"
    ]
  };

  function plateMetaFromCaption(caption) {
    const text = String(caption || "");
    const m = text.match(/Plate\s*\((\d+[ab])(?:\.(\d+))?\)/i);
    if (!m) return { base: "", isDetail: false };
    return { base: m[1].toLowerCase(), isDetail: Boolean(m[2]) };
  }

  function renderImages(images) {
    if (!Array.isArray(images) || !images.length) return "";
    return `
      <div class="pastpaper-gallery">
        ${images.map((img) => {
          const meta = plateMetaFromCaption(img.caption);
          const wide = img.wide ? " is-wide" : "";
          return `
          <figure class="pastpaper-figure${wide}" data-plate-base="${meta.base}" data-plate-detail="${meta.isDetail ? "1" : "0"}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
            <figcaption>${img.caption || ""}</figcaption>
          </figure>
          `;
        }).join("")}
      </div>
    `;
  }

  function escapeRegex(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeAttr(text) {
    return escapeHtml(text).replace(/"/g, "&quot;");
  }

  function normalizeWord(text) {
    return String(text || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function hintEmojiForAnswer(answer, stepId, lang) {
    const key = normalizeWord(answer);
    const map = {
      // description/media/style
      "media": "🖌️", "medium": "🖌️", "subject matter": "🖼️", "composition": "🧩",
      "line": "〰️", "color": "🎨", "colour": "🎨", "space": "📐", "form": "🧱", "shape": "🔷", "texture": "🪵", "value": "🌗",
      "媒介": "🖌️", "題材": "🖼️", "構圖": "🧩", "線條": "〰️", "色彩": "🎨", "空間": "📐", "形體": "🧱", "形狀": "🔷", "質感": "🪵", "明暗": "🌗",

      // analysis/principles
      "balance": "⚖️", "contrast": "🔳", "emphasis": "📍", "movement": "➡️", "rhythm": "🥁", "pattern": "🟦", "repetition": "🔁", "unity/variety": "🧠",
      "平衡": "⚖️", "對比": "🔳", "重點": "📍", "動勢": "➡️", "節奏": "🥁", "圖案": "🟦", "重複": "🔁", "統一/變化": "🧠",

      // interpretation/judgement
      "identity": "🪪", "memory": "🧠", "community": "👥", "symbolic meaning": "💭", "symbolic reading": "💭", "social context": "🏙️", "cultural context": "🏮",
      "有效性": "✅", "effectiveness": "✅", "coherence": "🧷", "criteria-based judgement": "📏",
      "身份": "🪪", "記憶": "🧠", "社群": "👥", "象徵意義": "💭", "象徵閱讀": "💭", "社會脈絡": "🏙️", "文化脈絡": "🏮", "準則評價": "📏"
    };
    if (map[key]) return map[key];

    if (stepId === "d") return lang === "zh" ? "🧾" : "🧾";
    if (stepId === "a") return lang === "zh" ? "🔍" : "🔍";
    if (stepId === "i") return lang === "zh" ? "💡" : "💡";
    if (stepId === "j") return lang === "zh" ? "⚖️" : "⚖️";
    return "✍️";
  }

  function keywordRegex(keyword, lang) {
    if (lang === "zh" || /[\u3400-\u9fff]/.test(keyword)) {
      return new RegExp(escapeRegex(keyword));
    }
    return new RegExp(`\\b${escapeRegex(keyword)}\\b`, "i");
  }

  function pickStepKeywords(text, tags, lang) {
    const source = String(text || "");
    const pool = [...(tags || []), ...(EXTRA_KEYWORDS[lang] || [])]
      .map((w) => String(w).trim())
      .filter(Boolean);

    const picked = [];
    const seen = new Set();
    pool.forEach((kw) => {
      const key = normalizeWord(kw);
      if (seen.has(key)) return;
      if (!keywordRegex(kw, lang).test(source)) return;
      seen.add(key);
      picked.push(kw);
    });
    // Slightly more blanks than before
    return picked.slice(0, 5);
  }

  function shuffle(arr) {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function buildFillBlock(text, tags, lang, qid, stepId) {
    let working = String(text || "");
    const picked = pickStepKeywords(working, tags, lang);
    const blanks = [];

    picked.forEach((kw) => {
      const re = keywordRegex(kw, lang);
      const match = working.match(re);
      if (!match) return;
      const token = `__BLANK_${qid}_${stepId}_${blanks.length}__`;
      working = working.replace(re, token);
      blanks.push({
        answer: match[0],
        norm: normalizeWord(match[0]),
        emoji: hintEmojiForAnswer(match[0], stepId, lang),
        token
      });
    });

    let html = escapeHtml(working);
    blanks.forEach((b, idx) => {
      const blankHtml = `<span class="pp-blank-wrap"><span class="pp-blank-icon" aria-hidden="true">${escapeHtml(b.emoji || "✍️")}</span><span class="pp-blank" data-answer="${escapeAttr(b.answer)}" data-answer-norm="${escapeAttr(b.norm)}" data-filled="0" tabindex="0" aria-label="Blank ${idx + 1}"></span></span>`;
      html = html.split(b.token).join(blankHtml);
    });

    const bankWords = shuffle(blanks.map((b) => b.answer));
    const bankHtml = bankWords.length
      ? `<div class="pp-bank" data-step="${stepId}">
          ${bankWords.map((w, i) => `<button type="button" class="pp-keyword" data-word="${escapeAttr(w)}" data-word-norm="${escapeAttr(normalizeWord(w))}" aria-label="Keyword ${i + 1}: ${escapeAttr(w)}">${escapeHtml(w)}</button>`).join("")}
        </div>`
      : "";

    return { sentenceHtml: html, bankHtml };
  }

  function renderStep(label, text, tags, lang, qid, stepId, colon) {
    const fill = buildFillBlock(text, tags, lang, qid, stepId);
    return `
      <p><strong>${label}${colon}</strong> ${fill.sentenceHtml}</p>
      ${fill.bankHtml}
    `;
  }

  function buildArticle(model) {
    const qid = model.id;
    return `
      <article class="example pastpaper-answer">
        ${model.reference ? `<p><strong>${model.refLabel}</strong> ${model.reference}</p>` : ""}
        ${renderImages(model.images)}
        ${renderStep("Description", model.description, model.tags1, "en", qid, "d", ":")}
        ${renderStep("Analysis", model.analysis, model.tags2, "en", qid, "a", ":")}
        ${renderStep("Interpretation", model.interpretation, model.tags3, "en", qid, "i", ":")}
        ${renderStep("Judgement", model.judgement, model.tags4, "en", qid, "j", ":")}
      </article>
    `;
  }

  function buildArticleZh(model) {
    const qid = model.id;
    return `
      <article class="example pastpaper-answer">
        ${model.reference ? `<p><strong>${model.refLabel}</strong> ${model.reference}</p>` : ""}
        ${renderImages(model.images)}
        ${renderStep("Description", model.description, model.tags1, "zh", qid, "d", "：")}
        ${renderStep("Analysis", model.analysis, model.tags2, "zh", qid, "a", "：")}
        ${renderStep("Interpretation", model.interpretation, model.tags3, "zh", qid, "i", "：")}
        ${renderStep("Judgement", model.judgement, model.tags4, "zh", qid, "j", "：")}
      </article>
    `;
  }

  const enModels = [
    {
      id: "2024A_Q1",
      label: "2024A_Q1",
      title: "2024A_Q1",
      refLabel: "Reference artworks:",
      reference: "Takashi Murakami, <em>An Homage to IKB, 1957 F</em> (2012); Chen Hongshou, <em>Flowers and Rocks</em> (Ming dynasty).",
      description: "Both works share floral subject matter, yet their treatment of media, line and space creates two distinct style systems. Murakami's image is highly graphic and decorative, with flattened pictorial space and immediate visual readability. Chen Hongshou, by contrast, presents a literati mode in which controlled brush line and quieter spatial breathing produce a slower, more contemplative expression.",
      analysis: "In medium, Murakami's silkscreen process creates smooth, uniform colour blocks and sharp edges, while Chen's ink-and-colour on silk shows absorbent transitions and varied brush trace. In line, Murakami relies on repeated contour for pattern and repetition, producing decorative rhythm; Chen varies brush pressure and speed, creating asymmetrical balance and softer tonal contrast. In space, Murakami compresses depth towards a frontal surface, whereas Chen uses blank intervals and layered flower-rock placement to suggest flexible pictorial distance.",
      interpretation: "Murakami's flower field can be read as a contemporary visual icon circulating in consumer-image culture, where brightness and repetition emphasise mass visibility. Chen's flower-and-rock pairing can be read as symbolic reflection on cultivated identity and moral restraint in classical painting culture. Together, the pair contrasts external spectacle with inward symbolic reading.",
      judgement: "Both works succeed, but for different reasons. Murakami is stronger in immediate impact, formal coherence and instant recognition. Chen is stronger in brush intelligence, cultural depth and sustained interpretive interest. A strong answer compares criteria explicitly and supports each claim with concrete visual evidence.",
      tags1: ["media", "subject matter", "line", "space", "style"],
      tags2: ["medium", "line", "space", "pattern", "rhythm", "balance", "contrast"],
      tags3: ["cultural context", "symbolic reading", "artist intention", "identity"],
      tags4: ["effectiveness", "coherence", "criteria-based judgement", "evidence"]
    },
    {
      id: "2024A_Q2",
      label: "2024A_Q2",
      title: "2024A_Q2",
      refLabel: "Reference artworks:",
      reference: "Julie Mehretu, <em>Transients</em> (2006); Paul Nash, <em>Landscape from a Dream</em> (1936-1938).",
      description: "Both works are landscape-related paintings, but the formal language differs sharply. Mehretu constructs a layered, abstract field with dispersed marks and unstable orientation. Nash presents a surreal landscape with clearer motifs and staged spatial logic, creating a quieter but uncanny expression.",
      analysis: "Mehretu organises line as directional traces across translucent layers, generating movement and distributed emphasis rather than one fixed focal point. The interrupted depth structure produces visual instability and a tense figure-ground relationship. Nash, in contrast, uses controlled object placement, measured spacing and selective contrast to create balance and psychological stillness. The comparison shows one work pushing towards energetic fragmentation and the other towards symbolic composure.",
      interpretation: "Mehretu may be interpreted as visualising systems in flux, migration or contemporary uncertainty through non-literal space. Nash may be interpreted as a dreamlike meditation on memory, anxiety and subconscious conflict, where landscape becomes a mental stage. Both works therefore transform landscape from description into meaning-bearing psychological space.",
      judgement: "Mehretu is stronger in formal complexity and contemporary urgency, while Nash is stronger in symbolic clarity and atmospheric control. Both are successful when judged by how effectively they align formal structure with expressive intention.",
      tags1: ["media", "subject matter", "form", "space", "expression"],
      tags2: ["line", "movement", "emphasis", "balance", "contrast", "figure-ground"],
      tags3: ["symbolic reading", "psychological space", "social context", "meaning"],
      tags4: ["effectiveness", "innovation", "clarity", "criteria-based judgement"]
    },
    {
      id: "2024A_Q3",
      label: "2024A_Q3",
      title: "2024A_Q3",
      refLabel: "Reference artworks:",
      reference: "Chen Shun-chu, <em>Family Black Boxes - Family Aquarium</em> (1992); Pawel Althamer, <em>Brodno People</em> (2010).",
      description: "Both works are installation-based 3D practice, yet they differ in scale and social orientation. Chen Shun-chu's piece is intimate, archival and object-centred, while Althamer's installation is monumental and communal. Their expressions contrast private memory with collective social presence.",
      analysis: "Chen combines photos, antique box structure, glass, water and cotton thread to build delicate texture and concentrated emphasis within enclosed viewing space. Material contrast between fragile and solid elements creates restrained emotional pressure. Althamer uses repeated human-like units, synthetic materials and LED light across a large environment, generating rhythm, movement and unity/variety at social scale. Each artist's material language directly shapes how viewers move, look and feel.",
      interpretation: "Chen can be read as preserving family memory in a vulnerable vessel of time, where domestic fragments become identity carriers. Althamer can be read as mapping urban belonging, where repeated bodies and light construct a communal image of presence. Both works use installation space to connect form with social meaning.",
      judgement: "Chen is stronger in emotional subtlety and concentrated intimacy. Althamer is stronger in public impact and immersive scale. Both are successful because material decisions, spatial strategy and conceptual intention remain coherent throughout the work.",
      tags1: ["media", "3D form", "scale", "space", "expression"],
      tags2: ["texture", "contrast", "emphasis", "rhythm", "movement", "unity/variety"],
      tags3: ["memory", "identity", "community", "social meaning"],
      tags4: ["effectiveness", "coherence", "impact", "integration"]
    },
    {
      id: "2024A_Q4",
      label: "2024A_Q4",
      title: "2024A_Q4",
      refLabel: "Reference artworks:",
      reference: "Yinka Shonibare, <em>Butterfly Kid (Boy) IV</em> (2019); Damien Hirst, <em>Cathedral Print, St. Peters</em> (2007).",
      description: "Both works are highly stylised and visually seductive, but they operate through different media and formal systems. Shonibare presents figurative sculpture with symbolic material coding, while Hirst presents geometric print language with optical order and surface intensity.",
      analysis: "In Shonibare, mannequin form, textile pattern and globe motif create layered contrast around identity, history and performance. The figure acts as emphasis, while material texture adds symbolic density. In Hirst, symmetry, modular repetition and chromatic glaze produce pattern, rhythm and tight balance. Optical effects are not decorative only; they function as a structural system that controls viewer attention.",
      interpretation: "Shonibare can be interpreted through postcolonial identity and cultural hybridity, where costume and body become critical signs. Hirst can be interpreted as a contemporary translation of sacred architecture into optical contemplation and spectacle. Both engage questions of power, belief and image circulation through different symbolic strategies.",
      judgement: "Shonibare is stronger in conceptual and socio-historical depth, while Hirst is stronger in formal control and optical precision. Both are successful because each work sustains internal coherence between medium choice and expressive goal.",
      tags1: ["media", "form", "style", "material language", "expression"],
      tags2: ["contrast", "emphasis", "pattern", "rhythm", "balance", "texture"],
      tags3: ["postcolonial reading", "identity", "symbolism", "cultural context"],
      tags4: ["coherence", "conceptual depth", "formal control", "criteria-based judgement"]
    },
    {
      id: "2024A_Q5",
      label: "2024A_Q5",
      title: "2024A_Q5",
      refLabel: "Reference artworks:",
      reference: "Vilhelm Hammershoi, <em>Interior in Strandgade, Sunlight on the Floor</em> (1901); Fernando Botero, <em>A Family</em> (1997).",
      description: "Both works deal with domestic human context, but their forms and expressions move in opposite directions. Hammershoi is quiet, restrained and light-dependent, while Botero is frontal, enlarged and volumetric. One reduces visual information to stillness; the other amplifies presence through stylised mass.",
      analysis: "Hammershoi uses muted value transitions, geometric room planes and open space to establish contemplative balance and subtle emphasis through sunlight. Botero uses expanded form, dense colour mass and proportional distortion to create visual weight, patterned unity/variety and social theatricality. The comparison reveals how spatial compression versus spatial quietness can produce different emotional temperatures.",
      interpretation: "Hammershoi can suggest interior consciousness, suspended time and solitude. Botero can suggest social identity, role display and ironic commentary through exaggerated bodily presence. Both transform domestic setting into psychological and cultural reading.",
      judgement: "Hammershoi is stronger in atmospheric precision and spatial poetry. Botero is stronger in iconic style and immediate legibility. Both are successful because formal decisions consistently support expressive intention.",
      tags1: ["subject matter", "form", "space", "style", "expression"],
      tags2: ["value", "space", "balance", "emphasis", "form", "unity/variety"],
      tags3: ["mood", "identity", "social reading", "symbolic meaning"],
      tags4: ["effectiveness", "consistency", "expressive framework", "comparative evaluation"]
    },
    {
      id: "2025A_Q1",
      label: "2025A_Q1",
      title: "2025A_Q1",
      refLabel: "Reference artworks:",
      reference: "Pieter Bruegel the Elder, <em>Children's Games</em> (1560); Anonymous, <em>Engraved Moon and Unfolding Clouds</em> (Qing, ca. 1821 or later).",
      description: "Both works present figurative narrative scenes, but Bruegel develops a crowded social panorama, whereas the Qing album leaf presents a more refined and poetic visual register. Their handling of composition and space immediately signals different historical pictorial priorities.",
      analysis: "Bruegel builds composition through dense clustering, lateral movement and many micro-events, creating variety and continuous narrative rhythm. The Qing work relies on controlled line, measured spacing and tonal restraint, producing calm balance and concentrated emphasis on symbolic motifs. In comparative terms, Bruegel expands social field complexity, while the album leaf condenses meaning through selective arrangement.",
      interpretation: "Bruegel can be interpreted as close observation of social behaviour, play and communal order in daily life. The album leaf can be interpreted through literati symbolism, seasonal imagination and cosmological poetics. Both use figurative imagery, but their cultural intentions and reading pace differ markedly.",
      judgement: "Bruegel is stronger in social density and narrative multiplicity, while the album leaf is stronger in lyrical compression and symbolic elegance. A high-mark answer explains how form and cultural context interact, rather than only listing visible differences.",
      tags1: ["subject matter", "composition", "line", "space", "style"],
      tags2: ["movement", "variety", "balance", "emphasis", "tonal contrast"],
      tags3: ["social reading", "symbolic meaning", "cultural context", "artist intention"],
      tags4: ["effectiveness", "clarity", "coherence", "criteria-based judgement"]
    },
    {
      id: "2025A_Q2",
      label: "2025A_Q2",
      title: "2025A_Q2",
      refLabel: "Reference artworks:",
      reference: "Inges Idee, <em>Anticipation</em> (2018); Bruno Catalano, <em>The Travellers J4</em> (2022).",
      description: "Both are large-scale 3D public works, yet they stage public space differently. Inges Idee emphasises pathway, circulation and environmental interaction, while Catalano emphasises fragmented human presence and symbolic bodily absence.",
      analysis: "Anticipation uses curved steel pipes, repeated arcs and LED accents to generate movement and repetition along a broad site axis. Its composition is read through walking and changing viewpoint. The Travellers J4, by contrast, concentrates emphasis on a single human figure with missing body mass, creating sharp contrast between solid bronze and absent volume. Proportion and silhouette become key devices for metaphorical tension.",
      interpretation: "Inges Idee can be interpreted as collective anticipation and urban flow, where public movement becomes content. Catalano can be interpreted as migration, memory gaps and incomplete identity in transit. Both works invite viewers to project social narratives onto sculptural form.",
      judgement: "Inges Idee is stronger in environmental choreography and participatory viewing logic. Catalano is stronger in symbolic immediacy and emotional impact through figure distortion. Both are effective when judged by how clearly form communicates concept.",
      tags1: ["media", "3D form", "scale", "space", "expression"],
      tags2: ["movement", "repetition", "emphasis", "contrast", "proportion"],
      tags3: ["identity", "migration", "public space", "symbolic reading"],
      tags4: ["impact", "coherence", "innovation", "criteria-based judgement"]
    },
    {
      id: "2025A_Q3",
      label: "2025A_Q3",
      title: "2025A_Q3",
      refLabel: "Reference artworks:",
      reference: "Mollie Bosworth, <em>Of Shadows and Light</em> (2018); Philip Reinagle & Joseph Constantine Stadler, <em>Large Flowering Sensitive Plant</em> (1799).",
      description: "Both works engage botanical subject matter, but their formal approach differs in medium logic and viewing mode. Bosworth uses serial cyanotype on silk panels as a spatial sequence, while Reinagle/Stadler present a single-sheet coloured aquatint with scientific illustrative clarity.",
      analysis: "Bosworth's hanging panels create transparency, rhythm and movement across space as viewers shift position. Value changes are soft and process-visible, emphasising trace over fixed contour. Reinagle/Stadler use precise line, centralised composition and controlled contrast to stabilise observation and taxonomic reading. One work is process-and-space oriented; the other is image-and-description oriented.",
      interpretation: "Bosworth can be interpreted as a meditation on light memory, fragility and temporal trace. Reinagle/Stadler can be interpreted within Enlightenment knowledge systems, where natural form is studied, classified and given aesthetic treatment. Both works show how botanical imagery can carry different kinds of knowledge.",
      judgement: "Bosworth is stronger in atmospheric layering and spatial sensitivity. Reinagle/Stadler are stronger in descriptive precision and didactic clarity. Both are convincing within their own historical and material framework.",
      tags1: ["media", "subject matter", "serial form", "space", "style"],
      tags2: ["rhythm", "transparency", "value", "emphasis", "line", "composition"],
      tags3: ["nature reading", "memory", "knowledge system", "cultural context"],
      tags4: ["effectiveness", "precision", "atmosphere", "comparative evaluation"]
    },
    {
      id: "2025A_Q4",
      label: "2025A_Q4",
      title: "2025A_Q4",
      refLabel: "Reference artworks:",
      reference: "John Woodrow Wilson, <em>Peasants</em> (1952); David Hockney, <em>My Parents</em> (1977).",
      description: "Both works depict human figures, but Wilson emphasises social solidity and collective weight, while Hockney constructs a domestic portrait scene with observational distance and measured calm.",
      analysis: "Wilson organises dark-light value structure, compact grouping and dense form mass to create gravity and social tension. Hockney uses clearer interior space, controlled line and balanced composition to articulate interpersonal distance and psychological quietness. The comparison shows two figure strategies: one compressive and forceful, one analytical and relational.",
      interpretation: "Wilson can be interpreted through labour, dignity and class condition, where bodily mass conveys historical pressure. Hockney can be interpreted through family intimacy, generational gap and modern domestic identity. Both works frame personhood, but with different emotional tempo and social register.",
      judgement: "Wilson is stronger in social force and collective presence. Hockney is stronger in nuanced psychological observation and spatial orchestration. Both are high-quality works because formal language and interpretive direction remain consistent.",
      tags1: ["subject matter", "form", "space", "style", "expression"],
      tags2: ["value", "grouping", "balance", "emphasis", "line", "contrast"],
      tags3: ["social context", "identity", "family reading", "meaning"],
      tags4: ["effectiveness", "nuance", "coherence", "criteria-based judgement"]
    },
    {
      id: "2025A_Q5",
      label: "2025A_Q5",
      title: "2025A_Q5",
      refLabel: "Reference artworks:",
      reference: "Plate (5a) from 2025 paper image source; Dale Chihuly & Italo Scanga, <em>Rover's Garden Grows</em> (1991).",
      description: "This pair can be compared through mixed-media construction, sculptural form and expressive material language. Plate (5b) is visually dense, layered and materially assertive, and should be contrasted with Plate (5a) in terms of scale logic and spatial extension.",
      analysis: "In <em>Rover's Garden Grows</em>, intense colour contrast, tactile texture and assembled form clusters create emphasis and dynamic movement. Repetition of curved units helps maintain unity/variety despite high visual complexity. For comparative analysis, the strongest axis is how each work calibrates material intensity, compositional balance and viewing distance to shape viewer response.",
      interpretation: "Chihuly and Scanga can be interpreted as translating natural growth into hybrid, theatrical and artificial vitality. The work invites a nature/culture reading in which crafted excess becomes both spectacle and conceptual statement.",
      judgement: "A strong judgement tests whether each work links material decision to expressive purpose with consistency. Visual novelty alone is not enough; evidence-based comparison of structure, meaning and effect is needed for top-band marks.",
      tags1: ["media", "form", "scale", "material language", "expression"],
      tags2: ["contrast", "texture", "emphasis", "movement", "unity/variety"],
      tags3: ["symbolic reading", "nature/culture", "artist intention", "meaning"],
      tags4: ["criteria-based judgement", "coherence", "evidence", "high-mark strategy"]
    }
  ];

  const zhModels = [
    {
      id: "2024A_Q1",
      label: "2024A_Q1",
      title: "2024A_Q1",
      refLabel: "參考作品：",
      reference: "Takashi Murakami《An Homage to IKB, 1957 F》(2012)；陳洪綬《花卉怪石圖》（明）。",
      description: "兩作同以花卉為題材，但在媒介語言與風格取向上非常不同。Murakami 偏圖像化、平面化與裝飾性視覺；陳洪綬則偏筆墨節奏與文人畫氣質。單看線條與空間安排，已可見兩者分別對應當代流行圖像文化與傳統書寫性美學。",
      analysis: "就媒介而言，Murakami 的絲網印刷形成均質邊界與高飽和色面；陳洪綬的絹本設色呈現暈染、滲墨與筆痕層次。就線條而言，前者以重複輪廓建立圖案與節奏；後者以提按和速度變化形成動勢與平衡。就空間而言，前者壓平景深、強化正面衝擊；後者透過留白與花石前後關係建立可呼吸的空間。",
      interpretation: "Murakami 可讀為把花卉轉化成可流通的當代視覺符號，對應消費圖像文化。陳洪綬則可讀為在花石意象中寄託修養、性情與文人象徵。兩作同樣是花卉題材，但意義方向分別偏向外放的視覺能量與內斂的文化反思。",
      judgement: "兩者都屬高完成度作品，但成功標準不同：Murakami 強在即時衝擊與形式一致性，陳洪綬強在筆墨深度與文化內涵。高分評價應明確提出比較準則，並以畫面證據支持判斷。",
      tags1: ["媒介", "題材", "線條", "空間", "風格"],
      tags2: ["媒介", "線條", "空間", "圖案", "節奏", "平衡", "對比"],
      tags3: ["文化語境", "象徵閱讀", "創作意圖", "身份"],
      tags4: ["有效性", "整合度", "準則評價", "證據導向"]
    },
    {
      id: "2024A_Q2",
      label: "2024A_Q2",
      title: "2024A_Q2",
      refLabel: "參考作品：",
      reference: "Julie Mehretu《Transients》(2006)；Paul Nash《Landscape from a Dream》(1936-1938)。",
      description: "兩作都與風景相關，但形式語言差異很大。Mehretu 以抽象層疊與分散筆跡構成高動態畫面；Nash 則以可辨識物象與超現實場景形成較凝定的心理空間。兩者的「風景」都不止於寫景，而是承載情緒與觀念。",
      analysis: "Mehretu 透過重疊線條、半透明層次與方向性筆跡，建立不穩定動勢與分散重點，圖地關係不斷被打開又中斷。Nash 則以較清楚物件配置、空間層次與對比控制，形成平衡但帶壓力的畫面氣氛。比較上可見：前者偏碎裂流動，後者偏象徵凝聚。",
      interpretation: "Mehretu 可連結流動社會、遷移經驗與系統不穩定；Nash 可連結夢境記憶、焦慮與潛意識衝突。兩作都把風景轉化為心理空間與社會意義的載體。",
      judgement: "Mehretu 強於形式複雜度與當代張力，Nash 強於象徵清晰度與詩性控制。高分答案重點是指出兩者如何以不同結構達成不同表達目的。",
      tags1: ["媒介", "題材", "形式", "空間", "表達"],
      tags2: ["線條", "動勢", "重點", "平衡", "對比", "圖地關係"],
      tags3: ["象徵閱讀", "心理空間", "社會脈絡", "意義"],
      tags4: ["有效性", "創新性", "清晰度", "準則評價"]
    },
    {
      id: "2024A_Q3",
      label: "2024A_Q3",
      title: "2024A_Q3",
      refLabel: "參考作品：",
      reference: "陳順築《Family Black Boxes - Family Aquarium》(1992)；Pawel Althamer《Brodno People》(2010)。",
      description: "兩作都屬立體/裝置語言，但尺度與觀看關係截然不同。陳順築作品偏私密、檔案性與物件凝視；Althamer 作品偏大型、環境化與群體互動。兩者分別把「個人記憶」與「公共社群」放在核心。",
      analysis: "陳順築以黑白照片、古盒、玻璃、水與棉線組合出細膩質感，並透過封閉盒體形成集中重點與情緒壓縮。Althamer 以重複人形、塑料與 LED 光建立節奏、動勢與統一/變化，觀者會被帶入更大尺度的空間經驗。材料差異直接影響作品的情感溫度與社會感。",
      interpretation: "陳順築可讀為家族記憶與身份保存，呈現時間流逝中的脆弱感。Althamer 可讀為城市社群與共同體想像，把個體轉化為集體光點。兩作都在問「人如何被記住」，只是回答方式不同。",
      judgement: "前者強於情感凝聚與細節密度，後者強於公共影響與沉浸感。兩者都成功，因為形式、材料與意義的連結十分清楚。",
      tags1: ["媒介", "立體形式", "尺度", "空間", "表達"],
      tags2: ["質感", "對比", "重點", "節奏", "動勢", "統一/變化"],
      tags3: ["記憶", "身份", "社群", "社會意義"],
      tags4: ["有效性", "整合度", "影響力", "一致性"]
    },
    {
      id: "2024A_Q4",
      label: "2024A_Q4",
      title: "2024A_Q4",
      refLabel: "參考作品：",
      reference: "Yinka Shonibare《Butterfly Kid (Boy) IV》(2019)；Damien Hirst《Cathedral Print, St. Peters》(2007)。",
      description: "兩作都具有強烈視覺吸引力與風格化語言，但媒介系統不同：Shonibare 是具象雕塑，Hirst 是幾何版畫。前者靠人物與材料符號建立敘事，後者靠模組結構與光學秩序建立效果。",
      analysis: "Shonibare 以人體模特、蠟染布料與地球等物件形成多層對比，人物本身成為重點，材料紋理增加象徵密度。Hirst 以對稱、模組重複與珠光色層建立圖案、節奏與平衡，畫面控制度極高。比較可見：一者強在社會文化語義，一者強在形式結構精準。",
      interpretation: "Shonibare 可讀為對殖民歷史、混雜身份與文化建構的提問；Hirst 可讀為把宗教建築語彙轉化為當代光學奇觀。兩作都涉及權力與信念，但符號系統和觀看心理不同。",
      judgement: "Shonibare 強於觀念深度與文化共鳴，Hirst 強於形式控制與視覺一致性。兩者都屬成功作品，重點在於各自語言是否自洽且可被證據支持。",
      tags1: ["媒介", "形式", "風格", "材料語言", "表達"],
      tags2: ["對比", "重點", "圖案", "節奏", "平衡", "質感"],
      tags3: ["後殖民閱讀", "身份", "象徵", "文化脈絡"],
      tags4: ["整合度", "觀念深度", "形式控制", "準則評價"]
    },
    {
      id: "2024A_Q5",
      label: "2024A_Q5",
      title: "2024A_Q5",
      refLabel: "參考作品：",
      reference: "Vilhelm Hammershoi《Interior in Strandgade, Sunlight on the Floor》(1901)；Fernando Botero《A Family》(1997)。",
      description: "兩作都涉及人物與室內生活，但形式方向幾乎相反。Hammershoi 內斂、低彩度、依靠光線微差；Botero 則放大量感、正面構圖、風格辨識度極高。前者以減法營造靜默，後者以誇張體量建立存在感。",
      analysis: "Hammershoi 透過明暗層次、幾何室內平面與留白空間建立平衡，地面光斑形成低調重點。Botero 以膨脹形體、厚重色塊與比例變形形成視覺重量，並在細節中維持統一/變化。兩者都在控制空間，但情緒速度一慢一快。",
      interpretation: "Hammershoi 可讀為時間停滯、孤寂與內在意識；Botero 可讀為社會角色、家庭身份與帶反諷的再現。兩作都以日常場景切入，卻導向不同心理與文化閱讀。",
      judgement: "Hammershoi 強於氣氛詩性與空間細膩度，Botero 強於風格權威與即時辨識。兩者都成功，因其形式策略與表達目的高度一致。",
      tags1: ["題材", "形式", "空間", "風格", "表達"],
      tags2: ["明暗", "空間", "平衡", "重點", "形體", "統一/變化"],
      tags3: ["情緒", "身份", "社會閱讀", "象徵意義"],
      tags4: ["有效性", "一致性", "表達框架", "比較評價"]
    },
    {
      id: "2025A_Q1",
      label: "2025A_Q1",
      title: "2025A_Q1",
      refLabel: "參考作品：",
      reference: "Pieter Bruegel the Elder《Children's Games》(1560)；Anonymous《Engraved Moon and Unfolding Clouds》（清，道光元年約 1821 或以後）。",
      description: "兩作都屬敘事性圖像，但 Bruegel 偏向群像與社會全景，清代冊頁則偏文雅、詩意與象徵凝縮。兩者在構圖密度、空間處理與視覺節奏上呈現明顯差異。",
      analysis: "Bruegel 以大量人物、分區場景與橫向流動建立多點節奏，畫面資訊密度高、變化強。冊頁則以較克制線條與留白空間維持平衡，重點集中在月與雲等意象，視覺速度較慢。比較而言，前者偏敘事展開，後者偏意境凝聚。",
      interpretation: "Bruegel 可讀為對日常行為與社會秩序的觀察；冊頁可讀為時序、宇宙感與文人審美取向的象徵表達。兩作同樣描繪場景，但文化語境與觀看節奏不同。",
      judgement: "Bruegel 強於社會複雜度與敘事多層，冊頁強於詩性控制與象徵精煉。高分比較應連結形式差異與文化脈絡，而不止列出表面不同。",
      tags1: ["題材", "構圖", "線條", "空間", "風格"],
      tags2: ["動勢", "變化", "平衡", "重點", "明暗對比"],
      tags3: ["社會閱讀", "象徵意義", "文化脈絡", "創作意圖"],
      tags4: ["有效性", "清晰度", "整合度", "準則評價"]
    },
    {
      id: "2025A_Q2",
      label: "2025A_Q2",
      title: "2025A_Q2",
      refLabel: "參考作品：",
      reference: "Inges Idee《Anticipation》(2018)；Bruno Catalano《The Travellers J4》(2022)。",
      description: "兩作皆為大型公共立體作品，但觀看機制不同。Inges Idee 偏場域路徑、群體移動與環境經驗；Catalano 偏人物破缺、個體敘事與象徵張力。",
      analysis: "Anticipation 以彎管重複、燈光與地面動線建立節奏與動勢，觀者需邊走邊看才能完整讀取。The Travellers J4 以缺失身體體量與輪廓對比形成強烈重點，比例衝突放大「缺席」感。前者是空間編排型語言，後者是人物象徵型語言。",
      interpretation: "前者可讀為都市流動、共同期待與公共節奏；後者可讀為遷移經驗、身份缺口與過渡狀態。兩作都把雕塑轉化為社會議題的可視化。",
      judgement: "Inges Idee 強於場域編排與參與性，Catalano 強於符號衝擊與情感即時性。兩者都具高辨識度，評價關鍵在於是否能以形式證據支撐詮釋。",
      tags1: ["媒介", "立體形式", "尺度", "空間", "表達"],
      tags2: ["動勢", "重複", "重點", "對比", "比例"],
      tags3: ["身份", "遷移", "公共空間", "象徵閱讀"],
      tags4: ["影響力", "整合度", "創新性", "準則評價"]
    },
    {
      id: "2025A_Q3",
      label: "2025A_Q3",
      title: "2025A_Q3",
      refLabel: "參考作品：",
      reference: "Mollie Bosworth《Of Shadows and Light》(2018)；Philip Reinagle & Joseph Constantine Stadler《Large Flowering Sensitive Plant》(1799)。",
      description: "兩作都處理植物形態，但媒介與觀看方式截然不同。Bosworth 以連續絹布藍曬形成空間序列與過程感；Reinagle/Stadler 以單幅彩色蝕刻呈現清晰、可分類的圖像語言。",
      analysis: "Bosworth 的多片構成帶來透明感、節奏與時間性，觀者在移動中感受圖像變化。Reinagle/Stadler 以精準線條、明暗對比與集中構圖建立描述清晰度與重點。比較上，前者偏場域與感知，後者偏圖像與知識系統。",
      interpretation: "Bosworth 可讀為光影痕跡、脆弱記憶與自然的暫態；Reinagle/Stadler 可讀為啟蒙時代的自然觀察與分類秩序。兩作都談植物，但背後的認知方式不同。",
      judgement: "Bosworth 強於氣氛層次與空間感，Reinagle/Stadler 強於描繪精準與教育性。高分答案可指出兩者如何在不同時代回應「觀看自然」這件事。",
      tags1: ["媒介", "題材", "序列形式", "空間", "風格"],
      tags2: ["節奏", "透明感", "明暗", "重點", "線條", "構圖"],
      tags3: ["自然閱讀", "記憶", "知識系統", "文化脈絡"],
      tags4: ["有效性", "精準度", "氣氛", "比較評價"]
    },
    {
      id: "2025A_Q4",
      label: "2025A_Q4",
      title: "2025A_Q4",
      refLabel: "參考作品：",
      reference: "John Woodrow Wilson《Peasants》(1952)；David Hockney《My Parents》(1977)。",
      description: "兩作都以人物為核心，但表達重心不同。Wilson 偏向社會重量與集體感；Hockney 偏向家庭關係與室內心理距離。前者壓縮力量，後者拉開觀察。",
      analysis: "Wilson 以強明暗結構、緊密群組與厚重形體建立壓力感與集體存在。Hockney 以清晰空間、穩定線條與平衡構圖呈現細膩互動與安靜張力。比較可見：Wilson 強在社會力度，Hockney 強在關係結構與觀察精度。",
      interpretation: "Wilson 可連結勞動、尊嚴與階級處境；Hockney 可連結家庭親密、代際距離與現代身份。兩作都在談人，但情緒溫度與社會語境不同。",
      judgement: "Wilson 強於社會力度與凝聚感，Hockney 強於心理細節與空間控制。高分評價應說明各自成功準則，而非只作主觀喜好判斷。",
      tags1: ["題材", "形式", "空間", "風格", "表達"],
      tags2: ["明暗", "群組", "平衡", "重點", "線條", "對比"],
      tags3: ["社會脈絡", "身份", "家庭閱讀", "意義"],
      tags4: ["有效性", "細膩度", "整合度", "準則評價"]
    },
    {
      id: "2025A_Q5",
      label: "2025A_Q5",
      title: "2025A_Q5",
      refLabel: "參考作品：",
      reference: "Plate (5a)（按 2025 試卷圖像）；Dale Chihuly & Italo Scanga《Rover's Garden Grows》(1991)。",
      description: "這一組可從混合媒介、形式組裝與材料語言切入比較。5b 屬立體、多層且材料感強的作品，可與 5a 在尺度、空間延伸和視覺密度上對照。",
      analysis: "《Rover's Garden Grows》透過高彩度對比、材料質感與組裝形體形成鮮明重點與動勢，並以重複單位維持統一/變化。比較時可聚焦：兩作如何分配材料密度、控制視線節奏，以及如何在近看與遠看之間改變效果。",
      interpretation: "Chihuly 與 Scanga 可解讀為把自然生長轉化為人工、混種且戲劇化的視覺生命，呈現自然/文化交疊的象徵閱讀。這類作品的意義常來自材料本身的能量與排列邏輯。",
      judgement: "高分評價關鍵是把材料選擇、形式安排與表達目的連成完整論證，而不只是說「特別」或「好看」。只要比較準則清晰、證據充足，即使 5a 資訊較少，仍可寫出有說服力的評賞。",
      tags1: ["媒介", "形式", "尺度", "材料語言", "表達"],
      tags2: ["對比", "質感", "重點", "動勢", "統一/變化"],
      tags3: ["象徵閱讀", "自然/文化", "創作意圖", "意義"],
      tags4: ["準則評價", "整合度", "證據導向", "高分策略"]
    }
  ];

  const PAPER_IMAGES = {
    "2024A_Q1": [
      { src: "./pp/2024A_Q1a.webp", alt: "2024A Q1 Plate 1a", caption: "Plate (1a) Takashi Murakami (村上隆), Flower, 2021. Silkscreen with platinum leaf, 69 x 69 cm." },
      { src: "./pp/2024A_Q1b.webp", alt: "2024A Q1 Plate 1b", caption: "Plate (1b) Chen Hongshou (陳洪綬, 1599-1652), Magnolia and Erect Rock (玉堂柱石), colour on silk, 30.2 x 25.1 cm." },
      { src: "./pp/2024A_Q1b1.webp", alt: "2024A Q1 Plate 1b detail", caption: "Plate (1b.1) Detail inscription: 玉堂柱石暨陽陳洪綬寫 (Chen Hongshou from Jiyang painted Magnolia and Erect Rock)." }
    ],
    "2024A_Q2": [
      { src: "./pp/2024A_Q2a.webp", alt: "2024A Q2 Plate 2a", caption: "Plate (2a) Julie Mehretu, Transients, 2006. Acrylic, ink and gesso on canvas, 123.2 x 153.7 cm." },
      { src: "./pp/2024A_Q2b.webp", alt: "2024A Q2 Plate 2b", caption: "Plate (2b) Paul Nash, Landscape from a Dream, 1936-1938. Oil paint on canvas, 67.9 x 101.6 cm." }
    ],
    "2024A_Q3": [
      { src: "./pp/2024A_Q3a.webp", alt: "2024A Q3 Plate 3a", caption: "Plate (3a) Chen Shun-chu (陳順築), Family Black Boxes - Family Aquarium, 1992. Black and white photos, antique box, glass, water, paint and cotton thread, 23 x 60 x 39 cm." },
      { src: "./pp/2024A_Q3b.webp", alt: "2024A Q3 Plate 3b", caption: "Plate (3b) Pawel Althamer, Brodno People, 2010. Metal, plastics, cell tape and LED light, 252 x 600 x 165 cm." }
    ],
    "2024A_Q4": [
      { src: "./pp/2024A_Q4a.webp", alt: "2024A Q4 Plate 4a", caption: "Plate (4a) Yinka Shonibare, Butterfly Kid (Boy) IV, 2019. Fibreglass mannequin, Dutch wax printed cotton textile, silk, metal, globe, leather and steel baseplate, 132.5 x 75 x 75 cm." },
      { src: "./pp/2024A_Q4a123.webp", alt: "2024A Q4 Plate 4a detail set", caption: "Plate (4a.1), Plate (4a.2), Plate (4a.3): details of Butterfly Kid (Boy) IV." },
      { src: "./pp/2024A_Q4b.webp", alt: "2024A Q4 Plate 4b", caption: "Plate (4b) Damien Hirst, Cathedral Print, St. Peters, 2007. Silkscreen with glaze and pearlised colours, 119.5 x 119.5 cm." }
    ],
    "2024A_Q5": [
      { src: "./pp/2024A_Q5a.webp", alt: "2024A Q5 Plate 5a", caption: "Plate (5a) Vilhelm Hammershoi, Interior in Strandgade, Sunlight on the Floor, 1901. Oil on canvas, 46.5 x 52 cm. (Strandgade is a seaside street in Denmark.)" },
      { src: "./pp/2024A_Q5b.webp", alt: "2024A Q5 Plate 5b", caption: "Plate (5b) Fernando Botero, A Family, 1997. Oil on canvas, 163.8 x 187.3 cm." }
    ],
    "2025A_Q1": [
      { src: "./pp/2025A_Q1a.webp", alt: "2025A Q1 Plate 1a", caption: "Plate (1a) Pieter Bruegel the Elder, Children's Games, 1560. Oil on panel, 118 x 161 cm." },
      { src: "./pp/2025A_Q1b.webp", alt: "2025A Q1 Plate 1b", caption: "Plate (1b) Anonymous, Engraved Moon and Unfolding Clouds (leaf from Spring Everlasting on the Abode of the Immortals), Qing dynasty (Daoguang year 1, ca. 1821 or later). Album leaf, ink and colours on paper, 61.5 x 77.5 cm." }
    ],
    "2025A_Q2": [
      { src: "./pp/2025A_Q2a.webp", alt: "2025A Q2 Plate 2a", caption: "Plate (2a) Inges Idee, Anticipation, 2018. Stainless steel circular bend pipes, wood, plastic composites, sandblast ground, LED light, 273 x 1148 x 850 cm." },
      { src: "./pp/2025A_Q2a12.webp", alt: "2025A Q2 Plate 2a side and top view", caption: "Plate (2a.1) Side View; Plate (2a.2) Top View.", wide: true },
      { src: "./pp/2025A_Q2b.webp", alt: "2025A Q2 Plate 2b", caption: "Plate (2b) Bruno Catalano, The Travellers J4, 2022. Bronze, 310 x 120 x 110 cm." },
      { src: "./pp/2025A_Q2b1.webp", alt: "2025A Q2 Plate 2b side view", caption: "Plate (2b.1) Side View." },
      { src: "./pp/2025A_Q2b2.webp", alt: "2025A Q2 Plate 2b back view", caption: "Plate (2b.2) Back View." }
    ],
    "2025A_Q3": [
      { src: "./pp/2025A_Q3a.webp", alt: "2025A Q3 Plate 3a", caption: "Plate (3a) Mollie Bosworth, Of Shadows and Light, 2018. Cyanotype on 45 silk panels, 45 x 140 cm." },
      { src: "./pp/2025A_Q3a1.webp", alt: "2025A Q3 Plate 3a side view", caption: "Plate (3a.1) Side View." },
      { src: "./pp/2025A_Q3a2.webp", alt: "2025A Q3 Plate 3a detail 1", caption: "Plate (3a.2) Detail 1." },
      { src: "./pp/2025A_Q3a3.webp", alt: "2025A Q3 Plate 3a detail 2", caption: "Plate (3a.3) Detail 2." },
      { src: "./pp/2025A_Q3b.webp", alt: "2025A Q3 Plate 3b", caption: "Plate (3b) Philip Reinagle & Joseph Constantine Stadler, Large Flowering Sensitive Plant, 1799. Coloured aquatint on paper, 55.5 x 43.2 cm." }
    ],
    "2025A_Q4": [
      { src: "./pp/2025A_Q4a.webp", alt: "2025A Q4 Plate 4a", caption: "Plate (4a) John Woodrow Wilson, Peasants, 1952. Duco on masonite, 59.7 x 76.2 cm. (Duco is a brand name of paint; masonite is a type of hardboard.)" },
      { src: "./pp/2025A_Q4b.webp", alt: "2025A Q4 Plate 4b", caption: "Plate (4b) David Hockney, My Parents, 1977. Oil on canvas, 183 x 183 cm." }
    ],
    "2025A_Q5": [
      { src: "./pp/2025A_Q5a.webp", alt: "2025A Q5 Plate 5a", caption: "Plate (5a) Image from 2025 HKDSE paper (metadata not provided in current prompt)." },
      { src: "./pp/2025A_Q5b.webp", alt: "2025A Q5 Plate 5b", caption: "Plate (5b) Dale Chihuly & Italo Scanga, Rover's Garden Grows, 1991. Mixed media, 174.6 x 169.2 x 55.2 cm." },
      { src: "./pp/2025A_Q5b1.webp", alt: "2025A Q5 Plate 5b detail 1", caption: "Plate (5b.1) Detail 1." },
      { src: "./pp/2025A_Q5b2.webp", alt: "2025A Q5 Plate 5b detail 2", caption: "Plate (5b.2) Detail 2." }
    ]
  };

  function withPaperImages(model) {
    return { ...model, images: PAPER_IMAGES[model.id] || [], reference: "" };
  }

  window.HKDSE_VA_PAST_PAPER_DEMO = {
    en: {
      title: "Past Paper Demo",
      selectLabel: "Choose question:",
      options: enModels.map((m) => {
        const model = withPaperImages(m);
        return { id: model.id, label: model.label, html: buildArticle(model) };
      })
    },
    zh: {
      title: "歷屆試題示範",
      selectLabel: "選擇題目：",
      options: zhModels.map((m) => {
        const model = withPaperImages(m);
        return { id: model.id, label: model.label, html: buildArticleZh(model) };
      })
    }
  };
})();
