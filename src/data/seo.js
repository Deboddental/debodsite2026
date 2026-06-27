// ── SEO / JSON-LD Factory Functions ─────────────────────────

import { teamMembers } from './team.js'
import { tf } from '../utils/tf'
import { t } from '../i18n/ui'
import { serviceSlugEn, treatmentSlugEn, barrioSlugEn, blogSlugEn } from '../i18n/slugs'

const BASE_URL = 'https://deboddentalclinic.com'
const langTag = (locale) => (locale === 'en' ? 'en' : 'es-ES')
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

export function servicePageSchema(service, locale = 'es') {
  const isEn = locale === 'en'
  const url = isEn ? `${BASE_URL}/en/${serviceSlugEn[service.slug] || service.slug}/` : `${BASE_URL}/${service.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: tf(service, 'metaTitle', locale),
        description: tf(service, 'metaDescription', locale),
        inLanguage: langTag(locale),
        dateModified: LAST_UPDATED,
        lastReviewed: LAST_UPDATED,
        reviewedBy: { '@id': CLINIC_ID },
        about: {
          '@type': 'MedicalSpecialty',
          name: tf(service, 'title', locale),
          relevantSpecialty: tf(service, 'title', locale),
          availableAtOrFrom: { '@id': CLINIC_ID },
        },
        isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      breadcrumbSchema([
        { label: t('crumb.home', locale), href: isEn ? '/en/' : '/' },
        { label: t('crumb.services', locale), href: isEn ? '/en/services/' : '/servicios/' },
        { label: tf(service, 'title', locale), href: null },
      ]),
    ],
  }
}

export function treatmentPageSchema(treatment, locale = 'es') {
  const isEn = locale === 'en'
  const url = isEn
    ? `${BASE_URL}/en/treatments/${treatmentSlugEn[treatment.slug] || treatment.slug}/`
    : `${BASE_URL}/tratamientos/${treatment.slug}/`
  const parentHref = treatment.specialty
    ? (isEn ? `/en/${serviceSlugEn[treatment.specialty] || 'services'}/` : `/${treatment.specialty}/`)
    : (isEn ? '/en/services/' : '/servicios/')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': url,
        name: tf(treatment, 'title', locale),
        description: tf(treatment, 'metaDescription', locale),
        url,
        procedureType: 'SurgicalProcedure',
        status: 'EventScheduled',
        performedBy: { '@id': CLINIC_ID },
        dateModified: LAST_UPDATED,
        preparation: tf(treatment, 'bodyMarkdown', locale)?.substring(0, 200),
      },
      breadcrumbSchema([
        { label: t('crumb.home', locale), href: isEn ? '/en/' : '/' },
        { label: t('crumb.services', locale), href: isEn ? '/en/services/' : '/servicios/' },
        { label: tf(treatment, 'subtitle', locale) || t('crumb.services', locale), href: parentHref },
        { label: tf(treatment, 'title', locale), href: null },
      ]),
    ],
  }
}

// Local-SEO landing for a Madrid neighbourhood. Reinforces the clinic as the
// dentist serving that barrio (areaServed) without declaring a second business.
export function barrioPageSchema(barrio, locale = 'es') {
  const isEn = locale === 'en'
  const url = isEn ? `${BASE_URL}/en/${barrioSlugEn[barrio.slug] || barrio.slug}/` : `${BASE_URL}/${barrio.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: tf(barrio, 'metaTitle', locale),
        description: tf(barrio, 'metaDescription', locale),
        inLanguage: langTag(locale),
        dateModified: LAST_UPDATED,
        about: { '@id': CLINIC_ID },
        mainEntity: { '@id': CLINIC_ID },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        areaServed: { '@type': 'Place', name: `${barrio.barrio}, Madrid` },
      },
      breadcrumbSchema([
        { label: t('crumb.home', locale), href: isEn ? '/en/' : '/' },
        { label: t('crumb.locations', locale), href: isEn ? '/en/locations/' : '/ubicaciones/' },
        { label: tf(barrio, 'title', locale), href: null },
      ]),
    ],
  }
}

