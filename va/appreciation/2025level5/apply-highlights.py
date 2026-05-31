# -*- coding: utf-8 -*-
"""Apply manually curated span highlights to index.html Part A answers."""
import re
from pathlib import Path

# (unique paragraph start snippet ~40 chars, list of (phrase, class) longest first)
PARAS = {
  "Plate 1a is titled": [
    ("large-scale", "kw-ob"), ("oil paints", "kw-el"), ("depicts", "kw-ob"), ("rough texture", "kw-el"),
    ("dirty, patchy appearance", "kw-eff"), ("geometrical", "kw-el"), ("multicoloured", "kw-el"),
    ("brownish", "kw-el"), ("rustic feeling", "kw-eff"), ("illusion of a festival", "kw-eff"),
    ("landscape", "kw-ob"), ("crowded", "kw-eff"),
  ],
  "Plate 1b is titled": [
    ("Both", "kw-cmp"), ("organic look", "kw-el"), ("colourful", "kw-el"), ("foreground", "kw-el"),
    ("Unlike", "kw-cmp"), ("empty courtyard", "kw-el"), ("grassland", "kw-ob"), ("vast and undirted", "kw-eff"),
    ("texture akin to moss", "kw-el"), ("more lively", "kw-eff"), ("Multicoloured", "kw-el"),
    ("white, red, even blue", "kw-el"),
  ],
  "In terms of colour, 1a": [
    ("In terms of colour", "kw-cmp"), ("unified palette", "kw-el"), ("dark brown", "kw-el"),
    ("warmer colours", "kw-el"), ("cool colours", "kw-el"), ("stick out", "kw-eff"),
    ("Compared to", "kw-cmp"), ("green and light brown", "kw-el"), ("contrasting with", "kw-pr"),
    ("blue tiled roofs", "kw-el"), ("vibrant", "kw-el"), ("purples, pinks, yellows and reds", "kw-el"),
    ("pop out", "kw-eff"), ("more varied", "kw-eff"),
  ],
  "In terms of shape, 1a": [
    ("In terms of shape", "kw-cmp"), ("geometric shapes", "kw-el"), ("sharp edges", "kw-el"),
    ("straight lines", "kw-el"), ("rounded corners", "kw-el"), ("organic freeform shapes", "kw-el"),
    ("realistic depiction", "kw-ob"), ("stylised depiction", "kw-ob"), ("rounder", "kw-el"), ("wavy tree trunks", "kw-el"),
  ],
  "In terms of space, 1a": [
    ("In terms of space", "kw-cmp"), ("little space", "kw-el"), ("chaotic feeling", "kw-eff"),
    ("focus", "kw-pr"), ("empty spaces", "kw-el"),
  ],
  "1a uses much repetition": [
    ("repetition", "kw-pr"), ("lead your eye", "kw-pr"), ("multicoloured roof house", "kw-el"),
    ("eye-catcher", "kw-pr"),
  ],
  "1a is a depiction": [
    ("depiction", "kw-ij"), ("However", "kw-cmp"), ("hinting at", "kw-ij"), ("referencing", "kw-ij"),
    ("brown of the painting", "kw-el"), ("poor feeling", "kw-eff"), ("high perspective", "kw-el"),
    ("royalty or higher class", "kw-ij"), ("revolution unfold", "kw-ij"),
  ],
  "1b is an appreciation": [
    ("seamless blend", "kw-eff"), ("coexist", "kw-ij"), ("detail and care", "kw-ob"),
    ("clean and neat", "kw-eff"), ("represent the beauty of nature", "kw-ij"),
    ("brown and green", "kw-el"),
  ],
  "Both paintings use different": [
    ("Both", "kw-cmp"), ("even opposing themes", "kw-cmp"),
  ],
  "I prefer 2a more": [
    ("I prefer", "kw-jg"), ("visual elements", "kw-el"), ("detailed", "kw-ob"),
    ("more entertaining", "kw-jg"),
  ],
  "I also like their use": [
    ("hues", "kw-el"), ("united", "kw-pr"), ("blend well together", "kw-eff"), ("colourful", "kw-el"),
    ("belongs together", "kw-eff"),
  ],
  "2a is also quite impactful": [
    ("impactful", "kw-jg"), ("commentary", "kw-ij"), ("playful depiction", "kw-ij"),
    ("thought-provoking", "kw-jg"),
  ],
  "I think it is also a great": [
    ("inspiration", "kw-jg"), ("vary so much", "kw-eff"),
  ],
  "I also admire the artist": [
    ("I admire", "kw-jg"), ("texture", "kw-el"), ("patchy", "kw-el"), ("dirty and old", "kw-eff"), ("realistic", "kw-ob"),
  ],
  "Overall, I think 2a": [
    ("Overall", "kw-jg"), ("I think", "kw-jg"), ("better", "kw-jg"), ("theme", "kw-ij"), ("invoking conversation", "kw-eff"),
  ],
  "5A) The two plates": [
    ("interpretations", "kw-ij"), ("modified shapes", "kw-el"), ("vibrant colours", "kw-el"),
    ("However", "kw-cmp"), ("In terms of", "kw-cmp"), ("dimensions", "kw-ob"), ("message", "kw-ij"),
  ],
  "Plate 5A is a two-dimensional": [
    ("two-dimensional", "kw-el"), ("oil on canvas", "kw-el"), ("horizontal", "kw-el"), ("depicting", "kw-ob"),
    ("geometric shapes", "kw-el"), ("background", "kw-el"), ("pale light green", "kw-el"), ("pale yellow", "kw-el"),
    ("warm tone", "kw-el"), ("dark purple and red", "kw-el"), ("horizontal line patterns", "kw-el"),
    ("foreground", "kw-el"), ("evenly distributed", "kw-el"), ("colourfully", "kw-el"),
    ("geometric shape", "kw-el"), ("rainbows of colour", "kw-el"), ("unrealistic", "kw-ob"),
    ("wavy curves", "kw-el"), ("surrealistically drawn", "kw-ob"), ("shading", "kw-el"),
    ("complementary colours", "kw-el"), ("depth", "kw-el"), ("flatly represents", "kw-el"), ("multiple perspectives", "kw-el"),
  ],
  "Plate 5B is a three-dimensional": [
    ("three-dimensional", "kw-el"), ("installation", "kw-el"), ("transparent glassy sculpture", "kw-el"),
    ("coldness", "kw-eff"), ("gold", "kw-el"), ("bronze", "kw-el"), ("metallic", "kw-el"),
    ("vibrant colours", "kw-el"), ("contrast with", "kw-pr"), ("dull", "kw-el"), ("monochromatic", "kw-el"),
  ],
  "Both plates are showing the modification": [
    ("Both", "kw-cmp"), ("imply", "kw-ij"), ("suggest", "kw-ij"), ("unrealism", "kw-eff"),
    ("humanise", "kw-ij"), ("fantasy", "kw-ij"), ("imagery", "kw-ij"), ("In depth", "kw-cmp"),
    ("imply our lack of connection", "kw-ij"), ("empathy", "kw-ij"),
  ],
  "Plate 5B seems to blend": [
    ("suggesting", "kw-ij"), ("suggest", "kw-ij"), ("abstract shapes", "kw-el"), ("However", "kw-cmp"),
    ("convey a message", "kw-ij"), ("mistreatment", "kw-ij"), ("Therefore", "kw-cmp"), ("media and representation", "kw-ob"),
  ],
  "In terms of colour use, both plates": [
    ("In terms of colour", "kw-cmp"), ("Both", "kw-cmp"), ("vibrant colours", "kw-el"), ("However", "kw-cmp"),
    ("I believe", "kw-jg"), ("monochromatic", "kw-el"), ("symbolise", "kw-ij"), ("misunderstanding", "kw-eff"),
    ("lack of empathy", "kw-ij"),
  ],
  "In terms of object arrangement": [
    ("In terms of", "kw-cmp"), ("I believe", "kw-jg"), ("convey its message", "kw-ij"), ("joyful colours", "kw-el"),
    ("palette", "kw-el"), ("warm", "kw-el"), ("harmony", "kw-pr"), ("big picture", "kw-eff"),
    ("atmosphere", "kw-eff"), ("two-dimensional medium", "kw-el"), ("fantasy world", "kw-ij"),
    ("Hence", "kw-cmp"), ("more all-rounded", "kw-jg"), ("relationship", "kw-ij"),
  ],
  "Both plates are craftily": [
    ("Both", "kw-cmp"), ("successfully", "kw-jg"), ("message", "kw-ij"),
  ],
  "Both plate 2a and 2b are installations": [
    ("Both", "kw-cmp"), ("installations", "kw-el"), ("displayed in public", "kw-ob"),
  ],
  "For plate 2a, it is named": [
    ("stainless steel", "kw-ob"), ("plastic composites", "kw-ob"), ("sandblast ground", "kw-ob"), ("LED light", "kw-ob"),
    ("size", "kw-ob"),
  ],
  "Plate 2a features a cartoonised": [
    ("cartoonised", "kw-ob"), ("ratio", "kw-el"), ("anatomy", "kw-ob"), ("unrealistic", "kw-ob"),
    ("cylinder", "kw-el"), ("bright warm colour", "kw-el"), ("yellow, orange, light green", "kw-el"),
    ("sky blue and purple", "kw-el"), ("lively, playful mood", "kw-eff"), ("representing child", "kw-ij"),
    ("effect of childish", "kw-eff"), ("public place", "kw-ob"),
  ],
  "For plate 2b, it is named": [
    ("bronze", "kw-ob"), ("As similarity", "kw-cmp"), ("However", "kw-cmp"), ("realistic", "kw-ob"),
    ("facial features", "kw-ob"), ("body parts", "kw-ob"), ("folds of his clothes", "kw-ob"),
    ("torso empty", "kw-el"), ("unstable", "kw-eff"), ("emptiness", "kw-eff"), ("numbness", "kw-eff"),
    ("however", "kw-cmp"), ("loss of faith", "kw-ij"),
  ],
  "For artwork media, plate 2a": [
    ("However", "kw-cmp"), ("creative and successful", "kw-jg"), ("bright colour", "kw-el"),
    ("bright colours", "kw-el"), ("LED lights", "kw-ob"), ("stand out", "kw-eff"), ("dull colours", "kw-el"),
    ("express", "kw-ij"), ("optimistic", "kw-eff"), ("great contrast", "kw-pr"),
    ("compared to", "kw-cmp"), ("monotone", "kw-el"), ("less saturated", "kw-el"),
    ("negative mood", "kw-eff"), ("colortone", "kw-el"), ("light yellow tone", "kw-el"),
    ("gave a message", "kw-ij"), ("limitations from social", "kw-ij"), ("numb person", "kw-eff"),
    ("escape from reality", "kw-ij"),
  ],
  "Despite the great contrast": [
    ("Despite", "kw-cmp"), ("great contrast", "kw-pr"), ("I think", "kw-jg"), ("theme", "kw-ij"),
    ("expressing", "kw-ij"), ("However", "kw-cmp"), ("Both artworks express", "kw-ij"),
    ("different perspective", "kw-cmp"), ("personally I think", "kw-jg"), ("more creative", "kw-jg"),
    ("more unique", "kw-jg"), ("expressive", "kw-jg"),
  ],
  "Plate 1a is a womenswear": [
    ("womenswear", "kw-ob"), ("while", "kw-cmp"),
  ],
  "In terms of visual effect, plate 1a": [
    ("In terms of visual effect", "kw-cmp"), ("huge visual effect", "kw-eff"), ("white mask", "kw-el"),
    ("pattern", "kw-el"), ("irregular grids", "kw-el"), ("3D spikes", "kw-el"), ("purple, grey, silver and sky blue", "kw-el"),
    ("metallic effect", "kw-el"), ("yarn dress", "kw-el"), ("many layers", "kw-el"), ("black colour", "kw-el"),
    ("semi-transparent", "kw-el"), ("visible", "kw-eff"), ("black leather boots", "kw-el"),
  ],
  "In plate 1b, there is a minidress": [
    ("silhouette", "kw-el"), ("X-line silhouette", "kw-el"), ("blue collar", "kw-el"),
    ("blue-and-white stripes", "kw-el"), ("vertical", "kw-el"), ("closely packed", "kw-el"),
    ("cap-shape sleeves", "kw-el"), ("sky blue-and-white colours", "kw-el"), ("thicker and less dense", "kw-el"),
    ("drapings", "kw-el"), ("loose balloons", "kw-el"), ("exaggeration", "kw-eff"),
    ("In terms of background", "kw-cmp"), ("plain colour background", "kw-el"), ("black", "kw-el"), ("sky blue", "kw-el"),
  ],
  "In terms of visual design principle": [
    ("In terms of visual design principle", "kw-cmp"), ("balance", "kw-pr"), ("symmetrically balanced", "kw-pr"),
    ("pleasing feel", "kw-eff"), ("contrast", "kw-pr"), ("different materials", "kw-el"),
    ("metallic appearances", "kw-el"), ("floaty and lighter feeling", "kw-eff"), ("light material", "kw-el"),
    ("strong contrast", "kw-pr"), ("texture", "kw-el"), ("different size of pattern", "kw-el"),
    ("different visual effect", "kw-eff"), ("more fun", "kw-eff"), ("tighter silhouette", "kw-el"),
    ("loose silhouette", "kw-el"), ("creates contrast", "kw-pr"),
  ],
  "Also, plates 1a and 1b create": [
    ("Also", "kw-cmp"), ("rhythm", "kw-pr"), ("repeated mass", "kw-pr"), ("variety in their sizes", "kw-pr"),
    ("generates movement", "kw-pr"), ("waterfall-like pattern", "kw-pr"), ("guiding the viewer's eyes", "kw-pr"),
    ("focal point", "kw-pr"), ("unusual", "kw-eff"), ("exaggeration", "kw-eff"), ("unity", "kw-pr"), ("unified", "kw-pr"),
  ],
  "In terms of design concept": [
    ("In terms of design concept", "kw-cmp"), ("message", "kw-ij"), ("beliefs", "kw-ij"), ("rebellious", "kw-ij"),
    ("not traditional", "kw-eff"), ("not emphasized", "kw-pr"), ("aggressive", "kw-eff"), ("bell shape", "kw-el"),
    ("symbolizes", "kw-ij"), ("liberation", "kw-ij"), ("delivering a message", "kw-ij"),
    ("can be read as", "kw-ij"), ("women empowerment", "kw-ij"),
  ],
  "In plate 1b, the designer Jonathan": [
    ("playful design concepts", "kw-ij"), ("balloon shape", "kw-el"), ("childhood", "kw-ij"),
    ("fun and exploration", "kw-ij"),
  ],
  "Besides, the creation of the shoes": [
    ("emphasis", "kw-pr"), ("craftsmanship", "kw-jg"), ("innovative", "kw-jg"), ("meaningful", "kw-ij"),
    ("rethink", "kw-ij"), ("provokes", "kw-ij"),
  ],
  "In comparison, I like plate 1b": [
    ("In comparison", "kw-cmp"), ("I like", "kw-jg"), ("craftsmanship", "kw-jg"), ("savoir-faire", "kw-jg"),
    ("deliver their message clearly", "kw-ij"), ("obvious and deliberate", "kw-eff"), ("resonate with", "kw-jg"),
    ("design principles", "kw-pr"), ("brand DNA", "kw-ij"), ("emphasize", "kw-pr"), ("deep meaning", "kw-jg"),
  ],
  "Both plate 3a and 3b are package": [
    ("Both", "kw-cmp"), ("package design", "kw-ob"), ("shape of squirrel", "kw-el"),
    ("white package", "kw-el"), ("chubby face", "kw-eff"), ("body shapes", "kw-el"),
    ("typography", "kw-el"), ("sans serif", "kw-el"), ("modern typography", "kw-el"), ("traditional typography", "kw-el"),
  ],
  "The colour in plate 3a is warm": [
    ("warm and saturated", "kw-el"), ("vitality and enthusiasm", "kw-eff"), ("grab audience's attention", "kw-eff"),
    ("dull and low-key", "kw-el"), ("white and brown", "kw-el"), ("relax and soft", "kw-eff"),
    ("affinity and comfortable", "kw-eff"),
  ],
  "In plate 3a it used symmetrical": [
    ("symmetrical balance", "kw-pr"), ("sense of stability", "kw-eff"), ("visual consistency", "kw-eff"),
    ("readability", "kw-eff"), ("blank space", "kw-el"), ("unlimited imagination", "kw-eff"),
    ("interact with viewer", "kw-eff"), ("emphasis", "kw-pr"), ("stands out", "kw-eff"),
    ("guide audiences' attention", "kw-pr"), ("visual appeal", "kw-eff"),
  ],
  "Regarding the functions": [
    ("functions", "kw-ij"), ("purchase the product", "kw-ij"),
  ],
  "Regarding symbolic meanings": [
    ("symbolic meanings", "kw-ij"), ("represent", "kw-ij"), ("resonate with", "kw-ij"), ("evoke", "kw-ij"),
    ("represent rice", "kw-ij"), ("key feature", "kw-ij"),
  ],
  "Regarding audience, in plate 3a": [
    ("audience", "kw-ij"), ("cute and adorable", "kw-eff"), ("happiness and joy", "kw-eff"),
    ("daily necessity", "kw-ij"), ("reassurance and credibility", "kw-eff"),
  ],
  "I prefer plate 3a, as the design": [
    ("I prefer", "kw-jg"), ("user friendly", "kw-jg"), ("successful design", "kw-jg"), ("resonate more", "kw-jg"),
    ("relevant and make sense", "kw-jg"), ("shape and texture", "kw-el"),
  ],
  "However, in plate 3b, it is hard": [
    ("However", "kw-cmp"), ("soft material", "kw-el"), ("I think", "kw-jg"), ("more stable", "kw-jg"),
  ],
}

def wrap(text, phrase, cls):
    if phrase not in text:
        return text
    return text.replace(
        phrase,
        f'<span class="{cls}">{phrase}</span>',
        1
    )

def apply_para(html, start_key, wraps):
    pat = re.compile(
        r'(<p class="ans">)(.*?)(</p>)',
        re.DOTALL
    )
    for m in pat.finditer(html):
        body = m.group(2)
        if not body.startswith(start_key):
            continue
        if '<span class="kw-' in body:
            continue
        new_body = body
        for phrase, cls in sorted(wraps, key=lambda x: -len(x[0])):
            new_body = wrap(new_body, phrase, cls)
        return html[:m.start(2)] + new_body + html[m.end(2):]
    return html

path = Path(__file__).parent / "index.html"
html = path.read_text(encoding="utf-8")

for start, wraps in PARAS.items():
    html = apply_para(html, start, wraps)

path.write_text(html, encoding="utf-8")
print("applied", len(PARAS), "paragraphs")
