import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import DentalLab from './pages/DentalLab'
import Financiacion from './pages/Financiacion'
import Ubicaciones from './pages/Ubicaciones'
import Citas from './pages/Citas'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import Tratamientos from './pages/Tratamientos'
import TreatmentPage from './pages/treatments/TreatmentPage'
import BlogIndex from './pages/blog/BlogIndex'
import BlogPost from './pages/blog/BlogPost'
import TeamPage from './pages/team/TeamPage'
import DoctorProfile from './pages/team/DoctorProfile'
import Resenas from './pages/Resenas'
import BarrioPage from './pages/barrios/BarrioPage'
import Tecnologia from './pages/Tecnologia'
import AntesDespues from './pages/AntesDespues'
import Urgencias from './pages/Urgencias'
import EnLandingPage from './pages/en/EnLandingPage'
import DentalTourismPage from './pages/DentalTourismPage'
import LpLayout from './layouts/LpLayout'
import CampaignLanding from './pages/lp/CampaignLanding'
import { campaignLandings } from './data/campaignLandings'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* Google Ads campaign landings — stripped LpLayout (no site nav), noindex. */}
    <Route element={<LpLayout />}>
      {campaignLandings.map((l) => (
        <Route key={l.slug} path={`/lp/${l.slug}/`} element={<CampaignLanding landing={l} />} />
      ))}
    </Route>

    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      {/* Static pages */}
      <Route path="nosotros/" element={<Nosotros />} />
      <Route path="dental-lab/" element={<DentalLab />} />
      <Route path="financiacion/" element={<Financiacion />} />
      <Route path="politica-de-privacidad/" element={<PoliticaPrivacidad />} />
      <Route path="contacto/" element={<Contacto />} />

      {/* Reviews */}
      <Route path="resenas/" element={<Resenas />} />

      {/* Tech + before/after */}
      <Route path="tecnologia/" element={<Tecnologia />} />
      <Route path="antes-despues/" element={<AntesDespues />} />

      {/* Dental emergencies */}
      <Route path="urgencias-dentales-arguelles-madrid/" element={<Urgencias />} />

      {/* ── English mirror — full bilingual /en/ tree (reuses the same components,
          which read locale from the route via useLocale) ───────────────────── */}
      <Route path="en">
        <Route index element={<Home />} />
        <Route path="about/" element={<Nosotros />} />
        <Route path="dental-lab/" element={<DentalLab />} />
        <Route path="financing/" element={<Financiacion />} />
        <Route path="privacy-policy/" element={<PoliticaPrivacidad />} />
        <Route path="contact/" element={<Contacto />} />
        <Route path="reviews/" element={<Resenas />} />
        <Route path="technology/" element={<Tecnologia />} />
        <Route path="before-after/" element={<AntesDespues />} />
        <Route path="dental-emergency-madrid/" element={<Urgencias />} />
        <Route path="locations/" element={<Ubicaciones />} />
        <Route path="locations/appointments-arguelles-madrid/" element={<Citas />} />
        {/* EN barrio slugs */}
        <Route path="dentist-moncloa-madrid/" element={<BarrioPage />} />
        <Route path="dentist-chamberi-madrid/" element={<BarrioPage />} />
        <Route path="dentist-centro-madrid/" element={<BarrioPage />} />
        <Route path="dentist-plaza-espana-madrid/" element={<BarrioPage />} />
        {/* treatments (hub + detail) / blog / team */}
        <Route path="treatments/" element={<Tratamientos />} />
        <Route path="treatments/:treatmentSlug/" element={<TreatmentPage />} />
        <Route path="blog/" element={<BlogIndex />} />
        <Route path="blog/:category/:postSlug/" element={<BlogPost />} />
        <Route path="team/" element={<TeamPage />} />
        <Route path="team/:doctorSlug/" element={<DoctorProfile />} />
        {/* Dental tourism (international patients) — rich landings under /en/ */}
        <Route path="dental-tourism-madrid/" element={<DentalTourismPage />} />
        <Route path="dental-implants-madrid/" element={<DentalTourismPage />} />
        <Route path="all-on-4-madrid/" element={<DentalTourismPage />} />
        <Route path="all-on-6-madrid/" element={<DentalTourismPage />} />
        <Route path="cosmetic-dentistry-madrid/" element={<DentalTourismPage />} />
        <Route path="porcelain-veneers-madrid/" element={<DentalTourismPage />} />
        <Route path="veneers-smile-design-madrid/" element={<DentalTourismPage />} />
        <Route path="english-speaking-dentist-madrid/" element={<DentalTourismPage />} />
        {/* curated EN landings catch-all — keep LAST so explicit paths win */}
        <Route path=":enSlug/" element={<EnLandingPage />} />
      </Route>

      {/* Locations */}
      <Route path="ubicaciones/" element={<Ubicaciones />} />
      <Route path="ubicaciones/citas-arguelles-madrid/" element={<Citas />} />

      {/* Local SEO — barrio landings (root-level slugs) */}
      <Route path="dentista-moncloa-madrid/" element={<BarrioPage />} />
      <Route path="dentista-chamberi-madrid/" element={<BarrioPage />} />
      <Route path="dentista-centro-madrid/" element={<BarrioPage />} />
      <Route path="dentista-plaza-espana-madrid/" element={<BarrioPage />} />

      {/* Treatments (hub + detail) — the sole content type; Services was removed
          as a full duplicate (same specialties, same info, two URLs). */}
      <Route path="tratamientos/" element={<Tratamientos />} />
      <Route path="tratamientos/:treatmentSlug/" element={<TreatmentPage />} />

      {/* Blog */}
      <Route path="blog/" element={<BlogIndex />} />
      <Route path="blog/:category/:postSlug/" element={<BlogPost />} />

      {/* Team */}
      <Route path="equipo/" element={<TeamPage />} />
      <Route path="equipo/:doctorSlug/" element={<DoctorProfile />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
    </>
  )
)
