// ── Locale helpers for the EN/ES bilingual site ──────────────────────────────
// Single source of truth for ES↔EN page pairing. The full mirror map is DERIVED
// from src/i18n/slugs.js (pagePairs: every static page + every data record).
// The 3 curated dental-tourism landings (enLandings) are added reverse-only
// (EN→ES) so the toggle from a landing returns to a sensible ES page, WITHOUT
// claiming to be the hreflang counterpart of that ES page (its mirror is).
//
// - getLocale(pathname)        → 'en' on /en/*, else 'es'
// - getAlternatePath(pathname) → opposite-language URL for the toggle (falls back
//                                to the language home/hub when no counterpart)
// - getHreflangPair(pathname)  → strict reciprocal {es,en} for hreflang/canonical
//                                (emits the alternate ONLY when it points back)

import { pagePairs } from '../i18n/slugs'
import { enLandings } from '../data/enLandings'
import { tourismLandings } from '../data/dentalTourism'

export const EN_HOME = '/en/'
export const ES_HOME = '/'

const esToEn = {}
const enToEs = {}

// Full mirror (static pages + all data records) from the central slug map.
for (const [es, en] of pagePairs()) {
  esToEn[es] = en
  enToEs[en] = es
}

// Curated landings + dental-tourism pages: reverse-only so the toggle works from
// the EN landing, but the ES page keeps its own mirror as the hreflang
// counterpart (no double alternate).
for (const l of [...enLandings, ...tourismLandings]) {
  const enPath = `/en/${l.slug}/`
  if (l.esAlternate && !enToEs[enPath]) enToEs[enPath] = l.esAlternate
}

export function getLocale(pathname) {
  return pathname === EN_HOME || pathname.startsWith('/en/') ? 'en' : 'es'
}

// The path to switch to from `pathname`, in the OPPOSITE language. Falls back to
// the other language's home when there is no direct counterpart.
export function getAlternatePath(pathname) {
  return getLocale(pathname) === 'en'
    ? enToEs[pathname] || ES_HOME
    : esToEn[pathname] || EN_HOME
}

// Strict reciprocal pair for hreflang + canonical. The alternate is returned ONLY
// when it maps back to this exact path (prevents dangling/duplicate alternates).
export function getHreflangPair(pathname) {
  if (getLocale(pathname) === 'es') {
    const en = esToEn[pathname]
    return { es: pathname, en: en && enToEs[en] === pathname ? en : null }
  }
  const es = enToEs[pathname]
  return { en: pathname, es: es && esToEn[es] === pathname ? es : null }
}
