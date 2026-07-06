import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Check, Star, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { treatments } from '../../data/treatments'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import RelatedGrid from '../../components/ui/RelatedGrid'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import LeadForm from '../../components/LeadForm'
import VideoTestimonialGrid from '../../components/VideoTestimonialGrid'
import { videosForCategory, videoCatForSpecialty } from '../../data/videoTestimonials'
import { treatmentPageSchema } from '../../data/seo'
import { treatmentFaqs } from '../../data/faqs'
import { services } from '../../data/services'
import { ratingSummary, reviews } from '../../data/reviews'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray, resolveTreatment } from '../../utils/tf'
import { t } from '../../i18n/ui'
import { serviceSlugEn } from '../../i18n/slugs'

// Bilingual CRO copy shared by every treatment page (no per-treatment data needed,
// no invented prices — honest transparency + real financing).
const CT = {
  es: {
    book: 'Agendar mi cita', call: 'Llamar 914 47 62 25',
    included: 'Primera visita diagnóstica incluida', reviews: 'reseñas en Google', award: 'Premio WhiteSmile 2023',
    priceEyebrow: 'Precio', priceTitle: 'Presupuesto cerrado, sin sorpresas',
    priceLead: 'No inventamos cifras que luego cambien. En tu primera visita diagnóstica (incluida) valoramos tu caso y te damos un presupuesto cerrado y claro, con financiación hasta 60 meses.',
    financing: 'Financiación hasta 60 meses', zero: '0 % los primeros 12 meses',
    testTitle: 'Lo que dicen nuestros pacientes',
    procTitle: 'Cómo será tu tratamiento, paso a paso',
    process: [
      { title: 'Valoración y diagnóstico', text: 'Estudiamos tu caso con tecnología digital (TAC 3D / escáner).' },
      { title: 'Plan y presupuesto cerrado', text: 'Sabes qué necesitas y cuánto cuesta, sin sorpresas.' },
      { title: 'Tu tratamiento', text: 'Realizado por especialistas colegiados, con laboratorio propio.' },
      { title: 'Revisiones de seguimiento', text: 'Cuidamos el resultado a largo plazo.' },
    ],
  },
  en: {
    book: 'Book my appointment', call: 'Call +34 914 47 62 25',
    included: 'First diagnostic visit included', reviews: 'Google reviews', award: 'WhiteSmile 2023 Award',
    priceEyebrow: 'Price', priceTitle: 'A closed quote, no surprises',
    priceLead: 'We do not invent figures that later change. At your first diagnostic visit (included) we assess your case and give you a clear, closed quote, with financing up to 60 months.',
    financing: 'Financing up to 60 months', zero: '0 % for the first 12 months',
    testTitle: 'What our patients say',
    procTitle: 'How your treatment works, step by step',
    process: [
      { title: 'Assessment & diagnosis', text: 'We study your case with digital technology (3D CT / scanner).' },
      { title: 'Plan & closed quote', text: 'You know what you need and what it costs — no surprises.' },
      { title: 'Your treatment', text: 'Carried out by registered specialists, with an in-house lab.' },
      { title: 'Follow-up reviews', text: 'We look after the result for the long term.' },
    ],
  },
}

const scrollToForm = () => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth', block: 'center' })

