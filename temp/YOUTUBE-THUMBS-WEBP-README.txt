How we turn YouTube thumbnails into WebP (for this repo)
==========================================================

Goal
----
Use the official static poster images YouTube serves for each video, compress
them to WebP, and name the files by **video ID** so they sit next to pages like
`va/medium/listofartists/artists-abstract-intro.html` as `{videoId}.webp`.


1. Get the video ID from a URL
------------------------------
YouTube links always contain an 11-character id (letters, digits, -, _).

  • Standard watch URL:
      https://www.youtube.com/watch?v=VIDEO_ID

  • Shorts:
      https://www.youtube.com/shorts/VIDEO_ID

  • youtu.be:
      https://youtu.be/VIDEO_ID

  • If the query has "v=...", the value is the id.

Use that same `VIDEO_ID` for the file name, e.g. `dQw4w9WgXcQ.webp`.


2. Download the poster (JPEG) from YouTube
--------------------------------------------
YouTube exposes thumbnails at fixed paths (no API key; these are public URLs).

  High resolution (use first):
    https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg

  Fallback (many Shorts and some old videos have no true maxres poster):
    https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg

  Important: `maxresdefault` is missing for some videos. YouTube may still
  return a **tiny** placeholder (often ~1–2 KB). The automation checks file
  size: if the downloaded "maxres" is under a few kilobytes, re-fetch
  `hqdefault.jpg` instead (see the PowerShell script).


3. Encode to WebP with cwebp
------------------------------
We use **Google’s libwebp** `cwebp` (lossy) for smaller files and broad support.

  Quality used in this project: **-q 86** (good balance of size vs. quality).

  Example (after you have a JPEG saved as `poster.jpg`):
    cwebp -q 86 poster.jpg -o VIDEO_ID.webp

  On Windows, the repo’s script can **download a portable cwebp** automatically
  the first time (see below).


4. Script in this repo: regenerate-youtube-thumbs.ps1
-----------------------------------------------------
Path:  temp/regenerate-youtube-thumbs.ps1

What it does (summary):
  • Ensures `cwebp.exe` exists under `temp/libwebp-tools` (downloads libwebp
    once if needed).
  • For each id in the `$ids` list, downloads the best JPEG, then runs cwebp
    at quality 86.
  • Writes output under **temp/webp/VIDEO_ID.webp** by default.

How to run (from repository root, Windows PowerShell):

  powershell -ExecutionPolicy Bypass -File temp\regenerate-youtube-thumbs.ps1

Or from the `temp` folder:

  .\regenerate-youtube-thumbs.ps1

After you add a new YouTube link to the HTML, **add that video’s id to the
`$ids` array** in the script, run it, then **copy the new .webp file(s) from
`temp/webp/` to `va/medium/listofartists/`** (or wherever the page expects
them), next to the HTML that references `<img src="VIDEO_ID.webp" ...>`.

  Note: The shipped `artists-abstract-intro` page loads images from the same
  folder as the HTML, e.g. `va/medium/listofartists/VIDEO_ID.webp`, not from
  `temp/webp/`.


5. Manual one-off (no script)
-----------------------------
  1. Open in a browser or download with curl:
       https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
  2. If it is blank or very small, use hqdefault instead.
  3. Run cwebp, then place the .webp next to the page with the right name.

  Example with curl (Windows) and a local cwebp on PATH:
    curl -sL "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" -o t.jpg
    cwebp -q 86 t.jpg -o VIDEO_ID.webp


6. In the HTML
--------------
Point the `<img src="...">` at `VIDEO_ID.webp` (and keep `width`/`height`
matching 16:9, usually 1280x720, if you are mirroring the poster size).


Further reference
-----------------
`va/medium/listofartists/README.md` — short version of the same idea.

`temp/regenerate-youtube-thumbs.ps1` — full automation and id list for this
project’s abstract-artists set.
