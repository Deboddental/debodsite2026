// One-off: convierte las fotos reales del equipo (PNG/JPG de gran tamaño) a WebP
// 3:4 recortado desde arriba (coincide con aspect-[3/4] object-top de las cards/perfiles),
// con slugs limpios que casan con teamMembers[].slug. Salida en public/Images/Equipo/.
//
//   node scripts/convert-team-photos.mjs
//
import sharp from 'sharp'
import { existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const SRC = '/Users/zacroye/Downloads/FOTOS EQUIPO DEBOD'
const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'Images', 'Equipo')
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

// source file (relativo a SRC) → slug de salida + rol legible (para futura ampliación)
const MAP = [
  // — Especialistas (los 5 que ya están en team.js + Ana Molina, nueva) —
  ['ESPECIALISTAS/VICTOR GUERRERO- ORTODONCIA Y ORTOPEDIA DENTOFACIAL.PNG', 'dr-victor-guerrero', 'Ortodoncia y Ortopedia Dentofacial'],
  ['ESPECIALISTAS/CESAR RODRIGUEZ-REHABILITACION ORAL.PNG', 'dr-cesar-rodriguez', 'Rehabilitación Oral'],
  ['ESPECIALISTAS/IRENE DE LOS MOZOS-ENDODONCIA.PNG', 'dra-irene-de-los-mozos', 'Endodoncia'],
  ['ESPECIALISTAS/MERCEDES LOPEZ- PERIODONCIA Y CIRUGIA.PNG', 'dra-mercedes-lopez', 'Periodoncia y Cirugía'],
  ['ESPECIALISTAS/ANA MOLINA-PERIODONCIA Y CIRUGIA.PNG', 'dra-ana-molina', 'Periodoncia y Cirugía'],
  // — Laboratorio —
  ['LABORATORIO/JAVIER PIMIENTA-CERAMISTA Y DIRECTOR .JPG', 'javier-pimienta', 'Ceramista y Director de Laboratorio'],
  ['LABORATORIO/VLADIMIR JEJINA-CERAMISTA Y CAD CAM .PNG', 'vladimir-jejina', 'Ceramista · CAD/CAM'],
  ['LABORATORIO/JAZMIN DASILVA-CERAMISTA.PNG', 'jazmin-dasilva', 'Ceramista'],
  ['LABORATORIO/LUCIANA SEQUERA-LOGISTICA.PNG', 'luciana-sequera', 'Logística de Laboratorio'],
  // — Higienistas —
  ['HIGIENISTAS/SARA TUCHO-HIGIENISTA.PNG', 'sara-tucho', 'Higienista Dental'],
  ['HIGIENISTAS/VALENTINA VANEGAS-HIGIENISTA.PNG', 'valentina-vanegas', 'Higienista Dental'],
  // — Recepción / Administración —
  ['HIGIENISTAS/SAFFA ALLAI-RECEPCION Y ADMINISTRACION.PNG', 'saffa-allai', 'Recepción y Administración'],
]

const W = 750 // ancho final; alto 1000 → 3:4

let ok = 0
for (const [rel, slug, role] of MAP) {
  const src = join(SRC, rel)
  if (!existsSync(src)) { console.log(`⚠️  no existe: ${rel}`); continue }
  const dest = join(OUT, `${slug}.webp`)
  await sharp(src)
    .resize(W, Math.round((W * 4) / 3), { fit: 'cover', position: 'top' }) // 3:4, encuadre alto (cara)
    .webp({ quality: 82 })
    .toFile(dest)
  ok++
  console.log(`✅ ${slug}.webp  (${role})`)
}
console.log(`\n${ok}/${MAP.length} fotos → public/Images/Equipo/`)
