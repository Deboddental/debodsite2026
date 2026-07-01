import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, ShieldCheck } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { blogPostSchema, postAuthor } from '../../data/seo'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray, resolveBlogPost } from '../../utils/tf'
import { t } from '../../i18n/ui'
import { blogSlugEn } from '../../i18n/slugs'

export default function BlogPost() {
  const { postSlug } = useParams()
  const locale = useLocale()
  const post = resolveBlogPost(blogPosts, postSlug, locale)

  if (!post) return <Navigate to={locale === 'en' ? '/en/blog/' : '/blog/'} replace />

  const author = postAuthor(post)
  const metaTitle = tf(post, 'metaTitle', locale)
  const metaDescription = tf(post, 'metaDescription', locale)
  const categoryLabel = tf(post, 'categoryLabel', locale) || post.category

  const blogHref = (p) => locale === 'en'
    ? `/en/blog/${blogSlugEn[p.slug]?.en_cat || p.category}/${blogSlugEn[p.slug]?.en || p.slug}/`
    : `/blog/${p.category}/${p.slug}/`
  const teamHref = (slug) => locale === 'en' ? `/en/team/${slug}/` : `/equipo/${slug}/`

  const related = post.relatedPosts?.length
    ? blogPosts.filter((p) => post.relatedPosts.includes(p.slug)).slice(0, 2)
    : blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        {post.heroImageUrl && <meta property="og:image" content={post.heroImageUrl} />}
        <meta property="article:published_time" content={post.publishDate} />
      </Helmet>

      <JsonLd schema={blogPostSchema(post, locale)} />

      <PageHero
        subtitle={categoryLabel}
        title={tf(post, 'title', locale)}
        imageUrl={post.heroImageUrl}
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
            { label: t('crumb.blog', locale), href: locale === 'en' ? '/en/blog/' : '/blog/' },
            { label: categoryLabel, href: locale === 'en' ? '/en/blog/' : '/blog/' },
            { label: tf(post, 'title', locale), href: null },
          ]}
        />
      </div>

      {/* Author / date row */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 border-b border-slate-100 pb-6">
          <Link to={teamHref(author.slug)} className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <User size={15} />
            {author.name}
          </Link>
          <span className="flex items-center gap-1.5">
            <Calendar size={15} />
            {new Date(post.publishDate).toLocaleDateString(locale === 'en' ? 'en-GB' : 'es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{tf(post, 'bodyMarkdown', locale)}</MarkdownBody>
      </div>

      {/* FAQ del post (emite FAQPage schema) */}
      {tfArray(post, 'faqs', locale).length > 0 && (
        <FAQ faqs={tfArray(post, 'faqs', locale)} eyebrow={t('faq.eyebrow', locale)} subtitle={t('blog.faqSubtitle', locale)} />
      )}

      {/* E-E-A-T: revisión médica por profesional colegiado */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-12">
        <div className="flex items-start gap-4 bg-pearl border border-charcoal/5 rounded-3xl p-6">
          <ShieldCheck size={28} className="text-gold shrink-0 mt-1" />
          <div>
            <p className="font-outfit font-semibold text-charcoal">{t('blog.reviewedBy', locale)} {author.name}</p>
            <p className="font-jakarta text-slate text-sm mt-0.5">
              {author.title}
              {author.colegiadoNum ? ` · ${t('blog.colegiado', locale)} ${author.colegiadoNum}` : ''}
            </p>
            <p className="font-jakarta text-slate/70 text-xs mt-1">
              {t('blog.reviewedOn', locale)}:{' '}
              {new Date(post.dateModified || post.publishDate).toLocaleDateString(locale === 'en' ? 'en-GB' : 'es-ES', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </p>
            <p className="font-jakarta text-slate/80 text-sm mt-2 leading-relaxed">
              {t('blog.eeatNote', locale)}{' '}
              <Link to={teamHref(author.slug)} className="text-gold hover:underline">{t('blog.viewProfile', locale)}</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-pearl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-8">
              {t('blog.related', locale)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={blogHref(p)}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  {p.heroImageUrl && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={p.heroImageUrl}
                        alt={tf(p, 'title', locale)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-outfit font-semibold text-charcoal text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                      {tf(p, 'title', locale)}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      {t('blog.read', locale)} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        headline={t('blog.ctaHeadline', locale)}
        subtext={t('blog.ctaSubtext', locale)}
        ctaLabel={t('cta.defaultLabel', locale)}
        ctaTo={locale === 'en' ? '/en/contact/' : '/contacto/'}
      />
    </>
  )
}
