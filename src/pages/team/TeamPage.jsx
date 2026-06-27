import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { teamMembers, supportTeam } from '../../data/team'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import CtaBand from '../../components/ui/CtaBand'
import { useLocale } from '../../hooks/useLocale'
import { tf } from '../../utils/tf'
import { enPathFor } from '../../i18n/slugs'

const ROLE_EN = {
  'Ceramista · CAD/CAM': 'Ceramist · CAD/CAM',
  'Ceramista': 'Ceramist',
  'Logística de Laboratorio': 'Laboratory Logistics',
  'Higienista Dental': 'Dental Hygienist',
  'Recepción y Administración': 'Reception & Administration',
}

export default function TeamPage() {
  const locale = useLocale()
  const roleLabel = (r) => (locale === 'en' ? ROLE_EN[r] || r : r)
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Our Team of Dental Specialists | Debod Dental Clinic — Argüelles, Madrid' : 'Nuestro Equipo de Especialistas Dentales | Debod Dental Clinic — Argüelles, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Meet the team of specialist dentists at Debod Dental Clinic in Argüelles, Madrid. Orthodontics, dental implants, root canal, periodontics and our own dental laboratory.' : 'Conoce al equipo de odontólogos especialistas de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes, endodoncia, periodoncia y laboratorio dental propio.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Our Team — Debod Dental Clinic' : 'Nuestro Equipo — Debod Dental Clinic'} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'The team' : 'El equipo'}
        title={locale === 'en' ? 'Specialists committed to your health' : 'Especialistas comprometidos con tu salud'}
        description={locale === 'en' ? 'A multidisciplinary team of first-class dentists, united by a philosophy of honest dentistry and clinical excellence.' : 'Un equipo multidisciplinar de odontólogos de primer nivel, unidos por la filosofía de la odontología honesta y la excelencia clínica.'}
        imageUrl="/Images/clinica/dsc00256.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Team' : 'Equipo', href: null },
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
                      {tf(member, 'title', locale)}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-5">
                      {(tf(member, 'tags', locale) || []).slice(0, 3).map((tag) => (
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
                        {locale === 'en' ? 'View profile' : 'Ver perfil'} <ArrowRight size={14} />
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
                  to={locale === 'en' ? enPathFor(`/equipo/${member.slug}/`) : `/equipo/${member.slug}/`}
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
              {locale === 'en' ? 'Our complete team' : 'Nuestro equipo al completo'}
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
              {locale === 'en' ? 'The people behind every smile' : 'Las personas detrás de cada sonrisa'}
            </h2>
            <p className="font-jakarta text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              {locale === 'en' ? 'In addition to our specialists, an in-house laboratory team, hygienists and patient care staff look after every detail of your treatment.' : 'Además de nuestros especialistas, un equipo de laboratorio propio, higiene y atención al paciente cuida cada detalle de tu tratamiento.'}
            </p>
          </div>

          {['Debod Dental Lab', 'Higiene y atención'].map((group) => {
            const people = supportTeam.filter((p) => p.group === group)
            if (people.length === 0) return null
            return (
              <div key={group} className="mb-10 last:mb-0">
                <h3 className="font-outfit font-semibold text-charcoal/70 text-sm uppercase tracking-wider mb-5 text-center">
                  {locale === 'en' && group === 'Higiene y atención' ? 'Hygiene and patient care' : group}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {people.map((p) => (
                    <div
                      key={p.name}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                        <img
                          src={p.photoUrl}
                          alt={`${p.name} — ${roleLabel(p.role)}, Debod Dental Clinic`}
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
                        <p className="font-jakarta text-slate-500 text-xs">{roleLabel(p.role)}</p>
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
        headline={locale === 'en' ? 'Speak directly with our specialists' : 'Habla directamente con nuestros especialistas'}
        subtext={locale === 'en' ? 'First consultation with no obligation. A complete diagnosis with the right specialist for your case.' : 'Primera consulta sin compromiso. Diagnóstico completo con el especialista adecuado para tu caso.'}
        variant="dark"
      />
    </>
  )
}
