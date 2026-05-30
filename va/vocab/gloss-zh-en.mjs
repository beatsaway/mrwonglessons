import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { segmentTranslate } from "./zh-to-en.mjs";
import { detectLens, enLensPhrase } from "./note-context.mjs";
import { isSegmentGarbage } from "./uk-english.mjs";

const _dir = path.dirname(fileURLToPath(import.meta.url));
const _autoPath = path.join(_dir, "gloss-auto.json");
export function isBadGlossText(s) {
  if (isSegmentGarbage(s)) return true;
  const t = (s || "").trim();
  if (t.length < 6) return false;
  if (/ism; doctrine/i.test(t) && t.length < 55) return true;
  return false;
}

const ZH_GLOSS_AUTO_RAW = fs.existsSync(_autoPath)
  ? JSON.parse(fs.readFileSync(_autoPath, "utf8"))
  : {};
const ZH_GLOSS_AUTO = {};
for (const [k, v] of Object.entries(ZH_GLOSS_AUTO_RAW)) {
  if (!isBadGlossText(v)) ZH_GLOSS_AUTO[k] = v;
}

/** Full-string Chinese gloss → English definition (no CJK in output). */
const ZH_GLOSS_BASE = {
  窯板保護劑: "a protective coating for kiln bats (shelf boards) so ware does not stick during firing",
  頂板: "the flat slab on top of a column capital (abacus in classical architecture)",
  圓柱頂冠板: "the square block between a round column and the beam above",
  研磨料: "abrasive material used to grind or polish a surface",
  吸附作用: "absorption of moisture or materials into the clay body",
  抽象: "non-representational or highly simplified imagery",
  抽象畫: "painting that does not depict easily recognisable objects (non-figurative)",
  抽象藝術: "art that does not aim to depict recognisable objects",
  構圖: "the arrangement of visual elements in the picture plane",
  透視: "a method of creating the illusion of depth on a flat surface",
  明暗法: "modelling form with strong contrasts of light and dark (chiaroscuro)",
  質感: "surface quality that can be seen or felt (texture)",
  色調: "overall colour character or tonal scheme",
  色相: "the name of a colour (hue)",
  明度: "lightness or darkness of a colour (value)",
  彩度: "intensity or saturation of a colour",
  互補色: "colours opposite on the colour wheel, creating strong contrast",
  鄰近色: "colours close together on the colour wheel",
  留白: "empty or unpainted area (negative space)",
  負空間: "the space around and between subjects (negative space)",
  浮雕: "raised or projecting form on a flat ground",
  版畫: "a print made from an inked matrix (plate or block)",
  素燒: "initial biscuit firing of unglazed clay",
  釉: "a glassy coating fused to ceramic ware in firing",
  拉坯: "throwing pots on a rotating wheel",
  曝光: "the amount of light reaching the camera sensor or film",
  光圈: "the opening that controls light entering a camera",
  快門: "the mechanism controlling exposure time in photography",
  美的品味: "standards for judging what is visually beautiful",
  審美趣味: "aesthetic interest and sensibility in viewing art",
  藝術評賞: "structured appreciation and criticism of artworks",
  寫實: "faithful depiction of observable appearance",
  變形: "deliberate distortion of natural proportions or form",
  象徵: "using images to stand for ideas beyond literal meaning",
  節奏: "a sense of visual movement created by repetition",
  平衡: "visual equilibrium in the composition",
  統一: "elements working together as a coherent whole",
  對比: "marked difference between elements for emphasis",
  筆觸: "visible marks left by the brush or tool",
  輪廓線: "a line defining the edge of a form (contour)",
  風俗畫: "genre painting of everyday life scenes",
  風景畫: "landscape painting",
  靜物: "still-life subject matter",
  肖像: "portrait format or likeness of a person",
  紀念碑: "monumental vertical stone marker (obelisk type)",
  拱門: "an arched opening in architecture",
  柱式: "a classical column order or style",
  前衛: "avant-garde; experimental art ahead of mainstream taste",
  野獸派: "Fauvism — bold, non-naturalistic colour",
  印象派: "a late nineteenth-century approach capturing fleeting light and atmosphere with broken colour",
  印象主義: "a late nineteenth-century movement focused on light, modern life and visible brushwork outdoors",
  超現實: "Surrealism — dream-like, irrational imagery",
  立體主義: "Cubism — fragmented, multi-viewpoint forms",
  行動繪畫: "Action Painting — gestural, process-led painting",
  拼貼: "collage — combining pasted materials on a support",
  混合媒介: "mixed media — more than one material in one work",
  裝置藝術: "installation art — occupying three-dimensional space for viewers to enter or walk around",
  攝影: "photography as medium or process",
  雕塑: "sculpture — three-dimensional art objects",
  水彩畫: "watercolour painting",
  油畫: "oil painting",
  素描: "drawing, often in line or tone",
  篆刻: "seal engraving (Chinese calligraphic carving)",
  書法: "calligraphy as art of writing",
  海報: "poster design",
  字體: "typeface or letterform design",
  版權: "copyright in reproduced images or designs",
  飽和色: "highly saturated colour",
  冷色: "cool colours (blues, greens) suggesting distance or calm",
  暖色: "warm colours (reds, yellows) advancing toward the viewer",
  消失點: "vanishing point in linear perspective",
  視平線: "horizon line at eye level",
  高光: "highlight — brightest reflected light on a form",
  陰影: "shadow area receiving little direct light",
  肌理: "texture — surface pattern and quality",
  空間: "space — areas of depth, foreground and background",
  形式: "form — three-dimensional shape and volume",
  造形: "form-making; shaping visual elements",
  物料: "materials used to make the artwork",
  媒介: "medium — the material or channel of expression",
  風格: "style — distinctive visual characteristics of a period or artist",
  主題: "subject matter or theme",
  氣氛: "mood or atmosphere conveyed by the work",
  視覺元素: "visual elements (line, colour, shape, etc.)",
  視覺藝術: "visual arts as a discipline",
  評論: "critical commentary on an artwork",
  批評: "art criticism — reasoned evaluation",
  鑲嵌畫: "mosaic — images built from small pieces (tesserae)",
  壁畫: "mural — painting on a wall",
  木刻: "woodcut print",
  腐蝕法: "etching — intaglio printing using acid-bitten lines",
  絲印: "screen printing (silkscreen)",
  柯式印刷: "offset lithographic printing",
  四原色: "CMYK four-colour process in printing",
  電腦輔助設計: "computer-aided design (CAD)",
  數碼相機: "digital camera",
  魚眼鏡: "fisheye lens with extreme wide angle",
  廣角鏡: "wide-angle lens",
  變焦距鏡: "zoom lens with adjustable focal length",
  針孔照相機: "pinhole camera without a glass lens",
  活動雕塑: "kinetic sculpture with movement",
  現代藝術: "modern art (late 19th–20th century innovations)",
  當代藝術: "contemporary art of the present era",
  民間藝術: "folk art from community traditions",
  原始藝術: "art influenced by non-industrial or tribal sources (primitivism context)",
  寫實主義: "Realism — depicting everyday life accurately",
  浪漫主義: "Romanticism — emotion, nature and individuality",
  古典主義: "Classicism — order, clarity and Greco-Roman ideals",
  巴洛克: "Baroque — drama, movement and rich decoration",
  洛可可: "Rococo — light, ornate, playful decoration",
  哥德式: "Gothic style in architecture or typography",
  包浩斯: "Bauhaus — modern design school integrating art and industry",
  普普藝術: "Pop Art — imagery from mass culture",
  歐普藝術: "Op Art — optical vibration and illusion",
  概念藝術: "Conceptual art where the idea may outweigh the object",
  環境藝術: "environmental art responding to a site",
  地景藝術: "land art made in or with the landscape",
  失蠟鑄造法: "lost-wax casting for metal sculpture",
  寫生: "drawing or painting from live observation",
  寫意: "expressive, spontaneous brush manner (in Chinese painting context)",
  工筆: "meticulous, fine-line painting technique",
  沒骨法: "boneless method — forms built without outline (Chinese painting)",
  潑墨: "splashed-ink technique",
  冊頁: "album leaf format in Chinese painting",
  手卷: "handscroll format read section by section",
  掛軸: "hanging scroll format",
  屏風畫: "painting on a folding screen",
  浮世繪: "ukiyo-e Japanese woodblock prints of urban life",
  景泰藍: "Cloisonné enamel metalwork",
  蠟染: "batik — wax-resist dyeing on fabric",
  扎染: "tie-dye — resist dyeing with bound cloth",
  剪紙: "paper-cut decorative or folk images",
  皮影戲: "shadow puppet theatre",
  博山爐: "Boshan incense burner (Hill jar form)",
  雲紋: "cloud-scroll pattern (yunwen)",
  雷紋: "thunder pattern (leiwen)",
  九宮格: "nine-square grid for composition planning",
  黃金分割: "golden section proportion",
  護士像: "Pieta — Virgin mourning Christ (religious sculpture subject)",
  試版: "artist's proof or trial print in printmaking",
  版次: "edition number in printmaking",
  套印: "register — aligning colours in printing",
  裁切記號: "crop marks for trimming printed sheets",
  海報設計: "poster layout and visual communication design",
  平面設計: "graphic / two-dimensional design",
  立體設計: "three-dimensional design",
  室內設計: "interior design of inhabited space",
  包裝設計: "packaging design",
  標誌: "logo or identifying mark",
  商標: "trademark in commercial graphics",
  投影法: "projection method in technical or cartographic drawing",
  鳥瞰法: "bird's-eye / aerial viewpoint",
  正視圖: "elevation drawing — front view",
  切面: "cross-section view",
  比例: "proportion — relative scale of parts",
  節奏韻律: "rhythm and visual flow",
  視錯覺: "optical illusion",
  光環: "halo (aureole) around a sacred figure",
  祭壇畫: "altarpiece painting behind an altar",
  祭器: "ritual vessel in ceremonial art",
  廣告彩: "poster colour / opaque gouache for design",
  不透明水彩: "opaque water-based paint (gouache)",
  松節油: "turpentine — solvent for oil paint",
  調色板: "palette for mixing pigments",
  畫布: "canvas support for painting",
  畫架: "easel for supporting work while making",
  寫生稿: "sketch studies from observation",
  草圖: "preliminary sketch or layout",
  原作: "original work (not a reproduction)",
  複製品: "replica or reproduction copy",
  博物館: "museum institution for collecting art",
  畫廊: "art gallery for exhibition and sale",
  展覽: "exhibition display of artworks",
  觀者: "viewer or audience encountering the work",
  視點: "viewpoint — where the viewer seems to stand",
  視覺語言: "visual language of signs and forms",
  視覺效果: "visual impact on the viewer",
  視覺經驗: "visual experience when perceiving the work",
  後設認知: "metacognition — reflecting on one's own learning or viewing process",
  創意: "creativity in generating ideas",
  靈感: "inspiration behind artistic choices",
  再現: "representation of subjects in imagery",
  詮釋: "interpretation of possible meaning",
  判斷: "judgement — evaluating success or effectiveness",
  描述: "description of observable features",
  分析: "analysis of how formal choices work",
  評鑑: "critical assessment or evaluation",
  批判性評賞:
    "structured appreciation using description, evidence and reasoned judgement — not opinion alone",
  批判性對話: "reasoned discussion about art through questioning and exchange of views",
  過度曝光: "when too much light hits the film or sensor — highlights lose detail and look washed out or white",
  曝光不足: "when too little light is recorded — shadows go very dark with lost detail",
  曝光: "the amount of light recorded in a photograph",
  藝術: "creative practice of making visual works (painting, sculpture, design and related media)",
  美學: "philosophical study of beauty, taste and the experience of art",
  建築: "the art and science of designing buildings and built spaces",
  動畫: "moving images created in sequence (drawn, model or digital)",
  解剖學: "study of bodily structure, used for accurate figure drawing",
  素坯: "unglazed clay ware after an initial biscuit firing",
  古羅馬廊殿: "Roman basilica — large aisled hall with nave and apse",
  背景: "the area behind the main subject; ground against which forms read",
  拍賣: "public sale of artworks to the highest bidder",
  裝訂: "binding pages into a book or portfolio",
  織籃: "basketry — woven fibre structures as craft or art",
  礬紙:
    "paper treated with papermaker's alum (aluminium sulfate) so sizing or ink bonds to cellulose fibres",
  熟紙: "paper that has been sized and is ready for painting or calligraphy"
};

