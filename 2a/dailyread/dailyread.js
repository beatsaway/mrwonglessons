/** 中二綜合科學 — MC 為「哪一項不正確」，錯誤選項採常見誤解（非荒謬答案）。 */

function mcInc(
  stemZh,
  stemEn,
  wrongZh,
  wrongEn,
  t1Zh,
  t1En,
  t2Zh,
  t2En,
  t3Zh,
  t3En,
  whyZh,
  whyEn
) {
  return {
    mode: "incorrect",
    question: stemZh,
    questionEn: stemEn,
    choices: [
      { zh: wrongZh, en: wrongEn },
      { zh: t1Zh, en: t1En },
      { zh: t2Zh, en: t2En },
      { zh: t3Zh, en: t3En }
    ],
    correctIndex: 0,
    explainWhyZh: whyZh,
    explainWhyEn: whyEn
  };
}

/** Board text after MC: why the incorrect option is wrong (keyed by entry title). */
const EXPLAIN_WHY_BY_TITLE = {
  "植物細胞有細胞壁": {
    zh: "不正確項指根尖也有葉綠體。根尖、表皮等非綠色部位一般沒有葉綠體；葉綠體主要在葉肉細胞進行光合作用。",
    en: "The incorrect option says root tips have chloroplasts. Root tips and epidermis usually lack chloroplasts; chloroplasts are mainly in leaf mesophyll for photosynthesis."
  },
  "細胞核控制細胞活動": {
    zh: "不正確項把細胞核說成只儲存養分。細胞核含遺傳物質並控制細胞活動；大量儲存養分多與液泡等有關。",
    en: "The incorrect option says the nucleus only stores nutrients. The nucleus holds genetic material and controls activities; storage is mainly linked to the vacuole and other structures."
  },
  "消化在消化道進行": {
    zh: "不正確項指胃吸收大部分養分。胃主要負責消化；大部分養分在小腸吸收。",
    en: "The incorrect option says the stomach absorbs most nutrients. The stomach mainly digests food; most absorption happens in the small intestine."
  },
  "消化酶分解食物": {
    zh: "不正確項指酶把澱粉直接合成蛋白質。消化酶是把大分子分解成小分子；蛋白質、澱粉、脂肪各有不同酶。",
    en: "The incorrect option says enzymes build protein from starch. Digestive enzymes break large molecules into smaller ones; different enzymes act on starch, protein and fats."
  },
  "肺泡進行氣體交換": {
    zh: "不正確項指肺泡壁愈厚愈好。肺泡壁要薄才易交換氣體；壁厚會減慢氧氣進入血液。",
    en: "The incorrect option says thicker alveoli walls are better. Alveoli need thin walls for gas exchange; thick walls slow oxygen entering the blood."
  },
  "光合作用需要光": {
    zh: "不正確項指光合作用在夜間更旺盛。光合作用需要光；沒有光時一般不會進行光合作用。",
    en: "The incorrect option says photosynthesis is stronger at night. Photosynthesis needs light; without light it generally does not occur."
  },
  "食物鏈顯示能量流向": {
    zh: "不正確項指能量大部分可傳給下一層。能量在傳遞時會以熱等形式散失，只有少部分傳到下一層。",
    en: "The incorrect option says most energy passes to the next level. Energy is lost as heat during transfer, so only a small part reaches the next level."
  },
  "綠色植物是生產者": {
    zh: "不正確項指生產者以其他生物為食。生產者能自行製造養分（如綠色植物進行光合作用），不是以其他生物為主要食物來源。",
    en: "The incorrect option says producers feed on other organisms. Producers make their own food (e.g. plants by photosynthesis), not mainly by eating others."
  },
  "部分細菌對人有益": {
    zh: "不正確項指泡菜與微生物無關。泡菜發酵需要微生物作用；亦有些腸道細菌有助消化。",
    en: "The incorrect option says pickles do not involve microbes. Fermentation needs microbes; some gut bacteria also aid digestion."
  },
  "病毒要寄生活細胞": {
    zh: "不正確項指抗生素可破壞病毒細胞壁。病毒沒有細胞壁；抗生素主要針對細菌，不能治療一般病毒性感冒。",
    en: "The incorrect option says antibiotics break down viral cell walls. Viruses have no cell wall; antibiotics target bacteria and do not treat typical viral colds."
  },
  "均衡飲食有益健康": {
    zh: "不正確項指只吃足夠蛋白質便足夠。均衡飲食需要碳水化合物、蛋白質、脂肪、維生素和礦物質等，種類和份量都要適中。",
    en: "The incorrect option says enough protein alone is enough. A balanced diet needs carbohydrates, protein, fats, vitamins and minerals in suitable amounts and variety."
  },
  "吸煙損害肺部": {
    zh: "不正確項指二手煙主要影響牙齒。二手煙同樣含有害物質，會損害肺泡和氣道等呼吸系統。",
    en: "The incorrect option says second-hand smoke mainly affects teeth. It also contains harmful chemicals that damage alveoli and airways in the breathing system."
  },
  "抗生素治細菌感染": {
    zh: "不正確項指感冒應服抗生素縮短病程。普通感冒多由病毒引起，不應濫用抗生素；抗生素主要用於細菌感染。",
    en: "The incorrect option says antibiotics shorten a common cold. Colds are often viral; antibiotics are for bacterial infections and should not be misused."
  },
  "顯微鏡觀察細胞": {
    zh: "不正確項指放上玻片後不必調節焦距。觀察細胞時通常要先用低倍鏡找到標本，再調節準焦螺旋使影像清晰。",
    en: "The incorrect option says no focus adjustment is needed. You usually find the specimen at low power, then adjust the fine focus for a clear image."
  },
  "分解者分解遺體": {
    zh: "不正確項指分解者是食物鏈第一營養級。生產者才是第一營養級；分解者分解遺體，把養分送回環境。",
    en: "The incorrect option says decomposers are the first trophic level. Producers are first; decomposers break down remains and return nutrients to the environment."
  },
  "粒子排列與物態": {
    zh: "不正確項指固體沒有固定形狀。固體粒子排列緊密，有固定形狀；沒有固定形狀的是液體和氣體。",
    en: "The incorrect option says solids have no fixed shape. Particles in solids are close and give a fixed shape; liquids and gases do not have a fixed shape."
  },
  "熔化屬物理變化": {
    zh: "不正確項指冰熔化是化學變化。冰變水只改變狀態，沒有新物質生成，屬於物理變化。",
    en: "The incorrect option says melting ice is a chemical change. Ice to water only changes state with no new substance, so it is physical."
  },
  "過濾分離不溶物": {
    zh: "不正確項指過濾可除去已溶解的食鹽。過濾只能分離不溶於水的固体；已溶解的食鹽要用蒸餾等方法。",
    en: "The incorrect option says filtration removes dissolved salt. Filtration separates insoluble solids; dissolved salt needs distillation or similar methods."
  },
  "pH值表示酸鹼性": {
    zh: "不正確項指 pH 愈大愈酸。pH 小於 7 為酸性，等於 7 為中性，大於 7 為鹼性；數值愈大愈偏鹼。",
    en: "The incorrect option says higher pH means stronger acid. Below 7 is acidic, 7 is neutral, above 7 is alkaline; higher pH means more alkaline."
  },
  "石蕊試紙測酸鹼": {
    zh: "不正確項指紅色石蕊紙遇酸變藍。藍色石蕊紙遇酸變紅；紅色石蕊紙遇鹼才變藍。",
    en: "The incorrect option says red litmus turns blue in acid. Blue litmus turns red in acid; red litmus turns blue in alkali."
  },
  "酸鹼中和生鹽和水": {
    zh: "不正確項指中和只生成鹽、不生成水。酸與鹼中和會同時生成鹽和水。",
    en: "The incorrect option says neutralisation forms only salt, not water. Acid–alkali neutralisation forms both salt and water."
  },
  "空氣含氧氣和氮氣": {
    zh: "不正確項指氧氣約佔 78%。乾燥空氣中氮氣約 78%，氧氣約 21%。",
    en: "The incorrect option says oxygen is about 78%. In dry air nitrogen is about 78% and oxygen about 21%."
  },
  "鐵生鏽需氧和水": {
    zh: "不正確項指生鏽只與水有關。鐵生鏽是鐵與氧和水作用的化學變化，兩者通常都需要。",
    en: "The incorrect option says rusting involves only water. Rusting is iron reacting with both oxygen and water; both are usually needed."
  },
  "溶液有溶質和溶劑": {
    zh: "不正確項指水是溶質、食鹽是溶劑。被溶解的物質是溶質（食鹽），用來溶解的是溶劑（水）。",
    en: "The incorrect option swaps solute and solvent. The dissolved substance is the solute (salt); the liquid that dissolves it is the solvent (water)."
  },
  "密度是質量除體積": {
    zh: "不正確項指密度大者質量必定較大。比較質量時要看體積；只有體積相同時，密度較大者質量才較大。",
    en: "The incorrect option says a denser object must have greater mass. Mass depends on both density and volume; only at the same volume does higher density mean greater mass."
  },
  "金屬易導熱": {
    zh: "不正確項指玻璃纖維使熱更快傳到食物。玻璃纖維、泡沫等是隔熱物料，用來減慢熱傳遞，不是加快。",
    en: "The incorrect option says fibreglass speeds heat to food. Fibreglass and foam are insulators that slow heat transfer, not speed it up."
  },
  "二氧化碳使石灰水變混濁": {
    zh: "不正確項指石灰水會變深色。二氧化碳通入澄清石灰水會生成白色沉澱，溶液變混濁，不是單純變深。",
    en: "The incorrect option says limewater becomes darker. Carbon dioxide forms a white precipitate and makes limewater cloudy, not just darker."
  },
  "蒸發受溫度影響": {
    zh: "不正確項指室溫晾毛巾主要靠沸騰。沸騰發生在沸點；室溫變乾主要是蒸發，可在沸點以下進行。",
    en: "The incorrect option says drying at room temperature is mainly boiling. Boiling is at the boiling point; room-temperature drying is mainly evaporation below that point."
  },
  "蒸餾可分離清水": {
    zh: "不正確項指靜置海水可使鹽沉澱而可飲用。食鹽已溶解在水中，不會簡單沉澱；需用蒸餾等方法分離。",
    en: "The incorrect option says standing seawater lets salt settle. Dissolved salt does not simply settle; separation needs distillation or similar methods."
  },
  "化學變化生成新物質": {
    zh: "不正確項指糖溶於水生成新物質。糖溶於水沒有新物質生成，屬物理變化；鐵生鏽、鎂燃燒等才是化學變化。",
    en: "The incorrect option says dissolving sugar forms a new substance. Dissolving sugar is physical; rusting or burning magnesium are chemical changes."
  },
  "能量會轉換形式": {
    zh: "不正確項指電燈把電能全部變成光、沒有熱。電燈除了發光，也會放出熱能，電能會轉成光能和熱能。",
    en: "The incorrect option says a lamp turns all electrical energy into light with no heat. Lamps also give out heat; energy becomes both light and thermal energy."
  },
  "傳導在固體較明顯": {
    zh: "不正確項指傳導是流體流動傳熱。流體流動傳熱主要是對流；傳導是粒子碰撞傳遞能量，在金屬勺變熱等情況較明顯。",
    en: "The incorrect option describes convection. Convection is heat transfer by moving fluids; conduction is by particle collisions, as when a metal spoon warms in soup."
  },
  "對流在流體中發生": {
    zh: "不正確項指對流主要在固體發生。對流發生在液體或氣體等流體中；固體主要靠傳導。",
    en: "The incorrect option says convection mainly happens in solids. Convection occurs in fluids such as liquids and gases; solids mainly use conduction."
  },
  "輻射不需介質": {
    zh: "不正確項指太陽熱主要靠空氣對流到地球。太空近乎真空，太陽熱主要靠輻射穿過太空到達地球。",
    en: "The incorrect option says the Sun's heat mainly reaches Earth by air convection. Space is nearly a vacuum; heat mainly travels by radiation."
  },
  "保溫物料減慢傳熱": {
    zh: "不正確項指保溫杯泡沫是把熱傳入杯內。泡沫是隔熱物料，用來減慢熱傳入或熱散失，保持飲品溫度。",
    en: "The incorrect option says foam moves heat into the drink. Foam insulates to slow heat entering or leaving, keeping the drink's temperature."
  },
  "串聯電流相同": {
    zh: "不正確項指串聯時各燈泡電壓相同。串聯電路電流相同，但各燈泡兩端電壓一般不同；並聯時各支路電壓才相同。",
    en: "The incorrect option says voltage is the same in series. Current is the same in series, but voltage across each lamp usually differs; parallel branches share the same voltage."
  },
  "並聯各支路電壓相同": {
    zh: "不正確項指並聯總電流等於一條支路電流。並聯總電流是各支路電流之和，不是只等於其中一條。",
    en: "The incorrect option says total current equals one branch only. In parallel, total current is the sum of branch currents."
  },
  "保險絲保護電路": {
    zh: "不正確項指保險絲穩定過大電流。電流過大時保險絲會熔斷以切斷電路，不是維持大電流。",
    en: "The incorrect option says a fuse keeps high current stable. When current is too high the fuse melts and breaks the circuit."
  },
  "金屬是良導體": {
    zh: "不正確項指電線內外層都用銅。電線內層用銅等導體，外層用橡膠、塑膠等絕緣物料。",
    en: "The incorrect option says both inner and outer layers are copper. The core is copper (a conductor); the outer cover is rubber or plastic (an insulator)."
  },
  "磁鐵有南北極": {
    zh: "不正確項指異極相斥、同極相吸。應為同極相斥、異極相吸。",
    en: "The incorrect option swaps the rule: like poles repel and unlike poles attract, not the other way round."
  },
  "力的單位是牛頓": {
    zh: "不正確項指力以焦耳為單位。力的單位是牛頓（N）；焦耳（J）是能量或功的單位。",
    en: "The incorrect option says force is in joules. Force is measured in newtons (N); joules (J) are for energy or work."
  },
  "壓力等於力除面積": {
    zh: "不正確項指壓力只與重量有關。壓力＝力÷受力面積；同一重量下，受力面積愈小，壓力愈大。",
    en: "The incorrect option says pressure depends only on weight. Pressure = force ÷ area; for the same force, smaller area gives greater pressure."
  },
  "速度是路程除時間": {
    zh: "不正確項指平均速度是 200 km/h。100 km 行 2 小時，平均速度＝100÷2＝50 km/h。",
    en: "The incorrect option says 200 km/h. For 100 km in 2 hours, average speed = 100 ÷ 2 = 50 km/h."
  },
  "摩擦力阻礙運動": {
    zh: "不正確項指摩擦力對走路沒有幫助。摩擦力會阻礙相對運動，但腳與地面之間的摩擦力使我們能向前行。",
    en: "The incorrect option says friction does not help walking. Friction opposes sliding but also lets our feet grip the ground to walk forward."
  },
  "光沿直線傳播": {
    zh: "不正確項指光會繞過障礙物所以沒有影子。光在均勻介質中沿直線傳播；被不透明物體阻擋才會形成影子。",
    en: "The incorrect option says light bends round objects so there are no shadows. Light travels in straight lines in a uniform medium; opaque objects block light and form shadows."
  },
  "聲音需要介質": {
    zh: "不正確項指真空仍可聽見聲音。聲音要靠介質傳遞；真空沒有介質，聲音不能傳播。",
    en: "The incorrect option says sound can still be heard in a vacuum. Sound needs a medium; in a vacuum there is no medium, so sound cannot travel."
  }
};

