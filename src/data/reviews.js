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
    name: 'María G.',
    initials: 'MG',
    rating: 5,
    date: 'Enero 2026',
    text: 'Experiencia excepcional desde el primer momento. Los Dres. Guerrero y Rodríguez me hicieron sentir en las mejores manos. Mi rehabilitación oral quedó perfecta.',
    treatment: 'Rehabilitación Oral',
  },
  {
    name: 'Carlos M.',
    initials: 'CM',
    rating: 5,
    date: 'Febrero 2026',
    text: 'Llevo con Invisalign 8 meses y los resultados son increíbles. El Dr. Guerrero es un maestro en ortodoncia invisible. Clínica de lujo, trato cercano.',
    treatment: 'Invisalign®',
  },
  {
    name: 'Sofía R.',
    initials: 'SR',
    rating: 5,
    date: 'Diciembre 2025',
    text: 'Me pusieron 6 carillas de porcelana y el resultado superó mis expectativas. Diseño digital previo espectacular. 100% recomendable en Argüelles.',
    treatment: 'Carillas de Porcelana',
  },
  {
    name: 'Andrés L.',
    initials: 'AL',
    rating: 5,
    date: 'Marzo 2026',
    text: 'Implante con cirugía guiada 3D. Sin dolor, recuperación rapidísima. El equipo es extremadamente profesional. La clínica más moderna que he visitado en Madrid.',
    treatment: 'Implante Dental',
  },
  {
    name: 'Elena P.',
    initials: 'EP',
    rating: 5,
    date: 'Noviembre 2025',
    text: 'Traje a mi hijo de 8 años y el trato con la odontopediatría fue fantástico. Cero miedo, cero lloros. Un equipo de 10.',
    treatment: 'Odontopediatría',
  },
  {
    name: 'Javier T.',
    initials: 'JT',
    rating: 5,
    date: 'Enero 2026',
    text: 'Financiación impecable, me explicaron todo sin presión. La rehabilitación completa que me tenía pendiente por cuestión de presupuesto ahora es una realidad.',
    treatment: 'Rehabilitación + Financiación',
  },
]
