import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import DentalLab from './pages/DentalLab'
import Financiacion from './pages/Financiacion'
import Ubicaciones from './pages/Ubicaciones'
import Citas from './pages/Citas'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import Servicios from './pages/Servicios'
import NotFound from './pages/NotFound'
import ServicePage from './pages/services/ServicePage'
import TreatmentPage from './pages/treatments/TreatmentPage'
import BlogIndex from './pages/blog/BlogIndex'
import BlogPost from './pages/blog/BlogPost'
import TeamPage from './pages/team/TeamPage'
import DoctorProfile from './pages/team/DoctorProfile'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      {/* Static pages */}
      <Route path="nosotros/" element={<Nosotros />} />
      <Route path="dental-lab/" element={<DentalLab />} />
      <Route path="financiacion/" element={<Financiacion />} />
      <Route path="politica-de-privacidad/" element={<PoliticaPrivacidad />} />

      {/* Locations */}
      <Route path="ubicaciones/" element={<Ubicaciones />} />
      <Route path="ubicaciones/citas-arguelles-madrid/" element={<Citas />} />

      {/* Services index + detail */}
      <Route path="servicios/" element={<Servicios />} />
      <Route path="servicios/:specialtySlug/" element={<ServicePage />} />

      {/* Root-level service slugs (8 specialty pages live at /:slug/) */}
      <Route path="dentista-general-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="dentista-cosmetico-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="dentista-de-implantes-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="endodoncista-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="odontopediatra-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="ortodoncista-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="periodoncista-arguelles-madrid-espana/" element={<ServicePage />} />
      <Route path="cirujano-oral-arguelles-madrid-espana/" element={<ServicePage />} />

      {/* Treatments */}
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
  )
)
