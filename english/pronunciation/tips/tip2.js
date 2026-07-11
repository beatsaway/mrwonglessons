(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[2] = {
    id: 2,
    docTitle: "pronunciation2 — Glide between vowels · 兩個元音之間加滑音",
    title: { en: "② Glide between vowels", zh: "② 兩個元音之間加滑音" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> '<span lang="en">I am</span>' may sound like '<span lang="en">I · yam</span>'; '<span lang="en">go in</span>' like '<span lang="en">go · win</span>'.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">I am</span> 的聽感有時寫 <span lang="en">I · yam</span>，中間一瞬 <span lang="en">y</span>；<span lang="en">go in</span> 可聯想 <span lang="en">go · win</span>，中間一瞬 <span lang="en">w</span>。</span></p>
<p><span class="ui-en">'<span lang="en">see it, do it, how about</span>' are on row 2 of the linking chart. Use those keywords below.</span><span class="ui-zh"><span lang="en">see it、do it、how about</span> 在連讀小表第 2 點也找得到。用表上第 2 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "Both ends are …", zh: "連讀小表第 2 點：兩邊都是 …" }, answer: "vowels", aria: "Both ends are vowels" },
      { prompt: { en: "You add a … between them", zh: "中間常加 …" }, answer: "glide", aria: "You add a glide" },
      { prompt: { en: "You can write this as …", zh: "常見為 y 或 w，可寫作 …" }, answer: "y or w", aria: "y or w" }
    ],
    keywordOptions: [
      { v: "vowels", en: "vowels", zh: "元音" },
      { v: "glide", en: "glide", zh: "加滑音" },
      { v: "y or w", en: "y or w", zh: "y或w" }
    ],
    phrases: [
      { sound: "iyam", answer: "I am" },
      { sound: "gowin", answer: "go in" },
      { sound: "seeyit", answer: "see it" },
      { sound: "dowit", answer: "do it" }
    ],
    readHtml: `<p class="article"><span class="ui-en">When the first word ends in a vowel and the next starts with a vowel, a <strong>very short</strong> <span lang="en">y</span> or <span lang="en">w</span> often links them. Follow your audio model.</span><span class="ui-zh">前詞以母音結尾、後詞以母音開頭時，兩者之間常多一節<strong>極短</strong>的 <span lang="en">y</span> 或 <span lang="en">w</span>，讓銜接較自然。有無此音、輕重如何，以有聲材料及教師示範為準。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">I am</span> and the <span lang="en">y</span> in the middle</span><span class="ui-zh">對照一：<span lang="en">I am</span> 與中間的 <span lang="en">y</span></span></h3>
<div class="syll-demo">
  <p><span class="ui-en">Write <span lang="en">I · yam</span> — middle box is a tiny <span lang="en">y</span>.</span><span class="ui-zh">對照：寫成 <span lang="en">I</span> 與 <span lang="en">am</span>；聽起來亦可寫 <strong><span lang="en">I · yam</span></strong>。中間一格寫 <span lang="en">y</span> 表示極短滑音。</span></p>
  <div class="link-row" aria-label="I am y glide">
    <span class="syll-bub syll-bub--weak" lang="en">I</span>
    <span class="syll-bub syll-bub--weak" lang="en">y</span>
    <span class="syll-bub syll-bub--stress" lang="en">am</span>
  </div>
  <p class="link-note"><span class="ui-en">The middle <span lang="en">y</span> is usually very short.</span><span class="ui-zh">比較左右：兩邊是主要音節，中間的 <span lang="en">y</span> 常極短。</span></p>
</div>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">go in</span> and the <span lang="en">w</span> in the middle</span><span class="ui-zh">對照二：<span lang="en">go in</span> 與中間的 <span lang="en">w</span></span></h3>
<div class="syll-demo">
  <p><span class="ui-en">Think <strong><span lang="en">go · win</span></strong> — middle box is <span lang="en">w</span>.</span><span class="ui-zh">對照：可聯想 <strong><span lang="en">go · win</span></strong> 的聽感，中間一格寫 <span lang="en">w</span>。</span></p>
  <div class="link-row" aria-label="go in w glide">
    <span class="syll-bub syll-bub--weak" lang="en">go</span>
    <span class="syll-bub syll-bub--weak" lang="en">w</span>
    <span class="syll-bub syll-bub--stress" lang="en">in</span>
  </div>
  <p class="link-note"><span class="ui-en">Same pattern as above — compare <span lang="en">see it, how about, do it</span> with the chart.</span><span class="ui-zh">比較三格與上例是否同樣「兩邊＋中間那一下」。<span lang="en">see it、how about、do it</span> 可對照小表和示範。</span></p>
</div>`,
    discussion: {
      en: "Which glide is easier for you to hear — <span lang=\"en\">y</span> or <span lang=\"en\">w</span>? How do you practise with audio?",
      zh: "寫兩三句：你聽 <span lang=\"en\">y</span> 與 <span lang=\"en\">w</span> 兩類滑音，哪一類較易辨認？你如何用有聲材料跟讀。Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
