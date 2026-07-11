(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[7] = {
    id: 7,
    docTitle: "pronunciation7 — Silent h · 擊穿／h",
    title: { en: "⑦ Silent <span lang=\"en\">h</span> — <span lang=\"en\">him / her</span> after a consonant", zh: "⑦ 代詞 <span lang=\"en\">him、her</span> 前字母 <span lang=\"en\">h</span> 有時不發音" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> '<span lang="en">tell him</span>' may sound like '<span lang="en">tell–im</span>' (no <span lang="en">h</span>); '<span lang="en">let her</span>' — <span lang="en">h</span> is often very weak.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">tell him</span> 有時聽成 <span lang="en">tell–im</span>，<span lang="en">h</span> 不帶出；<span lang="en">let her</span> 有時 <span lang="en">h</span> 亦極弱，連讀過去。</span></p>
<p><span class="ui-en">Follow your ear. Use the keywords from the supplement row at the bottom of the chart.</span><span class="ui-zh">以耳跟讀。用本單元最下面「補充」那一欄的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "This is called …", zh: "這類情況叫 …" }, answer: "link-through", aria: "This is called link-through" },
      { prompt: { en: "That means …", zh: "即 …" }, answer: "a silent h", aria: "That means a silent h" },
      { prompt: { en: "So you …", zh: "兩邊就 …" }, answer: "link them up", aria: "So you link them up" }
    ],
    keywordOptions: [
      { v: "link-through", en: "link-through", zh: "擊穿" },
      { v: "a silent h", en: "a silent h", zh: "h不讀" },
      { v: "link them up", en: "link them up", zh: "連讀" }
    ],
    phrases: [
      { sound: "tellim", answer: "tell him" },
      { sound: "leter", answer: "let her" },
      { sound: "givim", answer: "give him" },
      { sound: "asker", answer: "ask her" }
    ],
    readHtml: `<p class="article"><span class="ui-en">For example <span lang="en">tell him</span>: you may hear <span lang="en">tell–im</span> — the letter <span lang="en">h</span> is not pronounced. Some textbooks call this <strong>link-through</strong> (the two sides link smoothly).</span><span class="ui-zh">例如 <span lang="en">tell him</span>：有時聽成 <span lang="en">tell–im</span>，字母 <span lang="en">h</span> 不發出。有課本稱此現象為<strong>擊穿</strong>（兩邊連住讀、帶過）。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">tell him</span> vs <span lang="en">tell–im</span></span><span class="ui-zh">對照：<span lang="en">tell him</span> 與 <span lang="en">tell–im</span> 的聽感</span></h3>
<div class="syll-demo">
  <div class="link-row" lang="en">
    <span class="syll-bub syll-bub--stress">tell</span>
    <span class="syll-bub syll-bub--weak" style="opacity:0.5">(h)</span>
    <span class="syll-bub syll-bub--weak">im</span>
  </div>
  <p class="link-note"><span class="ui-en">Brackets = <span lang="en">h</span> sometimes not heard; compare stress on <span lang="en">tell</span> vs light <span lang="en">im</span>.</span><span class="ui-zh">對照聽感：括號內 <span lang="en">h</span> 表示有時不讀。比較 <span lang="en">tell</span> 與後面 <span lang="en">im</span> 的輕重。</span></p>
</div>`,
    discussion: {
      en: "When do you hear <span lang=\"en\">h</span> not pronounced?",
      zh: "寫兩三句：你何時聽到 <span lang=\"en\">h</span> 不發音。Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
