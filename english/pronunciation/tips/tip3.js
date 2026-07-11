(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[3] = {
    id: 3,
    docTitle: "pronunciation3 — Same consonant · 相同輔音",
    title: { en: "③ Same consonant — sounds like once", zh: "③ 相同輔音：聽起來像只讀一次" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> '<span lang="en">bus stop</span>' may sound like '<span lang="en">bustop</span>'; '<span lang="en">some milk</span>' like one <span lang="en">m</span>.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">bus stop</span> 兩邊都是 <span lang="en">s</span>，聽起來有時像一個詞 <span lang="en">bustop</span>（示意用，非正式拼字）；<span lang="en">some milk</span> 兩邊 <span lang="en">m</span> 亦可能聽起來像只讀一次 <span lang="en">m</span> 音。</span></p>
<p><span class="ui-en">Listen to '<span lang="en">first time</span>' and '<span lang="en">great teacher</span>' for the same idea. Use row 3 keywords.</span><span class="ui-zh">再聽 <span lang="en">first time、great teacher</span> 有沒有「兩下併成一下」的感覺。用連讀小表第 3 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "Both sides are …", zh: "連讀小表第 3 點：兩邊是 …" }, answer: "consonants", aria: "Both sides are consonants" },
      { prompt: { en: "And they're …", zh: "又 …" }, answer: "the same", aria: "And they are the same" },
      { prompt: { en: "You often hear it …", zh: "聽起來多數就 …" }, answer: "only once", aria: "You often hear it only once" }
    ],
    keywordOptions: [
      { v: "consonants", en: "consonants", zh: "輔音" },
      { v: "the same", en: "the same", zh: "相同" },
      { v: "only once", en: "only once", zh: "只發一次" }
    ],
    phrases: [
      { sound: "bustop", answer: "bus stop" },
      { sound: "somilk", answer: "some milk" },
      { sound: "firstime", answer: "first time" },
      { sound: "greateacher", answer: "great teacher" }
    ],
    readHtml: `<p class="article"><span class="ui-en">When both sides have the <strong>same or very similar consonant</strong>, you may <strong>not pronounce it twice</strong> — it links and lengthens slightly. Example: <span lang="en">bus stop</span> can sound like one <span lang="en">s</span>.</span><span class="ui-zh">兩邊相鄰處若為<strong>相同或十分接近的子音</strong>，有時<strong>不用讀兩次</strong>，而是<strong>連在一起讀、略為延長</strong>。例：<span lang="en">bus stop</span> 中前詞尾 <span lang="en">s</span> 與後詞開頭 <span lang="en">s</span>，聽起來有時像<strong>一個 <span lang="en">s</span> 音</strong>。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">bus stop</span> vs hearing <span lang="en">bustop</span></span><span class="ui-zh">對照：<span lang="en">bus stop</span>（聽感常像 <span lang="en">bustop</span>）</span></h3>
<div class="syll-demo">
  <p><span class="ui-en">Spelling still shows two words with <span lang="en">s</span>:</span><span class="ui-zh">照拼字仍是兩個詞，各有 <span lang="en">s</span>：</span></p>
  <div class="link-row" aria-label="bus stop separate">
    <span class="syll-bub syll-bub--weak" lang="en">bus</span>
    <span class="link-join" aria-hidden="true">·</span>
    <span class="syll-bub syll-bub--weak" lang="en">stop</span>
  </div>
</div>
<div class="syll-demo">
  <p><span class="ui-en">Listening hint: one linked chunk <strong><span lang="en">bustop</span></strong> (not official spelling).</span><span class="ui-zh">聽起來兩個 <span lang="en">s</span> 很多時像<strong>連在一起</strong>，不用斷開讀兩次；可聯想寫成<strong>一個詞</strong>幫記：</span></p>
  <div class="link-row" aria-label="bustop linked">
    <span class="syll-bub syll-bub--stress" lang="en">bustop</span>
  </div>
</div>
<h3 class="ex-block-title"><span class="ui-en">Also: <span lang="en">some milk, first time, great teacher</span></span><span class="ui-zh">另有：<span lang="en">some milk、first time、great teacher</span></span></h3>
<p class="article"><span class="ui-en">Same idea — listen for one slightly longer consonant. Use the chart and your audio model.</span><span class="ui-zh">要點相同：用耳朵聽有沒有「略為拖長，但只讀一次」的感覺。請對照小表上的字，再跟有聲示範、教師示範。</span></p>`,
    discussion: {
      en: "In <span lang=\"en\">bus stop</span> or <span lang=\"en\">some milk</span>, where do you hear two sounds become one?",
      zh: "寫兩三句：在 <span lang=\"en\">bus stop</span> 或 <span lang=\"en\">some milk</span> 中，你從何處聽到「兩個音聽起來像變成一下（只讀一次）」？"
    },
    formUrl: ""
  };
})(window);
