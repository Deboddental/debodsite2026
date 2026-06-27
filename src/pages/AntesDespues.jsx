import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { breadcrumbSchema } from '../data/seo'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

const BASE_URL = 'https://deboddentalclinic.com'

export default function AntesDespues() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Before & After Cases — Real Results | Debod Dental Clinic, Madrid' : 'Casos Antes y Después — Resultados Reales | Debod Dental Clinic, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Real before-and-after cases at Debod Dental Clinic in Argüelles, Madrid. Smile design, porcelain veneers and full oral rehabilitation. Genuine patient transformations, untouched.' : 'Casos reales antes y después de Debod Dental Clinic en Argüelles, Madrid. Diseño de sonrisa, carillas de porcelana y rehabilitación oral. Transformaciones de pacientes reales, sin retoques.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Before & After — Real Cases | Debod Dental Clinic' : 'Antes y Después — Casos reales | Debod Dental Clinic'} />
        <meta property="og:description" content={locale === 'en' ? 'Genuine patient transformations: smile design, veneers and full oral rehabilitation in Argüelles, Madrid.' : 'Transformaciones reales de pacientes: diseño de sonrisa, carillas y rehabilitación oral en Argüelles, Madrid.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd
        schema={breadcrumbSchema([
          { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
          { label: locale === 'en' ? 'Before & After' : 'Antes y Después', href: null },
        ])}
      />

      <PageHero
        subtitle={locale === 'en' ? 'Real results' : 'Resultados reales'}
        title={locale === 'en' ? 'Before & After' : 'Antes y Después'}
        description={locale === 'en' ? 'Every smile is unique and every transformation is measured to the millimetre. These are real cases of patients treated at Debod Dental Clinic — no filters, no retouching.' : 'Cada sonrisa es única y cada transformación, medida al milímetro. Estos son casos reales de pacientes tratados en Debod Dental Clinic — sin filtros, sin retoques.'}
        imageUrl="/Images/clinica/dsc00141.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Before & After' : 'Antes y Después', href: null },
          ]}
        />
      </div>

      <BeforeAfter />

      <CtaBand
        headline={locale === 'en' ? 'Want a transformation like this?' : '¿Quieres una transformación así?'}
        subtext={locale === 'en' ? 'Book your first diagnostic visit and we will design your new smile before we begin.' : 'Reserva tu primera visita diagnóstica y diseñamos tu nueva sonrisa antes de empezar.'}
      />
    </>
  )
}