function explainTextForEntry(entry, mc) {
  const title = normalizeText(entry?.title);
  const why = EXPLAIN_WHY_BY_TITLE[title];
  if (why) {
    return {
      zh: endPunct(why.zh, true),
      en: endPunct(why.en, false)
    };
  }
  return {
    zh: endPunct(normalizeText(mc?.explainWhyZh || entry?.explain), true),
    en: endPunct(normalizeText(mc?.explainWhyEn || entry?.explainEn), false)
  };
}

const livingF2Entries = [
  {
    title: "植物細胞有細胞壁",
    titleEn: "Plant Cells Have a Cell Wall",
    explain: "植物細胞外有細胞壁，主要由纖維素構成；動物細胞一般沒有細胞壁。",
    explainEn: "Plant cells have a cell wall outside, mainly cellulose; animal cells usually do not.",
    mc: mcInc(
      "下列關於植物細胞的叙述，哪一項不正確？",
      "Which statement about plant cells is incorrect?",
      "根尖和表皮細胞也含有葉綠體。",
      "Root tip and epidermal cells also contain chloroplasts.",
      "植物細胞有細胞壁。",
      "Plant cells have a cell wall.",
      "動物細胞一般沒有細胞壁。",
      "Animal cells usually do not have a cell wall.",
      "細胞壁主要由纖維素構成。",
      "The cell wall is mainly made of cellulose."
    )
  },
  {
    title: "細胞核控制細胞活動",
    titleEn: "The Nucleus Controls Cell Activities",
    explain: "細胞核內有遺傳物質，控制細胞的生長和活動；可在顯微鏡下觀察到。",
    explainEn: "The nucleus contains genetic material and controls cell activities; it can be seen under a microscope.",
    mc: mcInc(
      "下列關於細胞核的叙述，哪一項不正確？",
      "Which statement about the nucleus is incorrect?",
      "細胞核主要負責儲存細胞所需的養分。",
      "The nucleus mainly stores nutrients needed by the cell.",
      "細胞核內有遺傳物質。",
      "The nucleus contains genetic material.",
      "細胞核控制細胞的生長和活動。",
      "The nucleus controls growth and activities of the cell.",
      "細胞核可在顯微鏡下觀察。",
      "The nucleus can be seen under a microscope."
    )
  },
  {
    title: "消化在消化道進行",
    titleEn: "Digestion Takes Place in the Digestive System",
    explain: "食物在口腔、胃、小腸等消化道內被消化，養分主要在小腸吸收。",
    explainEn: "Food is digested in the mouth, stomach and small intestine; nutrients are mainly absorbed in the small intestine.",
    mc: mcInc(
      "下列關於消化的叙述，哪一項不正確？",
      "Which statement about digestion is incorrect?",
      "胃是吸收大部分養分的主要器官。",
      "The stomach is the main organ that absorbs most nutrients.",
      "食物在口腔開始被消化。",
      "Digestion begins in the mouth.",
      "小腸吸收大部分養分。",
      "The small intestine absorbs most nutrients.",
      "胃參與食物的消化。",
      "The stomach helps digest food."
    )
  },
  {
    title: "消化酶分解食物",
    titleEn: "Digestive Enzymes Break Down Food",
    explain: "酶能把澱粉、蛋白質、脂肪等大分子分解成較小、易吸收的物質。",
    explainEn: "Enzymes break starch, protein and fats into smaller, absorbable substances.",
    mc: mcInc(
      "下列關於消化酶的叙述，哪一項不正確？",
      "Which statement about digestive enzymes is incorrect?",
      "消化酶在小腸把澱粉直接合成蛋白質供吸收。",
      "In the small intestine, enzymes build protein directly from starch for absorption.",
      "消化酶把大分子食物分解。",
      "Digestive enzymes break down large food molecules.",
      "澱粉酶與澱粉的消化有關。",
      "Amylase is related to starch digestion.",
      "酶在小腸仍可以作用。",
      "Enzymes can work in the small intestine."
    )
  },
  {
    title: "肺泡進行氣體交換",
    titleEn: "Gas Exchange Occurs in the Alveoli",
    explain: "肺泡壁很薄，外有毛細血管，氧氣進入血液，二氧化碳則排出。",
    explainEn: "Alveoli have thin walls and nearby capillaries; oxygen enters the blood and carbon dioxide leaves.",
    mc: mcInc(
      "下列關於呼吸系統的叙述，哪一項不正確？",
      "Which statement about the breathing system is incorrect?",
      "肺泡壁愈厚，氣體交換愈快。",
      "The thicker the alveoli walls, the faster gas exchange.",
      "肺泡是氣體交換的主要地方。",
      "Alveoli are the main place for gas exchange.",
      "氧氣可經肺泡進入血液。",
      "Oxygen can enter the blood through alveoli.",
      "人體需要排出二氧化碳。",
      "The body needs to remove carbon dioxide."
    )
  },
  {
    title: "光合作用需要光",
    titleEn: "Photosynthesis Needs Light",
    explain: "綠色植物在光下用二氧化碳和水製造葡萄糖，並釋出氧氣。",
    explainEn: "Green plants use carbon dioxide and water in light to make glucose and release oxygen.",
    mc: mcInc(
      "下列關於光合作用的叙述，哪一項不正確？",
      "Which statement about photosynthesis is incorrect?",
      "光合作用在夜間進行得比白天更旺盛。",
      "Photosynthesis is more active at night than in daytime.",
      "光合作用需要光能。",
      "Photosynthesis needs light energy.",
      "光合作用需要二氧化碳和水。",
      "Photosynthesis needs carbon dioxide and water.",
      "光合作用可釋出氧氣。",
      "Photosynthesis can release oxygen."
    )
  },
  {
    title: "食物鏈顯示能量流向",
    titleEn: "Food Chains Show Energy Flow",
    explain: "能量沿食物鏈傳遞時會散失，所以高層消費者通常較少。",
    explainEn: "Energy is lost along a food chain, so there are usually fewer top consumers.",
    mc: mcInc(
      "下列關於食物鏈的叙述，哪一項不正確？",
      "Which statement about food chains is incorrect?",
      "能量由低層傳到高層時，大部分可保留給下一層利用。",
      "Most energy can be kept for the next level when moving up a food chain.",
      "食物鏈顯示生物之間的吃與被吃關係。",
      "A food chain shows feeding relationships.",
      "生產者通常是食物鏈的起點。",
      "Producers are usually at the start of a food chain.",
      "傳遞過程中能量會散失。",
      "Energy is lost during transfer."
    )
  },
  {
    title: "綠色植物是生產者",
    titleEn: "Green Plants Are Producers",
    explain: "生產者能進行光合作用，把光能變成化學能，是生態系能量的起點。",
    explainEn: "Producers photosynthesise and store light energy as chemical energy; they start energy flow in ecosystems.",
    mc: mcInc(
      "下列關於生產者的叙述，哪一項不正確？",
      "Which statement about producers is incorrect?",
      "生產者以其他生物為食，取得所需能量。",
      "Producers feed on other organisms to obtain energy.",
      "綠色植物能進行光合作用。",
      "Green plants can carry out photosynthesis.",
      "生產者把光能變成化學能。",
      "Producers change light energy into chemical energy.",
      "生產者是生態系能量的起點。",
      "Producers are the starting point of energy in ecosystems."
    )
  },
  {
    title: "部分細菌對人有益",
    titleEn: "Some Bacteria Are Useful to Humans",
    explain: "例如腸道益菌可幫助消化；製造乳酪、泡菜等也會用到細菌。",
    explainEn: "For example, gut bacteria aid digestion; bacteria are also used to make yoghurt and pickles.",
    mc: mcInc(
      "下列關於細菌的叙述，哪一項不正確？",
      "Which statement about bacteria is incorrect?",
      "製造泡菜主要靠鹽分滲透，與微生物無關。",
      "Making pickles mainly depends on salt, not microbes.",
      "有些細菌對人體有益。",
      "Some bacteria are helpful to humans.",
      "腸道內有些細菌可幫助消化。",
      "Some gut bacteria aid digestion.",
      "細菌可用於製造乳酪。",
      "Bacteria can be used to make yoghurt."
    )
  },
  {
    title: "病毒要寄生活細胞",
    titleEn: "Viruses Need Living Host Cells",
    explain: "病毒沒有完整細胞結構，要進入活細胞內才能複製。",
    explainEn: "Viruses are not full cells and must enter living cells to reproduce.",
    mc: mcInc(
      "下列關於病毒的叙述，哪一項不正確？",
      "Which statement about viruses is incorrect?",
      "抗生素能破壞病毒的細胞壁，從而治療感冒。",
      "Antibiotics break down the cell wall of viruses to treat colds.",
      "病毒要在活細胞內才能複製。",
      "Viruses must reproduce inside living cells.",
      "病毒沒有完整細胞結構。",
      "Viruses do not have a full cell structure.",
      "病毒不能獨立完成一般細胞的所有生命活動。",
      "Viruses cannot carry out all life processes of a normal cell on their own."
    )
  },
  {
    title: "均衡飲食有益健康",
    titleEn: "A Balanced Diet Is Good for Health",
    explain: "日常飲食應包含碳水化合物、蛋白質、脂肪、維生素和礦物質，份量適中。",
    explainEn: "Daily meals should include carbohydrates, protein, fats, vitamins and minerals in suitable amounts.",
    mc: mcInc(
      "下列關於飲食的叙述，哪一項不正確？",
      "Which statement about diet is incorrect?",
      "每天進食足夠蛋白質，已可提供身體所需的各類營養素。",
      "Enough protein each day already provides all nutrients the body needs.",
      "均衡飲食包含不同種類的食物。",
      "A balanced diet includes different types of food.",
      "飲食應包含維生素和礦物質。",
      "Diet should include vitamins and minerals.",
      "飲食份量要適中。",
      "Amounts of food should be suitable."
    )
  },
  {
    title: "吸煙損害肺部",
    titleEn: "Smoking Harms the Lungs",
    explain: "煙草煙含有害物質，會損害肺泡和氣道。",
    explainEn: "Tobacco smoke contains harmful chemicals that damage alveoli and airways.",
    mc: mcInc(
      "下列關於吸煙的叙述，哪一項不正確？",
      "Which statement about smoking is incorrect?",
      "吸入二手煙主要影響牙齒，對肺的影響很小。",
      "Second-hand smoke mainly affects teeth, with little effect on the lungs.",
      "吸煙會損害肺泡和氣道。",
      "Smoking damages alveoli and airways.",
      "煙草煙含有害物質。",
      "Tobacco smoke contains harmful chemicals.",
      "吸煙增加患肺病風險。",
      "Smoking increases the risk of lung disease."
    )
  },
  {
    title: "抗生素治細菌感染",
    titleEn: "Antibiotics Treat Bacterial Infections",
    explain: "抗生素用於治療細菌感染；普通感冒多由病毒引起，不應濫用。",
    explainEn: "Antibiotics treat bacterial infections; common colds are often viral, so they should not be misused.",
    mc: mcInc(
      "下列關於抗生素的叙述，哪一項不正確？",
      "Which statement about antibiotics is incorrect?",
      "普通感冒可服用抗生素，有助縮短病程。",
      "Antibiotics can be taken for a common cold to shorten the illness.",
      "抗生素主要用於治療細菌感染。",
      "Antibiotics are mainly used for bacterial infections.",
      "濫用抗生素可能產生抗藥性細菌。",
      "Misuse of antibiotics may lead to resistant bacteria.",
      "抗生素不能治療所有疾病。",
      "Antibiotics cannot treat all illnesses."
    )
  },
  {
    title: "顯微鏡觀察細胞",
    titleEn: "Using a Microscope to Observe Cells",
    explain: "用顯微鏡可看到細胞核、細胞質等，方便比較植物細胞和動物細胞。",
    explainEn: "A microscope shows the nucleus, cytoplasm and more, helping compare plant and animal cells.",
    mc: mcInc(
      "下列關於顯微鏡的叙述，哪一項不正確？",
      "Which statement about microscopes is incorrect?",
      "放上玻片後，細胞影像通常已清晰，可不再調節準焦螺旋。",
      "After placing the slide, the image is usually clear without adjusting focus.",
      "顯微鏡可幫助觀察細胞結構。",
      "A microscope helps observe cell structures.",
      "顯微鏡可看到細胞核。",
      "A nucleus can be seen with a microscope.",
      "顯微鏡有助比較不同細胞。",
      "A microscope helps compare different cells."
    )
  },
  {
    title: "分解者分解遺體",
    titleEn: "Decomposers Break Down Dead Remains",
    explain: "細菌和真菌等分解者分解遺體，把養分送回環境。",
    explainEn: "Bacteria and fungi break down dead remains and return nutrients to the environment.",
    mc: mcInc(
      "下列關於分解者的叙述，哪一項不正確？",
      "Which statement about decomposers is incorrect?",
      "分解者通常是食物鏈的第一個營養級。",
      "Decomposers are usually the first trophic level in a food chain.",
      "分解者分解動植物遺體。",
      "Decomposers break down dead plants and animals.",
      "分解者把養分送回環境。",
      "Decomposers return nutrients to the environment.",
      "細菌和真菌可作分解者。",
      "Bacteria and fungi can be decomposers."
    )
  }
];

