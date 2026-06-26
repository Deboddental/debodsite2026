import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { breadcrumbSchema } from '../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function AntesDespues() {
  const canonical = `${BASE_URL}/antes-despues/`
  return (
    <>
      <Helmet>
        <title>Casos Antes y Después — Resultados Reales | Debod Dental Clinic, Madrid</title>
        <meta
          name="description"
          content="Casos reales antes y después de Debod Dental Clinic en Argüelles, Madrid. Diseño de sonrisa, carillas de porcelana y rehabilitación oral. Transformaciones de pacientes reales, sin retoques."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Antes y Después — Casos reales | Debod Dental Clinic" />
        <meta property="og:description" content="Transformaciones reales de pacientes: diseño de sonrisa, carillas y rehabilitación oral en Argüelles, Madrid." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd
        schema={breadcrumbSchema([
          { label: 'Inicio', href: '/' },
          { label: 'Antes y Después', href: null },
        ])}
      />

      <PageHero
        subtitle="Resultados reales"
        title="Antes y Después"
        description="Cada sonrisa es única y cada transformación, medida al milímetro. Estos son casos reales de pacientes tratados en Debod Dental Clinic — sin filtros, sin retoques."
        imageUrl="/Images/clinica/dsc00141.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Antes y Después', href: null },
          ]}
        />
      </div>

      <BeforeAfter />

      <CtaBand
        headline="¿Quieres una transformación así?"
        subtext="Reserva tu primera visita diagnóstica y diseñamos tu nueva sonrisa antes de empezar."
      />
    </>
  )
}
