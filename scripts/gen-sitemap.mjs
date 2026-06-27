// Bilingual sitemap generator. Replaces vite-plugin-sitemap's output (which
// stripped trailing slashes, duplicated the home URL and emitted no hreflang
// alternates). Each URL carries reciprocal <xhtml:link> alternates for ES↔EN
// page pairs, with trailing slashes matching the canonicals. Run after `vite build`.

import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { getAllRoutes } from './routes.mjs'
import { pagePairs } from '../src/i18n/slugs.js'

const BASE = 'https://deboddentalclinic.com'

const esToEn = {}
const enToEs = {}
for (const [es, en] of pagePairs()) { esToEn[es] = en; enToEs[en] = es }

const isEn = (r) => r === '/en/' || r.startsWith('/en/')

// Strict reciprocal pair, or null (e.g. EN-only curated landings).
function pairFor(route) {
  if (isEn(route)) {
    const es = enToEs[route]
    return es && esToEn[es] === route ? { es, en: route } : null
  }
  const en = esToEn[route]
  return en && enToEs[en] === route ? { es: route, en } : null
}

const routes = [...new Set(getAllRoutes())]
const body = routes.map((route) => {
  const alt = pairFor(route)
  const links = alt
    ? `\n    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${alt.es}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${alt.en}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${alt.es}"/>`
    : ''
  return `  <url>\n    <loc>${BASE}${route}</loc>${links}\n  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`

writeFileSync(resolve('dist/sitemap.xml'), xml)
console.log(`🗺️  sitemap.xml — ${routes.length} URLs (bilingual hreflang alternates)`)
