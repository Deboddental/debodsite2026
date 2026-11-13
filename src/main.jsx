import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { router } from './router'

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || []
}

// React 19 recreates route metadata when mounting the SPA. Remove the
// prerendered copies so client navigation only exposes the current route.
document.head.querySelectorAll('[data-page-url]').forEach((tag) => tag.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
