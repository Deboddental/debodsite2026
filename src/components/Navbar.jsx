import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const WA_LINK = 'https://wa.me/34689104714?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cita%20en%20Debod%20Dental%20Clinic.%20%C2%BFPodr%C3%ADan%20ayudarme%3F'

const services = [
  { label: 'Dentista General', href: '/dentista-general-arguelles-madrid-espana/' },
  { label: 'Odontología Estética', href: '/dentista-cosmetico-arguelles-madrid-espana/' },
  { label: 'Implantes Dentales', href: '/dentista-de-implantes-arguelles-madrid-espana/' },
  { label: 'Endodoncia', href: '/endodoncista-arguelles-madrid-espana/' },
  { label: 'Odontopediatría', href: '/odontopediatra-arguelles-madrid-espana/' },
  { label: 'Ortodoncia', href: '/ortodoncista-arguelles-madrid-espana/' },
  { label: 'Periodoncia', href: '/periodoncista-arguelles-madrid-espana/' },
  { label: 'Cirugía Oral', href: '/cirujano-oral-arguelles-madrid-espana/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Navegación principal"
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
        <Link to="/" className="shrink-0 mr-auto">
          <img
            src={scrolled ? '/Images/logo/Logo texto verde.png' : '/Images/logo/Logo texto.png'}
            alt="Debod Dental Clinic"
            className={`h-8 w-auto object-contain transition-all duration-500
              ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-jakarta text-sm font-medium">
          <Link
            to="/nosotros/"
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            Nosotros
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
              Servicios <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown — transparent pt-2 bridge closes the hover gap between trigger and menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 transition-all duration-300 origin-top
              ${servicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="rounded-3xl glass shadow-2xl shadow-black/15 overflow-hidden">
                <div className="p-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2.5 rounded-2xl text-charcoal text-sm font-jakarta font-medium hover:bg-gold/10 hover:text-gold transition-all duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/blog/"
            className={`transition-colors hover:text-gold ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-magnetic items-center gap-2 bg-gold text-charcoal font-outfit font-semibold text-sm px-5 py-2.5 rounded-full shrink-0 hover:bg-gold-light transition-colors duration-300"
        >
          <Phone size={14} />
          Agenda tu cita
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menú"
          className={`md:hidden ml-auto transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-4 top-20 z-40 rounded-4xl glass shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500 md:hidden
        ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="p-6 flex flex-col gap-4 font-outfit">
          <Link to="/nosotros/" className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>Nosotros</Link>
          <div className="h-px bg-charcoal/10" />
          <p className="text-slate text-xs font-jakarta uppercase tracking-widest">Servicios</p>
          {services.map((s) => (
            <Link key={s.href} to={s.href} className="text-charcoal/80 text-sm font-medium hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              {s.label}
            </Link>
          ))}
          <div className="h-px bg-charcoal/10" />
          <Link to="/blog/" className="text-charcoal font-semibold text-lg hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic flex items-center justify-center gap-2 bg-gold text-charcoal font-bold text-base px-6 py-3.5 rounded-3xl mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            Agendar Cita por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