export default function TreatmentPage() {
  const { treatmentSlug } = useParams()
  const locale = useLocale()
  const treatment = resolveTreatment(treatments, treatmentSlug, locale)

  if (!treatment) return <Navigate to={locale === 'en' ? '/en/services/' : '/servicios/'} replace />

  const c = CT[locale === 'en' ? 'en' : 'es']
  const metaTitle = tf(treatment, 'metaTitle', locale)
  const metaDescription = tf(treatment, 'metaDescription', locale)
  const title = tf(treatment, 'title', locale)
  const subtitle = tf(treatment, 'subtitle', locale) || t('treatment.eyebrow', locale)
  const heroText = tf(treatment, 'heroText', locale)
  const faqs = (locale === 'en' && treatmentFaqs[`${treatment.slug}_en`]) || treatmentFaqs[treatment.slug]
  const benefits = tfArray(treatment, 'benefits', locale)
  const featured = reviews.slice(0, 3)
  const videoTests = videosForCategory(videoCatForSpecialty(treatment.specialty))

  const parentService = services.find((s) => s.slug === treatment.specialty)
  const parentHref = parentService
    ? (locale === 'en' ? `/en/${serviceSlugEn[parentService.slug] || 'services'}/` : `/${parentService.slug}/`)
    : (locale === 'en' ? '/en/services/' : '/servicios/')

  const faqSubtitle = locale === 'en'
    ? `Frequently asked questions about ${(title || '').toLowerCase()}.`
    : `Dudas habituales sobre ${(title || '').toLowerCase()}.`

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

      {/* ── Hero + lead form (above the fold) ── */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        {treatment.heroImageUrl && (
          <img src={treatment.heroImageUrl} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="font-jakarta text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{subtitle}</p>
            <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">{title}</h1>
            {heroText && <p className="font-jakarta text-white/75 text-base leading-relaxed max-w-lg mb-6">{heroText}</p>}
            {benefits.length > 0 && (
              <ul className="space-y-2.5 mb-6">
                {benefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-jakarta text-white/85 text-sm sm:text-base">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" /> {b.title}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-3 mb-6">
              <button onClick={scrollToForm} className="flex items-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors shadow-xl shadow-gold/25">
                <MessageCircle size={17} /> {c.book}
              </button>
              <a href="tel:+34914476225" className="flex items-center gap-2 border border-white/25 text-white font-outfit font-semibold text-sm px-7 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors">
                <Phone size={16} /> {c.call}
              </a>
            </div>
            <div className="inline-flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={15} style={{ color: '#FBBC04' }} className="fill-current" />)}</div>
              <span className="font-jakarta text-sm font-medium text-white/85">{ratingSummary.ratingValue} · {ratingSummary.reviewCount}+ {c.reviews} · {c.award}</span>
            </div>
          </div>
          <div className="lg:pt-2"><LeadForm servicio={title} locale={locale} /></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
            { label: t('crumb.services', locale), href: locale === 'en' ? '/en/services/' : '/servicios/' },
            parentService
              ? { label: tf(parentService, 'title', locale), href: parentHref }
              : { label: subtitle, href: locale === 'en' ? '/en/services/' : '/servicios/' },
            { label: title, href: null },
          ]}
        />
      </div>

      {/* ── Informative body (SEO content) ── */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-gold/10 text-gold font-outfit font-semibold text-xs px-4 py-2 rounded-full">
            {c.included}
          </span>
        </div>
        <MarkdownBody>{tf(treatment, 'bodyMarkdown', locale)}</MarkdownBody>
      </div>

      {/* ── Benefits ── */}
      {benefits.length > 0 && (
        <section className="py-16 px-4 bg-charcoal">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-pearl mb-10 text-center">
              {t('treatment.benefitsTitle', locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-colors duration-300">
                  <Check size={28} className="text-gold mb-4" />
                  <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">{b.title}</h3>
                  <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Precio / transparencia ── */}
      <section className="bg-pearl py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="font-jakarta text-gold/60 text-[11px] font-semibold uppercase tracking-[0.25em] mb-2">{c.priceEyebrow}</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-4">{c.priceTitle}</h2>
          <p className="font-jakarta text-slate leading-relaxed mb-6">{c.priceLead}</p>
          <div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-2 bg-white border border-charcoal/8 rounded-2xl px-6 py-4 font-jakarta text-sm text-charcoal">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> {c.financing}</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> {c.zero}</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> {c.included}</span>
          </div>
          <div className="mt-8"><button onClick={scrollToForm} className="bg-gold text-charcoal font-outfit font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors">{c.book}</button></div>
        </div>
      </section>

      {/* ── Testimonios: vídeos reales de pacientes de este tratamiento, o reseñas ── */}
      {videoTests.length > 0 ? (
        <VideoTestimonialGrid videos={videoTests} title={c.testTitle} />
      ) : (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-8 text-center">{c.testTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((r) => (
              <div key={r.name} className="bg-white border border-charcoal/8 rounded-2xl p-6 shadow-sm">
                <div className="flex mb-3">{[...Array(r.rating || 5)].map((_, i) => <Star key={i} size={14} style={{ color: '#FBBC04' }} className="fill-current" />)}</div>
                <p className="font-jakarta text-slate text-sm leading-relaxed mb-4 line-clamp-6">{r.text}</p>
                <p className="font-outfit font-semibold text-charcoal text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Proceso ── */}
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold mb-10 text-center">{c.procTitle}</h2>
          <div className="space-y-5">
            {c.process.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold text-charcoal font-outfit font-bold flex items-center justify-center shrink-0">{String(i + 1).padStart(2, '0')}</div>
                <div><p className="font-outfit font-semibold text-lg">{s.title}</p><p className="font-jakarta text-white/60 text-sm">{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
