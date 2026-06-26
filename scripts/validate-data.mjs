// Build-time integrity check. Fails (exit 1) on broken internal links or
// duplicate slugs so SEO/link rot becomes a build failure, not a silent bug.
import { getAllRoutes } from './routes.mjs'
import { services } from '../src/data/services.js'
import { treatments } from '../src/data/treatments.js'
import { blogPosts } from '../src/data/blog.js'
import { teamMembers } from '../src/data/team.js'

const routes = new Set(getAllRoutes())

// A string is an internal ROUTE link (not an asset) if it starts with "/",
// is not under an asset dir, and has no file extension in its last segment.
const ASSET_PREFIXES = ['/Images', '/images', '/videos', '/hero', '/assets', '/icons', '/og', '/favicon']
function isRouteLink(s) {
  if (typeof s !== 'string' || !s.startsWith('/')) return false
  if (s.startsWith('//')) return false
  if (ASSET_PREFIXES.some((p) => s.startsWith(p))) return false
  const lastSeg = s.split('?')[0].split('#')[0].replace(/\/$/, '').split('/').pop() || ''
  if (lastSeg.includes('.')) return false // has a file extension → asset
  return true
}

function collectLinks(node, path, out) {
  if (typeof node === 'string') {
    if (isRouteLink(node)) out.push({ href: node, where: path })
  } else if (Array.isArray(node)) {
    node.forEach((v, i) => collectLinks(v, `${path}[${i}]`, out))
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) collectLinks(v, `${path}.${k}`, out)
  }
}

const datasets = { services, treatments, blogPosts, teamMembers }
const links = []
for (const [name, data] of Object.entries(datasets)) collectLinks(data, name, links)

// Normalize: ensure trailing slash for comparison (routes all have one).
const norm = (h) => (h.endsWith('/') ? h : h + '/')
const broken = links.filter((l) => !routes.has(norm(l.href)))

// Duplicate slug check within each slugged dataset.
const dupes = []
for (const [name, arr] of [['services', services], ['treatments', treatments], ['blogPosts', blogPosts], ['teamMembers', teamMembers]]) {
  const seen = new Map()
  for (const item of arr) {
    if (!item || !item.slug) continue
    if (seen.has(item.slug)) dupes.push(`${name}: duplicate slug "${item.slug}"`)
    seen.set(item.slug, true)
  }
}

let failed = false
if (broken.length) {
  failed = true
  console.error(`\n❌ ${broken.length} broken internal link(s):`)
  for (const b of broken) console.error(`   ${b.where} → ${b.href}`)
}
if (dupes.length) {
  failed = true
  console.error(`\n❌ ${dupes.length} duplicate slug(s):`)
  for (const d of dupes) console.error(`   ${d}`)
}

if (failed) {
  console.error('\nValidator failed. Fix the data above (point links at a route from getAllRoutes()).\n')
  process.exit(1)
}
console.log(`✅ All ${links.length} internal links resolve; no duplicate slugs.`)
