/**
 * Visual arts foundations lessons (index.html) — data + etext + enrich + app.
 */

/**
 * 視覺藝術教案 v2 — 節次內容（供 lesson-plansv2.html 載入）
 * 每節含：參考圖、詞彙庫、理解檢核、延伸思考、小實作、配對題、填空題。
 * 英文版文案見 lesson-plansv2-etext.js（index.html 設定 LESSON_PLAN_LOCALE === 'en'）。
 */
window.LESSONS_V2_DATA = [
  {
    id: "1",
    badge: "第 1 節",
    title: "視覺主修：線條",
    map: "方向 · 粗幼 · 快慢 · 情緒",
    image: "img/l1.webp",
    imageAlt: "第1節參考圖：線條三例",
    vocabBank: "線條粗幼、線條方向、速度感、激動／平靜、有機線、幾何線、線條疏密、工具感（尺規／手繪）",
    checkQuestions: [
      "配對：將「垂直而穩定的長線」「狂亂細碎的雨線」「龜裂紋般的有機分叉線」分別對應區域甲、乙、丙（寫出：甲＝？、乙＝？、丙＝？）。",
      "詞彙選擇：哪一區最適合用「高能量、筆觸對比強烈」描述？哪一區最適合用「秩序、重複方向」描述？",
      "辨識：圖中哪一區同時出現「粗線與細線並置」？這樣做對畫面情緒有何幫助？"
    ],
    openQuestions: [
      "若把乙區建築素描的線條改成「手繪顫抖線」，建築給人的感覺會變成什麼？仍符合「教堂」主題嗎？",
      "甲區若改成全是等粗的細線，沒有濃淡，「風暴」還能成立嗎？試說明理由。",
      "丙區的「疏密」如何引導眼睛？若裂紋變稀疏，主題會變得較輕鬆還是較空洞？"
    ],
    practicalTask: "在方格本畫六格（建議兩行三列，每格約 8cm 寬）：每格嘗試不同線條質感，須至少一格偏「激動、動盪」、至少一格偏「安靜、受控」，主題可六格統一或自選（如風、建築、植物）。完成後用本節至少兩個詞彙自評。",
    panels: [
      { key: "甲", title: "《風暴墨浪》", hint: "水墨／筆觸對比" },
      { key: "乙", title: "《教堂線稿》", hint: "建築素描" },
      { key: "丙", title: "《龜裂大地》", hint: "有機裂紋" }
    ],
    matchItems: [
      { id: "1a", descriptor: "以垂直、平行長線與穩定曲線為主，具尺規秩序感", correct: "乙" },
      { id: "1b", descriptor: "粗重筆觸與細碎線條並置，動能與風雨感強烈", correct: "甲" },
      { id: "1c", descriptor: "不規則分叉、網狀疏密，屬有機慢線", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "本節視覺主修元素是「___」；區域甲主要用筆觸的「___」與「___」變化表現風暴。", answers: ["線條", "粗幼", "快慢"] },
      { text: "區域乙若改為手繪顫線，畫面會從「___」轉向「___」的情緒聯想。", answers: ["安定", "不確定"] }
    ]
  },
  {
    id: "2",
    badge: "第 2 節",
    title: "視覺主修：形狀與圖地關係",
    map: "正負形 · 剪影 · 歧義",
    image: "img/l2.webp",
    imageAlt: "第2節參考圖：圖地與剪影三例",
    vocabBank: "正形／負形、圖地關係、剪影、幾何形／自由形、歧義、高對比",
    checkQuestions: [
      "配對：「樹林與留白形成另一形象」「剪紙內部的鏤空負形」「蒸氣形狀與杯形產生聯想」分別對應哪一區（甲／乙／丙）？",
      "負形：乙區作品中，除了外輪廓，請指出一處「內部被挖空」的形狀如何影響辨認。",
      "是非題：丙區是否必須「像咖啡杯」才能閱讀？蒸氣與音符形狀的曖昧，對設計有什麼用？"
    ],
    openQuestions: [
      "甲區若把黑白反轉，最先改變的是「主題辨認」還是「情緒」？",
      "剪紙與標誌設計都用到剪影，兩者在「可讀性」要求上有何不同？",
      "哪一區最依賴「邊緣清晰」？若邊緣變模糊，圖地關係會怎樣崩解？"
    ],
    practicalTask: "用單色紙剪貼或黑卡白筆：完成一個可辨認物象，並在旁加一塊故意曖昧的圖地（同儕可猜多種讀法）。",
    panels: [
      { key: "甲", title: "《樹隙形象》", hint: "圖地反轉" },
      { key: "乙", title: "《剪紙龍紋》", hint: "鏤空負形" },
      { key: "丙", title: "《蒸氣與杯形》", hint: "形狀歧義" }
    ],
    matchItems: [
      { id: "2a", descriptor: "黑色樹形與留白共同「讀出」另一完整形象", correct: "甲" },
      { id: "2b", descriptor: "鏤空內部負形繁複，具剪紙／剪影文化特徵", correct: "乙" },
      { id: "2c", descriptor: "蒸氣輪廓與器皿並置，產生聯想與設計上的曖昧", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "高對比時，「___」與「___」可互相轉換成為觀看焦點（圖地關係）。", answers: ["正形", "負形"] },
      { text: "丙區利用形狀___，使觀者在辨認物象時有多重可能。", answers: ["歧義"] }
    ]
  },
  {
    id: "3",
    badge: "第 3 節",
    title: "視覺主修：色彩（一）色相與色調",
    map: "暖色調 · 冷色調 · 互補色",
    image: "img/l3.webp",
    imageAlt: "第3節：暖色室內、冷色山湖、紅綠對比",
    vocabBank: "色相、暖色調、冷色調、鄰近色（類似色）、互補色、整體氣氛、焦點",
    checkQuestions: [
      "配對：「整體偏橙黃的親切室內」「藍紫為主的黃昏湖景」「紅與綠並置的街景焦點」對應甲、乙、丙哪一區？",
      "選擇：哪一區最適合用「鄰近色相、色調統一」描述？哪一區最適合用「色相對立、焦點突出」描述？",
      "詞彙：乙區給你「孤獨／寧靜／寒冷」中哪兩種聯想最強？用畫面色相說明。"
    ],
    openQuestions: [
      "若甲區加入一小塊鮮藍抱枕，「暖色調統一」會被破壞嗎？會變得更活潑還是雜亂？",
      "丙區的焦點主要靠色彩還是靠形狀？若牆壁不是綠色，電話亭仍醒目嗎？",
      "傳統彩瓷或街景照片如何呈現「主色調」？試舉生活一例呼應乙區。"
    ],
    practicalTask: "以三種限定色相（水彩或粉彩薄塗）完成小風景或靜物色稿（約 A6），要求色調統一（偏暖或偏冷自選），並寫一句說明主色調。",
    panels: [
      { key: "甲", title: "《暖色客廳》", hint: "鄰近暖色相" },
      { key: "乙", title: "《冷色山湖》", hint: "黃昏冷調" },
      { key: "丙", title: "《紅綠街景》", hint: "互補並置" }
    ],
    matchItems: [
      { id: "3a", descriptor: "整體偏橙、赭、黃，氣氛溫暖親切", correct: "甲" },
      { id: "3b", descriptor: "藍、青、紫為主，偏冷調與黃昏空氣", correct: "乙" },
      { id: "3c", descriptor: "紅與綠色域對立，易形成視覺焦點", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "色環上相對的兩色互為「___」，並置時常能強化___。", answers: ["互補色", "焦點"] },
      { text: "乙區整體屬「___」色調，易聯想寧靜或距離感。", answers: ["冷"] }
    ]
  },
  {
    id: "4",
    badge: "第 4 節",
    title: "視覺主修：色彩（二）明度與彩度",
    map: "明度階 · 彩度 · 空氣感 · 立體",
    image: "img/l4.webp",
    imageAlt: "第4節：灰階山景、霓虹街景、聚光蘋果",
    vocabBank: "明度、明度層次、彩度（飽和度）、灰階、高光／暗部、焦點、立體感",
    checkQuestions: [
      "配對：「多層灰階遠近」「灰霧中一塊高彩招牌」「聚光下蘋果的明暗過渡」對應甲、乙、丙哪一區？",
      "標示：在丙區用口頭或紙上標出「最亮一點」「最暗一塊」「灰面過渡帶」。",
      "比較：乙區中，低彩度環境與高彩度塊面並置，對「空氣／距離感」有什麼效果？"
    ],
    openQuestions: [
      "沒有色相的甲區，如何仍能表現「深遠」？試用明度詞彙回答。",
      "若乙區招牌改為低彩度粉紅，與環境融為一體，主題會變成什麼？",
      "同一顆蘋果，若改為平均柔光、對比很弱，情緒會比較「安全」還是「平淡」？"
    ],
    practicalTask: "四格紙：同一簡單形（如圓、瓶），變化明度與彩度；可保留一格為灰階、一格加一個高彩小色點作焦點。自選一格寫一句情緒聯想。",
    panels: [
      { key: "甲", title: "《灰階遠山》", hint: "明度層次" },
      { key: "乙", title: "《霓虹焦點》", hint: "低彩環境／高彩塊" },
      { key: "丙", title: "《聚光蘋果》", hint: "明暗立體" }
    ],
    matchItems: [
      { id: "4a", descriptor: "只靠黑白灰層次區分遠近與空氣", correct: "甲" },
      { id: "4b", descriptor: "環境灰悶、單一色塊高飽和跳出", correct: "乙" },
      { id: "4c", descriptor: "亮部、暗部與中間調塑造圓形體積", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "甲區主要靠「___」變化表現空間，不必出現彩色___。", answers: ["明度", "色相"] },
      { text: "___ 越高，該色在灰濁背景中越容易成為視覺焦點。", answers: ["彩度"] }
    ]
  },
  {
    id: "5",
    badge: "第 5 節",
    title: "視覺主修：質感",
    map: "視覺質感 · 觸覺聯想 · 厚塗",
    image: "img/l5.webp",
    imageAlt: "第5節：鐵鏽門、絲與石、厚塗",
    vocabBank: "視覺質感、觸覺聯想、粗糙／光滑、鏽蝕、高光、厚塗（impasto）、真實質感／描繪質感",
    checkQuestions: [
      "配對：「鏽與剝漆的粗糙」「絲與石的光滑對照」「顏料堆疊的立體肌理」對應甲、乙、丙哪一區？",
      "觸覺：閉眼想像用手指摸甲區，再用兩個形容詞描述；睜眼後指出畫面哪裡「說服」你。",
      "辨識：丙區屬於「真實可觸的材料」還是「顏料本身的肌理」？與乙區有何不同？"
    ],
    openQuestions: [
      "光滑質感是否一定代表「冷靜」？乙區同時有布與石，情緒是否比單一材質更複雜？",
      "若甲區改成平面卡通線條，沒有細節，主題「歲月／廢棄」還成立嗎？",
      "厚塗與拓印在「製作過程」上分別給觀者什麼線索？"
    ],
    practicalTask: "質感九宮格（小格約 4cm）：在格內試作質感，任選拓印、擦筆、點描等至少兩種方法；每格可標一個質感形容詞（如粗糙、鬆軟）。",
    panels: [
      { key: "甲", title: "《鏽門剝漆》", hint: "粗糙視覺質感" },
      { key: "乙", title: "《絲與大理石》", hint: "光滑高光" },
      { key: "丙", title: "《厚塗肌理》", hint: "顏料本體" }
    ],
    matchItems: [
      { id: "5a", descriptor: "鏽斑、剝落、沙粒感，觸覺聯想強烈", correct: "甲" },
      { id: "5b", descriptor: "布料柔軟與石材冷硬並置，靠高光暗示光滑", correct: "乙" },
      { id: "5c", descriptor: "厚顏料堆疊，屬畫面實際起伏的肌理", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "畫中能「騙過眼睛」的觸覺聯想，稱為___質感；顏料堆高則接近___質感。", answers: ["視覺", "真實"] },
      { text: "甲區的___與___細節，強化廢棄與時間感。", answers: ["鏽蝕", "剝漆"] }
    ]
  },
  {
    id: "6",
    badge: "第 6 節",
    title: "視覺主修：空間（前後與層次）",
    map: "透視 · 空氣透視 · 重疊",
    image: "img/l6.webp",
    imageAlt: "第6節：道路透視、林後遠山、浮世繪層次",
    vocabBank: "線性透視、消失點、地平線、空氣透視（遠淡遠灰）、重疊、垂直位置、觀者視點",
    checkQuestions: [
      "配對：「道路匯聚至一點」「前樹後山、遠山偏淡藍灰」「非西方透視、靠重疊與上下位置」對應甲、乙、丙哪一區？",
      "箭頭題：在乙區口述「最近」「最遠」各一處，並說出一條空間線索（大小／對比／模糊）。",
      "詞彙：甲區的「地平線」大致在哪？若消失點抬高，道路情緒會變陡峻還是開闊？（簡答）"
    ],
    openQuestions: [
      "丙區若不用透視網格，仍覺得「有遠近」，是靠哪些組織手法？",
      "航拍或風景畫中，「站在哪裡看」如何改變空間敘事？試聯想一種職業（導遊、司機、鳥類）對應視點。",
      "刪去乙區最前景一棵樹，空間會變得更「通透」還是更「失重」？"
    ],
    practicalTask: "以照片臨摹或窗外小景，完成線稿或淡彩一張（約 A5），唯一要求：能指出至少三層前中後，並用鉛筆輕標「近／中／遠」。",
    panels: [
      { key: "甲", title: "《沙漠道路》", hint: "線性透視" },
      { key: "乙", title: "《林後遠山》", hint: "空氣透視" },
      { key: "丙", title: "《浮世繪層次》", hint: "重疊與上下" }
    ],
    matchItems: [
      { id: "6a", descriptor: "道路邊線匯聚至地平線上單一消失點", correct: "甲" },
      { id: "6b", descriptor: "近景清晰深暗、遠景灰藍偏淡，屬大氣／空氣透視", correct: "乙" },
      { id: "6c", descriptor: "以重疊與圖形上下位置暗示前後，透視網格較弱", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "線性透視中，與眼睛同高的一條想像水平線稱為___。", answers: ["地平線"] },
      { text: "遠景變淡、變灰、變模糊，屬___透視，常與空氣中有關。", answers: ["空氣"] }
    ]
  },
  {
    id: "7",
    badge: "第 7 節",
    title: "組織原理：對比",
    map: "色 · 形 · 質感",
    image: "img/l7.webp",
    imageAlt: "第7節：白傘、象與鼠、鉻球與煤",
    vocabBank: "對比類型、色彩對比、大小對比、質感對比、焦點、強對比／弱對比",
    checkQuestions: [
      "配對：「亮色塊在暗人群中」「體積懸殊」「光滑球體在粗糙炭塊上」對應甲、乙、丙哪一區？",
      "分類：三區各屬哪一種對比為主（色／尺度／質感）？有一區是否其實混合了兩種？說明。",
      "焦點：甲區第一眼落在何處？若白傘改灰，焦點會轉移到哪裡？"
    ],
    openQuestions: [
      "對比「過強」可能帶來警告感；「過弱」可能帶來柔和或沉悶。試各舉一個生活情境呼應。",
      "乙區的空曠大堂如何加強「大小對比」的可信度？若背景塞滿家具，效果會怎樣？",
      "海報設計常同時用色彩與尺度對比，參考三區，你會如何組合兩種對比做一張「邀請」而非「警告」？"
    ],
    practicalTask: "畫兩個速寫稿：同一簡單圖形或場景，一張高對比、一張低對比。口頭辨識哪張較像「警告」、哪張較像「柔和邀請」。",
    panels: [
      { key: "甲", title: "《雨中白傘》", hint: "色彩對比" },
      { key: "乙", title: "《象與鼠》", hint: "尺度對比" },
      { key: "丙", title: "《鉻球與煤》", hint: "質感對比" }
    ],
    matchItems: [
      { id: "7a", descriptor: "小面積高明度色塊置於低明度群體中，易成焦點", correct: "甲" },
      { id: "7b", descriptor: "體積與比例懸殊，強調尺度差異", correct: "乙" },
      { id: "7c", descriptor: "鏡面光滑與粗糙碎裂並置，觸覺聯想對立", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "對比是組織原理的一種，常透過差異強化___。", answers: ["焦點"] },
      { text: "乙區主要靠___對比，使觀眾注意體量與空間比例。", answers: ["大小"] }
    ]
  },
  {
    id: "8",
    badge: "第 8 節",
    title: "組織原理：節奏與重複",
    map: "規律 · 漸變 · 打破重複",
    image: "img/l8.webp",
    imageAlt: "第8節：紋樣、漸變緞帶、破窗",
    vocabBank: "重複單元、規律節奏、漸變節奏（漸快／漸慢）、間距、打破重複、驚喜、視線動線",
    checkQuestions: [
      "配對：「幾何單元穩定重複」「間距漸窄造成加速感」「整排窗格中一處破損與植物」對應甲、乙、丙哪一區？",
      "辨識：乙區節奏變快或變緊張，是靠「單元變形」還是靠「空白變化」？",
      "詞彙：丙區的「驚喜」若拿掉植物，只剩破窗，情緒會變得更陰鬱還是更無趣？"
    ],
    openQuestions: [
      "音樂中的節拍與視覺重複有何相似與不同？試用甲或乙區說明。",
      "建築立面與紡織圖案都常用重複，兩者對「錯誤容忍度」是否不同？",
      "若丙區每扇窗都長植物，「打破」還存在嗎？統一與變化如何再平衡？"
    ],
    practicalTask: "設計一條邊飾或方格圖案：整體重複清楚，並安排一處漸變或一處打破。",
    panels: [
      { key: "甲", title: "《幾何紋樣》", hint: "規律重複" },
      { key: "乙", title: "《漸窄緞帶》", hint: "漸變節奏" },
      { key: "丙", title: "《破窗植物》", hint: "打破重複" }
    ],
    matchItems: [
      { id: "8a", descriptor: "單元形狀一致、間距穩定，節奏規律", correct: "甲" },
      { id: "8b", descriptor: "間距或留白漸變，產生加速或壓縮感", correct: "乙" },
      { id: "8c", descriptor: "連續重複中出現單一變異，形成驚喜與敘事", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "重複單元之間距逐漸改變，可形成___節奏。", answers: ["漸變"] },
      { text: "在規律中加入一處「破綻」，常用來避免畫面過於___。", answers: ["單調"] }
    ]
  },
  {
    id: "9",
    badge: "第 9 節",
    title: "組織原理：統一與變化",
    map: "系列感 · 母題 · 技法",
    image: "img/l9.webp",
    imageAlt: "第9節：茶壺系列、品牌物件、點描花束",
    vocabBank: "統一（色彩／圖形／技法）、變化（造型／內容）、系列感、母題、單調",
    checkQuestions: [
      "配對：「同色同紋、器形不同」「同一色系與圓形母題跨物件」「不同花卉、同一點描技法」對應甲、乙、丙哪一區？",
      "列表：寫出甲區「統一元素」兩項、「變化元素」一項。",
      "判斷：乙區若抽走圓形母題只留顏色，系列感會變強還是變弱？"
    ],
    openQuestions: [
      "導演分鏡或攝影系列如何像甲區一樣「看得出同一套」又「每張不完全相同」？",
      "丙區統一在「筆法」而非「物象」，對觀者比較吃力還是比較耐讀？為什麼？",
      "若第四件產品要「出格」一點，你會改色彩還是改比例？會不會破壞系列？"
    ],
    practicalTask: "完成三張卡（同一主題或同一小物），要求一眼看出同一系列，且每張有一處明顯變化。",
    panels: [
      { key: "甲", title: "《同紋茶壺》", hint: "色與紋統一" },
      { key: "乙", title: "《品牌物件》", hint: "母題跨品項" },
      { key: "丙", title: "《點描花束》", hint: "技法統一" }
    ],
    matchItems: [
      { id: "9a", descriptor: "釉色與圖案重複，器形各異，系列感來自色彩與紋樣", correct: "甲" },
      { id: "9b", descriptor: "包裝與器物共用色與圓形符號，屬品牌視覺統一", correct: "乙" },
      { id: "9c", descriptor: "花卉種類不同，但點描筆法一致，統一在技法", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "系列設計中，重複出現的圖形或色彩單元可稱為___。", answers: ["母題"] },
      { text: "統一與___需並存：過度統一易顯得___。", answers: ["變化", "呆板"] }
    ]
  },
  {
    id: "10",
    badge: "第 10 節",
    title: "組織原理：平衡（對稱與均衡）",
    map: "對稱 · 非對稱均衡 · 視覺重量",
    image: "img/l10.webp",
    imageAlt: "第10節：對稱建築、枯山水、偏重型構圖",
    vocabBank: "對稱、軸線、非對稱均衡、視覺重量、明暗與面積、穩定／不穩定",
    checkQuestions: [
      "配對：「沿中軸對稱的建築立面」「左大石右細紋的均衡」「重心偏右下角的不穩感」對應甲、乙、丙哪一區？",
      "比較：甲與乙哪一張較傳達「權威／儀式感」？用平衡詞彙解釋。",
      "重量：丙區若把重色塊移到正中央，情緒會比較「安定」還是「呆板」？預測並說明。"
    ],
    openQuestions: [
      "國旗、徽章、傳統紋樣常用哪種平衡？與當代海報偏愛的非對稱有何文化差異？（簡述）",
      "「刻意不穩定」可用來表達不安或動盪。丙區若改為完全居中對稱，敘事會如何消失？",
      "小面積深色與大面積淺色可以互相平衡，試在乙區找出類似關係。"
    ],
    practicalTask: "完成兩件構圖：一稿「穩定均衡」、一稿「刻意不穩定但仍有張力」。",
    panels: [
      { key: "甲", title: "《對稱立面》", hint: "正式對稱" },
      { key: "乙", title: "《枯山水》", hint: "非對稱均衡" },
      { key: "丙", title: "《偏重型》", hint: "不穩定感" }
    ],
    matchItems: [
      { id: "10a", descriptor: "沿中央軸左右呼應，儀式感與穩定感強", correct: "甲" },
      { id: "10b", descriptor: "左右不等量，但以石、砂、留白達成視覺均衡", correct: "乙" },
      { id: "10c", descriptor: "重色與構圖重心偏移，引發下墜或不安聯想", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "非對稱時，色塊的___、___與位置都會改變「視覺重量」。", answers: ["大小", "明暗"] },
      { text: "沿垂直中軸左右鏡像的配置，稱為___平衡。", answers: ["對稱"] }
    ]
  },
  {
    id: "11",
    badge: "第 11–12 節",
    title: "統整與歷程（探究／工作簿）",
    map: "草稿與完稿 · 紀錄方式 · 微型創作",
    image: "img/l11and12.webp",
    imageAlt: "第11-12節：草圖與完稿、工作簿、微型創作",
    vocabBank: "草稿／完稿、試錯、修改痕跡、研究工作簿、視覺紀錄、綜合（多元素併用）、評賞步驟（描述→分析→詮釋→判斷）",
    checkQuestions: [
      "配對：「同一主題左草右完成」「色票、拼貼、箭頭的歷程頁」「小尺幅綜合創作」對應甲、乙、丙哪一區？",
      "流程：從甲區看，草圖與油畫之間，你猜畫者至少做過哪兩類修改？（構圖／明暗／刪除細節等，合理即可）",
      "詞彙：乙區哪些元素顯示「探究過程」而非只有「最終答案」？列舉兩項。"
    ],
    openQuestions: [
      "公開評核或研究工作簿為何重視「過程」？若只有完稿照片，會失去什麼證據？",
      "丙區若指定只能用「線條＋對比」表達孤獨，你會選直線還是曲線？粗還是細？試論證。",
      "第 12 節連結升學：試想一個「微主題」，寫出三個可探究的視覺子問題（例如媒材、節奏、空間）。"
    ],
    practicalTask: "二選一：(A) 完成一頁工作簿：含色票、肌理試驗等視覺紀錄；(B) 完成一件綜合創作，自選至少一項已學視覺元素與一項組織原理。",
    panels: [
      { key: "甲", title: "《草圖與完稿》", hint: "修改歷程" },
      { key: "乙", title: "《工作簿紀錄》", hint: "探究痕跡" },
      { key: "丙", title: "《微型創作》", hint: "元素＋原理" }
    ],
    matchItems: [
      { id: "11a", descriptor: "同一題材並置未完成與完成，顯示試錯與定稿", correct: "甲" },
      { id: "11b", descriptor: "色票、拼貼、箭頭連線，屬研究紀錄與視覺筆記", correct: "乙" },
      { id: "11c", descriptor: "小尺幅內綜合運用已學語言，偏向成果展示", correct: "丙" }
    ],
    fillInBlanks: [
      { text: "研究工作簿重視記錄___與試錯，而非只有___。", answers: ["過程", "完稿"] },
      { text: "評賞四步驟可簡記為：描述、___、詮釋、判斷。", answers: ["分析"] }
    ]
  }
];


