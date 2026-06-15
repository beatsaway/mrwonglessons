window.ibTopicSets = [
  {
    title: "How batteries store and release energy",
    articleText:
      "<p>A <strong>battery</strong> stores chemical energy and converts it into electrical energy through electrochemical reactions. Every battery has an <strong>anode</strong> (negative electrode), a <strong>cathode</strong> (positive electrode), and an <strong>electrolyte</strong> that allows ions to move between them.</p>" +
      "<p><strong>Primary batteries</strong> are single-use and cannot be recharged. <strong>Secondary batteries</strong> are rechargeable. A <strong>capacitor</strong> stores and releases electrical energy quickly, but is not the same as a chemical battery.</p>" +
      "<p>Designers must choose battery types based on voltage, lifespan, weight, safety, and environmental impact. Common types include <strong>zinc carbon</strong> (cheap disposable AA/AAA), <strong>alkaline</strong> (longer-lasting disposable), <strong>lithium ion</strong> (phones, laptops, EVs), and <strong>lead acid</strong> (car engines).</p>",
    vocablist: [
      { word: "Anode", translation: "負極", emoji: "➖" },
      { word: "Cathode", translation: "正極", emoji: "➕" },
      { word: "Electrolyte", translation: "電解質", emoji: "💧" },
      { word: "Primary battery", translation: "一次性電池", emoji: "🔋" },
      { word: "Secondary battery", translation: "可充電電池", emoji: "♻️" },
      { word: "Lithium Ion", translation: "鋰離子電池", emoji: "📱" }
    ],
    vocabex:
      "In a battery, the <span class='vocab-blank' data-answer='Anode'></span> is the negative electrode and the <span class='vocab-blank' data-answer='Cathode'></span> is the positive electrode. " +
      "Ions move through the <span class='vocab-blank' data-answer='Electrolyte'></span>. " +
      "A single-use AA cell is a <span class='vocab-blank' data-answer='Primary battery'></span>, while a phone battery is a <span class='vocab-blank' data-answer='Secondary battery'></span>. " +
      "Most laptops use a <span class='vocab-blank' data-answer='Lithium Ion'></span> cell.",
    questions: [
      { emoji: "📊", text: "What are the three main parts of a battery and what does each do?", hat: "white-hat" },
      { emoji: "😊", text: "How do you feel when a device runs out of battery at an important moment?", hat: "red-hat" },
      { emoji: "🌟", text: "Why are rechargeable secondary batteries better for sustainable product design?", hat: "yellow-hat" },
      { emoji: "⚠️", text: "What environmental or safety risks come from disposing of batteries incorrectly?", hat: "black-hat" },
      { emoji: "💡", text: "Design a low-power product that could run on a smaller, safer battery type.", hat: "green-hat" },
      { emoji: "📋", text: "What criteria would you use to select a battery for a portable school device?", hat: "blue-hat" }
    ]
  }
];

window.ibTopicSets.forEach((set) => {
  if (set.questions) set.questions = set.questions.sort(() => Math.random() - 0.5);
});
