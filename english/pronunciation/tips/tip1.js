(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[1] = {
    id: 1,
    docTitle: "pronunciation1 — Consonant → vowel · 輔音接母音",
    title: { en: "① Consonant → vowel", zh: "① 輔音接母音（輔＋元）" },
    fillExamples: `<p><span class="ui-en"><strong>Examples (not in the quiz):</strong> '<span lang="en">turn it on</span>' — <span lang="en">n</span> links to the vowel in '<span lang="en">it</span>'; '<span lang="en">come in</span>' — <span lang="en">m</span> links to '<span lang="en">in</span>'.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">turn it on</span>、<span lang="en">come in</span> 的子音接到下一詞母音。</span></p>
<p><span class="ui-en">Phrases like '<span lang="en">not at all</span>' often have several C→V links. Use row 1 keywords from the linking chart.</span><span class="ui-zh"><span lang="en">not at all</span> 一類句子內亦常出現多處子音接母音。照連讀小表第 1 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "First word ends in …", zh: "前字尾是 …" }, answer: "a consonant", aria: "First word ends in a consonant" },
      { prompt: { en: "Next word starts with …", zh: "後字以 … 開頭" }, answer: "a vowel", aria: "Next word starts with a vowel" },
      { prompt: { en: "So you …", zh: "就要 …" }, answer: "link them up", aria: "So you link them up" }
    ],
    keywordOptions: [
      { v: "a consonant", en: "a consonant", zh: "輔音" },
      { v: "a vowel", en: "a vowel", zh: "元音" },
      { v: "link them up", en: "link them up", zh: "連讀" }
    ],
    phrases: [
      { sound: "geton", answer: "get on" },
      { sound: "anapple", answer: "an apple" },
      { sound: "comein", answer: "come in" },
      { sound: "notatall", answer: "not at all" }
    ],
    readHtml: `<p class="article"><span class="ui-en">When the first word <strong>ends in a consonant</strong> and the next <strong>starts with a vowel</strong>, the final consonant often links forward — <strong>the two words sound like one chunk</strong>. Follow your teacher and audio models.</span><span class="ui-zh">前詞結尾為子音、後詞以母音開頭時，前詞末子音常接到後詞，兩詞聽成一段。實際讀法以有聲教材及教師示範為準。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">get on</span> — separate vs linked as <span lang="en">ge·ton</span></span><span class="ui-zh">對照一：<span lang="en">get on</span>（分開讀 vs 連讀）</span></h3>
<div class="syll-demo">
  <p><span class="ui-en">Slow read — two words</span><span class="ui-zh">先慢讀、分兩個詞聽</span></p>
  <div class="syll-row" aria-label="get on separate">
    <span class="syll-bub syll-bub--weak" lang="en">get</span>
    <span class="syll-bub syll-bub--weak" lang="en">on</span>
  </div>
  <p class="link-note"><span class="ui-en">Two separate words for comparison.</span><span class="ui-zh">上行對照：兩個詞分開讀，方便對音。</span></p>
</div>
<div class="syll-demo">
  <p><span class="ui-en">In speech, final <span lang="en">t</span> often links to <span lang="en">on</span> — you may write <strong><span lang="en">ge · ton</span></strong></span><span class="ui-zh">口語常把末字 t 接到 on，聽成一段；用字母可寫成 ge · ton</span></p>
  <div class="link-row" aria-label="get on linked">
    <span class="syll-bub syll-bub--weak" lang="en">ge</span>
    <span class="syll-bub syll-bub--stress" title="t links to the vowel in on" lang="en">ton</span>
  </div>
  <p class="link-note"><span class="ui-en">Linked spelling shows how the final consonant joins the next vowel.</span><span class="ui-zh">下行對照：連讀時可寫成 ge · ton，看末子音怎樣接到下一個詞的母音。</span></p>
</div>
<h2 class="section"><span class="ui-en">Compare: <span lang="en">an apple</span> vs hearing <span lang="en">a · napple</span></span><span class="ui-zh">對照二</span></h2>
<div class="syll-demo">
  <p><span class="ui-en">Two words on the page</span><span class="ui-zh">先對照兩個詞的寫法</span></p>
  <div class="syll-row" aria-label="an apple separate">
    <span class="syll-bub syll-bub--weak" lang="en">an</span>
    <span class="syll-bub syll-bub--weak" lang="en">apple</span>
  </div>
</div>
<div class="syll-demo">
  <p><span class="ui-en">Linked hearing may be written <strong><span lang="en">a · napple</span></strong> (one possible hint)</span><span class="ui-zh">再對照一氣讀的聽感，用字母可寫 a · napple（非唯一寫法）</span></p>
  <div class="link-row" aria-label="an apple linked">
    <span class="syll-bub syll-bub--weak" lang="en">a</span>
    <span class="link-join" aria-hidden="true">+</span>
    <span class="syll-bub syll-bub--weak" lang="en">napple</span>
  </div>
  <p class="link-note"><span class="ui-en">Compare <span lang="en">an / apple</span> vs <span lang="en">a / napple</span>. Accent varies — follow your model.</span><span class="ui-zh">重點在比較「an / apple」與「a / napple」兩種分段。</span></p>
</div>`,
    discussion: {
      en: "In a few sentences: how does comparing separate vs linked reading help you hear a final consonant joining the next vowel?",
      zh: "用兩三句說明：對照「分開讀」與「連讀」如何幫你理解「末子音接到下一詞的母音」。Google 表單連結由教師公布。"
    },
    formUrl: ""
  };
})(window);
