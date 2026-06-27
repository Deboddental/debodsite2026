import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { teamMembers, supportTeam } from '../../data/team'
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
        imageUrl="/Images/clinica/dsc00256.webp"
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
            {teamMembers.map((member) => {
              const inner = (
                <>
                  <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="750"
                      height="1000"
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
                    {!member.noProfile && (
                      <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                        Ver perfil <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                </>
              )
              return member.noProfile ? (
                <div
                  key={member.slug}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300"
                >
                  {inner}
                </div>
              ) : (
                <Link
                  key={member.slug}
                  to={`/equipo/${member.slug}/`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
                >
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipo al completo — laboratorio, higiene y administración (sin ficha) */}
      <section className="py-12 px-4 bg-charcoal/4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Nuestro equipo al completo
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
              Las personas detrás de cada sonrisa
            </h2>
            <p className="font-jakarta text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              Además de nuestros especialistas, un equipo de laboratorio propio, higiene y
              atención al paciente cuida cada detalle de tu tratamiento.
            </p>
          </div>

          {['Debod Dental Lab', 'Higiene y atención'].map((group) => {
            const people = supportTeam.filter((p) => p.group === group)
            if (people.length === 0) return null
            return (
              <div key={group} className="mb-10 last:mb-0">
                <h3 className="font-outfit font-semibold text-charcoal/70 text-sm uppercase tracking-wider mb-5 text-center">
                  {group}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                  {people.map((p) => (
                    <div
                      key={p.name}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                        <img
                          src={p.photoUrl}
                          alt={`${p.name} — ${p.role}, Debod Dental Clinic`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          width="750"
                          height="1000"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-outfit font-semibold text-charcoal text-base leading-tight mb-0.5">
                          {p.name}
                        </h4>
                        <p className="font-jakarta text-slate-500 text-xs">{p.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
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