/**
 * English (etext) mirror for LESSONS_V2_DATA — same ids; composite = left / middle / right (= 甲/乙/丙).
 * Loaded before lesson-plansv2.js when LESSON_PLAN_LOCALE === 'en'.
 */
window.LESSONS_V2_ETEXT = {
  "1": {
    badge: "Lesson 1",
    title: "Visual focus: Line",
    map: "Direction · weight · speed · mood",
    imageAlt: "Lesson 1 reference: three line studies",
    vocabBank: "line weight, direction, sense of speed, restless/calm, organic vs. geometric line, density, ruler vs. freehand",
    checkQuestions: [
      "Which panel feels most calm and controlled through line direction and steadiness?",
      "Which panel feels most urgent or restless through line speed and weight?",
      "Which panel feels most fragmented or brittle through branching, web-like line density?"
    ],
    observationAnswers: ["Middle", "Left", "Right"],
    openQuestions: [
      "If the cathedral sketch in the middle picture used shaky hand-drawn lines instead, how would the building feel? Would it still read as a cathedral?",
      "If the left picture used only even thin lines with no variation, could “storm” still work? Why or why not?",
      "How does line density in the right picture guide your eye? If the cracks were sparse, would the theme feel lighter or emptier?"
    ],
    practicalTask:
      "Goal: Show how line quality can suggest different moods.\n\nApply direction, weight, speed, and mood in the marks—same subject in every box is fine.\n\nWhat to do: (1) Draw six equal boxes in a grid (for example, two rows of three); each about 8 cm wide. (2) Use each box to try a different line treatment—include at least one energetic, agitated passage and at least one calm, controlled passage (any simple subject: wind, building, plant, etc.). (3) Aim for contrast between the boxes; if two look too similar, push one toward chaos and the other toward repetition. (4) No writing or lettering on the picture.",
    panels: [
      { key: "Left", title: "Storm ink waves", hint: "ink / stroke contrast" },
      { key: "Middle", title: "Cathedral study", hint: "architectural lines" },
      { key: "Right", title: "Cracked ground", hint: "organic cracks" }
    ],
    matchItems: [
      { id: "1a", descriptor: "Heavy and thin strokes interwoven; urgent, restless energy", correct: "Left" },
      { id: "1b", descriptor: "Long verticals and steady curves; calm, orderly control", correct: "Middle" },
      { id: "1c", descriptor: "Irregular branching lines and uneven density; brittle, uneasy tension", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "This lesson’s element is \"___\"; the left picture mainly uses changes in \"___\" and \"___\" to suggest the storm.", answers: ["line", "weight", "speed"] },
      { text: "If the middle picture were drawn with trembling lines, the mood would shift from \"___\" toward \"___\".", answers: ["stable", "uncertain"] },
      { text: "___ line often feels ordered; ___ line can feel natural or unpredictable.", answers: ["geometric", "organic"] },
      { text: "Packing many marks into an area raises line ___; open areas can feel quieter or more ___.", answers: ["density", "sparse"] }
    ],
    vocabWiki: {
      links: [
        { label: "Expressionism", href: "https://en.wikipedia.org/wiki/Expressionism" },
        { label: "Gesture drawing", href: "https://en.wikipedia.org/wiki/Gesture_drawing" }
      ]
    }
  },
  "2": {
    badge: "Lesson 2",
    title: "Visual focus: Figure & ground",
    map: "Positive/negative · silhouette · ambiguity",
    imageAlt: "Lesson 2: figure-ground and silhouette",
    vocabBank: "positive/negative shape, figure–ground, silhouette, geometric vs. free form, ambiguity, high contrast",
    checkQuestions: [
      "Which composition makes figure and ground swap or flip most easily?",
      "Which relies on hollow cut-outs as strong, crisp graphic shapes?",
      "Which has the softest edges and the most open, ambiguous reading?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "If you invert black and white in the left picture, what changes first—recognition or mood?",
      "Paper-cutting and logos both use silhouette. How do their “readability” needs differ?",
      "Which picture depends most on crisp edges? What happens if edges blur?"
    ],
    practicalTask:
      "Goal: Practice figure–ground and silhouette in monochrome.\n\nApply positive/negative shape, silhouette, and ambiguity—use one colour plus white or the paper (any monochrome medium: paint, pencil, ink, collage, etc.).\n\nWhat to do: (1) Make one small study with a clear, readable silhouette. (2) Make a second where figure and ground stay ambiguous. (3) In at least one study, both the solid shape and the empty shape around it must matter to the picture—not just leftover background.",
    panels: [
      { key: "Left", title: "Forest figure", hint: "figure–ground flip" },
      { key: "Middle", title: "Dragon papercut", hint: "negative voids" },
      { key: "Right", title: "Cup & vapor", hint: "softest edges, organic form" }
    ],
    matchItems: [
      { id: "2a", descriptor: "Dark/light masses interlock; flip reads easily—second shape in the gaps", correct: "Left" },
      { id: "2b", descriptor: "Planned hollow cut-outs; crisp graphic silhouette", correct: "Middle" },
      { id: "2c", descriptor: "Softest edges, least hard lines; organic form, ambiguous read", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "At high contrast, \"___\" and \"___\" can swap roles as the figure you notice (figure–ground).", answers: ["positive", "negative"] },
      { text: "The right picture uses shape ___ so viewers can read more than one subject.", answers: ["ambiguity"] },
      { text: "A readable ___ still works when inside detail is reduced to simple masses.", answers: ["silhouette"] },
      { text: "Strong ___ between light and dark areas makes the edge between figure and ground clearer.", answers: ["contrast"] }
    ],
    vocabWiki: {
      links: [
        {
          label: "Figure–ground",
          href: "https://en.wikipedia.org/wiki/Figure%E2%80%93ground_(perception)"
        },
        { label: "Silhouette", href: "https://en.wikipedia.org/wiki/Silhouette" }
      ]
    }
  },
  "3": {
    badge: "Lesson 3",
    title: "Visual focus: Color I — hue & mood",
    map: "Warm · cool · complementary",
    imageAlt: "Lesson 3: warm interior, cool lake, red–green street",
    vocabBank: "hue, warm palette, cool palette, analogous colors, complementary colors, overall mood, focal point",
    checkQuestions: [
      "Which palette feels warmest and most sheltering overall?",
      "Which feels coolest, quietest, and most distant?",
      "Which pair of hues feels most opposed and visually tense?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "If you add a bright blue cushion in the left picture, is the warm scheme broken? Does it feel busier or more lively?",
      "In the right picture, is the focus mostly color or shape? Would the booth still pop if the wall were not green?",
      "Where do you see a dominant hue in daily life or craft? Link one example to the middle picture."
    ],
    practicalTask:
      "Goal: Control mood using a limited palette and clear warm or cool temperature.\n\nApply warm, cool, and complementary relationships in the colours—mostly one temperature overall.\n\nWhat to do: (1) Paint or draw a landscape or still life. (2) Use only three hues (watercolor, chalk, or colored pencil). (3) Keep the whole picture mostly warm or mostly cool; use stronger hue or saturation contrast where you want attention to land. (4) If the colour goes muddy, you likely mixed complements on the palette—clean the brush between warm and cool.",
    panels: [
      { key: "Left", title: "Warm living room", hint: "analogous warm" },
      { key: "Middle", title: "Cool lake", hint: "dusk cool" },
      { key: "Right", title: "Red–green street", hint: "complements" }
    ],
    matchItems: [
      { id: "3a", descriptor: "Cluster of neighbouring warm hues; enclosed, cozy temperature", correct: "Left" },
      { id: "3b", descriptor: "Cool blues and violets; receding, quiet distance", correct: "Middle" },
      { id: "3c", descriptor: "Opposing hues side by side; strong focal vibration", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "Hues opposite on the wheel are ___; placing them side by side often strengthens ___.", answers: ["complements", "focus"] },
      { text: "The middle picture reads as a \"___\" palette—often suggesting distance or quiet.", answers: ["cool"] },
      { text: "The general name for a color family is ___; it is not the same as value or saturation.", answers: ["hue"] },
      { text: "Overall ___ is partly controlled by dominant hue and temperature.", answers: ["mood"] }
    ],
    vocabWiki: {
      links: [
        { label: "Color theory", href: "https://en.wikipedia.org/wiki/Color_theory" },
        { label: "Complementary colors", href: "https://en.wikipedia.org/wiki/Complementary_colors" }
      ]
    }
  },
  "4": {
    badge: "Lesson 4",
    title: "Visual focus: Color II — value & saturation",
    map: "Value scale · chroma · atmosphere · volume",
    imageAlt: "Lesson 4: grayscale mountains, neon street, spotlight apple",
    vocabBank: "value, value steps, saturation (chroma), grayscale, highlight/shadow, focal point, volume",
    checkQuestions: [
      "Which reads depth mainly through gray steps, without hue?",
      "Which has one bright chroma accent on a dull, muted ground?",
      "Which models light and shadow wrapping a form with the clearest volume?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "How can the left picture suggest depth without using hue? Use value words.",
      "If the sign in the middle picture were a low-chroma pink that blended in, what would happen to the theme?",
      "Same apple under flat, low-contrast light—does it feel safer or duller?"
    ],
    practicalTask:
      "Goal: See how value and saturation change focus and atmosphere without relying on many hues.\n\nApply value scale, chroma, atmosphere, and volume across the four squares.\n\nWhat to do: (1) Divide your page into four equal squares. (2) Use one simple shape in each square. (3) Change value and chroma from square to square; in one square you may use only grayscale plus a single color accent.",
    panels: [
      { key: "Left", title: "Grayscale ridges", hint: "value layers" },
      { key: "Middle", title: "Neon accent", hint: "muted ground / vivid accent" },
      { key: "Right", title: "Spotlit apple", hint: "light to dark" }
    ],
    matchItems: [
      { id: "4a", descriptor: "Layered grays only; depth read without hue", correct: "Left" },
      { id: "4b", descriptor: "One saturated accent on a dull ground; sharp focal pull", correct: "Middle" },
      { id: "4c", descriptor: "Clear light, mid-tone, and shadow wrapping a form; round volume", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "The left picture builds space mainly with ___ shifts; you don’t need color ___.", answers: ["value", "hue"] },
      { text: "Higher ___ makes a color stand out against a gray, muddy ground.", answers: ["saturation"] },
      { text: "Very dull, low-chroma colors are often called ___ or neutralized.", answers: ["muted"] },
      { text: "Light and shadow across the apple help the viewer sense round ___ and form.", answers: ["volume"] }
    ],
    vocabWiki: {
      links: [
        { label: "Chiaroscuro", href: "https://en.wikipedia.org/wiki/Chiaroscuro" },
        { label: "Saturation", href: "https://en.wikipedia.org/wiki/Colorfulness" }
      ]
    }
  },
  "5": {
    badge: "Lesson 5",
    title: "Visual focus: Texture",
    map: "Visual texture · touch · impasto",
    imageAlt: "Lesson 5: rusted gate, silk & marble, impasto",
    vocabBank: "visual texture, tactile association, rough/smooth, rust, highlights, impasto, actual vs. depicted texture",
    checkQuestions: [
      "Which surface feels roughest, most pitted, and time-worn?",
      "Which contrasts glossy highlights against cool, matte areas?",
      "Which shows real raised relief you could feel under the light?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "Does smooth always mean “cold”? Does the middle picture feel more complex than a single material?",
      "If the left picture were flat cartoon lines with no detail, would age or decay still read?",
      "What do impasto and frottage tell us about the artist’s process?"
    ],
    practicalTask:
      "Goal: Build a small library of texture in the grid.\n\nApply visual texture, touch, and impasto in the cells—marks and materials only.\n\nWhat to do: (1) Draw a 3×3 grid with cells about 4 cm across. (2) Fill cells using at least two different methods (rubbing, erasing, stipple, impasto, etc.).",
    panels: [
      { key: "Left", title: "Rusted gate", hint: "rough visual texture" },
      { key: "Middle", title: "Silk & marble", hint: "smooth highlights" },
      { key: "Right", title: "Impasto", hint: "paint body" }
    ],
    matchItems: [
      { id: "5a", descriptor: "Coarse pitting, flakes, and grit; rough, weathered read", correct: "Left" },
      { id: "5b", descriptor: "Glossy highlights beside matte areas; cool tactile contrast", correct: "Middle" },
      { id: "5c", descriptor: "Raised paint ridges catching light; actual surface body", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "Touch suggested only through sight is called ___ texture; built-up paint gives ___ texture.", answers: ["visual", "actual"] },
      { text: "___ and ___ detail in the left picture reinforce abandonment and time.", answers: ["Rust", "peeling"] },
      { text: "Shiny highlights on silk suggest a ___ surface; rough stone reads as ___.", answers: ["smooth", "matte"] },
      { text: "Thick paint ridges read as ___ because you see real height on the canvas.", answers: ["impasto"] }
    ],
    vocabWiki: {
      links: [
        { label: "Impasto", href: "https://en.wikipedia.org/wiki/Impasto" },
        { label: "Frottage", href: "https://en.wikipedia.org/wiki/Frottage_(art)" }
      ]
    }
  },
  "6": {
    badge: "Lesson 6",
    title: "Visual focus: Space — depth & layers",
    map: "Perspective · aerial · overlap",
    imageAlt: "Lesson 6: road, forest & mountains, layered print",
    vocabBank: "linear perspective, vanishing point, horizon, aerial perspective, overlap, vertical placement, viewpoint",
    checkQuestions: [
      "Which pulls space most strongly with lines converging to one depth cue?",
      "Which separates sharp near detail from pale, soft distance?",
      "Which builds depth mainly through overlap and stacked layers, not a strict grid?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "Without a drawn perspective grid, how does the right picture still suggest depth?",
      "How does “where you stand” change the story (guide, driver, bird’s eye)?",
      "Remove the nearest tree in the middle picture—do you get more open space or less anchor?"
    ],
    practicalTask:
      "Goal: Show clear space (near, middle, far) in one picture.\n\nApply perspective, aerial fade, and overlap so depth reads in the picture.\n\nWhat to do: (1) Choose a view from a window or a photograph. (2) Sketch or paint the scene. (3) Separate at least three depth layers. (4) If space feels flat, check overlap before adding more detail.",
    panels: [
      { key: "Left", title: "Desert road", hint: "linear perspective" },
      { key: "Middle", title: "Forest & peaks", hint: "aerial perspective" },
      { key: "Right", title: "Layered print", hint: "overlap & vertical order" }
    ],
    matchItems: [
      { id: "6a", descriptor: "Parallel edges tapering to one point; strong linear depth", correct: "Left" },
      { id: "6b", descriptor: "Sharp near forms against pale, soft distance; atmospheric fade", correct: "Middle" },
      { id: "6c", descriptor: "Overlapping flat shapes and tiered placement; shallow stacked space", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "In linear perspective, the imaginary eye-level line is the ___.", answers: ["horizon"] },
      { text: "Distant forms turn pale, gray, and soft—___ perspective, tied to air.", answers: ["aerial"] },
      { text: "When one shape covers part of another, ___ tells the eye which form sits in front.", answers: ["overlap"] },
      { text: "Your ___ (where you stand) changes scale and angle of objects in the scene.", answers: ["viewpoint"] }
    ],
    vocabWiki: {
      links: [
        { label: "Linear perspective", href: "https://en.wikipedia.org/wiki/Linear_perspective" },
        { label: "Aerial perspective", href: "https://en.wikipedia.org/wiki/Aerial_perspective" }
      ]
    }
  },
  "7": {
    badge: "Lesson 7",
    title: "Principle: Contrast",
    map: "Color · scale · texture",
    imageAlt: "Lesson 7: white umbrella, elephant & mouse, chrome & coal",
    vocabBank: "types of contrast, color contrast, scale contrast, texture contrast, focal point, strong vs. weak contrast",
    checkQuestions: [
      "Which relies on a small light area on a dark ground for punch?",
      "Which exaggerates scale difference between a large mass and a tiny one?",
      "Which sets polished smooth against coarse, gritty texture?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "Strong contrast can warn; weak contrast can soothe or bore—give one everyday example of each.",
      "How does empty space in the middle picture support scale contrast? What if the room were cluttered?",
      "How might you combine two contrast types for an “invitation” rather than a “warning”?"
    ],
    practicalTask:
      "Goal: Feel how contrast level changes the message of the same subject.\n\nApply colour, scale, and texture contrast between the two studies—same motif.\n\nWhat to do: (1) Draw two quick studies of the same motif. (2) One high-contrast, one low-contrast.",
    panels: [
      { key: "Left", title: "White umbrella", hint: "color contrast" },
      { key: "Middle", title: "Elephant & mouse", hint: "scale" },
      { key: "Right", title: "Chrome & coal", hint: "texture" }
    ],
    matchItems: [
      { id: "7a", descriptor: "Small light area on a dark field; immediate focal grab", correct: "Left" },
      { id: "7b", descriptor: "Very large form beside a tiny one; exaggerated scale contrast", correct: "Middle" },
      { id: "7c", descriptor: "Polished smooth beside jagged rough; tactile opposition", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "Contrast, as a principle, often heightens ___.", answers: ["focus"] },
      { text: "The middle picture relies on ___ contrast to stress mass and proportion.", answers: ["scale"] },
      { text: "Light on dark is a strong form of ___ contrast for grabbing attention.", answers: ["color"] },
      { text: "Rough versus smooth side by side sets up ___ contrast you can almost feel.", answers: ["texture"] }
    ],
    vocabWiki: {
      links: [
        { label: "Contrast", href: "https://en.wikipedia.org/wiki/Contrast_(vision)" },
        { label: "Juxtaposition", href: "https://en.wikipedia.org/wiki/Juxtaposition" }
      ]
    }
  },
  "8": {
    badge: "Lesson 8",
    title: "Principle: Rhythm & repetition",
    map: "Regular · progressive · break",
    imageAlt: "Lesson 8: tile pattern, ribbon spacing, broken window",
    vocabBank: "motif, regular rhythm, progressive rhythm, spacing, breaking repetition, surprise, eye path",
    checkQuestions: [
      "Which has the steadiest, most even visual beat?",
      "Which speeds up rhythm by tightening intervals toward a direction?",
      "Which breaks an otherwise regular repeat with one different unit?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "How is a musical beat like or unlike visual repetition? Refer to the left or middle picture.",
      "Architecture and textile patterns—do they tolerate “mistakes” in the same way?",
      "If every window in the right picture had a plant, would the break in the pattern still be there?"
    ],
    practicalTask:
      "Goal: Control rhythm and then interrupt it on purpose.\n\nApply regular rhythm, progressive change, and a clear break in the repeat.\n\nWhat to do: (1) Draw a border or square grid pattern. (2) Establish a clear repeat. (3) Add either a progressive change (spacing or size shifts) or one clear break in the pattern.",
    panels: [
      { key: "Left", title: "Tile pattern", hint: "regular repeat" },
      { key: "Middle", title: "Narrowing ribbons", hint: "progressive rhythm" },
      { key: "Right", title: "Broken window", hint: "broken repeat" }
    ],
    matchItems: [
      { id: "8a", descriptor: "Even spacing and identical units; steady, regular rhythm", correct: "Left" },
      { id: "8b", descriptor: "Intervals narrowing in one direction; accelerating rhythm", correct: "Middle" },
      { id: "8c", descriptor: "One element breaks the repeat; surprise in the grid", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "Changing spacing between repeats creates a ___ rhythm.", answers: ["progressive"] },
      { text: "A single “rupture” in a pattern helps avoid overall ___.", answers: ["monotony"] },
      { text: "A repeating unit in a pattern is often called a ___ or module.", answers: ["motif"] },
      { text: "Even spacing and similar units produce a ___ rhythm.", answers: ["regular"] }
    ],
    vocabWiki: {
      links: [
        { label: "Tessellation", href: "https://en.wikipedia.org/wiki/Tessellation#In_art" },
        { label: "Pattern", href: "https://en.wikipedia.org/wiki/Pattern#Art_and_architecture" }
      ]
    }
  },
  "9": {
    badge: "Lesson 9",
    title: "Principle: Unity & variety",
    map: "Series · motif · technique",
    imageAlt: "Lesson 9: teapots, branded items, pointillist bouquet",
    vocabBank: "unity (color/graphic/technique), variety (form/content), series, motif, monotony",
    checkQuestions: [
      "Which feels like one family through repeated surface treatment on varied outlines?",
      "Which feels most unified by a repeated symbol and palette across separate parts?",
      "Which holds different content together through the same technique and touch?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "How do film storyboards or photo series stay “one family” without looking identical?",
      "The right picture unifies technique, not subject—is it harder or richer to read? Why?",
      "For a fourth product that feels “off” but still related, would you change color or proportion first?"
    ],
    practicalTask:
      "Goal: Keep a familiar look while changing one thing between versions.\n\nApply series, motif, and technique so the three cards read as one family with controlled variety.\n\nWhat to do: (1) Make three cards in one series. (2) Keep unity strong (color, motif, or technique). (3) Change one clear aspect on each card (shape, detail, or content).",
    panels: [
      { key: "Left", title: "Teapot set", hint: "color & pattern unity" },
      { key: "Middle", title: "Brand mockup", hint: "motif across items" },
      { key: "Right", title: "Stipple bouquet", hint: "technique unity" }
    ],
    matchItems: [
      { id: "9a", descriptor: "Same surface treatment across different outlines; strong family unity", correct: "Left" },
      { id: "9b", descriptor: "Repeated symbol and palette across separate items; clear system", correct: "Middle" },
      { id: "9c", descriptor: "Same mark-making across varied subjects; unity of technique", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "A repeated graphic or color unit in a series is often called a ___.", answers: ["motif"] },
      { text: "Unity and ___ work together; too much unity feels ___.", answers: ["variety", "stiff"] },
      { text: "A set of related works shown together is often called a ___.", answers: ["series"] },
      { text: "Unity of ___ means the same handling of paint or marks across subjects.", answers: ["technique"] }
    ],
    vocabWiki: {
      links: [
        { label: "Color harmony", href: "https://en.wikipedia.org/wiki/Color_harmony" },
        { label: "Motif", href: "https://en.wikipedia.org/wiki/Motif_(visual_arts)" }
      ]
    }
  },
  "10": {
    badge: "Lesson 10",
    title: "Principle: Balance — symmetry & asymmetry",
    map: "Symmetry · asymmetrical balance · weight",
    imageAlt: "Lesson 10: symmetric facade, zen garden, off-center weight",
    vocabBank: "symmetry, axis, asymmetrical balance, visual weight, value and area, stable vs. unstable",
    checkQuestions: [
      "Which feels most formally stable through left–right mirroring?",
      "Which balances unequal masses with quiet, deliberate poise?",
      "Which feels weighted to one side and least settled overall?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "Flags and emblems often favor one balance type; posters often favor another—can you name a cultural contrast?",
      "How would full symmetry in the right picture erase the “uneasy” story?",
      "Small dark areas can balance large light areas—find an example in the middle picture."
    ],
    practicalTask:
      "Goal: Compare stable balance with tense, off-center balance.\n\nApply symmetry, asymmetrical balance, and visual weight in the two layouts.\n\nWhat to do: (1) Make two compositions. (2) First design should feel stably balanced. (3) Second should feel deliberately unstable but still interesting.",
    panels: [
      { key: "Left", title: "Symmetric facade", hint: "formal symmetry" },
      { key: "Middle", title: "Zen garden", hint: "asymmetrical balance" },
      { key: "Right", title: "Off-center weight", hint: "instability" }
    ],
    matchItems: [
      { id: "10a", descriptor: "Near mirror symmetry across a vertical axis; formal stability", correct: "Left" },
      { id: "10b", descriptor: "Large mass balanced by a small counterweight; quiet asymmetry", correct: "Middle" },
      { id: "10c", descriptor: "Heavy dark mass low and off-center; unstable lean", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "In asymmetry, ___, ___, and placement all shift perceived visual weight.", answers: ["size", "value"] },
      { text: "Left–right mirroring across a vertical axis is ___ balance.", answers: ["symmetrical"] },
      { text: "Balancing unlike parts so the picture still feels steady is ___ balance.", answers: ["asymmetrical"] },
      { text: "An off-center mass can create ___ even when the picture is not symmetrical.", answers: ["tension"] }
    ],
    vocabWiki: {
      links: [
        { label: "Symmetry", href: "https://en.wikipedia.org/wiki/Symmetry" },
        { label: "Composition", href: "https://en.wikipedia.org/wiki/Composition_(visual_arts)" }
      ]
    }
  },
  "11": {
    badge: "Lessons 11–12",
    title: "Synthesis & process (inquiry / workbook)",
    map: "Draft & finish · documentation · synthesis",
    imageAlt: "Lessons 11–12: sketch vs. painting, workbook, finished study",
    vocabBank: "draft/finish, trial and error, research workbook, visual record, synthesis, appreciation steps (describe→analyze→interpret→judge)",
    checkQuestions: [
      "Which juxtaposes loose exploration with a more resolved layer?",
      "Which reads most like tests, samples, and inquiry notes in one layout?",
      "Which feels smallest, neatest, and most like a single finished statement?"
    ],
    observationAnswers: ["Left", "Middle", "Right"],
    openQuestions: [
      "Why do exams value process? What is lost with only a final photo?",
      "If the right picture used only line and contrast for “lonely,” would you choose straight or curved lines? Thick or thin? Explain.",
      "Name one small topic and three visual sub-questions (material, rhythm, space)."
    ],
    practicalTask:
      "Goal: Show process (tests and samples) or one finished study.\n\nApply draft & finish, documentation, and synthesis in the work.\n\nWhat to do — pick one track. Track A — Workbook page: material swatches, texture tests, and visual trials. Track B — One finished piece using one visual element and one principle from the course.",
    panels: [
      { key: "Left", title: "Sketch & finish", hint: "revision trail" },
      { key: "Middle", title: "Workbook page", hint: "inquiry trail" },
      { key: "Right", title: "Finished piece", hint: "element + principle" }
    ],
    matchItems: [
      { id: "11a", descriptor: "Loose exploratory layer beside a resolved layer; process vs finish", correct: "Left" },
      { id: "11b", descriptor: "Samples, scraps, and notes in one layout; research trail", correct: "Middle" },
      { id: "11c", descriptor: "Small format, single clear statement; neat closure", correct: "Right" }
    ],
    fillInBlanks: [
      { text: "A research workbook values recording ___ and trials, not only ___.", answers: ["process", "finals"] },
      { text: "Short appreciation steps: describe, ___, interpret, judge.", answers: ["analyze"] },
      { text: "A rough ___ is an early try; a ___ is closer to what you would show others.", answers: ["draft", "finish"] },
      { text: "At the end of a unit, ___ means combining ideas from several lessons in one piece.", answers: ["synthesis"] }
    ],
    vocabWiki: {
      links: [
        { label: "Underdrawing", href: "https://en.wikipedia.org/wiki/Underdrawing" },
        { label: "Art diary", href: "https://en.wikipedia.org/wiki/Art_diary" }
      ]
    }
  }
};


