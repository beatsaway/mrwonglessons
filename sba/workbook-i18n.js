/* global document */
(function (global) {
  "use strict";

  var STORAGE = "dse-workbook-lang";

  function page(label, rest, tips, vid) {
    return { label: label, rest: rest, tips: tips, vid: vid || null };
  }

  global.WB_LANG = {
    en: {
      docTitle: "DSE VA Workbook Design Guide",
      guideTitle: "DSE VA Workbook Design Guide",
      guideLede: "HKDSE Visual Arts — how to design each workbook page, with examples and questions.",
      chooseLang: "Choose language",
      rememberLabel: "Remember my choice on this device",
      changeLang: "Language",
      changeLangAria: "Change language",
      tablistAria: "Workbook pages",
      tipsHeading: "Questions to ask yourself",
      questionsForPage: "Questions for page",
      pageWord: "Page",
      placeholder: "Add photos or scans of your own workbook page here when ready.",
      dash: " — ",
      pages: [
        page(
          "Theme & content mindmap",
          "What branches from my centre theme (keywords, symbols, influences)?",
          [
            "What is my main theme (one short phrase)?",
            "What sub-topics, keywords, images / symbols, and influences branch from it?",
            "Can I add small pictures or labels so sources stay clear on the map?",
            "Would an examiner understand each branch without me explaining in person?"
          ],
          { title: "Reference video from 2:33", aria: "Open reference video on YouTube (from 2:33)" }
        ),
        page("Introduction of theme", "What is my theme—and what is artwork 1 about?", [
          "What does this theme mean to <em>me</em> (not a dictionary definition)?",
          "What experience / observation made me choose it?",
          "What mood, message, or question do I want to explore/express/confront?",
          "What is my topic for <strong>artwork 1</strong>—and what do I want the viewer to feel or think?"
        ]),
        page(
          "Artist study",
          "Whose work connects to my theme—and what do I notice?",
          [
            "Which artist(s) connect to my theme or my artwork idea—how, and in what context(s)?",
            "What specific artwork(s) am I studying?",
            "What techniques, composition, colours, materials, and meanings do I notice?",
            "What do I like / dislike, and what can I borrow or adapt? Include 1–2 images with short notes in my own words."
          ],
          { title: "Reference video from 6:52", aria: "Open reference video on YouTube (from 6:52)" }
        ),
        page(
          "Draft / sketches — artwork 1",
          "What directions am I trying (formal choices, feeling, leading into the final piece)?",
          [
            "Have I made <strong>1–3 sketches</strong>—each stressing particular formal choices (colour, composition, line, shape, scale, viewpoint, marks, background)?",
            "What emotion(s) do I express or confront—and how do formal qualities help with that (e.g. tension / calm, near / far, order / chaos)?",
            "What would I <strong>adapt or change</strong> from these sketches into the real piece—and why?",
            "Do these directions link clearly to my theme and topic from page 2?"
          ],
          { title: "Reference video from 8:35", aria: "Open reference video on YouTube (from 8:35)" }
        ),
        page("Information collection — artwork 1", "What pictures, textures, or samples am I collecting?", [
          "What references do I need (photos, textures, objects, interviews, facts)?",
          "How will each reference be used in my artwork?",
          "What notes can I write beside each image (1–2 lines)?",
          "What gaps do I still need to collect?"
        ]),
        page(
          "Experiment of media or technique — artwork 1",
          "What materials and methods am I testing?",
          [
            "What materials / techniques can I test (at least 3 small tests)?",
            "What worked well, and what failed?",
            "How do my tests connect to the mood / meaning I want?",
            "Which test will I use in the final artwork, and why?"
          ],
          { title: "Reference video from 12:00", aria: "Open reference video on YouTube (from 12:00)" }
        ),
        page("Final approach — artwork 1", "Which approach do I commit to, and why?", [
          "Which test or sketch direction will I use in the <strong>final artwork</strong>, and why?",
          "What would I <strong>adapt or change</strong> from sketches into the real piece?",
          "What <strong>medium</strong> and main <strong>composition</strong> am I committing to—in plain words?",
          "What <strong>2–3 reasons</strong> tie this decision to pages 4 and 6?"
        ]),
        page("Introduction of theme — artwork 2", "What is the specific focus of my second piece?", [
          "What does this focus for artwork 2 mean to <em>me</em> (not a generic line)?",
          "What experience / observation or source feeds this piece?",
          "What mood, message, or question do I want to explore/express/confront here?",
          "How is this focus <strong>different from artwork 1</strong>—yet still tied to my theme?"
        ]),
        page("Draft / sketches — artwork 2", "What are my starting directions for this piece?", [
          "Have I made <strong>1–3 sketches</strong>—each stressing particular formal choices (colour, composition, line, shape, scale, viewpoint, marks, background)?",
          "What emotion(s) do I express or confront—and how do formal qualities help with that?",
          "What would I <strong>adapt or change</strong> into the real piece for artwork 2—and why?",
          "Do these directions link to my focus on <strong>page 8</strong> and show a clear shift from artwork 1?"
        ]),
        page(
          "Information collection — artwork 2",
          "What pictures and samples support this artwork?",
          [
            "What references do I need (photos, textures, objects, interviews, facts)?",
            "How will each reference be used in <strong>this</strong> artwork?",
            "What notes can I write beside each image (1–2 lines)?",
            "What gaps do I still need to collect—is this board fresh for artwork 2, not only leftovers from artwork 1?"
          ],
          { title: "Reference video from 9:07", aria: "Open reference video on YouTube (from 9:07)" }
        ),
        page("Experiment of media or technique — artwork 2", "What did I try, why, and what will I use in the final work?", [
          "What materials / techniques can I test (at least 3 small tests)?",
          "What worked well, and what failed?",
          "How do my tests connect to the mood / meaning I want for artwork 2?",
          "Which test will I use in the final artwork, and why?"
        ]),
        page("Reflection", "What did I learn—and what was difficult or surprising?", [
          "What did I learn (skills + ideas)? What surprised me in the process?",
          "What was difficult (skills, time, composition, materials, idea)—and what did I try to solve it (step-by-step)?",
          "What feedback did I receive, and how did I respond? What would I improve if I did this again?",
          "What evidence can I show (photos of trials, notes, revisions)?"
        ]),
        page("Introduction of theme — artwork 3", "What is the focus of my third piece?", [
          "What does this focus for artwork 3 mean to <em>me</em> (not a generic line)?",
          "How has my inquiry <strong>grown</strong> after artworks 1 and 2?",
          "What mood, message, or question do I want to explore/express/confront in this piece?",
          "What is my one <strong>clear topic</strong> for artwork 3—and how does it tie back to my theme?"
        ]),
        page("Draft / sketches — artwork 3", "What are my starting directions?", [
          "Have I made <strong>1–3 sketches</strong>—each stressing particular formal choices (colour, composition, line, shape, scale, viewpoint, marks, background)?",
          "What emotion(s) do I express or confront—and how do formal qualities help with that?",
          "What would I <strong>adapt or change</strong> into the real piece for artwork 3—and why?",
          "Do these directions link to my topic on <strong>page 13</strong>—and leave room to develop further?"
        ])
      ]
    },

    ne: {
      docTitle: "DSE दृश्य कला कार्यपुस्तिका डिजाइन मार्गदर्शन",
      guideTitle: "DSE दृश्य कला कार्यपुस्तिका डिजाइन मार्गदर्शन",
      guideLede: "HKDSE दृश्य कला — प्रत्येक कार्यपुस्तिका पृष्ठ कसरी डिजाइन गर्ने, उदाहरण र प्रश्नहरूसहित।",
      chooseLang: "भाषा छान्नुहोस्",
      rememberLabel: "यो उपकरणमा मेरो छनोट सम्झनुहोस्",
      changeLang: "भाषा",
      changeLangAria: "भाषा बदल्नुहोस्",
      tablistAria: "कार्यपुस्तिका पृष्ठहरू",
      tipsHeading: "आफूलाई सोध्ने प्रश्नहरू",
      questionsForPage: "पृष्ठका प्रश्नहरू",
      pageWord: "पृष्ठ",
      placeholder: "तयार भएपछि आफ्नो कार्यपुस्तिकाका फोटो वा स्क्यान यहाँ थप्नुहोस्।",
      dash: " — ",
      pages: [
        page(
          "थिम र सामग्री माइन्डम्याप",
          "मेरो केन्द्र थिमबाट के शाखाहरू निस्कन्छ (कीवर्ड, प्रतीक, प्रभाव)?",
          [
            "मेरो मुख्य थिम (छोटो वाक्य) के हो?",
            "यसबाट के उपविषय, कीवर्ड, छवि / प्रतीक र प्रभाव शाखा बन्छन्?",
            "स्रोत स्पष्ट रहुन् भनेर साना चित्र वा लेबल थप्न सक्छु?",
            "परीक्षकले मेरो बिना मुखै बुझ्न प्रत्येक शाखा बुझ्न सक्लान्?"
          ],
          { title: "सन्दर्भ भिडियो २:३३ देखि", aria: "YouTube मा सन्दर्भ भिडियो खोल्नुहोस् (२:३३ देखि)" }
        ),
        page("थिमको परिचय", "मेरो थिम के हो—र कला १ के बारेमा?", [
          "यो थिम <em>मलाई</em> के अर्थ राख्छ (शब्दकोषको परिभाषा होइन)?",
          "मैले यो किन छानेको—कुन अनुभव वा अवलोकन?",
          "म के मूड, सन्देश वा प्रश्न अन्वेषण / व्यक्त / सामना गर्न चाहन्छु?",
          "<strong>कला १</strong> को विषय के हो—र दर्शकले के महसुस वा सोचुन्?"
        ]),
        page(
          "कलाकार अध्ययन",
          "कसको काम मेरो थिमसँग जोडिन्छ—र म के देख्छु?",
          [
            "कुन कलाकार(हरू) मेरो थिम वा कलाको विचारसँग जोडिन्छन्—कसरी, कुन संदर्भमा?",
            "म कुन विशिष्ट कृति(हरू) अध्ययन गर्दैछु?",
            "तकनीक, संरचना, रङ, सामग्री र अर्थमा म के देख्छु?",
            "के मन पर्छ / पर्दैन, के उधार वा अनुकूलन गर्न सक्छु? आफ्नै शब्दमा १–२ छविसहित छोटा नोट।"
          ],
          { title: "सन्दर्भ भिडियो ६:५२ देखि", aria: "YouTube मा सन्दर्भ भिडियो खोल्नुहोस् (६:५२ देखि)" }
        ),
        page(
          "मसौदा / स्केच — कला १",
          "म कुन दिशाहरू प्रयास गर्दैछु (औपचारिक छनोट, भावना, अन्तिम कृतितर्फ)?",
          [
            "के मैले <strong>१–३ स्केच</strong> बनाएको छु—प्रत्येकले औपचारिक छनोट (रङ, संरचना, रेखा, आकार, पैमाना, दृष्टिकोण, चिन्ह, पृष्ठभूमि) जोडेको छ?",
            "कुन भावना व्यक्त वा सामना गर्छु—र औपचारिक गुणले त्यसमा कसरी मद्दत गर्छ (जस्तै तनाव / शान्ति, नजिक / टाढा, अव्यवस्था / व्यवस्था)?",
            "वास्तविक कृतिमा यी स्केचबाट के <strong>अनुकूलन वा परिवर्तन</strong> गर्छु—किन?",
            "यी दिशाहरू पृष्ठ २ को थिम र विषयसँग स्पष्ट जोडिन्छन्?"
          ],
          { title: "सन्दर्भ भिडियो ८:३५ देखि", aria: "YouTube मा सन्दर्भ भिडियो खोल्नुहोस् (८:३५ देखि)" }
        ),
        page("सूचना संकलन — कला १", "म कुन तस्बिर, बनावट वा नमूना जम्मा गर्दैछु?", [
          "मलाई कुन सन्दर्भ चाहिन्छ (फोटो, बनावट, वस्तु, वार्तालाप, तथ्य)?",
          "प्रत्येक सन्दर्भ कृतिमा कसरी प्रयोग हुन्छ?",
          "प्रत्येक छवि छेउमा के नोट लेख्न सक्छु (१–२ लाइन)?",
          "अझ के जम्मा गर्न बाँकी छ?"
        ]),
        page(
          "माध्यम वा तकनीकको परीक्षण — कला १",
          "म कुन सामग्री र विधिहरू परीक्षण गर्दैछु?",
          [
            "कुन सामग्री / तकनीक परीक्षण गर्न सक्छु (कम्तीमा ३ साना परीक्षण)?",
            "के राम्रो भयो, के असफल?",
            "परीक्षणहरू म चाहेको मूड / अर्थसँग कसरी जोडिन्छन्?",
            "अन्तिम कृतिमा कुन परीक्षण प्रयोग गर्छु—किन?"
          ],
          { title: "सन्दर्भ भिडियो १२:०० देखि", aria: "YouTube मा सन्दर्भ भिडियो खोल्नुहोस् (१२:०० देखि)" }
        ),
        page("अन्तिम योजना — कला १", "म कुन दृष्टिकोण प्रतिबद्ध छु, र किन?", [
          "अन्तिम कृतिमा कुन परीक्षण वा स्केच दिशा प्रयोग गर्छु—किन?",
          "वास्तविक कृतिमा स्केचबाट के <strong>अनुकूलन वा परिवर्तन</strong> गर्छु?",
          "साधारण शब्दमा म कुन <strong>माध्यम</strong> र मुख्य <strong>संरचना</strong>मा प्रतिबद्ध छु?",
          "पृष्ठ ४ र ६ सँग यो निर्णय कसरी जोडिन्छ—<strong>२–३ कारण</strong>?"
        ]),
        page("थिमको परिचय — कला २", "मेरो दोस्रो कृतिको विशिष्ट फोकस के हो?", [
          "कला २ को फोकस <em>मलाई</em> के अर्थ राख्छ (साधारण लाइन होइन)?",
          "यो कृतिलाई के अनुभव, अवलोकन वा स्रोतले पोषण गर्छ?",
          "यहाँ के मूड, सन्देश वा प्रश्न अन्वेषण / व्यक्त / सामना गर्छु?",
          "कला १ भन्दा कसरी <strong>फरक</strong>—तैपनि थिमसँग कसरी जोडिन्छ?"
        ]),
        page("मसौदा / स्केच — कला २", "यस कृतिका लागि मेरा सुरुवाती दिशाहरू के हुन्?", [
          "के मैले <strong>१–३ स्केच</strong> बनाएको छु—प्रत्येकले औपचारिक छनोट (रङ, संरचना, रेखा, आकार, पैमाना, दृष्टिकोण, चिन्ह, पृष्ठभूमि) जोडेको छ?",
          "कुन भावना व्यक्त वा सामना गर्छु—र औपचारिक गुणले त्यसमा कसरी मद्दत गर्छ?",
          "कला २ को वास्तविक कृतिमा के <strong>अनुकूलन वा परिवर्तन</strong> गर्छु—किन?",
          "यी दिशाहरू <strong>पृष्ठ ८</strong> को फोकससँग जोडिन्छन् र कला १ भन्दा स्पष्ट फरक देखाउँछन्?"
        ]),
        page(
          "सूचना संकलन — कला २",
          "यस कृतिलाई कुन तस्बिर र नमूनाहरूले समर्थन गर्छन्?",
          [
            "मलाई कुन सन्दर्भ चाहिन्छ (फोटो, बनावट, वस्तु, वार्तालाप, तथ्य)?",
            "प्रत्येक सन्दर्भ <strong>यस</strong> कृतिमा कसरी प्रयोग हुन्छ?",
            "प्रत्येक छवि छेउमा के नोट लेख्न सक्छु (१–२ लाइन)?",
            "अझ के जम्मा गर्न बाँकी छ—के यो कला २ को लागि ताजा बोर्ड हो, कला १ का बाँकी मात्र होइन?"
          ],
          { title: "सन्दर्भ भिडियो ९:०७ देखि", aria: "YouTube मा सन्दर्भ भिडियो खोल्नुहोस् (९:०७ देखि)" }
        ),
        page("माध्यम वा तकनीकको परीक्षण — कला २", "मैले के प्रयास गरेको, किन, र अन्तिम काममा के प्रयोग गर्छु?", [
          "कुन सामग्री / तकनीक परीक्षण गर्न सक्छु (कम्तीमा ३ साना परीक्षण)?",
          "के राम्रो भयो, के असफल?",
          "परीक्षणहरू कला २ को लागि म चाहेको मूड / अर्थसँग कसरी जोडिन्छन्?",
          "अन्तिम कृतिमा कुन परीक्षण प्रयोग गर्छु—किन?"
        ]),
        page("प्रतिबिम्बन", "मैले के सिकेँ—के गाह्रो वा आश्चर्य थियो?", [
          "मैले के सिकेँ (सीप + विचार)? प्रक्रियामा केले आश्चर्य चकित पार्यो?",
          "के गाह्रो थियो (सीप, समय, संरचना, सामग्री, विचार)—र समाधानको लागि के प्रयास गरेको (चरणअनुसार)?",
          "के प्रतिक्रिया पाएँ, कसरी जवाफ दिएँ? फेरि गर्दा के सुधार्ने?",
          "के प्रमाण देखाउन सक्छु (परीक्षणका फोटो, नोट, संशोधन)?"
        ]),
        page("थिमको परिचय — कला ३", "मेरो तेस्रो कृतिको फोकस के हो?", [
          "कला ३ को फोकस <em>मलाई</em> के अर्थ राख्छ (साधारण लाइन होइन)?",
          "कला १ र २ पछि मेरो अन्वेषण कसरी <strong>बढ्यो</strong>?",
          "यस कृतिमा के मूड, सन्देश वा प्रश्न अन्वेषण / व्यक्त / सामना गर्छु?",
          "कला ३ को मेरो एउटा <strong>स्पष्ट विषय</strong> के हो—र थिमसँग कसरी जोडिन्छ?"
        ]),
        page("मसौदा / स्केच — कला ३", "मेरा सुरुवाती दिशाहरू के हुन्?", [
          "के मैले <strong>१–३ स्केच</strong> बनाएको छु—प्रत्येकले औपचारिक छनोट (रङ, संरचना, रेखा, आकार, पैमाना, दृष्टिकोण, चिन्ह, पृष्ठभूमि) जोडेको छ?",
          "कुन भावना व्यक्त वा सामना गर्छु—र औपचारिक गुणले त्यसमा कसरी मद्दत गर्छ?",
          "कला ३ को वास्तविक कृतिमा के <strong>अनुकूलन वा परिवर्तन</strong> गर्छु—किन?",
          "यी दिशाहरू <strong>पृष्ठ १३</strong> को विषयसँग जोडिन्छन्—र पछि विकासको लागि ठाउँ छ?"
        ])
      ]
    },

    ur: {
      docTitle: "DSE بصری فنون ورک بک ڈیزائن گائیڈ",
      guideTitle: "DSE بصری فنون ورک بک ڈیزائن گائیڈ",
      guideLede: "HKDSE بصری فنون — ہر ورک بک صفحہ کیسے ترتیب دیں، مثالوں اور سوالات کے ساتھ۔",
      chooseLang: "زبان منتخب کریں",
      rememberLabel: "اس آلہ پر میری پسند یاد رکھیں",
      changeLang: "زبان",
      changeLangAria: "زبان بدلیں",
      tablistAria: "ورک بک صفحات",
      tipsHeading: "اپنے آپ سے پوچھنے والے سوالات",
      questionsForPage: "صفحہ کے سوالات",
      pageWord: "صفحہ",
      placeholder: "تیار ہونے پر اپنی ورک بک کی تصویر یا اسکین یہاں لگائیں۔",
      dash: " — ",
      pages: [
        page(
          "تھیم اور مواد کا مائنڈ میپ",
          "میرے مرکزی تھیم سے کیا شاخیں نکلتی ہیں (کلیدی الفاظ، علامات، اثرات)؟",
          [
            "میرا مرکزی تھیم (ایک مختصر جملہ) کیا ہے؟",
            "اس سے کن ذیلی موضوعات، کلیدی الفاظ، تصاویر / علامات، اور اثرات کی شاخیں نکلتی ہیں؟",
            "کیا میں چھوٹی تصاویر یا لیبل لگا سکتا ہوں تاکہ ذرائع واضح رہیں؟",
            "کیا ایک جانچ کنندہ ہر شاخ بغیر میری زبانی سمجھ سکے گا؟"
          ],
          { title: "حوالہ ویڈیو 2:33 سے", aria: "یوٹیوب پر حوالہ ویڈیو کھولیں (2:33 سے)" }
        ),
        page("تھیم کا تعارف", "میرا تھیم کیا ہے—اور آرٹ ورک 1 کس بارے میں ہے؟", [
          "یہ تھیم <em>مجھے</em> کیا معنی رکھتا ہے (لغت کی تعریف نہیں)؟",
          "کس تجربے / مشاہدے نے مجھے یہ چننے پر مجبور کیا؟",
          "کون سا مزاج، پیغام، یا سوال میں تلاش، اظہار، یا سامنا کرنا چاہتا ہوں؟",
          "<strong>آرٹ ورک 1</strong> کا موضوع کیا ہے—اور میں چاہتا ہوں دیکھنے والا کیا محسوس یا سوچے؟"
        ]),
        page(
          "فنکار کا مطالعہ",
          "کس کا کام میرے تھیم سے جڑتا ہے—اور میں کیا نوٹس کرتا ہوں؟",
          [
            "کون سے فنکار میرے تھیم یا خیال سے جڑتے ہیں—کیسے، کس سیاق و سباق میں؟",
            "میں کون سی مخصوص تخلیق(یں) پڑھ رہا ہوں؟",
            "میں تکنیک، ترکیب، رنگ، مواد، اور معانی میں کیا نوٹس کرتا ہوں؟",
            "مجھے کیا پسند / ناپسند ہے، اور میں کیا قرض یا ڈھال سکتا ہوں؟ اپنی الفاظ میں 1–2 تصاویر اور مختصر نوٹ شامل کریں۔"
          ],
          { title: "حوالہ ویڈیو 6:52 سے", aria: "یوٹیوب پر حوالہ ویڈیو کھولیں (6:52 سے)" }
        ),
        page(
          "مسودہ / خاکے — آرٹ ورک 1",
          "میں کون سی سمتیں آزما رہا ہوں (رسمی انتخاب، جذبہ، حتمی کام کی طرف)؟",
          [
            "کیا میں نے <strong>1–3 خاکے</strong> بنائے—ہر ایک میں مخصوص رسمی انتخاب (رنگ، ترکیب، لائن، شکل، پیمانہ، نقطہ نظر، نشان، پس منظر)؟",
            "کون سے جذبات میں ظاہر یا سامنا کرتا ہوں—اور رسمی خصوصیات اس میں کیسے مدد کرتی ہیں (مثلاً تناؤ / سکون، قریب / دور، انتشار / نظم)؟",
            "حتمی کام میں ان خاکوں سے کیا <strong>ڈھالوں یا بدلوں</strong>—کیوں؟",
            "کیا یہ سمتیں صفحہ 2 کے تھیم اور موضوع سے واضح جڑتی ہیں؟"
          ],
          { title: "حوالہ ویڈیو 8:35 سے", aria: "یوٹیوب پر حوالہ ویڈیو کھولیں (8:35 سے)" }
        ),
        page("معلومات کا مجموعہ — آرٹ ورک 1", "میں کن تصاویر، بناوٹ یا نمونے جمع کر رہا ہوں؟", [
          "مجھے کن حوالوں کی ضرورت ہے (تصاویر، بناوٹ، اشیاء، انٹرویوز، حقائق)؟",
          "ہر حوالہ میری تخلیق میں کیسے استعمال ہوگا؟",
          "ہر تصویر کے ساتھ کن نوٹ لکھ سکتا ہوں (1–2 لائنیں)؟",
          "ابھی کن خلا جمع کرنے باقی ہیں؟"
        ]),
        page(
          "ذریعہ یا تکنیک کا تجربہ — آرٹ ورک 1",
          "میں کن مواد اور طریقوں کو آزما رہا ہوں؟",
          [
            "میں کن مواد / تکنیکوں کو آزما سکتا ہوں (کم از کم 3 چھوٹے ٹیسٹ)؟",
            "کیا اچھا رہا، اور کیا ناکام ہوا؟",
            "میرے ٹیسٹ مطلوبہ مزاج / معنی سے کیسے جڑتے ہیں؟",
            "حتمی تخلیق میں کون سا ٹیسٹ استعمال کروں گا، اور کیوں؟"
          ],
          { title: "حوالہ ویڈیو 12:00 سے", aria: "یوٹیوب پر حوالہ ویڈیو کھولیں (12:00 سے)" }
        ),
        page("حتمی منصوبہ — آرٹ ورک 1", "میں کس نقطہ نظر پر قائم ہوں، اور کیوں؟", [
          "حتمی تخلیق میں کون سا ٹیسٹ یا خاکے کی سمت استعمال کروں گا، اور کیوں؟",
          "حقیقی کام میں خاکوں سے کیا <strong>ڈھالوں یا بدلوں</strong>؟",
          "سادہ الفاظ میں میں کس <strong>ذریعے</strong> اور اہم <strong>ترکیب</strong> پر قائم ہوں؟",
          "صفحہ 4 اور 6 سے یہ فیصلہ کیسے جڑتا ہے—<strong>2–3 وجوہات</strong>؟"
        ]),
        page("تھیم کا تعارف — آرٹ ورک 2", "میری دوسری تخلیق کا مخصوص مرکز کیا ہے؟", [
          "آرٹ ورک 2 کے اس مرکز کا <em>مجھے</em> کیا مطلب ہے (عام لائن نہیں)؟",
          "کس تجربے / مشاہدے یا ذریعے نے اس ٹکڑے کو کھلایا؟",
          "یہاں کون سا مزاج، پیغام، یا سوال میں تلاش، اظہار، یا سامنا کرنا چاہتا ہوں؟",
          "یہ مرکز آرٹ ورک 1 سے کیسے <strong>مختلف</strong> ہے—پھر بھی تھیم سے جڑا؟"
        ]),
        page("مسودہ / خاکے — آرٹ ورک 2", "اس تخلیق کے لیے میری ابتدائی سمتیں کیا ہیں؟", [
          "کیا میں نے <strong>1–3 خاکے</strong> بنائے—ہر ایک میں مخصوص رسمی انتخاب (رنگ، ترکیب، لائن، شکل، پیمانہ، نقطہ نظر، نشان، پس منظر)؟",
          "کون سے جذبات میں ظاہر یا سامنا کرتا ہوں—اور رسمی خصوصیات کیسے مدد کرتی ہیں؟",
          "آرٹ ورک 2 کے حتمی کام میں کیا <strong>ڈھالوں یا بدلوں</strong>—کیوں؟",
          "کیا یہ سمتیں <strong>صفحہ 8</strong> کے مرکز سے جڑتی ہیں اور آرٹ ورک 1 سے واضح فرق دکھاتی ہیں؟"
        ]),
        page(
          "معلومات کا مجموعہ — آرٹ ورک 2",
          "کن تصاویر اور نمونے اس تخلیق کی حمایت کرتے ہیں؟",
          [
            "مجھے کن حوالوں کی ضرورت ہے (تصاویر، بناوٹ، اشیاء، انٹرویوز، حقائق)؟",
            "ہر حوالہ <strong>اس</strong> تخلیق میں کیسے استعمال ہوگا؟",
            "ہر تصویر کے ساتھ کن نوٹ لکھ سکتا ہوں (1–2 لائنیں)؟",
            "ابھی کن خلا جمع کرنے باقی ہیں—کیا یہ بورڈ آرٹ ورک 2 کے لیے تازہ ہے، صرف آرٹ ورک 1 کی باقیات نہیں؟"
          ],
          { title: "حوالہ ویڈیو 9:07 سے", aria: "یوٹیوب پر حوالہ ویڈیو کھولیں (9:07 سے)" }
        ),
        page("ذریعہ یا تکنیک کا تجربہ — آرٹ ورک 2", "میں نے کیا آزمایا، کیوں، اور حتمی کام میں کیا استعمال کروں گا؟", [
          "میں کن مواد / تکنیکوں کو آزما سکتا ہوں (کم از کم 3 چھوٹے ٹیسٹ)؟",
          "کیا اچھا رہا، اور کیا ناکام ہوا؟",
          "میرے ٹیسٹ آرٹ ورک 2 کے مطلوبہ مزاج / معنی سے کیسے جڑتے ہیں؟",
          "حتمی تخلیق میں کون سا ٹیسٹ استعمال کروں گا، اور کیوں؟"
        ]),
        page("غور و فکر", "میں نے کیا سیکھا—کیا مشکل یا حیرت انگیز تھا؟", [
          "میں نے کیا سیکھا (مہارتیں + خیالات)؟ عمل میں کیا حیرت انگیز تھا؟",
          "کیا مشکل تھا (مہارت، وقت، ترکیب، مواد، خیال)—اور میں نے حل کے لیے کیا آزمایا (مرحلہ وار)؟",
          "مجھے کیا رائے ملی، میں نے کیسے جواب دیا؟ دوبارہ کرتا تو کیا بہتر کروں؟",
          "میں کیا ثبوت دکھا سکتا ہوں (ٹرائل کی تصاویر، نوٹس، نظرثانی)؟"
        ]),
        page("تھیم کا تعارف — آرٹ ورک 3", "میری تیسری تخلیق کا مرکز کیا ہے؟", [
          "آرٹ ورک 3 کے اس مرکز کا <em>مجھے</em> کیا مطلب ہے (عام لائن نہیں)؟",
          "آرٹ ورک 1 اور 2 کے بعد میری کھوج کیسے <strong>بڑھی</strong>؟",
          "اس ٹکڑے میں کون سا مزاج، پیغام، یا سوال میں تلاش، اظہار، یا سامنا کرنا چاہتا ہوں؟",
          "آرٹ ورک 3 کے لیے میرا ایک <strong>واضح موضوع</strong> کیا ہے—اور تھیم سے کیسے جڑتا ہے؟"
        ]),
        page("مسودہ / خاکے — آرٹ ورک 3", "میری ابتدائی سمتیں کیا ہیں؟", [
          "کیا میں نے <strong>1–3 خاکے</strong> بنائے—ہر ایک میں مخصوص رسمی انتخاب (رنگ، ترکیب، لائن، شکل، پیمانہ، نقطہ نظر، نشان، پس منظر)؟",
          "کون سے جذبات میں ظاہر یا سامنا کرتا ہوں—اور رسمی خصوصیات کیسے مدد کرتی ہیں؟",
          "آرٹ ورک 3 کے حتمی کام میں کیا <strong>ڈھالوں یا بدلوں</strong>—کیوں؟",
          "کیا یہ سمتیں <strong>صفحہ 13</strong> کے موضوع سے جڑتی ہیں—اور آگے ترقی کے لیے جگہ ہے؟"
        ])
      ]
    }
  };

  global.WB_STORAGE_KEY = STORAGE;
})(typeof window !== "undefined" ? window : this);
