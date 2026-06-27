import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getHreflangPair, getLocale, ES_HOME } from '../utils/locale'

const BASE_URL = 'https://deboddentalclinic.com'

// Single source of canonical + reciprocal hreflang for EVERY page. Rendered once
// in RootLayout — pages must NOT emit their own canonical/hreflang/og:url.
// x-default points at the Spanish version (the site's primary locale).
export default function Hreflang() {
  const { pathname } = useLocation()
  const { es, en } = getHreflangPair(pathname)
  const selfPath = getLocale(pathname) === 'en' ? en : es
  const self = `${BASE_URL}${selfPath || pathname}`
  const xDefault = `${BASE_URL}${es || ES_HOME}`

  return (
    <Helmet>
      <link rel="canonical" href={self} />
      <meta property="og:url" content={self} />
      {es && <link rel="alternate" hrefLang="es" href={`${BASE_URL}${es}`} />}
      {en && <link rel="alternate" hrefLang="en" href={`${BASE_URL}${en}`} />}
      <link rel="alternate" hrefLang="x-default" href={xDefault} />
    </Helmet>
  )
}
