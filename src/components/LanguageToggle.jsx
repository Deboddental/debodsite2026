import { Link, useLocation } from 'react-router-dom'
import { Globe } from 'lucide-react'
import { getLocale, getAlternatePath, EN_HOME } from '../utils/locale'

// 🌐 EN / ES segmented toggle. Data-driven via src/utils/locale.js: the inactive
// segment links to that language's version of the current page, falling back to
// the language home/hub when no direct counterpart exists. The active segment is
// inert (a <span>, not a tab stop) per the current-state toggle convention.
export default function LanguageToggle({ scrolled = false, onNavigate }) {
  const { pathname } = useLocation()
  const locale = getLocale(pathname)
  const alt = getAlternatePath(pathname)

  // ES page with no EN counterpart → toggle sends to the EN hub, not a translation
  // of this page. Flag it for assistive tech so "EN" isn't misread as "this page".
  const isFallback = locale === 'es' && alt === EN_HOME && pathname !== '/'

  const wrap = scrolled
    ? 'border-charcoal/15 bg-charcoal/[0.04]'
    : 'border-white/30 bg-black/20'
  const globe = scrolled ? 'text-charcoal/50' : 'text-white/85'
  const idle = scrolled
    ? 'text-charcoal/70 hover:text-charcoal'
    : 'text-white/90 hover:text-white'
  const ringOffset = scrolled ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-charcoal'

  const base = 'px-2 py-0.5 rounded-full text-xs font-jakarta font-semibold transition-colors duration-200'
  const linkCls = `${base} ${idle} focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 ${ringOffset}`

  const segment = (lang, label, ariaLabel) =>
    locale === lang ? (
      <span key={lang} className={`${base} bg-gold text-charcoal`} aria-current="page">
        {label}
      </span>
    ) : (
      <Link key={lang} to={alt} onClick={onNavigate} aria-label={ariaLabel} className={linkCls}>
        {label}
      </Link>
    )

  return (
    <div className={`inline-flex items-center gap-1 rounded-full border pl-2 pr-1 py-1 ${wrap}`}>
      <Globe size={13} className={globe} aria-hidden="true" />
      {segment(
        'en',
        'EN',
        isFallback ? 'English homepage (this page is only available in Spanish)' : 'English version'
      )}
      {segment('es', 'ES', 'Versión en español')}
    </div>
  )
}
