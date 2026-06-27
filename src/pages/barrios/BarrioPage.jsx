import { useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin } from 'lucide-react'
import { barrios } from '../../data/barrios'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { barrioPageSchema } from '../../data/seo'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray, resolveBarrio } from '../../utils/tf'
import { t } from '../../i18n/ui'

export default function BarrioPage() {
  const { pathname } = useLocation()
  const locale = useLocale()
  const rawSlug = pathname.replace(/^\/(en\/)?/, '').replace(/\/$/, '')
  const barrio = resolveBarrio(barrios, rawSlug, locale)

  if (!barrio) return <Navigate to={locale === 'en' ? '/en/locations/' : '/ubicaciones/'} replace />

  const metaTitle = tf(barrio, 'metaTitle', locale)
  const metaDescription = tf(barrio, 'metaDescription', locale)
  const distancia = tf(barrio, 'distancia', locale)
  const faqs = tfArray(barrio, 'faqs', locale)
  const faqSubtitle = locale === 'en'
    ? `Common questions from our patients in ${barrio.barrio}.`
    : `Dudas habituales de los pacientes de ${barrio.barrio}.`

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://deboddentalclinic.com/og-image.jpg" />
      </Helmet>

      <JsonLd schema={barrioPageSchema(barrio, locale)} />

      <PageHero
        subtitle={t('barrio.eyebrow', locale)}
        title={tf(barrio, 'title', locale)}
        description={tf(barrio, 'heroText', locale)}
        imageUrl="/Images/clinica/dsc00131.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
            { label: t('crumb.locations', locale), href: locale === 'en' ? '/en/locations/' : '/ubicaciones/' },
            { label: barrio.barrio, href: null },
          ]}
        />
      </div>

      {distancia && (
        <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8">
          <div className="inline-flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-2xl px-5 py-3">
            <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
            <p className="font-jakarta text-charcoal/80 text-sm">{distancia}</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{tf(barrio, 'intro', locale)}</MarkdownBody>
      </div>

      {faqs.length > 0 && (
        <FAQ faqs={faqs} eyebrow={t('faq.eyebrow', locale)} subtitle={faqSubtitle} />
      )}

      <CtaBand
        headline={locale === 'en' ? `Looking for a dentist in ${barrio.barrio}?` : `¿Buscas dentista en ${barrio.barrio}?`}
        subtext={locale === 'en'
          ? 'Book your first diagnostic visit at Debod Dental Clinic, a step away from your neighbourhood.'
          : 'Reserva tu primera visita diagnóstica en Debod Dental Clinic, a un paso de tu barrio.'}
        ctaLabel={t('cta.defaultLabel', locale)}
        ctaTo={locale === 'en' ? '/en/contact/' : '/contacto/'}
      />
    </>
  )
}
