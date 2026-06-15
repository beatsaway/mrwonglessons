// IB Design Tech topic registry — mirrors dtsl.html (topics 1–6) + dthl.html (topics 7–10 HL)
window.ibTopicRegistry = {
  curriculum: {
    sl: { label: "SL", hours: 150, topics: "1–6", guide: "dtsl.html" },
    hl: { label: "HL", hours: 240, topics: "1–10", guide: "dthl.html" },
    brief: "subjectbrief.html"
  },

  sections: [
    {
      id: "human-factors",
      num: 1,
      emoji: "👤",
      title: "Human Factors & Ergonomics",
      level: "SL",
      topics: [
        { slug: "human-factors", name: "Human Factors & Ergonomics", ref: "1.1" },
        { slug: "psychological-factors", name: "Psychological Factors", ref: "1.2" },
        { slug: "physiological-factors", name: "Physiological Factors", ref: "1.3" }
      ]
    },
    {
      id: "resources",
      num: 2,
      emoji: "🌎",
      title: "Resource Management & Sustainable Production",
      level: "SL",
      topics: [
        { slug: "resources-reserves", name: "Resources & Reserves", ref: "2.1" },
        { slug: "waste-mitigation-strategies", name: "Waste Mitigation Strategies", ref: "2.2" },
        { slug: "waste-mitigation-methods", name: "Waste Mitigation Methods", ref: "2.2" },
        { slug: "batteries", name: "Batteries", ref: "2.3" },
        { slug: "energy-utilization", name: "Energy Utilization", ref: "2.3" },
        { slug: "energy-distribution", name: "Energy Distribution", ref: "2.3" },
        { slug: "clean-technology", name: "Clean Technology", ref: "2.4" }
      ]
    },
    {
      id: "modelling",
      num: 3,
      emoji: "📐",
      title: "Modelling",
      level: "SL",
      topics: [
        { slug: "concept-modeling", name: "Concept Modeling", ref: "3.1" },
        { slug: "graphical-modeling", name: "Graphical Modeling", ref: "3.2" },
        { slug: "physical-modeling", name: "Physical Modeling", ref: "3.3" },
        { slug: "computer-aided-design", name: "Computer-Aided Design", ref: "3.4" },
        { slug: "rapid-prototyping", name: "Rapid Prototyping", ref: "3.5" },
        { slug: "advanced-cad-tech", name: "Advanced CAD Technologies", ref: "3.6" },
        { slug: "additive-manufacturing-tech", name: "Additive Manufacturing Techniques", ref: "3.7" }
      ]
    },
    {
      id: "materials",
      num: 4,
      emoji: "🧱",
      title: "Materials, Properties & Production",
      level: "SL",
      topics: [
        { slug: "properties-of-materials", name: "Properties of Materials", ref: "4.0" },
        { slug: "smart-materials", name: "Smart Materials", ref: "4.1" },
        { slug: "material-graphs", name: "Material Graphs & Selection Charts", ref: "4.2" },
        { slug: "metals", name: "Metals", ref: "4.2a" },
        { slug: "alloys", name: "Alloys", ref: "4.2b" },
        { slug: "timber", name: "Timber", ref: "4.2c" },
        { slug: "glass", name: "Glass", ref: "4.2d" },
        { slug: "plastics", name: "Plastics", ref: "4.2e" },
        { slug: "textiles", name: "Textiles", ref: "4.2f" },
        { slug: "composites", name: "Composites", ref: "4.2g" },
        { slug: "scales-of-production", name: "Scales of Production", ref: "4.3" },
        { slug: "manufacturing-processes", name: "Manufacturing Processes", ref: "4.4" },
        { slug: "shaping-and-joining", name: "Shaping & Joining Techniques", ref: "4.5" },
        { slug: "production-systems", name: "Production Systems", ref: "4.6" },
        { slug: "robots-in-automated-production", name: "Robots in Automated Production", ref: "4.7" }
      ]
    },
    {
      id: "innovation",
      num: 5,
      emoji: "🚀",
      title: "Innovation & Design",
      level: "SL",
      topics: [
        { slug: "invention-and-intellectual-property", name: "Invention & Intellectual Property", ref: "5.1" },
        { slug: "innovation-and-diffusion", name: "Innovation & Diffusion", ref: "5.2" },
        { slug: "strategies-for-innovation", name: "Strategies for Innovation", ref: "5.3" },
        { slug: "stakeholders-in-innovation", name: "Stakeholders in Innovation", ref: "5.4" },
        { slug: "product-life-cycles", name: "Product Life Cycles", ref: "5.5" },
        { slug: "product-versions-and-strategies", name: "Product Versions & Strategies", ref: "5.6" },
        { slug: "rogers-characteristics-of-innovation", name: "Rogers' Characteristics of Innovation", ref: "5.7" },
        { slug: "innovation-design-and-marketing-specifications", name: "Innovation Design & Marketing Specs", ref: "5.8" },
        { slug: "incremental-vs-radical", name: "Incremental vs Radical Innovation", ref: "5.x" }
      ]
    },
    {
      id: "classic",
      num: 6,
      emoji: "🎨",
      title: "Classic Design",
      level: "SL",
      topics: [
        { slug: "characteristics-of-classic-design", name: "Characteristics of Classic Design", ref: "6.1" },
        { slug: "classic-designs-examples", name: "Classic Designs: Examples & Impact", ref: "6.2" },
        { slug: "classic-design-form-and-function", name: "Classic Design: Form & Function", ref: "6.3" }
      ]
    },
    {
      id: "ucd",
      num: 7,
      emoji: "👥",
      title: "User-Centered & Inclusive Design",
      level: "HL",
      topics: [
        { slug: "user-centered-design", name: "User-Centered Design", ref: "7.1" },
        { slug: "inclusive-design", name: "Inclusive Design", ref: "7.2" },
        { slug: "usability", name: "Usability", ref: "7.3" },
        { slug: "population-stereotypes", name: "Population Stereotypes", ref: "7.4" },
        { slug: "user-research-strategies", name: "User Research Strategies", ref: "7.5" },
        { slug: "user-scenarios", name: "User Scenarios", ref: "7.6" },
        { slug: "user-centered-design-strategies", name: "Strategies for User-Centered Design", ref: "7.7" },
        { slug: "usability-testing-environments", name: "Usability Testing Environments", ref: "7.8" },
        { slug: "beyond-usability", name: "Beyond Usability", ref: "7.9" }
      ]
    },
    {
      id: "sustainability",
      num: 8,
      emoji: "🌿",
      title: "Sustainability & Green Design",
      level: "HL",
      topics: [
        { slug: "sustainable-development", name: "Sustainable Development", ref: "8.1" },
        { slug: "sustainable-products-and-practices", name: "Sustainable Products & Practices", ref: "8.2" },
        { slug: "sustainable-consumption", name: "Sustainable Consumption", ref: "8.2" },
        { slug: "sustainable-design", name: "Sustainable Design", ref: "8.3" },
        { slug: "sustainable-design-legislation", name: "Sustainable Design & Legislation", ref: "8.3" },
        { slug: "sustainable-innovation", name: "Sustainable Innovation", ref: "8.4" },
        { slug: "energy-sustainability", name: "Energy Sustainability", ref: "8.4" },
        { slug: "dashevsky-principles", name: "Dashevsky's Five Principles", ref: "8.3 HL" },
        { slug: "eco-design", name: "Eco Design", ref: "8.3 HL" },
        { slug: "eco-design-roles", name: "Eco Design: Roles & Responsibilities", ref: "8.3 HL" },
        { slug: "green-design", name: "Green Design", ref: "8.2" },
        { slug: "green-design-drivers", name: "Drivers of Green Design", ref: "8.2" }
      ]
    },
    {
      id: "markets",
      num: 9,
      emoji: "📈",
      title: "Innovation and Markets",
      level: "HL",
      topics: [
        { slug: "innovation-and-markets", name: "Innovation and Markets", ref: "9.1" },
        { slug: "market-sectors-segments", name: "Market Sectors & Segments", ref: "9.2" },
        { slug: "market-mix", name: "Market Mix: The 4 Ps", ref: "9.3a" },
        { slug: "product-standardization", name: "Product Standardization & Types", ref: "9.3b" },
        { slug: "market-research-purpose", name: "Market Research: Purpose", ref: "9.4a" },
        { slug: "market-research-strategies", name: "Market Research Strategies", ref: "9.4b" },
        { slug: "branding-brand-loyalty", name: "Branding, Brand Loyalty & Value", ref: "9.5a" },
        { slug: "trademarks-packaging-global", name: "Trademarks, Packaging & Global Branding", ref: "9.5b" }
      ]
    },
    {
      id: "production",
      num: 10,
      emoji: "🏭",
      title: "Commercial Production",
      level: "HL",
      topics: [
        { slug: "jit-production", name: "Just in Time (JIT) Production", ref: "10.1a" },
        { slug: "jic-production", name: "Just in Case (JIC) Production", ref: "10.1b" },
        { slug: "lean-production", name: "Lean Production", ref: "10.2a" },
        { slug: "value-stream-mapping", name: "Value Stream Mapping", ref: "10.2b" },
        { slug: "workflow-kaizen-empowerment", name: "Workflow Analysis, Kaizen & Empowerment", ref: "10.2c" },
        { slug: "5s-seven-wastes", name: "5S & The Seven Wastes", ref: "10.2d" },
        { slug: "cim-overview-impact", name: "CIM: Overview & Impact", ref: "10.3a" },
        { slug: "cim-investment-maintenance", name: "CIM: Investment & Maintenance", ref: "10.3b" },
        { slug: "quality-management-qc-qa-spc", name: "Quality Management: QC, QA & SPC", ref: "10.4a" },
        { slug: "economic-viability-cost-analysis", name: "Economic Viability & Cost Analysis", ref: "10.4b" }
      ]
    }
  ],

  fullTopics: ["human-factors", "batteries", "invention-and-intellectual-property"]
};

window.ibTopicRegistry.allTopics = window.ibTopicRegistry.sections.flatMap((section) =>
  section.topics.map((topic) => ({
    ...topic,
    sectionId: section.id,
    sectionNum: section.num,
    sectionTitle: section.title,
    sectionEmoji: section.emoji,
    level: section.level,
    levelLabel: section.level === "HL" ? "HL" : "SL · HL",
    levelTags: section.level === "HL" ? ["HL"] : ["SL", "HL"]
  }))
);

window.ibTopicRegistry.slTopics = window.ibTopicRegistry.allTopics.filter((t) => t.level === "SL");
window.ibTopicRegistry.hlTopics = window.ibTopicRegistry.allTopics;
