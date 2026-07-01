// ── UI string dictionary (chrome + reused page labels) ───────────────────────
// Heavy static-page PROSE lives in src/i18n/pages/*.js; this file is for short,
// reused chrome/labels. `t(key, locale)` falls back to ES, then to the key.

export const ui = {
  // Navbar
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.team': { es: 'Equipo', en: 'Team' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.treatments': { es: 'Tratamientos', en: 'Treatments' },
  'nav.tourism': { es: 'Turismo Dental', en: 'Dental Tourism' },
  'nav.reviews': { es: 'Reseñas', en: 'Reviews' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.cta': { es: 'Agenda tu cita', en: 'Book an appointment' },
  'nav.ctaMobile': { es: 'Agendar mi cita', en: 'Book my appointment' },
  'nav.openMenu': { es: 'Abrir menú', en: 'Open menu' },
  'nav.language': { es: 'Idioma · Language', en: 'Language · Idioma' },

  // Breadcrumbs
  'crumb.home': { es: 'Inicio', en: 'Home' },
  'crumb.services': { es: 'Servicios', en: 'Services' },
  'crumb.locations': { es: 'Ubicaciones', en: 'Locations' },
  'crumb.team': { es: 'Equipo', en: 'Team' },
  'crumb.blog': { es: 'Blog', en: 'Blog' },

  // Service detail
  'service.eyebrow': { es: 'Especialidad', en: 'Specialty' },
  'service.relatedTitle': { es: 'Tratamientos disponibles', en: 'Available treatments' },
  'service.ctaHeadline': { es: 'Tu salud dental merece lo mejor', en: 'Your dental health deserves the best' },
  'service.ctaSubtext': { es: 'Reserva una consulta con nuestros especialistas y descubre el enfoque de la odontología honesta.', en: 'Book a consultation with our specialists and discover our honest-dentistry approach.' },

  // Treatment detail
  'treatment.eyebrow': { es: 'Tratamiento', en: 'Treatment' },
  'treatment.benefitsTitle': { es: 'Ventajas de este tratamiento', en: 'Benefits of this treatment' },
  'treatment.ctaHeadline': { es: '¿Tienes preguntas sobre este tratamiento?', en: 'Questions about this treatment?' },
  'treatment.ctaSubtext': { es: 'Nuestro equipo te orientará sin compromiso. Agenda tu consulta hoy.', en: 'Our team will guide you with no obligation. Book your consultation today.' },

  // Barrio detail
  'barrio.eyebrow': { es: 'Tu dentista en', en: 'Your dentist in' },

  // Blog
  'blog.reviewedBy': { es: 'Revisado por', en: 'Reviewed by' },
  'blog.reviewedOn': { es: 'Última revisión', en: 'Last reviewed' },
  'blog.published': { es: 'Publicado', en: 'Published' },
  'blog.related': { es: 'Artículos relacionados', en: 'Related articles' },
  'blog.read': { es: 'Leer', en: 'Read' },
  'blog.faqSubtitle': { es: 'Preguntas frecuentes sobre este tema.', en: 'Frequently asked questions about this topic.' },
  'blog.eeatNote': { es: 'Contenido informativo revisado por un profesional colegiado de Debod Dental Clinic. No sustituye una valoración clínica personalizada.', en: 'Informational content reviewed by a registered professional at Debod Dental Clinic. It does not replace a personalised clinical assessment.' },
  'blog.viewProfile': { es: 'Ver perfil del especialista', en: 'View specialist profile' },
  'blog.colegiado': { es: 'Nº Colegiado COEM', en: 'COEM Reg. No.' },
  'blog.ctaHeadline': { es: '¿Este artículo te generó preguntas?', en: 'Did this article raise questions?' },
  'blog.ctaSubtext': { es: 'Habla directamente con nuestro equipo de especialistas. Primera consulta sin compromiso.', en: 'Talk directly with our team of specialists. First consultation with no obligation.' },

  // FAQ + CtaBand defaults
  'faq.eyebrow': { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
  'faq.subtitle': { es: 'Resolvemos las dudas más habituales antes de tu primera visita.', en: 'We answer the most common questions before your first visit.' },
  'cta.defaultHeadline': { es: '¿Listo para transformar tu sonrisa?', en: 'Ready to transform your smile?' },
  'cta.defaultSubtext': { es: 'Pide tu consulta con nuestro equipo de especialistas.', en: 'Book a consultation with our team of specialists.' },
  'cta.defaultLabel': { es: 'Agendar consulta', en: 'Book a consultation' },

  // Doctor profile
  'doctor.specialtiesTitle': { es: 'Áreas de especialización', en: 'Areas of specialisation' },
  'doctor.book': { es: 'Agendar cita', en: 'Book an appointment' },
  'doctor.colegiado': { es: 'Colegiado Nº', en: 'Reg. No.' },

  // Footer
  'footer.ctaTitle': { es: '¿Listo para transformar tu sonrisa?', en: 'Ready to transform your smile?' },
  'footer.ctaSubtitle': { es: 'Primera visita diagnóstica incluida · Argüelles, Madrid', en: 'First diagnostic visit included · Argüelles, Madrid' },
  'footer.ctaBtn': { es: 'Agendar Cita Ahora', en: 'Book an Appointment' },
  'footer.servicesTitle': { es: 'Servicios', en: 'Services' },
  'footer.treatmentsTitle': { es: 'Tratamientos', en: 'Treatments' },
  'footer.contactTitle': { es: 'Contacto', en: 'Contact' },
  'footer.bio': { es: 'Clínica dental boutique de referencia en Argüelles, Madrid. Especialistas en Rehabilitación Oral, Implantología y Estética Dental.', en: 'A leading boutique dental clinic in Argüelles, Madrid. Specialists in full oral rehabilitation, implantology and cosmetic dentistry.' },
  'footer.status': { es: 'Atendiendo pacientes', en: 'Now accepting patients' },
  'footer.maps': { es: 'Ver en Google Maps', en: 'View on Google Maps' },
  'footer.privacy': { es: 'Política de Privacidad', en: 'Privacy Policy' },

  // Footer link labels — services
  'svc.general': { es: 'Odontología General', en: 'General Dentistry' },
  'svc.cosmetic': { es: 'Odontología Estética', en: 'Cosmetic Dentistry' },
  'svc.implants': { es: 'Implantes Dentales', en: 'Dental Implants' },
  'svc.endo': { es: 'Endodoncia', en: 'Root Canal' },
  'svc.pediatric': { es: 'Odontopediatría', en: 'Paediatric Dentistry' },
  'svc.ortho': { es: 'Ortodoncia', en: 'Orthodontics' },
  'svc.perio': { es: 'Periodoncia', en: 'Periodontics' },
  'svc.oralsurgery': { es: 'Cirugía Oral', en: 'Oral Surgery' },
  // WhatsApp widget
  'wa.help': { es: '¿Te ayudamos?', en: 'Need help?' },
  'wa.book': { es: 'Agenda tu cita en segundos', en: 'Book your appointment in seconds' },
  'wa.aria': { es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' },

  // Consent banner
  'consent.text': { es: 'Usamos cookies propias y de terceros para medición y marketing. Puedes aceptarlas o rechazarlas.', en: 'We use our own and third-party cookies for measurement and marketing. You can accept or reject them.' },
  'consent.more': { es: 'Más información', en: 'Learn more' },
  'consent.reject': { es: 'Rechazar', en: 'Reject' },
  'consent.accept': { es: 'Aceptar', en: 'Accept' },

  // RelatedGrid default heading
  'related.title': { es: 'Tratamientos relacionados', en: 'Related treatments' },

  // Footer link labels — treatments
  'tr.veneers': { es: 'Carillas de Porcelana', en: 'Porcelain Veneers' },
  'tr.invisalign': { es: 'Invisalign®', en: 'Invisalign®' },
  'tr.whitening': { es: 'Blanqueamiento', en: 'Teeth Whitening' },
  'tr.guided': { es: 'Cirugía Guiada 3D', en: '3D Guided Surgery' },
  'tr.gumgraft': { es: 'Injerto de Encía', en: 'Gum Graft' },
  'tr.gingivo': { es: 'Gingivoplastia', en: 'Gingivoplasty' },
  'tr.crown': { es: 'Corona Dental', en: 'Dental Crown' },
  'tr.financing': { es: 'Financiación hasta 60 meses', en: 'Financing up to 60 months' },
}

export function t(key, locale = 'es') {
  return ui[key]?.[locale] ?? ui[key]?.es ?? key
}
