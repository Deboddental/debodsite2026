import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import { useLocale } from '../hooks/useLocale'
import { tf } from '../utils/tf'
import { enPathFor } from '../i18n/slugs'

export default function Servicios() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Dental Services in Argüelles, Madrid | Debod Dental Clinic' : 'Servicios Dentales en Argüelles, Madrid | Debod Dental Clinic'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Comprehensive dental clinic in Argüelles, Madrid. Orthodontics, dental implants, root canal, periodontics, paediatric dentistry, cosmetic dentistry and oral surgery. A team of specialists.' : 'Clínica dental integral en Argüelles, Madrid. Ortodoncia, implantes, endodoncia, periodoncia, odontopediatría, estética dental y cirugía oral. Equipo de especialistas.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Dental Services — Debod Dental Clinic' : 'Servicios Dentales — Debod Dental Clinic'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Specialities' : 'Especialidades'}
        title={locale === 'en' ? 'Dental Services' : 'Servicios Dentales'}
        description={locale === 'en' ? 'A multidisciplinary team of specialists to cover all your dental health needs under one roof.' : 'Un equipo multidisciplinar de especialistas para cubrir todas las necesidades de tu salud dental bajo el mismo techo.'}
        imageUrl="/Images/clinica/dsc00147.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Services' : 'Servicios', href: null },
          ]}
        />
      </div>

      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={locale === 'en' ? enPathFor(`/${service.slug}/`) : `/${service.slug}/`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
            >
              {service.heroImageUrl && (
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.heroImageUrl}
                    alt={tf(service, 'title', locale)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="font-outfit font-semibold text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-200">
                  {tf(service, 'title', locale)}
                </h2>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {tf(service, 'heroText', locale)}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  {locale === 'en' ? 'View speciality' : 'Ver especialidad'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Not sure which specialist you need?' : '¿No sabes qué especialista necesitas?'}
        subtext={locale === 'en' ? 'Call us on +34 914 47 62 25 or message us on WhatsApp at +34 689 10 47 14 — we will guide you, with no obligation, to the right professional for your case.' : 'Llámanos o escríbenos — te orientamos sin compromiso hacia el profesional adecuado para tu caso.'}
        variant="dark"
      />
    </>
  )
}
