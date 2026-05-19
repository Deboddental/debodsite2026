import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClinicalExpertise from './components/ClinicalExpertise'
import Philosophy from './components/Philosophy'
import Treatments from './components/Treatments'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <ClinicalExpertise />
        <Treatments />
        <Philosophy />
        <Reviews />
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  )
}
