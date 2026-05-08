/**
 * Reads tools/part3c-li-en.json + part3c-translations.mjs
 * Writes pages/part3c-tbody.js (p3c.b01–p3c.b36).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { NE, UR } from "./part3c-translations.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const en = JSON.parse(fs.readFileSync(path.join(__dirname, "part3c-li-en.json"), "utf8"));
if (en.length !== NE.length || en.length !== UR.length) {
  throw new Error("length mismatch: " + [en.length, NE.length, UR.length].join(","));
}

function pad(n) {
  return n < 10 ? "0" + n : String(n);
}

const lines = [];
lines.push(
  "/* Artwork/Critical Studies rubric cells (p3c.b01–p3c.b36). Rebuild: node tools/assemble-part3c-tbody.mjs */"
);
lines.push("(function () {");
lines.push("  if (!window.SBA_i18n) return;");
lines.push("  window.SBA_i18n.mergeStrings({");

const entries = [];
for (let i = 0; i < en.length; i++) {
  const key = "p3c.b" + pad(i + 1);
  entries.push(
    `    ${JSON.stringify(key)}: { en: ${JSON.stringify(en[i])}, ne: ${JSON.stringify(NE[i])}, ur: ${JSON.stringify(UR[i])} }`
  );
}
lines.push(entries.join(",\n"));
lines.push("  });");
lines.push("})();");
lines.push("");

fs.writeFileSync(path.join(root, "pages", "part3c-tbody.js"), lines.join("\n"), "utf8");
console.log("Wrote pages/part3c-tbody.js (" + en.length + " cells)");
