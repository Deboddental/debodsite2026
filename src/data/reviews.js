// ─────────────────────────────────────────────────────────────────────────────
// REVIEWS REALES — copia desde Google Maps
//
// Cómo actualizar:
//   1. Ve a Google Maps → busca "Debod Dental Clinic" → "Reseñas"
//   2. Copia el nombre exacto del paciente, el texto y la fecha
//   3. Añade (o edita) un objeto en el array siguiendo el formato de abajo
//   4. Haz deploy → la review aparece automáticamente en la web
//
// Campos:
//   name      → Nombre tal como aparece en Google (ej. "María G.")
//   initials  → 2 letras para el avatar (ej. "MG")
//   rating    → número de estrellas (normalmente 5)
//   date      → fecha en español (ej. "Marzo 2025")
//   text      → texto literal de la reseña
//   treatment → tratamiento recibido, si se conoce (ej. "Implante Dental")
// ─────────────────────────────────────────────────────────────────────────────

export const reviews = [
  {
    name: 'Yonathan B.',
    initials: 'YB',
    rating: 5,
    date: 'Febrero 2026',
    text: 'La mejor clínica de Madrid. Me atendieron con mucho tacto y amabilidad. La recomiendo al 100%. Cuidan cada detalle y te hacen sentir como en casa, la recepcionista muy amable y muy buen servicio del equipo de trabajo que tienen allí. ❤️',
    treatment: 'Rehabilitación Oral',
  },
  {
    name: 'Fabiola U.',
    initials: 'FU',
    rating: 5,
    date: 'Diciembre 2025',
    text: 'He terminado recientemente mi tratamiento de ortodoncia invisible en la clínica y la experiencia ha sido muy buena. El personal es muy profesional y, al mismo tiempo, cercano, y la planificación del tratamiento ha sido realmente precisa.',
    treatment: 'Invisalign®',
  },
  {
    name: 'Pili L.',
    initials: 'PL',
    rating: 5,
    date: 'Septiembre 2025',
    text: 'Muy agradecida con el Dr. César. Me realizó el tratamiento de carillas y el resultado fue excelente. Destaco su amabilidad, atención y profesionalismo. Lo recomiendo sin duda.',
    treatment: 'Diseño de Sonrisa',
  },
  {
    name: 'Nicolás M.',
    initials: 'NM',
    rating: 5,
    date: 'Junio 2025',
    text: 'La experiencia fue superadora. Tienen la ultima tecnología de avanzada. Me realicé una corona sobre implante con un resultado estético natural. La atención fue excelente. Siempre respetaron mis expectativas y decisiones. Trabajan en tiempo record ya que poseen su propio laboratorio dental. ¡Muy recomendable!',
    treatment: 'Implante Dental',
  },
  {
    name: 'Or Giladi.',
    initials: 'OG',
    rating: 5,
    date: 'Enero 2026',
    text: 'Mi hija necesitó atención de urgencia y la clínica le consiguió una cita con muy poca antelación. Cuentan con personal altamente profesional que habla inglés y con equipos de última generación. ¡Muy recomendable!',
    treatment: 'Odontopediatría',
  },
  {
    name: 'Erven L.',
    initials: 'EL',
    rating: 5,
    date: 'Enero 2025',
    text: 'Los conocí por una recomendación y me voy muy satisfecho Un equipo muy amable desde la bienvenida, te explican con detalle el tratamiento más adecuado, las posibles opciones para tu caso y aparte ofrecen buenos financiamientos. ¡Los recomiendo!',
    treatment: 'Rehabilitación + Financiación',
  },
]
