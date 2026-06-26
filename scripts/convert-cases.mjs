// One-off: convert before/after "Sonrisa" pairs from the DEBOD CASOS ESTÉTICA
// folders to web WebP, and build a side-by-side montage to verify framing.
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'

const EST = '/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB  5/3) CASOS CLÍNICOS /3) FOTOS ESTÉTICA /CASOS ESTETICA'
const OUT = resolve('public/Images/antes despues')
mkdirSync(OUT, { recursive: true })

// patient slug -> source folder name
const cases = [
  { slug: 'felix',   folder: '1 Felix Casos Estetica ' },
  { slug: 'kley',    folder: '2 Kley Casos Estetica ' },
  { slug: 'enrique', folder: '5 Enrique Casos Estetica ' },
  { slug: 'marcos',  folder: '8 Marcos Casos Estetica ' },
  { slug: 'makoke',  folder: '12 Makoke Casos Estetica' },
  { slug: 'yarlina', folder: '13 Yarlina Casos estetica' },
]

function findFile(dir, kind) {
  // kind: 'antes' | 'despues' — prefer a "Sonrisa" framing, else portrait (1/2).
  const files = readdirSync(dir)
  const sonrisa = files.find((f) => /sonrisa/i.test(f) && new RegExp(kind, 'i').test(f) && /\.(jpe?g)$/i.test(f))
  if (sonrisa) return sonrisa
  // fallback: the numbered portrait (1 .. antes / 2 .. despues)
  return files.find((f) => new RegExp(kind, 'i').test(f) && /\.(jpe?g)$/i.test(f) && !/intraoral/i.test(f))
}

const TW = 4 / 3 // target aspect (w/h) — both images of a pair cropped identically
const results = []
for (const c of cases) {
  const dir = join(EST, c.folder)
  try {
    const aSrc = findFile(dir, 'antes')
    const bSrc = findFile(dir, 'despues')
    if (!aSrc || !bSrc) { console.log(`! ${c.slug}: missing (${aSrc} / ${bSrc})`); continue }
    for (const [kind, src] of [['antes', aSrc], ['despues', bSrc]]) {
      await sharp(join(dir, src))
        .rotate()
        .resize(1100, Math.round(1100 / TW), { fit: 'cover', position: 'centre' })
        .webp({ quality: 82 })
        .toFile(join(OUT, `${c.slug}-${kind}.webp`))
    }
    results.push(c.slug)
  } catch (e) {
    console.log(`! ${c.slug}: ${e.message}`)
  }
}
console.log('converted pairs:', results.join(', '))

// Montage: each row = [antes | despues] for one case.
const RW = 360, RH = 270
const comp = []
for (let i = 0; i < results.length; i++) {
  const a = await sharp(join(OUT, `${results[i]}-antes.webp`)).resize(RW, RH, { fit: 'cover' }).jpeg().toBuffer()
  const b = await sharp(join(OUT, `${results[i]}-despues.webp`)).resize(RW, RH, { fit: 'cover' }).jpeg().toBuffer()
  comp.push({ input: a, left: 0, top: i * RH })
  comp.push({ input: b, left: RW, top: i * RH })
}
await sharp({ create: { width: RW * 2, height: RH * results.length, channels: 3, background: '#111' } })
  .composite(comp).jpeg({ quality: 75 }).toFile('/tmp/cases-montage.jpg')
console.log('montage -> /tmp/cases-montage.jpg (left=ANTES, right=DESPUÉS, top-to-bottom:', results.join(', ') + ')')
