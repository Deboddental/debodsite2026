import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { treatments } from '../data/treatments'
import { specialties, specialtyLabel } from '../data/specialties'
import { treatmentSlugEn } from '../i18n/slugs'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import { useLocale } from '../hooks/useLocale'
import { tf } from '../utils/tf'
import { enPathFor } from '../i18n/slugs'

// Hub/index page for all 23 individual treatments, grouped by specialty. Fills
// in for the old /servicios/ hub (removed — services and treatments covered
// the same ground twice) and gives treatment breadcrumbs a parent to point to.
const GROUPS = specialties
  .map((s) => ({ ...s, items: treatments.filter((t) => t.specialty === s.slug) }))
  .filter((g) => g.items.length > 0)

export default function Tratamientos() {
  const locale = useLocale()
  const treatmentHref = (slug) => (locale === 'en' ? `/en/treatments/${treatmentSlugEn[slug]}/` : `/tratamientos/${slug}/`)

  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Dental Treatments in Argüelles, Madrid | Debod Dental Clinic' : 'Tratamientos Dentales en Argüelles, Madrid | Debod Dental Clinic'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'All our dental treatments in Argüelles, Madrid, grouped by specialty: implants, cosmetic dentistry, orthodontics, periodontics, oral surgery and more.' : 'Todos nuestros tratamientos dentales en Argüelles, Madrid, agrupados por especialidad: implantes, estética dental, ortodoncia, periodoncia, cirugía oral y más.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Dental Treatments — Debod Dental Clinic' : 'Tratamientos Dentales — Debod Dental Clinic'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'All treatments' : 'Todos los tratamientos'}
        title={locale === 'en' ? 'Dental Treatments' : 'Tratamientos Dentales'}
        description={locale === 'en' ? 'Every treatment we offer, grouped by specialty — each with its own clear, honest information and pricing.' : 'Cada tratamiento que ofrecemos, agrupado por especialidad — con información y precios claros y honestos.'}
        imageUrl="/Images/clinica/dsc00147.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Treatments' : 'Tratamientos', href: null },
          ]}
        />
      </div>

      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-14">
          {GROUPS.map((g) => (
            <div key={g.slug}>
              <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">{specialtyLabel(g, locale)}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {g.items.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    to={treatmentHref(treatment.slug)}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold hover:shadow-xl transition-all duration-300"
                  >
                    {treatment.heroImageUrl && (
                      <div className="h-44 overflow-hidden">
                        <img
                          src={treatment.heroImageUrl}
                          alt={tf(treatment, 'title', locale)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-outfit font-semibold text-charcoal text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                        {tf(treatment, 'title', locale)}
                      </h3>
                      <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {tf(treatment, 'metaDescription', locale)}
                      </p>
                      <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                        {locale === 'en' ? 'View treatment' : 'Ver tratamiento'} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Not sure which treatment you need?' : '¿No sabes qué tratamiento necesitas?'}
        subtext={locale === 'en' ? 'Book a consultation and our specialists will guide you, with no obligation, to the right treatment for your case.' : 'Reserva una consulta y nuestros especialistas te orientarán, sin compromiso, hacia el tratamiento adecuado para tu caso.'}
        variant="dark"
      />
    </>
  )
}
