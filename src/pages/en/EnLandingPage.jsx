import { useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getEnLanding } from '../../data/enLandings'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import MarkdownBody from '../../components/ui/MarkdownBody'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { enLandingSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function EnLandingPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/en\/|\/$/g, '')
  const landing = getEnLanding(slug)

  if (!landing) return <Navigate to="/en/english-speaking-dentist-madrid/" replace />

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{landing.metaTitle}</title>
        <meta name="description" content={landing.metaDescription} />
        <meta property="og:title" content={landing.metaTitle} />
        <meta property="og:description" content={landing.metaDescription} />
        <meta property="og:type" content="website" />
        {/* og:locale is set centrally by RootLayout's LocaleMeta (en_GB on /en/ pages) */}
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd schema={enLandingSchema(landing)} />

      <PageHero
        subtitle="Dental clinic in Madrid"
        title={landing.title}
        description={landing.heroText}
        imageUrl="/Images/clinica/dsc00131.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: landing.title, href: null },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <MarkdownBody>{landing.intro}</MarkdownBody>
      </div>

      {landing.faqs?.length > 0 && (
        <FAQ
          faqs={landing.faqs}
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Common questions from our international patients."
          includeSchema
        />
      )}

      <CtaBand
        headline="Book your visit in central Madrid"
        subtext="Get a first diagnostic visit with our English-speaking team — no obligation."
        ctaLabel="Book an appointment"
        ctaTo="/contacto/"
      />
    </>
  )
}
