// One-off: convert clinic JPGs from the DEBOD media folder to web-optimised WebP
// in public/Images/clinica/, and build a contact-sheet montage for picking.
import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'

const SRC = '/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB  5/1) FOTOS CLINICA/FOTOS-CARRUSEL'
const OUT = resolve('public/Images/clinica')
const MONTAGE = '/tmp/clinic-montage.jpg'

mkdirSync(OUT, { recursive: true })

const jpgs = readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f)).sort()
console.log(`Found ${jpgs.length} JPGs`)

// 1) Convert each to WebP (max 1600px wide, quality 80).
const converted = []
for (const f of jpgs) {
  const base = f.replace(/\.[^.]+$/, '').toLowerCase()
  const outFile = join(OUT, `${base}.webp`)
  try {
    await sharp(join(SRC, f))
      .rotate() // respect EXIF orientation
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outFile)
    converted.push({ src: f, webp: `${base}.webp` })
  } catch (e) {
    console.log(`  ! failed ${f}: ${e.message}`)
  }
}
console.log(`Converted ${converted.length} -> public/Images/clinica/`)

// 2) Build a contact-sheet montage (8 cols) so we can eyeball and pick.
const COLS = 8
const TW = 200
const TH = 150
const rows = Math.ceil(converted.length / COLS)
const thumbs = []
for (let i = 0; i < converted.length; i++) {
  const buf = await sharp(join(OUT, converted[i].webp))
    .resize(TW, TH, { fit: 'cover' })
    .jpeg({ quality: 70 })
    .toBuffer()
  thumbs.push({
    input: buf,
    left: (i % COLS) * TW,
    top: Math.floor(i / COLS) * TH,
  })
}
await sharp({
  create: { width: COLS * TW, height: rows * TH, channels: 3, background: '#111' },
})
  .composite(thumbs)
  .jpeg({ quality: 72 })
  .toFile(MONTAGE)

console.log(`Montage -> ${MONTAGE} (${COLS} cols x ${rows} rows)`)
console.log('GRID ORDER (left-to-right, top-to-bottom):')
converted.forEach((c, i) => console.log(`${i}\t${c.webp}`))
