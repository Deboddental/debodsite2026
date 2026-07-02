import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight, Calendar } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { t } from '../i18n/ui'
import { enPathFor } from '../i18n/slugs'

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const serviceLinks = [
  { key: 'svc.oralsurgery', href: '/cirujano-oral-arguelles-madrid-espana/' },
  { key: 'svc.implants', href: '/dentista-de-implantes-arguelles-madrid-espana/' },
  { key: 'svc.general', href: '/dentista-general-arguelles-madrid-espana/' },
  { key: 'svc.endo', href: '/endodoncista-arguelles-madrid-espana/' },
  { key: 'svc.cosmetic', href: '/dentista-cosmetico-arguelles-madrid-espana/' },
  { key: 'svc.pediatric', href: '/odontopediatra-arguelles-madrid-espana/' },
  { key: 'svc.ortho', href: '/ortodoncista-arguelles-madrid-espana/' },
  { key: 'svc.perio', href: '/periodoncista-arguelles-madrid-espana/' },
]

const treatmentLinks = [
  { key: 'tr.veneers', href: '/tratamientos/carillas-de-porcelana-arguelles-madrid-espana/' },
  { key: 'tr.invisalign', href: '/tratamientos/invisalign-alineadores-transparentes-arguelles-madrid-espana/' },
  { key: 'tr.whitening', href: '/dentista-cosmetico-arguelles-madrid-espana/' },
  { key: 'tr.guided', href: '/tratamientos/cirugia-guiada-de-implantes-dentales-arguelles-madrid/' },
  { key: 'tr.gumgraft', href: '/tratamientos/injerto-de-encia-arguelles-madrid-espana/' },
  { key: 'tr.gingivo', href: '/tratamientos/gingivoplastia-arguelles-madrid-espana/' },
  { key: 'tr.crown', href: '/tratamientos/tratamientos-coronas-dentales-en-arguelles-madrid/' },
  { key: 'tr.financing', href: '/financiacion/' },
]

