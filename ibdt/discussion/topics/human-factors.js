window.ibTopicSets = [
  {
    title: "People come in all shapes and sizes",
    articleText:
      "<p>Great design plans for <strong>real people</strong>, not just the average user. In IB Design Technology, human factors and ergonomics ask: does this product fit the body, mind, and daily routines of the people who use it?</p>" +
      "<p><strong>Anthropometrics</strong> is the science of measuring the human body. Designers use measurements such as height, reach, and hand span so products fit most users. They often design between the <strong>5th and 95th percentiles</strong> so extreme sizes are not excluded.</p>" +
      "<p><strong>Static data</strong> is collected when the body is still (for example, standing height). <strong>Dynamic data</strong> is collected during movement (for example, how far someone can reach while seated). <strong>Primary data</strong> is collected by the designer; <strong>secondary data</strong> comes from existing databases.</p>" +
      "<p><strong>Ergonomics</strong> focuses on comfort, safety, and efficiency. It includes physical fit, cognitive load, and the work environment. <strong>Inclusive design</strong> aims to make products usable by as many people as possible, including children, elderly users, and people with disabilities.</p>" +
      "<p><a href=\"https://en.wikipedia.org/wiki/Human_factors_and_ergonomics\" target=\"_blank\" rel=\"noopener\">Read more on Wikipedia →</a></p>",
    vocablist: [
      { word: "Anthropometrics", translation: "人體測量學", emoji: "📏" },
      { word: "Ergonomics", translation: "人體工學", emoji: "🪑" },
      { word: "Percentile", translation: "百分位數", emoji: "🔢" },
      { word: "Static data", translation: "靜態數據", emoji: "🧍" },
      { word: "Dynamic data", translation: "動態數據", emoji: "🏃" },
      { word: "Inclusive design", translation: "共融設計", emoji: "♿" }
    ],
    vocabex:
      "Designers use <span class='vocab-blank' data-answer='Anthropometrics'></span> to measure body dimensions. " +
      "A chair designed with good <span class='vocab-blank' data-answer='Ergonomics'></span> reduces strain during long study sessions. " +
      "The <span class='vocab-blank' data-answer='Percentile'></span> shows how one person's measurement compares to a population. " +
      "Height measured while standing still is <span class='vocab-blank' data-answer='Static data'></span>, while reach during movement is <span class='vocab-blank' data-answer='Dynamic data'></span>. " +
      "Adding braille to an elevator is an example of <span class='vocab-blank' data-answer='Inclusive design'></span>.",
    questions: [
      { emoji: "📊", text: "What is anthropometrics, and why do designers use the 5th and 95th percentiles?", hat: "white-hat" },
      { emoji: "😊", text: "Describe how you feel when a school desk or chair clearly does not fit your body.", hat: "red-hat" },
      { emoji: "🌟", text: "Why is adjustability (for example, chair height or desk angle) a strong ergonomic benefit?", hat: "yellow-hat" },
      { emoji: "⚠️", text: "What problems happen if a product is designed only for the average user?", hat: "black-hat" },
      { emoji: "💡", text: "Redesign one everyday school object to be more inclusive. What would you change?", hat: "green-hat" },
      { emoji: "📋", text: "What data would you collect to test whether a new desk fits your class?", hat: "blue-hat" }
    ]
  },
  {
    title: "Clearance, reach, and workspace",
    articleText:
      "<p>When you sit at a desk, everything you can comfortably reach forms your <strong>workspace envelope</strong>. Designers think about <strong>clearance</strong> (space between objects) and <strong>reach</strong> (how far you can stretch without strain).</p>" +
      "<p><strong>Biomechanics</strong> studies forces and movement in the body. It helps designers reduce injury and fatigue in products used repeatedly — from scissors to factory tools. <strong>Physiological factors</strong> include strength and stamina; <strong>psychological factors</strong> include attention, memory, and perception.</p>" +
      "<p>Good human-factors design also considers <strong>usability</strong>: is the product easy to learn, efficient to use, and satisfying? Emergency controls are often large, red, and placed where users expect them because psychological factors matter as much as physical fit.</p>" +
      "<p><a href=\"https://en.wikipedia.org/wiki/Human_factors_and_ergonomics\" target=\"_blank\" rel=\"noopener\">Read more on Wikipedia →</a></p>",
    vocablist: [
      { word: "Biomechanics", translation: "生物力學", emoji: "🏋️" },
      { word: "Physiological factors", translation: "生理因素", emoji: "💪" },
      { word: "Psychological factors", translation: "心理因素", emoji: "🧠" },
      { word: "Usability", translation: "可用性", emoji: "👍" }
    ],
    vocabex:
      "<span class='vocab-blank' data-answer='Biomechanics'></span> helps designers understand forces on the body during product use. " +
      "Strength and stamina are <span class='vocab-blank' data-answer='Physiological factors'></span>. " +
      "Memory and perception are <span class='vocab-blank' data-answer='Psychological factors'></span>. " +
      "A product that is easy and satisfying to use has high <span class='vocab-blank' data-answer='Usability'></span>.",
    questions: [
      { emoji: "📊", text: "Explain the difference between clearance and reach in a workspace design.", hat: "white-hat" },
      { emoji: "😊", text: "When have psychological factors (colour, layout, sound) changed how you used a product?", hat: "red-hat" },
      { emoji: "🌟", text: "How can biomechanics improve comfort in a product used for long periods?", hat: "yellow-hat" },
      { emoji: "⚠️", text: "What injuries or errors can poor ergonomic design cause?", hat: "black-hat" },
      { emoji: "💡", text: "Invent a simple tool that reduces hand strain for a common classroom task.", hat: "green-hat" },
      { emoji: "📋", text: "How would you test whether a redesigned mouse is more usable than the original?", hat: "blue-hat" }
    ]
  }
];

window.ibTopicSets.forEach((set) => {
  if (set.questions) {
    set.questions = set.questions.sort(() => Math.random() - 0.5);
  }
});
