const sportsKs3Entries = [
  {
    title: "熱身能讓表現更穩定",
    titleEn: "Warm-Ups Help Performance Stay Stable",
    fact: "運動前做動態熱身，例如高抬腿、開合跳和短距離加速，可以提升肌肉溫度與神經反應。這不只讓起跑更順，也能降低拉傷風險。",
    factEn: "A dynamic warm-up before sport, such as high knees, jumping jacks, and short accelerations, raises muscle temperature and reaction readiness. It improves movement quality and helps reduce strain injuries."
  },
  {
    title: "接力最快不只靠跑得快",
    titleEn: "Relay Speed Is Not Only About Sprinting Fast",
    fact: "接力常輸在交棒節奏，而不只是個人速度。只要口令、起跑點和手部位置不一致，就容易浪費時間。穩定交棒往往比單棒爆發更重要。",
    factEn: "Relays are often lost through poor baton exchange rather than individual speed. If calls, take-off marks, and hand position are inconsistent, time is lost quickly. Smooth exchanges usually matter more than one fast runner."
  },
  {
    title: "跑步步頻比步幅更容易調整",
    titleEn: "Cadence Is Easier to Adjust Than Stride Length",
    fact: "很多初學者會使用過大的步幅，導致落地時阻力感變強。先微調步頻，讓步伐更輕更連續，通常能提升效率，也較不容易讓膝蓋過度受力。",
    factEn: "Many beginners overstride, which increases braking on each landing. Slightly increasing cadence often makes running lighter and smoother, improving efficiency and reducing excessive knee loading."
  },
  {
    title: "運動後30分鐘是補給黃金期",
    titleEn: "The First 30 Minutes After Exercise Are Key for Refuelling",
    fact: "運動後盡快補水，並補充碳水與蛋白質，有助肌肉修復和能量回補。若長時間不補給，恢復速度通常會變慢。",
    factEn: "Rehydrating soon after exercise and taking in carbohydrates plus protein supports muscle repair and energy recovery. If refuelling is delayed for too long, recovery is usually slower."
  },
  {
    title: "睡眠是訓練的一部分",
    titleEn: "Sleep Is Part of Training",
    fact: "睡眠不足會影響反應、專注和情緒，也會提高受傷風險。規律睡眠能幫助身體完成修復，其重要性不亞於一次高品質訓練。",
    factEn: "Lack of sleep affects reaction time, focus, and mood, and can increase injury risk. Consistent sleep helps the body complete repair and adaptation, and is as important as a quality training session."
  },
  {
    title: "喝水太晚會影響表現",
    titleEn: "Hydrating Too Late Can Hurt Performance",
    fact: "等到口渴才喝水通常已經偏脫水。運動前先補充少量水分、運動中分次喝，能讓體溫調節和耐力表現更穩定。",
    factEn: "If you wait until you feel thirsty, mild dehydration may already have started. Taking small amounts before and during exercise helps temperature control and keeps endurance steadier."
  },
  {
    title: "比賽緊張是正常生理反應",
    titleEn: "Pre-Race Nerves Are a Normal Body Response",
    fact: "心跳變快不一定是壞事，代表身體正在準備輸出。若用固定呼吸節奏和熱身流程，通常能把緊張轉成專注。",
    factEn: "A faster heartbeat before a race is not always bad; it often means the body is preparing to perform. A consistent breathing rhythm and warm-up routine can turn nerves into focus."
  },
  {
    title: "短跑與長跑用力方式不同",
    titleEn: "Sprinting and Distance Running Use Different Effort Patterns",
    fact: "短跑重視爆發與加速，長跑重視節奏與配速。若把短跑節奏套用在長跑，前段可能很快，但後段容易明顯掉速。",
    factEn: "Sprinting depends on explosive acceleration, while distance running depends on rhythm and pacing. If sprint effort is used in a longer race, the start may be fast but the finish often fades."
  },
  {
    title: "運動科技能幫你看懂疲勞",
    titleEn: "Sports Tech Can Help You Read Fatigue",
    fact: "手錶與感測器可記錄心率、步頻與配速趨勢。重點不是追漂亮數字，而是看自己在不同訓練日是否恢復足夠、節奏是否穩定。",
    factEn: "Watches and sensors can track trends in heart rate, cadence, and pace. The goal is not pretty numbers, but understanding whether recovery is enough and whether your rhythm stays stable across sessions."
  },
  {
    title: "團隊默契可以被訓練",
    titleEn: "Team Chemistry Can Be Trained",
    fact: "像接力或球類防守，很多成功來自固定口令與反覆演練。當流程練成習慣後，在壓力情境下失誤通常會明顯減少。",
    factEn: "In relays and team defence, success often comes from clear calls and repeated rehearsal. When key actions become automatic, mistakes under pressure drop noticeably."
  },
  {
    title: "鞋子要配合項目和場地",
    titleEn: "Shoes Should Match the Event and Surface",
    fact: "短跑、長跑和雨天場地需求不同。選鞋時除了舒適，也要考慮抓地與穩定，避免在轉彎或起跑時打滑。",
    factEn: "Sprinting, distance running, and wet surfaces all require different shoe characteristics. Beyond comfort, traction and stability are crucial for safer starts and turns."
  },
  {
    title: "核心肌群影響跑姿穩定",
    titleEn: "Core Muscles Affect Running Stability",
    fact: "核心與臀部力量不足時，跑步容易左右晃動，效率下降。加入橋式、平板撐等基礎訓練，能改善姿勢控制與落地穩定。",
    factEn: "When core and glute strength are weak, running often becomes less stable and less efficient. Basic exercises like bridges and planks can improve posture control and landing stability."
  },
  {
    title: "規律訓練比偶爾衝刺更有效",
    titleEn: "Regular Training Beats Occasional Hard Effort",
    fact: "一次過高強度訓練，不如每週穩定練習。固定頻率能讓身體逐步適應，降低受傷機率，也更容易看見持續進步。",
    factEn: "One very hard session is usually less useful than regular weekly training. Consistency allows gradual adaptation, lowers injury risk, and makes long-term progress easier to see."
  },
  {
    title: "公平競賽也是運動能力",
    titleEn: "Fair Play Is Also a Sporting Skill",
    fact: "尊重裁判、遵守規則、勝不驕敗不餒，都是運動教育的重要部分。真正的強者不只比成績，也比態度與責任感。",
    factEn: "Respecting officials, following rules, and handling wins and losses well are core parts of sport education. Strong athletes are judged not only by results, but also by attitude and responsibility."
  },
  {
    title: "每個人進步節奏都不同",
    titleEn: "Everyone Improves at a Different Pace",
    fact: "有些人先快後慢，有些人後來追上。把焦點放在自己的配速、技巧和恢復，比只和別人比較更能累積真正實力。",
    factEn: "Some students improve early, while others catch up later. Focusing on your own pacing, technique, and recovery usually builds stronger long-term ability than constant comparison with others."
  }
];

