import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(__dirname, "..", "part3b.html");
let html = fs.readFileSync(fp, "utf8");

const m = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
if (!m) throw new Error("tbody not found");
let tbody = m[1];
let n = 0;
tbody = tbody.replace(/<li>/g, () => {
  n++;
  const key = "p3b.b" + (n < 10 ? "0" + n : String(n));
  return `<li data-i18n="${key}">`;
});
if (n !== 54) throw new Error("expected 54 li, got " + n);

html = html.replace(/<tbody>[\s\S]*?<\/tbody>/, "<tbody>" + tbody + "</tbody>");
fs.writeFileSync(fp, html, "utf8");
console.log("Tagged", n, "li in part3b.html");
