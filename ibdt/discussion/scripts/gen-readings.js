const fs = require("fs");
const registry = fs.readFileSync(__dirname + "/../topics-registry.js", "utf8");
const keyvocab = fs.readFileSync(__dirname + "/../keyvocab-data.js", "utf8");
eval(registry.replace(/window\./g, "global."));
eval(keyvocab.replace(/window\./g, "global."));

const SECTION_INTROS = {
  1: "Human factors and ergonomics ask whether a product fits real people's bodies, senses, and minds.",
  2: "Resource management looks at materials, energy, and waste across a product's life cycle.",
  3: "Modelling is how designers explore, test, and communicate ideas before final production.",
  4: "This area covers material properties, manufacturing processes, and how products are made at scale.",
  5: "Innovation and design examines how new ideas spread, how products evolve, and who is involved.",
  6: "Classic design studies enduring products whose form and function still influence designers today.",
  7: "User-centred design puts people's needs, abilities, and research at the heart of every decision.",
  8: "Sustainability asks how design can reduce harm and support long-term environmental health.",
  9: "Innovation and markets connects design choices to customers, branding, and business strategy.",
  10: "Commercial production looks at how factories organise work, quality, and efficiency."
};

const WIKI = {
  "graphical-modeling": "https://en.wikipedia.org/wiki/Technical_drawing",
  "smart-materials": "https://en.wikipedia.org/wiki/Smart_material",
  "material-graphs": "https://en.wikipedia.org/wiki/Materials_selection",
  metals: "https://en.wikipedia.org/wiki/Metal",
  alloys: "https://en.wikipedia.org/wiki/Alloy",
  timber: "https://en.wikipedia.org/wiki/Wood",
  glass: "https://en.wikipedia.org/wiki/Glass",
  plastics: "https://en.wikipedia.org/wiki/Plastic",
  textiles: "https://en.wikipedia.org/wiki/Textile",
  composites: "https://en.wikipedia.org/wiki/Composite_material",
  "scales-of-production": "https://en.wikipedia.org/wiki/Economies_of_scale",
  "manufacturing-processes": "https://en.wikipedia.org/wiki/Manufacturing",
  "shaping-and-joining": "https://en.wikipedia.org/wiki/Joining_(woodworking)",
  "production-systems": "https://en.wikipedia.org/wiki/Manufacturing_resource_planning",
  "robots-in-automated-production": "https://en.wikipedia.org/wiki/Industrial_robot",
  "innovation-and-diffusion": "https://en.wikipedia.org/wiki/Diffusion_of_innovations",
  "strategies-for-innovation": "https://en.wikipedia.org/wiki/Innovation",
  "stakeholders-in-innovation": "https://en.wikipedia.org/wiki/Stakeholder_(corporate)",
  "product-life-cycles": "https://en.wikipedia.org/wiki/Product_lifecycle",
  "product-versions-and-strategies": "https://en.wikipedia.org/wiki/Product_lifecycle_management",
  "rogers-characteristics-of-innovation": "https://en.wikipedia.org/wiki/Diffusion_of_innovations",
  "innovation-design-and-marketing-specifications": "https://en.wikipedia.org/wiki/Product_specification",
  "incremental-vs-radical": "https://en.wikipedia.org/wiki/Incremental_innovation",
  "characteristics-of-classic-design": "https://en.wikipedia.org/wiki/Industrial_design",
  "classic-designs-examples": "https://en.wikipedia.org/wiki/Good_design",
  "classic-design-form-and-function": "https://en.wikipedia.org/wiki/Form_follows_function",
  "user-centered-design": "https://en.wikipedia.org/wiki/User-centered_design",
  "inclusive-design": "https://en.wikipedia.org/wiki/Inclusive_design",
  usability: "https://en.wikipedia.org/wiki/Usability",
  "population-stereotypes": "https://en.wikipedia.org/wiki/Affordance",
  "user-research-strategies": "https://en.wikipedia.org/wiki/User_research",
  "user-scenarios": "https://en.wikipedia.org/wiki/Scenario_planning",
  "user-centered-design-strategies": "https://en.wikipedia.org/wiki/Design_strategy",
  "usability-testing-environments": "https://en.wikipedia.org/wiki/Usability_testing",
  "beyond-usability": "https://en.wikipedia.org/wiki/User_experience",
  "sustainable-development": "https://en.wikipedia.org/wiki/Sustainable_development",
  "sustainable-products-and-practices": "https://en.wikipedia.org/wiki/Sustainable_products",
  "sustainable-consumption": "https://en.wikipedia.org/wiki/Sustainable_consumption",
  "sustainable-design": "https://en.wikipedia.org/wiki/Sustainable_design",
  "sustainable-design-legislation": "https://en.wikipedia.org/wiki/Environmental_law",
  "sustainable-innovation": "https://en.wikipedia.org/wiki/Sustainable_innovation",
  "energy-sustainability": "https://en.wikipedia.org/wiki/Sustainable_energy",
  "dashevsky-principles": "https://en.wikipedia.org/wiki/Sustainable_design",
  "eco-design": "https://en.wikipedia.org/wiki/Ecodesign",
  "eco-design-roles": "https://en.wikipedia.org/wiki/Life-cycle_assessment",
  "green-design": "https://en.wikipedia.org/wiki/Green_design",
  "green-design-drivers": "https://en.wikipedia.org/wiki/Corporate_social_responsibility",
  "innovation-and-markets": "https://en.wikipedia.org/wiki/Market_(economics)",
  "market-sectors-segments": "https://en.wikipedia.org/wiki/Market_segmentation",
  "market-mix": "https://en.wikipedia.org/wiki/Marketing_mix",
  "product-standardization": "https://en.wikipedia.org/wiki/Standardization",
  "market-research-purpose": "https://en.wikipedia.org/wiki/Market_research",
  "market-research-strategies": "https://en.wikipedia.org/wiki/Market_research",
  "branding-brand-loyalty": "https://en.wikipedia.org/wiki/Brand_loyalty",
  "trademarks-packaging-global": "https://en.wikipedia.org/wiki/Trademark",
  "jit-production": "https://en.wikipedia.org/wiki/Just-in-time_manufacturing",
  "jic-production": "https://en.wikipedia.org/wiki/Inventory",
  "lean-production": "https://en.wikipedia.org/wiki/Lean_manufacturing",
  "value-stream-mapping": "https://en.wikipedia.org/wiki/Value-stream_mapping",
  "workflow-kaizen-empowerment": "https://en.wikipedia.org/wiki/Kaizen",
  "5s-seven-wastes": "https://en.wikipedia.org/wiki/5S_(methodology)",
  "cim-overview-impact": "https://en.wikipedia.org/wiki/Computer-integrated_manufacturing",
  "cim-investment-maintenance": "https://en.wikipedia.org/wiki/Computer-integrated_manufacturing",
  "quality-management-qc-qa-spc": "https://en.wikipedia.org/wiki/Quality_management",
  "economic-viability-cost-analysis": "https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis"
};

