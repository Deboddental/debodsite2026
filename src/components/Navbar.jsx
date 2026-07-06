import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import { useLocale } from '../hooks/useLocale'
import { t } from '../i18n/ui'
import { tf } from '../utils/tf'
import { serviceSlugEn, treatmentSlugEn, staticPairs } from '../i18n/slugs'
import { tourismLandings } from '../data/dentalTourism'
import treatments from '../data/treatments'

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

// Treatments grouped by specialty, in the same order as SERVICES, so the
// "Treatments" dropdown reads as a categorised index of all 23 treatments
// (they were previously only reachable one click deeper, from inside each
// service page — this is the direct nav shortcut).
const TREATMENT_GROUPS = SERVICES
  .map((s) => ({ ...s, items: treatments.filter((tr) => tr.specialty === s.slug) }))
  .filter((g) => g.items.length > 0)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const locale = useLocale()

  // Locale-aware hrefs: chrome paths via the static pair map, services via slug map.
  const lp = (esPath) => (locale === 'en' ? staticPairs[esPath] || esPath : esPath)
  const serviceHref = (slug) => (locale === 'en' ? `/en/${serviceSlugEn[slug]}/` : `/${slug}/`)
  const serviceLabel = (s) => (locale === 'en' ? s.en : s.es)
  const treatmentHref = (slug) => (locale === 'en' ? `/en/treatments/${treatmentSlugEn[slug]}/` : `/tratamientos/${slug}/`)

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
            ? 'bg-charcoal/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/10 text-pearl'
            : 'bg-transparent text-white border border-white/20'
          }
          rounded-full px-5 py-3 flex items-center gap-6
          w-[calc(100%-2rem)] max-w-6xl
        `}
      >
        {/* Logo — dark navbar in both states, so always use the light logo */}
        <Link to={lp('/')} className="shrink-0 mr-auto">
          <img
            src="/logo-light.webp"
            alt="Debod Dental Clinic — Clínica dental en Argüelles, Madrid"
            width="120"
            height="48"
            className="h-8 w-auto object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Links (full bar at lg+; md/tablet collapses to the hamburger to avoid crowding) */}
        <div className="hidden lg:flex items-center gap-6 font-jakarta text-sm font-medium">
          <Link
            to={lp('/')}
            className="transition-colors hover:text-gold text-white/90"
          >
            {t('nav.home', locale)}
          </Link>

          <Link
            to={lp('/nosotros/')}
            className="transition-colors hover:text-gold text-white/90"
          >
            {t('nav.about', locale)}
          </Link>

          {/* Services dropdown (portaled — see NavDropdown) */}
          <NavDropdown label={t('nav.services', locale)} width="w-56">
            <div className="p-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={serviceHref(s.slug)}
                  className="block px-4 py-2.5 rounded-2xl text-pearl text-sm font-jakarta font-medium hover:bg-gold/10 hover:text-gold transition-all duration-200"
                >
                  {serviceLabel(s)}
                </Link>
              ))}
            </div>
          </NavDropdown>

          {/* Treatments dropdown — direct shortcut to all 23 treatments, grouped
              by specialty (previously only reachable via each service page). */}
          <NavDropdown label={t('nav.treatments', locale)} width="w-[760px]">
            <div className="p-4 columns-3 gap-4 max-h-[80vh] overflow-y-auto">
              {TREATMENT_GROUPS.map((g) => (
                <div key={g.slug} className="break-inside-avoid mb-3">
                  <p className="px-4 pb-1 font-jakarta text-gold/60 text-[11px] font-semibold uppercase tracking-wider">
                    {serviceLabel(g)}
                  </p>
                  {g.items.map((tItem) => (
                    <Link
                      key={tItem.slug}
                      to={treatmentHref(tItem.slug)}
                      className="block px-4 py-1 rounded-xl text-pearl text-xs font-jakarta font-medium hover:bg-gold/10 hover:text-gold transition-all duration-200 leading-snug"
                    >
                      {tf(tItem, 'title', locale)}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </NavDropdown>

          {/* Dental Tourism dropdown — EN landings for international patients */}
          <NavDropdown label={t('nav.tourism', locale)} width="w-72">
            <div className="p-2">
              {tourismLandings.map((l) => (
                <Link
                  key={l.slug}
                  to={`/en/${l.slug}/`}
                  className="block px-4 py-2.5 rounded-2xl hover:bg-gold/10 transition-all duration-200 group"
                >
                  <span className="block text-pearl text-sm font-jakarta font-medium group-hover:text-gold transition-colors duration-200">{l.navLabel}</span>
                  <span className="block text-pearl/50 text-xs font-jakarta">{l.navDesc}</span>
                </Link>
              ))}
            </div>
          </NavDropdown>

          <Link
            to={lp('/resenas/')}
            className="transition-colors hover:text-gold text-white/90"
          >
            {t('nav.reviews', locale)}
          </Link>

          <Link
            to={lp('/blog/')}
            className="transition-colors hover:text-gold text-white/90"
          >
            {t('nav.blog', locale)}
          </Link>
        </div>

        {/* Language toggle (desktop) — dark bar, so use the on-dark styling */}
        <div className="hidden lg:block shrink-0">
          <LanguageToggle />
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
          className="lg:hidden ml-auto transition-colors text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu — dark glass, so all foreground is light */}
      <div className={`fixed inset-x-4 top-20 z-40 rounded-4xl glass-dark shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500 lg:hidden
        ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {/* The Treatments group added ~23 links, which can exceed the viewport height
            on short phones — this panel now scrolls internally instead of clipping. */}
        <div className="p-6 flex flex-col gap-4 font-outfit max-h-[calc(100dvh-6rem)] overflow-y-auto">
          <Link to={lp('/')} className="text-pearl font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.home', locale)}</Link>
          <Link to={lp('/nosotros/')} className="text-pearl font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.about', locale)}</Link>
          <div className="h-px bg-white/10" />
          <p className="text-white/50 text-xs font-jakarta uppercase tracking-widest">{t('nav.services', locale)}</p>
          {SERVICES.map((s) => (
            <Link key={s.slug} to={serviceHref(s.slug)} className="text-white/70 text-sm font-medium hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              {serviceLabel(s)}
            </Link>
          ))}
          <div className="h-px bg-white/10" />
          <p className="text-white/50 text-xs font-jakarta uppercase tracking-widest">{t('nav.treatments', locale)}</p>
          {TREATMENT_GROUPS.map((g) => (
            <div key={g.slug}>
              <p className="text-gold/60 text-[11px] font-jakarta font-semibold uppercase tracking-wider mt-2 mb-1">{serviceLabel(g)}</p>
              {g.items.map((tItem) => (
                <Link key={tItem.slug} to={treatmentHref(tItem.slug)} className="block text-white/70 text-sm font-medium hover:text-gold transition-colors py-0.5" onClick={() => setMobileOpen(false)}>
                  {tf(tItem, 'title', locale)}
                </Link>
              ))}
            </div>
          ))}
          <div className="h-px bg-white/10" />
          <p className="text-white/50 text-xs font-jakarta uppercase tracking-widest">{t('nav.tourism', locale)}</p>
          {tourismLandings.map((l) => (
            <Link key={l.slug} to={`/en/${l.slug}/`} className="text-white/70 text-sm font-medium hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              {l.navLabel}
            </Link>
          ))}
          <div className="h-px bg-white/10" />
          <Link to={lp('/resenas/')} className="text-pearl font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.reviews', locale)}</Link>
          <Link to={lp('/blog/')} className="text-pearl font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>{t('nav.blog', locale)}</Link>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between">
            <span className="text-white/50 text-xs font-jakarta uppercase tracking-widest">{t('nav.language', locale)}</span>
            <LanguageToggle onNavigate={() => setMobileOpen(false)} />
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