/** Exact English headword definitions where the term itself is self-explanatory. */
export const EN_TERM_DEF = {
  "bat wash":
    "A protective coating applied to kiln bats (shelf boards) before firing, so glazed pots can be lifted without sticking.",
  "aesthetic taste":
    "(1) Standards for judging what is beautiful; (2) the viewer's aesthetic interest — distinct from mere personal liking.",
  composition:
    "How line, shape, colour and space are arranged to guide the eye and create unity or tension in the picture.",
  chiaroscuro:
    "Strong light–dark contrast used to model three-dimensional form and heighten drama.",
  "atmospheric perspective":
    "Depth suggested by paler, cooler, less detailed distant forms — not linear perspective.",
  "linear perspective":
    "Depth created by converging lines meeting at vanishing point(s) on the horizon.",
  "negative space":
    "The empty areas around and between subjects; active in composition, not 'blank' by accident.",
  "positive space":
    "The area occupied by the main subject(s), opposed to negative space.",
  impressionism:
    "Late 19th-century movement capturing fleeting light and colour with visible brushstrokes outdoors.",
  expressionism:
    "Early 20th-century movement stressing inner emotion through distorted form and intense colour.",
  "abstract painting":
    "Painting that does not aim at faithful depiction of visible objects (non-figurative or highly simplified).",
  cubism:
    "Early 20th-century movement fragmenting form and showing multiple viewpoints at once.",
  surrealism:
    "Art exploring dreams, the unconscious and irrational juxtaposition of images.",
  fauvism:
    "Early 20th-century painting with wild, non-naturalistic colour for expressive effect.",
  baroque:
    "17th–18th century style emphasising drama, movement, rich detail and strong diagonals.",
  renaissance:
    "Revival of classical ideals; naturalistic anatomy, perspective and humanist themes.",
  "pop art":
    "Mid-20th-century art borrowing imagery from advertising and mass media.",
  "op art":
    "Art creating optical vibration or illusion through precise pattern and colour.",
  etching:
    "Intaglio printmaking: lines bitten into a metal plate with acid, then inked and printed.",
  lithography:
    "Planographic printing from a grease-resistant image on stone or plate.",
  woodcut:
    "Relief printing from a carved wooden block leaving raised printing surfaces.",
  ceramics:
    "Objects made from clay and hardened by heat; includes pottery and porcelain.",
  photography:
    "Images produced by lens and light-sensitive material or digital sensor.",
  sculpture:
    "Three-dimensional art made by carving, modelling, casting or construction.",
  collage:
    "Artwork made by adhering paper, fabric or found materials to a support.",
  mural:
    "Large-scale painting or work designed for a wall or architectural setting.",
  typography:
    "The design and arrangement of type for communication and visual tone.",
  hue: "The name of a colour (red, yellow, blue) on the colour wheel.",
  value: "The lightness or darkness of a colour or tone in an image.",
  texture: "Surface quality — rough, smooth, implied or actual — in an artwork.",
  balance: "Distribution of visual weight so the composition feels stable or deliberately tense.",
  emphasis: "The focal area the viewer notices first, created by contrast or placement.",
  proportion: "Relative size relationships between parts of the image or figure.",
  rhythm: "Visual beat created by repeating elements, lines or shapes.",
  unity: "Sense that all parts belong together as one coherent design.",
  contrast: "Juxtaposition of unlike elements (light/dark, large/small) for impact.",
  symbolism: "Use of images to represent ideas beyond their literal appearance.",
  abstraction: "Departure from recognisable depiction toward shape, colour and mark.",
  "figurative painting": "Painting with recognisable figures or objects from the visible world.",
  "non-figurative painting": "Painting that does not depict easily recognisable objects.",
  "still life": "Arrangement of inanimate objects as subject matter (nature morte).",
  landscape: "Subject or format centred on natural or built outdoor scenery.",
  portrait: "Representation of a person, or vertical format associated with it.",
  "colour scheme": "A planned set of colours used consistently across a design or painting.",
  "complementary colour": "Pairs of opposite hues on the colour wheel that intensify each other.",
  "analogous colour": "Colours adjacent on the wheel, creating harmonious transitions.",
  "warm colour": "Hues such as red and orange that seem to advance in space.",
  "cool colour": "Hues such as blue and green that seem to recede or calm the image.",
  "focal point": "The dominant centre of attention in the composition.",
  "vanishing point": "Point on the horizon where parallel lines appear to meet in perspective.",
  "horizon line": "Eye-level line where ground and sky meet in a view.",
  "bird's-eye view": "High viewpoint looking down on the subject (aerial view).",
  "close-up": "Framing that isolates detail and enlarges the subject (photography/film).",
  "long exposure": "Photographic technique using slow shutter speed to blur motion or gather light.",
  aperture: "Camera opening controlling depth of field and exposure brightness.",
  shutter: "Mechanism setting how long light records on the sensor or film.",
  "depth of field": "Range of distance that appears acceptably sharp in a photograph.",
  glazing: "Applying transparent colour layers in painting, or glass installation in architecture.",
  "slip casting": "Ceramic technique pouring liquid clay slip into a plaster mould.",
  throwing: "Shaping clay on a potter's wheel while it spins.",
  "raku firing": "Fast, dramatic ceramic firing process prized for unpredictable surfaces.",
  "screen printing": "Stencil-based printing pushing ink through a mesh screen.",
  "mixed media": "Combining more than one material or technique in a single artwork.",
  "installation art": "Three-dimensional work arranged in a space for viewers to move through.",
  "conceptual art": "Art where the idea or proposition may be more important than the crafted object.",
  "performance art": "Live actions presented as art, often documented by photo or video.",
  "digital camera": "Camera capturing images as electronic data rather than film.",
  cad: "Computer-aided design — digital drafting and modelling for design.",
  logo: "Graphic mark identifying a brand, event or organisation.",
  mosaic: "Image built from many small pieces of stone, glass or tile.",
  fresco: "Pigment applied on fresh wet plaster so colour bonds with the wall.",
  tempera: "Egg-based or water-based fast-drying paint predating oils.",
  gouache: "Opaque water-based paint (body colour) that covers underlying layers.",
  impasto: "Thick application of paint leaving visible texture on the surface.",
  sfumato: "Soft, smoky transitions between tones (Leonardo's blended edges).",
  "action painting": "Gestural painting emphasising the physical act of applying paint.",
  "hard-edge painting": "Flat areas of colour with sharp, clean boundaries.",
  "colour field painting": "Large areas of flat colour dominating the canvas.",
  "found object": "Everyday item selected and presented as art (readymade tradition).",
  "site-specific": "Work made for and inseparable from a particular location.",
  iconography: "The study and meaning of symbols and subjects in images.",
  "art criticism": "Reasoned discussion evaluating meaning, context and success of art.",
  "art appreciation": "Close looking and informed response to artworks using visual vocabulary.",
  abacus:
    "(1) In architecture, the flat slab on top of a column capital; (2) the crown block linking a round column to the structure above.",
  academicism: "Art made according to formal academy rules and conventional standards (salon tradition).",
  "academy painting": "Official academic-style painting taught and exhibited through art academies.",
  accelerator: "Additive that speeds up drying or chemical setting in paint or print processes.",
  acetone: "Volatile solvent (propanone) used to thin materials and clean tools.",
  achromatic: "Without colour hue; using only black, white and grey values.",
  art: "Creative practice of making visual works — painting, sculpture, design and related media.",
  aesthetics: "Philosophical study of beauty, taste and how we experience art.",
  architecture: "Design and construction of buildings and the spaces people inhabit.",
  animation: "Art of creating moving images frame by frame or digitally.",
  anatomy: "Structure of the human body, essential for proportion in figure art.",
  banner: "Long narrow flag or horizontal sign used in display or design.",
  basilica: "Large Roman hall with nave and aisles, influential on church design.",
  bisque: "Clay ware fired once without glaze; porous and ready for glazing.",
  background: "Area behind the main subject; sets off forms and depth in the image.",
  binding: "How pages are joined in a book or portfolio (stitch, glue, etc.).",
  basketry: "Craft of weaving plant fibres into baskets or sculptural forms.",
  bend: "Curved form or fold in material; also a metalworking term for shaping.",
  benzene: "Volatile solvent used in some studio processes (use with ventilation).",
  bitumen: "Thick tar-like material used in paint or printmaking grounds.",
  buttress: "Projecting support that carries thrust from an arch or vault.",
  baren: "Japanese pad for rubbing paper onto a woodblock in printmaking.",
  "three-dimensional design":
    "Design of objects and environments using height, width and depth (product, spatial, etc.).",
  "wide-angle lens": "Camera lens with short focal length that takes in a broad field of view.",
  "alum paper":
    "Paper treated with papermaker's alum (aluminium sulfate) so sizing or ink bonds to cellulose fibres; in other contexts \"aluminium paper\" can mean metallic foil-backed sheet — not the same thing.",
  "critical appreciation":
    "Structured appreciation of art: describe what you see, use evidence from the work, and explain your judgement with clear reasons rather than personal preference alone.",
  overexposure:
    "Too much light reaches the film or sensor, so bright areas lose detail and look washed out or pure white.",
  underexposure:
    "Too little light is recorded, so shadows go very dark and detail is lost in the blacks.",
  exposure: "The amount of light recorded in a photograph, set by shutter speed, aperture and ISO."
};