// English landing page (dental tourism / expats). inLanguage en, references the
// same clinic entity. Breadcrumb labels in English.
export function enLandingSchema(landing) {
  const url = `${BASE_URL}/en/${landing.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: landing.metaTitle,
        description: landing.metaDescription,
        inLanguage: 'en',
        dateModified: LAST_UPDATED,
        about: { '@id': CLINIC_ID },
        mainEntity: { '@id': CLINIC_ID },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        areaServed: { '@type': 'City', name: 'Madrid' },
      },
      breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: landing.title, href: null },
      ]),
    ],
  }
}

// Dental-tourism landing (international patients). Rich page: MedicalWebPage +
// breadcrumb (Home → Dental Tourism → title) + FAQPage when the page has FAQs.
export function dentalTourismSchema(landing) {
  const HUB = '/en/dental-tourism-madrid/'
  const url = `${BASE_URL}/en/${landing.slug}/`
  const crumbs = landing.isHub
    ? [
        { label: 'Home', href: '/en/' },
        { label: 'Dental Tourism', href: null },
      ]
    : [
        { label: 'Home', href: '/en/' },
        { label: 'Dental Tourism', href: HUB },
        { label: landing.title, href: null },
      ]
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: landing.metaTitle,
        description: landing.metaDescription,
        inLanguage: 'en',
        dateModified: LAST_UPDATED,
        about: { '@id': CLINIC_ID },
        mainEntity: { '@id': CLINIC_ID },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        audience: { '@type': 'Audience', audienceType: 'International and English-speaking patients' },
        areaServed: { '@type': 'City', name: 'Madrid' },
      },
      breadcrumbSchema(crumbs),
      ...(landing.faqs?.length ? [faqSchema(landing.faqs)] : []),
    ],
  }
}

// English hub home (/en/) — the entry point for international/expat patients.
// inLanguage en, references the same clinic entity; Spanish home is the x-default.
export function enHomeSchema() {
  const url = `${BASE_URL}/en/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: 'English-Speaking Dental Clinic in Madrid — Debod Dental Clinic',
        description:
          'Boutique English-speaking dental clinic in central Madrid (Argüelles): implants, Invisalign®, porcelain veneers and full oral rehabilitation, with an in-house digital lab.',
        inLanguage: 'en',
        dateModified: LAST_UPDATED,
        about: { '@id': CLINIC_ID },
        mainEntity: { '@id': CLINIC_ID },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        areaServed: { '@type': 'City', name: 'Madrid' },
      },
      breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'English', href: null },
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

export function blogPostSchema(post, locale = 'es') {
  const isEn = locale === 'en'
  const doc = postAuthor(post)
  const personNode = {
    '@type': 'Person',
    name: doc.name,
    url: `${BASE_URL}${isEn ? '/en/team/' : '/equipo/'}${doc.slug}/`,
    jobTitle: tf(doc, 'title', locale),
    worksFor: { '@id': CLINIC_ID },
    ...(doc.colegiadoNum
      ? { identifier: { '@type': 'PropertyValue', propertyID: 'Nº Colegiado (COEM)', value: doc.colegiadoNum } }
      : {}),
  }
  const m = blogSlugEn[post.slug]
  const url = isEn
    ? `${BASE_URL}/en/blog/${m?.en_cat || post.category}/${m?.en || post.slug}/`
    : `${BASE_URL}/blog/${post.category}/${post.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': url,
        mainEntityOfPage: url,
        headline: tf(post, 'title', locale),
        description: tf(post, 'metaDescription', locale),
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
        inLanguage: langTag(locale),
        isPartOf: { '@id': `${BASE_URL}${isEn ? '/en/blog/' : '/blog/'}` },
      },
      breadcrumbSchema([
        { label: t('crumb.home', locale), href: isEn ? '/en/' : '/' },
        { label: t('crumb.blog', locale), href: isEn ? '/en/blog/' : '/blog/' },
        { label: tf(post, 'categoryLabel', locale) || post.category, href: isEn ? '/en/blog/' : '/blog/' },
        { label: tf(post, 'title', locale), href: null },
      ]),
    ],
  }
}

export function doctorProfileSchema(doctor, locale = 'es') {
  const isEn = locale === 'en'
  const url = `${BASE_URL}${isEn ? '/en/team/' : '/equipo/'}${doctor.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': doctor.schemaType || 'Physician',
        '@id': url,
        name: doctor.name,
        jobTitle: tf(doctor, 'title', locale),
        url,
        image: doctor.photoUrl?.startsWith('http') ? doctor.photoUrl : `${BASE_URL}${doctor.photoUrl}`,
        ...(doctor.colegiadoNum ? { identifier: `Colegiado Nº ${doctor.colegiadoNum}` } : {}),
        worksFor: { '@id': CLINIC_ID },
        knowsAbout: tf(doctor, 'specialties', locale) || [],
        description: tf(doctor, 'bioMarkdown', locale)?.substring(0, 300),
      },
      breadcrumbSchema([
        { label: t('crumb.home', locale), href: isEn ? '/en/' : '/' },
        { label: t('crumb.team', locale), href: isEn ? '/en/team/' : '/equipo/' },
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