const spaceKs3Entries = [
  {
    title: "太空不是完全沒有重力",
    titleEn: "Space Is Not Completely Free of Gravity",
    fact: "國際太空站上的太空人看起來像在「無重力」中漂浮，其實他們仍受到地球重力作用，只是太空站與太空人一起持續自由落體，所以才會出現失重感。這也是為什麼物體在艙內會漂浮，而不是因為重力真的消失。",
    factEn: "Astronauts on the International Space Station seem weightless, but Earth's gravity is still acting on them. The station and crew are in continuous free fall together, which creates microgravity. Objects float because everything is falling at the same rate, not because gravity has vanished."
  },
  {
    title: "一天不一定是24小時",
    titleEn: "A Day Is Not Always 24 Hours",
    fact: "地球自轉一圈大約24小時，所以我們習慣一天是24小時；但在金星，一天（自轉週期）比一年（公轉週期）還長。這提醒我們，時間單位在不同天體上會有很大差異，天文中的「一天」其實是相對概念。",
    factEn: "On Earth, one rotation takes about 24 hours, so our day is 24 hours long. On Venus, however, one day (its rotation period) is longer than one year (its orbit around the Sun). This shows that a 'day' depends on the planet, not a universal clock."
  },
  {
    title: "太空中的聲音傳不遠",
    titleEn: "Sound Does Not Travel Far in Space",
    fact: "聲音需要介質（例如空氣）才能傳播，而外太空幾乎是真空，因此太空船外即使發生爆炸，外部也不會像電影那樣有巨大聲響。太空人主要靠無線電通訊，將聲波先轉換成電磁訊號再傳送。",
    factEn: "Sound needs a medium, such as air, to travel. Space is close to a vacuum, so explosions outside a spacecraft would not boom like in films. Astronauts communicate mainly by radio, which converts sound into electromagnetic signals."
  },
  {
    title: "北極星不是最亮的星",
    titleEn: "Polaris Is Not the Brightest Star",
    fact: "很多人以為北極星最亮，但它只是剛好位於地球自轉軸延伸方向附近，能幫助辨認方位。夜空中最亮的恆星其實是天狼星。這也說明天文觀測時，「亮度」與「定位用途」是不同概念。",
    factEn: "Many people think Polaris is the brightest star, but it is mainly useful because it sits near Earth's rotational axis and helps with direction finding. The brightest star in the night sky is Sirius. Brightness and navigational value are different ideas."
  },
  {
    title: "看到星星就是看到過去",
    titleEn: "Seeing Stars Means Seeing the Past",
    fact: "光從遙遠星體傳到地球需要時間，所以我們看見的其實是它「以前」發出的光。太陽光到地球約8分鐘，表示我們看到的是8分鐘前的太陽；更遠的恆星可能是幾十甚至幾千年前的樣子。",
    factEn: "Light takes time to travel, so when we look at stars we are seeing the past. Sunlight reaches Earth in about eight minutes, meaning we see the Sun as it was eight minutes ago. For distant stars, the light can be decades, centuries, or more old."
  },
  {
    title: "月球總是同一面朝向地球",
    titleEn: "The Moon Always Shows the Same Side to Earth",
    fact: "月球自轉一圈所需時間與它繞地球公轉一圈幾乎相同，稱為潮汐鎖定，因此我們在地球上長期看到的是同一面。月球並不是不自轉，而是自轉速度剛好與公轉速度同步。",
    factEn: "The Moon's rotation period is almost the same as its orbital period around Earth. This tidal locking means we usually see the same lunar face. The Moon is rotating, but at a rate that matches its orbit."
  },
  {
    title: "火星上的日子比地球稍長",
    titleEn: "A Day on Mars Is Slightly Longer Than on Earth",
    fact: "火星一天約24小時39分鐘，與地球很接近，所以探測任務常用「火星日（sol）」來安排工作與休息。雖然只多約39分鐘，但長期累積會讓作息逐漸與地球時鐘錯開。",
    factEn: "A Martian day is about 24 hours and 39 minutes, close to Earth's day length. That is why missions often plan work in Martian sols. Even a small difference of 39 minutes can shift schedules significantly over time."
  },
  {
    title: "木星是太陽系的防護盾之一",
    titleEn: "Jupiter Is One of the Solar System's Shields",
    fact: "木星質量巨大，強重力會改變部分彗星與小行星軌道，讓一些天體偏離原本可能接近內太陽系的路徑。雖然不能完全阻擋撞擊風險，但木星在太陽系動力學中確實扮演重要緩衝角色。",
    factEn: "Jupiter's huge mass gives it strong gravity, which can alter the paths of some comets and asteroids. This may deflect certain objects away from the inner Solar System. It does not remove all impact risk, but it is an important gravitational buffer."
  },
  {
    title: "土星不是唯一有環的行星",
    titleEn: "Saturn Is Not the Only Planet with Rings",
    fact: "除了土星，木星、天王星和海王星也都有行星環，只是較暗、較薄，不像土星那麼明顯。土星環主要由冰粒與岩石碎片組成，大小從微小顆粒到大型塊體都有。",
    factEn: "Saturn is not the only planet with rings. Jupiter, Uranus, and Neptune also have ring systems, but they are dimmer and thinner. Saturn's rings are mostly made of ice and rocky debris, ranging from tiny grains to larger chunks."
  },
  {
    title: "黑洞不是宇宙吸塵器",
    titleEn: "Black Holes Are Not Cosmic Vacuum Cleaners",
    fact: "黑洞只有在非常接近時才會強烈影響物體；如果把太陽瞬間換成同質量黑洞，地球在遠距離上仍會沿相近軌道運行。黑洞可怕之處在於事件視界內連光都無法逃離，而不是會無限遠地「吸走一切」。",
    factEn: "Black holes strongly affect objects only when they are very close. If the Sun were replaced by a black hole of the same mass, Earth would still orbit at roughly the same distance. Their key feature is that light cannot escape inside the event horizon."
  },
  {
    title: "我們真的拍到黑洞影像",
    titleEn: "We Have Really Captured a Black Hole Image",
    fact: "2019年事件視界望遠鏡公布了黑洞影像，畫面中的亮環其實是黑洞附近高溫物質發出的輻射，中央暗區是黑洞陰影。這是多地望遠鏡聯合觀測與資料合成的成果，也是天文合作的里程碑。",
    factEn: "In 2019, the Event Horizon Telescope released the first black hole image. The bright ring is radiation from superheated material around the black hole, while the dark centre is its shadow. It was achieved through global telescope coordination and data synthesis."
  },
  {
    title: "宇宙中可能有很多「地球大小」行星",
    titleEn: "There May Be Many Earth-Sized Planets",
    fact: "天文學家已發現數千顆系外行星，其中不少大小接近地球，部分位於母恆星的宜居帶。是否真的適合生命，還要看大氣、磁場與水循環等條件，大小相似不代表環境相同。",
    factEn: "Astronomers have found thousands of exoplanets, including many that are close to Earth in size. Some are in the habitable zone of their stars. However, potential habitability also depends on atmosphere, magnetic protection, and water cycles, not size alone."
  },
  {
    title: "太陽也會有天氣",
    titleEn: "The Sun Has Weather Too",
    fact: "太陽表面會出現太陽黑子、耀斑與日冕物質拋射，這些活動會影響地球附近太空環境，可能造成衛星通訊干擾或極光增強。這類研究稱為太空天氣，對現代科技社會非常重要。",
    factEn: "The Sun has its own weather, including sunspots, flares, and coronal mass ejections. These events can disturb near-Earth space, affecting satellites and communications while strengthening auroras. Studying space weather is vital for modern technology-dependent societies."
  },
  {
    title: "衛星定位要靠相對論修正",
    titleEn: "Satellite Positioning Depends on Relativistic Corrections",
    fact: "GPS 衛星上的時鐘與地面時鐘流逝速率略有差異，若不進行相對論修正，定位誤差每天會累積到很大。也就是說，你手機導航能準確運作，背後其實包含愛因斯坦理論的實際應用。",
    factEn: "GPS satellite clocks tick at slightly different rates from clocks on Earth. Without relativistic corrections, position errors would grow quickly each day. In other words, everyday phone navigation works accurately because Einstein's physics is built into the system."
  },
  {
    title: "太空探索也要重視垃圾問題",
    titleEn: "Space Exploration Must Tackle Space Debris",
    fact: "地球軌道上有大量退役衛星與碎片，這些太空垃圾高速移動，可能撞擊運作中的太空器。各國正研究主動清除與減量設計，例如可控脫軌、可回收結構與防碰撞追蹤系統。",
    factEn: "Earth orbit contains many retired satellites and fragments moving at very high speed. This space debris can damage operational spacecraft. Agencies are developing mitigation methods, including controlled de-orbiting, recoverable designs, and better collision tracking."
  }
];

