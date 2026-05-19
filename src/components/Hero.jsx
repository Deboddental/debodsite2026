import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { MessageCircle, ArrowDown, Star } from 'lucide-react'

const HERO_VIDEO = '/hero/video hero doctores.webm'

export default function Hero() {
  const containerRef = useRef(null)
  const badgeRef = useRef(null)
  const h1Ref = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const socialProofRef = useRef(null)
  const scrollHintRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.7, delay: 0.3 })
        .from(h1Ref.current.querySelectorAll('.anim'), {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.9,
        }, '-=0.3')
        .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
        .from(ctaRef.current.children, { opacity: 0, y: 20, stagger: 0.12, duration: 0.6 }, '-=0.4')
        .from(socialProofRef.current, { opacity: 0, y: 15, duration: 0.5 }, '-=0.3')
        .from(scrollHintRef.current, { opacity: 0, duration: 0.5 }, '-=0.2')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex flex-col -mt-20"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="Debod Dental Clinic — Clínica Dental Premium en Argüelles, Madrid"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/20 to-transparent" />

      {/* Spacer — empuja el contenido hacia abajo y garantiza que nunca suba más del navbar */}
      <div className="flex-1 min-h-[5.5rem]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-10 sm:pb-16 md:pb-24 max-w-3xl">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 mb-3 sm:mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-dot" />
          <span className="font-jakarta text-gold text-xs font-semibold tracking-widest uppercase">
            Clínica Dental · Argüelles, Madrid
          </span>
        </div>

        {/* H1 */}
        <h1
          ref={h1Ref}
          className="mb-3 sm:mb-6 leading-none"
        >
          <span className="anim block font-outfit font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            N.º&nbsp;1 en
          </span>
          <span className="anim block font-outfit font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            Rehabilitación Oral
          </span>
          <em className="anim block font-cormorant font-light italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gold leading-tight">
            en Madrid.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-jakarta text-white/70 text-sm sm:text-base md:text-lg max-w-lg mb-5 sm:mb-10 leading-relaxed"
        >
          Especialistas en <strong className="text-white/90">Rehabilitación Oral avanzada</strong>, Implantología y Estética Dental.
          Un equipo comprometido con la <strong className="text-white/90">odontología honesta</strong> y resultados que duran toda la vida.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link
            to="/contacto/"
            className="btn-magnetic flex items-center justify-center gap-3 bg-gold text-charcoal font-outfit font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-gold/30 hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={18} />
            Agendar Cita
          </Link>
          <a
            href="#tratamientos"
            className="btn-magnetic flex items-center justify-center gap-2 border-2 border-white/30 text-white font-outfit font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Tratamientos
          </a>
        </div>

        {/* Social Proof */}
        <div ref={socialProofRef} className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-jakarta text-white/80 text-xs sm:text-sm font-medium">5.0 Google Reviews</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="font-jakarta text-white/70 text-xs sm:text-sm">
            🏆 Premio <strong className="text-white/90">WhiteSmile 2023</strong>
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="font-jakarta text-xs tracking-widest uppercase rotate-90 origin-center mb-3">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
