import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'

const BASE_URL = 'https://deboddentalclinic.com'

export default function Servicios() {
  return (
    <>
      <Helmet>
        <title>Servicios Dentales en Argüelles, Madrid | Debod Dental Clinic</title>
        <meta
          name="description"
          content="Clínica dental integral en Argüelles, Madrid. Ortodoncia, implantes, endodoncia, periodoncia, odontopediatría, estética dental y cirugía oral. Equipo de especialistas."
        />
        <link rel="canonical" href={`${BASE_URL}/servicios/`} />
        <meta property="og:title" content="Servicios Dentales — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/servicios/`} />
      </Helmet>

      <PageHero
        subtitle="Especialidades"
        title="Servicios Dentales"
        description="Un equipo multidisciplinar de especialistas para cubrir todas las necesidades de tu salud dental bajo el mismo techo."
        imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: null },
          ]}
        />
      </div>

      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/${service.slug}/`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
            >
              {service.heroImageUrl && (
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.heroImageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="font-outfit font-semibold text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.heroText}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Ver especialidad <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        headline="¿No sabes qué especialista necesitas?"
        subtext="Llámanos o escríbenos — te orientamos sin compromiso hacia el profesional adecuado para tu caso."
        variant="dark"
      />
    </>
  )
}
