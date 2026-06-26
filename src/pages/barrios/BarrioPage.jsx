import { useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin } from 'lucide-react'
import { getBarrio } from '../../data/barrios'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { barrioPageSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function BarrioPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/|\/$/g, '')
  const barrio = getBarrio(slug)

  if (!barrio) return <Navigate to="/ubicaciones/" replace />

  const canonical = `${BASE_URL}/${barrio.slug}/`

  return (
    <>
      <Helmet>
        <title>{barrio.metaTitle}</title>
        <meta name="description" content={barrio.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={barrio.metaTitle} />
        <meta property="og:description" content={barrio.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd schema={barrioPageSchema(barrio)} />

      <PageHero
        subtitle="Tu dentista en"
        title={barrio.title}
        description={barrio.heroText}
        imageUrl="/Images/clinica/dsc00131.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Ubicaciones', href: '/ubicaciones/' },
            { label: barrio.barrio, href: null },
          ]}
        />
      </div>

      {/* Distancia / proximidad */}
      {barrio.distancia && (
        <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8">
          <div className="inline-flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-2xl px-5 py-3">
            <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
            <p className="font-jakarta text-charcoal/80 text-sm">{barrio.distancia}</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{barrio.intro}</MarkdownBody>
      </div>

      {barrio.faqs?.length > 0 && (
        <FAQ
          faqs={barrio.faqs}
          subtitle={`Dudas habituales de los pacientes de ${barrio.barrio}.`}
        />
      )}

      <CtaBand
        headline={`¿Buscas dentista en ${barrio.barrio}?`}
        subtext="Reserva tu primera visita diagnóstica en Debod Dental Clinic, a un paso de tu barrio."
      />
    </>
  )
}
