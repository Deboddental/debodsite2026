import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const { pathname } = useLocation()
  const isEn = pathname.startsWith('/en/')
  const t = isEn
    ? {
        title: 'Page not found — Debod Dental Clinic',
        desc: 'The page you are looking for does not exist or has been moved. Visit Debod Dental Clinic in Argüelles, Madrid.',
        ogTitle: 'Page not found — Debod Dental Clinic',
        ogDesc: 'The page you are looking for does not exist or has been moved. Dental clinic in Argüelles, Madrid.',
        h1: 'Page not found',
        body: 'The page you are looking for does not exist or has been moved. Head to the homepage or contact us directly.',
        home: 'Go to homepage',
        back: 'Go back',
        explore: 'Where to look next:',
        links: [
          { to: '/tratamientos/', label: 'Treatments' },
          { to: '/en/about/', label: 'About the clinic' },
          { to: '/en/contact/', label: 'Contact & booking' },
          { to: '/sitemap.xml', label: 'Site map (sitemap.xml)' },
          { to: '/llms.txt', label: 'Machine-readable guide (llms.txt)' },
        ],
      }
    : {
        title: 'Página no encontrada — Debod Dental Clinic',
        desc: 'La página que buscas no existe o ha sido movida. Visita la clínica dental Debod Dental Clinic en Argüelles, Madrid.',
        ogTitle: 'Página no encontrada — Debod Dental Clinic',
        ogDesc: 'La página que buscas no existe o ha sido movida. Clínica dental en Argüelles, Madrid.',
        h1: 'Página no encontrada',
        body: 'La página que buscas no existe o ha sido movida. Navega al inicio o contáctanos directamente.',
        home: 'Ir al inicio',
        back: 'Volver atrás',
        explore: 'Dónde buscar a continuación:',
        links: [
          { to: '/tratamientos/', label: 'Tratamientos' },
          { to: '/nosotros/', label: 'Sobre la clínica' },
          { to: '/contacto/', label: 'Contacto y cita' },
          { to: '/sitemap.xml', label: 'Mapa del sitio (sitemap.xml)' },
          { to: '/llms.txt', label: 'Guía legible por máquinas (llms.txt)' },
        ],
      }

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDesc} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="font-cormorant text-[8rem] leading-none font-semibold text-gold/20 select-none mb-4">
            404
          </div>
          <h1 className="font-cormorant text-4xl font-semibold text-pearl mb-4">
            {t.h1}
          </h1>
          <p className="font-jakarta text-pearl/60 text-lg mb-6 leading-relaxed">
            {t.body}
          </p>
          <p className="font-jakarta text-pearl/50 text-sm mb-3">
            {t.explore}
          </p>
          <ul className="flex flex-col items-center gap-2 mb-8">
            {t.links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-gold hover:text-gold-light underline underline-offset-4 font-jakarta text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={isEn ? '/en/' : '/'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal rounded-full font-outfit font-semibold text-sm hover:bg-gold-light transition-colors duration-300"
            >
              <Home size={16} />
              {t.home}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-pearl rounded-full font-outfit font-semibold text-sm hover:bg-white/20 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              {t.back}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
