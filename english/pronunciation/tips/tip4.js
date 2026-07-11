(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[4] = {
    id: 4,
    docTitle: "pronunciation4 — Elision · 省音",
    title: { en: "④ Elision — light or missing <span lang=\"en\">t</span> / <span lang=\"en\">d</span>", zh: "④ 兩子音之間的 <span lang=\"en\">t、d</span> 有時讀得極輕（省音）" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> middle <span lang="en">t</span> in '<span lang="en">exactly</span>'; <span lang="en">t</span> in '<span lang="en">don't</span>' in '<span lang="en">I don't know</span>'.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">exactly</span> 寫多個字母，中間的 <span lang="en">t</span> 有時在聽感上很弱；<span lang="en">I don't know</span> 中 <span lang="en">don't</span> 的 <span lang="en">t</span> 有時也幾乎聽不見。</span></p>
<p><span class="ui-en">Compare spelling vs what you hear. Use row 4 keywords.</span><span class="ui-zh">比較「有寫到」與「聽到幾段」。用連讀小表第 4 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "This is called …", zh: "④ …：兩個子音中間的 t/d" }, answer: "elision", aria: "This is called elision" },
      { prompt: { en: "Sometimes the … drops", zh: "有時 …" }, answer: "t or d", aria: "Sometimes the t or d drops" },
      { prompt: { en: "The key is …", zh: "重點是學 …" }, answer: "listening", aria: "The key is listening" }
    ],
    keywordOptions: [
      { v: "elision", en: "elision", zh: "省音" },
      { v: "t or d", en: "t or d", zh: "T與D可省" },
      { v: "listening", en: "listening", zh: "聽" }
    ],
    phrases: [
      { sound: "exaly", answer: "exactly" },
      { sound: "donknow", answer: "I don't know" },
      { sound: "nexday", answer: "next day" },
      { sound: "olman", answer: "old man" }
    ],
    readHtml: `<p class="article"><span class="ui-en">With consonants on both sides, <span lang="en">t</span> or <span lang="en">d</span> may be <strong>very weak or almost silent</strong> — <strong>elision</strong>. Trust your ear, not letter-by-letter reading.</span><span class="ui-zh">兩邊都是<strong>子音</strong>、中間為字母 <span lang="en">t</span> 或 <span lang="en">d</span> 時，該字母有時<strong>讀得極輕、幾乎聽不見</strong>，稱<strong>省音</strong>。以有聲及教師示範為準，無須執着拼寫與讀法是否逐字相同。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">exactly</span></span><span class="ui-zh">對照一：<span lang="en">exactly</span>（寫 <span lang="en">e-x-a-c-t-l-y</span>，聽中間的 <span lang="en">t</span>）</span></h3>
<div class="syll-demo">
  <p><span class="ui-en">Spelling vs hearing:</span><span class="ui-zh">對照寫出各段，再看聽感</span></p>
  <div class="link-row" aria-label="exactly">
    <span class="syll-bub syll-bub--stress" lang="en">ex</span>
    <span class="syll-bub syll-bub--weak" style="opacity:0.55" lang="en">t</span>
    <span class="syll-bub syll-bub--stress" lang="en">ly</span>
  </div>
  <p class="link-note"><span class="ui-en">Middle <span lang="en">t</span> is often very weak.</span><span class="ui-zh">中間的 <span lang="en">t</span> 有時在聽感上極弱，與兩邊比較。</span></p>
</div>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">I don't know</span></span><span class="ui-zh">對照二：<span lang="en">I don't know</span>（<span lang="en">don't</span> 內的 <span lang="en">t</span>）</span></h3>
<div class="syll-demo">
  <div class="link-row" lang="en">
    <span class="syll-bub syll-bub--weak">I</span>
    <span class="syll-bub syll-bub--weak">don</span>
    <span class="syll-bub syll-bub--weak" style="opacity:0.55">(t)</span>
    <span class="syll-bub syll-bub--stress">know</span>
  </div>
  <p class="link-note"><span class="ui-en">Brackets = sometimes not heard; still hear <span lang="en">know</span> clearly.</span><span class="ui-zh">括號表示有時不發出；<span lang="en">know</span> 那一下仍要聽清。</span></p>
</div>`,
    discussion: {
      en: "In <span lang=\"en\">exactly</span> or <span lang=\"en\">I don't know</span>, which sound seems dropped?",
      zh: "寫兩三句：在 <span lang=\"en\">exactly</span> 或 <span lang=\"en\">I don't know</span> 中，哪一處聲音最像被省掉。Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
