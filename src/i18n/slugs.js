// ── Bilingual URL map (single source of truth for ES↔EN page URLs) ───────────
// Pure data (Node-safe: imported by scripts/routes.mjs AND by src/utils/locale.js).
// Keeps the giant content data files (services/treatments/blog…) free of URL
// plumbing — only English SLUGS live here; English CONTENT lives in `*_en` fields
// on each record (read via src/utils/tf.js).
//
// Adding a translated page = add its ES→EN slug here; routes, sitemap, hreflang
// and the language toggle all pick it up automatically.

// Treatments — ES slug → EN slug. EN lives at /en/treatments/<enSlug>/.
export const treatmentSlugEn = {
  'implantes-dentales-arguelles-madrid-espana': 'dental-implants-arguelles-madrid',
  'cirugia-guiada-de-implantes-dentales-arguelles-madrid': 'guided-implant-surgery-arguelles-madrid',
  'corona-sobre-implante-arguelles-madrid-espana': 'implant-crown-arguelles-madrid',
  'mantenimiento-de-implante-arguelles-madrid-espana': 'implant-maintenance-arguelles-madrid',
  'injerto-oseo-alveolar-arguelles-madrid-espana': 'alveolar-bone-graft-arguelles-madrid',
  'carillas-de-porcelana-arguelles-madrid-espana': 'porcelain-veneers-arguelles-madrid',
  'invisalign-alineadores-transparentes-arguelles-madrid-espana': 'invisalign-clear-aligners-arguelles-madrid',
  'tratamientos-coronas-dentales-en-arguelles-madrid': 'dental-crowns-arguelles-madrid',
  'vonlay-arguelles-madrid-espana': 'vonlay-restorations-arguelles-madrid',
  'raspado-y-alisado-radicular-arguelles-madrid-espana': 'scaling-and-root-planing-arguelles-madrid',
  'injerto-de-encia-arguelles-madrid-espana': 'gum-graft-arguelles-madrid',
  'gingivoplastia-arguelles-madrid-espana': 'gingivoplasty-arguelles-madrid',
  'extraccion-de-muelas-del-juicio-arguelles-madrid-espana': 'wisdom-teeth-removal-arguelles-madrid',
  'extracciones-dentales-arguelles-madrid-espana': 'tooth-extractions-arguelles-madrid',
  'cirugia-apical-arguelles-madrid-espana': 'apicoectomy-apical-surgery-arguelles-madrid',
  'examenes-dentales-y-limpiezas-dentales-arguelles-madrid': 'dental-exams-and-cleanings-arguelles-madrid',
  'limpieza-dental-profunda-arguelles-madrid-espana': 'deep-dental-cleaning-arguelles-madrid',
  'deteccion-de-cancer-oral-arguelles-madrid-espana': 'oral-cancer-screening-arguelles-madrid',
  'tratamiento-de-la-apnea-del-sueno-arguelles-madrid-espana': 'sleep-apnea-treatment-arguelles-madrid',
  'tratamientos-protectores-bucales-en-arguelles-madrid': 'mouthguards-night-guards-arguelles-madrid',
  'limpieza-dental-infantil-arguelles-madrid-espana': 'childrens-dental-cleaning-arguelles-madrid',
  'resina-pediatrica-arguelles-madrid-espana': 'pediatric-dental-fillings-arguelles-madrid',
  'retenedores-arguelles-madrid-espana-2': 'orthodontic-retainers-arguelles-madrid',
}

// Barrios — ES slug → EN slug. EN lives at /en/<enSlug>/.
export const barrioSlugEn = {
  'dentista-moncloa-madrid': 'dentist-moncloa-madrid',
  'dentista-chamberi-madrid': 'dentist-chamberi-madrid',
  'dentista-centro-madrid': 'dentist-centro-madrid',
  'dentista-plaza-espana-madrid': 'dentist-plaza-espana-madrid',
}

// Blog categories — ES → EN path segment.
export const blogCategoryEn = {
  'salud-dental': 'dental-health',
  'servicios': 'services',
  'odontologia-estetica': 'cosmetic-dentistry',
}

