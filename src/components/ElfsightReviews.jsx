import { useEffect } from 'react'

// Elfsight Google Reviews widget. Loads the platform script only where this
// component is used (not site-wide) and renders all live Google reviews into
// the target div. The widget is client-side, so its content is not prerendered
// — the curated reviews + Review JSON-LD on /resenas/ cover SEO.
const SCRIPT_SRC = 'https://elfsightcdn.com/platform.js'

export default function ElfsightReviews() {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <div
      className="elfsight-app-644049a1-f1db-4f2f-a5fe-baaffb3a901e"
      data-elfsight-app-lazy
    />
  )
}
