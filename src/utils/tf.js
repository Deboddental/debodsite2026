// ── Bilingual field accessor + record resolution ────────────────────────────
// `tf(record, field, locale)` returns the EN field (`field_en`) on /en/ pages,
// falling back to the ES field — so a missing translation renders ES, never a
// blank. Record resolvers map the route slug (ES on ES routes, EN on /en/ routes)
// back to the canonical record via the central slug map (src/i18n/slugs.js).

import { serviceSlugEn, treatmentSlugEn, barrioSlugEn, blogSlugEn } from '../i18n/slugs.js'

// Merge EN content (authored in src/i18n/content/*.en.js, keyed by ES slug) onto
// the records as `<field>_en` siblings, so tf() can read them. Called once per
// data module at import. Missing entries simply leave the ES value (fallback).
export function mergeEn(records, enBySlug) {
  if (!enBySlug) return records
  for (const r of records) {
    const en = enBySlug[r.slug]
    if (en) for (const k of Object.keys(en)) r[`${k}_en`] = en[k]
  }
  return records
}

export function tf(record, field, locale) {
  if (!record) return undefined
  if (locale === 'en') {
    const en = record[`${field}_en`]
    return en === undefined || en === null || en === '' ? record[field] : en
  }
  return record[field]
}

// Translate an array-of-objects field (e.g. faqs, benefits, relatedTreatments).
export function tfArray(record, field, locale) {
  return tf(record, field, locale) || []
}

const invert = (m) => Object.fromEntries(Object.entries(m).map(([es, en]) => [en, es]))
const serviceEsBySlugEn = invert(serviceSlugEn)
const treatmentEsBySlugEn = invert(treatmentSlugEn)
const barrioEsBySlugEn = invert(barrioSlugEn)
const blogEsBySlugEn = Object.fromEntries(Object.entries(blogSlugEn).map(([es, m]) => [m.en, es]))

// rawSlug is the ES slug on ES routes and the EN slug on /en/ routes.
const esFrom = (rawSlug, locale, map) => (locale === 'en' ? map[rawSlug] || rawSlug : rawSlug)

export const resolveService = (services, rawSlug, locale) =>
  services.find((s) => s.slug === esFrom(rawSlug, locale, serviceEsBySlugEn))
export const resolveTreatment = (treatments, rawSlug, locale) =>
  treatments.find((t) => t.slug === esFrom(rawSlug, locale, treatmentEsBySlugEn))
export const resolveBarrio = (barrios, rawSlug, locale) =>
  barrios.find((b) => b.slug === esFrom(rawSlug, locale, barrioEsBySlugEn))
export const resolveBlogPost = (posts, rawSlug, locale) =>
  posts.find((p) => p.slug === esFrom(rawSlug, locale, blogEsBySlugEn))
