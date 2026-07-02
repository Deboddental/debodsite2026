import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight, ShieldCheck } from 'lucide-react'
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

// Reading time from the body word count (~200 wpm), min 2 min.
const readMin = (body) => Math.max(2, Math.round((body || '').split(/\s+/).filter(Boolean).length / 200))

// Short plain-text bio for the author card (strip markdown syntax).
const shortBio = (md) => {
  const s = (md || '').replace(/[#*_`>]/g, '').replace(/\s+/g, ' ').trim()
  return s.length > 240 ? `${s.slice(0, 240).trim()}…` : s
}

export default function BlogPost() {
  const { postSlug } = useParams()
  const locale = useLocale()
  const post = resolveBlogPost(blogPosts, postSlug, locale)

  if (!post) return <Navigate to={locale === 'en' ? '/en/blog/' : '/blog/'} replace />

  const author = postAuthor(post)
  const metaTitle = tf(post, 'metaTitle', locale)
  const metaDescription = tf(post, 'metaDescription', locale)
  const categoryLabel = tf(post, 'categoryLabel', locale) || post.category
  const excerpt = tf(post, 'excerpt', locale) || metaDescription
  const minutes = readMin(tf(post, 'bodyMarkdown', locale))
  const fmtDate = (d, opts = { day: 'numeric', month: 'long', year: 'numeric' }) =>
    new Date(d).toLocaleDateString(locale === 'en' ? 'en-GB' : 'es-ES', opts)

  const blogHref = (p) => locale === 'en'
    ? `/en/blog/${blogSlugEn[p.slug]?.en_cat || p.category}/${blogSlugEn[p.slug]?.en || p.slug}/`
    : `/blog/${p.category}/${p.slug}/`
  const teamHref = (slug) => locale === 'en' ? `/en/team/${slug}/` : `/equipo/${slug}/`

  // relatedPosts may be slugs or {slug} objects; normalise to slugs.
  const relatedSlugs = (post.relatedPosts || [])
    .map((r) => (typeof r === 'string' ? r : r?.slug))
    .filter(Boolean)
  const related = (relatedSlugs.length
    ? relatedSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean)
    : blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug)
  ).filter((p) => p.slug !== post.slug).slice(0, 3)

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
        <meta property="article:modified_time" content={post.dateModified || post.publishDate} />
      </Helmet>

      <JsonLd schema={blogPostSchema(post, locale)} />

      {/* Hero — category eyebrow, title, excerpt */}
      <PageHero
        subtitle={categoryLabel}
        title={tf(post, 'title', locale)}
        description={excerpt}
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

      {/* Author + date + reading time row */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500 border-b border-slate-100 pb-6">
          <Link to={teamHref(author.slug)} className="flex items-center gap-2 hover:text-gold transition-colors">
            <img
              src={author.photoUrl}
              alt={author.name}
              className="w-7 h-7 rounded-full object-cover object-top bg-slate-100"
              width="28"
              height="28"
              loading="lazy"
            />
            <span className="font-medium text-charcoal">{author.name}</span>
          </Link>
          <span className="flex items-center gap-1.5">
            <Calendar size={15} /> {fmtDate(post.publishDate)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} /> {minutes} {t('blog.readTime', locale)}
          </span>
        </div>
      </div>

      {/* Featured image */}
      {post.heroImageUrl && (
        <div className="max-w-3xl mx-auto px-4 md:px-8 pt-2 pb-2">
          <div className="rounded-3xl overflow-hidden border border-slate-100 aspect-[2/1]">
            <img
              src={post.heroImageUrl}
              alt={tf(post, 'title', locale)}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{tf(post, 'bodyMarkdown', locale)}</MarkdownBody>
      </div>

      {/* FAQ del post (emite FAQPage schema) */}
      {tfArray(post, 'faqs', locale).length > 0 && (
        <FAQ faqs={tfArray(post, 'faqs', locale)} eyebrow={t('faq.eyebrow', locale)} subtitle={t('blog.faqSubtitle', locale)} />
      )}

      {/* E-E-A-T: revisión médica por profesional colegiado */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-6">
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
              {fmtDate(post.dateModified || post.publishDate)}
            </p>
            <p className="font-jakarta text-slate/80 text-sm mt-2 leading-relaxed">
              {t('blog.eeatNote', locale)}{' '}
              <Link to={teamHref(author.slug)} className="text-gold hover:underline">{t('blog.viewProfile', locale)}</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Author card */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 pb-12">
        <div className="bg-charcoal rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={author.photoUrl}
            alt={author.name}
            className="w-20 h-20 rounded-2xl object-cover object-top bg-white/10 shrink-0"
            width="80"
            height="80"
            loading="lazy"
          />
          <div>
            <p className="font-jakarta text-gold text-xs uppercase tracking-[0.2em] mb-1">{t('blog.author', locale)}</p>
            <h3 className="font-cormorant text-2xl text-pearl mb-1">{author.name}</h3>
            <p className="font-jakarta text-pearl/50 text-sm mb-3">{tf(author, 'title', locale)}</p>
            <p className="font-jakarta text-pearl/70 text-sm leading-relaxed mb-4">{shortBio(tf(author, 'bioMarkdown', locale))}</p>
            <Link to={teamHref(author.slug)} className="inline-flex items-center gap-1 text-gold text-sm font-medium hover:gap-2 transition-all duration-200">
              {t('blog.meetTeam', locale)} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-pearl">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-8">
              {t('blog.related', locale)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <span className="font-jakarta text-gold text-[10px] uppercase tracking-wider mb-2 block">
                      {tf(p, 'categoryLabel', locale) || p.category}
                    </span>
                    <h3 className="font-outfit font-semibold text-charcoal text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                      {tf(p, 'title', locale)}
                    </h3>
                    <p className="font-jakarta text-slate-400 text-xs">
                      {readMin(tf(p, 'bodyMarkdown', locale))} {t('blog.readTime', locale)} · {fmtDate(p.publishDate, { month: 'short', year: 'numeric' })}
                    </p>
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
