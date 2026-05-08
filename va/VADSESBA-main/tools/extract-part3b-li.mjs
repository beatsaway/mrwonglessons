import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "..", "part3b.html"), "utf8");
const m = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
if (!m) throw new Error("no tbody");
const lis = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1].trim());
console.log("count", lis.length);
fs.writeFileSync(
  path.join(__dirname, "part3b-li-en.json"),
  JSON.stringify(lis, null, 0),
  "utf8"
);
console.log("wrote tools/part3b-li-en.json");
