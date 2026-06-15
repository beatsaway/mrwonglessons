window.ibTopicSets = [
  {
    title: "Invention, motivation, and IP",
    articleText:
      "<p>An <strong>invention</strong> is a new principle or idea that leads to a novel product. People invent for many reasons: personal interest, <strong>constructive discontent</strong> (wanting to fix something frustrating), money, scientific curiosity, or necessity.</p>" +
      "<p>A <strong>lone inventor</strong> may have full creative control but can struggle with funding, marketing, and teamwork. <strong>Intellectual property (IP)</strong> protects creations of the mind. Key forms include <strong>patents</strong> (inventions), <strong>copyright</strong> (creative works), and <strong>trademarks</strong> (brand symbols).</p>" +
      "<p>When copyright expires, work enters the <strong>public domain</strong> and anyone may use it. Being <strong>first to market</strong> can bring major profit, but <strong>shelf technology</strong> — developed but not yet released — may appear later in a different product.</p>",
    vocablist: [
      { word: "Invention", translation: "發明", emoji: "💡" },
      { word: "Intellectual property (IP)", translation: "知識產權", emoji: "⚖️" },
      { word: "Patent", translation: "專利", emoji: "📜" },
      { word: "Copyright", translation: "版權", emoji: "©️" },
      { word: "Trademark", translation: "商標", emoji: "™️" },
      { word: "First to market", translation: "率先上市", emoji: "🏁" }
    ],
    vocabex:
      "A new principle that creates a novel product is an <span class='vocab-blank' data-answer='Invention'></span>. " +
      "Legal rights for creations of the mind are called <span class='vocab-blank' data-answer='Intellectual property (IP)'></span>. " +
      "A government-granted right to make or sell an invention is a <span class='vocab-blank' data-answer='Patent'></span>. " +
      "Control over use of a creative work is protected by <span class='vocab-blank' data-answer='Copyright'></span>. " +
      "A registered brand symbol is a <span class='vocab-blank' data-answer='Trademark'></span>. " +
      "The first product of its type released can gain advantage by being <span class='vocab-blank' data-answer='First to market'></span>.",
    questions: [
      { emoji: "📊", text: "What motivates people to invent? Give at least three motivators.", hat: "white-hat" },
      { emoji: "😊", text: "How would you feel as a lone inventor if a big company copied your idea?", hat: "red-hat" },
      { emoji: "🌟", text: "What are the advantages of patent protection for an inventor?", hat: "yellow-hat" },
      { emoji: "⚠️", text: "What are the disadvantages of being a lone inventor?", hat: "black-hat" },
      { emoji: "💡", text: "Imagine a school product you could invent. What IP would you need to protect?", hat: "green-hat" },
      { emoji: "📋", text: "What steps would you take before sharing a new design publicly?", hat: "blue-hat" }
    ]
  }
];

window.ibTopicSets.forEach((set) => {
  if (set.questions) set.questions = set.questions.sort(() => Math.random() - 0.5);
});
