import { Helmet } from 'react-helmet-async'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import { ratingSummary } from '../data/reviews'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

const getValues = (locale) => [
  {
    icon: Heart,
    title: locale === 'en' ? 'Honest Dentistry' : 'Odontología Honesta',
    text:
      locale === 'en'
        ? 'We only recommend what you genuinely need. Our treatments are grounded in scientific evidence and the patient’s best interest, never in commercial incentives.'
        : 'Solo recomendamos lo que realmente necesitas. Nuestros tratamientos se basan en evidencia científica y en el mejor interés del paciente, nunca en incentivos comerciales.',
  },
  {
    icon: Shield,
    title: locale === 'en' ? 'Complete Transparency' : 'Transparencia Total',
    text:
      locale === 'en'
        ? 'Clear diagnoses, detailed quotes and realistic timeframes. We believe an informed patient is a patient empowered to decide.'
        : 'Diagnósticos claros, presupuestos detallados y tiempos realistas. Creemos que un paciente informado es un paciente con poder de decisión.',
  },
  {
    icon: Sparkles,
    title: locale === 'en' ? 'Cutting-Edge Technology' : 'Tecnología de Vanguardia',
    text:
      locale === 'en'
        ? 'Intraoral scanner, low-dose digital radiography and an in-house CAD/CAM laboratory. Technology at the service of precision and comfort.'
        : 'Escáner intraoral, radiografía digital de baja dosis, laboratorio CAD/CAM in-house. La tecnología al servicio de la precisión y la comodidad.',
  },
  {
    icon: Users,
    title: locale === 'en' ? 'Multidisciplinary Team' : 'Equipo Multidisciplinar',
    text:
      locale === 'en'
        ? 'Every specialist in their field. Orthodontists, periodontists, endodontists, implantologists and laboratory technicians working in a coordinated way.'
        : 'Cada especialista en su área. Ortodoncistas, periodoncistas, endodoncistas, implantólogos y técnicos de laboratorio trabajando de forma coordinada.',
  },
]

export default function Nosotros() {
  const locale = useLocale()
  const values = getValues(locale)
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'About Us — Debod Dental Clinic | Honest Dentistry in Argüelles, Madrid' : 'Sobre Nosotros — Debod Dental Clinic | Odontología Honesta en Argüelles, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Debod Dental Clinic is a full-service dental clinic in Argüelles, Madrid. Our philosophy: honest dentistry, complete transparency and cutting-edge technology.' : 'Debod Dental Clinic es una clínica dental integral en Argüelles, Madrid. Nuestra filosofía: odontología honesta, transparencia total y tecnología de vanguardia.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'About Us — Debod Dental Clinic' : 'Sobre Nosotros — Debod Dental Clinic'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Our story' : 'Nuestra historia'}
        title={locale === 'en' ? 'The dental clinic of Argüelles' : 'La clínica dental de Argüelles'}
        description={locale === 'en' ? 'Founded on the conviction that dentistry can be honest, precise and personable — all at the same time.' : 'Fundada con la convicción de que la odontología puede ser honesta, precisa y cercana — todo al mismo tiempo.'}
        imageUrl="/Images/clinica/dsc00141.webp"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'About Us' : 'Nosotros', href: null },
          ]}
        />
      </div>

      {/* Intro section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-3xl md:text-4xl text-charcoal font-light italic leading-relaxed mb-8">
            {locale === 'en'
              ? '"Traditional dentistry treats teeth. We commit to your overall wellbeing."'
              : '"La odontología tradicional trata dientes. Nosotros nos comprometemos con tu bienestar integral."'}
          </p>
          <div className="space-y-5 font-jakarta text-slate-600 text-lg leading-relaxed">
            <p>
              {locale === 'en'
                ? 'Debod Dental Clinic was born in the heart of Argüelles, Madrid, with a clear premise: to deliver high-level dentistry without losing the warm, personable care every patient deserves.'
                : 'Debod Dental Clinic nació en el corazón de Argüelles, Madrid, con una premisa clara: ofrecer odontología de alto nivel sin perder el trato humano y cercano que merece cada paciente.'}
            </p>
            <p>
              {locale === 'en' ? (
                <>
                  Our team of specialists shares one philosophy — <strong className="text-charcoal">honest dentistry</strong> — which translates into transparent diagnoses, evidence-based treatments and quotes with no small print.
                </>
              ) : (
                <>
                  Nuestro equipo de especialistas comparte una misma filosofía — la <strong className="text-charcoal">odontología honesta</strong> — que se traduce en diagnósticos transparentes, tratamientos basados en evidencia y presupuestos sin letra pequeña.
                </>
              )}
            </p>
            <p>
              {locale === 'en'
                ? 'We have an in-house dental laboratory, state-of-the-art technology and a space designed so that every visit is an experience, not a chore.'
                : 'Contamos con un laboratorio dental in-house, tecnología de última generación y un espacio diseñado para que cada visita sea una experiencia, no una obligación.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-pearl text-center mb-12">
            {locale === 'en' ? 'Our principles' : 'Nuestros principios'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/50 transition-colors duration-300"
              >
                <Icon size={32} className="text-gold mb-4" />
                <h3 className="font-outfit font-semibold text-pearl text-xl mb-3">{title}</h3>
                <p className="font-jakarta text-pearl/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '+15', label: locale === 'en' ? 'Years of experience' : 'Años de experiencia' },
            { value: ratingSummary.ratingValue, label: locale === 'en' ? 'Google rating' : 'Valoración Google' },
            { value: '2023', label: locale === 'en' ? 'Current premises opened' : 'Apertura sede actual' },
            { value: '60m', label: locale === 'en' ? 'Unhurried consultation' : 'Consulta sin prisas' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-cormorant text-5xl font-semibold text-gold mb-2">{value}</div>
              <div className="font-jakarta text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Come and meet us, no obligation' : 'Ven a conocernos sin compromiso'}
        subtext={locale === 'en' ? 'First consultation free. We explain everything you need to know about your dental health.' : 'Primera consulta gratuita. Te explicamos todo lo que necesitas saber sobre tu salud dental.'}
      />
    </>
  )
}