const matterF2Entries = [
  {
    title: "粒子排列與物態",
    titleEn: "Particle Arrangement and States of Matter",
    explain: "固體粒子排列最密；液體可流動；氣體粒子最疏。",
    explainEn: "Particles are closest in solids; liquids flow; gas particles are far apart.",
    mc: mcInc(
      "下列關於物質三態的叙述，哪一項不正確？",
      "Which statement about states of matter is incorrect?",
      "固體粒子排列緊密，因此固體沒有固定形狀。",
      "Particles in solids are close, so solids have no fixed shape.",
      "固體粒子排列比氣體密。",
      "Particles in solids are closer together than in gases.",
      "液體粒子可移動，液體可流動。",
      "Particles in liquids can move and liquids can flow.",
      "氣體粒子排列最疏。",
      "Gas particles are farthest apart."
    )
  },
  {
    title: "熔化屬物理變化",
    titleEn: "Melting Is a Physical Change",
    explain: "冰熔化成水只改變狀態，沒有新物質生成。",
    explainEn: "Ice melting to water only changes state; no new substance forms.",
    mc: mcInc(
      "下列關於熔化的叙述，哪一項不正確？",
      "Which statement about melting is incorrect?",
      "冰熔化屬於化學變化，因為產生了水。",
      "Melting ice is a chemical change because water is produced.",
      "冰熔化成水屬物理變化。",
      "Ice melting to water is a physical change.",
      "熔化時吸收能量。",
      "Energy is absorbed during melting.",
      "熔化只改變物質的狀態。",
      "Melting only changes the state of matter."
    )
  },
  {
    title: "過濾分離不溶物",
    titleEn: "Filtration Separates Insoluble Solids",
    explain: "過濾可把不溶於水的固體與水分開。",
    explainEn: "Filtration separates insoluble solids from water.",
    mc: mcInc(
      "下列關於分離方法的叙述，哪一項不正確？",
      "Which statement about separation methods is incorrect?",
      "過濾可把已溶解在水中的食鹽分離出來。",
      "Filtration can separate salt that has dissolved in water.",
      "過濾可分离不溶於水的固體。",
      "Filtration can separate solids insoluble in water.",
      "濾紙可留住較大的固體顆粒。",
      "Filter paper can trap larger solid particles.",
      "泥沙水可用過濾處理。",
      "Muddy water can be treated by filtration."
    )
  },
  {
    title: "pH值表示酸鹼性",
    titleEn: "pH Shows Acidity or Alkalinity",
    explain: "pH 小於 7 為酸性，等於 7 為中性，大於 7 為鹼性。",
    explainEn: "pH below 7 is acidic, 7 is neutral, above 7 is alkaline.",
    mc: mcInc(
      "下列關於 pH 值的叙述，哪一項不正確？",
      "Which statement about pH is incorrect?",
      "pH 值越大，表示酸性越強。",
      "The higher the pH, the stronger the acid.",
      "pH 等於 7 的溶液呈中性。",
      "A solution with pH 7 is neutral.",
      "pH 小於 7 的溶液呈酸性。",
      "A solution with pH below 7 is acidic.",
      "可用 pH 試紙粗略測量 pH。",
      "pH paper can be used to measure pH roughly."
    )
  },
  {
    title: "石蕊試紙測酸鹼",
    titleEn: "Litmus Paper Tests Acids and Alkalis",
    explain: "藍色石蕊紙遇酸變紅；紅色石蕊紙遇鹼變藍。",
    explainEn: "Blue litmus turns red in acid; red litmus turns blue in alkali.",
    mc: mcInc(
      "下列關於石蕊試紙的叙述，哪一項不正確？",
      "Which statement about litmus paper is incorrect?",
      "把紅色石蕊紙放入稀酸溶液，紙會變藍色。",
      "Red litmus paper turns blue in dilute acid.",
      "藍色石蕊紙遇酸變紅。",
      "Blue litmus turns red in acid.",
      "紅色石蕊紙遇鹼變藍。",
      "Red litmus turns blue in alkali.",
      "石蕊試紙可粗略檢驗酸鹼性。",
      "Litmus paper can test acidity or alkalinity roughly."
    )
  },
  {
    title: "酸鹼中和生鹽和水",
    titleEn: "Acid–Alkali Neutralisation Gives Salt and Water",
    explain: "酸和鹼中和會生成鹽和水。",
    explainEn: "Acids and alkalis neutralise to form salt and water.",
    mc: mcInc(
      "下列關於酸鹼中和的叙述，哪一項不正確？",
      "Which statement about neutralisation is incorrect?",
      "酸和鹼中和後生成鹽，但不會產生水。",
      "Neutralisation forms a salt but does not produce water.",
      "酸和鹼中和會生成鹽。",
      "Neutralisation forms a salt.",
      "酸和鹼中和會生成水。",
      "Neutralisation forms water.",
      "中和反應屬於化學變化。",
      "Neutralisation is a chemical change."
    )
  },
  {
    title: "空氣含氧氣和氮氣",
    titleEn: "Air Contains Oxygen and Nitrogen",
    explain: "乾燥空氣中，氧氣約佔 21%，氮氣約佔 78%。",
    explainEn: "In dry air, oxygen is about 21%, nitrogen about 78%.",
    mc: mcInc(
      "下列關於空氣成分的叙述，哪一項不正確？",
      "Which statement about the composition of air is incorrect?",
      "乾燥空氣中氧氣約佔 78%。",
      "Oxygen makes up about 78% of dry air.",
      "空氣中氮氣比氧氣多。",
      "There is more nitrogen than oxygen in air.",
      "空氣中含有氧氣。",
      "Air contains oxygen.",
      "空氣中含有氮氣。",
      "Air contains nitrogen."
    )
  },
  {
    title: "鐵生鏽需氧和水",
    titleEn: "Iron Rusting Needs Oxygen and Water",
    explain: "鐵生鏽需要氧和水；塗油可減慢生鏽。",
    explainEn: "Rusting needs oxygen and water; oiling slows rusting.",
    mc: mcInc(
      "下列關於鐵生鏽的叙述，哪一項不正確？",
      "Which statement about rusting is incorrect?",
      "鐵生鏽主要是鐵與水發生反應，與空氣無關。",
      "Rusting is mainly iron reacting with water, not with air.",
      "鐵生鏽是化學變化。",
      "Rusting is a chemical change.",
      "潮濕環境較易令鐵生鏽。",
      "Iron rusts more easily in moist conditions.",
      "塗油有助減慢生鏽。",
      "Oiling helps slow down rusting."
    )
  },
  {
    title: "溶液有溶質和溶劑",
    titleEn: "Solutions Have a Solute and a Solvent",
    explain: "溶質溶解在溶劑中；食鹽溶於水時，食鹽是溶質，水是溶劑。",
    explainEn: "The solute dissolves in the solvent; for salt in water, salt is the solute and water the solvent.",
    mc: mcInc(
      "下列關於溶液的叙述，哪一項不正確？",
      "Which statement about solutions is incorrect?",
      "食鹽溶於水時，水是溶質，食鹽是溶劑。",
      "When salt dissolves in water, water is the solute and salt is the solvent.",
      "溶液由溶質和溶劑組成。",
      "A solution is made of a solute and a solvent.",
      "溶質溶解在溶劑中。",
      "The solute dissolves in the solvent.",
      "食鹽水是一種溶液。",
      "Salt water is a solution."
    )
  },
  {
    title: "密度是質量除體積",
    titleEn: "Density Is Mass Divided by Volume",
    explain: "密度＝質量÷體積；比較密度時要注意體積是否相同。",
    explainEn: "Density = mass ÷ volume; compare density with care about volume.",
    mc: mcInc(
      "下列關於密度的叙述，哪一項不正確？",
      "Which statement about density is incorrect?",
      "比較兩件物體時，密度較大者質量較大（不須考慮體積）。",
      "When comparing two objects, the denser one has greater mass (volume need not be considered).",
      "密度＝質量÷體積。",
      "Density = mass ÷ volume.",
      "同體積下，密度較大的物質通常較重。",
      "At the same volume, a denser substance is usually heavier.",
      "密度是物質的性質之一。",
      "Density is a property of a substance."
    )
  },
  {
    title: "金屬易導熱",
    titleEn: "Metals Conduct Heat Well",
    explain: "金屬是良導熱體，常用於煮食鍋具。",
    explainEn: "Metals conduct heat well and are used in cooking pans.",
    mc: mcInc(
      "下列關於導熱的叙述，哪一項不正確？",
      "Which statement about heat conduction is incorrect?",
      "煮食鍋外層包玻璃纖維，可使熱量更快傳到食物。",
      "Wrapping a pan in fibreglass helps heat reach food faster.",
      "金屬是良導熱體。",
      "Metals are good conductors of heat.",
      "鐵或鋁常用於製造鍋具。",
      "Iron or aluminium is often used to make pans.",
      "塑膠一般較不易導熱。",
      "Plastics generally do not conduct heat well."
    )
  },
  {
    title: "二氧化碳使石灰水變混濁",
    titleEn: "Carbon Dioxide Turns Limewater Cloudy",
    explain: "二氧化碳通入澄清石灰水會變混濁，常用作檢驗二氧化碳。",
    explainEn: "Carbon dioxide turns clear limewater cloudy; this tests for CO₂.",
    mc: mcInc(
      "下列關於二氧化碳的叙述，哪一項不正確？",
      "Which statement about carbon dioxide is incorrect?",
      "二氧化碳通入澄清石灰水後，溶液顏色會變深。",
      "After carbon dioxide is bubbled through limewater, the solution becomes darker.",
      "二氧化碳通入石灰水常見變混濁。",
      "Limewater often turns cloudy with carbon dioxide.",
      "此反應常用作檢驗二氧化碳。",
      "This reaction is often used to test for carbon dioxide.",
      "反應會生成白色沉澱。",
      "A white precipitate is formed."
    )
  },
  {
    title: "蒸發受溫度影響",
    titleEn: "Evaporation Is Affected by Temperature",
    explain: "溫度較高、通風較好時，液體通常蒸發得較快。",
    explainEn: "Liquids usually evaporate faster when warmer and in better air flow.",
    mc: mcInc(
      "下列關於蒸發的叙述，哪一項不正確？",
      "Which statement about evaporation is incorrect?",
      "濕毛巾在室溫變乾，主要是因為液體達到沸點而沸騰。",
      "A wet towel drying at room temperature is mainly due to boiling at the boiling point.",
      "溫度較高時蒸發通常較快。",
      "Evaporation is usually faster at higher temperature.",
      "通風較好時衣服較易乾。",
      "Clothes dry more easily in good air flow.",
      "蒸發可在沸點以下發生。",
      "Evaporation can happen below boiling point."
    )
  },
  {
    title: "蒸餾可分離清水",
    titleEn: "Distillation Can Obtain Pure Water",
    explain: "蒸餾可把海水中的水與鹽分離。",
    explainEn: "Distillation can separate water from salt in seawater.",
    mc: mcInc(
      "下列關於分離鹽水的叙述，哪一項不正確？",
      "Which statement about separating salt water is incorrect?",
      "把海水靜置一段時間，鹽分會沉澱，水便可飲用。",
      "If seawater is left to stand, salt settles and the water becomes drinkable.",
      "蒸餾可從鹽水取得較純的水。",
      "Distillation can obtain purer water from salt water.",
      "蒸餾利用沸點不同分離物質。",
      "Distillation uses different boiling points.",
      "食鹽溶於水後不能用過濾除去溶解的鹽。",
      "Dissolved salt cannot be removed from salt water by filtration alone."
    )
  },
  {
    title: "化學變化生成新物質",
    titleEn: "Chemical Changes Form New Substances",
    explain: "鐵生鏽、鎂帶燃燒等會生成新物質。",
    explainEn: "Iron rusting and magnesium burning form new substances.",
    mc: mcInc(
      "下列關於物質變化的叙述，哪一項不正確？",
      "Which statement about changes of matter is incorrect?",
      "糖溶於水生成新物質，因此屬於化學變化。",
      "Dissolving sugar forms a new substance, so it is a chemical change.",
      "鐵生鏽屬於化學變化。",
      "Rusting is a chemical change.",
      "冰熔化成水屬於物理變化。",
      "Ice melting is a physical change.",
      "鎂帶燃燒生成新物質。",
      "Burning magnesium forms new substances."
    )
  }
];