const earthScienceKs3Entries = [
  {
    title: "天氣和氣候不是同一件事",
    titleEn: "Weather and Climate Are Not the Same Thing",
    fact: "天氣是短時間的狀態，例如今天下雨或明天放晴；氣候是長時間平均的趨勢，例如某地區通常冬天較冷、夏天較熱。理解兩者差別，有助我們正確閱讀新聞中的極端天氣與氣候變遷議題。",
    factEn: "Weather describes short-term conditions, such as rain today or sunshine tomorrow, while climate describes long-term patterns over many years. Knowing the difference helps students interpret extreme weather reports and climate-change discussions more accurately."
  },
  {
    title: "樹木年輪像地球的時間檔案",
    titleEn: "Tree Rings Work Like a Time Archive",
    fact: "樹木每年生長會留下年輪，寬窄差異可反映當年水分和溫度條件。科學家能利用年輪重建過去環境變化，了解某些地區曾經歷過的乾旱或濕潤時期，這是自然界保存歷史的一種方式。",
    factEn: "Trees form annual rings as they grow, and ring width can reflect rainfall and temperature conditions in that year. Scientists use these patterns to reconstruct past environments, including dry and wet periods, giving us a natural record of environmental history."
  },
  {
    title: "地震波能幫我們看見地球內部",
    titleEn: "Seismic Waves Help Us See Inside Earth",
    fact: "地球內部無法直接開挖到很深，但地震發生時產生的波在不同物質中速度會改變。透過分析這些波的到達時間，科學家能推測地殼、地函與地核的結構，就像替地球做超音波檢查。",
    factEn: "We cannot dig directly into Earth's deep interior, but seismic waves from earthquakes travel at different speeds through different materials. By analysing arrival times, scientists infer the structure of the crust, mantle, and core, rather like giving Earth an ultrasound scan."
  },
  {
    title: "火山土壤常常特別肥沃",
    titleEn: "Volcanic Soils Are Often Very Fertile",
    fact: "火山噴發看起來破壞力很大，但火山灰與岩石風化後會釋放多種礦物質，長期可形成肥沃土壤。因此不少火山周邊地區後來成為重要農業地帶，呈現自然災害與生態恢復的雙面性。",
    factEn: "Volcanic eruptions can be destructive, yet weathered ash and rock release minerals that can create fertile soils over time. This is why some volcanic regions later become productive farming areas, showing both the risk and recovery sides of natural processes."
  },
  {
    title: "河流會一直改變路線",
    titleEn: "Rivers Keep Changing Their Routes",
    fact: "河道不是固定不變的直線，水流會侵蝕外彎、堆積內彎，久了就可能形成新的曲流形狀。若再遇到洪水，河流甚至可能切出更短路徑。這些變化會影響農地、聚落和生態棲地分布。",
    factEn: "River channels are not fixed straight lines. Flow erodes outer bends and deposits material on inner bends, gradually reshaping meanders. During floods, rivers may even cut new shorter paths, which can affect farmland, settlements, and habitats."
  },
  {
    title: "冰川其實會「流動」",
    titleEn: "Glaciers Actually Flow",
    fact: "冰川看起來像靜止的大冰塊，但在重力作用下會非常緩慢地移動，並在地表留下刮痕與堆積地形。科學家透過冰川移動速度和厚度變化，能評估區域氣候是否正在變暖。",
    factEn: "A glacier may look like a static block of ice, but it moves slowly under gravity and leaves scratches and deposits on the landscape. By tracking glacier speed and thickness, scientists can assess whether regional climate is warming."
  },
  {
    title: "珊瑚礁是海洋的高生物多樣性區",
    titleEn: "Coral Reefs Are Biodiversity Hotspots",
    fact: "珊瑚礁雖只占海洋面積的一小部分，卻提供大量生物棲息與覓食空間，被稱為海洋雨林。水溫過高或污染增加都可能造成白化，保護珊瑚不只是保護景觀，也是維持食物網穩定。",
    factEn: "Coral reefs cover a small part of the ocean but support rich habitats and feeding grounds, so they are often called the rainforests of the sea. Heat stress and pollution can cause bleaching, making reef protection crucial for stable marine food webs."
  },
  {
    title: "土壤裡住著看不見的工程師",
    titleEn: "Invisible Engineers Live in Soil",
    fact: "土壤不只是泥土，裡面有細菌、真菌和小型生物分解落葉與有機物，讓養分回到生態系。若土壤長期被壓實或過度污染，這些微生物活動會下降，土地生產力也可能跟著下滑。",
    factEn: "Soil is not just dirt. It contains bacteria, fungi, and tiny organisms that break down organic matter and recycle nutrients. If soil is compacted or polluted for long periods, these microbial processes weaken and land productivity may decline."
  },
  {
    title: "城市也會有自己的小氣候",
    titleEn: "Cities Can Create Their Own Microclimates",
    fact: "柏油路面和高樓容易吸熱並在夜間慢慢釋放，形成都市熱島效應，使市區溫度常高於郊區。增加樹蔭、透水鋪面與通風走廊，是城市設計中常見的降溫策略。",
    factEn: "Road surfaces and dense buildings absorb heat and release it slowly at night, creating an urban heat-island effect. This often makes cities warmer than nearby rural areas. More shade, permeable surfaces, and ventilation corridors are common cooling strategies."
  },
  {
    title: "地下水不是取之不盡",
    titleEn: "Groundwater Is Not Unlimited",
    fact: "地下水的補注速度通常比大量抽取慢，若長期超抽，可能導致地層下陷與水質惡化。建立節水習慣、回收再利用與合理用水規畫，都是讓水資源更永續的重要方法。",
    factEn: "Groundwater usually recharges more slowly than heavy pumping rates. Long-term overuse can lead to land subsidence and poorer water quality. Efficient use, recycling, and sensible planning are essential for sustainable water management."
  },
  {
    title: "沙塵可以跨洲旅行",
    titleEn: "Dust Can Travel Across Continents",
    fact: "強風可把乾燥地區的細小塵粒帶到很遠的地方，甚至跨越海洋。這些沙塵有時會影響空氣品質，但也可能把礦物養分帶到其他地區，顯示地球系統之間其實高度連結。",
    factEn: "Strong winds can carry fine dust from dry regions over very long distances, even across oceans. Dust can reduce air quality, but it can also deliver mineral nutrients elsewhere, showing how tightly connected Earth's systems are."
  },
  {
    title: "自然觀測是長期累積的科學",
    titleEn: "Environmental Science Depends on Long-Term Observation",
    fact: "單一天的數據往往不足以判斷趨勢，科學家需要多年連續觀測溫度、降雨、海平面與生態指標，才能看見真正變化。耐心蒐集資料與正確比較，是科學推論最重要的基礎之一。",
    factEn: "One day of data is rarely enough to identify trends. Scientists need long records of temperature, rainfall, sea level, and ecological indicators to detect real change. Careful data collection and fair comparison are core parts of scientific reasoning."
  }
];

