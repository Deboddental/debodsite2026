import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import JsonLd from '../../components/ui/JsonLd'
import CtaBand from '../../components/ui/CtaBand'
import { blogIndexSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

const CATEGORIES = [
  { value: 'all', label: 'Todos' },
  { value: 'salud-dental', label: 'Salud Dental' },
  { value: 'ortodoncia', label: 'Ortodoncia' },
  { value: 'implantes', label: 'Implantes' },
  { value: 'estetica-dental', label: 'Estética Dental' },
]

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Blog Dental — Consejos de Salud Dental en Argüelles, Madrid | Debod Dental</title>
        <meta
          name="description"
          content="Artículos y consejos de salud dental escritos por el equipo especialista de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes, estética dental y más."
        />
        <link rel="canonical" href={`${BASE_URL}/blog/`} />
        <meta property="og:title" content="Blog Dental — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/blog/`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <JsonLd schema={blogIndexSchema(blogPosts)} />

      <PageHero
        subtitle="Blog"
        title="Consejos de Salud Dental"
        description="Artículos escritos por nuestro equipo de especialistas para que cuides tu sonrisa con conocimiento y confianza."
        imageUrl="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Blog', href: null },
          ]}
        />
      </div>

      {/* Category filter */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
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
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-20">No hay artículos en esta categoría aún.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.category}/${post.slug}/`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                {post.heroImageUrl && (
                  <div className="overflow-hidden h-52">
                    <img
                      src={post.heroImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block mb-3 px-3 py-1 bg-gold/10 text-gold text-xs font-outfit font-semibold rounded-full uppercase tracking-wide">
                    {post.categoryLabel || post.category}
                  </span>
                  <h2 className="font-outfit font-semibold text-charcoal text-lg leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={13} />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      Leer <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CtaBand
        headline="¿Tu salud dental al día?"
        subtext="Agenda una revisión con nuestro equipo de especialistas en Argüelles, Madrid."
        variant="dark"
      />
    </>
  )
}
