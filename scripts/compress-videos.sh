#!/bin/bash
# One-off: compress the 4K "LISTOS PARA LA WEB" testimonial videos to lean,
# web-streamable 720p H.264 MP4 + a WebP poster each.
set -e
OUT="public/videos/testimonios"
mkdir -p "$OUT"

i=1
for SRC in \
  "/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB  2/4) VIDEOS TESTIMONIOS/LISTOS PARA LA WEB/9AB2A014-F2C5-46D0-89E5-DCFD916211A9.MOV" \
  "/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB  6/4) VIDEOS TESTIMONIOS/LISTOS PARA LA WEB/23A20B8C-1D6D-400D-9FDE-D571D14DF2C6.MP4" \
  "/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB /4) VIDEOS TESTIMONIOS/LISTOS PARA LA WEB/36B0B020-F4EC-40FC-BDAE-8D1D974F7A84.MOV"
do
  echo ">>> Encoding testimonio-$i ..."
  ffmpeg -y -i "$SRC" \
    -vf "scale=-2:720" \
    -c:v libx264 -crf 27 -preset medium -pix_fmt yuv420p \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$OUT/testimonio-$i.mp4" -loglevel error
  # Poster from a frame at ~2.5s (JPEG — this ffmpeg has no webp encoder)
  ffmpeg -y -ss 2.5 -i "$OUT/testimonio-$i.mp4" -frames:v 1 -vf "scale=-2:720" -q:v 4 \
    "$OUT/testimonio-$i.jpg" -loglevel error
  echo "    -> $(du -h "$OUT/testimonio-$i.mp4" | cut -f1)  (poster $(du -h "$OUT/testimonio-$i.jpg" | cut -f1))"
  i=$((i+1))
done
echo "DONE. Output in $OUT"
ls -la "$OUT"