// Blog posts — ES slug → { es_cat, en (slug), en_cat }.
export const blogSlugEn = {
  'bruxismo-estres-dientes': { es_cat: 'salud-dental', en: 'bruxism-stress-and-teeth-grinding', en_cat: 'dental-health' },
  'aftas-bucales-causas-y-tratamiento': { es_cat: 'salud-dental', en: 'mouth-ulcers-causes-and-treatment', en_cat: 'dental-health' },
  'encias-retraidas-causas-y-tratamientos': { es_cat: 'salud-dental', en: 'receding-gums-causes-and-treatments', en_cat: 'dental-health' },
  'diagnostico-dental-en-arguelles-madrid': { es_cat: 'servicios', en: 'dental-diagnosis-arguelles-madrid', en_cat: 'services' },
  'deteccion-de-cancer-oral-en-arguelles-madrid': { es_cat: 'servicios', en: 'oral-cancer-detection-arguelles-madrid', en_cat: 'services' },
  'limpieza-dental-profunda-en-arguelles-madrid': { es_cat: 'salud-dental', en: 'deep-dental-cleaning-explained-arguelles-madrid', en_cat: 'dental-health' },
  'carillas-vs-coronas-dentales-diferencias': { es_cat: 'odontologia-estetica', en: 'veneers-vs-crowns-key-differences', en_cat: 'cosmetic-dentistry' },
  'ortodoncia-invisible-mitos-y-resultados': { es_cat: 'odontologia-estetica', en: 'invisible-orthodontics-myths-and-results', en_cat: 'cosmetic-dentistry' },
  'dolor-de-muelas-de-juicio-en-arguelles-madrid': { es_cat: 'salud-dental', en: 'wisdom-tooth-pain-arguelles-madrid', en_cat: 'dental-health' },
  "endodoncia-o-extraccion-arguelles-madrid": { es_cat: "servicios", en: "root-canal-or-extraction-arguelles-madrid", en_cat: "services" },
  "sensibilidad-dental-causas-y-alivio": { es_cat: "salud-dental", en: "tooth-sensitivity-causes-and-relief", en_cat: "dental-health" },
  "caries-dental-como-se-forma-y-prevenirla": { es_cat: "salud-dental", en: "cavities-how-they-form-and-prevention", en_cat: "dental-health" },
  "cuanto-dura-un-implante-dental": { es_cat: "servicios", en: "how-long-dental-implants-last", en_cat: "services" },
  "molestias-tras-un-implante-dental": { es_cat: "servicios", en: "recovery-after-a-dental-implant", en_cat: "services" },
  "diseno-de-sonrisa-digital-en-arguelles-madrid": { es_cat: "odontologia-estetica", en: "digital-smile-design-arguelles-madrid", en_cat: "cosmetic-dentistry" },
  "coronas-de-zirconio-cuando-elegirlas": { es_cat: "odontologia-estetica", en: "zirconia-crowns-when-to-choose-them", en_cat: "cosmetic-dentistry" },
  "gingivitis-como-revertirla": { es_cat: "salud-dental", en: "gingivitis-how-to-reverse-it", en_cat: "dental-health" },
  "periodontitis-tratamiento-y-control": { es_cat: "salud-dental", en: "periodontitis-treatment-and-control", en_cat: "dental-health" },
  "brackets-o-invisalign-como-elegir": { es_cat: "servicios", en: "braces-or-invisalign-how-to-choose", en_cat: "services" },
}

// Static page pairs: ES path → EN path. The home pair (/ ↔ /en/) is also here.
export const staticPairs = {
  '/': '/en/',
  '/nosotros/': '/en/about/',
  '/dental-lab/': '/en/dental-lab/',
  '/financiacion/': '/en/financing/',
  '/politica-de-privacidad/': '/en/privacy-policy/',
  '/contacto/': '/en/contact/',
  '/resenas/': '/en/reviews/',
  '/tecnologia/': '/en/technology/',
  '/antes-despues/': '/en/before-after/',
  '/ubicaciones/': '/en/locations/',
  '/ubicaciones/citas-arguelles-madrid/': '/en/locations/appointments-arguelles-madrid/',
  '/urgencias-dentales-arguelles-madrid/': '/en/dental-emergency-madrid/',
  '/tratamientos/': '/en/treatments/',
  '/blog/': '/en/blog/',
  '/equipo/': '/en/team/',
}

// Team doctor slugs are language-neutral (proper names) → reuse the ES slug under /en/team/.
export const teamSlugs = [
  'dr-victor-guerrero', 'dr-cesar-rodriguez', 'dra-irene-de-los-mozos',
  'dra-mercedes-lopez', 'dra-ana-molina', 'javier-pimienta',
]

// ── Derived: the full ES↔EN page-pair list (every mirrored page) ─────────────
// Used by locale.js (hreflang/toggle map) and routes.mjs (route + sitemap gen).
export function pagePairs() {
  const pairs = []
  for (const [es, en] of Object.entries(staticPairs)) pairs.push([es, en])
  for (const [es, en] of Object.entries(treatmentSlugEn)) pairs.push([`/tratamientos/${es}/`, `/en/treatments/${en}/`])
  for (const [es, en] of Object.entries(barrioSlugEn)) pairs.push([`/${es}/`, `/en/${en}/`])
  for (const [es, m] of Object.entries(blogSlugEn)) pairs.push([`/blog/${m.es_cat}/${es}/`, `/en/blog/${m.en_cat}/${m.en}/`])
  for (const s of teamSlugs) pairs.push([`/equipo/${s}/`, `/en/team/${s}/`])
  return pairs
}

// EN route list (for routes.mjs / prerender / sitemap), trailing-slashed.
export function enRoutesFromSlugs() {
  return pagePairs().map(([, en]) => en)
}

// Generic ES path → EN path resolver (for localizing hardcoded links in chrome
// like the Footer). Falls back to the ES path when there's no known mapping.
export function enPathFor(esPath) {
  if (staticPairs[esPath]) return staticPairs[esPath]
  let m = esPath.match(/^\/tratamientos\/([^/]+)\/$/)
  if (m && treatmentSlugEn[m[1]]) return `/en/treatments/${treatmentSlugEn[m[1]]}/`
  m = esPath.match(/^\/blog\/([^/]+)\/([^/]+)\/$/)
  if (m && blogSlugEn[m[2]]) return `/en/blog/${blogSlugEn[m[2]].en_cat}/${blogSlugEn[m[2]].en}/`
  m = esPath.match(/^\/equipo\/([^/]+)\/$/)
  if (m) return `/en/team/${m[1]}/`
  m = esPath.match(/^\/([^/]+)\/$/)
  if (m && barrioSlugEn[m[1]]) return `/en/${barrioSlugEn[m[1]]}/`
  return esPath
}
