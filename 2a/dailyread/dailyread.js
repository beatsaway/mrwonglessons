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

// Add more themes later under DAILY_READ_SETS (e.g. science, history, nature).
window.DAILY_READ_SETS = {
  running_facts_ks3: {
    entries: sportsKs3Entries
  },
  space_ks3: {
    entries: spaceKs3Entries
  },
  earth_science_ks3: {
    entries: earthScienceKs3Entries
  },
  inventions_ks3: {
    entries: inventionsKs3Entries
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
