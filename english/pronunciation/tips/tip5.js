(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[5] = {
    id: 5,
    docTitle: "pronunciation5 — Assimilation · 同化",
    title: { en: "⑤ Assimilation — neighbouring consonants blend", zh: "⑤ 同化：兩邊併讀，聽成另一子音的感覺" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> '<span lang="en">hot meat</span>' — <span lang="en">t</span> + <span lang="en">m</span> may sound like '<span lang="en">hop</span>'; '<span lang="en">green pen</span>' — <span lang="en">n</span> near <span lang="en">p</span> may sound like <span lang="en">m</span> ('<span lang="en">greem pen</span>' as a listening hint).</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">hot meat</span> 的 <span lang="en">t</span> 與 <span lang="en">m</span> 相併，有教材用 <span lang="en">hop</span> 作為節拍提示；<span lang="en">green pen</span> 中的 <span lang="en">n</span> 接近 <span lang="en">p</span> 時，聽感有時接近 <span lang="en">m</span>（可聯想 <span lang="en">greem pen</span>，僅作聽覺提示）。</span></p>
<p><span class="ui-en">Follow your audio model; don't memorise one spelling. Use row 5 keywords.</span><span class="ui-zh">跟有聲示範，勿死背一種寫法。用連讀小表第 5 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "This is called …", zh: "⑤ …：兩邊子音相鄰" }, answer: "assimilation", aria: "This is called assimilation" },
      { prompt: { en: "You may hear a …", zh: "聽起來可能會 …" }, answer: "different sound", aria: "You may hear a different sound" },
      { prompt: { en: "The key is …", zh: "重點是用耳跟 …" }, answer: "listening", aria: "The key is listening" }
    ],
    keywordOptions: [
      { v: "assimilation", en: "assimilation", zh: "同化" },
      { v: "different sound", en: "different sound", zh: "變讀" },
      { v: "listening", en: "listening", zh: "聽" }
    ],
    phrases: [
      { sound: "hopmeat", answer: "hot meat" },
      { sound: "greempen", answer: "green pen" },
      { sound: "browmbag", answer: "brown bag" },
      { sound: "temboys", answer: "ten boys" }
    ],
    readHtml: `<p class="article"><span class="ui-en">When the end of one word and the start of the next are both consonants, they may <strong>blend</strong> and sound like a <strong>different consonant</strong> — <strong>assimilation</strong>. Follow your audio model.</span><span class="ui-zh">前字結尾子音與後字開頭子音<strong>併讀相鄰</strong>，有時聽成<strong>另一子音的感覺</strong>，稱<strong>同化</strong>。請跟有聲示範，不宜死背一種寫法。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">hot meat</span></span><span class="ui-zh">對照一：<span lang="en">hot meat</span>（有教材讀到接近 <span lang="en">hop</span> 的感覺）</span></h3>
<div class="syll-demo">
  <div class="link-row" lang="en">
    <span class="syll-bub syll-bub--stress">hot</span>
    <span class="link-join">~</span>
    <span class="syll-bub syll-bub--stress">meat</span>
  </div>
  <p class="link-note"><span class="ui-en">Some models read the final <span lang="en">t</span> + <span lang="en">m</span> blend like <span lang="en">hop</span> + <span lang="en">meat</span> (listening hint only).</span><span class="ui-zh">對照聽感：有教材讀到末字 <span lang="en">t</span> 與後字 <span lang="en">m</span> 相併，可聯想 <span lang="en">hop</span> 接 <span lang="en">meat</span> 的節拍（僅用字母提示）。</span></p>
</div>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">green pen</span></span><span class="ui-zh">對照二：<span lang="en">green pen</span>（<span lang="en">n</span> 接近 <span lang="en">p</span>，聽感可接近 <span lang="en">m</span>）</span></h3>
<div class="syll-demo">
  <div class="link-row" lang="en">
    <span class="syll-bub syll-bub--weak">green</span>
    <span class="syll-bub syll-bub--stress">pen</span>
  </div>
  <p class="link-note"><span class="ui-en"><span lang="en">n</span> + <span lang="en">p</span> may sound like <span lang="en">m</span> — think <span lang="en">greem pen</span> (not official spelling).</span><span class="ui-zh">聯想：可把聽感記成 <span lang="en">greem pen</span>，提醒自己「<span lang="en">n</span> + <span lang="en">p</span>」相鄰時，前面的鼻音可能聽起來偏向 <span lang="en">m</span>（僅作聽覺提示，非正式拼字）。</span></p>
</div>`,
    discussion: {
      en: "In <span lang=\"en\">hot meat</span> or <span lang=\"en\">green pen</span>, how does blending change what you hear?",
      zh: "以 <span lang=\"en\">hot meat</span> 或 <span lang=\"en\">green pen</span> 寫兩三句，說明兩邊併讀如何令聲音有變。Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