export { ZH_GLOSS_BASE };
export const ZH_GLOSS = { ...ZH_GLOSS_AUTO, ...ZH_GLOSS_BASE };

const EN_WORD_HINTS = [
  [/bat wash/i, "a protective coating on kiln bats so work does not stick when fired"],
  [/\bwash\b/i, "a liquid coating or cleansing layer used in studio practice"],
  [/\bfiring\b/i, "a stage of heating work in a kiln"],
  [/\bglaze\b/i, "a glassy surface coating fused in firing"],
  [/\bkiln\b/i, "relating to kiln structure, loading or firing"],
  [/\bperspective\b/i, "a system for showing depth on a flat surface"],
  [/\bcomposition\b/i, "how elements are arranged in the picture"],
  [/\betch(ing)?\b/i, "an intaglio printmaking process using acid or scratched lines"],
  [/\blitho/i, "planographic printing from stone or plate"],
  [/\bwoodcut\b/i, "relief printing from a carved block"],
  [/\bphoto/i, "relating to photography or lens-based images"],
  [/\blens\b/i, "a camera or optical lens control"],
  [/\bexposure\b/i, "the amount of light recorded in photography"],
  [/\bbrush\b/i, "a tool for applying paint or ink"],
  [/\bpalette\b/i, "a surface for mixing colours"],
  [/\bcanvas\b/i, "fabric support for painting"],
  [/\beasel\b/i, "a stand supporting work while it is made"],
  [/\brelief\b/i, "raised form projecting from a background plane"],
  [/\bsculpt/i, "three-dimensional carved or modelled form"],
  [/\barabesque\b/i, "flowing scroll or interlaced curvilinear ornament"],
  [/\bcolumn\b/i, "an architectural vertical support or pillar"],
  [/\barch\b/i, "a curved structural span or opening"],
  [/\bvault\b/i, "an arched ceiling or roof structure"],
  [/\bmosaic\b/i, "images assembled from small tesserae"],
  [/\btone\b/i, "the lightness or darkness of an area (value)"],
  [/\bhue\b/i, "the name of a colour"],
  [/\btexture\b/i, "surface quality in the image"],
  [/\brhythm\b/i, "repetition creating visual movement"],
  [/\bbalance\b/i, "distribution of visual weight in the layout"],
  [/\bcontrast\b/i, "strong difference between visual elements"],
  [/\bunity\b/i, "elements forming a coherent whole"],
  [/\bemphasis\b/i, "visual focus attracting the viewer's eye"],
  [/\bproportion\b/i, "relative scale between parts"],
  [/\bspace\b/i, "areas of depth, foreground and background"],
  [/\bline\b/i, "a mark or implied path directing the eye"],
  [/\bshape\b/i, "a flat enclosed area with contour"],
  [/\bform\b/i, "three-dimensional volume and mass"],
  [/\bcolour\b|\bcolor\b/i, "an aspect of colour in the work"],
  [/\bdesign\b/i, "planned visual communication or layout"],
  [/\bprint\b/i, "a printed image or reproduction process"],
  [/\bclay\b/i, "malleable earth material in ceramics"],
  [/\bpottery\b/i, "vessels or objects made from fired clay"],
  [/\bceramic/i, "clay-based making, glazing or firing"],
  [/\binstallation\b/i, "work occupying a three-dimensional space"],
  [/\bkinetic\b/i, "art incorporating actual or implied movement"],
  [/\bdigital\b/i, "computer-based image or design process"],
  [/\bgraphic\b/i, "commercial or communicative visual design"],
  [/\btypograph/i, "letterform and text layout design"],
  [/\bposter\b/i, "large promotional or informational print"],
  [/\blogo\b/i, "identifying graphic mark"],
  [/\babstract\b/i, "non-literal or non-representational imagery"],
  [/\brealist/i, "faithful depiction of visible appearance"],
  [/\bexpression/i, "communicating emotion or inner state"],
  [/\bsymbol/i, "standing for an idea beyond literal appearance"],
  [/\bmovement\b/i, "an art-historical style or group tendency"],
  [/\bism\b/i, "an art movement suffix (style label)"]
];