const inventionsKs3Entries = [
  {
    title: "全球資訊網讓網路真正走進日常（1990s）",
    titleEn: "The World Wide Web Brought the Internet to Everyday Life (1990s)",
    fact: "1990年代全球資訊網與瀏覽器普及後，網路從研究單位工具變成一般人可使用的平台。學校、家庭和圖書館開始透過網站找資料、讀新聞與交流，資訊取得速度大幅提升，也改變了學習與媒體使用習慣。",
    factEn: "In the 1990s, the World Wide Web and web browsers moved the internet from research institutions into everyday life. Schools, homes, and libraries began using websites for information, news, and communication, transforming how people learn and access media."
  },
  {
    title: "GPS民用普及改變導航方式（1990s-2000s）",
    titleEn: "Civilian GPS Changed How We Navigate (1990s-2000s)",
    fact: "當衛星定位逐漸普及到民用裝置後，地圖不再只是紙本查詢工具，而是可即時規劃路線的數位服務。交通、物流、救援與戶外教育都因此受益，也讓位置資訊成為現代應用程式的重要基礎。",
    factEn: "As satellite positioning became widely available for civilian use, maps evolved from paper references into real-time routing tools. Transport, logistics, emergency response, and outdoor learning all benefited, and location data became a core part of modern apps."
  },
  {
    title: "鋰電池商用化開啟行動裝置時代（1991起）",
    titleEn: "Lithium-Ion Batteries Enabled the Mobile Device Era (from 1991)",
    fact: "鋰離子電池在1990年代初商用後，因能量密度高與可重複充電，快速成為手機、筆電與後來電動車的重要核心。電池技術進步不只影響電子產品，也和能源轉型、交通減碳密切相關。",
    factEn: "After commercialisation in the early 1990s, lithium-ion batteries became central to phones, laptops, and later electric vehicles due to high energy density and rechargeability. Battery progress shapes not only electronics, but also energy transition and low-carbon transport."
  },
  {
    title: "人類基因組草圖加速精準醫學（2000s）",
    titleEn: "The Human Genome Draft Accelerated Precision Medicine (2000s)",
    fact: "人類基因組計畫在2000年代初完成關鍵里程碑，讓科學家更快理解疾病與基因之間的關係。後續基因定序成本下降，使醫療研究能更重視個體差異，推動更精準的診斷與治療策略。",
    factEn: "Key milestones in the Human Genome Project in the early 2000s gave scientists a stronger map of how genes relate to disease. As sequencing costs fell, research increasingly supported personalised diagnosis and treatment strategies."
  },
  {
    title: "智慧型手機把多種工具合一（2007起）",
    titleEn: "Smartphones Combined Many Tools into One (from 2007)",
    fact: "智慧型手機把相機、地圖、通訊、學習平台與支付功能整合到一台裝置，改變了日常行為和資訊習慣。它不只是新硬體，也帶動應用程式生態，影響教育、商業、交通與社交方式。",
    factEn: "Smartphones combined cameras, maps, communication, learning platforms, and payments in one device, reshaping daily behaviour and information habits. This was not only a hardware shift; it also created app ecosystems that transformed education, commerce, mobility, and social life."
  },
  {
    title: "CRISPR基因編輯開啟新研究方法（2012起）",
    titleEn: "CRISPR Opened New Paths in Gene Editing (from 2012)",
    fact: "CRISPR技術讓科學家能更精準地修改DNA片段，研究速度比過去更快，也降低了部分實驗門檻。它被用於疾病機制研究與作物改良，但同時也引發倫理、風險管理與法規討論，提醒我們科技進步需要負責任地使用。",
    factEn: "CRISPR allowed scientists to edit DNA more precisely, speeding up biological research and reducing some technical barriers. It supports disease studies and crop improvement, but also raises ethical, safety, and regulatory questions about responsible use."
  },
  {
    title: "3D列印讓原型製作更快速（2010s）",
    titleEn: "3D Printing Made Prototyping Faster (2010s)",
    fact: "3D列印在2010年代更廣泛進入教育與產業，讓設計者能快速把數位模型做成實體原型。學生可用它理解工程設計流程，企業則能縮短測試周期。它展示了從想法到實物之間可以更快迭代。",
    factEn: "In the 2010s, 3D printing became more common in education and industry, allowing digital designs to become physical prototypes quickly. Students can learn design cycles more clearly, while companies reduce testing time through faster iteration."
  },
  {
    title: "可重複使用火箭降低太空成本（2015起）",
    titleEn: "Reusable Rockets Helped Reduce Spaceflight Costs (from 2015)",
    fact: "可重複使用火箭回收成功後，太空任務的成本與發射頻率出現明顯改變。雖然仍然昂貴，但回收技術讓衛星部署、科學任務與太空產業更具可持續性，也推動新一波工程創新。",
    factEn: "Successful reusable rocket landings changed launch frequency and cost structures in spaceflight. Missions are still expensive, but recovery technology has improved sustainability and expanded opportunities for satellites, science missions, and new engineering development."
  },
  {
    title: "mRNA疫苗平台快速應對疫情（2020s）",
    titleEn: "mRNA Vaccine Platforms Responded Rapidly to Pandemics (2020s)",
    fact: "mRNA疫苗技術在2020年代的大規模應用，顯示平台式生醫研發可在短時間內完成設計與生產流程。這不代表所有問題都被解決，但它提供了更快的公共衛生應變工具，也推動後續疫苗研究。",
    factEn: "Large-scale use of mRNA vaccines in the 2020s showed how platform-based biomedical development can accelerate design and production. It did not solve every challenge, but it provided faster public-health response tools and advanced future vaccine research."
  },
  {
    title: "生成式AI改變學習與創作方式（2022起）",
    titleEn: "Generative AI Changed How People Learn and Create (from 2022)",
    fact: "生成式AI工具在2022年後快速普及，能協助整理重點、產生草稿與提供多角度解釋。對學生來說，重點是把AI當作學習助手而非答案機器，並培養查證、批判思考與原創表達能力。",
    factEn: "Since 2022, generative AI tools have spread quickly, helping users summarise, draft, and explore ideas from different angles. For students, the key is to use AI as a learning assistant, not an answer machine, while strengthening verification, critical thinking, and original expression."
  },
  {
    title: "太陽能與儲能成本下降推動能源轉型（2010s-2025）",
    titleEn: "Falling Solar and Storage Costs Accelerated Energy Transition (2010s-2025)",
    fact: "2010年代到2025年間，太陽能模組與電池儲能成本持續下降，使更多學校、社區與城市能導入再生能源方案。技術進步加上政策設計，讓減碳不再只是口號，而是逐步落實在電力系統中的選項。",
    factEn: "From the 2010s to 2025, the cost of solar modules and battery storage continued to fall, enabling wider adoption in schools, communities, and cities. Combined with policy support, these advances have turned decarbonisation from a slogan into practical power-system choices."
  }
];

