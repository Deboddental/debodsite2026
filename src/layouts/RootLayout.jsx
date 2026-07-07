import { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/Navbar'
import Hreflang from '@/components/Hreflang'
import Footer from '@/components/Footer'
import ConsentBanner from '@/components/ConsentBanner'
import LoadingScreen from '@/components/LoadingScreen'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { captureTrackingData } from '@/utils/tracking'
import { getLocale } from '@/utils/locale'

function TrackingInit() {
  const { pathname } = useLocation()
  useEffect(() => { captureTrackingData() }, [pathname])
  return null
}

// Keep <html lang> in sync with the route's locale on client-side navigation
// (the toggle makes EN↔ES crossing common; index.html only sets the es default).
function LangSync() {
  const { pathname } = useLocation()
  useEffect(() => { document.documentElement.lang = getLocale(pathname) }, [pathname])
  return null
}

// Single source of truth for og:locale, keyed off the route. Centralising it here
// (instead of a global default + per-page override) guarantees exactly ONE
// og:locale tag — competing Helmet defaults don't reliably dedupe by property.
function LocaleMeta() {
  const { pathname } = useLocation()
  const isEn = getLocale(pathname) === 'en'
  return (
    <Helmet>
      <meta property="og:locale" content={isEn ? 'en_GB' : 'es_ES'} />
      {isEn && <meta property="og:locale:alternate" content="es_ES" />}
    </Helmet>
  )
}

export default function RootLayout() {
  const [ready, setReady] = useState(false)
  // Keep the brand intro but cut the forced delay from 2s → 0.9s: two seconds of a
  // blocking splash on every first load hurts both conversion and LCP.
  useEffect(() => { const t = setTimeout(() => setReady(true), 900); return () => clearTimeout(t) }, [])

  return (
    <>
      {!ready && <LoadingScreen />}
      <TrackingInit />
      <LangSync />
      <LocaleMeta />
      <Hreflang />
      <Navbar />
      <ScrollRestoration />
      {/*
        pt-20 (80px) clears the fixed navbar on all inner pages.
        Hero.jsx uses -mt-20 to cancel this and fill the full viewport.
      */}
      <main id="main" className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
