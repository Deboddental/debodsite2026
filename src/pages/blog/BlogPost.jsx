import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import CtaBand from '../../components/ui/CtaBand'
import JsonLd from '../../components/ui/JsonLd'
import { blogPostSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function BlogPost() {
  const { category, postSlug } = useParams()
  const post = blogPosts.find((p) => p.slug === postSlug && p.category === category)

  if (!post) return <Navigate to="/blog/" replace />

  const canonical = `${BASE_URL}/blog/${post.category}/${post.slug}/`

  const related = post.relatedPosts?.length
    ? blogPosts.filter((p) => post.relatedPosts.includes(p.slug)).slice(0, 2)
    : blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        {post.heroImageUrl && (
          <meta property="og:image" content={post.heroImageUrl} />
        )}
        <meta property="article:published_time" content={post.publishDate} />
      </Helmet>

      <JsonLd schema={blogPostSchema(post)} />

      <PageHero
        subtitle={post.categoryLabel || post.category}
        title={post.title}
        imageUrl={post.heroImageUrl}
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Blog', href: '/blog/' },
            { label: post.categoryLabel || post.category, href: '/blog/' },
            { label: post.title, href: null },
          ]}
        />
      </div>

      {/* Author / date row */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 border-b border-slate-100 pb-6">
          <span className="flex items-center gap-1.5">
            <User size={15} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={15} />
            {new Date(post.publishDate).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{post.bodyMarkdown}</MarkdownBody>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-8">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.category}/${p.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  {p.heroImageUrl && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={p.heroImageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-outfit font-semibold text-charcoal text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                      {p.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      Leer <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        headline="¿Este artículo te generó preguntas?"
        subtext="Habla directamente con nuestro equipo de especialistas. Primera consulta sin compromiso."
      />
    </>
  )
}
