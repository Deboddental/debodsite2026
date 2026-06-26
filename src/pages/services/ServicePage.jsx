import { useParams, useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { services } from '../../data/services'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import RelatedGrid from '../../components/ui/RelatedGrid'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { servicePageSchema } from '../../data/seo'
import { serviceFaqs } from '../../data/faqs'

const BASE_URL = 'https://deboddentalclinic.com'

export default function ServicePage() {
  const params = useParams()
  const { pathname } = useLocation()
  // params are empty for static root-level routes — fall back to pathname
  const slug = params.specialtySlug || params.serviceSlug
    || pathname.replace(/^\/|\/$/g, '')
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/servicios/" replace />

  const canonical = `${BASE_URL}/${service.slug}/`
  const faqs = serviceFaqs[service.slug]

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonical} />
        {service.enAlternate && <link rel="alternate" hrefLang="es" href={canonical} />}
        {service.enAlternate && <link rel="alternate" hrefLang="en" href={`${BASE_URL}${service.enAlternate}`} />}
        {service.enAlternate && <link rel="alternate" hrefLang="x-default" href={canonical} />}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {service.heroImageUrl && (
          <meta property="og:image" content={service.heroImageUrl} />
        )}
      </Helmet>

      <JsonLd schema={servicePageSchema(service)} />

      <PageHero
        subtitle="Especialidad"
        title={service.title}
        description={service.heroText}
        imageUrl={service.heroImageUrl}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios/' },
            { label: service.title, href: null },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <MarkdownBody>{service.bodyMarkdown}</MarkdownBody>
      </div>

      {service.relatedTreatments?.length > 0 && (
        <RelatedGrid
          items={service.relatedTreatments}
          title="Tratamientos disponibles"
        />
      )}

      {faqs?.length > 0 && (
        <FAQ
          faqs={faqs}
          subtitle={`Dudas habituales sobre ${service.subtitle?.toLowerCase() || service.title.toLowerCase()} en Argüelles, Madrid.`}
        />
      )}

      <CtaBand
        headline="Tu salud dental merece lo mejor"
        subtext="Reserva una consulta con nuestros especialistas y descubre el enfoque de la odontología honesta."
      />
    </>
  )
}
