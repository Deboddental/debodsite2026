// ── SEO / JSON-LD Factory Functions ─────────────────────────

import { teamMembers } from './team.js'

const BASE_URL = 'https://deboddentalclinic.com'
const CLINIC_ID = `${BASE_URL}/#clinic`
// Freshness signal for AI/search. Bump on meaningful content updates.
const LAST_UPDATED = '2026-06-25'

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  }
}

// FAQPage schema — AI assistants (ChatGPT, Perplexity, Gemini) and Google rich
// results heavily favour Q&A markup, so any page with FAQs should emit this.
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export function servicePageSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/${service.slug}/`,
        url: `${BASE_URL}/${service.slug}/`,
        name: service.metaTitle,
        description: service.metaDescription,
        inLanguage: 'es-ES',
        dateModified: LAST_UPDATED,
        lastReviewed: LAST_UPDATED,
        reviewedBy: { '@id': CLINIC_ID },
        about: {
          '@type': 'MedicalSpecialty',
          name: service.title,
          relevantSpecialty: service.title,
          availableAtOrFrom: { '@id': CLINIC_ID },
        },
        isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      breadcrumbSchema([
        { label: 'Inicio', href: '/' },
        { label: 'Servicios', href: '/servicios/' },
        { label: service.title, href: null },
      ]),
    ],
  }
}

export function treatmentPageSchema(treatment) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': `${BASE_URL}/tratamientos/${treatment.slug}/`,
        name: treatment.title,
        description: treatment.metaDescription,
        url: `${BASE_URL}/tratamientos/${treatment.slug}/`,
        procedureType: 'SurgicalProcedure',
        status: 'EventScheduled',
        performedBy: { '@id': CLINIC_ID },
        dateModified: LAST_UPDATED,
        preparation: treatment.bodyMarkdown?.substring(0, 200),
      },
      breadcrumbSchema([
        { label: 'Inicio', href: '/' },
        { label: 'Servicios', href: '/servicios/' },
        { label: treatment.subtitle || 'Tratamientos', href: treatment.specialty ? `/${treatment.specialty}/` : '/servicios/' },
        { label: treatment.title, href: null },
      ]),
    ],
  }
}

// Local-SEO landing for a Madrid neighbourhood. Reinforces the clinic as the
// dentist serving that barrio (areaServed) without declaring a second business.
export function barrioPageSchema(barrio) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${BASE_URL}/${barrio.slug}/`,
        url: `${BASE_URL}/${barrio.slug}/`,
        name: barrio.metaTitle,
        description: barrio.metaDescription,
        inLanguage: 'es-ES',
        dateModified: LAST_UPDATED,
        about: { '@id': CLINIC_ID },
        mainEntity: { '@id': CLINIC_ID },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        areaServed: { '@type': 'Place', name: `${barrio.barrio}, Madrid` },
      },
      breadcrumbSchema([
        { label: 'Inicio', href: '/' },
        { label: 'Ubicaciones', href: '/ubicaciones/' },
        { label: barrio.title, href: null },
      ]),
    ],
  }
}

// Resolve the medical author/reviewer of a post (E-E-A-T for YMYL health content).
const DEFAULT_AUTHOR_SLUG = 'dr-cesar-rodriguez'
export function postAuthor(post) {
  return (
    teamMembers.find((m) => m.slug === post?.authorSlug) ||
    teamMembers.find((m) => m.slug === DEFAULT_AUTHOR_SLUG) ||
    teamMembers[0]
  )
}

export function blogPostSchema(post) {
  const doc = postAuthor(post)
  const personNode = {
    '@type': 'Person',
    name: doc.name,
    url: `${BASE_URL}/equipo/${doc.slug}/`,
    jobTitle: doc.title,
    worksFor: { '@id': CLINIC_ID },
    ...(doc.colegiadoNum
      ? { identifier: { '@type': 'PropertyValue', propertyID: 'Nº Colegiado (COEM)', value: doc.colegiadoNum } }
      : {}),
  }
  const url = `${BASE_URL}/blog/${post.category}/${post.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': url,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.metaDescription,
        image: post.heroImageUrl ? `${BASE_URL}${post.heroImageUrl}` : `${BASE_URL}/og-image.jpg`,
        url,
        datePublished: post.publishDate,
        dateModified: post.dateModified || post.publishDate,
        author: personNode,
        reviewedBy: personNode,
        publisher: {
          '@type': 'Organization',
          '@id': CLINIC_ID,
          name: 'Debod Dental Clinic',
          logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
        },
        inLanguage: 'es-ES',
        isPartOf: { '@id': `${BASE_URL}/blog/` },
      },
      breadcrumbSchema([
        { label: 'Inicio', href: '/' },
        { label: 'Blog', href: '/blog/' },
        { label: post.categoryLabel || post.category, href: '/blog/' },
        { label: post.title, href: null },
      ]),
    ],
  }
}

export function doctorProfileSchema(doctor) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': doctor.schemaType || 'Physician',
        '@id': `${BASE_URL}/equipo/${doctor.slug}/`,
        name: doctor.name,
        jobTitle: doctor.title,
        url: `${BASE_URL}/equipo/${doctor.slug}/`,
        image: doctor.photoUrl,
        ...(doctor.colegiadoNum ? { identifier: `Colegiado Nº ${doctor.colegiadoNum}` } : {}),
        worksFor: { '@id': CLINIC_ID },
        knowsAbout: doctor.specialties || [],
        description: doctor.bioMarkdown?.substring(0, 300),
      },
      breadcrumbSchema([
        { label: 'Inicio', href: '/' },
        { label: 'Equipo', href: '/equipo/' },
        { label: doctor.name, href: null },
      ]),
    ],
  }
}

const MONTH_MAP = {
  Enero: '01', Febrero: '02', Marzo: '03', Abril: '04',
  Mayo: '05', Junio: '06', Julio: '07', Agosto: '08',
  Septiembre: '09', Octubre: '10', Noviembre: '11', Diciembre: '12',
}
function parseSpanishDate(str) {
  const [month, year] = (str || '').split(' ')
  return `${year || '2025'}-${MONTH_MAP[month] || '01'}`
}

export function homeReviewsSchema(reviews) {
  return {
    '@context': 'https://schema.org',
    '@graph': reviews.map((r, i) => ({
      '@type': 'Review',
      '@id': `${BASE_URL}/#review-${i + 1}`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: parseSpanishDate(r.date),
      reviewBody: r.text,
      itemReviewed: { '@id': `${BASE_URL}/#clinic` },
    })),
  }
}

export function blogIndexSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Blog Debod Dental Clinic — Consejos de Salud Dental en Argüelles, Madrid',
    url: `${BASE_URL}/blog/`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/blog/${post.category}/${post.slug}/`,
      name: post.title,
    })),
  }
}
