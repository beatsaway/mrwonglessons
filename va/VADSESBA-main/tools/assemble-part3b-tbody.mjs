/**
 * Reads tools/part3b-li-en.json + part3b-translations.mjs
 * Writes pages/part3b-tbody.js (mergeStrings for p3b.b01–p3b.b54).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { NE, UR } from "./part3b-translations.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const en = JSON.parse(fs.readFileSync(path.join(__dirname, "part3b-li-en.json"), "utf8"));

if (en.length !== NE.length || en.length !== UR.length) {
  throw new Error("length mismatch en/ne/ur: " + [en.length, NE.length, UR.length].join(","));
}

function pad(n) {
  return n < 10 ? "0" + n : String(n);
}

const lines = [];
lines.push(
  "/* Research Workbook rubric — score column cells (p3b.b01–p3b.b54). Source: tools/part3b-li-en.json + part3b-translations.mjs; rebuild: node tools/assemble-part3b-tbody.mjs */"
);
lines.push("(function () {");
lines.push("  if (!window.SBA_i18n) return;");
lines.push("  window.SBA_i18n.mergeStrings({");

const entries = [];
for (let i = 0; i < en.length; i++) {
  const key = "p3b.b" + pad(i + 1);
  entries.push(
    `    ${JSON.stringify(key)}: { en: ${JSON.stringify(en[i])}, ne: ${JSON.stringify(NE[i])}, ur: ${JSON.stringify(UR[i])} }`
  );
}
lines.push(entries.join(",\n"));
lines.push("  });");
lines.push("})();");
lines.push("");

fs.writeFileSync(path.join(root, "pages", "part3b-tbody.js"), lines.join("\n"), "utf8");
console.log("Wrote pages/part3b-tbody.js (" + en.length + " cells)");
