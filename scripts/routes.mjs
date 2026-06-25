// ── Single source of truth for all prerenderable / sitemap routes ──────────
// Imported by BOTH prerender.mjs and vite.config.js (sitemap) so the route list
// can never drift. Data files are pure ESM data (no asset imports) → Node-safe.
//
// All routes use a trailing slash to match react-router paths in src/router.jsx
// and the self-referencing canonicals in src/data/seo.js.

import { services } from '../src/data/services.js'
import { treatments } from '../src/data/treatments.js'
import { blogPosts } from '../src/data/blog.js'
import { teamMembers } from '../src/data/team.js'

// Static, hand-maintained routes.
export const staticRoutes = [
  '/',
  '/nosotros/',
  '/dental-lab/',
  '/financiacion/',
  '/politica-de-privacidad/',
  '/contacto/',
  '/resenas/',
  '/ubicaciones/',
  '/ubicaciones/citas-arguelles-madrid/',
  '/servicios/',
  '/blog/',
  '/equipo/',
]

// Dynamic routes derived from the data layer.
export function getDynamicRoutes() {
  const serviceRoutes = services.map((s) => `/${s.slug}/`) // root-level slug (matches canonical)
  const treatmentRoutes = treatments.map((t) => `/tratamientos/${t.slug}/`)
  const blogRoutes = blogPosts.map((p) => `/blog/${p.category}/${p.slug}/`)
  const teamRoutes = teamMembers.map((m) => `/equipo/${m.slug}/`)
  return [...serviceRoutes, ...treatmentRoutes, ...blogRoutes, ...teamRoutes]
}

// Full route list (static + dynamic), de-duplicated.
export function getAllRoutes() {
  return [...new Set([...staticRoutes, ...getDynamicRoutes()])]
}
