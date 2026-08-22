import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Award } from 'lucide-react'
import { teamMembers } from '../../data/team'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import JsonLd from '../../components/ui/JsonLd'
import CtaBand from '../../components/ui/CtaBand'
import { doctorProfileSchema } from '../../data/seo'
import { useLocale } from '../../hooks/useLocale'
import { tf, tfArray } from '../../utils/tf'
import { t } from '../../i18n/ui'

export default function DoctorProfile() {
  const { doctorSlug } = useParams()
  const locale = useLocale()
  const doctor = teamMembers.find((m) => m.slug === doctorSlug)

  if (!doctor) return <Navigate to={locale === 'en' ? '/en/team/' : '/equipo/'} replace />

  const title = tf(doctor, 'title', locale)
  const bio = tf(doctor, 'bioMarkdown', locale)
  const contactHref = locale === 'en' ? '/en/contact/' : '/contacto/'
  // Plain-text bio excerpt for the meta description: strip markdown syntax so
  // '**bold**' markers never leak into search snippets, and resolve to '' (not
  // the literal string "undefined") for doctors whose bio isn't written yet.
  const bioPlain = (bio || '').replace(/[#*_`>]/g, '').replace(/\s+/g, ' ').trim()
  const bioExcerpt = bioPlain ? ` ${bioPlain.slice(0, 120).trim()}...` : ''
  // Single precomputed string for <title> — react-helmet-async needs one plain
  // string child; interpolating {doctor.name} — {title} directly as multiple
  // JSX children was rendering a genuinely empty <title></title> in production.
  const pageTitle = `${doctor.name} — ${title} | Debod Dental Clinic`
  const metaDescription = locale === 'en'
    ? `${doctor.name}, specialist in ${title} at Debod Dental Clinic, Argüelles, Madrid.${bioExcerpt}`
    : `${doctor.name}, especialista en ${title} en Debod Dental Clinic, Argüelles, Madrid.${bioExcerpt}`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${doctor.name} — ${title}`} />
        <meta property="og:type" content="profile" />
        {doctor.photoUrl && <meta property="og:image" content={doctor.photoUrl.startsWith('http') ? doctor.photoUrl : `https://deboddentalclinic.com${doctor.photoUrl}`} />}
      </Helmet>

      <JsonLd schema={doctorProfileSchema(doctor, locale)} />

      {/* Hero banner */}
      <section className="bg-charcoal pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: t('crumb.home', locale), href: locale === 'en' ? '/en/' : '/' },
              { label: t('crumb.team', locale), href: locale === 'en' ? '/en/team/' : '/equipo/' },
              { label: doctor.name, href: null },
            ]}
          />
        </div>
      </section>

      {/* Split layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">
            {/* Sticky photo + info card */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                <img
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="bg-pearl rounded-2xl p-6">
                <h1 className="font-outfit font-semibold text-charcoal text-2xl mb-1">
                  {doctor.name}
                </h1>
                <p className="font-jakarta text-slate-500 text-sm mb-4">{title}</p>

                {doctor.colegiadoNum && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Award size={14} className="text-gold" />
                    {t('doctor.colegiado', locale)} {doctor.colegiadoNum}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {tfArray(doctor, 'tags', locale).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-outfit font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={contactHref}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gold text-charcoal rounded-full font-outfit font-semibold text-sm hover:bg-gold-light transition-colors duration-300"
                >
                  <MessageCircle size={16} />
                  {t('doctor.book', locale)}
                </Link>
              </div>
            </div>

            {/* Bio */}
            <div>
              <MarkdownBody>{bio}</MarkdownBody>

              {tfArray(doctor, 'specialties', locale).length > 0 && (
                <div className="mt-10 p-6 bg-charcoal/5 rounded-2xl">
                  <h3 className="font-outfit font-semibold text-charcoal mb-4">
                    {t('doctor.specialtiesTitle', locale)}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tfArray(doctor, 'specialties', locale).map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 font-jakarta text-slate-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? `Want a consultation with ${doctor.name}?` : `¿Quieres una consulta con ${doctor.name}?`}
        subtext={locale === 'en'
          ? 'Book your appointment online. First consultation with no obligation.'
          : 'Reserva tu cita online. Primera consulta sin compromiso.'}
        ctaLabel={t('cta.defaultLabel', locale)}
        ctaTo={contactHref}
      />
    </>
  )
}
