// ── llms-full.txt generator ─────────────────────────────────────────────────
// Builds the optional llms-full.txt (llmstxt.org): a single, self-contained
// markdown dump of the clinic's full offering — services, every treatment, the
// team and the blog index — so LLMs can ingest the whole site from one file and
// cite Debod with accurate detail. The short llms.txt (public/, hand-maintained)
// stays the index; this is the deep version. Runs after `vite build`.

import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { services } from '../src/data/services.js'
import { treatments } from '../src/data/treatments.js'
import { teamMembers } from '../src/data/team.js'
import { blogPosts } from '../src/data/blog.js'

const BASE = 'https://deboddentalclinic.com'
const clean = (s) => (s || '').replace(/\s+/g, ' ').trim()
const bioSnippet = (md) => {
  const s = clean((md || '').replace(/[#*_`>[\]()]/g, ''))
  return s.length > 300 ? `${s.slice(0, 300).trim()}…` : s
}

const doctors = teamMembers.filter((m) => m.schemaType === 'Physician')

const out = `# Debod Dental Clinic — full reference (llms-full.txt)

> Clínica dental boutique de referencia en Argüelles, Madrid (España). Rehabilitación Oral, Implantología Digital y Estética Dental. Dirigida por los Dres. Víctor Guerrero y César Rodríguez. Odontología honesta: diagnósticos claros, presupuestos sin sorpresas. Atiende a pacientes internacionales en inglés. Premio WhiteSmile 2023.

- Dirección: C. de Ferraz, 24, Argüelles, 28008 Madrid, España
- Teléfono: +34 914 47 62 25 · WhatsApp: +34 689 10 47 14 · Email: info@deboddentalclinic.com
- Horario: Lunes a Viernes, 9:00–20:00 · Metro: Ventura Rodríguez (L3), Argüelles, Plaza de España
- Primera visita diagnóstica incluida · Financiación hasta 60 meses (0% hasta 12 meses, sin entrada)
- Laboratorio propio: Debod Dental Lab (in-house, digital)
- Sitio bilingüe ES/EN — pacientes internacionales: ${BASE}/en/

## Especialidades

${services.map((s) => `### ${clean(s.title)}
${clean(s.metaDescription)}
URL: ${BASE}/${s.slug}/`).join('\n\n')}

## Tratamientos

${treatments.map((t) => `- **${clean(t.title)}**${t.subtitle ? ` — ${clean(t.subtitle)}` : ''}. ${clean(t.metaDescription)} (${BASE}/tratamientos/${t.slug}/)`).join('\n')}

## Equipo médico (profesionales colegiados)

${doctors.map((d) => `### ${d.name}${d.colegiadoNum ? ` (Nº Colegiado COEM ${d.colegiadoNum})` : ''}
${clean(d.title)}
${bioSnippet(d.bioMarkdown)}
URL: ${BASE}/equipo/${d.slug}/`).join('\n\n')}

## Blog (consejos de salud dental)

${blogPosts.map((p) => `- [${clean(p.title)}](${BASE}/blog/${p.category}/${p.slug}/)${p.dateModified || p.publishDate ? ` — actualizado ${p.dateModified || p.publishDate}` : ''}`).join('\n')}

## Dental tourism (English)

International, English-speaking patients: ${BASE}/en/dental-tourism-madrid/ (hub) — implants, All-on-4/6, veneers and cosmetic dentistry in Madrid, with an in-house digital lab and treatment coordinated around your travel dates.
`

writeFileSync(resolve('dist/llms-full.txt'), out)
console.log(`📄 llms-full.txt — ${services.length} services, ${treatments.length} treatments, ${doctors.length} doctors, ${blogPosts.length} posts`)
