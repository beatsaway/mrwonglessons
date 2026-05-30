import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { isSegmentGarbage } from "./uk-english.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const notes = new Function(
  fs.readFileSync(path.join(dir, "vocab-notes.js"), "utf8") + "; return VOCAB_NOTES;"
)();
const overrides = new Set(
  Object.keys(JSON.parse(fs.readFileSync(path.join(dir, "vocab-notes-overrides.json"), "utf8")))
);

const issues = {
  genericExample: [],
  termUsedIn: [],
  ismGarbage: [],
  shortMeaning: [],
  tautology: [],
  hkdseBoiler: [],
  weakExample: [],
  segmentGarbage: []
};

for (const [k, v] of Object.entries(notes)) {
  const en = v.meaning?.en || "";
  const ex = v.example?.en || "";
  if (/Point to where .+ appears in the work/i.test(ex)) issues.genericExample.push(k);
  if (/Term used in /i.test(en)) issues.termUsedIn.push(k);
  if (/ism; doctrine/i.test(en)) issues.ismGarbage.push(k);
  if (isSegmentGarbage(en)) issues.segmentGarbage.push(k);
  if (en.length < 50 && !overrides.has(k)) issues.shortMeaning.push(k);
  const m = en.match(/^[^:]+:\s*(.+?)\.?(?:\s+Common|$)/);
  if (m && m[2]) {
    const b = m[2].replace(/^\(\d+\)\s*/, "").trim().toLowerCase();
    if (b === k || b === k.replace(/-/g, " ")) issues.tautology.push(k);
  }
  if (/HKDSE Visual Arts glossary/i.test(en)) issues.hkdseBoiler.push(k);
  if (!/Example sentence:|Context:|Process:|Analysis:|Interpretation:|Description:|Judgement:/i.test(ex))
    issues.weakExample.push(k);
}

console.log("Total entries:", Object.keys(notes).length);
for (const [name, list] of Object.entries(issues)) {
  console.log(`${name}: ${list.length}`);
  if (list.length) console.log("  e.g.", list.slice(0, 6).join(", "));
}
