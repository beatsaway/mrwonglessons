import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "..", "part3c.html"), "utf8");
const m = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
if (!m) throw new Error("no tbody");
const ps = [...m[1].matchAll(/<p class="cell-text">([\s\S]*?)<\/p>/g)].map((x) => x[1].trim());
console.log("count", ps.length);
fs.writeFileSync(path.join(__dirname, "part3c-li-en.json"), JSON.stringify(ps), "utf8");
console.log("wrote tools/part3c-li-en.json");
