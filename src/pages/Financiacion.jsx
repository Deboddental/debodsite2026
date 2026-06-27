import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

const faqsEs = [
  {
    q: '¿Cómo funciona la financiación en Debod Dental?',
    a: 'Trabajamos con entidades financieras especializadas en salud que ofrecen planes desde 0% TAE para periodos cortos. Solo necesitas tu DNI y la aprobación se realiza en minutos durante tu visita.',
  },
  {
    q: '¿Hay un importe mínimo para financiar?',
    a: 'La financiación está disponible desde 200€. Para tratamientos más grandes ofrecemos hasta 60 cuotas mensuales adaptadas a tu presupuesto.',
  },
  {
    q: '¿Qué tratamientos se pueden financiar?',
    a: 'Todos los tratamientos de la clínica son financiables: ortodoncia, implantes, rehabilitaciones, estética dental, periodoncia y más.',
  },
  {
    q: '¿Necesito buen historial crediticio?',
    a: 'Trabajamos con diferentes opciones de financiación para adaptarnos a distintos perfiles. Consúltanos y encontraremos la solución adecuada para ti.',
  },
  {
    q: '¿Se puede financiar en el mismo día de la consulta?',
    a: 'Sí. La gestión es rápida y en la mayoría de los casos el mismo día del diagnóstico puedes confirmar tu plan de tratamiento con la financiación aprobada.',
  },
]

const faqsEn = [
  {
    q: 'How does financing work at Debod Dental?',
    a: 'We work with finance providers specialised in healthcare that offer plans from 0% APR for short terms. You only need your ID document and approval takes just minutes during your visit.',
  },
  {
    q: 'Is there a minimum amount to finance?',
    a: 'Financing is available from €200. For larger treatments we offer up to 60 monthly instalments tailored to your budget.',
  },
  {
    q: 'Which treatments can be financed?',
    a: 'Every treatment at the clinic can be financed: orthodontics, dental implants, full oral rehabilitations, cosmetic dentistry, periodontics and more.',
  },
  {
    q: 'Do I need a good credit history?',
    a: 'We work with different financing options to suit a range of profiles. Get in touch and we will find the right solution for you.',
  },
  {
    q: 'Can I arrange financing on the same day as the consultation?',
    a: 'Yes. The process is quick and in most cases you can confirm your treatment plan with approved financing on the same day as your diagnosis.',
  },
]

function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-outfit font-semibold text-charcoal text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="font-jakarta text-slate-600 text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Financiacion() {
  const locale = useLocale()
  const faqs = locale === 'en' ? faqsEn : faqsEs
  const faqSchema = buildFaqSchema(faqs)
  const options =
    locale === 'en'
      ? [
          { value: '0% APR', label: 'For short terms', note: 'Interest-free on selected plans' },
          { value: 'Up to 60', label: 'Monthly instalments', note: 'Tailored to any budget' },
          { value: 'From €200', label: 'Minimum amount', note: 'For almost every treatment' },
        ]
      : [
          { value: '0% TAE', label: 'Para periodos cortos', note: 'Sin intereses en plazos seleccionados' },
          { value: 'Hasta 60', label: 'Cuotas mensuales', note: 'Adaptadas a cualquier presupuesto' },
          { value: 'Desde 200€', label: 'Importe mínimo', note: 'Para casi todos los tratamientos' },
        ]
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Interest-Free Dental Financing | Debod Dental Clinic — Argüelles, Madrid' : 'Financiación Dental sin Intereses | Debod Dental Clinic — Argüelles, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Finance your dental treatment from 0% APR at Debod Dental Clinic, Argüelles, Madrid. Plans from €200 up to 60 months. Approval in minutes.' : 'Financia tu tratamiento dental desde 0% TAE en Debod Dental Clinic, Argüelles, Madrid. Planes desde 200€ hasta 60 meses. Aprobación en minutos.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Dental Financing — Debod Dental Clinic' : 'Financiación Dental — Debod Dental Clinic'} />
      </Helmet>

      <JsonLd schema={faqSchema} />

      <PageHero
        subtitle={locale === 'en' ? 'No financial barriers' : 'Sin barreras económicas'}
        title={locale === 'en' ? 'Flexible financing for your dental health' : 'Financiación flexible para tu salud dental'}
        description={locale === 'en' ? 'Look after your dental health today. Pay at your own pace, from 0% APR for short terms.' : 'Cuida tu salud dental hoy. Págalo a tu ritmo, desde 0% TAE para periodos cortos.'}
        imageUrl="/Images/clinica/dsc00238.webp"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Financing' : 'Financiación', href: null },
          ]}
        />
      </div>

      {/* Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {options.map(({ value, label, note }) => (
              <div key={label} className="bg-charcoal rounded-2xl p-8 text-center">
                <div className="font-cormorant text-4xl font-semibold text-gold mb-2">{value}</div>
                <div className="font-outfit font-semibold text-pearl mb-1">{label}</div>
                <div className="font-jakarta text-pearl/50 text-sm">{note}</div>
              </div>
            ))}
          </div>

          <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-8">
            {locale === 'en' ? 'Frequently asked questions about financing' : 'Preguntas frecuentes sobre financiación'}
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Your smile does not have to wait' : 'Tu sonrisa no tiene por qué esperar'}
        subtext={locale === 'en' ? 'Ask us for a detailed quote with financing options at your next visit.' : 'Pídenos un presupuesto detallado con opciones de financiación en tu próxima visita.'}
      />
    </>
  )
}
