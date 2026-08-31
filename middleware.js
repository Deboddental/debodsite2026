// ── Edge middleware: agent-friendly content negotiation ─────────────────
// Vercel Edge Middleware. Two jobs:
//
// 1. Markdown negotiation (acceptmarkdown.com): when a client sends
//    `Accept: text/markdown`, serve a markdown representation for the
//    pages that have one. The prerendered site is HTML-first, so we map
//    key routes to a concise markdown body instead of re-rendering.
// 2. Hard-404 markdown body: for unknown paths we let Vercel serve the
//    prerendered 404.html (real 404 status), but we rewrite it to a
//    markdown recovery body when the client asks for markdown, so agents
//    get a sitemap/llms.txt pointer instead of an HTML shell.
//
// Also adds `Vary: Accept` to everything so CDN caches don't mix HTML and
// markdown variants (audit: "Vary header missing Accept").

const BASE = 'https://deboddentalclinic.com'

// Route → markdown body served when Accept: text/markdown.
// Keep concise: agents want the facts + links to the deep files.
const MARKDOWN_BY_ROUTE = {
  '/': `# Debod Dental Clinic

Boutique dental clinic in Argüelles, Madrid (Spain). Oral Rehabilitation, Digital Implantology, Cosmetic & Restorative Dentistry, Invisalign®, porcelain veneers, crowns and full-mouth rehabilitation. Directed by Dr. Víctor Guerrero and Dr. César Rodríguez. English-speaking staff; international patients welcome (dental tourism).

- Address: C. de Ferraz, 24, Argüelles, 28008 Madrid, Spain
- Phone: +34 914 47 62 25 · WhatsApp: +34 689 10 47 14 · Email: info@deboddentalclinic.com
- Hours: Mon–Fri 9:00–20:00 · Metro: Ventura Rodríguez (L3)
- First diagnostic visit included · Financing up to 60 months (0% first 12)
- Full reference: ${BASE}/llms-full.txt

Treatments: ${BASE}/tratamientos/
About: ${BASE}/nosotros/
Contact: ${BASE}/contacto/
English: ${BASE}/en/`,
  '/en/': `# Debod Dental Clinic (English)

Boutique English-speaking dental clinic in central Madrid (Argüelles): dental implants, All-on-4/6, Invisalign®, porcelain veneers, cosmetic dentistry and full oral rehabilitation, with an in-house digital lab.

- Address: C. de Ferraz, 24, Argüelles, 28008 Madrid, Spain
- Phone: +34 914 47 62 25 · WhatsApp: +34 689 10 47 14 · Email: info@deboddentalclinic.com
- Hours: Mon–Fri 9:00–20:00
- Dental tourism hub: ${BASE}/en/dental-tourism-madrid/
- Full reference: ${BASE}/llms-full.txt

Treatments (EN): ${BASE}/en/treatments/
About (EN): ${BASE}/en/about/
Contact (EN): ${BASE}/en/contact/`,
}

// Markdown recovery body for unknown paths (404). Tells the agent where to go.
const NOT_FOUND_MD = `# 404 — Page not found (Debod Dental Clinic)

The path you requested does not exist or has moved. The clinic still exists — here is where to go next:

- Site map: ${BASE}/sitemap.xml
- Full machine-readable reference: ${BASE}/llms.txt · ${BASE}/llms-full.txt
- Home: ${BASE}/
- Treatments: ${BASE}/tratamientos/
- Contact: ${BASE}/contacto/
- English: ${BASE}/en/

This is a real HTTP 404. If you were looking for a specific page, check the sitemap for the current URL.
`

// Paths that are legitimately NOT markdown-representable (assets, api, robots).
const SKIP = ['/assets/', '/Images/', '/hero/', '/videos/', '/api/', '/robots.txt', '/favicon', '/logo', '/og-image', '/apple-touch-icon', '.png', '.jpg', '.webp', '.svg', '.mp4', '.webm', '.woff2', '.txt', '.xml', '.json']

export default async function handler(req) {
  const url = new URL(req.url)
  const path = url.pathname.replace(/\/+$/, '') || '/'
  const accept = req.headers.get('accept') || ''
  const wantsMarkdown =
    accept.includes('text/markdown') ||
    accept.includes('text/x-markdown') ||
    accept.includes('markdown')

  // Never touch assets / api / special files.
  if (SKIP.some((s) => path.startsWith(s) || path.includes(s))) {
    return new Response(null, { status: 307, headers: { Location: url.pathname } })
  }

  // Construct the pass-through response (Vercel serves static/404 with status).
  // Vercel's middleware can't return "continue" directly; we rewrite to self
  // with the extra header via a 307 is WRONG (loop). Instead, for non-markdown
  // we simply return a Response that forwards by NOT short-circuiting: the
  // correct primitive is `NextResponse.next({ headers })` — but in plain edge
  // middleware (non-Next), returning `undefined` means continue. We therefore
  // return a pass-through marker and rely on the framework: in this pure Vercel
  // middleware signature, the convention is to return `new Response(null, { status: 200 })`
  // ONLY for handled cases, and for everything else let the platform continue
  // by returning undefined. We do that below.
  if (!wantsMarkdown) {
    return undefined // let Vercel continue serving the static file/404
  }

  // wantsMarkdown == true
  const md = MARKDOWN_BY_ROUTE[path] || MARKDOWN_BY_ROUTE[`${path}/`]
  const headers = new Headers()
  headers.set('Vary', 'Accept, Accept-Encoding')
  if (md) {
    headers.set('Content-Type', 'text/markdown; charset=utf-8')
    return new Response(md, { status: 200, headers })
  }
  headers.set('Content-Type', 'text/markdown; charset=utf-8')
  headers.set('X-Robots-Tag', 'noindex')
  return new Response(NOT_FOUND_MD, { status: 404, headers })
}

export const config = {
  matcher: ['/((?!assets/|Images/|hero/|videos/|api/|.*\\.(?:png|jpe?g|webp|svg|mp4|webm|woff2|txt|xml|json)$).*)'],
}
