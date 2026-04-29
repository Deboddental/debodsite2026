import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

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

const WA_LINK = 'https://wa.me/34689104714?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cita%20en%20Debod%20Dental%20Clinic.%20%C2%BFPodr%C3%ADan%20ayudarme%3F'

const serviceLinks = [
  { label: 'Cirugía Oral', href: '/cirujano-oral-arguelles-madrid-espana/' },
  { label: 'Implantes Dentales', href: '/dentista-de-implantes-arguelles-madrid-espana/' },
  { label: 'Odontología General', href: '/dentista-general-arguelles-madrid-espana/' },
  { label: 'Endodoncia', href: '/endodoncista-arguelles-madrid-espana/' },
  { label: 'Odontología Estética', href: '/dentista-cosmetico-arguelles-madrid-espana/' },
  { label: 'Odontopediatría', href: '/odontopediatra-arguelles-madrid-espana/' },
  { label: 'Ortodoncia', href: '/ortodoncista-arguelles-madrid-espana/' },
  { label: 'Periodoncia', href: '/periodoncista-arguelles-madrid-espana/' },
]

const treatmentLinks = [
  { label: 'Carillas de Porcelana', href: '/tratamientos/carillas-de-porcelana-arguelles-madrid-espana/' },
  { label: 'Invisalign®', href: '/tratamientos/invisalign-alineadores-transparentes-arguelles-madrid-espana/' },
  { label: 'Blanqueamiento', href: '/tratamientos/examenes-dentales-y-limpiezas-dentales-arguelles-madrid/' },
  { label: 'Cirugía Guiada 3D', href: '/tratamientos/cirugia-guiada-de-implantes-dentales-arguelles-madrid/' },
  { label: 'Injerto de Encía', href: '/tratamientos/injerto-de-encia-arguelles-madrid-espana/' },
  { label: 'Gingivoplastia', href: '/tratamientos/gingivoplastia-arguelles-madrid-espana/' },
  { label: 'Corona Dental', href: '/tratamientos/tratamientos-coronas-dentales-en-arguelles-madrid/' },
  { label: 'Financiación 60m', href: '/financiacion/' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-charcoal rounded-t-[3rem] pt-16 pb-8 px-6 md:px-12 lg:px-20 mt-0"
      role="contentinfo"
      aria-label="Pie de página Debod Dental Clinic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Band */}
        <div className="bg-gold/10 border border-gold/20 rounded-4xl px-8 py-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit font-bold text-2xl text-white mb-1">
              ¿Listo para transformar tu sonrisa?
            </h3>
            <p className="font-jakarta text-white/60 text-sm">
              Primera visita diagnóstica incluida · Argüelles, Madrid
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic flex items-center gap-2.5 bg-gold text-charcoal font-outfit font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-300 shrink-0"
          >
            Agendar Cita Ahora
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/Images/logo/Logo texto.png"
                alt="Debod Dental Clinic"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-jakarta text-white/50 text-sm leading-relaxed mb-6">
              Clínica dental boutique de referencia en Argüelles, Madrid. Especialistas en Rehabilitación Oral, Implantología y Estética Dental.
            </p>

            {/* Operational status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span className="font-jakarta text-emerald-400 text-xs font-semibold">Atendiendo pacientes</span>
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
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-jakarta text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">Tratamientos</h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-jakarta text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contacto</h4>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-jakarta text-white/80 text-sm">C. de Ferraz, 24</p>
                  <p className="font-jakarta text-white/50 text-sm">Argüelles · Moncloa-Aravaca</p>
                  <p className="font-jakarta text-white/50 text-sm">28008 Madrid, España</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a
                  href="tel:+34689104714"
                  className="font-jakarta text-white/80 text-sm hover:text-gold transition-colors"
                >
                  +34 689 10 47 14
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
              href="https://maps.google.com/?q=C.+de+Ferraz,+24,+28008+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 font-jakarta text-xs font-semibold text-gold hover:underline"
            >
              Ver en Google Maps <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-jakarta text-white/30 text-xs">
            © {year} Debod Dental Clinic · C. de Ferraz, 24, Argüelles, 28008 Madrid
          </p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidad/" className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/nosotros/" className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
              Nosotros
            </Link>
            <Link to="/blog/" className="font-jakarta text-white/30 text-xs hover:text-white/60 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
