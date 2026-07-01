import { useParams, useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../../data/services'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import RelatedGrid from '../../components/ui/RelatedGrid'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { servicePageSchema } from '../../data/seo'
import { serviceFaqs } from '../../data/faqs'
import { Phone } from 'lucide-react'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray, resolveService } from '../../utils/tf'
import { t } from '../../i18n/ui'

export default function ServicePage() {
  const params = useParams()
  const { pathname } = useLocation()
  const locale = useLocale()
  // ES root-level slugs and EN mirror slugs carry no param → derive from pathname.
  const rawSlug = params.specialtySlug || params.serviceSlug
    || pathname.replace(/^\/(en\/)?(servicios\/)?/, '').replace(/\/$/, '')
  const service = resolveService(services, rawSlug, locale)

  if (!service) return <Navigate to={locale === 'en' ? '/en/services/' : '/servicios/'} replace />

  const metaTitle = tf(service, 'metaTitle', locale)
  const metaDescription = tf(service, 'metaDescription', locale)
  const faqs = (locale === 'en' && serviceFaqs[`${service.slug}_en`]) || serviceFaqs[service.slug]
  const subj = (tf(service, 'subtitle', locale) || tf(service, 'title', locale) || '').toLowerCase()
  const faqSubtitle = locale === 'en'
    ? `Common questions about ${subj} in Argüelles, Madrid.`
    : `Dudas habituales sobre ${subj} en Argüelles, Madrid.`

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        {service.heroImageUrl && <meta property="og:image" content={service.heroImageUrl} />}
      </Helmet>

      <JsonLd schema={servicePageSchema(service, locale)} />

      <PageHero
        subtitle={t('service.eyebrow', locale)}
        title={tf(service, 'title', locale)}
        description={tf(service, 'heroText', locale)}
        imageUrl={service.heroImageUrl}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
            { label: t('crumb.services', locale), href: locale === 'en' ? '/en/services/' : '/servicios/' },
            { label: tf(service, 'title', locale), href: null },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <MarkdownBody>{tf(service, 'bodyMarkdown', locale)}</MarkdownBody>
      </div>

      {tfArray(service, 'relatedTreatments', locale).length > 0 && (
        <RelatedGrid
          items={tfArray(service, 'relatedTreatments', locale)}
          title={t('service.relatedTitle', locale)}
        />
      )}

      {faqs?.length > 0 && (
        <FAQ faqs={faqs} eyebrow={t('faq.eyebrow', locale)} subtitle={faqSubtitle} />
      )}

      {/* Clinic NAP — local-trust signal + a direct call CTA on every service page */}
      <section className="bg-pearl/40 px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-jakarta text-slate-600 text-sm md:text-base">
            {locale === 'en' ? 'Our clinic' : 'Nuestra clínica'} · <strong className="text-charcoal">C. de Ferraz, 24, Argüelles, 28008 Madrid</strong>
          </p>
          <a
            href="tel:+34914476225"
            className="inline-flex items-center gap-2 mt-3 font-outfit font-semibold text-gold hover:gap-3 transition-all duration-200"
          >
            <Phone size={16} /> +34 914 47 62 25
          </a>
        </div>
      </section>

      <CtaBand
        headline={t('service.ctaHeadline', locale)}
        subtext={t('service.ctaSubtext', locale)}
        ctaLabel={t('cta.defaultLabel', locale)}
        ctaTo={locale === 'en' ? '/en/contact/' : '/contacto/'}
      />
    </>
  )
}
