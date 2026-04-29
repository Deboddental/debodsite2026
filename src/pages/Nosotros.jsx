import { Helmet } from 'react-helmet-async'
import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'

const BASE_URL = 'https://deboddentalclinic.com'

const values = [
  {
    icon: Heart,
    title: 'Odontología Honesta',
    text: 'Solo recomendamos lo que realmente necesitas. Nuestros tratamientos se basan en evidencia científica y en el mejor interés del paciente, nunca en incentivos comerciales.',
  },
  {
    icon: Shield,
    title: 'Transparencia Total',
    text: 'Diagnósticos claros, presupuestos detallados y tiempos realistas. Creemos que un paciente informado es un paciente con poder de decisión.',
  },
  {
    icon: Sparkles,
    title: 'Tecnología de Vanguardia',
    text: 'Escáner intraoral, radiografía digital de baja dosis, laboratorio CAD/CAM in-house. La tecnología al servicio de la precisión y la comodidad.',
  },
  {
    icon: Users,
    title: 'Equipo Multidisciplinar',
    text: 'Cada especialista en su área. Ortodoncistas, periodoncistas, endodoncistas, implantólogos y técnicos de laboratorio trabajando de forma coordinada.',
  },
]

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros — Debod Dental Clinic | Odontología Honesta en Argüelles, Madrid</title>
        <meta
          name="description"
          content="Debod Dental Clinic es una clínica dental integral en Argüelles, Madrid. Nuestra filosofía: odontología honesta, transparencia total y tecnología de vanguardia."
        />
        <link rel="canonical" href={`${BASE_URL}/nosotros/`} />
        <meta property="og:title" content="Sobre Nosotros — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/nosotros/`} />
      </Helmet>

      <PageHero
        subtitle="Nuestra historia"
        title="La clínica dental de Argüelles"
        description="Fundada con la convicción de que la odontología puede ser honesta, precisa y cercana — todo al mismo tiempo."
        imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Nosotros', href: null },
          ]}
        />
      </div>

      {/* Intro section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-3xl md:text-4xl text-charcoal font-light italic leading-relaxed mb-8">
            "La odontología tradicional trata dientes. Nosotros nos comprometemos con tu bienestar integral."
          </p>
          <div className="space-y-5 font-jakarta text-slate-600 text-lg leading-relaxed">
            <p>
              Debod Dental Clinic nació en el corazón de Argüelles, Madrid, con una premisa clara: ofrecer odontología de alto nivel sin perder el trato humano y cercano que merece cada paciente.
            </p>
            <p>
              Nuestro equipo de especialistas comparte una misma filosofía — la <strong className="text-charcoal">odontología honesta</strong> — que se traduce en diagnósticos transparentes, tratamientos basados en evidencia y presupuestos sin letra pequeña.
            </p>
            <p>
              Contamos con un laboratorio dental in-house, tecnología de última generación y un espacio diseñado para que cada visita sea una experiencia, no una obligación.
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-pearl text-center mb-12">
            Nuestros principios
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
            { value: '+15', label: 'Años de experiencia' },
            { value: '5.0', label: 'Valoración Google' },
            { value: '2023', label: 'Apertura sede actual' },
            { value: '60m', label: 'Consulta sin prisas' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-cormorant text-5xl font-semibold text-gold mb-2">{value}</div>
              <div className="font-jakarta text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        headline="Ven a conocernos sin compromiso"
        subtext="Primera consulta gratuita. Te explicamos todo lo que necesitas saber sobre tu salud dental."
      />
    </>
  )
}
