import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function RootLayout() {
  return (
    <>
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
