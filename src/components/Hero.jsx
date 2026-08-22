import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { MessageCircle, ArrowDown, Star } from 'lucide-react'
import { ratingSummary } from '../data/reviews'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'
import AmbientParticles from './AmbientParticles'
import TrustBadges from './TrustBadges'

const HERO_VIDEO = '/hero/hero-doctores.webm'
const HERO_POSTER = '/hero/hero-poster.jpg'

export default function Hero() {
  const locale = useLocale()
  const containerRef = useRef(null)
  const badgeRef = useRef(null)
  const h1Ref = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const socialProofRef = useRef(null)
  const trustBadgesRef = useRef(null)
  const scrollHintRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { opacity: 0, y: 14, duration: 0.45, delay: 0.1 })
        .from(h1Ref.current.querySelectorAll('.anim'), { opacity: 0, y: 28, stagger: 0.08, duration: 0.6 }, '-=0.3')
        .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.5 }, '-=0.35')
        .from(ctaRef.current.children, { opacity: 0, y: 14, stagger: 0.08, duration: 0.5 }, '-=0.35')
        .from(socialProofRef.current, { opacity: 0, y: 10, duration: 0.4 }, '-=0.3')
        .from(trustBadgesRef.current, { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
        .from(scrollHintRef.current, { opacity: 0, duration: 0.4 }, '-=0.2')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex flex-col -mt-20"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label={locale === 'en' ? 'Debod Dental Clinic — Premium Dental Clinic in Argüelles, Madrid' : 'Debod Dental Clinic — Clínica Dental Premium en Argüelles, Madrid'}
    >
      <video className="absolute inset-0 w-full h-full object-cover" src={HERO_VIDEO} poster={HERO_POSTER} preload="metadata" autoPlay muted loop playsInline aria-hidden="true" />
      <AmbientParticles />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/20 to-transparent" />
      <div className="flex-1 min-h-[5.5rem]" />
      <div className="relative z-10 w-full px-6 md:px-16 pb-10 sm:pb-16 md:pb-24 max-w-3xl">
        <div ref={badgeRef} className="inline-flex items-center gap-2 mb-3 sm:mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-dot" />
          <span className="font-jakarta text-gold text-xs font-semibold tracking-widest uppercase">
            {locale === 'en' ? 'Dental Clinic \u00b7 Arg\u00fcelles, Madrid' : 'Cl\u00ednica Dental \u00b7 Arg\u00fcelles, Madrid'}
          </span>
        </div>
        <h1 ref={h1Ref} className="mb-3 sm:mb-6 leading-none">
          <span className="anim block font-outfit font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            {locale === 'en' ? 'Specialists in ' : 'Especialistas en '}
          </span>
          <span className="anim block font-outfit font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            {locale === 'en' ? 'Full Oral Rehabilitation ' : 'Rehabilitaci\u00f3n Oral '}
          </span>
          <em className="anim block font-cormorant font-light italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gold leading-tight">
            {locale === 'en' ? 'in Madrid.' : 'en Madrid.'}
          </em>
        </h1>
        <p ref={subtitleRef} className="font-jakarta text-white/70 text-sm sm:text-base md:text-lg max-w-lg mb-5 sm:mb-10 leading-relaxed">
          {locale === 'en' ? (
            <>Specialists in <strong className="text-white/90">advanced full oral rehabilitation</strong>, implantology and cosmetic dentistry.
            A team committed to <strong className="text-white/90">honest dentistry</strong> and results built to last.</>
          ) : (
            <>Especialistas en <strong className="text-white/90">Rehabilitación Oral avanzada</strong>, Implantología y Estética Dental.
            Un equipo comprometido con la <strong className="text-white/90">odontología honesta</strong> y resultados pensados para durar.</>
          )}
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Link to={locale === 'en' ? enPathFor('/contacto/') : '/contacto/'} className="btn-magnetic flex items-center justify-center gap-3 bg-gold text-charcoal font-outfit font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-gold/30 hover:bg-gold-light transition-colors duration-300">
            <MessageCircle size={18} />
            {locale === 'en' ? 'Book an Appointment' : 'Agendar Cita'}
          </Link>
          <a href="#tratamientos" className="btn-magnetic flex items-center justify-center gap-2 border-2 border-white/30 text-white font-outfit font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            {locale === 'en' ? 'View Treatments' : 'Ver Tratamientos'}
          </a>
        </div>
        <div ref={socialProofRef} className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} size={13} className="text-gold fill-gold" />))}</div>
            <span className="font-jakarta text-white/80 text-xs sm:text-sm font-medium">{ratingSummary.ratingValue} · {ratingSummary.reviewCount}+ {locale === 'en' ? 'Google reviews' : 'reseñas en Google'}</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="font-jakarta text-white/70 text-xs sm:text-sm">
            {locale === 'en' ? <><strong className="text-white/90">WhiteSmile 2023</strong> Award</> : <>Premio <strong className="text-white/90">WhiteSmile 2023</strong></>}
          </span>
        </div>
        <div ref={trustBadgesRef}><TrustBadges /></div>
      </div>
      <div ref={scrollHintRef} className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40">
        <span className="font-jakarta text-xs tracking-widest uppercase rotate-90 origin-center mb-3">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