const energyF2Entries = [
  {
    title: "能量會轉換形式",
    titleEn: "Energy Changes Form",
    explain: "能量守恆：能量只會轉換形式，不會無故消失。",
    explainEn: "Energy is conserved: it only changes form and is not created or destroyed.",
    mc: mcInc(
      "下列關於能量的叙述，哪一項不正確？",
      "Which statement about energy is incorrect?",
      "電燈發光時，電能全部變成光能，不會產生熱。",
      "When a lamp lights up, all electrical energy becomes light with no heat.",
      "能量可由一種形式轉成另一種。",
      "Energy can change from one form to another.",
      "電燈可把電能轉成光能和熱能。",
      "A lamp can change electrical energy to light and heat.",
      "能量守恆表示能量不會無故產生。",
      "Conservation of energy means energy is not created from nothing."
    )
  },
  {
    title: "傳導在固體較明顯",
    titleEn: "Conduction Is Clear in Solids",
    explain: "傳導是粒子碰撞傳遞能量；金屬勺在熱湯中變熱是例子。",
    explainEn: "Conduction passes energy by collisions; a metal spoon in hot soup is an example.",
    mc: mcInc(
      "下列關於傳導的叙述，哪一項不正確？",
      "Which statement about conduction is incorrect?",
      "傳導是熱量隨流體流動而傳遞的方式。",
      "Conduction is heat transfer by the movement of fluids.",
      "金屬勺放在熱湯中會變熱。",
      "A metal spoon in hot soup gets warm.",
      "傳導需要粒子碰撞傳遞能量。",
      "Conduction transfers energy by particle collisions.",
      "固體中傳導較明顯。",
      "Conduction is clearer in solids."
    )
  },
  {
    title: "對流在流體中發生",
    titleEn: "Convection Happens in Fluids",
    explain: "液體或氣體受熱上升、較冷下沉，形成對流。",
    explainEn: "Heated fluid rises and cooler fluid sinks, setting up convection.",
    mc: mcInc(
      "下列關於對流的叙述，哪一項不正確？",
      "Which statement about convection is incorrect?",
      "對流主要在固體中發生。",
      "Convection mainly happens in solids.",
      "煮水時熱水上升、冷水下沉。",
      "Hot water rises and cold water sinks when heating water.",
      "對流可在液體中發生。",
      "Convection can occur in liquids.",
      "對流可在氣體中發生。",
      "Convection can occur in gases."
    )
  },
  {
    title: "輻射不需介質",
    titleEn: "Radiation Does Not Need a Medium",
    explain: "太陽的熱穿過太空到地球，主要靠輻射。",
    explainEn: "The Sun's heat reaches Earth through space mainly by radiation.",
    mc: mcInc(
      "下列關於熱轉移的叙述，哪一項不正確？",
      "Which statement about heat transfer is incorrect?",
      "太陽的熱到達地球主要靠空氣對流。",
      "Heat from the Sun mainly reaches Earth by convection of air.",
      "輻射不需要介質也能傳熱。",
      "Radiation can transfer heat without a medium.",
      "太陽光可穿過太空傳到地球。",
      "Sunlight can travel through space to Earth.",
      "靠近火堆感到熱，部分來自輻射。",
      "Feeling heat near a fire is partly due to radiation."
    )
  },
  {
    title: "保溫物料減慢傳熱",
    titleEn: "Insulators Slow Down Heat Transfer",
    explain: "泡沫等保溫物料含大量空氣，可減慢熱傳遞。",
    explainEn: "Insulators like foam trap air and slow down heat transfer.",
    mc: mcInc(
      "下列關於保溫的叙述，哪一項不正確？",
      "Which statement about insulation is incorrect?",
      "保溫杯外層的泡沫塑料可把熱量快速傳入杯內。",
      "Foam on a flask helps heat move quickly into the drink inside.",
      "保溫物料可減慢熱傳遞。",
      "Insulating materials slow down heat transfer.",
      "泡沫含大量空氣，不易導熱。",
      "Foam traps air and does not conduct heat well.",
      "保溫杯有助保持飲品溫度。",
      "A vacuum flask helps keep drinks warm or cool."
    )
  },
  {
    title: "串聯電流相同",
    titleEn: "Current Is the Same in a Series Circuit",
    explain: "串聯電路只有一條路徑，各處電流相同。",
    explainEn: "A series circuit has one path, so current is the same everywhere.",
    mc: mcInc(
      "下列關於串聯電路的叙述，哪一項不正確？",
      "Which statement about a series circuit is incorrect?",
      "串聯電路中，通過各燈泡的電壓相同。",
      "In a series circuit, the voltage through each lamp is the same.",
      "串聯電路只有一條電流通路。",
      "A series circuit has only one current path.",
      "通過各元件的電流相同。",
      "The current through each component is the same.",
      "燈泡串聯時電流處處相等。",
      "Current is the same at all points in series."
    )
  },
  {
    title: "並聯各支路電壓相同",
    titleEn: "Voltage Is the Same Across Parallel Branches",
    explain: "並聯時各支路兩端電壓相同。",
    explainEn: "In parallel, the voltage across each branch is the same.",
    mc: mcInc(
      "下列關於並聯電路的叙述，哪一項不正確？",
      "Which statement about a parallel circuit is incorrect?",
      "並聯電路中，總電流等於其中一條支路的電流。",
      "In a parallel circuit, the total current equals the current in one branch.",
      "並聯各支路兩端電壓相同。",
      "The voltage across each parallel branch is the same.",
      "並聯可增加電流通路數目。",
      "Parallel connection increases the number of current paths.",
      "一盞燈壞了，其他並聯燈仍可亮。",
      "If one lamp breaks, other parallel lamps may still light."
    )
  },
  {
    title: "保險絲保護電路",
    titleEn: "Fuses Protect Circuits",
    explain: "電流過大時保險絲熔斷，切斷電路。",
    explainEn: "When current is too high, the fuse melts and breaks the circuit.",
    mc: mcInc(
      "下列關於保險絲的叙述，哪一項不正確？",
      "Which statement about a fuse is incorrect?",
      "保險絲可把過大的電流穩定在較高水平。",
      "A fuse keeps an excessively large current at a higher stable level.",
      "電流過大時保險絲可熔斷。",
      "A fuse can melt when current is too high.",
      "保險絲熔斷可切斷電路。",
      "A melted fuse breaks the circuit.",
      "保險絲有助防止電線過熱。",
      "A fuse helps prevent wires overheating."
    )
  },
  {
    title: "金屬是良導體",
    titleEn: "Metals Are Good Conductors",
    explain: "銅、鋁常用作電線導體；橡膠、塑膠用作絕緣。",
    explainEn: "Copper and aluminium are used in wires; rubber and plastic insulate.",
    mc: mcInc(
      "下列關於導電的叙述，哪一項不正確？",
      "Which statement about electrical conduction is incorrect?",
      "電線內層用銅，外層也用銅作絕緣。",
      "The inner part of a wire is copper and the outer insulation is also copper.",
      "銅是良導體。",
      "Copper is a good conductor.",
      "橡膠常用作絕緣皮。",
      "Rubber is often used as insulation.",
      "金屬含有可移動的電荷。",
      "Metals contain mobile charges."
    )
  },
  {
    title: "磁鐵有南北極",
    titleEn: "Magnets Have North and South Poles",
    explain: "同極相斥，異極相吸。",
    explainEn: "Like poles repel; unlike poles attract.",
    mc: mcInc(
      "下列關於磁鐵的叙述，哪一項不正確？",
      "Which statement about magnets is incorrect?",
      "異極相斥，同極相吸。",
      "Unlike poles repel; like poles attract.",
      "磁鐵有南北兩極。",
      "A magnet has north and south poles.",
      "兩個北極互相靠近會排斥。",
      "Two north poles near each other repel.",
      "指南針與地球磁場有關。",
      "A compass is related to Earth's magnetic field."
    )
  },
  {
    title: "力的單位是牛頓",
    titleEn: "The Unit of Force Is the Newton",
    explain: "力的單位是牛頓（N）；力可改變物體的運動或形狀。",
    explainEn: "Force is measured in newtons (N); force can change motion or shape.",
    mc: mcInc(
      "下列關於力的叙述，哪一項不正確？",
      "Which statement about force is incorrect?",
      "力的大小以焦耳（J）為單位。",
      "Force is measured in joules (J).",
      "力的單位是牛頓（N）。",
      "The unit of force is the newton (N).",
      "力可改變物體的運動狀態。",
      "Force can change the motion of an object.",
      "力可改變物體的形狀。",
      "Force can change the shape of an object."
    )
  },
  {
    title: "壓力等於力除面積",
    titleEn: "Pressure Is Force Divided by Area",
    explain: "壓力＝力÷面積；受力面積越小，壓力越大。",
    explainEn: "Pressure = force ÷ area; smaller area gives greater pressure for the same force.",
    mc: mcInc(
      "下列關於壓力的叙述，哪一項不正確？",
      "Which statement about pressure is incorrect?",
      "壓力只與物體重量有關，與受力面積無關。",
      "Pressure depends only on weight, not on the area of contact.",
      "壓力＝力÷面積。",
      "Pressure = force ÷ area.",
      "相同力作用在較小面積上，壓力較大。",
      "The same force on a smaller area gives higher pressure.",
      "壓力與力有關。",
      "Pressure is related to force."
    )
  },
  {
    title: "速度是路程除時間",
    titleEn: "Speed Is Distance Divided by Time",
    explain: "平均速度＝總路程÷總時間。",
    explainEn: "Average speed = total distance ÷ total time.",
    mc: mcInc(
      "汽車 2 小時行駛 100 km，下列哪一項不正確？",
      "A car travels 100 km in 2 hours. Which is incorrect?",
      "平均速度是 200 km/h。",
      "The average speed is 200 km/h.",
      "平均速度是 50 km/h。",
      "The average speed is 50 km/h.",
      "平均速度＝總路程÷總時間。",
      "Average speed = total distance ÷ total time.",
      "行駛時間較長，不一定代表平均速度較大。",
      "A longer time does not always mean a higher average speed."
    )
  },
  {
    title: "摩擦力阻礙運動",
    titleEn: "Friction Opposes Motion",
    explain: "摩擦力阻礙相對運動，但也可幫助我們走路。",
    explainEn: "Friction opposes relative motion but also helps us walk.",
    mc: mcInc(
      "下列關於摩擦力的叙述，哪一項不正確？",
      "Which statement about friction is incorrect?",
      "摩擦力只會減慢物體，對走路沒有幫助。",
      "Friction only slows objects and does not help us walk.",
      "摩擦力會阻礙相對運動。",
      "Friction opposes relative motion.",
      "摩擦力可幫助我們走路時抓地。",
      "Friction helps us grip the ground when walking.",
      "沒有摩擦力，地面會很滑。",
      "Without friction, surfaces would be very slippery."
    )
  },
  {
    title: "光沿直線傳播",
    titleEn: "Light Travels in Straight Lines",
    explain: "光在均勻介質中沿直線傳播，會形成影子。",
    explainEn: "Light travels in straight lines in a uniform medium and forms shadows.",
    mc: mcInc(
      "下列關於光的叙述，哪一項不正確？",
      "Which statement about light is incorrect?",
      "光遇到不透明物體時會繞過，因此不會形成影子。",
      "Light bends around opaque objects, so shadows do not form.",
      "光在均勻介質中沿直線傳播。",
      "Light travels in straight lines in a uniform medium.",
      "光被不透明物體阻擋會形成影子。",
      "Shadows form when light is blocked by opaque objects.",
      "光可在空氣中傳播。",
      "Light can travel in air."
    )
  },
  {
    title: "聲音需要介質",
    titleEn: "Sound Needs a Medium",
    explain: "聲音要靠介質傳遞；真空不能傳聲。",
    explainEn: "Sound needs a medium; it cannot travel in a vacuum.",
    mc: mcInc(
      "下列關於聲音的叙述，哪一項不正確？",
      "Which statement about sound is incorrect?",
      "聲音在真空中傳播較慢，但仍可聽見。",
      "Sound travels more slowly in a vacuum but can still be heard.",
      "聲音由振動產生。",
      "Sound is produced by vibrations.",
      "聲音可在空氣中傳播。",
      "Sound can travel in air.",
      "聲音可在水中傳播。",
      "Sound can travel in water."
    )
  }
];