const FIELD_EN = {
  ceramic: "ceramics (clay, glaze and kiln processes)",
  print: "printmaking",
  photo: "photography",
  architecture: "architecture",
  movement: "art history and stylistic movements",
  colour: "colour theory and description",
  composition: "composition and pictorial structure",
  form: "form, line and mark-making",
  sculpture: "sculpture and three-dimensional work",
  design: "design and visual communication",
  concept: "art appreciation and critical concepts",
  general: "visual arts",
  material: "art materials and studio processes",
  social: "social and cultural context"
};

const DOM_EN = {
  版畫: "printmaking",
  陶藝: "ceramics",
  攝影: "photography",
  建築: "architecture",
  繪畫: "painting",
  設計: "design",
  印刷: "printing",
  色彩學: "colour theory",
  雕塑: "sculpture",
  工藝: "craft and applied arts",
  油畫: "oil painting",
  中國繪畫: "Chinese painting",
  書法: "calligraphy"
};

export function stripZhDomain(zhSense) {
  return zhSense.replace(/[（(][^）)]+[）)]/g, "").trim();
}

export function isTautology(term, gloss) {
  if (!gloss) return true;
  const t = term.toLowerCase().replace(/[-/]/g, " ").replace(/\s+/g, " ").trim();
  const b = gloss
    .replace(/^\(\d+\)\s*/, "")
    .toLowerCase()
    .replace(/\.$/, "")
    .trim();
  return b === t;
}

