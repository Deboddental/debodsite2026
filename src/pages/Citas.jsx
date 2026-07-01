import { Helmet } from 'react-helmet-async'
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

const getChannels = (locale) => [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: locale === 'en' ? 'The fastest way. We reply within minutes.' : 'La forma más rápida. Te respondemos en minutos.',
    action: locale === 'en' ? 'Message us on WhatsApp' : 'Escribir por WhatsApp',
    href: 'https://wa.me/34689104714?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cita.',
    color: 'bg-[#25D366]',
  },
  {
    icon: Phone,
    title: locale === 'en' ? 'Phone' : 'Teléfono',
    desc: locale === 'en' ? 'Call us during clinic hours: Mon–Fri, 9:00 to 20:00.' : 'Llámanos en horario de clínica: L–V de 9:00 a 20:00.',
    action: locale === 'en' ? 'Call now' : 'Llamar ahora',
    href: 'tel:+34914476225',
    color: 'bg-gold',
  },
  {
    icon: Mail,
    title: 'Email',
    desc: locale === 'en' ? 'For detailed enquiries or to attach previous X-rays.' : 'Para consultas detalladas o adjuntar radiografías previas.',
    action: locale === 'en' ? 'Send an email' : 'Enviar email',
    href: 'mailto:info@deboddentalclinic.com',
    color: 'bg-charcoal',
  },
]

export default function Citas() {
  const locale = useLocale()
  const channels = getChannels(locale)
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Book an Appointment in Argüelles, Madrid | Debod Dental Clinic' : 'Pedir Cita en Argüelles, Madrid | Debod Dental Clinic'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Book an appointment at Debod Dental Clinic, Argüelles, Madrid. Available by WhatsApp, phone and email. First diagnostic visit included with our team of specialists.' : 'Pide cita en Debod Dental Clinic, Argüelles, Madrid. Disponible por WhatsApp, teléfono y email. Primera visita diagnóstica incluida con nuestro equipo de especialistas.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Book an Appointment — Debod Dental Clinic' : 'Pedir Cita — Debod Dental Clinic'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Book your consultation' : 'Reserva tu consulta'}
        title={locale === 'en' ? 'Book your appointment at Debod Dental' : 'Pide cita en Debod Dental'}
        description={locale === 'en' ? 'First diagnostic visit included, with no obligation. Choose the channel that suits you best.' : 'Primera visita diagnóstica incluida y sin compromiso. Elige el canal que más te convenga.'}
        imageUrl="/Images/clinica/dsc00253.webp"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Locations' : 'Ubicaciones', href: locale === 'en' ? enPathFor('/ubicaciones/') : '/ubicaciones/' },
            { label: locale === 'en' ? 'Book an Appointment' : 'Pedir Cita', href: null },
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
              <h3 className="font-outfit font-semibold text-pearl text-lg mb-1">{locale === 'en' ? 'Opening hours' : 'Horario de atención'}</h3>
              <p className="font-jakarta text-pearl/70">{locale === 'en' ? 'Monday to Friday: ' : 'Lunes a Viernes: '}<strong className="text-pearl">9:00 – 20:00</strong>{locale === 'en' ? ' · Sat & Sun closed' : ' · Sábados y domingos cerrado'}</p>
              <p className="font-jakarta text-pearl/50 text-sm mt-1">{locale === 'en' ? 'Emergencies are seen the same day.' : 'Las urgencias se atienden en el mismo día.'}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
