// Bilingual sitemap generator. Replaces vite-plugin-sitemap's output (which
// stripped trailing slashes, duplicated the home URL and emitted no hreflang
// alternates). Each URL carries reciprocal <xhtml:link> alternates for ES↔EN
// page pairs, with trailing slashes matching the canonicals. Run after `vite build`.

import { SITE_ORIGIN as BASE } from '../src/utils/site.js'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { getHreflangPair } from '../src/utils/locale.js'
import { getAllRoutes } from './routes.mjs'
import { blogSlugEn } from '../src/i18n/slugs.js'
import { blogPosts } from '../src/data/blog.js'

// <lastmod>: real per-post dates for blog routes (ES + EN); a single site date
// for everything else. Bump SITE_LASTMOD when static pages get a content pass.
const SITE_LASTMOD = '2026-08-21'
const lastmodByRoute = {}
for (const p of blogPosts) {
  const d = p.dateModified || p.publishDate
  lastmodByRoute[`/blog/${p.category}/${p.slug}/`] = d
  const m = blogSlugEn[p.slug]
  if (m) lastmodByRoute[`/en/blog/${m.en_cat}/${m.en}/`] = d
}

// Exclude /lp/* (Google Ads landings): they are noindex and must not be in the sitemap.
const routes = [...new Set(getAllRoutes())].filter((r) => !r.startsWith('/lp/'))
const body = routes.map((route) => {
  const { es, en } = getHreflangPair(route)
  const links = es && en
    ? `\n    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${es}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${en}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${es}"/>`
    : ''
  const lastmod = `\n    <lastmod>${lastmodByRoute[route] || SITE_LASTMOD}</lastmod>`
  return `  <url>\n    <loc>${BASE}${route}</loc>${lastmod}${links}\n  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`

writeFileSync(resolve('dist/sitemap.xml'), xml)
console.log(`🗺️  sitemap.xml — ${routes.length} URLs (bilingual hreflang alternates)`)
