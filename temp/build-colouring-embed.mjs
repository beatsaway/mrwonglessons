import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const b1 = fs.readFileSync(join(__dirname, "c01.jpg"));
const b2 = fs.readFileSync(join(__dirname, "c02.jpg"));
const out =
  "window.COLOURING_SHEETS = {\n" +
  "  1: " +
  JSON.stringify("data:image/jpeg;base64," + b1.toString("base64")) +
  ",\n" +
  "  2: " +
  JSON.stringify("data:image/jpeg;base64," + b2.toString("base64")) +
  "\n};\n";
fs.writeFileSync(join(__dirname, "colouring-sheets-embed.js"), out, "utf8");
console.log("Wrote colouring-sheets-embed.js (" + Math.round(out.length / 1024) + " KB)");
