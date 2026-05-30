/** UK modern standard English checks and light normalisation. */

const FRAG_TOKEN =
  /^(quality|nature|method|technique|form|shape|line|colour|color|image|print|stamp|feeling|sense|body|volume|movement|shadow|light|stone|wood|paper|layer|art|work|chart|painting|picture|agent|chemical|tool|vessel|material|degree|level|process|ism|doctrine)$/i;

export function toUkEnglish(text) {
  if (!text) return text;
  return text
    .replace(/\bcolor\b/gi, "colour")
    .replace(/\bcolors\b/gi, "colours")
    .replace(/\banalyze\b/gi, "analyse")
    .replace(/\banalyzing\b/gi, "analysing")
    .replace(/\borganize\b/gi, "organise")
    .replace(/\borganizing\b/gi, "organising")
    .replace(/\bcenter\b/gi, "centre")
    .replace(/\bdefense\b/gi, "defence")
    .replace(/\bprogram\b/gi, "programme")
    .replace(/\blabor\b/gi, "labour")
    .replace(/\bmodeling\b/gi, "modelling")
    .replace(/viewer's/g, "viewer’s")
    .replace(/artist's/g, "artist’s")
    .replace(/\s+/g, " ")
    .trim();
}

/** Machine fragment output from character-by-character translation — not real English. */
export function isSegmentGarbage(s) {
  if (!s || typeof s !== "string") return true;
  const t = s.trim();
  if (t.length < 4) return true;
  if (/[\u4e00-\u9fff]/.test(t)) return true;
  if (/；/.test(t)) return true;
  if (/^\s*[;；]\s*/.test(t)) return true;
  if (/quality;\s*nature/i.test(t)) return true;
  if (/method;\s*technique/i.test(t)) return true;
  if (/painting;\s*picture/i.test(t)) return true;
  if (/print;\s*stamp/i.test(t)) return true;
  if (/form;\s*shape/i.test(t)) return true;
  if (/chart;\s*image/i.test(t)) return true;
  if (/feeling;\s*sense/i.test(t)) return true;
  if (/body;\s*volume/i.test(t)) return true;
  if (/shadow;\s*image/i.test(t)) return true;
  if (/colour pigment;\s*colour/i.test(t)) return true;
  if (/when analysing artworks,\s/i.test(t)) return true;

  const parts = t.split(/\s*;\s*/).map((p) => p.trim()).filter(Boolean);
  if (parts.length >= 2) {
    const fragCount = parts.filter((p) => FRAG_TOKEN.test(p.split(/\s+/)[0]) || p.length < 28).length;
    if (fragCount >= 2) return true;
  }
  if ((t.match(/;/g) || []).length >= 2 && t.length < 100) return true;
  return false;
}
