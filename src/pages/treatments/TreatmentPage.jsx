import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import { treatments } from '../../data/treatments'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import RelatedGrid from '../../components/ui/RelatedGrid'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { treatmentPageSchema } from '../../data/seo'
import { treatmentFaqs } from '../../data/faqs'
import { services } from '../../data/services'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray, resolveTreatment } from '../../utils/tf'
import { t } from '../../i18n/ui'
import { serviceSlugEn } from '../../i18n/slugs'

export default function TreatmentPage() {
  const { treatmentSlug } = useParams()
  const locale = useLocale()
  const treatment = resolveTreatment(treatments, treatmentSlug, locale)

  if (!treatment) return <Navigate to={locale === 'en' ? '/en/services/' : '/servicios/'} replace />

  const metaTitle = tf(treatment, 'metaTitle', locale)
  const metaDescription = tf(treatment, 'metaDescription', locale)
  const faqs = (locale === 'en' && treatmentFaqs[`${treatment.slug}_en`]) || treatmentFaqs[treatment.slug]
  const benefits = tfArray(treatment, 'benefits', locale)

  const parentService = services.find((s) => s.slug === treatment.specialty)
  const parentHref = parentService
    ? (locale === 'en'
        ? `/en/${serviceSlugEn[parentService.slug] || 'services'}/`
        : `/${parentService.slug}/`)
    : (locale === 'en' ? '/en/services/' : '/servicios/')

  const faqSubtitle = locale === 'en'
    ? `Frequently asked questions about ${(tf(treatment, 'title', locale) || '').toLowerCase()}.`
    : `Dudas habituales sobre ${(treatment.title || '').toLowerCase()}.`

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        {treatment.heroImageUrl && <meta property="og:image" content={treatment.heroImageUrl} />}
      </Helmet>

      <JsonLd schema={treatmentPageSchema(treatment, locale)} />

      <PageHero
        subtitle={tf(treatment, 'subtitle', locale) || t('treatment.eyebrow', locale)}
        title={tf(treatment, 'title', locale)}
        description={tf(treatment, 'heroText', locale)}
        imageUrl={treatment.heroImageUrl}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
            { label: t('crumb.services', locale), href: locale === 'en' ? '/en/services/' : '/servicios/' },
            parentService
              ? { label: tf(parentService, 'title', locale), href: parentHref }
              : { label: tf(treatment, 'subtitle', locale) || t('crumb.services', locale), href: locale === 'en' ? '/en/services/' : '/servicios/' },
            { label: tf(treatment, 'title', locale), href: null },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <MarkdownBody>{tf(treatment, 'bodyMarkdown', locale)}</MarkdownBody>
      </div>

      {benefits.length > 0 && (
        <section className="py-16 px-4 bg-charcoal">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-pearl mb-10 text-center">
              {t('treatment.benefitsTitle', locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-colors duration-300"
                >
                  <CheckCircle size={28} className="text-gold mb-4" />
                  <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">{b.title}</h3>
                  <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tfArray(treatment, 'relatedTreatments', locale).length > 0 && (
        <RelatedGrid items={tfArray(treatment, 'relatedTreatments', locale)} />
      )}

      {faqs?.length > 0 && (
        <FAQ faqs={faqs} eyebrow={t('faq.eyebrow', locale)} subtitle={faqSubtitle} />
      )}

      <CtaBand
        headline={t('treatment.ctaHeadline', locale)}
        subtext={t('treatment.ctaSubtext', locale)}
        ctaLabel={t('cta.defaultLabel', locale)}
        ctaTo={locale === 'en' ? '/en/contact/' : '/contacto/'}
      />
    </>
  )
}
