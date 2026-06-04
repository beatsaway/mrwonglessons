/**
 * Cloudflare Worker: receives POST multipart uploads and stores files in R2.
 *
 * Secrets (set in dashboard or via wrangler):
 *   UPLOAD_TOKEN  - optional; if set, client must send header X-Upload-Token
 *
 * Bindings (wrangler.toml):
 *   UPLOADS - R2 bucket
 */

const MAX_BYTES = 20 * 1024 * 1024; // 20 MB per file
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function corsHeaders(request, env) {
  const allowed = env.ALLOWED_ORIGIN || "*";
  const origin = request.headers.get("Origin") || "";
  const allowOrigin =
    allowed === "*" || origin === allowed ? (allowed === "*" ? "*" : origin) : allowed;

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Upload-Token",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

function sanitizeSegment(s, maxLen = 48) {
  return String(s)
    .replace(/[^a-zA-Z0-9\u4e00-\u9fff._-]/g, "_")
    .slice(0, maxLen) || "anonymous";
}

function sanitizeFilename(name) {
  const base = String(name).split(/[/\\]/).pop() || "file";
  return base.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120) || "file";
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405, cors);
    }

    if (env.UPLOAD_TOKEN) {
      const token = request.headers.get("X-Upload-Token") || "";
      if (token !== env.UPLOAD_TOKEN) {
        return json({ ok: false, error: "Unauthorized" }, 401, cors);
      }
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return json({ ok: false, error: "Invalid form data" }, 400, cors);
    }

    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return json({ ok: false, error: "No file provided" }, 400, cors);
    }

    if (file.size > MAX_BYTES) {
      return json({ ok: false, error: "File too large (max 20 MB)" }, 413, cors);
    }

    const type = file.type || "application/octet-stream";
    if (ALLOWED_TYPES.size && !ALLOWED_TYPES.has(type)) {
      return json({ ok: false, error: "File type not allowed" }, 415, cors);
    }

    const studentName = sanitizeSegment(formData.get("name") || "anonymous");
    const filename = sanitizeFilename(file.name);
    const key = `${studentName}/${Date.now()}-${filename}`;

    try {
      await env.UPLOADS.put(key, file.stream(), {
        httpMetadata: { contentType: type },
        customMetadata: {
          originalName: filename,
          uploadedAt: new Date().toISOString(),
        },
      });
    } catch (err) {
      console.error(err);
      return json({ ok: false, error: "Storage failed" }, 500, cors);
    }

    return json({ ok: true, key }, 200, cors);
  },
};
