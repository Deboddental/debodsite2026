// ── Specialty taxonomy ───────────────────────────────────────────────────────
// Pure categorisation (no page content): groups the 23 treatments by specialty
// for the Navbar's "Tratamientos" dropdown/accordion and the /tratamientos/ hub
// page. Slugs match `treatment.specialty` in src/data/treatments.js. There are
// no standalone Service pages any more — this is taxonomy only.
export const specialties = [
  { es: 'Dentista General', en: 'General Dentistry', slug: 'dentista-general-arguelles-madrid-espana' },
  { es: 'Odontología Estética', en: 'Cosmetic Dentistry', slug: 'dentista-cosmetico-arguelles-madrid-espana' },
  { es: 'Implantes Dentales', en: 'Dental Implants', slug: 'dentista-de-implantes-arguelles-madrid-espana' },
  { es: 'Endodoncia', en: 'Root Canal (Endodontics)', slug: 'endodoncista-arguelles-madrid-espana' },
  { es: 'Odontopediatría', en: 'Paediatric Dentistry', slug: 'odontopediatra-arguelles-madrid-espana' },
  { es: 'Ortodoncia', en: 'Orthodontics', slug: 'ortodoncista-arguelles-madrid-espana' },
  { es: 'Periodoncia', en: 'Periodontics', slug: 'periodoncista-arguelles-madrid-espana' },
  { es: 'Cirugía Oral', en: 'Oral Surgery', slug: 'cirujano-oral-arguelles-madrid-espana' },
]

export const specialtyLabel = (s, locale) => (locale === 'en' ? s.en : s.es)
