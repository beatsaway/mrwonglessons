/**
 * Builds pages/part*.js triple bundles from part HTML + dictionaries-ne/ur.js
 * Run from repo: node tools/emit-page-bundles.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SBA = path.join(__dirname, "..");

function parseDict(filename) {
  const s = fs.readFileSync(path.join(SBA, filename), "utf8");
  const marker = filename.includes("ne") ? "SBA_DICTIONARIES.ne = " : "SBA_DICTIONARIES.ur = ";
  const start = s.indexOf(marker);
  if (start === -1) throw new Error("marker not found in " + filename);
  const brace = s.indexOf("{", start);
  let depth = 0;
  let i = brace;
  for (; i < s.length; i++) {
    const ch = s[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  const body = s.slice(brace, i);
  return new Function(`"use strict"; return ${body};`)();
}

function extractHtmlStrings(html) {
  const out = {};
  const re = /<(\w+)(?:\s[^>]*)?\sdata-i18n="([^"]+)"(?:[^>]*)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(html))) {
    out[m[2]] = m[3].trim();
  }
  return out;
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : "";
}

/** Remove inner HTML of elements that carry data-i18n (content now lives in pages/*.js). */
function stripDataI18nInHtml(html) {
  return html.replace(
    /<(\w+)([^>]*\bdata-i18n="[^"]+"[^>]*)>([\s\S]*?)<\/\1>/g,
    "<$1$2></$1>"
  );
}

function escStr(s) {
  return (
    JSON.stringify(s)
      // keep output readable on one line per key — JSON is fine
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
  );
}

function buildTriple(key, enMap, ne, ur) {
  const en = enMap[key] != null ? enMap[key] : "";
  const triple = { en, ne: ne[key] != null ? ne[key] : en, ur: ur[key] != null ? ur[key] : en };
  return `    ${JSON.stringify(key)}: { en: ${escStr(triple.en)}, ne: ${escStr(triple.ne)}, ur: ${escStr(triple.ur)} }`;
}

function chromeTriples(ne, ur) {
  const enNav = {
    "chrome.lang_label": "Language",
    "nav.brand": "VA SBA · HKDSE",
    "nav.how_to": "How to do well",
    "nav.intro": "Introduction & framework",
    "nav.req": "Requirements & portfolio",
    "nav.criteria": "Assessment criteria",
    "nav.rw_rubric": "Research Workbook rubric",
    "nav.art_rubric": "Artwork / Critical Studies rubric",
    "nav.conduct": "Conduct of SBA",
    "nav.admin": "Administration",
    "nav.moderation": "Moderation",
    "nav.malpractice": "Malpractice & appendices",
  };
  const entries = [];
  for (const key of Object.keys(enNav)) {
    const en = enNav[key];
    entries.push(
      `    ${JSON.stringify(key)}: { en: ${escStr(en)}, ne: ${escStr(ne[key] != null ? ne[key] : en)}, ur: ${escStr(ur[key] != null ? ur[key] : en)} }`
    );
  }
  return entries.join(",\n");
}

function pageSlug(file) {
  return file === "index.html" ? "part0" : file.replace(".html", "");
}

const pages = [
  "index.html",
  "part1.html",
  "part2.html",
  "part3.html",
  "part3b.html",
  "part3c.html",
  "part4.html",
  "part5.html",
  "part6.html",
  "part7.html",
];

const ne = parseDict("dictionaries-ne.js");
const ur = parseDict("dictionaries-ur.js");

const chromeOut = path.join(SBA, "chrome.js");
fs.writeFileSync(
  chromeOut,
  [
    "/* Auto-generated: shared sidebar chrome — run node tools/emit-page-bundles.mjs to refresh */",
    "(function () {",
    "  if (!window.SBA_i18n) return;",
    "  window.SBA_i18n.mergeStrings({",
    chromeTriples(ne, ur),
    "  });",
    "})();",
    "",
  ].join("\n"),
  "utf8"
);
console.log("Wrote", chromeOut);

for (const file of pages) {
  const htmlPath = path.join(SBA, file);
  const html = fs.readFileSync(htmlPath, "utf8");
  const slug = pageSlug(file);
  const enMap = extractHtmlStrings(html);
  if (Object.keys(enMap).length === 0) {
    console.warn(
      "Skip",
      file,
      "(no text inside data-i18n tags — HTML already stripped). Restore English in HTML before re-running emit, or edit pages/" + slug + ".js directly."
    );
    continue;
  }
  const titleKey = "doc.title." + slug;
  const titleEn = extractTitle(html);
  const titleNe = ne[titleKey] || titleEn;
  const titleUr = ur[titleKey] || titleEn;

  const keys = new Set(Object.keys(enMap));
  keys.add(titleKey);

  const lines = [];
  lines.push(`/* Auto-generated: EN/NE/UR strings for ${file} — run node tools/emit-page-bundles.mjs to refresh */`);
  lines.push(`(function () {`);
  lines.push(`  if (!window.SBA_i18n) return;`);
  lines.push(`  window.SBA_i18n.mergeStrings({`);

  const sortedKeys = Array.from(keys).filter((k) => k !== titleKey).sort();
  const entries = [
    `    ${JSON.stringify(titleKey)}: { en: ${escStr(titleEn)}, ne: ${escStr(titleNe)}, ur: ${escStr(titleUr)} }`,
  ];
  for (const key of sortedKeys) {
    if (!ne[key] && !ur[key] && !enMap[key]) continue;
    entries.push(buildTriple(key, enMap, ne, ur));
  }
  lines.push(entries.join(",\n"));
  lines.push(`  });`);
  lines.push(`})();`);
  lines.push("");

  const outName = path.join(SBA, "pages", slug + ".js");
  fs.mkdirSync(path.dirname(outName), { recursive: true });
  fs.writeFileSync(outName, lines.join("\n"), "utf8");
  console.log("Wrote", outName);

  const stripped = stripDataI18nInHtml(html);
  if (stripped !== html) {
    fs.writeFileSync(htmlPath, stripped, "utf8");
    console.log("Stripped data-i18n bodies in", file);
  }
}

console.log("Done.");
