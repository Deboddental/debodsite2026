import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import VideoTestimonials from '../components/VideoTestimonials'
import JsonLd from '../components/ui/JsonLd'
import { reviews } from '../data/reviews'
import { homeReviewsSchema, breadcrumbSchema } from '../data/seo'

gsap.registerPlugin(ScrollTrigger)

const BASE_URL = 'https://deboddentalclinic.com'
const GOOGLE_URL = 'https://www.google.com/search?q=Debod+Dental+Clinic+Argüelles+Madrid'

export default function Resenas() {
  const gridRef = useRef(null)
  const canonical = `${BASE_URL}/resenas/`

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        opacity: 0, y: 30, stagger: 0.06, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      })
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>Reseñas y opiniones de pacientes — Debod Dental Clinic, Argüelles Madrid</title>
        <meta
          name="description"
          content="Opiniones reales de pacientes de Debod Dental Clinic en Argüelles, Madrid. 4,9 estrellas en Google. Lee experiencias sobre implantes, ortodoncia invisible, diseño de sonrisa y rehabilitación oral."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Reseñas de pacientes — Debod Dental Clinic" />
        <meta property="og:description" content="Opiniones reales de pacientes de Debod Dental Clinic en Argüelles, Madrid. 4,9 estrellas en Google." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <JsonLd schema={homeReviewsSchema(reviews)} />
      <JsonLd
        schema={breadcrumbSchema([
          { label: 'Inicio', href: '/' },
          { label: 'Reseñas', href: null },
        ])}
      />

      <PageHero
        subtitle="Opiniones"
        title="Lo que dicen nuestros pacientes"
        description="Más de 190 valoraciones y una media de 4,9 estrellas en Google. Estas son algunas de las experiencias reales de quienes ya confían en Debod Dental Clinic."
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Reseñas', href: null },
          ]}
        />
      </div>

      {/* Aggregate rating banner */}
      <section className="px-6 md:px-12 lg:px-20 pt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-outfit font-bold text-4xl text-charcoal">4,9</span>
          </div>
          <p className="font-jakarta text-slate">
            Valoración media basada en más de 190 reseñas verificadas en Google
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-14 md:py-16 px-6 md:px-12 lg:px-20" aria-label="Reseñas de pacientes">
        <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-all duration-400 border border-charcoal/5 flex flex-col gap-4"
            >
              <Quote size={20} className="text-gold/30 shrink-0" />
              <p className="font-jakarta text-charcoal/80 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>
              <span className="inline-block font-jakarta text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold w-fit">
                {r.treatment}
              </span>
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/40 to-gold/70 flex items-center justify-center">
                    <span className="font-outfit font-bold text-xs text-charcoal">{r.initials}</span>
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-sm text-charcoal">{r.name}</p>
                    <p className="font-jakarta text-xs text-slate/70">{r.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-jakarta font-semibold text-sm text-charcoal border border-charcoal/20 px-6 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Ver todas las reseñas en Google
            <Star size={14} className="text-gold fill-gold" />
          </a>
        </div>
      </section>

      <VideoTestimonials />

      <CtaBand
        headline="¿Quieres ser nuestro próximo caso de éxito?"
        subtext="Reserva tu primera visita diagnóstica y comprueba por qué nos valoran con cinco estrellas."
      />
    </>
  )
}
