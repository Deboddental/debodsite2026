import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import { useLocale } from '../hooks/useLocale'
import { t } from '../i18n/ui'
import { serviceSlugEn, staticPairs } from '../i18n/slugs'

const SERVICES = [
  { es: 'Dentista General', en: 'General Dentistry', slug: 'dentista-general-arguelles-madrid-espana' },
  { es: 'Odontología Estética', en: 'Cosmetic Dentistry', slug: 'dentista-cosmetico-arguelles-madrid-espana' },
  { es: 'Implantes Dentales', en: 'Dental Implants', slug: 'dentista-de-implantes-arguelles-madrid-espana' },
  { es: 'Endodoncia', en: 'Root Canal (Endodontics)', slug: 'endodoncista-arguelles-madrid-espana' },
  { es: 'Odontopediatría', en: 'Paediatric Dentistry', slug: 'odontopediatra-arguelles-madrid-espana' },
  { es: 'Ortodoncia', en: 'Orthodontics', slug: 'ortodoncista-arguelles-madrid-espana' },
  { es: 'Periodoncia', en: 'Periodontics', slug: 'periodoncista-arguelles-madrid-espana' },
  { es: 'Cirugía Oral', en: 'Oral Surgery', slug: 'cirujano-oral-arguelles-madrid-espana' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navRef = useRef(null)
  const locale = useLocale()

  // Locale-aware hrefs: chrome paths via the static pair map, services via slug map.
  const lp = (esPath) => (locale === 'en' ? staticPairs[esPath] || esPath : esPath)
  const serviceHref = (slug) => (locale === 'en' ? `/en/${serviceSlugEn[slug]}/` : `/${slug}/`)
  const serviceLabel = (s) => (locale === 'en' ? s.en : s.es)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY
      document.body.dataset.scrollY = String(scrollY)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) window.scrollTo(0, scrollY)
      delete document.body.dataset.scrollY
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        ref={navRef}
        role="navigation"
        aria-label={locale === 'en' ? 'Main navigation' : 'Navegación principal'}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl shadow-black/10 text-charcoal'
            : 'bg-transparent text-white border border-white/20'
          }
          rounded-full px-5 py-3 flex items-center gap-6
          w-[calc(100%-2rem)] max-w-5xl
        `}
      >
        {/* Logo */}
        <Link to={lp('/')} className="shrink-0 mr-auto">
          <img
            src={scrolled ? '/logo-dark.webp' : '/logo-light.webp'}
            alt="Debod Dental Clinic — Clínica dental en Argüelles, Madrid"
            width="120"
            height="48"
            className="h-8 w-auto object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Links (full bar at lg+; md/tablet collapses to the hamburger to avoid crowding) */}
        <div className="hidden lg:flex items-center gap-6 font-jakarta text-sm font-medium">
          <Link
            to={lp('/nosotros/')}
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            {t('nav.about', locale)}
          </Link>

          <Link
            to={lp('/equipo/')}
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            {t('nav.team', locale)}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
            >
              {t('nav.services', locale)} <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown — transparent pt-2 bridge closes the hover gap between trigger and menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 transition-all duration-300 origin-top
              ${servicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="rounded-3xl glass shadow-2xl shadow-black/15 overflow-hidden">
                <div className="p-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={serviceHref(s.slug)}
                      className="block px-4 py-2.5 rounded-2xl text-charcoal text-sm font-jakarta font-medium hover:bg-gold/10 hover:text-gold transition-all duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {serviceLabel(s)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to={lp('/resenas/')}
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            {t('nav.reviews', locale)}
          </Link>

          <Link
            to={lp('/blog/')}
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            {t('nav.blog', locale)}
          </Link>
        </div>

        {/* Language toggle (desktop) */}
        <div className="hidden lg:block shrink-0">
          <LanguageToggle scrolled={scrolled} />
        </div>

        {/* CTA */}
        <Link
          to={lp('/contacto/')}
          className="hidden lg:flex btn-magnetic items-center gap-2 bg-gold text-charcoal font-outfit font-semibold text-sm px-5 py-2.5 rounded-full shrink-0 hover:bg-gold-light transition-colors duration-300"
        >
          <Phone size={14} />
          {t('nav.cta', locale)}
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label={t('nav.openMenu', locale)}
          className={`lg:hidden ml-auto transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-4 top-20 z-40 rounded-4xl glass shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500 lg:hidden
        ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="p-6 flex flex-col gap-4 font-outfit">
          <Link to={lp('/nosotros/')} className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.about', locale)}</Link>
          <Link to={lp('/equipo/')} className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.team', locale)}</Link>
          <div className="h-px bg-charcoal/10" />
          <p className="text-slate text-xs font-jakarta uppercase tracking-widest">{t('nav.services', locale)}</p>
          {SERVICES.map((s) => (
            <Link key={s.slug} to={serviceHref(s.slug)} className="text-charcoal/80 text-sm font-medium hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              {serviceLabel(s)}
            </Link>
          ))}
          <div className="h-px bg-charcoal/10" />
          <Link to={lp('/resenas/')} className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.reviews', locale)}</Link>
          <Link to={lp('/blog/')} className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.blog', locale)}</Link>
          <div className="h-px bg-charcoal/10" />
          <div className="flex items-center justify-between">
            <span className="text-slate text-xs font-jakarta uppercase tracking-widest">{t('nav.language', locale)}</span>
            <LanguageToggle scrolled onNavigate={() => setMobileOpen(false)} />
          </div>
          <Link
            to={lp('/contacto/')}
            className="btn-magnetic flex items-center justify-center gap-2 bg-gold text-charcoal font-bold text-base px-6 py-3.5 rounded-3xl mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            {t('nav.ctaMobile', locale)}
          </Link>
        </div>
      </div>
    </>
  )
}