/**
 * Optional enrichments: vocab tab terms (Cantonese), word-bank pools, studio scaffolding.
 */
window.LESSONS_V2_ETEXT_ENRICH = {
  "1": {
    vocabItems: [
      { term: "line weight", cantonese: "線條粗幼" },
      { term: "direction", cantonese: "方向" },
      { term: "organic / geometric", cantonese: "有機／幾何" },
      { term: "density", cantonese: "密度" },
      { term: "sense of speed", cantonese: "速度感" }
    ],
    fillPool: ["line", "weight", "speed", "stable", "uncertain", "texture", "balance", "rhythm"],
    studioScaffold: {
      advice:
        "Aim for contrast between the boxes—if two look too similar, push one toward chaos and the other toward repetition."
    }
  },
  "2": {
    vocabItems: [
      { term: "figure–ground", cantonese: "圖地關係" },
      { term: "positive / negative", cantonese: "正／負形" },
      { term: "silhouette", cantonese: "剪影／輪廓" },
      { term: "ambiguity", cantonese: "含糊／多義" },
      { term: "contrast", cantonese: "對比" }
    ],
    fillPool: ["positive", "negative", "ambiguity", "symmetry", "unity", "texture", "space"],
    studioScaffold: {
      advice:
        "Ambiguity works best when both readings are equally believable for a few seconds."
    }
  },
  "3": {
    vocabItems: [
      { term: "hue", cantonese: "色相" },
      { term: "warm / cool", cantonese: "暖／冷" },
      { term: "complements", cantonese: "互補色" },
      { term: "analogous", cantonese: "類似色" },
      { term: "mood", cantonese: "整體氣氛" }
    ],
    fillPool: ["complements", "focus", "cool", "warm", "hue", "value", "chroma"],
    studioScaffold: {
      advice:
        "If the painting feels muddy, you likely mixed complements on the palette—clean brush between warm and cool."
    }
  },
  "4": {
    vocabItems: [
      { term: "value", cantonese: "明度" },
      { term: "saturation", cantonese: "飽和度／彩度" },
      { term: "volume", cantonese: "立體感／體積" },
      { term: "grayscale", cantonese: "灰階" },
      { term: "chroma", cantonese: "彩度" }
    ],
    fillPool: ["value", "hue", "saturation", "contrast", "edge", "plane", "cast shadow"],
    studioScaffold: {
      advice:
        "Students often confuse chroma with value—squint to separate them."
    }
  },
  "5": {
    vocabItems: [
      { term: "visual texture", cantonese: "視覺質感" },
      { term: "actual texture", cantonese: "真實質感" },
      { term: "impasto", cantonese: "厚塗法" },
      { term: "tactile", cantonese: "觸感聯想" }
    ],
    fillPool: ["visual", "actual", "rust", "peeling", "smooth", "matte", "gloss"],
    studioScaffold: {
      advice:
        "If a square feels flat, add micro-contrast inside it before changing technique."
    }
  },
  "6": {
    vocabItems: [
      { term: "linear perspective", cantonese: "線性透視" },
      { term: "aerial perspective", cantonese: "空氣透視" },
      { term: "overlap", cantonese: "重疊" },
      { term: "horizon", cantonese: "地平線／視平線" },
      { term: "depth", cantonese: "深度／空間感" }
    ],
    fillPool: ["horizon", "aerial", "overlap", "scale", "diminishing", "fog", "depth"],
    studioScaffold: {
      advice:
        "If space feels flat, check overlap before adding more detail."
    }
  },
  "7": {
    vocabItems: [
      { term: "color contrast", cantonese: "色彩對比" },
      { term: "scale contrast", cantonese: "尺度對比" },
      { term: "texture contrast", cantonese: "質感對比" },
      { term: "focal point", cantonese: "焦點" }
    ],
    fillPool: ["focus", "scale", "texture", "value", "edge", "rhythm", "pattern"],
    studioScaffold: {
      advice:
        "Weak contrast needs something interesting in texture or shape—avoid empty gray fields."
    }
  },
  "8": {
    vocabItems: [
      { term: "rhythm", cantonese: "節奏" },
      { term: "repetition", cantonese: "重複" },
      { term: "motif", cantonese: "母題／圖式" },
      { term: "progressive rhythm", cantonese: "漸變節奏" }
    ],
    fillPool: ["progressive", "monotony", "repetition", "gradient", "accent", "syncopation", "grid"],
    studioScaffold: {
      advice:
        "If the break disappears, it may be too small—scale it until you cannot miss it."
    }
  },
  "9": {
    vocabItems: [
      { term: "unity", cantonese: "統一" },
      { term: "variety", cantonese: "變化／多樣" },
      { term: "motif", cantonese: "母題" },
      { term: "series", cantonese: "系列" },
      { term: "technique", cantonese: "技法" }
    ],
    fillPool: ["motif", "variety", "series", "hue", "pattern", "scale", "texture"],
    studioScaffold: {
      advice:
        "If the series feels random, strengthen one unity channel (colour OR motif OR edge quality)."
    }
  },
  "10": {
    vocabItems: [
      { term: "symmetry", cantonese: "對稱" },
      { term: "asymmetrical balance", cantonese: "非對稱平衡" },
      { term: "visual weight", cantonese: "視覺重量" },
      { term: "axis", cantonese: "軸線" },
      { term: "tension", cantonese: "張力" }
    ],
    fillPool: ["size", "value", "symmetrical", "asymmetry", "weight", "tension", "axis"],
    studioScaffold: {
      advice:
        "Instability needs a clear direction of pull—otherwise it reads as mistake."
    }
  },
  "11": {
    vocabItems: [
      { term: "draft", cantonese: "草稿" },
      { term: "process", cantonese: "過程" },
      { term: "synthesis", cantonese: "綜合" },
      { term: "analyze", cantonese: "分析" },
      { term: "inquiry", cantonese: "探究" }
    ],
    fillPool: ["process", "finals", "analyze", "draft", "evidence", "reflect", "critique"],
    studioScaffold: {
      advice:
        "Lay out trials and scraps visibly—unfinished attempts belong on the page as much as the tidy bit."
    }
  }
};


