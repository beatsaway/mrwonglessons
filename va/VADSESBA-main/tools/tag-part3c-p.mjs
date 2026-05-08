import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(__dirname, "..", "part3c.html");
let html = fs.readFileSync(fp, "utf8");

const m = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
if (!m) throw new Error("tbody not found");
let tbody = m[1];
let n = 0;
tbody = tbody.replace(/<p class="cell-text">/g, () => {
  n++;
  const key = "p3c.b" + (n < 10 ? "0" + n : String(n));
  return `<p class="cell-text" data-i18n="${key}">`;
});
if (n !== 36) throw new Error("expected 36 p.cell-text, got " + n);

html = html.replace(/<tbody>[\s\S]*?<\/tbody>/, "<tbody>" + tbody + "</tbody>");
fs.writeFileSync(fp, html, "utf8");
console.log("Tagged", n, "p.cell-text in part3c.html");
