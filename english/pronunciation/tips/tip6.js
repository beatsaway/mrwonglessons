(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[6] = {
    id: 6,
    docTitle: "pronunciation6 — Weak forms · 弱讀（施瓦）",
    title: { en: "⑥ Weak forms — short function words (<span lang=\"en\">schwa</span>)", zh: "⑥ 短字、功能詞讀得較輕（極短 a 一類；學名：施瓦 <span lang=\"en\">schwa</span>）" },
    fillExamples: `<p><span class="ui-en"><strong>Examples:</strong> '<span lang="en">go to school</span>' — '<span lang="en">to</span>' may sound like '<span lang="en">tuh</span>'; '<span lang="en">a cup of coffee</span>' — '<span lang="en">of</span>' is often very short, like '<span lang="en">uh</span>'.</span><span class="ui-zh"><strong>示範（不用填）：</strong><span lang="en">go to school</span> 的 <span lang="en">to</span> 有時寫 <span lang="en">tuh</span> 一類幫聽；<span lang="en">a cup of coffee</span> 的 <span lang="en">of</span> 常是很短很輕、接近 <span lang="en">uh</span>。</span></p>
<p><span class="ui-en">Listen for stress, not phonetic symbols. Use row 6 keywords.</span><span class="ui-zh">用耳辨輕重，勿死背音標。用連讀小表第 6 點的關鍵字，把下面填好。</span></p>`,
    keywordRows: [
      { prompt: { en: "These are …", zh: "⑥ … 常弱讀" }, answer: "function words", aria: "These are function words" },
      { prompt: { en: "They often use a …", zh: "常 …" }, answer: "weak form", aria: "They often use a weak form" },
      { prompt: { en: "The vowel often becomes …", zh: "多數會變成 … 那種短音" }, answer: "schwa", aria: "The vowel often becomes schwa" }
    ],
    keywordOptions: [
      { v: "function words", en: "function words", zh: "功能詞" },
      { v: "weak form", en: "weak form", zh: "弱讀" },
      { v: "schwa", en: "schwa", zh: "施瓦" }
    ],
    phrases: [
      { sound: "gotuh", answer: "go to" },
      { sound: "gotuhskool", answer: "go to school" },
      { sound: "acupuhcoffee", answer: "a cup of coffee" },
      { sound: "fertuhken", answer: "for / to / can" }
    ],
    readHtml: `<p class="article"><span class="ui-en">High-frequency short words like <span lang="en">of, to, for, can</span> often have a vowel that is <strong>very short and light</strong>. In English this is called the <strong>schwa</strong>; hints like <span lang="en">tuh, fuh, kuh</span> help you hear it — no phonetic symbols needed.</span><span class="ui-zh">高頻出現的短字如 <span lang="en">of、to、for、can</span>，內中母音常讀得<strong>好短好輕</strong>。英語學理稱作<strong>施瓦</strong>，用英語字常寫 <span lang="en">tuh、fuh、kuh</span> 一類幫聽，不必使用音標。</span></p>
<h3 class="ex-block-title"><span class="ui-en">Compare: <span lang="en">go to school</span> (<span lang="en">to</span> → <span lang="en">tuh</span>)</span><span class="ui-zh">對照：<span lang="en">go to school</span>（<span lang="en">to</span> 讀成 <span lang="en">tuh</span> 一類）</span></h3>
<div class="syll-demo">
  <div class="link-row" lang="en">
    <span class="syll-bub syll-bub--weak">go</span>
    <span class="syll-bub syll-bub--weak" lang="en">tuh</span>
    <span class="syll-bub syll-bub--stress">school</span>
  </div>
  <p class="link-note"><span class="ui-en">Written <span lang="en">to</span> sounds short and light (<span lang="en">tuh</span>); compare with clear <span lang="en">go</span> and <span lang="en">school</span>.</span><span class="ui-zh">對照：寫 <span lang="en">to</span> 那一下聽成又短又輕（<span lang="en">tuh</span> 一類寫法）；<span lang="en">go</span> 與 <span lang="en">school</span> 的清楚度亦可比較。</span></p>
</div>`,
    discussion: {
      en: "Pick <span lang=\"en\">for, can,</span> or <span lang=\"en\">to</span> — when does it sound short and light in a sentence?",
      zh: "選 <span lang=\"en\">for、can、to</span> 其一，寫一兩句，說明在句內讀得短、輕的情況。Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
