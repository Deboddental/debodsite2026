import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Cpu, CreditCard, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const SHUFFLER_LABELS = ['Carillas de Porcelana', 'Invisalign®', 'Blanqueamiento Láser']

const TELEMETRY_LINES = [
  'Escaneado intraoral 3D completado...',
  'Diseñando sonrisa digital...',
  'Análisis oclusal en curso...',
  'Modelo 3D generado con éxito.',
  'Planificando implante virtual...',
  'Simulación de carillas lista.',
]

// ── Card 1: Diagnostic Shuffler ──────────────────────────────
function DiagnosticShuffler() {
  const [cards, setCards] = useState(SHUFFLER_LABELS)
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const next = [...prev]
        const last = next.pop()
        next.unshift(last)
        return next
      })
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[220px] flex items-center justify-center" ref={containerRef}>
      {cards.map((label, i) => (
        <div
          key={label}
          className="absolute w-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            transform: `translateY(${(i - 0) * 18}px) scale(${1 - i * 0.05})`,
            opacity: 1 - i * 0.25,
            zIndex: 10 - i,
          }}
        >
          <div className="bg-white rounded-3xl px-6 py-5 shadow-lg shadow-black/8 border border-charcoal/6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
              <span className="font-outfit font-semibold text-charcoal text-lg">{label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Card 2: Telemetry Typewriter ─────────────────────────────
function TelemetryTypewriter() {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const target = TELEMETRY_LINES[lineIndex]
    if (charIdx < target.length) {
      const t = setTimeout(() => {
        setDisplayed(target.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        const next = (lineIndex + 1) % TELEMETRY_LINES.length
        setLineIndex(next)
        setDisplayed('')
        setCharIdx(0)
      }, 2200)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIndex])

  return (
    <div className="min-h-[220px] flex flex-col justify-between">
      {/* Live feed */}
      <div className="flex-1 flex items-center">
        <div className="font-jakarta text-sm text-charcoal/80 leading-relaxed">
          <span className="text-gold font-semibold">{'>'} </span>
          {displayed}
          <span className="cursor-blink text-gold font-bold ml-0.5">|</span>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-charcoal/8">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot" />
        <span className="font-jakarta text-xs text-slate font-medium tracking-wide">Lab in-house · Online</span>
        <div className="ml-auto flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-1.5 h-4 rounded-full ${i < 3 ? 'bg-gold' : 'bg-charcoal/15'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Card 3: Financing Progress ───────────────────────────────
function FinancingProgress() {
  const [progress, setProgress] = useState(0)
  const barRef = useRef(null)

  // Auto-animate on mount
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now()
      const duration = 2500
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setProgress(Math.round(eased * 100))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, 600)
    return () => clearTimeout(t)
  }, [])

  const months = Math.round((progress / 100) * 60)

  return (
    <div className="min-h-[220px] flex flex-col justify-between">
      <div className="space-y-5 flex-1">
        <div>
          <div className="flex justify-between items-baseline mb-2.5">
            <span className="font-jakarta text-sm text-slate font-medium">Financiación disponible</span>
            <span className="font-outfit font-bold text-2xl text-charcoal">
              {months} <span className="text-gold text-base font-semibold">meses</span>
            </span>
          </div>

          {/* Track */}
          <div className="relative h-3 bg-charcoal/8 rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="absolute inset-y-0 left-0 rounded-full transition-none"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D4AF37, #E8C84A)',
                boxShadow: '0 0 12px rgba(212,175,55,0.5)',
              }}
            />
          </div>

          <p className="font-jakarta text-xs text-slate/70 mt-2">hasta 60 meses sin intereses</p>
        </div>

        <div className="space-y-2.5">
          {['0% interés hasta 12 meses', 'Aprobación en 24h', 'Sin entrada inicial'].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CheckCircle2 size={15} className="text-gold shrink-0" />
              <span className="font-jakarta text-sm text-charcoal/80">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/financiacion/"
        className="mt-4 block text-center font-jakarta text-xs font-semibold text-gold hover:underline"
      >
        Ver condiciones →
      </a>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────
const artifacts = [
  {
    icon: Sparkles,
    tag: 'Estética & Precisión',
    title: 'Odontología\nEstética',
    desc: 'Carillas, Invisalign® y blanqueamiento láser diseñados con tecnología de última generación.',
    component: DiagnosticShuffler,
    accent: '#D4AF37',
  },
  {
    icon: Cpu,
    tag: 'Debod Digital Lab',
    title: 'Lab\nIn-House',
    desc: 'Nuestro laboratorio digital propio garantiza precisión milimétrica en cada restauración.',
    component: TelemetryTypewriter,
    accent: '#3B82F6',
  },
  {
    icon: CreditCard,
    tag: 'Financiación',
    title: 'Tu Sonrisa\nSin Esperas',
    desc: 'Financiación hasta 60 meses para que el presupuesto nunca sea un obstáculo.',
    component: FinancingProgress,
    accent: '#10B981',
  },
]

export default function ClinicalExpertise() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top 80%',
        },
      })

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-pearl"
      aria-label="Especialidades clínicas de Debod Dental Clinic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="max-w-2xl mb-16">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
            Odontología Mínimamente Invasiva
          </span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-5 leading-tight">
            La tecnología que <em className="font-cormorant font-light italic text-gold not-italic">transforma</em> tu sonrisa
          </h2>
          <p className="font-jakarta text-slate text-lg leading-relaxed">
            En Debod Dental Clinic, Argüelles, nuestro equipo de especialistas combina innovación digital de vanguardia con un trato cercano y odontología honesta.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {artifacts.map((artifact, i) => {
            const Icon = artifact.icon
            const Component = artifact.component
            return (
              <article
                key={artifact.tag}
                ref={el => cardsRef.current[i] = el}
                className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-all duration-500 border border-charcoal/5 group flex flex-col gap-6"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 text-xs font-jakarta font-semibold"
                      style={{ background: `${artifact.accent}15`, color: artifact.accent }}
                    >
                      <Icon size={12} />
                      {artifact.tag}
                    </div>
                    <h3 className="font-outfit font-bold text-xl text-charcoal leading-tight whitespace-pre-line">
                      {artifact.title}
                    </h3>
                  </div>
                </div>

                <p className="font-jakarta text-sm text-slate/90 leading-relaxed">
                  {artifact.desc}
                </p>

                {/* Interactive Artifact */}
                <div className="flex-1">
                  <Component />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
