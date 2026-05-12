import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { captureTrackingData } from '@/utils/tracking'

function TrackingInit() {
  const { pathname } = useLocation()
  useEffect(() => { captureTrackingData() }, [pathname])
  return null
}

export default function RootLayout() {
  return (
    <>
      <TrackingInit />
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
      <WhatsAppWidget />
    </>
  )
}