// Hover dropdown whose panel is portaled to <body>. The navbar is centered with a
// CSS transform and (when scrolled) carries its own backdrop-blur; both of those
// neutralise a descendant's backdrop-filter, so a panel nested inside the <nav>
// can never frost the page. Rendering the panel to <body> escapes those contexts,
// so its blur samples the real page content. Position is taken from the trigger.
function NavDropdown({ label, width, children }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const triggerRef = useRef(null)
  const timer = useRef(null)

  const place = () => {
    const r = triggerRef.current?.getBoundingClientRect()
    if (r) setPos({ top: r.bottom, left: r.left + r.width / 2 })
  }
  const openNow = () => { clearTimeout(timer.current); place(); setOpen(true) }
  const closeSoon = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 140) }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div ref={triggerRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        className="flex items-center gap-1 transition-colors hover:text-gold text-white/90"
      >
        {label} <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {typeof document !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: `translateX(-50%) scale(${open ? 1 : 0.97}) translateY(${open ? 0 : -8}px)`,
            transformOrigin: 'top center',
          }}
          className={`z-[60] ${width} pt-2 transition-[opacity,transform] duration-300
            ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
          onClick={() => setOpen(false)}
        >
          <div className="rounded-3xl bg-charcoal/80 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/15 overflow-hidden">
            {children}
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
