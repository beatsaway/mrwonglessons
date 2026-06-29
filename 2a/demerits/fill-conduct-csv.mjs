import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rawPath = path.join(__dirname, "raw");
const csvPath = path.join(
  __dirname,
  "學生操行評核表Student conduct (2025-26 2nd Term) - Form 2 - 2A.csv"
);

function num(value) {
  const n = Number(String(value ?? "").trim());
  return Number.isFinite(n) ? n : 0;
}

function parseDemeritRow(line) {
  const parts = line.split(",");
  const staff = (parts.pop() || "").trim();
  const demerit = parts.pop();
  const minorOffence = parts.pop();
  const majorOffence = parts.pop();
  const followUp = parts.pop();
  parts.shift();
  parts.shift();
  parts.shift();
  parts.shift();
  parts.shift();
  const no = parts.shift();
  const klass = "2A";
  const name = parts.length ? "" : "";
  return {
    no: Number(no),
    majorOffence: num(majorOffence),
    minorOffence: num(minorOffence),
    demerit: num(demerit),
  };
}

function parseDemeritRowFixed(line) {
  const parts = line.split(",");
  const staff = (parts.pop() || "").trim();
  const demerit = parts.pop();
  const minorOffence = parts.pop();
  const majorOffence = parts.pop();
  const followUp = parts.pop();
  const name = parts.pop();
  const no = parts.pop();
  parts.pop();
  return {
    no: Number(no),
    majorOffence: num(majorOffence),
    minorOffence: num(minorOffence),
    demerit: num(demerit),
  };
}

function parseMeritRow(line) {
  const parts = line.split(",");
  parts.pop();
  const merit = parts.pop();
  const minorMerit = parts.pop();
  const majorMerit = parts.pop();
  parts.pop();
  parts.pop();
  parts.pop();
  parts.pop();
  parts.pop();
  const name = parts.pop();
  const no = parts.pop();
  parts.pop();
  parts.shift();
  return {
    no: Number(no),
    majorMerit: num(majorMerit),
    minorMerit: num(minorMerit),
    merit: num(merit),
  };
}

function parseRaw(text) {
  const demerits = [];
  const merits = [];
  let mode = null;
  for (const line of text.trim().split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("班別,班號,姓名,日期,事件")) {
      mode = "demerit";
      continue;
    }
    if (trimmed.startsWith("頁碼,班別,班號,姓名")) {
      mode = "merit";
      continue;
    }
    if (mode === "demerit") demerits.push(parseDemeritRowFixed(trimmed));
    else if (mode === "merit") merits.push(parseMeritRow(trimmed));
  }
  return { demerits, merits };
}

function ensure(map, no) {
  if (!map.has(no)) {
    map.set(no, {
      merit: 0,
      minorMerit: 0,
      majorMerit: 0,
      demerit: 0,
      minorOffence: 0,
      majorOffence: 0,
    });
  }
  return map.get(no);
}

const raw = fs.readFileSync(rawPath, "utf8");
const { demerits, merits } = parseRaw(raw);
const totals = new Map();

for (const row of demerits) {
  const t = ensure(totals, row.no);
  t.majorOffence += row.majorOffence;
  t.minorOffence += row.minorOffence;
  t.demerit += row.demerit;
}
for (const row of merits) {
  const t = ensure(totals, row.no);
  t.majorMerit += row.majorMerit;
  t.minorMerit += row.minorMerit;
  t.merit += row.merit;
}

const csvText = fs.readFileSync(csvPath, "utf8");
const lines = csvText.split(/\r?\n/);
const header = lines[0].split(",");
const idx = {
  classNo: header.indexOf("CLASS NO"),
  merit: header.indexOf("優點"),
  minorMerit: header.indexOf("小功"),
  majorMerit: header.indexOf("大功"),
  demerit: header.indexOf("缺點"),
  minorOffence: header.indexOf("小過"),
  majorOffence: header.indexOf("大過"),
};

function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function formatCsvLine(fields) {
  return fields
    .map((field) => {
      const value = field ?? "";
      return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
    })
    .join(",");
}

const outLines = [lines[0]];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) {
    outLines.push(line);
    continue;
  }
  const fields = parseCsvLine(line);
  if (fields[idx.classNo] !== "2A" && fields[0] !== "2A") {
    outLines.push(line);
    continue;
  }
  const classNo = Number(fields[idx.classNo]);
  if (!Number.isFinite(classNo)) {
    outLines.push(line);
    continue;
  }
  const t = totals.get(classNo) || {
    merit: 0,
    minorMerit: 0,
    majorMerit: 0,
    demerit: 0,
    minorOffence: 0,
    majorOffence: 0,
  };
  fields[idx.merit] = String(t.merit);
  fields[idx.minorMerit] = String(t.minorMerit);
  fields[idx.majorMerit] = String(t.majorMerit);
  fields[idx.demerit] = String(t.demerit);
  fields[idx.minorOffence] = String(t.minorOffence);
  fields[idx.majorOffence] = String(t.majorOffence);
  outLines.push(formatCsvLine(fields));
}

fs.writeFileSync(csvPath, "\uFEFF" + outLines.join("\n") + "\n", "utf8");

console.log("Filled conduct columns for", totals.size, "students with records:");
for (const [no, t] of [...totals.entries()].sort((a, b) => a[0] - b[0])) {
  console.log(
    no,
    `優${t.merit} 小功${t.minorMerit} 大功${t.majorMerit}`,
  );
  if (t.demerit || t.minorOffence || t.majorOffence) {
    console.log("   ", `缺${t.demerit} 小過${t.minorOffence} 大過${t.majorOffence}`);
  }
}