const runningKs3ExtraEntries = [
  { title: "間歇跑能同時練速度與耐力", titleEn: "Interval Running Trains Speed and Endurance Together", fact: "短時間快跑搭配慢跑恢復，能在有限課堂時間中同時刺激心肺與步頻控制。", factEn: "Alternating fast intervals with easy recovery can develop both aerobic fitness and cadence control in limited lesson time." },
  { title: "休息日能讓訓練成果被身體吸收", titleEn: "Rest Days Help the Body Absorb Training", fact: "進步不只發生在訓練中，也發生在恢復期；安排休息可降低過度訓練風險。", factEn: "Progress happens not only during training but also during recovery, and planned rest lowers overtraining risk." },
  { title: "呼吸節奏會影響配速穩定", titleEn: "Breathing Rhythm Affects Pace Stability", fact: "若呼吸過急，步伐容易亂；固定呼吸節奏常能讓中長跑更穩。", factEn: "If breathing becomes rushed, stride rhythm often breaks down; steady breathing patterns usually improve pacing stability." },
  { title: "擺臂效率會影響直線跑姿", titleEn: "Efficient Arm Swing Supports Straight Running Form", fact: "手臂前後擺動若過度外張，會增加不必要的左右晃動。", factEn: "When arm swing moves too far outward, it can add side-to-side motion that wastes energy." },
  { title: "起跑反應可以透過口令訓練", titleEn: "Start Reaction Can Be Trained with Cue Drills", fact: "重複練習聽覺口令與第一步發力，可縮短起跑延遲時間。", factEn: "Practising auditory cues and first-step drive repeatedly can reduce start delay." },
  { title: "衝線技巧也能影響名次", titleEn: "Finish Technique Can Affect Final Position", fact: "最後幾步保持步頻並控制身體前傾，常比臨時亂撲更有效。", factEn: "Maintaining cadence with controlled forward lean in the last strides is often better than an unplanned lunge." },
  { title: "跑道分道觀念是安全重點", titleEn: "Lane Discipline Is a Key Safety Skill", fact: "接近終點疲勞時仍要保持分道，能避免碰撞與犯規。", factEn: "Even when fatigued near the finish, staying in lane helps prevent collisions and disqualifications." },
  { title: "賽前飲食不宜突然大改", titleEn: "Pre-Race Food Should Not Change Suddenly", fact: "比賽當天嘗試新食物可能造成腸胃不適，熟悉與易消化更重要。", factEn: "Trying new food on race day can upset the stomach; familiar and digestible choices are safer." },
  { title: "炎熱天氣要調整訓練強度", titleEn: "Training Intensity Should Adjust in Heat", fact: "高溫下心率上升較快，適度降強度和補水比硬撐更聰明。", factEn: "Heart rate rises faster in hot weather, so reducing intensity and hydrating is smarter than forcing pace." },
  { title: "收操能幫助回到日常狀態", titleEn: "Cool-Down Helps the Body Return to Baseline", fact: "慢走與輕鬆伸展可幫助循環逐步回穩，減少突然停下的不適。", factEn: "Easy walking and light mobility work help circulation settle gradually after effort." },
  { title: "想像練習可提升比賽專注", titleEn: "Mental Imagery Can Improve Race Focus", fact: "事先在腦中演練起跑、轉彎與衝線，有助臨場減少慌亂。", factEn: "Mentally rehearsing starts, bends, and finishing phases can reduce panic under pressure." },
  { title: "運動課也要重視共融參與", titleEn: "Inclusive Participation Matters in PE", fact: "以分層目標與互助分工設計活動，能讓不同能力學生都看見進步。", factEn: "Tiered goals and supportive team roles help students of different abilities experience progress." },
  { title: "痠痛與受傷警訊要分辨", titleEn: "Students Should Distinguish Soreness from Injury Signals", fact: "一般痠痛會逐漸緩解；若出現尖銳痛或持續腫脹，應及早停下評估。", factEn: "Normal soreness eases over time, but sharp pain or persistent swelling should be assessed early." },
  { title: "接力棒次安排有策略", titleEn: "Relay Order Uses Strategy", fact: "不同棒次需要不同特質，例如起跑穩定、彎道能力和終點衝刺。", factEn: "Different relay legs require different strengths, including reliable starts, bend running, and final sprinting." },
  { title: "長期紀錄能看見真實進步", titleEn: "Long-Term Tracking Reveals Real Progress", fact: "把成績、主觀疲勞和睡眠一起記錄，比只看單次成績更準確。", factEn: "Tracking results with fatigue and sleep over time is more informative than one-off performance." }
];

