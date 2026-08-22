import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Search, X } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import JsonLd from '../../components/ui/JsonLd'
import CtaBand from '../../components/ui/CtaBand'
import { blogIndexSchema } from '../../data/seo'
import { useLocale } from '../../hooks/useLocale'
import { tf } from '../../utils/tf'
import { enPathFor } from '../../i18n/slugs'

const CATEGORIES = [
  { value: 'all', label: 'Todos', labelEn: 'All' },
  { value: 'salud-dental', label: 'Salud Dental', labelEn: 'Dental Health' },
  { value: 'ortodoncia', label: 'Ortodoncia', labelEn: 'Orthodontics' },
  { value: 'implantes', label: 'Implantes', labelEn: 'Dental Implants' },
  { value: 'estetica-dental', label: 'Estética Dental', labelEn: 'Dental Aesthetics' },
]

// Normaliza texto: quita tildes, ñ→n, minúsculas
function normalize(str = '') {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function matches(post, query) {
  const q = normalize(query)
  if (!q) return true
  // Search both languages so EN and ES terms both match.
  const fields = [
    post.title, post.excerpt, post.categoryLabel || post.category,
    post.title_en, post.excerpt_en, post.categoryLabel_en,
  ]
  return fields.some((f) => f && normalize(f).includes(q))
}

// Resalta la parte que coincide en el texto de la sugerencia
function Highlight({ text, query }) {
  if (!query) return <>{text}</>
  const nText = normalize(text)
  const nQuery = normalize(query)
  const idx = nText.indexOf(nQuery)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-gold/25 text-charcoal rounded px-0.5 not-italic">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function BlogIndex() {
  const locale = useLocale()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  // Cierra el dropdown al hacer click fuera
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleChange = useCallback((e) => {
    setQuery(e.target.value)
    setOpen(e.target.value.length >= 1)
  }, [])

  const handleClear = useCallback(() => {
    setQuery('')
    setOpen(false)
    inputRef.current?.focus()
  }, [])

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') { setQuery(''); setOpen(false) }
  }, [])

  // Sugerencias: hasta 6, filtra por query (sin importar categoría activa)
  const suggestions = query.length >= 1
    ? blogPosts.filter((p) => matches(p, query)).slice(0, 6)
    : []

  // Grid principal: filtra por categoría Y query
  const filtered = blogPosts.filter(
    (p) =>
      (activeCategory === 'all' || p.category === activeCategory) &&
      matches(p, query)
  )

  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Dental Blog — Dental Health Advice in Argüelles, Madrid | Debod Dental' : 'Blog Dental — Consejos de Salud Dental en Argüelles, Madrid | Debod Dental'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Articles and dental health advice written by the specialist team at Debod Dental Clinic in Argüelles, Madrid. Orthodontics, dental implants, dental aesthetics and more.' : 'Artículos y consejos de salud dental escritos por el equipo especialista de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes, estética dental y más.'}
        />
        <meta property="og:title" content="Blog Dental — Debod Dental Clinic" />
        <meta property="og:description" content={locale === 'en' ? 'Articles and dental health advice written by the specialist team at Debod Dental Clinic in Argüelles, Madrid. Orthodontics, dental implants, dental aesthetics and more.' : 'Artículos y consejos de salud dental escritos por el equipo especialista de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes dentales, estética dental y más.'} />
        <meta property="og:type" content="website" />
      </Helmet>

      <JsonLd schema={blogIndexSchema(blogPosts)} />

      <PageHero
        subtitle="Blog"
        title={locale === 'en' ? 'Dental Health Advice' : 'Consejos de Salud Dental'}
        description={locale === 'en' ? 'Articles written by our team of specialists to help you care for your smile with knowledge and confidence.' : 'Artículos escritos por nuestro equipo de especialistas para que cuides tu sonrisa con conocimiento y confianza.'}
        imageUrl="/Images/clinica/dsc00259.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: 'Blog', href: null },
          ]}
        />
      </div>

      {/* Search + Filters */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-4">

        {/* Search bar */}
        <div ref={wrapperRef} className="relative">
          <div className="relative flex items-center">
            <Search size={17} className="absolute left-4 text-slate-400 pointer-events-none" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={handleChange}
              onFocus={() => query.length >= 1 && setOpen(true)}
              onKeyDown={handleKey}
              placeholder={locale === 'en' ? 'Search articles…' : 'Buscar artículo…'}
              autoComplete="off"
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-200 bg-white font-jakarta text-sm text-charcoal placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
            />
            {query && (
              <button
                onClick={handleClear}
                aria-label={locale === 'en' ? 'Clear search' : 'Limpiar búsqueda'}
                className="absolute right-3 p-1 text-slate-400 hover:text-charcoal transition-colors"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Suggestions dropdown */}
          {open && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-black/8 z-50 overflow-hidden">
              {suggestions.map((post, i) => (
                <button
                  key={post.slug}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    setQuery('')
                    navigate(locale === 'en' ? enPathFor(`/blog/${post.category}/${post.slug}/`) : `/blog/${post.category}/${post.slug}/`)
                  }}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gold/6 transition-colors duration-150 ${i > 0 ? 'border-t border-slate-100' : ''}`}
                >
                  <Search size={13} className="text-slate-300 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-outfit text-sm font-medium text-charcoal truncate">
                      <Highlight text={tf(post, 'title', locale)} query={query} />
                    </p>
                    <p className="font-jakarta text-xs text-slate-400 mt-0.5">
                      {tf(post, 'categoryLabel', locale) || post.category}
                    </p>
                  </div>
                  <ArrowRight size={13} className="text-gold shrink-0 ml-auto" />
                </button>
              ))}
              {suggestions.length === 6 && (
                <div className="px-4 py-2 border-t border-slate-100 text-center">
                  <span className="font-jakarta text-xs text-slate-400">{locale === 'en' ? 'Refine your search to see more results' : 'Refina tu búsqueda para ver más resultados'}</span>
                </div>
              )}
            </div>
          )}

          {/* No results hint */}
          {open && query.length >= 1 && suggestions.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-black/8 z-50 px-4 py-5 text-center">
              <p className="font-jakarta text-sm text-slate-500">{locale === 'en' ? 'No results for' : 'Sin resultados para'} <strong className="text-charcoal">"{query}"</strong></p>
              <p className="font-jakarta text-xs text-slate-400 mt-1">{locale === 'en' ? 'Try another keyword' : 'Intenta con otra palabra clave'}</p>
            </div>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-outfit font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-gold text-charcoal'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-gold hover:text-gold'
              }`}
            >
              {locale === 'en' ? cat.labelEn : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count when searching */}
      {query && (
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-2">
          <p className="font-jakarta text-sm text-slate-500">
            {locale === 'en'
              ? (filtered.length === 0
                  ? 'No results'
                  : `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found`)
              : (filtered.length === 0
                  ? 'Sin resultados'
                  : `${filtered.length} artículo${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`)}
            {' '}{locale === 'en' ? 'for' : 'para'} <strong className="text-charcoal">"{query}"</strong>
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-outfit text-lg text-slate-400 mb-2">{locale === 'en' ? 'No articles found' : 'No encontramos artículos'}</p>
            <button onClick={handleClear} className="font-jakarta text-sm text-gold hover:underline">
              {locale === 'en' ? 'View all articles →' : 'Ver todos los artículos →'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={locale === 'en' ? enPathFor(`/blog/${post.category}/${post.slug}/`) : `/blog/${post.category}/${post.slug}/`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                {post.heroImageUrl && (
                  <div className="overflow-hidden h-52">
                    <img
                      src={post.heroImageUrl}
                      alt={tf(post, 'title', locale)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block mb-3 px-3 py-1 bg-gold/10 text-gold text-xs font-outfit font-semibold rounded-full uppercase tracking-wide">
                    {tf(post, 'categoryLabel', locale) || post.category}
                  </span>
                  <h2 className="font-outfit font-semibold text-charcoal text-lg leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                    {tf(post, 'title', locale)}
                  </h2>
                  <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {tf(post, 'excerpt', locale)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={13} />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString(locale === 'en' ? 'en-GB' : 'es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      {locale === 'en' ? 'Read' : 'Leer'} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CtaBand
        headline={locale === 'en' ? 'Is your dental health up to date?' : '¿Tu salud dental al día?'}
        subtext={locale === 'en' ? 'Book a check-up with our team of specialists in Argüelles, Madrid.' : 'Agenda una revisión con nuestro equipo de especialistas en Argüelles, Madrid.'}
        variant="dark"
      />
    </>
  )
}
