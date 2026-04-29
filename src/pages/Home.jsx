import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ClinicalExpertise from '../components/ClinicalExpertise'
import Philosophy from '../components/Philosophy'
import Treatments from '../components/Treatments'
import BeforeAfter from '../components/BeforeAfter'
import Reviews from '../components/Reviews'
import JsonLd from '../components/ui/JsonLd'
import { reviews } from '../data/reviews'
import { homeReviewsSchema } from '../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Debod Dental Clinic — Clínica Dental en Argüelles, Madrid | Odontología Honesta</title>
        <meta
          name="description"
          content="Clínica dental integral en Argüelles, Madrid. Especialistas en rehabilitación oral, implantes, ortodoncia e implantología. Odontología honesta con tecnología de vanguardia. Primera consulta gratuita."
        />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta property="og:title" content="Debod Dental Clinic — Argüelles, Madrid" />
        <meta property="og:description" content="Clínica dental boutique en Argüelles, Madrid. Rehabilitación oral, implantes y ortodoncia con los mejores especialistas." />
        <meta property="og:url" content={`${BASE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-home.jpg`} />
      </Helmet>

      <JsonLd schema={homeReviewsSchema(reviews)} />
      <Hero />
      <ClinicalExpertise />
      <Treatments />
      <Philosophy />
      <BeforeAfter />
      <Reviews />
    </>
  )
}