const spaceKs3ExtraEntries = [
  { title: "詹姆斯韋伯望遠鏡看得更遠", titleEn: "The James Webb Telescope Looks Deeper into Space", fact: "韋伯望遠鏡以紅外線觀測早期宇宙，幫助科學家研究恆星與星系形成。", factEn: "The James Webb Space Telescope uses infrared observations to study early galaxies and star formation." },
  { title: "火星直升機證明稀薄大氣可飛行", titleEn: "The Mars Helicopter Proved Flight in Thin Atmosphere", fact: "Ingenuity 在火星的成功飛行，為未來行星探測提供新視角。", factEn: "Ingenuity's flights on Mars demonstrated powered flight in a thin atmosphere and opened new scouting options." },
  { title: "阿提米絲計畫推進重返月球", titleEn: "Artemis Is Advancing Lunar Return Missions", fact: "新一代月球任務強調長期探索，包含基地技術與深空合作。", factEn: "New lunar missions focus on sustained exploration, including base technologies and deep-space cooperation." },
  { title: "DART任務測試行星防禦", titleEn: "The DART Mission Tested Planetary Defence", fact: "透過撞擊小行星改變軌道，科學家驗證了主動防禦概念。", factEn: "By impacting an asteroid to alter its orbit, scientists tested a practical planetary-defence concept." },
  { title: "小型衛星讓太空研究更普及", titleEn: "Small Satellites Made Space Research More Accessible", fact: "CubeSat 讓大學與學生團隊也能參與真實太空任務。", factEn: "CubeSats allow universities and student teams to participate in real space missions." },
  { title: "月球極區的冰可能支援基地", titleEn: "Polar Lunar Ice May Support Future Bases", fact: "月球極區冰資源可用於水與燃料，對長期駐留很關鍵。", factEn: "Ice in lunar polar regions could provide water and fuel resources for long-term missions." },
  { title: "系外行星大氣分析正在加速", titleEn: "Exoplanet Atmosphere Analysis Is Accelerating", fact: "光譜技術讓科學家能推測遠方行星的大氣成分。", factEn: "Spectroscopy now helps scientists infer atmospheric composition on distant exoplanets." },
  { title: "太空中的植物研究持續進展", titleEn: "Space Plant Research Continues to Progress", fact: "微重力種植實驗能幫助未來長期任務改善食物供應。", factEn: "Microgravity plant experiments support future long-duration missions and food systems." },
  { title: "深空輻射是載人任務挑戰", titleEn: "Deep-Space Radiation Is a Major Human-Mission Challenge", fact: "超越地球磁場後，如何防護輻射是重要工程課題。", factEn: "Beyond Earth's magnetic protection, radiation shielding becomes a major engineering challenge." },
  { title: "自動導航讓探測器更自主", titleEn: "Autonomous Navigation Makes Probes More Independent", fact: "通訊延遲下，探測器需自己避障和調整路線。", factEn: "With communication delays, probes must avoid hazards and adjust routes more autonomously." },
  { title: "太空網路也需要時間同步", titleEn: "Space Networks Also Need Precise Time Sync", fact: "深空通訊依賴精準時鐘與演算法，才能穩定傳輸資料。", factEn: "Deep-space communications depend on precise timing and algorithms for stable data transfer." },
  { title: "地球觀測衛星守護日常生活", titleEn: "Earth-Observation Satellites Support Daily Life", fact: "天氣預報、防災與農業監測都仰賴持續的衛星資料。", factEn: "Weather forecasting, disaster response, and crop monitoring all rely on continuous satellite data." },
  { title: "星鏈也帶來光害討論", titleEn: "Satellite Constellations Also Raise Light-Pollution Concerns", fact: "大量低軌衛星提升連線能力，也讓天文觀測面臨新挑戰。", factEn: "Large low-Earth orbit constellations improve connectivity but create new challenges for astronomy." },
  { title: "行星保護避免跨天體污染", titleEn: "Planetary Protection Prevents Cross-World Contamination", fact: "任務設計需避免把地球微生物帶到其他天體。", factEn: "Mission planning includes strict controls to avoid carrying Earth microbes to other worlds." },
  { title: "樣本返回任務提升科學精度", titleEn: "Sample-Return Missions Improve Scientific Accuracy", fact: "把岩石帶回地球能用更完整儀器分析其成分和年代。", factEn: "Bringing samples back to Earth enables deeper lab analysis of composition and age." }
];

