import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'

const BASE_URL = 'https://deboddentalclinic.com'

const faqs = [
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
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
  return (
    <>
      <Helmet>
        <title>Financiación Dental sin Intereses | Debod Dental Clinic — Argüelles, Madrid</title>
        <meta
          name="description"
          content="Financia tu tratamiento dental desde 0% TAE en Debod Dental Clinic, Argüelles, Madrid. Planes desde 200€ hasta 60 meses. Aprobación en minutos."
        />
        <link rel="canonical" href={`${BASE_URL}/financiacion/`} />
        <meta property="og:title" content="Financiación Dental — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/financiacion/`} />
      </Helmet>

      <JsonLd schema={faqSchema} />

      <PageHero
        subtitle="Sin barreras económicas"
        title="Financiación flexible para tu salud dental"
        description="Cuida tu salud dental hoy. Págalo a tu ritmo, desde 0% TAE para periodos cortos."
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Financiación', href: null },
          ]}
        />
      </div>

      {/* Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { value: '0% TAE', label: 'Para periodos cortos', note: 'Sin intereses en plazos seleccionados' },
              { value: 'Hasta 60', label: 'Cuotas mensuales', note: 'Adaptadas a cualquier presupuesto' },
              { value: 'Desde 200€', label: 'Importe mínimo', note: 'Para casi todos los tratamientos' },
            ].map(({ value, label, note }) => (
              <div key={label} className="bg-charcoal rounded-2xl p-8 text-center">
                <div className="font-cormorant text-4xl font-semibold text-gold mb-2">{value}</div>
                <div className="font-outfit font-semibold text-pearl mb-1">{label}</div>
                <div className="font-jakarta text-pearl/50 text-sm">{note}</div>
              </div>
            ))}
          </div>

          <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-8">
            Preguntas frecuentes sobre financiación
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Tu sonrisa no tiene por qué esperar"
        subtext="Pídenos un presupuesto detallado con opciones de financiación en tu próxima visita."
      />
    </>
  )
}
