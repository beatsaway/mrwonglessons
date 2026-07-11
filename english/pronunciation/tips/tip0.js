(function (w) {
  w.PRON_TIPS = w.PRON_TIPS || {};
  w.PRON_TIPS[0] = {
    id: 0,
    docTitle: "Connected speech — introduction · 連讀概覽",
    title: { en: "⓪ Introduction — what these lessons cover", zh: "⓪ 概覽 — 這七課在學什麼" },
    fillExamples: `<p><span class="ui-en"><strong>Examples (not in the quiz):</strong> '<span lang="en">get on</span>' is lesson ①; '<span lang="en">I am</span>' is lesson ②; '<span lang="en">bus stop</span>' is lesson ③.</span><span class="ui-zh"><strong>示範（不用填）：</strong>'<span lang="en">get on</span>' 屬①；'<span lang="en">I am</span>' 屬②；'<span lang="en">bus stop</span>' 屬③。</span></p>
<p><span class="ui-en">Below: three overview questions, then four phrases from different lessons. Read the list on the Read tab if you need help.</span><span class="ui-zh">下面三題考概覽，四題連讀來自不同課。可先讀「課文」分頁的七課一覽。</span></p>`,
    keywordRows: [
      { prompt: { en: "In fast speech, words often …", zh: "口語裡，詞與詞常 …" }, answer: "link together", aria: "In fast speech, words often link together" },
      { prompt: { en: "This unit has … lessons", zh: "本單元共 … 課" }, answer: "seven", aria: "This unit has seven lessons" },
      { prompt: { en: "They match your …", zh: "各課對應你的 …" }, answer: "linking chart", aria: "They match your linking chart" }
    ],
    keywordOptions: [
      { v: "link together", en: "link together", zh: "連在一起" },
      { v: "seven", en: "seven", zh: "七" },
      { v: "linking chart", en: "linking chart", zh: "連讀小表" }
    ],
    phrases: [
      { sound: "geton", answer: "get on" },
      { sound: "iyam", answer: "I am" },
      { sound: "bustop", answer: "bus stop" },
      { sound: "tellim", answer: "tell him" }
    ],
    readHtml: `<p class="article"><span class="ui-en">When people speak English naturally, words often <strong>run together</strong>. You may not hear each word on its own — that is <strong>connected speech</strong>.</span><span class="ui-zh">英語口語裡，詞與詞常<strong>連在一起讀</strong>，有時聽不清每個詞分開的樣子，這就是<strong>連讀</strong>。</span></p>
<p class="article"><span class="ui-en">This unit has <strong>seven</strong> short lessons (①–⑦). They match your linking chart. Use <strong>Read</strong> to learn each point and <strong>Practice</strong> to try keywords and listening. Hints use English letters, not phonetic symbols — follow your teacher and audio models.</span><span class="ui-zh">本單元共<strong>七</strong>小課（①–⑦），對應連讀小表。用<strong>課文</strong>學重點，用<strong>練習</strong>做關鍵字與聽音填空。示範用英文字母，一般不用音標；以有聲教材及教師示範為準。</span></p>
<section class="tip-overview" aria-labelledby="overview-list-title">
  <h2 class="section" id="overview-list-title"><span class="ui-en">The seven lessons</span><span class="ui-zh">七課一覽</span></h2>
  <ol>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="1">① Consonant → vowel</button> — e.g. '<span lang="en">get on</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="1">① 輔音接母音</button> — 如 '<span lang="en">get on</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="2">② Glide between vowels</button> — e.g. '<span lang="en">I am</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="2">② 兩個元音之間加滑音</button> — 如 '<span lang="en">I am</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="3">③ Same consonant</button> — e.g. '<span lang="en">bus stop</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="3">③ 相同輔音</button> — 如 '<span lang="en">bus stop</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="4">④ Elision</button> — e.g. '<span lang="en">exactly</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="4">④ 省音</button> — 如 '<span lang="en">exactly</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="5">⑤ Assimilation</button> — e.g. '<span lang="en">hot meat</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="5">⑤ 同化</button> — 如 '<span lang="en">hot meat</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="6">⑥ Weak forms</button> — e.g. '<span lang="en">go to</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="6">⑥ 弱讀</button> — 如 '<span lang="en">go to</span>'</span></li>
    <li><span class="ui-en"><button type="button" class="tip-jump" data-tip="7">⑦ Silent h</button> — e.g. '<span lang="en">tell him</span>'</span><span class="ui-zh"><button type="button" class="tip-jump" data-tip="7">⑦ 擊穿／h 不讀</button> — 如 '<span lang="en">tell him</span>'</span></li>
  </ol>
</section>`,
    discussion: {
      en: "Which lesson number do you want to try first? Why?",
      zh: "你想先試哪一課（①–⑦）？為什麼？Google 表單由教師公布。"
    },
    formUrl: ""
  };
})(window);