const earthScienceKs3ExtraEntries = [
  { title: "板塊運動塑造山脈與海溝", titleEn: "Plate Motion Shapes Mountains and Trenches", fact: "地殼板塊碰撞與隱沒持續改變地形，地球表面一直在演化。", factEn: "Colliding and subducting tectonic plates continuously reshape Earth's surface." },
  { title: "聖嬰與反聖嬰會改變全球降雨", titleEn: "El Niño and La Niña Shift Global Rainfall Patterns", fact: "太平洋海溫異常會影響不同地區的乾旱與豪雨風險。", factEn: "Pacific sea-surface anomalies can shift drought and flood risks across regions." },
  { title: "洋流像地球的熱輸送帶", titleEn: "Ocean Currents Act as Earth's Heat Conveyor", fact: "海洋流動把熱量從赤道帶向高緯，影響沿岸氣候。", factEn: "Ocean circulation moves heat from lower to higher latitudes, influencing coastal climates." },
  { title: "濕地是天然滯洪系統", titleEn: "Wetlands Are Natural Flood Buffers", fact: "濕地能暫存洪水並改善水質，是重要生態與防災資產。", factEn: "Wetlands store floodwater and improve water quality, supporting both ecosystems and resilience." },
  { title: "紅樹林能減弱風暴潮衝擊", titleEn: "Mangroves Help Reduce Storm-Surge Impact", fact: "沿岸紅樹林可降低海浪能量，保護聚落與生態。", factEn: "Coastal mangroves can absorb wave energy and help protect communities and habitats." },
  { title: "指標物種能反映環境健康", titleEn: "Indicator Species Reflect Environmental Health", fact: "某些物種數量變化常是環境壓力的早期訊號。", factEn: "Changes in indicator species often provide early signs of environmental stress." },
  { title: "空氣品質監測需要長期資料", titleEn: "Air-Quality Monitoring Needs Long-Term Data", fact: "PM2.5 和臭氧等指標必須持續觀測，才能評估改善成效。", factEn: "PM2.5 and ozone require continuous measurement to evaluate policy effectiveness." },
  { title: "海洋酸化會影響貝殼生物", titleEn: "Ocean Acidification Affects Shell-Forming Life", fact: "海水化學改變可能增加珊瑚和貝類生長壓力。", factEn: "Shifts in seawater chemistry can stress corals and shell-forming organisms." },
  { title: "山火風險與氣候和管理都有關", titleEn: "Wildfire Risk Depends on Climate and Land Management", fact: "乾旱、熱浪與可燃物累積會共同提高山火機率。", factEn: "Drought, heatwaves, and fuel buildup together raise wildfire probability." },
  { title: "地震預警可爭取幾秒關鍵時間", titleEn: "Earthquake Early Warning Can Provide Critical Seconds", fact: "快速偵測與通報可讓交通和校園先採取保護動作。", factEn: "Rapid detection and alerts can provide seconds for transport systems and schools to react." },
  { title: "海嘯預警依賴跨國監測網", titleEn: "Tsunami Warnings Depend on International Monitoring", fact: "海底壓力感測和潮位站資料可提升沿岸警報準確度。", factEn: "Seafloor pressure sensors and tide gauges improve coastal tsunami warnings." },
  { title: "永續城市重視雨水滲透", titleEn: "Sustainable Cities Prioritise Rainwater Infiltration", fact: "透水鋪面與綠地可降低積水並補注地下水。", factEn: "Permeable surfaces and green areas reduce flooding and help recharge groundwater." },
  { title: "融冰反照率回饋會加速升溫", titleEn: "Ice-Albedo Feedback Can Accelerate Warming", fact: "白色冰面減少後，地表吸收更多熱量，進一步推升溫度。", factEn: "As reflective ice shrinks, darker surfaces absorb more heat, reinforcing warming." },
  { title: "公民科學能擴大環境資料來源", titleEn: "Citizen Science Expands Environmental Data", fact: "學生和社區上傳觀測記錄，可協助追蹤生物多樣性變化。", factEn: "Student and community observations can support biodiversity monitoring at larger scales." },
  { title: "循環經濟可減少資源浪費", titleEn: "Circular Economy Approaches Reduce Resource Waste", fact: "維修、再製與回收設計能延長材料使用壽命。", factEn: "Repair, remanufacturing, and recycling design can extend material lifecycles." },
  { title: "熱浪健康風險需要預警機制", titleEn: "Heatwave Health Risks Need Warning Systems", fact: "高溫警示與校園降溫措施可降低中暑與脫水風險。", factEn: "Heat alerts and cooling measures in schools reduce dehydration and heat illness risk." },
  { title: "生態廊道幫助動物遷移", titleEn: "Ecological Corridors Help Wildlife Movement", fact: "連接破碎棲地能提升物種基因交流與生存機會。", factEn: "Connecting fragmented habitats improves gene flow and species survival chances." },
  { title: "地球科學也需要跨學科合作", titleEn: "Earth Science Also Relies on Interdisciplinary Work", fact: "從感測器到政策設計，地球問題常需要科學與社會科共同解決。", factEn: "From sensors to policy design, Earth challenges often require both scientific and social collaboration." }
];

