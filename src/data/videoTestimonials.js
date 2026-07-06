// Self-hosted patient video testimonials, tagged by treatment category and by the
// clip's orientation. Served straight from /public (Vercel CDN) — no YouTube/Vimeo.
// The page lazy-loads them (poster + click-to-play), so they never slow first paint.
const V = '/videos/testimonios'

export const videoTestimonials = [
  { src: `${V}/testimonio-ortodoncia-giuseppe.mp4`, poster: `${V}/testimonio-ortodoncia-giuseppe.jpg`, name: 'Giuseppe', label: 'Ortodoncia invisible', category: 'ortodoncia', aspect: 'square' },
  { src: `${V}/testimonio-ortodoncia-orto.mp4`, poster: `${V}/testimonio-ortodoncia-orto.jpg`, name: 'Paciente de Debod', label: 'Ortodoncia invisible', category: 'ortodoncia', aspect: 'video' },
  { src: `${V}/testimonio-ortodoncia-3.mp4`, poster: `${V}/testimonio-ortodoncia-3.jpg`, name: 'Paciente de Debod', label: 'Ortodoncia', category: 'ortodoncia', aspect: 'video' },
  { src: `${V}/testimonio-implantes-makoke.mp4`, poster: `${V}/testimonio-implantes-makoke.jpg`, name: 'Makoke', label: 'Implantes · Rehabilitación oral', category: 'implantes', aspect: 'portrait' },
  { src: `${V}/testimonio-carillas-parienta.mp4`, poster: `${V}/testimonio-carillas-parienta.jpg`, name: 'Paciente de Debod', label: 'Carillas', category: 'estetica', aspect: 'video' },
  { src: `${V}/testimonio-estetica-javier.mp4`, poster: `${V}/testimonio-estetica-javier.jpg`, name: 'Javier', label: 'Diseño de sonrisa', category: 'estetica', aspect: 'portrait' },
  { src: `${V}/testimonio-estetica-maria.mp4`, poster: `${V}/testimonio-estetica-maria.jpg`, name: 'María', label: 'Estética · Blanqueamiento', category: 'estetica', aspect: 'portrait' },
]

// Treatment specialty slug → video category.
const SPECIALTY_TO_CAT = {
  'ortodoncista-arguelles-madrid-espana': 'ortodoncia',
  'dentista-de-implantes-arguelles-madrid-espana': 'implantes',
  'cirujano-oral-arguelles-madrid-espana': 'implantes',
  'dentista-cosmetico-arguelles-madrid-espana': 'estetica',
}
// Campaign-landing base → video category.
const BASE_TO_CAT = { ortodoncia: 'ortodoncia', implantes: 'implantes', allonx: 'implantes', carillas: 'estetica' }

export function videosForCategory(cat) {
  return cat ? videoTestimonials.filter((v) => v.category === cat) : []
}
export const videoCatForSpecialty = (specialty) => SPECIALTY_TO_CAT[specialty] || null
export const videoCatForBase = (base) => BASE_TO_CAT[base] || null