/**
 * Renders LESSONS_V2_DATA (+ LESSONS_V2_ETEXT when locale is en).
 */
(function () {
  const SITE = {
    en: {
      documentTitle: "Visual Arts Foundations | Lessons",
      brandTitle: "Visual arts foundations",
      brandTag: "Core elements & principles · useful for HKDSE appreciation",
      ariaNav: "Visual arts foundations lessons"
    },
    zh: {
      documentTitle: "視覺藝術基礎｜單元",
      brandTitle: "視覺藝術基礎",
      brandTag: "視覺元素與組織原理 · 銜接 DSE 評賞",
      ariaNav: "視覺藝術基礎單元"
    }
  };

  const data = window.LESSONS_V2_DATA;
  if (!Array.isArray(data) || !data.length) {
    console.error("LESSONS_V2_DATA missing");
    return;
  }

  function getLocale() {
    return window.LESSON_PLAN_LOCALE === "en" ? "en" : "zh";
  }

  function buildVocabCantoneseMap(enLesson, rawZh) {
    const map = {};
    if (!rawZh || !rawZh.fillInBlanks || !enLesson.fillInBlanks) return map;
    enLesson.fillInBlanks.forEach(function (ex, i) {
      const zhEx = rawZh.fillInBlanks[i];
      if (!zhEx || !zhEx.answers) return;
      ex.answers.forEach(function (en, j) {
        const z = zhEx.answers[j];
        if (z != null && en != null) {
          map[String(en).trim()] = String(z).trim();
        }
      });
    });
    return map;
  }

  function mergeLesson(lesson) {
    if (getLocale() !== "en" || !window.LESSONS_V2_ETEXT) return lesson;
    const e = window.LESSONS_V2_ETEXT[lesson.id];
    if (!e) return lesson;
    const rawZh = data.find(function (l) {
      return l.id === lesson.id;
    });
    const merged = Object.assign({}, lesson, {
      badge: e.badge,
      title: e.title,
      map: e.map,
      imageAlt: e.imageAlt,
      vocabBank: e.vocabBank,
      checkQuestions: e.checkQuestions,
      observationAnswers: e.observationAnswers || [],
      openQuestions: e.openQuestions,
      practicalTask: e.practicalTask,
      panels: e.panels,
      matchItems: e.matchItems,
      fillInBlanks: e.fillInBlanks,
      vocabWiki: e.vocabWiki
    });
    merged.vocabCantoneseMap = buildVocabCantoneseMap(merged, rawZh);
    const enrich =
      window.LESSONS_V2_ETEXT_ENRICH && window.LESSONS_V2_ETEXT_ENRICH[lesson.id];
    if (enrich) Object.assign(merged, enrich);
    return merged;
  }

  const UI = {
    zh: {
      section1: "一、詞彙與觀察（理解檢核）",
      vocabLabel: "本節詞彙庫：",
      matchTitle: "詞彙配對（拖選／點選）",
      matchHint: "將每一則敘述配對到最合適的「作品標題」（區域甲／乙／丙）。載入時選項順序隨機。",
      fillTitle: "填空（術語）",
      section2: "二、延伸思考（開放題）",
      section3: "三、小實作",
      selectPlaceholder: "（請選擇作品）",
      checkMatch: "檢查配對",
      checkFill: "檢查填空",
      showAnswers: "顯示參考答案",
      answerKey: "參考：",
      fillError: "題目格式錯誤（___ 與答案數量不符）。",
      ariaMatch: "配對：敘述",
      vocabRevealDefault: "在複合圖像中指出與此詞相關的位置。",
      observeScaffoldDefault: "作答前先整體掃視甲、乙、丙三區。",
      wordBankLabel: "詞庫 — 拖入空格（或先點詞再點空格）",
      studioSuggestions: "建議",
      studioAdvice: "提醒",
      taskGoalLabel: "目標",
      taskStepsLabel: "步驟",
      tabStudio: "任務",
      observeRevealLabel: "答案",
      matchSelectPlaceholder: "（請選擇左／中／右）",
      wordBankBelowLabel: "詞庫（與空格數量一致）— 拖入上方空格（或先點詞再點空格）"
    },
    en: {
      section1: "1. Vocabulary & observation (check)",
      vocabLabel: "Vocabulary for this lesson:",
      matchTitle: "Matching (select)",
      matchHint:
        "Pair each description with the best image (left, middle, or right). Statement order is randomized on load.",
      matchSelectPlaceholder: "(Choose)",
      wordBankBelowLabel:
        "Word bank (same words as the blanks)—drag into the gaps above, or tap a word then tap a gap.",
      fillTitle: "Fill in the blanks (terms)",
      section2: "2. Open-ended questions",
      section3: "3. Short studio task",
      selectPlaceholder: "(Choose artwork)",
      checkMatch: "Check matching",
      checkFill: "Check blanks",
      showAnswers: "Show answer key",
      answerKey: "Key:",
      fillError: "Template error (___ count does not match answers).",
      ariaMatch: "Match: statement",
      tabBarLabel: "Lesson sections",
      tabIntro: "Use the tabs to work through each part of the lesson.",
      tabReference: "Reference",
      wordBankLabel:
        "Word bank — drag into blanks (tap word, then tap slot)",
      studioSuggestions: "Suggestions",
      studioAdvice: "Advice",
      taskGoalLabel: "Goal",
      taskStepsLabel: "Steps",
      tabVocabulary: "Vocab",
      tabObservation: "Observe",
      tabMatch: "Match",
      tabBlanks: "Blanks",
      tabDiscuss: "Discussion",
      tabStudio: "Task",
      headingVocab: "Key terms",
      headingObserve: "Observation prompts",
      headingDiscuss: "Open-ended questions",
      headingStudio: "Task",
      observeRevealLabel: "Answer",
      vocabRevealDefault:
        "Point to one place in the composite image where this idea appears.",
      observeScaffoldDefault:
        "Look at the left, middle, and right images together before you write."
    }
  };

  function ui(key) {
    const loc = getLocale();
    return UI[loc][key] || UI.zh[key] || key;
  }

  function useTabs() {
    return window.LESSON_PLAN_USE_TABS === true;
  }

  const TAB_ORDER = [
    "vocab",
    "observe",
    "match",
    "blanks",
    "discuss",
    "studio"
  ];

  function tabLabel(id) {
    const map = {
      ref: "tabReference",
      vocab: "tabVocabulary",
      observe: "tabObservation",
      match: "tabMatch",
      blanks: "tabBlanks",
      discuss: "tabDiscuss",
      studio: "tabStudio"
    };
    return ui(map[id] || "tabReference");
  }

  const $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  const $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  function escapeHtml(s) {
    if (s == null) return "";
    const d = document.createElement("div");
    d.textContent = String(s);
    return d.innerHTML;
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function renderFillLine(text, answers, baseId) {
    const parts = text.split("___");
    if (parts.length !== answers.length + 1) {
      return '<p class="fill-error">' + escapeHtml(ui("fillError")) + "</p>";
    }
    let html = '<p class="fill-line">';
    for (let i = 0; i < parts.length; i++) {
      html += escapeHtml(parts[i]);
      if (i < answers.length) {
        const inpId = baseId + "-b" + i;
        html +=
          '<input type="text" class="fill-input" id="' +
          escapeHtml(inpId) +
          '" data-answer="' +
          escapeHtml(answers[i]) +
          '" autocomplete="off" spellcheck="false" />';
      }
    }
    html += "</p>";
    return html;
  }

  function panelSelectOptions(lesson) {
    let opts = '<option value="">' + escapeHtml(ui("selectPlaceholder")) + "</option>";
    lesson.panels.forEach(function (p) {
      opts +=
        '<option value="' +
        escapeHtml(p.key) +
        '">' +
        escapeHtml(p.key + " — " + p.title) +
        "</option>";
    });
    return opts;
  }

  function matchColumnSelectOptions(lesson, panelOrder) {
    const panels = panelOrder || lesson.panels;
    let opts =
      '<option value="">' + escapeHtml(ui("matchSelectPlaceholder")) + "</option>";
    panels.forEach(function (p) {
      opts +=
        '<option value="' +
        escapeHtml(p.key) +
        '">' +
        escapeHtml(p.key) +
        "</option>";
    });
    return opts;
  }

  function renderMatchSection(lesson) {
    const items = lesson.matchItems.slice();
    shuffleInPlace(items);
    const panelOrder = lesson.panels.slice();
    shuffleInPlace(panelOrder);
    let rows = "";
    items.forEach(function (item, idx) {
      const rowId = "match-" + lesson.id + "-" + item.id;
      rows += '<div class="match-row">';
      rows += '<span class="match-desc">' + escapeHtml(item.descriptor) + "</span>";
      rows +=
        '<select class="match-select" id="' +
        rowId +
        '" data-correct="' +
        escapeHtml(item.correct) +
        '" aria-label="' +
        escapeHtml(ui("ariaMatch")) +
        " " +
        (idx + 1) +
        '">';
      rows += matchColumnSelectOptions(lesson, panelOrder);
      rows += "</select>";
      rows += '<span class="match-result" id="' + rowId + '-res"></span>';
      rows += "</div>";
    });
    return rows;
  }

  function renderFillSection(lesson) {
    let html = "";
    lesson.fillInBlanks.forEach(function (ex, i) {
      const baseId = "fill-" + lesson.id + "-" + i;
      html += renderFillLine(ex.text, ex.answers, baseId);
      html +=
        '<p class="fill-answerline" id="' +
        baseId +
        '-line" hidden><span class="muted">' +
        escapeHtml(ui("answerKey")) +
        '</span> <span class="fill-answers"></span></p>';
    });
    return html;
  }

  function updateLessonHeader(lesson) {
    const titleEl = document.getElementById("lesson-header-title");
    const metaEl = document.getElementById("lesson-header-meta");
    if (titleEl) titleEl.textContent = lesson.title || "";
    if (metaEl) metaEl.textContent = lesson.map || "";
  }

  function collectUniqueFillTerms(lesson) {
    const seen = {};
    const list = [];
    if (!lesson.fillInBlanks) return list;
    lesson.fillInBlanks.forEach(function (ex) {
      ex.answers.forEach(function (a) {
        const t = String(a).trim();
        if (!t) return;
        const k = normalizeAnswer(t);
        if (!seen[k]) {
          seen[k] = true;
          list.push(t);
        }
      });
    });
    return list;
  }

  function getVocabItems(lesson) {
    if (getLocale() === "en" && useTabs()) {
      const map = lesson.vocabCantoneseMap || {};
      const seen = {};
      const out = [];
      function addTerm(term, cantoneseOverride) {
        const t = String(term).trim();
        if (!t) return;
        const k = normalizeAnswer(t);
        if (seen[k]) return;
        seen[k] = true;
        const zh =
          cantoneseOverride != null && String(cantoneseOverride).trim() !== ""
            ? String(cantoneseOverride).trim()
            : map[t] || "";
        out.push({ term: t, cantonese: zh });
      }
      if (lesson.vocabItems && lesson.vocabItems.length) {
        lesson.vocabItems.forEach(function (item) {
          addTerm(item.term, item.cantonese);
        });
        return out;
      }
      collectUniqueFillTerms(lesson).forEach(function (t) {
        addTerm(t);
      });
      return out;
    }
    if (lesson.vocabItems && lesson.vocabItems.length) return lesson.vocabItems;
    const parts = (lesson.vocabBank || "").split(",").map(function (s) {
      return s.trim();
    }).filter(Boolean);
    const tip = ui("vocabRevealDefault") || "Point to where this shows up in the image.";
    return parts.map(function (term) {
      return { term: term, tip: tip };
    });
  }

  function renderVocabCards(lesson) {
    const items = getVocabItems(lesson);
    if (getLocale() === "en" && useTabs()) {
      let h = '<div class="vocab-inline">';
      items.forEach(function (item, i) {
        const bid = "vocab-" + lesson.id + "-" + i;
        const hasZh = !!(item.cantonese && String(item.cantonese).trim());
        if (hasZh) {
          h +=
            '<button type="button" class="vocab-chip" id="' +
            bid +
            '" aria-expanded="false" aria-label="' +
            escapeHtml(item.term) +
            '">';
          h += '<span class="vocab-en">' + escapeHtml(item.term) + "</span>";
          h +=
            '<span class="vocab-zh" id="' +
            bid +
            '-zh" hidden> · ' +
            escapeHtml(item.cantonese) +
            "</span>";
          h += "</button>";
        } else {
          h +=
            '<span class="vocab-chip vocab-chip--text"><span class="vocab-en">' +
            escapeHtml(item.term) +
            "</span></span>";
        }
      });
      h += "</div>";
      return h;
    }
    let h = '<div class="vocab-grid">';
    items.forEach(function (item, i) {
      const bid = "vocab-" + lesson.id + "-" + i;
      h += '<div class="vocab-card">';
      h +=
        '<button type="button" class="vocab-term" id="' +
        bid +
        '" aria-expanded="false" aria-controls="' +
        bid +
        '-tip">';
      h += escapeHtml(item.term);
      h += "</button>";
      h +=
        '<div class="vocab-tip" id="' +
        bid +
        '-tip" hidden>' +
        escapeHtml(item.tip || "") +
        "</div>";
      h += "</div>";
    });
    h += "</div>";
    return h;
  }

  function vocabWikiLinks(w) {
    if (!w) return null;
    if (Array.isArray(w.links) && w.links.length) return w.links;
    if (w.href && w.label) return [{ label: w.label, href: w.href }];
    return null;
  }

  function renderVocabWikiFooter(lesson) {
    const links = vocabWikiLinks(lesson.vocabWiki);
    if (!links || !links.length) return "";
    let h = '<p class="vocab-wiki-footer">';
    links.forEach(function (L, i) {
      if (i) h += '<span class="vocab-wiki-sep" aria-hidden="true"> · </span>';
      h +=
        '<a class="vocab-wiki-link" href="' +
        escapeHtml(L.href) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(L.label) +
        "</a>";
    });
    h += "</p>";
    return h;
  }

  function renderObservationDetails(lesson) {
    const qs = (lesson.checkQuestions || []).slice(0, 3);
    const ans = lesson.observationAnswers || [];
    const pairs = qs.map(function (q, i) {
      return {
        q: q,
        a: ans[i] != null ? String(ans[i]) : ""
      };
    });
    shuffleInPlace(pairs);
    let h = '<ol class="observe-simple">';
    pairs.forEach(function (pair, i) {
      const rid = "obs-ans-" + lesson.id + "-" + i;
      h += '<li class="observe-item">';
      h += '<span class="observe-qtext">' + escapeHtml(pair.q) + "</span>";
      if (pair.a) {
        h +=
          ' <button type="button" class="observe-reveal" aria-expanded="false" aria-controls="' +
          rid +
          '">' +
          escapeHtml(ui("observeRevealLabel")) +
          "</button>";
        h +=
          ' <span class="observe-ans" id="' +
          rid +
          '" hidden>(' +
          escapeHtml(pair.a) +
          ")</span>";
      }
      h += "</li>";
    });
    h += "</ol>";
    return h;
  }

  function buildFillAnswerPool(lesson) {
    const pool = [];
    lesson.fillInBlanks.forEach(function (ex) {
      ex.answers.forEach(function (a) {
        pool.push(String(a).trim());
      });
    });
    shuffleInPlace(pool);
    return pool;
  }

  function renderFillDragDrop(lesson) {
    const pool = buildFillAnswerPool(lesson);
    let h = '<div class="fill-wrap-dd" id="fill-wrap">';
    lesson.fillInBlanks.forEach(function (ex, ei) {
      const parts = ex.text.split("___");
      const baseId = "fill-" + lesson.id + "-" + ei;
      if (parts.length !== ex.answers.length + 1) {
        h += '<p class="fill-error">' + escapeHtml(ui("fillError")) + "</p>";
        return;
      }
      h += '<p class="fill-line fill-line-dd">';
      for (let i = 0; i < parts.length; i++) {
        h += escapeHtml(parts[i]);
        if (i < ex.answers.length) {
          const ans = ex.answers[i];
          const sid = baseId + "-slot-" + i;
          h +=
            '<span class="drop-slot" id="' +
            sid +
            '" data-correct="' +
            escapeHtml(ans) +
            '"></span>';
        }
      }
      h += "</p>";
    });
    h += '<div class="word-pool" id="word-pool-' + lesson.id + '">';
    pool.forEach(function (w, i) {
      const cid = "chip-" + lesson.id + "-" + i;
      h +=
        '<span class="word-chip" draggable="true" tabindex="0" role="button" data-word="' +
        escapeHtml(w) +
        '" id="' +
        cid +
        '">' +
        escapeHtml(w) +
        "</span>";
    });
    h += "</div></div>";
    return h;
  }

  function renderStudioStepsHtml(doText) {
    const t = String(doText || "").trim();
    if (!t) return "";
    if (/Track [AB] —/.test(t)) {
      let body = t;
      let intro = "";
      const introPick = body.match(/^pick one track\.\s*/i);
      if (introPick) {
        intro =
          '<p class="studio-task-intro">' +
          escapeHtml(introPick[0].trim()) +
          "</p>";
        body = body.slice(introPick[0].length);
      }
      const parts = body
        .split(/(?=Track [AB] —)/)
        .map(function (s) {
          return s.trim();
        })
        .filter(Boolean);
      let ul = '<ul class="studio-steps">';
      parts.forEach(function (p) {
        ul += "<li>" + escapeHtml(p) + "</li>";
      });
      ul += "</ul>";
      return intro + ul;
    }
    const numbered = t
      .split(/(?=\(\d+\)\s)/)
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
    if (numbered.length > 1 || /^\(\d+\)/.test(t)) {
      let ul = '<ul class="studio-steps">';
      numbered.forEach(function (p) {
        const line = p.replace(/^\(\d+\)\s*/, "").trim();
        if (line) ul += "<li>" + escapeHtml(line) + "</li>";
      });
      ul += "</ul>";
      return ul;
    }
    return (
      '<p class="studio-task-line">' +
      escapeHtml(t).replace(/\n/g, "<br />") +
      "</p>"
    );
  }

  function parseGoalBlock(block) {
    const t = String(block || "").trim();
    if (!t) return { goal1: "", goal2: "" };
    const parts = t.split(/\n\n+/).map(function (s) {
      return s.trim();
    }).filter(Boolean);
    if (!parts.length) return { goal1: "", goal2: "" };
    const goal1 = parts[0].replace(/^Goal:\s*/i, "").trim();
    const goal2 =
      parts.length > 1 ? parts.slice(1).join("\n\n").trim() : "";
    return { goal1: goal1, goal2: goal2 };
  }

  function renderStudioSection(lesson) {
    const sc = lesson.studioScaffold;
    let h = '<div class="studio-compact">';
    if (!useTabs()) {
      h +=
        '<p class="studio-task-line studio-task-heading"><strong>' +
        escapeHtml(ui("headingStudio")) +
        "</strong></p>";
    }
    const raw = String(lesson.practicalTask || "").trim();
    if (raw) {
      const wtdRe = /\n\nWhat to do[:\s—]*/i;
      const wtdIdx = raw.search(wtdRe);
      if (wtdIdx >= 0) {
        const goalBlock = raw.slice(0, wtdIdx).trim();
        const goals = parseGoalBlock(goalBlock);
        const doText = raw.slice(wtdIdx).replace(wtdRe, "").trim();
        if (goals.goal1) {
          h +=
            '<p class="studio-task-goal"><strong>' +
            escapeHtml(ui("taskGoalLabel")) +
            "</strong> " +
            escapeHtml(goals.goal1) +
            "</p>";
        }
        if (goals.goal2) {
          h +=
            '<p class="studio-task-concept">' +
            escapeHtml(goals.goal2) +
            "</p>";
        }
        if (doText) {
          h +=
            '<p class="studio-task-steps-label"><strong>' +
            escapeHtml(ui("taskStepsLabel")) +
            "</strong></p>";
          h += renderStudioStepsHtml(doText);
        }
      } else {
        const paras = raw.split(/\n\n+/).map(function (s) {
          return s.trim();
        }).filter(Boolean);
        paras.forEach(function (para) {
          h +=
            '<p class="studio-task-line">' +
            escapeHtml(para).replace(/\n/g, "<br />") +
            "</p>";
        });
      }
    }
    if (sc && sc.advice) {
      h += '<p class="studio-advice-line">' + escapeHtml(sc.advice) + "</p>";
    }
    h += "</div>";
    return h;
  }

  function bindVocabCards(root) {
    $$(".vocab-term", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("aria-controls");
        const tip = id ? document.getElementById(id) : null;
        if (!tip) return;
        const open = tip.hidden;
        tip.hidden = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    $$(".vocab-chip", root).forEach(function (btn) {
      if (!btn.querySelector(".vocab-zh")) return;
      btn.addEventListener("click", function () {
        const zh = btn.querySelector(".vocab-zh");
        if (!zh) return;
        const open = zh.hidden;
        zh.hidden = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function bindObservationReveal(root) {
    $$(".observe-reveal", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("aria-controls");
        const span = id ? document.getElementById(id) : null;
        if (!span) return;
        const open = span.hidden;
        span.hidden = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function bindDragDropFill(root, lesson) {
    const pool = $("#word-pool-" + lesson.id, root);
    if (!pool) return;

    let selectedChip = null;

    function selectChip(chip) {
      if (selectedChip) selectedChip.classList.remove("word-chip--selected");
      selectedChip = chip || null;
      if (selectedChip) selectedChip.classList.add("word-chip--selected");
    }

    function wordFromChip(chip) {
      return (chip.getAttribute("data-word") || chip.textContent || "").trim();
    }

    function updateSlotValidation(slot) {
      const v = slot.textContent.trim();
      const ans = slot.getAttribute("data-correct") || "";
      if (!v) {
        slot.classList.remove("drop-slot--ok", "drop-slot--bad");
        return;
      }
      const ok = normalizeAnswer(v) === normalizeAnswer(ans);
      slot.classList.toggle("drop-slot--ok", ok);
      slot.classList.toggle("drop-slot--bad", !ok);
    }

    function setSlotWord(slot, word) {
      slot.textContent = word;
      selectChip(null);
      updateSlotValidation(slot);
    }

    $$(".word-chip", root).forEach(function (chip) {
      chip.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", wordFromChip(chip));
        e.dataTransfer.effectAllowed = "copy";
      });
      chip.addEventListener("click", function (e) {
        e.stopPropagation();
        selectChip(selectedChip === chip ? null : chip);
      });
      chip.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectChip(selectedChip === chip ? null : chip);
        }
      });
    });

    $$(".drop-slot", root).forEach(function (slot) {
      slot.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      slot.addEventListener("drop", function (e) {
        e.preventDefault();
        const w = (e.dataTransfer.getData("text/plain") || "").trim();
        if (w) setSlotWord(slot, w);
      });
      slot.addEventListener("click", function () {
        if (selectedChip) {
          setSlotWord(slot, wordFromChip(selectedChip));
        }
      });
      slot.addEventListener("dblclick", function () {
        slot.textContent = "";
        slot.classList.remove("drop-slot--ok", "drop-slot--bad");
      });
    });

    pool.addEventListener("click", function (e) {
      if (e.target === pool) selectChip(null);
    });
  }

  function buildLessonHead(lesson) {
    let h = "";
    h += '<div class="lesson-head">';
    h +=
      '<h2 class="lesson-num"><span class="badge">' +
      escapeHtml(lesson.badge) +
      "</span> ";
    h += "<span>" + escapeHtml(lesson.title) + "</span>";
    h += '<span class="map">' + escapeHtml(lesson.map) + "</span></h2>";
    h += "</div>";
    return h;
  }

  function buildFigure(lesson) {
    let h = '<figure class="ref-img">';
    h +=
      '<img src="' +
      escapeHtml(lesson.image) +
      '" alt="' +
      escapeHtml(lesson.imageAlt) +
      '" loading="lazy" />';
    if (lesson.imageCaption) {
      h +=
        "<figcaption>" + escapeHtml(lesson.imageCaption) + "</figcaption>";
    }
    h += "</figure>";
    return h;
  }

  function applyMatchRowState(sel, root) {
    const correct = sel.getAttribute("data-correct");
    const res = $("#" + sel.id + "-res", root);
    const ok = sel.value && sel.value === correct;
    sel.classList.toggle("input-wrong", !ok && !!sel.value);
    sel.classList.toggle("input-ok", ok);
    if (res) {
      res.textContent = ok ? " ✓" : sel.value ? " ✗" : "";
      res.className = "match-result " + (ok ? "ok" : "bad");
    }
  }

  function bindCheckMatch(root, lesson) {
    $$(".match-select", root).forEach(function (sel) {
      function onPick() {
        applyMatchRowState(sel, root);
      }
      sel.addEventListener("change", onPick);
      sel.addEventListener("input", onPick);
    });
  }

  function bindCheckFill(root, lesson) {
    const b1 = $("#btn-check-fill", root);
    const b2 = $("#btn-show-fill", root);
    if (b1) {
      b1.addEventListener("click", function () {
        $$(".fill-input", root).forEach(function (inp) {
          const ans = inp.getAttribute("data-answer") || "";
          const v = (inp.value || "").trim();
          const ok = v && normalizeAnswer(v) === normalizeAnswer(ans);
          inp.classList.toggle("input-ok", ok);
          inp.classList.toggle("input-wrong", v && !ok);
          inp.classList.toggle("input-empty", !v);
        });
      });
    }
    if (b2) {
      b2.addEventListener("click", function () {
        lesson.fillInBlanks.forEach(function (ex, i) {
          const line = $("#fill-" + lesson.id + "-" + i + "-line", root);
          if (!line) return;
          line.hidden = false;
          const span = $(".fill-answers", line);
          if (span) {
            span.textContent = ex.answers.join(getLocale() === "en" ? " · " : "；");
          }
        });
      });
    }
  }

  function wireLessonTabs(root) {
    const tabs = $$('[role="tab"]', root);
    const panels = $$('[role="tabpanel"]', root);
    if (!tabs.length || !panels.length) return;

    function activate(tabId) {
      tabs.forEach(function (t) {
        const on = t.getAttribute("data-tab") === tabId;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.classList.toggle("is-active", on);
      });
      panels.forEach(function (p) {
        const on = p.getAttribute("data-tab-panel") === tabId;
        p.hidden = !on;
        p.classList.toggle("is-active", on);
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activate(tab.getAttribute("data-tab"));
      });
    });

    activate("vocab");
  }

  function renderLesson(lessonId) {
    const raw = data.find(function (l) {
      return l.id === lessonId;
    });
    const lesson = raw ? mergeLesson(raw) : null;
    const root = $("#lesson-root");
    if (!lesson || !root) return;

    if (useTabs() && getLocale() === "en") {
      updateLessonHeader(lesson);
      let h = "";
      h += '<div class="lesson-split">';
      h += '<div class="lesson-hero">' + buildFigure(lesson) + "</div>";
      h += '<div class="lesson-work">';
      h +=
        '<div class="lesson-tabstrip" role="tablist" aria-label="' +
        escapeHtml(ui("tabBarLabel")) +
        '">';
      TAB_ORDER.forEach(function (tid, idx) {
        const tidHtml = "tab-" + lesson.id + "-" + tid;
        h +=
          '<button type="button" class="subtab" role="tab" id="' +
          tidHtml +
          '" data-tab="' +
          tid +
          '" aria-selected="' +
          (idx === 0 ? "true" : "false") +
          '" aria-controls="panel-' +
          lesson.id +
          "-" +
          tid +
          '">';
        h += escapeHtml(tabLabel(tid));
        h += "</button>";
      });
      h += "</div>";

      h += '<div class="lesson-tab-panels">';

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-vocab" data-tab-panel="vocab" aria-labelledby="tab-' +
        lesson.id +
        '-vocab" hidden>';
      h += renderVocabCards(lesson);
      h += renderVocabWikiFooter(lesson);
      h += "</div>";

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-observe" data-tab-panel="observe" aria-labelledby="tab-' +
        lesson.id +
        '-observe" hidden>';
      h += renderObservationDetails(lesson);
      h += "</div>";

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-match" data-tab-panel="match" aria-labelledby="tab-' +
        lesson.id +
        '-match" hidden>';
      h += renderMatchSection(lesson);
      h += "</div>";

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-blanks" data-tab-panel="blanks" aria-labelledby="tab-' +
        lesson.id +
        '-blanks" hidden>';
      h += renderFillDragDrop(lesson);
      h += "</div>";

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-discuss" data-tab-panel="discuss" aria-labelledby="tab-' +
        lesson.id +
        '-discuss" hidden>';
      h += '<ul class="tight tight-discuss">';
      lesson.openQuestions.forEach(function (q) {
        h += "<li>" + escapeHtml(q) + "</li>";
      });
      h += "</ul>";
      h += "</div>";

      h +=
        '<div class="tab-panel" role="tabpanel" id="panel-' +
        lesson.id +
        '-studio" data-tab-panel="studio" aria-labelledby="tab-' +
        lesson.id +
        '-studio" hidden>';
      h += renderStudioSection(lesson);
      h += "</div>";

      h += "</div>";
      h += "</div>";
      h += "</div>";

      root.innerHTML = h;

      wireLessonTabs(root);
      bindCheckMatch(root, lesson);
      bindVocabCards(root);
      bindObservationReveal(root);
      bindDragDropFill(root, lesson);
      root.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    let h = "";
    h += buildLessonHead(lesson);
    h += buildFigure(lesson);

    h += '<h3 class="block">' + escapeHtml(ui("section1")) + "</h3>";
    h +=
      '<p class="vocab-bank"><strong>' +
      escapeHtml(ui("vocabLabel")) +
      "</strong>" +
      escapeHtml(lesson.vocabBank) +
      "</p>";
    h += '<ol class="check-list">';
    lesson.checkQuestions.forEach(function (q) {
      h += "<li>" + escapeHtml(q) + "</li>";
    });
    h += "</ol>";

    h +=
      '<h3 class="block interactive-label">' + escapeHtml(ui("matchTitle")) + "</h3>";
    h += '<p class="hint">' + escapeHtml(ui("matchHint")) + "</p>";
    h += '<div class="match-wrap" id="match-wrap">' + renderMatchSection(lesson) + "</div>";
    h +=
      '<p><button type="button" class="btn" id="btn-check-match">' +
      escapeHtml(ui("checkMatch")) +
      "</button></p>";

    h +=
      '<h3 class="block interactive-label">' + escapeHtml(ui("fillTitle")) + "</h3>";
    h += '<div class="fill-wrap" id="fill-wrap">' + renderFillSection(lesson) + "</div>";
    h +=
      '<p><button type="button" class="btn" id="btn-check-fill">' +
      escapeHtml(ui("checkFill")) +
      '</button> ';
    h +=
      '<button type="button" class="btn btn-ghost" id="btn-show-fill">' +
      escapeHtml(ui("showAnswers")) +
      "</button></p>";

    h += '<h3 class="block">' + escapeHtml(ui("section2")) + "</h3>";
    h += '<ul class="tight">';
    lesson.openQuestions.forEach(function (q) {
      h += "<li>" + escapeHtml(q) + "</li>";
    });
    h += "</ul>";

    h += '<h3 class="block">' + escapeHtml(ui("section3")) + "</h3>";
    h += "<p>" + escapeHtml(lesson.practicalTask) + "</p>";

    root.innerHTML = h;

    bindCheckMatch(root, lesson);
    bindCheckFill(root, lesson);

    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function normalizeAnswer(s) {
    let t = String(s)
      .trim()
      .replace(/\s+/g, "")
      .replace(/[，,]/g, "");
    if (getLocale() === "en") t = t.toLowerCase();
    return t;
  }

  function applySiteChrome() {
    const site = SITE[getLocale()] || SITE.en;
    document.title = site.documentTitle;
    const bar = document.querySelector(".app-bar");
    if (bar) bar.setAttribute("aria-label", site.ariaNav);
    const bt = document.getElementById("app-brand-title");
    const bg = document.getElementById("app-brand-tag");
    if (bt) bt.textContent = site.brandTitle;
    if (bg) bg.textContent = site.brandTag;
  }

  function init() {
    applySiteChrome();
    const sel = $("#lesson-select");
    if (!sel) return;
    data.forEach(function (l) {
      const opt = document.createElement("option");
      opt.value = l.id;
      const m = mergeLesson(l);
      opt.textContent = "L" + l.id + " · " + m.title;
      sel.appendChild(opt);
    });

    function applyFromHash() {
      const m = /^#lesson=(\d+)$/.exec(window.location.hash);
      const id = m ? m[1] : data[0].id;
      if (data.some(function (l) { return l.id === id; })) {
        sel.value = id;
        renderLesson(id);
      }
    }

    sel.addEventListener("change", function () {
      renderLesson(sel.value);
      window.location.hash = "lesson=" + sel.value;
    });

    window.addEventListener("hashchange", applyFromHash);
    applyFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
