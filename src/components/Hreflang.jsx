import { useLocation, useMatches } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getHreflangPair } from '../utils/locale'
import { SITE_ORIGIN } from '../utils/site.js'

// RootLayout owns canonical, alternate and og:url tags for public pages.
export default function Hreflang() {
  const { pathname } = useLocation()
  const matches = useMatches()

  if (matches.some(({ handle }) => handle?.notFound)) return null

  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  const self = `${SITE_ORIGIN}${path}`
  const { es, en } = getHreflangPair(path)

  return (
    <Helmet>
      <link rel="canonical" href={self} data-page-url="" />
      <meta property="og:url" content={self} data-page-url="" />
      {es && en && [
        <link key="es" rel="alternate" hrefLang="es" href={`${SITE_ORIGIN}${es}`} data-page-url="" />,
        <link key="en" rel="alternate" hrefLang="en" href={`${SITE_ORIGIN}${en}`} data-page-url="" />,
        <link key="x-default" rel="alternate" hrefLang="x-default" href={`${SITE_ORIGIN}${es}`} data-page-url="" />,
      ]}
    </Helmet>
  )
}
