import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { teamMembers } from '../../data/team'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import CtaBand from '../../components/ui/CtaBand'

const BASE_URL = 'https://deboddentalclinic.com'

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Nuestro Equipo de Especialistas Dentales | Debod Dental Clinic — Argüelles, Madrid</title>
        <meta
          name="description"
          content="Conoce al equipo de odontólogos especialistas de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes, endodoncia, periodoncia y laboratorio dental propio."
        />
        <link rel="canonical" href={`${BASE_URL}/equipo/`} />
        <meta property="og:title" content="Nuestro Equipo — Debod Dental Clinic" />
        <meta property="og:url" content={`${BASE_URL}/equipo/`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero
        subtitle="El equipo"
        title="Especialistas comprometidos con tu salud"
        description="Un equipo multidisciplinar de odontólogos de primer nivel, unidos por la filosofía de la odontología honesta y la excelencia clínica."
        imageUrl="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Equipo', href: null },
          ]}
        />
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/equipo/${member.slug}/`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-outfit font-semibold text-charcoal text-xl mb-1 group-hover:text-gold transition-colors duration-200">
                    {member.name}
                  </h2>
                  <p className="font-jakarta text-slate-500 text-sm mb-4">
                    {member.title}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {member.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-outfit font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    Ver perfil <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Habla directamente con nuestros especialistas"
        subtext="Primera consulta sin compromiso. Diagnóstico completo con el especialista adecuado para tu caso."
        variant="dark"
      />
    </>
  )
}
