import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeftRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/34689104714?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cita%20en%20Debod%20Dental%20Clinic.%20%C2%BFPodr%C3%ADan%20ayudarme%3F'

const cases = [
  {
    id: 1,
    patient: 'Kleiber B.',
    treatment: 'Rehabilitación Oral Completa',
    detail: 'Carillas de Porcelana · Diseño de Sonrisa Digital',
    before: '/Images/antes despues/Antes Debod Kleider.jpg',
    after: '/Images/antes despues/Después Debod Kleider.jpg',
  },
]

function Slider({ before, after }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const calc = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onPointerDown = useCallback((e) => {
    dragging.current = true
    containerRef.current.setPointerCapture(e.pointerId)
    calc(e.clientX)
  }, [calc])

  const onPointerMove = useCallback((e) => {
    if (!dragging.current) return
    calc(e.clientX)
  }, [calc])

  const onPointerUp = useCallback(() => { dragging.current = false }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl shadow-black/20"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* After — full base layer */}
      <img
        src={after}
        alt="Resultado final"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* Before — clipped by clip-path */}
      <img
        src={before}
        alt="Estado inicial"
        className="absolute inset-0 w-full h-full object-cover object-center transition-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <ArrowLeftRight size={18} className="text-charcoal" strokeWidth={2} />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal/70 backdrop-blur-md text-white font-jakarta text-xs font-semibold tracking-wide pointer-events-none">
        ANTES
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/90 backdrop-blur-md text-charcoal font-jakarta text-xs font-semibold tracking-wide pointer-events-none">
        DESPUÉS
      </span>

      {/* Hint — fades after first interaction */}
      <div className="absolute inset-0 flex items-end justify-center pb-5 pointer-events-none">
        <span className="font-jakarta text-white/60 text-xs tracking-widest uppercase bg-charcoal/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
          Arrastra para comparar
        </span>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const sliderRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
      })
      gsap.from(sliderRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sliderRef.current, start: 'top 85%' },
      })
      gsap.from(infoRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: infoRef.current, start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const c = cases[0]

  return (
    <section
      ref={sectionRef}
      id="casos"
      className="bg-pearl py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      aria-label="Casos clínicos — Antes y Después"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="text-center mb-14 space-y-4">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase">
            Resultados Reales · Pacientes Reales
          </span>
          <h2 className="font-cormorant font-semibold text-4xl md:text-6xl text-charcoal leading-tight">
            Nuestros casos<br />
            <em className="font-light italic text-gold">nos respaldan.</em>
          </h2>
          <p className="font-jakarta text-slate text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cada sonrisa es única. Cada transformación, medida al milímetro.<br className="hidden md:block" />
            Sin filtros. Sin retoques. Solo odontología de precisión.
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef}>
          <Slider before={c.before} after={c.after} />
        </div>

        {/* Case info */}
        <div
          ref={infoRef}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-outfit font-bold text-charcoal text-lg">{c.patient}</p>
            <p className="font-jakarta text-slate text-sm mt-0.5">{c.treatment}</p>
            <p className="font-jakarta text-gold text-xs mt-1 tracking-wide">{c.detail}</p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic shrink-0 inline-flex items-center gap-2 bg-charcoal text-white font-outfit font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-charcoal/80 transition-colors duration-300"
          >
            Quiero mi transformación →
          </a>
        </div>

      </div>
    </section>
  )
}
