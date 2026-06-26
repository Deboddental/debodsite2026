// One-off: convert 3 more before/after pairs (implants + gum surgery) to WebP.
import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { resolve, join } from 'path'

const ROOT = '/Users/zacroye/Documents/DEBOD/DEBOD/12 WEB  5/3) CASOS CLÍNICOS '
const IMP = join(ROOT, '4) FOTOS IMPLANTES/CASOS IMPLANTES/Casos implantes rehabilitaciones completas')
const GIN = join(ROOT, '6) FOTOS CIRUGIA GINGIVAL/CIRUGIA')
const OUT = resolve('public/Images/antes despues')
mkdirSync(OUT, { recursive: true })

const pairs = [
  { slug: 'adoracion', antes: join(IMP, '2 Adoracion Casos Implantes/1 Adoracion antes.JPG'), despues: join(IMP, '2 Adoracion Casos Implantes/2 Adoracion despues.JPG') },
  { slug: 'injerto-encia', antes: join(GIN, 'INGERTO TEJIDO/1 /1 Antes.jpg'), despues: join(GIN, 'INGERTO TEJIDO/1 /2 Despues.jpg') },
  { slug: 'alargamiento', antes: join(GIN, 'ALARGAMIENTO/1/1 Sonrisa antes.jpg'), despues: join(GIN, 'ALARGAMIENTO/1/2 Sonrisa despues.jpg') },
]

const TW = 4 / 3
const ok = []
for (const p of pairs) {
  try {
    for (const [kind, src] of [['antes', p.antes], ['despues', p.despues]]) {
      await sharp(src).rotate().resize(1100, Math.round(1100 / TW), { fit: 'cover', position: 'centre' }).webp({ quality: 82 }).toFile(join(OUT, `${p.slug}-${kind}.webp`))
    }
    ok.push(p.slug)
  } catch (e) { console.log(`! ${p.slug}: ${e.message}`) }
}
console.log('converted:', ok.join(', '))

const RW = 360, RH = 270
const comp = []
for (let i = 0; i < ok.length; i++) {
  const a = await sharp(join(OUT, `${ok[i]}-antes.webp`)).resize(RW, RH, { fit: 'cover' }).jpeg().toBuffer()
  const b = await sharp(join(OUT, `${ok[i]}-despues.webp`)).resize(RW, RH, { fit: 'cover' }).jpeg().toBuffer()
  comp.push({ input: a, left: 0, top: i * RH }, { input: b, left: RW, top: i * RH })
}
await sharp({ create: { width: RW * 2, height: RH * ok.length, channels: 3, background: '#111' } }).composite(comp).jpeg({ quality: 75 }).toFile('/tmp/cases2-montage.jpg')
console.log('montage -> /tmp/cases2-montage.jpg (left=ANTES, right=DESPUÉS:', ok.join(', ') + ')')
