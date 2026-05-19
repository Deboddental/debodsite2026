import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Award } from 'lucide-react'
import { teamMembers } from '../../data/team'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import JsonLd from '../../components/ui/JsonLd'
import CtaBand from '../../components/ui/CtaBand'
import { doctorProfileSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'
const WA_BASE = 'https://wa.me/34919059095?text='

export default function DoctorProfile() {
  const { doctorSlug } = useParams()
  const doctor = teamMembers.find((m) => m.slug === doctorSlug)

  if (!doctor) return <Navigate to="/equipo/" replace />

  const canonical = `${BASE_URL}/equipo/${doctor.slug}/`
  const waMessage = encodeURIComponent(
    `Hola, me gustaría solicitar una consulta con ${doctor.name}.`
  )

  return (
    <>
      <Helmet>
        <title>{doctor.name} — {doctor.title} | Debod Dental Clinic</title>
        <meta
          name="description"
          content={`${doctor.name}, especialista en ${doctor.title} en Debod Dental Clinic, Argüelles, Madrid. ${doctor.bioMarkdown?.substring(0, 120)}...`}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${doctor.name} — ${doctor.title}`} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="profile" />
        {doctor.photoUrl && <meta property="og:image" content={doctor.photoUrl} />}
      </Helmet>

      <JsonLd schema={doctorProfileSchema(doctor)} />

      {/* Hero banner */}
      <section className="bg-charcoal pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Equipo', href: '/equipo/' },
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
                <p className="font-jakarta text-slate-500 text-sm mb-4">{doctor.title}</p>

                {doctor.colegiadoNum && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Award size={14} className="text-gold" />
                    Colegiado Nº {doctor.colegiadoNum}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-outfit font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`${WA_BASE}${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-full font-outfit font-semibold text-sm hover:bg-[#1ebe5a] transition-colors duration-300"
                >
                  <MessageCircle size={16} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            {/* Bio */}
            <div>
              <MarkdownBody>{doctor.bioMarkdown}</MarkdownBody>

              {doctor.specialties?.length > 0 && (
                <div className="mt-10 p-6 bg-charcoal/5 rounded-2xl">
                  <h3 className="font-outfit font-semibold text-charcoal mb-4">
                    Áreas de especialización
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.specialties.map((s) => (
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
        headline={`¿Quieres una consulta con ${doctor.name}?`}
        subtext="Reserva tu cita online o contáctanos por WhatsApp. Primera consulta sin compromiso."
      />
    </>
  )
}