export function expandMovementFromZh(zhCore, term) {
  if (ZH_GLOSS[zhCore]) return ZH_GLOSS[zhCore];
  const name = term.replace(/-/g, " ");
  if (/主義|流派|派$|風$|式$/.test(zhCore)) {
    return `Art-historical style or movement (“${name}”): typical period, media and ideas linked to specific works and artists.`;
  }
  return null;
}

/** Short English definition when glossary text only echoes the headword. */
export function expandFromZhCore(zhCore, term, cat = "general", doms = []) {
  const key = term.toLowerCase();
  if (EN_TERM_DEF[key]) {
    const d = EN_TERM_DEF[key];
    return d.includes(":") ? d.replace(/^[^:]+:\s*/, "").trim() : d;
  }
  const hint = inferFromEnglishTerm(term, cat);
  if (hint && !isTautology(term, hint)) return hint.replace(/\.$/, "");

  const z = zhCore;
  const movement = expandMovementFromZh(z, term);
  if (movement) return movement;

  const lens = detectLens(term, z, cat, doms);
  const lead = enLensPhrase(lens);

  if (z.endsWith("學") && z.length >= 2)
    return `${lead}, this is the academic study of ${term.replace(/-/g, " ")} (theory and methods).`;
  if (/透視/.test(z))
    return `${lead}, a system for showing depth and space on a flat picture surface.`;
  if (/構圖/.test(z))
    return `${lead}, how line, shape, colour and space are arranged to guide the viewer's eye.`;
  if (/民間|民俗|鄉土|工藝|織|籃|剪紙|皮影|風俗/.test(z))
    return `${lead}, a folk or craft tradition tied to community life and local culture.`;
  if (/宗教|祭|聖|廟|儀|偶像|圖騰|基督|佛|菩|羅馬|拜占庭/.test(z))
    return `${lead}, imagery or forms shaped by religious belief, ritual and patronage.`;
  if (/皇|宮|帝|廷|墓|碑|紀念/.test(z))
    return `${lead}, art linked to power, memorial culture or court patronage.`;
  if (/批評|評賞|審美|美學|博物|畫廊|展覽|拍賣/.test(z))
    return `${lead}, how works are displayed, judged or discussed in art worlds.`;
  if (/紙|墨|筆|硯|絹|礬|熟紙|宣紙|顏料|釉|窯|燒|坯|泥|版|腐蝕|顯影|定影|溶劑|膠/.test(z))
    return `${lead}, a material, tool or process step learners connect to how the object was made.`;
  if (/陶|釉|窯|坯|泥/.test(z))
    return `${lead}, a ceramics term for clay, glaze, forming or firing.`;
  if (/版|印|蚀|刻|腐蝕|網印|絲印/.test(z))
    return `${lead}, a printmaking term for plate, ink, pressure or paper.`;
  if (/攝|相|鏡|曝光|快門|光圈|菲林/.test(z))
    return `${lead}, a photography term for camera, light or chemical/digital capture.`;
  if (/柱|拱|廊|牆|建|殿|立面|穹|券/.test(z))
    return `${lead}, an architectural element in built space (structure, scale or style).`;
  if (/雕塑|浮雕|像|塑像|造像/.test(z))
    return `${lead}, a sculptural form, technique or subject in three dimensions.`;
  if (/設計|字體|海報|版面|標誌|包裝|廣告/.test(z))
    return `${lead}, a design choice affecting communication, audience and visual hierarchy.`;
  if (/色|調|明暗|彩|色相|飽和|對比/.test(z))
    return `${lead}, a colour or tonal quality that affects mood and spatial reading.`;

  const seg = segmentTranslate(z);
  if (seg && !isTautology(term, seg) && !isBadGlossText(seg) && seg.length >= 12) {
    return `${lead}, ${seg.charAt(0).toLowerCase() + seg.slice(1)}.`;
  }

  return `${lead}, this matches the Chinese term “${z}” (headword: ${term.replace(/-/g, " ")}).`;
}

