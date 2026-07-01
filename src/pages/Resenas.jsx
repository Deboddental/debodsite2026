import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import VideoTestimonials from '../components/VideoTestimonials'
import ElfsightReviews from '../components/ElfsightReviews'
import JsonLd from '../components/ui/JsonLd'
import { reviews, ratingSummary } from '../data/reviews'
import { homeReviewsSchema, breadcrumbSchema } from '../data/seo'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

export default function Resenas() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Patient reviews and testimonials — Debod Dental Clinic, Argüelles Madrid' : 'Reseñas y opiniones de pacientes — Debod Dental Clinic, Argüelles Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Real patient reviews of Debod Dental Clinic in Argüelles, Madrid. 4.9 stars on Google. Read experiences about dental implants, invisible orthodontics, smile design and full oral rehabilitation.' : 'Opiniones reales de pacientes de Debod Dental Clinic en Argüelles, Madrid. 4,9 estrellas en Google. Lee experiencias sobre implantes, ortodoncia invisible, diseño de sonrisa y rehabilitación oral.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Patient reviews — Debod Dental Clinic' : 'Reseñas de pacientes — Debod Dental Clinic'} />
        <meta property="og:description" content={locale === 'en' ? 'Real patient reviews of Debod Dental Clinic in Argüelles, Madrid. 4.9 stars on Google.' : 'Opiniones reales de pacientes de Debod Dental Clinic en Argüelles, Madrid. 4,9 estrellas en Google.'} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Review JSON-LD (curado, prerenderizado para SEO; las reseñas visibles
          vienen del widget de Google en vivo más abajo). */}
      <JsonLd schema={homeReviewsSchema(reviews)} />
      <JsonLd
        schema={breadcrumbSchema([
          { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
          { label: locale === 'en' ? 'Reviews' : 'Reseñas', href: null },
        ])}
      />

      <PageHero
        subtitle={locale === 'en' ? 'Reviews' : 'Opiniones'}
        title={locale === 'en' ? 'What our patients say' : 'Lo que dicen nuestros pacientes'}
        description={locale === 'en' ? `More than ${ratingSummary.reviewCount} genuine reviews with an average of ${ratingSummary.ratingValue} stars on Google. These are the experiences of those who already trust Debod Dental Clinic.` : `Más de ${ratingSummary.reviewCount} valoraciones reales con una media de 4,9 estrellas en Google. Estas son las experiencias de quienes ya confían en Debod Dental Clinic.`}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Reviews' : 'Reseñas', href: null },
          ]}
        />
      </div>

      {/* Reseñas reales en vivo desde Google (widget Elfsight) */}
      <section className="py-14 md:py-16 px-6 md:px-12 lg:px-20" aria-label={locale === 'en' ? 'Google reviews' : 'Reseñas de Google'}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Google Reviews
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
              {locale === 'en' ? 'Reviews from our patients on Google' : 'Opiniones de nuestros pacientes en Google'}
            </h2>
          </div>
          <ElfsightReviews />
        </div>
      </section>

      <VideoTestimonials />

      <CtaBand
        headline={locale === 'en' ? 'Would you like to be our next success story?' : '¿Quieres ser nuestro próximo caso de éxito?'}
        subtext={locale === 'en' ? 'Book your first diagnostic visit and see why our patients rate us five stars.' : 'Reserva tu primera visita diagnóstica y comprueba por qué nos valoran con cinco estrellas.'}
      />
    </>
  )
}
