import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import ConsentBanner from '@/components/ConsentBanner'
import { captureTrackingData } from '@/utils/tracking'

// Minimal layout for /lp/* Google Ads landing pages: no site nav (removes exit
// paths — CRO), no global WhatsApp float / mobile action bar (each landing has
// its own pinned CTA), just a logo + tap-to-call header and a slim NAP footer.
// Tracking (gclid/fbclid/UTM) still runs so paid clicks are attributed.
export default function LpLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.lang = 'es'
    captureTrackingData()
  }, [pathname])

  return (
    <>
      <ScrollRestoration />
      <header className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <img src="/logo-light.webp" alt="Debod Dental Clinic — Argüelles, Madrid" width="130" height="52" className="h-8 w-auto object-contain" />
          <a href="tel:+34914476225" className="flex items-center gap-2 bg-gold text-charcoal font-outfit font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors">
            <Phone size={15} /> <span className="hidden sm:inline">Llamar</span> 914 47 62 25
          </a>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-pearl/60 py-8 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center font-jakarta text-xs space-y-1">
          <p className="text-pearl/80 font-semibold">Debod Dental Clinic · Argüelles, Madrid</p>
          <p>C. de Ferraz, 24, 28008 Madrid · <a href="tel:+34914476225" className="hover:text-gold">914 47 62 25</a> · Lunes a Viernes 9:00–20:00</p>
          <p><a href="/politica-de-privacidad/" className="hover:text-gold">Política de Privacidad</a></p>
        </div>
      </footer>

      <ConsentBanner />
    </>
  )
}
