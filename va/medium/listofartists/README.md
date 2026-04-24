# YouTube video thumbnails (WebP)

Each file is named with the YouTube **video ID** (same as in `artists-abstract-intro.html`):

- Source: `https://img.youtube.com/vi/{id}/maxresdefault.jpg` (falls back to `hqdefault.jpg` if the max-res image is missing or a tiny placeholder)
- Encoded with **cwebp** at quality **86** (from the [libwebp](https://developers.google.com/speed/webp) Windows build)

To regenerate all thumbs, from the `temp` folder run:

```powershell
powershell -ExecutionPolicy Bypass -File .\regenerate-youtube-thumbs.ps1
```

The script downloads the official `cwebp` tools if needed, fetches posters, and overwrites the `.webp` files here.