// Secondary links — keep the clinic pages and neighbourhood landings linked from
// every page (they were orphaned: no internal links pointed to them).
const exploreLinks = [
  { es: 'Urgencias dentales', en: 'Dental emergencies', href: '/urgencias-dentales-arguelles-madrid/' },
  { es: 'Nosotros', en: 'About', href: '/nosotros/' },
  { es: 'Equipo', en: 'Team', href: '/equipo/' },
  { es: 'Tecnología', en: 'Technology', href: '/tecnologia/' },
  { es: 'Debod Dental Lab', en: 'Debod Dental Lab', href: '/dental-lab/' },
  { es: 'Antes y después', en: 'Before & after', href: '/antes-despues/' },
  { es: 'Ubicación y cómo llegar', en: 'Location & directions', href: '/ubicaciones/' },
  { es: 'Reseñas', en: 'Reviews', href: '/resenas/' },
  { es: 'Blog', en: 'Blog', href: '/blog/' },
  { es: 'Financiación', en: 'Financing', href: '/financiacion/' },
]
const zonaLinks = [
  { es: 'Dentista en Moncloa', en: 'Dentist in Moncloa', href: '/dentista-moncloa-madrid/' },
  { es: 'Dentista en Chamberí', en: 'Dentist in Chamberí', href: '/dentista-chamberi-madrid/' },
  { es: 'Dentista en Centro (Sol)', en: 'Dentist in Centro (Sol)', href: '/dentista-centro-madrid/' },
  { es: 'Dentista en Plaza de España', en: 'Dentist in Plaza de España', href: '/dentista-plaza-espana-madrid/' },
  { es: 'Pedir cita en Argüelles', en: 'Book in Argüelles', href: '/ubicaciones/citas-arguelles-madrid/' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  const L = (p) => (locale === 'en' ? enPathFor(p) : p)

  return (
    <footer
      className="bg-charcoal rounded-t-[3rem] -mt-12 pt-28 pb-8 px-6 md:px-12 lg:px-20"
      role="contentinfo"
      aria-label={locale === 'en' ? 'Debod Dental Clinic footer' : 'Pie de página Debod Dental Clinic'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Band */}
        <div className="bg-gold/10 border border-gold/20 rounded-4xl px-8 py-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit font-bold text-2xl text-white mb-1">
              {t('footer.ctaTitle', locale)}
            </h3>
            <p className="font-jakarta text-white/60 text-sm">
              {t('footer.ctaSubtitle', locale)}
            </p>
          </div>
          <Link
            to={L('/contacto/')}
            className="btn-magnetic flex items-center gap-2.5 bg-gold text-charcoal font-outfit font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-300 shrink-0"
          >
            <Calendar size={15} />
            {t('footer.ctaBtn', locale)}
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to={L('/')} className="inline-block mb-4">
              <img
                src="/logo-light.webp"
                alt="Debod Dental Clinic — Clínica dental en Argüelles, Madrid"
                width="135"
                height="54"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="font-jakarta text-white/50 text-sm leading-relaxed mb-6">
              {t('footer.bio', locale)}
            </p>

            {/* Operational status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span className="font-jakarta text-emerald-400 text-xs font-semibold">{t('footer.status', locale)}</span>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/debodclinicadental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Debod Dental Clinic"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-gold/20 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/60 hover:text-gold"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/debodclinicadental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Debod Dental Clinic"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-gold/20 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/60 hover:text-gold"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.servicesTitle', locale)}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={L(link.href)}
                    className="font-jakarta text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {t(link.key, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.treatmentsTitle', locale)}</h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={L(link.href)}
                    className="font-jakarta text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {t(link.key, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">{t('footer.contactTitle', locale)}</h4>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-jakarta text-white/80 text-sm">C. de Ferraz, 24</p>
                  <p className="font-jakarta text-white/50 text-sm">Argüelles · Moncloa-Aravaca</p>
                  <p className="font-jakarta text-white/50 text-sm">28008 Madrid, {locale === 'en' ? 'Spain' : 'España'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a
                  href="tel:+34914476225"
                  className="font-jakarta text-white/80 text-sm hover:text-gold transition-colors"
                >
                  +34 914 47 62 25
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a
                  href="mailto:info@deboddentalclinic.com"
                  className="font-jakarta text-white/80 text-sm hover:text-gold transition-colors"
                >
                  info@deboddentalclinic.com
                </a>
              </div>
            </address>

            <a
              href="https://maps.google.com/?q=Debod+Dental+Clinic,+Calle+de+Ferraz+24,+28008+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 font-jakarta text-xs font-semibold text-gold hover:underline"
            >
              {t('footer.maps', locale)} <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Secondary links — clinic pages + Madrid neighbourhoods (keeps them linked site-wide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14 pt-10 border-t border-white/8">
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {locale === 'en' ? 'Explore' : 'Explora'}
            </h4>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link to={L(link.href)} className="font-jakarta text-white/45 text-sm hover:text-gold transition-colors duration-200">
                    {locale === 'en' ? link.en : link.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {locale === 'en' ? 'Areas we serve in Madrid' : 'Zonas que atendemos en Madrid'}
            </h4>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {zonaLinks.map((link) => (
                <li key={link.href}>
                  <Link to={L(link.href)} className="font-jakarta text-white/45 text-sm hover:text-gold transition-colors duration-200">
                    {locale === 'en' ? link.en : link.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-jakarta text-white/30 text-xs">
            © {year} Debod Dental Clinic · C. de Ferraz, 24, Argüelles, 28008 Madrid
          </p>
          <div className="flex gap-6">
            <Link to={L('/politica-de-privacidad/')} className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
              {t('footer.privacy', locale)}
            </Link>
            <Link to={L('/nosotros/')} className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
              {t('nav.about', locale)}
            </Link>
            {locale === 'en' ? (
              <Link to="/" lang="es" hrefLang="es" className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
                Español
              </Link>
            ) : (
              <Link to="/en/" lang="en" hrefLang="en" className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
                English
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
