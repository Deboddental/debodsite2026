import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import { treatments } from '../../data/treatments'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import RelatedGrid from '../../components/ui/RelatedGrid'
import CtaBand from '../../components/ui/CtaBand'
import JsonLd from '../../components/ui/JsonLd'
import { treatmentPageSchema } from '../../data/seo'
import { services } from '../../data/services'

const BASE_URL = 'https://deboddentalclinic.com'

export default function TreatmentPage() {
  const { treatmentSlug } = useParams()
  const treatment = treatments.find((t) => t.slug === treatmentSlug)

  if (!treatment) return <Navigate to="/servicios/" replace />

  const canonical = `${BASE_URL}/tratamientos/${treatment.slug}/`

  // Find parent service for breadcrumb
  const parentService = services.find((s) => s.slug === treatment.specialty)

  return (
    <>
      <Helmet>
        <title>{treatment.metaTitle}</title>
        <meta name="description" content={treatment.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={treatment.metaTitle} />
        <meta property="og:description" content={treatment.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {treatment.heroImageUrl && (
          <meta property="og:image" content={treatment.heroImageUrl} />
        )}
      </Helmet>

      <JsonLd schema={treatmentPageSchema(treatment)} />

      <PageHero
        subtitle={treatment.subtitle || 'Tratamiento'}
        title={treatment.title}
        description={treatment.heroText}
        imageUrl={treatment.heroImageUrl}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios/' },
            parentService
              ? { label: parentService.title, href: `/${parentService.slug}/` }
              : { label: treatment.subtitle || 'Especialidad', href: '/servicios/' },
            { label: treatment.title, href: null },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <MarkdownBody>{treatment.bodyMarkdown}</MarkdownBody>
      </div>

      {treatment.benefits?.length > 0 && (
        <section className="py-16 px-4 bg-charcoal">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-pearl mb-10 text-center">
              Ventajas de este tratamiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treatment.benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-colors duration-300"
                >
                  <CheckCircle size={28} className="text-gold mb-4" />
                  <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {treatment.relatedTreatments?.length > 0 && (
        <RelatedGrid items={treatment.relatedTreatments} />
      )}

      <CtaBand
        headline="¿Tienes preguntas sobre este tratamiento?"
        subtext="Nuestro equipo te orientará sin compromiso. Agenda tu consulta gratuita hoy."
      />
    </>
  )
}
