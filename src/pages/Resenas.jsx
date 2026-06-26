import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import VideoTestimonials from '../components/VideoTestimonials'
import ElfsightReviews from '../components/ElfsightReviews'
import JsonLd from '../components/ui/JsonLd'
import { reviews } from '../data/reviews'
import { homeReviewsSchema, breadcrumbSchema } from '../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function Resenas() {
  const canonical = `${BASE_URL}/resenas/`

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

      {/* Review JSON-LD (curado, prerenderizado para SEO; las reseñas visibles
          vienen del widget de Google en vivo más abajo). */}
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
        description="Cientos de valoraciones reales con una media de 4,9 estrellas en Google. Estas son las experiencias de quienes ya confían en Debod Dental Clinic."
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Reseñas', href: null },
          ]}
        />
      </div>

      {/* Reseñas reales en vivo desde Google (widget Elfsight) */}
      <section className="py-14 md:py-16 px-6 md:px-12 lg:px-20" aria-label="Reseñas de Google">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Google Reviews
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
              Opiniones de nuestros pacientes en Google
            </h2>
          </div>
          <ElfsightReviews />
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
