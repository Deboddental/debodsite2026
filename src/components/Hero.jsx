import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MessageCircle, ArrowDown, Star } from 'lucide-react'

const WA_LINK = 'https://wa.me/34689104714?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cita%20en%20Debod%20Dental%20Clinic.%20%C2%BFPodr%C3%ADan%20ayudarme%3F'

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
      className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden flex items-end -mt-20"
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

      {/* Content — bottom-left third */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-dot" />
          <span className="font-jakarta text-gold text-xs font-semibold tracking-widest uppercase">
            Clínica Dental · Argüelles, Madrid
          </span>
        </div>

        {/* H1 */}
        <h1
          ref={h1Ref}
          className="mb-6 leading-none"
        >
          <span className="anim block font-outfit font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            N.º&nbsp;1 en
          </span>
          <span className="anim block font-outfit font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
            Rehabilitación Oral
          </span>
          <em className="anim block font-cormorant font-light italic text-5xl md:text-7xl lg:text-8xl text-gold leading-tight">
            en Madrid.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-jakarta text-white/70 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
        >
          Especialistas en <strong className="text-white/90">Rehabilitación Oral avanzada</strong>, Implantología y Estética Dental.
          Un equipo comprometido con la <strong className="text-white/90">odontología honesta</strong> y resultados que duran toda la vida.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic flex items-center justify-center gap-3 bg-gold text-charcoal font-outfit font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-gold/30 hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={20} />
            Agendar Cita en WhatsApp
          </a>
          <a
            href="#tratamientos"
            className="btn-magnetic flex items-center justify-center gap-2 border-2 border-white/30 text-white font-outfit font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Tratamientos
          </a>
        </div>

        {/* Social Proof */}
        <div ref={socialProofRef} className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-jakarta text-white/80 text-sm font-medium">5.0 Google Reviews</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="font-jakarta text-white/70 text-sm">
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