function articleFor(topic) {
  const intro = SECTION_INTROS[topic.sectionNum];
  const level =
    topic.level === "HL"
      ? "an HL extension topic (syllabus topics 7–10)"
      : "a core topic studied by both SL and HL students (syllabus topics 1–6)";
  const wiki =
    WIKI[topic.slug] ||
    "https://en.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(topic.name);
  const text =
    `<p><strong>${topic.name}</strong> (${topic.ref}) is ${level} in IB Design Technology. It sits within <em>Topic ${topic.sectionNum}: ${topic.sectionTitle}</em>.</p>` +
    `<p>${intro} For this subtopic, focus on how <strong>${topic.name}</strong> affects real design, production, and user outcomes.</p>` +
    `<p>As you read, look for: (1) clear definitions, (2) a product example, (3) one benefit and one limitation, and (4) how a designer would apply this in a project.</p>` +
    `<p><a href="${wiki}" target="_blank" rel="noopener">Read more on Wikipedia →</a></p>`;
  return { articleText: text, wiki };
}

const overviews = {};
ibTopicRegistry.allTopics.forEach((t) => {
  const k =
    (t.slug === "resources-reserves"
      ? "resources-and-reserves"
      : t.slug === "material-graphs"
        ? "material-graphs-selection"
        : t.slug) + ".html";
  const v = ibKeyVocab[k];
  if (!v || !Object.keys(v).length) overviews[t.slug] = articleFor(t);
});

overviews["green-design"] = {
  wiki: WIKI["green-design"],
  articleText:
    `<p><strong>Green design</strong> (8.2, HL) means creating products that reduce environmental harm across their whole life cycle — from choosing materials to manufacturing, use, and disposal.</p>` +
    `<p>Designers aim to increase <strong>efficiency</strong> (less material and energy), reduce <strong>pollution</strong>, and plan for what happens at end-of-life: reuse, recycling, or safe disposal. A <strong>product life cycle</strong> view helps — every stage has an impact.</p>` +
    `<p>Examples: LED lighting uses less energy than old bulbs; compostable packaging breaks down naturally; clear <strong>labelling</strong> helps users recycle correctly.</p>` +
    `<p><a href="${WIKI["green-design"]}" target="_blank" rel="noopener">Read more on Wikipedia →</a></p>`,
  vocablist: [
    { word: "Green design", translation: "綠色設計", emoji: "🌱" },
    { word: "Efficiency", translation: "效益／效率", emoji: "⚡" },
    { word: "Pollution", translation: "污染", emoji: "💨" },
    { word: "Product life cycle", translation: "產品生命週期", emoji: "🔄" },
    { word: "Compostable", translation: "可堆肥分解", emoji: "🍃" },
    { word: "Labeling", translation: "標籤", emoji: "🏷️" }
  ],
  vocabex:
    "<strong>Green design</strong> considers environmental impact at every stage. Designers increase <span class='vocab-blank' data-answer='Efficiency'></span> and reduce <span class='vocab-blank' data-answer='Pollution'></span>. A <span class='vocab-blank' data-answer='Product life cycle'></span> view tracks impact from creation to disposal. <span class='vocab-blank' data-answer='Compostable'></span> materials break down naturally. Clear <span class='vocab-blank' data-answer='Labeling'></span> helps users recycle correctly."
};

let out = "// Standalone readings and Wikipedia links for ibv2\n";
out += "window.ibSectionIntros = " + JSON.stringify(SECTION_INTROS, null, 2) + ";\n\n";
out += "window.ibWikiLinks = " + JSON.stringify(WIKI, null, 2) + ";\n\n";
out += "window.ibTopicOverviews = " + JSON.stringify(overviews, null, 2) + ";\n";
fs.writeFileSync(__dirname + "/../topic-readings.js", out);
console.log("written", Object.keys(overviews).length, "overviews");