export function translateZhSense(zhSense) {
  const core = stripZhDomain(zhSense);
  if (ZH_GLOSS[core]) {
    const g = ZH_GLOSS[core];
    if (!isSegmentGarbage(g)) return g;
  }
  const seg = segmentTranslate(core);
  if (seg && !isSegmentGarbage(seg)) return seg;
  return null;
}

function glossForSense(term, zhSense, cat, doms = []) {
  const core = stripZhDomain(zhSense);
  let t = translateZhSense(zhSense);
  if (t && isBadGlossText(t)) t = null;
  if (t && !isTautology(term, t)) return t;
  return expandFromZhCore(core, term, cat, doms);
}

export function inferFromEnglishTerm(term, cat = "general") {
  const t = term.toLowerCase().trim();
  if (EN_TERM_DEF[t]) return EN_TERM_DEF[t];
  if (cat === "movement" && /ism$/.test(t)) {
    const name = term.replace(/-/g, " ");
    return `Art-historical movement (“${name}”): typical period, media and ideas students link to named works.`;
  }
  for (const [re, def] of EN_WORD_HINTS) {
    if (re.test(t)) {
      if (re.source.includes("ism") && cat === "movement") {
        const name = term.replace(/-/g, " ");
        return `Art-historical movement (“${name}”): typical period, media and ideas students link to named works.`;
      }
      return def;
    }
  }
  return null;
}

function englishFromCompound(term, cat, senses = []) {
  const core0 = senses[0] ? stripZhDomain(senses[0]) : "";
  const exp = expandFromZhCore(core0, term, cat, []);
  if (exp && !isTautology(term, exp)) return `${term}: ${exp.replace(/\.$/, "")}.`;

  const t = term.toLowerCase();
  const bits = [];
  for (const [re, def] of EN_WORD_HINTS) {
    if (re.test(t)) {
      if (re.source.includes("ism") && cat === "movement") {
        bits.push(
          `Art-historical movement (“${term.replace(/-/g, " ")}”): typical period, media and ideas students link to named works`
        );
      } else bits.push(def.replace(/\.$/, ""));
    }
  }
  if (bits.length) {
    const uniq = [...new Set(bits)];
    return `${term}: ${uniq.join("; ")}.`;
  }
  return `${term}: ${exp.replace(/\.$/, "")}.`;
}

export function domainPhraseEn(doms) {
  const names = doms.map((d) => DOM_EN[d] || "").filter(Boolean);
  if (!names.length) return "";
  return ` Common in ${[...new Set(names)].join(", ")}.`;
}

