import { Helmet } from 'react-helmet-async'
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'

const BASE_URL = 'https://deboddentalclinic.com'

const channels = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'La forma más rápida. Te respondemos en minutos.',
    action: 'Escribir por WhatsApp',
    href: 'https://wa.me/34919059095?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cita.',
    color: 'bg-[#25D366]',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    desc: 'Llámanos en horario de clínica: L–V de 9:00 a 21:00.',
    action: 'Llamar ahora',
    href: 'tel:+34919059095',
    color: 'bg-gold',
  },
  {
    icon: Mail,
    title: 'Email',
    desc: 'Para consultas detalladas o adjuntar radiografías previas.',
    action: 'Enviar email',
    href: 'mailto:info@deboddentalclinic.com',
    color: 'bg-charcoal',
  },
]

export default function Citas() {
  return (
    <>
      <Helmet>
        <title>Pedir Cita en Argüelles, Madrid | Debod Dental Clinic</title>
        <meta
          name="description"
          content="Pide cita en Debod Dental Clinic, Argüelles, Madrid. Disponible por WhatsApp, teléfono y email. Primera consulta gratuita con nuestro equipo de especialistas."
        />
        <link rel="canonical" href={`${BASE_URL}/ubicaciones/citas-arguelles-madrid/`} />
        <meta property="og:title" content="Pedir Cita — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/ubicaciones/citas-arguelles-madrid/`} />
      </Helmet>

      <PageHero
        subtitle="Reserva tu consulta"
        title="Pide cita en Debod Dental"
        description="Primera consulta gratuita y sin compromiso. Elige el canal que más te convenga."
        imageUrl="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Ubicaciones', href: '/ubicaciones/' },
            { label: 'Pedir Cita', href: null },
          ]}
        />
      </div>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {channels.map(({ icon: Icon, title, desc, action, href, color }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-3xl p-8 text-center hover:border-gold hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${color} mb-5`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h2 className="font-outfit font-semibold text-charcoal text-xl mb-2">{title}</h2>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full font-outfit font-semibold text-sm text-white ${color} hover:opacity-90 transition-opacity duration-200`}
                >
                  {action}
                </a>
              </div>
            ))}
          </div>

          {/* Hours reminder */}
          <div className="bg-charcoal rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Clock size={32} className="text-gold flex-shrink-0" />
            <div>
              <h3 className="font-outfit font-semibold text-pearl text-lg mb-1">Horario de atención</h3>
              <p className="font-jakarta text-pearl/70">Lunes a Viernes: <strong className="text-pearl">9:00 – 21:00</strong> · Sábados con cita previa</p>
              <p className="font-jakarta text-pearl/50 text-sm mt-1">Las urgencias se atienden en el mismo día.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
