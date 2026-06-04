# File upload on Cloudflare (teaching guide)

Your lesson site is **static HTML** (GitHub → Cloudflare Pages). Browsers **cannot** save uploaded files to static hosting alone. You need:

| Piece | Role |
|-------|------|
| `upload/index.html` | Page students open — picks a file and POSTs it |
| **Cloudflare Worker** | Small server that receives the file |
| **Cloudflare R2** | Object storage (like a private “folder” in the cloud) |

```
Student browser  →  POST file  →  Worker  →  R2 bucket
     ↑                                  ↓
  index.html                    files stored by key
```

---

## Part 1 — Cloudflare account and tools

1. Sign in at [https://dash.cloudflare.com](https://dash.cloudflare.com).
2. Install **Node.js** (LTS): [https://nodejs.org](https://nodejs.org).
3. In PowerShell:

   ```powershell
   npm install -g wrangler
   wrangler login
   ```

   A browser window opens; approve access to your Cloudflare account.

---

## Part 2 — Create R2 storage

1. Dashboard → **R2** → **Create bucket**.
2. Name it exactly: `mrwong-student-uploads` (or change `bucket_name` in `worker/wrangler.toml` to match).
3. R2 has a free tier; large class uploads may need a paid plan later.

Optional CLI:

```powershell
cd upload\worker
wrangler r2 bucket create mrwong-student-uploads
```

---

## Part 3 — Deploy the Worker

```powershell
cd c:\Users\tempteacher02\Desktop\mrwonglessons-main\upload\worker
wrangler deploy
```

Copy the URL Wrangler prints, e.g.:

`https://mrwong-upload.<your-subdomain>.workers.dev`

### Recommended: upload password

So random people cannot upload to your bucket:

```powershell
wrangler secret put UPLOAD_TOKEN
```

Enter a strong password when prompted. Students type the same value in the “上傳密碼” field on the page (sent as header `X-Upload-Token`).

### Optional: only allow your website

In `wrangler.toml`, uncomment and set:

```toml
[vars]
ALLOWED_ORIGIN = "https://your-site.pages.dev"
```

Redeploy: `wrangler deploy`.

---

## Part 4 — Connect the HTML page

1. Open `upload/index.html`.
2. Set `UPLOAD_API_URL` to your Worker URL (no trailing slash):

   ```javascript
   const UPLOAD_API_URL = "https://mrwong-upload.your-subdomain.workers.dev";
   ```

3. Commit and push to GitHub so Cloudflare Pages updates (same flow as `PUSH-TO-GITHUB-MAIN.txt`).

Students open:

`https://<your-pages-domain>/upload/`

(or whatever path your site uses under `upload/index.html`).

---

## Part 5 — View uploaded files

**Dashboard:** R2 → bucket `mrwong-student-uploads` → browse objects. Keys look like:

`陳大文/1717491234567-homework.pdf`

**CLI download one file:**

```powershell
wrangler r2 object get mrwong-student-uploads "student-name/1717491234567-file.pdf" --file=downloaded.pdf
```

**List objects:**

```powershell
wrangler r2 object list mrwong-student-uploads
```

### Teacher inbox (`forme.html`)

1. Worker secret: **`ADMIN_TOKEN`** (your private password — not shared with students).
2. Paste the latest `upload-handler.js` and **deploy**.
3. Open `https://<your-pages-domain>/upload/forme.html` — list files, single download, or **一鍵下載 ZIP** (max ~50 MB / 200 files per zip).

---

## Part 6 — Security checklist

- [ ] Set `UPLOAD_TOKEN` secret.
- [ ] Set `ALLOWED_ORIGIN` to your real Pages URL (not `*` in production).
- [ ] Do not commit passwords in `index.html` — only the Worker checks the token.
- [ ] Adjust allowed file types / size in `worker/upload-handler.js` (`ALLOWED_TYPES`, `MAX_BYTES`).
- [ ] R2 bucket should stay **private** (default). Do not enable public access unless you intend to publish files.

---

## Part 7 — Troubleshooting

| Symptom | Fix |
|---------|-----|
| “尚未設定 UPLOAD_API_URL” | Fill in Worker URL in `index.html` |
| CORS error in browser console | Set `ALLOWED_ORIGIN` to your Pages origin; redeploy Worker |
| 401 Unauthorized | Wrong or missing upload password |
| 415 File type not allowed | Add MIME type to `ALLOWED_TYPES` in Worker |
| 413 File too large | Increase `MAX_BYTES` or ask for smaller files |

Worker logs: Dashboard → **Workers** → your worker → **Logs** (or `wrangler tail`).

---

## Alternative architectures (when you outgrow this)

- **Presigned URLs:** Browser uploads directly to R2 (better for very large files). More setup.
- **Pages Functions:** Same logic as the Worker but colocated with Pages; good if everything lives in one Cloudflare project.
- **Turnstile:** Cloudflare CAPTCHA on the form to reduce spam bots.

---

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html` | Student upload UI |
| `forme.html` | Teacher: list uploads + ZIP download |
| `worker/upload-handler.js` | Upload + admin list/zip |
| `worker/wrangler.toml` | Worker name, R2 binding |
| `README.md` | This guide |

After deploy, your only recurring step is: push HTML changes to GitHub; redeploy Worker only when you change `upload-handler.js` or secrets.
