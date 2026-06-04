/**
 * Cloudflare Worker: student uploads + teacher admin (list / zip).
 *
 * Secrets:
 *   UPLOAD_TOKEN  - optional; student uploads (header X-Upload-Token)
 *   ADMIN_TOKEN   - required for /admin/* (header X-Admin-Token)
 *
 * Bindings: UPLOADS → R2 bucket
 */

const MAX_BYTES = 20 * 1024 * 1024;
const MAX_ZIP_BYTES = 50 * 1024 * 1024;
const MAX_ZIP_FILES = 200;

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
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Upload-Token, X-Admin-Token",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

function normalizePath(pathname) {
  const p = pathname.replace(/\/+$/, "") || "/";
  return p;
}

function requireAdmin(request, env, cors) {
  if (!env.ADMIN_TOKEN) {
    return json(
      { ok: false, error: "ADMIN_TOKEN not set. Add it in Worker → Variables and Secrets." },
      503,
      cors
    );
  }
  const token = request.headers.get("X-Admin-Token") || "";
  if (token !== env.ADMIN_TOKEN) {
    return json({ ok: false, error: "Unauthorized" }, 401, cors);
  }
  return null;
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

function isSafeKey(key) {
  if (!key || typeof key !== "string") return false;
  if (key.includes("..") || key.startsWith("/")) return false;
  return true;
}

async function listAllObjects(bucket) {
  const items = [];
  let cursor;
  do {
    const page = await bucket.list({ cursor, limit: 1000 });
    for (const obj of page.objects) {
      items.push({
        key: obj.key,
        size: obj.size,
        uploaded: obj.uploaded ? new Date(obj.uploaded).toISOString() : null,
      });
    }
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);
  items.sort((a, b) => (b.uploaded || "").localeCompare(a.uploaded || ""));
  return items;
}

async function zipSyncFromR2(bucket, items) {
  const { zipSync } = await import("https://esm.sh/fflate@0.8.2");
  const entries = {};
  let total = 0;
  let count = 0;

  for (const item of items) {
    if (count >= MAX_ZIP_FILES) {
      throw new Error(`Too many files (max ${MAX_ZIP_FILES} per zip)`);
    }
    const obj = await bucket.get(item.key);
    if (!obj) continue;
    const buf = await obj.arrayBuffer();
    total += buf.byteLength;
    if (total > MAX_ZIP_BYTES) {
      throw new Error(`Total size over ${MAX_ZIP_BYTES / (1024 * 1024)} MB — download in smaller batches`);
    }
    entries[item.key] = new Uint8Array(buf);
    count += 1;
  }

  if (count === 0) {
    throw new Error("No files to zip");
  }

  return zipSync(entries);
}

async function handleHealth(env, cors) {
  return json(
    {
      ok: true,
      service: "mrwong-upload",
      r2Bound: !!env.UPLOADS,
      tokenRequired: !!env.UPLOAD_TOKEN,
      adminRequired: !!env.ADMIN_TOKEN,
    },
    200,
    cors
  );
}

async function handleAdminList(env, cors) {
  const items = await listAllObjects(env.UPLOADS);
  return json({ ok: true, count: items.length, items }, 200, cors);
}

async function handleAdminZip(env, cors) {
  const items = await listAllObjects(env.UPLOADS);
  if (!items.length) {
    return json({ ok: false, error: "No uploads yet" }, 404, cors);
  }

  let zipped;
  try {
    zipped = await zipSyncFromR2(env.UPLOADS, items);
  } catch (err) {
    return json({ ok: false, error: err.message || "Zip failed" }, 413, cors);
  }

  const date = new Date().toISOString().slice(0, 10);
  return new Response(zipped, {
    status: 200,
    headers: {
      ...cors,
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="uploads-${date}.zip"`,
    },
  });
}

async function handleAdminFile(url, env, cors) {
  const key = url.searchParams.get("key");
  if (!isSafeKey(key)) {
    return json({ ok: false, error: "Invalid key" }, 400, cors);
  }

  const obj = await env.UPLOADS.get(key);
  if (!obj) {
    return json({ ok: false, error: "Not found" }, 404, cors);
  }

  const filename = key.split("/").pop() || "file";
  return new Response(obj.body, {
    headers: {
      ...cors,
      "Content-Type": obj.httpMetadata?.contentType || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

async function handleUpload(request, env, cors) {
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
    const detail = err && err.message ? String(err.message) : "";
    return json(
      {
        ok: false,
        error: "Storage failed",
        hint: detail || "Check R2 binding UPLOADS.",
      },
      500,
      cors
    );
  }

  return json({ ok: true, key }, 200, cors);
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    if (path.startsWith("/admin")) {
      const denied = requireAdmin(request, env, cors);
      if (denied) return denied;
      if (!env.UPLOADS) {
        return json({ ok: false, error: "R2 binding UPLOADS missing" }, 503, cors);
      }
      if (path === "/admin/list" && request.method === "GET") {
        return handleAdminList(env, cors);
      }
      if (path === "/admin/zip" && request.method === "GET") {
        return handleAdminZip(env, cors);
      }
      if (path === "/admin/file" && request.method === "GET") {
        return handleAdminFile(url, env, cors);
      }
      return json({ ok: false, error: "Not found" }, 404, cors);
    }

    if (path === "/") {
      if (request.method === "GET") {
        return handleHealth(env, cors);
      }
      if (request.method === "POST") {
        if (!env.UPLOADS) {
          return json(
            {
              ok: false,
              error:
                "R2 not connected. Worker → Bindings → R2 bucket, variable name UPLOADS.",
            },
            503,
            cors
          );
        }
        return handleUpload(request, env, cors);
      }
    }

    return json({ ok: false, error: "Not found" }, 404, cors);
  },
};