const inventionsKs3ExtraEntries = [
  { title: "Wi-Fi普及讓行動學習更方便", titleEn: "Widespread Wi-Fi Made Mobile Learning Easier", fact: "無線網路普及後，校園與公共空間的即時連線能力大幅提升。", factEn: "As Wi-Fi spread widely, real-time connectivity improved in schools and public spaces." },
  { title: "藍牙技術讓短距離連接更省電", titleEn: "Bluetooth Enabled Low-Power Short-Range Connections", fact: "耳機、鍵盤與穿戴裝置可在低功耗下穩定傳輸資料。", factEn: "Headphones, keyboards, and wearables can exchange data reliably with low power use." },
  { title: "USB標準降低了裝置相容難題", titleEn: "USB Standards Reduced Device Compatibility Problems", fact: "統一介面讓資料傳輸與充電更簡單，減少專屬接頭混亂。", factEn: "A common interface made data transfer and charging simpler across many devices." },
  { title: "雲端運算改變了軟體使用方式", titleEn: "Cloud Computing Changed How Software Is Used", fact: "使用者不必都在本機安裝大型系統，也能共享服務與資料。", factEn: "Users no longer need every large system locally, as services and data can be shared online." },
  { title: "App生態帶動新型數位產業", titleEn: "App Ecosystems Created New Digital Industries", fact: "行動應用商店讓小型團隊也能快速把產品帶到全球市場。", factEn: "Mobile app stores allowed small teams to launch products to global audiences quickly." },
  { title: "線上課程平台擴大教育可近性", titleEn: "Online Course Platforms Expanded Access to Learning", fact: "MOOC 與混成學習讓更多學生接觸跨校資源與新主題。", factEn: "MOOCs and blended learning gave more students access to cross-institution resources and topics." },
  { title: "行動支付讓交易流程更即時", titleEn: "Mobile Payments Made Transactions More Immediate", fact: "QR支付與電子錢包簡化了小額支付和交通票務體驗。", factEn: "QR payments and digital wallets simplified small purchases and transit payments." },
  { title: "電動車技術在2020年代加速成熟", titleEn: "Electric-Vehicle Technology Matured Rapidly in the 2020s", fact: "電池、充電網絡與控制系統進步推動更多城市導入電動運輸。", factEn: "Advances in batteries, charging networks, and control systems expanded EV adoption." },
  { title: "先進駕駛輔助提升行車安全", titleEn: "Advanced Driver Assistance Improved Road Safety", fact: "車道維持與自動煞車等功能可降低部分人為失誤風險。", factEn: "Features like lane keeping and automatic braking can reduce some human-error risks." },
  { title: "穿戴感測器提升健康管理", titleEn: "Wearable Sensors Improved Health Monitoring", fact: "連續量測心率與活動量，讓個人和醫療端更早發現異常趨勢。", factEn: "Continuous heart-rate and activity tracking helps detect unusual patterns earlier." },
  { title: "手術機器人讓微創操作更精細", titleEn: "Surgical Robotics Enabled More Precise Minimally Invasive Procedures", fact: "高精度控制與影像整合提升了部分手術流程的穩定性。", factEn: "Precision controls with integrated imaging improved stability in selected procedures." },
  { title: "無人機在測繪與防災越來越重要", titleEn: "Drones Became Important in Mapping and Disaster Response", fact: "空拍資料能更快協助災害判讀與地形更新。", factEn: "Aerial data from drones speeds up damage assessment and terrain updates." },
  { title: "5G擴展高頻寬即時應用", titleEn: "5G Expanded High-Bandwidth Real-Time Applications", fact: "更低延遲與更高容量支援遠距協作與即時串流場景。", factEn: "Lower latency and higher capacity support remote collaboration and live-stream use cases." },
  { title: "AlphaFold2推進蛋白質研究", titleEn: "AlphaFold2 Accelerated Protein Research", fact: "AI結構預測讓生物研究在假設建立與驗證上更有效率。", factEn: "AI-based structure prediction improved speed in forming and testing biological hypotheses." },
  { title: "量子科技從實驗走向應用探索", titleEn: "Quantum Technology Moved from Lab to Early Applications", fact: "量子運算與量子通訊仍在發展，但已帶動新一代演算法研究。", factEn: "Quantum computing and communication are still developing, but they are driving new algorithm research." },
  { title: "語音辨識普及改變人機互動", titleEn: "Voice Recognition Changed Human-Computer Interaction", fact: "語音助理與即時字幕讓更多人能以自然方式使用數位工具。", factEn: "Voice assistants and live captions made digital tools more natural and accessible to use." },
  { title: "擴增實境讓學習內容更立體", titleEn: "Augmented Reality Made Learning Content More Interactive", fact: "AR應用可把抽象概念疊加到真實環境中，提升理解效率。", factEn: "AR overlays abstract concepts onto real environments, which can improve understanding." },
  { title: "低軌衛星網路擴大偏遠地區連線", titleEn: "LEO Satellite Internet Expanded Connectivity in Remote Areas", fact: "新型衛星網路讓偏遠地區更有機會獲得穩定網際網路。", factEn: "New low-Earth orbit networks improved internet access opportunities in remote regions." },
  { title: "開源硬體與軟體加速創新擴散", titleEn: "Open-Source Hardware and Software Accelerated Innovation Sharing", fact: "公開設計與程式碼降低了學習門檻，也讓改良迭代更快。", factEn: "Open designs and code lowered learning barriers and sped up iterative improvement." }
];

function ensureMinEntries(baseEntries, extraEntries, minCount = 30) {
  const base = Array.isArray(baseEntries) ? baseEntries.slice() : [];
  if (base.length >= minCount) return base;
  const extras = Array.isArray(extraEntries) ? extraEntries : [];
  const need = minCount - base.length;
  return base.concat(extras.slice(0, need));
}

const runningFactsKs3AllEntries = ensureMinEntries(sportsKs3Entries, runningKs3ExtraEntries, 30);
const spaceKs3AllEntries = ensureMinEntries(spaceKs3Entries, spaceKs3ExtraEntries, 30);
const earthScienceKs3AllEntries = ensureMinEntries(earthScienceKs3Entries, earthScienceKs3ExtraEntries, 30);
const inventionsKs3AllEntries = ensureMinEntries(inventionsKs3Entries, inventionsKs3ExtraEntries, 30);

// Add more themes later under DAILY_READ_SETS (e.g. science, history, nature).
window.DAILY_READ_SETS = {
  running_facts_ks3: {
    entries: runningFactsKs3AllEntries
  },
  space_ks3: {
    entries: spaceKs3AllEntries
  },
  earth_science_ks3: {
    entries: earthScienceKs3AllEntries
  },
  inventions_ks3: {
    entries: inventionsKs3AllEntries
  }
};

// Change this key to switch theme.
window.DAILY_READ_ACTIVE_SET = "space_ks3";

// Build active entries + keep compatibility globals.
(() => {
  const fallbackTitle = "每日閱讀";
  const fallbackTitleEn = "Did You Know?";
  const fallbackSet = { title: fallbackTitle, facts: [], entries: [] };
  const sets = window.DAILY_READ_SETS || {};
  const key = window.DAILY_READ_ACTIVE_SET || "running_facts_ks3";
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
        const title = String(entry.title || fallbackEntryTitle).trim() || fallbackEntryTitle;
        const titleEn = String(entry.titleEn || fallbackEntryTitleEn).trim() || fallbackEntryTitleEn;
        const fact = String(entry.fact || "").trim();
        const factEn = String(entry.factEn || "").trim();
        return fact ? { title, titleEn, fact, factEn } : null;
      }
      const fact = String(entry || "").trim();
      return fact
        ? { title: fallbackEntryTitle, titleEn: fallbackEntryTitleEn, fact, factEn: "" }
        : null;
    })
    .filter(Boolean);

  window.DAILY_READ_ENTRIES = cleanEntries;
  window.DAILY_READ_FACTS = cleanEntries.map((entry) => entry.fact);
  window.DAILY_READ_TITLE = cleanEntries[0]?.title || fallbackEntryTitle;
})();
