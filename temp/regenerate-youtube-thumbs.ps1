# Regenerates temp/webp/{videoId}.webp from YouTube poster JPEGs.
# Run from repo root:  powershell -ExecutionPolicy Bypass -File temp/regenerate-youtube-thumbs.ps1
# Or cd temp; .\regenerate-youtube-thumbs.ps1

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$cwebpDir = Join-Path $root "libwebp-tools"
$cwebp = Join-Path $cwebpDir "cwebp.exe"
$zip = Join-Path $root "libwebp-win.zip"
$out = Join-Path $root "webp"
$tmp = Join-Path $root "webp-thumbs-tmp"

$ids = @(
  "jumpAh0Jezw", "HQlIcMHd-fk", "nTowAmq7bJ0", "nD6ANAwNE_c", "bB1K4H0vx0g", "YsA3xndXAsQ",
  "uv9NzXUIUW0", "4q2FnVa57_Q", "SmcRDgc8dNE", "oaeAUerwZXY", "MUygDe9F9sE", "8Stoj793vBg",
  "21Xs8xqhSjg", "38_ucOyUyic", "nslr0t97vTY", "ex7pw-yl5OE", "0ihOWXXHlC0", "4KQeu_mTYTQ",
  "C22h7rUemAY", "jI5LnvjBPjI", "SRTpIXH-Fe0", "Efcp0pM9upk", "GlgUw5RrOXM", "Vzh9NZPw6mU",
  "d7K4Bog5asw", "ei2H4zHIR0c", "N4CgsSyx9Dw"
)

if (-not (Test-Path $cwebp)) {
  Write-Host "Downloading libwebp (cwebp)..."
  New-Item -ItemType Directory -Force -Path $cwebpDir | Out-Null
  curl.exe -sL "https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.4.0-windows-x64.zip" -o $zip
  Expand-Archive -Path $zip -DestinationPath (Join-Path $cwebpDir "unpacked") -Force
  $found = Get-ChildItem (Join-Path $cwebpDir "unpacked") -Recurse -Filter cwebp.exe | Select-Object -First 1
  if (-not $found) { throw "cwebp.exe not found in libwebp zip" }
  Copy-Item $found.FullName (Join-Path $cwebpDir "cwebp.exe")
  Remove-Item (Join-Path $cwebpDir "unpacked") -Recurse -Force
  Remove-Item $zip -Force -ErrorAction SilentlyContinue
}

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

foreach ($id in $ids) {
  $jpg = Join-Path $tmp "$id.jpg"
  curl.exe -sL "https://img.youtube.com/vi/$id/maxresdefault.jpg" -o $jpg
  if ((Get-Item $jpg).Length -lt 4000) {
    curl.exe -sL "https://img.youtube.com/vi/$id/hqdefault.jpg" -o $jpg
  }
  $webp = Join-Path $out "$id.webp"
  & $cwebp -q 86 $jpg -o $webp
  if ($LASTEXITCODE -ne 0) { Write-Warning "Failed: $id" }
  else { Write-Host "OK $id" }
}

Write-Host "Done. Output: $out"
