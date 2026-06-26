import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const dir = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(dir, "raw"), "utf8");
const pdfPath = path.join(dir, "2A-conduct.pdf");
const htmlPath = path.join(dir, "_pdf-temp.html");

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseDemeritRow(line) {
  const parts = line.split(",");
  parts.pop();
  const demerit = parts.pop();
  const minorOffence = parts.pop();
  const majorOffence = parts.pop();
  parts.pop();
  const klass = parts.shift();
  const no = parts.shift();
  const name = parts.shift();
  const date = parts.shift();
  const event = parts.shift();
  const notes = parts.filter((p) => p && p !== "-");
  return {
    no: Number(no),
    name,
    klass,
    date,
    event,
    notes,
    majorOffence: num(majorOffence),
    minorOffence: num(minorOffence),
    demerit: num(demerit),
    isMajor: event.includes("小過"),
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
  const content = parts.pop();
  parts.pop();
  const date = parts.pop();
  const name = parts.pop();
  const no = parts.pop();
  const klass = parts.pop();
  parts.shift();
  return {
    no: Number(no),
    name,
    klass,
    date,
    content,
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
    if (mode === "demerit") demerits.push(parseDemeritRow(trimmed));
    else if (mode === "merit") merits.push(parseMeritRow(trimmed));
  }
  return { demerits, merits };
}

function groupByStudent(demerits, merits) {
  const map = new Map();
  function ensure(row) {
    const key = row.no + "|" + row.name;
    if (!map.has(key)) {
      map.set(key, { no: row.no, name: row.name, demerits: [], merits: [] });
    }
    return map.get(key);
  }
  demerits.forEach((row) => ensure(row).demerits.push(row));
  merits.forEach((row) => ensure(row).merits.push(row));
  return [...map.values()].sort((a, b) => a.no - b.no);
}

function sumDemeritTotals(records) {
  return records.reduce(
    (t, r) => ({
      majorOffence: t.majorOffence + r.majorOffence,
      minorOffence: t.minorOffence + r.minorOffence,
      demerit: t.demerit + r.demerit,
    }),
    { majorOffence: 0, minorOffence: 0, demerit: 0 }
  );
}

function sumMeritTotals(records) {
  return records.reduce(
    (t, r) => ({
      majorMerit: t.majorMerit + r.majorMerit,
      minorMerit: t.minorMerit + r.minorMerit,
      merit: t.merit + r.merit,
    }),
    { majorMerit: 0, minorMerit: 0, merit: 0 }
  );
}

function fmtTotals(labels, values) {
  return labels.map((label, i) => `<span>${esc(label)} ${values[i]}</span>`).join("");
}

function renderDemeritTable(records) {
  const rows = records
    .map((row) => {
      const notes = row.notes.length ? esc(row.notes.join("、")) : "";
      const cls = row.isMajor ? "major" : "minor";
      return `<tr class="${cls}">
        <td class="date">${esc(row.date)}</td>
        <td class="detail">${esc(row.event)}</td>
        <td class="notes">${notes}</td>
      </tr>`;
    })
    .join("");
  return `<table><tbody>${rows}</tbody></table>`;
}

function renderMeritTable(records) {
  const rows = records
    .map(
      (row) =>
        `<tr><td class="date">${esc(row.date)}</td><td class="detail" colspan="2">${esc(row.content)}</td></tr>`
    )
    .join("");
  return `<table><tbody>${rows}</tbody></table>`;
}

function renderStudent(student) {
  const parts = [];
  if (student.demerits.length) {
    const t = sumDemeritTotals(student.demerits);
    parts.push(`
      <div class="section">
        <div class="section-head demerit">
          <span>懲罰</span>
          <div class="totals">${fmtTotals(["大過", "小過", "缺點"], [t.majorOffence, t.minorOffence, t.demerit])}</div>
        </div>
        ${renderDemeritTable(student.demerits)}
      </div>`);
  }
  if (student.merits.length) {
    const t = sumMeritTotals(student.merits);
    parts.push(`
      <div class="section">
        <div class="section-head merit">
          <span>優點</span>
          <div class="totals">${fmtTotals(["大功", "小功", "優點"], [t.majorMerit, t.minorMerit, t.merit])}</div>
        </div>
        ${renderMeritTable(student.merits)}
      </div>`);
  }
  return `
    <div class="student">
      <div class="student-head">
        <span class="no">${student.no}.</span>
        <span class="name">${esc(student.name)}</span>
      </div>
      ${parts.join("")}
    </div>`;
}

const { demerits, merits } = parseRaw(raw);
const students = groupByStudent(demerits, merits);
const summary = `${students.length} 位學生 · ${demerits.length} 項懲罰 · ${merits.length} 項優點`;
const body = students.map(renderStudent).join("");

const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>2A 操行紀錄</title>
  <style>
    @page { size: A4; margin: 14mm 16mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Microsoft JhengHei", "PingFang TC", "Segoe UI", sans-serif;
      font-size: 10pt;
      line-height: 1.45;
      color: #111;
    }
    .doc-head {
      text-align: center;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px solid #111;
    }
    .doc-head h1 { margin: 0 0 4px; font-size: 16pt; }
    .doc-head p { margin: 0; font-size: 9pt; color: #444; }
    .student {
      border: 1px solid #333;
      margin-bottom: 7px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .student-head {
      display: flex;
      gap: 8px;
      padding: 5px 8px;
      background: #f3f3f3;
      border-bottom: 1px solid #333;
      font-weight: 700;
    }
    .name { flex: 1; font-size: 11pt; }
    .section { border-top: 1px solid #ccc; }
    .section:first-of-type { border-top: none; }
    .section-head {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 3px 8px;
      font-size: 8.5pt;
      font-weight: 700;
      background: #fafafa;
      border-bottom: 1px solid #ddd;
    }
    .section-head.demerit { color: #8b0000; }
    .section-head.merit { color: #0d5c2e; }
    .totals {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-left: auto;
      font-size: 8pt;
      font-weight: 600;
      color: #333;
    }
    .totals span::after { content: " ·"; }
    .totals span:last-child::after { content: ""; }
    table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
    td { padding: 2px 8px; vertical-align: top; border-bottom: 1px solid #eee; }
    tr:last-child td { border-bottom: none; }
    td.date { width: 18%; white-space: nowrap; font-weight: 600; }
    td.notes { width: 32%; font-size: 8pt; color: #444; }
    tr.major td { background: #fde8e8; }
    tr.minor td.detail { color: #7a4a00; }
  </style>
</head>
<body>
  <header class="doc-head">
    <h1>2A 班操行紀錄</h1>
    <p>${esc(summary)}</p>
  </header>
  ${body}
</body>
</html>`;

fs.writeFileSync(htmlPath, html);

const chromePaths = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];
const chrome = chromePaths.find((p) => fs.existsSync(p));
if (!chrome) throw new Error("Chrome or Edge not found for PDF generation");

const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    fileUrl,
  ],
  { encoding: "utf8" }
);

try { fs.unlinkSync(htmlPath); } catch { /* already removed */ }

if (!fs.existsSync(pdfPath) || fs.statSync(pdfPath).size < 1000) {
  const detail = result.stderr || result.stdout || `exit ${result.status}`;
  throw new Error(`PDF generation failed: ${detail}`);
}

const size = fs.statSync(pdfPath).size;
console.log(`Wrote ${pdfPath} (${Math.round(size / 1024)} KB)`);