function normalizeText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim();
}

function endPunct(text, zh) {
  const t = normalizeText(text);
  if (!t) return "";
  if (zh && !/[。．！？]$/u.test(t)) return `${t}。`;
  if (!zh && !/[.!?]$/u.test(t)) return `${t}.`;
  return t;
}

function prepareEntry(raw) {
  const title = normalizeText(raw?.title);
  const titleEn = normalizeText(raw?.titleEn) || title;
  const mc = raw?.mc;
  const { zh: explain, en: explainEn } = explainTextForEntry(
    { title, explain: raw?.explain, explainEn: raw?.explainEn },
    mc
  );

  return {
    title,
    titleEn,
    explain,
    explainEn,
    fact: explain,
    factEn: explainEn,
    mc
  };
}

function prepareEntries(entries) {
  return (Array.isArray(entries) ? entries : []).map(prepareEntry);
}

function standardizeEntriesForReading(entries) {
  return prepareEntries(entries);
}

function hashSeed(text) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffleWithSeed(items, seed) {
  const arr = items.slice();
  let s = seed >>> 0;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    const j = (s >>> 0) % (i + 1);
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

/** Shuffle options; correctIndex marks the incorrect statement to select. */
function buildMcForEntry(entry, pool, index) {
  const custom = entry?.mc;
  if (!custom?.choices?.length >= 4 || !Number.isFinite(custom.correctIndex)) {
    return {
      question: "下列哪一項不正確？",
      questionEn: "Which of the following is incorrect?",
      choices: [
        { zh: "（題庫不完整）", en: "(Incomplete item)" },
        { zh: "（題庫不完整）", en: "(Incomplete item)" },
        { zh: "（題庫不完整）", en: "(Incomplete item)" },
        { zh: "（題庫不完整）", en: "(Incomplete item)" }
      ],
      correctIndex: 0
    };
  }

  const seed = hashSeed(`${entry.title}|mc|${index}`);
  const tagged = custom.choices.map((c, i) => ({
    zh: normalizeText(c.zh),
    en: normalizeText(c.en) || normalizeText(c.zh),
    correct: i === custom.correctIndex
  }));
  const shuffled = shuffleWithSeed(tagged, seed);
  const correctIndex = Math.max(0, shuffled.findIndex((c) => c.correct));

  return {
    question: normalizeText(custom.question) || "下列哪一項不正確？",
    questionEn: normalizeText(custom.questionEn) || "Which of the following is incorrect?",
    choices: shuffled.map((c) => ({ zh: c.zh, en: c.en })),
    correctIndex,
    explainWhyZh: custom.explainWhyZh,
    explainWhyEn: custom.explainWhyEn
  };
}

function enrichEntriesWithMc(entries) {
  const list = Array.isArray(entries) ? entries : [];
  return list.map((entry, index) => {
    const mc = buildMcForEntry(entry, list, index);
    const { zh: explain, en: explainEn } = explainTextForEntry(entry, mc);
    return {
      ...entry,
      mc,
      explain,
      explainEn,
      fact: explain,
      factEn: explainEn
    };
  });
}

const livingF2AllEntries = enrichEntriesWithMc(prepareEntries(livingF2Entries));
const matterF2AllEntries = enrichEntriesWithMc(prepareEntries(matterF2Entries));
const energyF2AllEntries = enrichEntriesWithMc(prepareEntries(energyF2Entries));

window.DAILY_READ_SETS = {
  living_f2: {
    title: "生物（中二綜合科學）",
    titleEn: "Biology (F2 IS)",
    entries: livingF2AllEntries
  },
  matter_f2: {
    title: "物質（中二綜合科學）",
    titleEn: "Matter (F2 IS)",
    entries: matterF2AllEntries
  },
  energy_f2: {
    title: "能量（中二綜合科學）",
    titleEn: "Energy (F2 IS)",
    entries: energyF2AllEntries
  }
};

window.DAILY_READ_ACTIVE_SET = "living_f2";

(() => {
  const fallbackTitle = "每日閱讀";
  const fallbackTitleEn = "Did You Know?";
  const fallbackSet = { title: fallbackTitle, facts: [], entries: [] };
  const sets = window.DAILY_READ_SETS || {};
  const key = window.DAILY_READ_ACTIVE_SET || "living_f2";
  const activeSet = sets[key] || fallbackSet;
  const fallbackEntryTitle = String(activeSet.title || fallbackTitle).trim() || fallbackTitle;
  const fallbackEntryTitleEn = String(activeSet.titleEn || fallbackTitleEn).trim() || fallbackTitleEn;

  const rawEntries = Array.isArray(activeSet.entries)
    ? activeSet.entries
    : (Array.isArray(activeSet.facts) ? activeSet.facts : []).map((fact) => ({
        title: fallbackEntryTitle,
        titleEn: fallbackEntryTitleEn,
        fact
      }));

  const cleanEntries = rawEntries
    .map((entry) => {
      if (entry && typeof entry === "object") {
        const prepared = prepareEntry(entry);
        return prepared.explain
          ? {
              title: prepared.title,
              titleEn: prepared.titleEn,
              explain: prepared.explain,
              explainEn: prepared.explainEn,
              fact: prepared.explain,
              factEn: prepared.explainEn,
              mc: entry.mc
            }
          : null;
      }
      const fact = String(entry || "").trim();
      return fact
        ? { title: fallbackEntryTitle, titleEn: fallbackEntryTitleEn, explain: fact, factEn: "" }
        : null;
    })
    .filter(Boolean);

  window.DAILY_READ_ENTRIES = enrichEntriesWithMc(prepareEntries(cleanEntries));
  window.DAILY_READ_FACTS = window.DAILY_READ_ENTRIES.map((entry) => entry.explain || entry.fact);
  window.DAILY_READ_TITLE = window.DAILY_READ_ENTRIES[0]?.title || fallbackEntryTitle;
})();

window.enrichDailyReadEntriesWithMc = enrichEntriesWithMc;
window.prepareDailyReadEntriesForReading = prepareEntries;
window.standardizeDailyReadEntriesForReading = standardizeEntriesForReading;
