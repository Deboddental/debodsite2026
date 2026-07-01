import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import ClinicalExpertise from '../components/ClinicalExpertise'
import Philosophy from '../components/Philosophy'
import Treatments from '../components/Treatments'
import BeforeAfter from '../components/BeforeAfter'
import Reviews from '../components/Reviews'
import VideoTestimonials from '../components/VideoTestimonials'
import TeamSection from '../components/TeamSection'
import FAQ from '../components/FAQ'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { reviews } from '../data/reviews'
import { homeFaqs, homeFaqs_en } from '../data/faqs'
import { homeReviewsSchema } from '../data/seo'
import { useLocale } from '../hooks/useLocale'

const BASE_URL = 'https://deboddentalclinic.com'

export default function Home() {
  const locale = useLocale()
  const en = locale === 'en'
  return (
    <>
      <Helmet>
        <title>{en
          ? 'Debod Dental Clinic — Dental Clinic in Argüelles, Madrid | Honest Dentistry'
          : 'Debod Dental Clinic — Clínica Dental en Argüelles, Madrid | Odontología Honesta'}</title>
        <meta
          name="description"
          content={en
            ? 'Comprehensive dental clinic in Argüelles, Madrid. Specialists in full oral rehabilitation, dental implants, orthodontics and implantology. Honest dentistry with cutting-edge technology. First consultation included.'
            : 'Clínica dental integral en Argüelles, Madrid. Especialistas en rehabilitación oral, implantes, ortodoncia e implantología. Odontología honesta con tecnología de vanguardia. Primera consulta gratuita.'}
        />
        <meta property="og:title" content={en ? 'Debod Dental Clinic — Argüelles, Madrid' : 'Debod Dental Clinic — Argüelles, Madrid'} />
        <meta property="og:description" content={en
          ? 'Boutique dental clinic in Argüelles, Madrid. Full oral rehabilitation, implants and orthodontics with leading specialists.'
          : 'Clínica dental boutique en Argüelles, Madrid. Rehabilitación oral, implantes y ortodoncia con los mejores especialistas.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-home.jpg`} />
      </Helmet>

      <JsonLd schema={homeReviewsSchema(reviews)} />
      <Hero />
      <SectionDivider variant="wave" position="bottom" color="gold" />
      <ClinicalExpertise />
      <SectionDivider variant="wave" position="bottom" color="gold" />
      <Treatments />
      <SectionDivider variant="wave" position="bottom" color="gold" />
      <Philosophy />
      <SectionDivider variant="curve" position="bottom" color="gold" />
      <BeforeAfter />
      <SectionDivider variant="slant" position="bottom" color="gold" />
      <TeamSection />
      <SectionDivider variant="wave" position="bottom" color="gold" />
      <Reviews />
      <SectionDivider variant="curve" position="bottom" color="gold" />
      <VideoTestimonials />
      <FAQ faqs={en ? homeFaqs_en : homeFaqs} />
      <CtaBand
        headline={en ? 'Your first diagnostic visit, included' : 'Tu primera visita diagnóstica, incluida'}
        subtext={en
          ? 'Book with our team of specialists and discover the honest dentistry of Argüelles.'
          : 'Reserva con nuestro equipo de especialistas y descubre la odontología honesta de Argüelles.'}
      />
    </>
  )
}
