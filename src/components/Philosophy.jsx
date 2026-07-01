import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Eye, Shield, Users } from 'lucide-react'
import { ratingSummary } from '../data/reviews'
import { useLocale } from '../hooks/useLocale'
import { tf } from '../utils/tf'
import { enPathFor } from '../i18n/slugs'
import Counter from './Counter'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Heart,
    title: 'Odontología Honesta',
    title_en: 'Honest Dentistry',
    description:
      'Diagnósticos claros, presupuestos sin sorpresas y tratamientos que realmente necesitas. Nunca recomendamos lo que no hace falta.',
    description_en:
      'Clear diagnoses, quotes with no surprises and only the treatments you genuinely need. We never recommend what is not necessary.',
  },
  {
    icon: Eye,
    title: 'Transparencia Total',
    title_en: 'Complete Transparency',
    description:
      'Diseño digital previo antes de tocar un solo diente. Verás tu resultado final antes de comenzar cualquier tratamiento.',
    description_en:
      'Prior digital design before we touch a single tooth. You will see your final result before any treatment begins.',
  },
  {
    icon: Shield,
    title: 'Mínimamente Invasivo',
    title_en: 'Minimally Invasive',
    description:
      'Conservamos la mayor cantidad de estructura dental sana posible. La intervención justa, ni más ni menos.',
    description_en:
      'We preserve as much healthy tooth structure as possible. Just the right intervention, nothing more, nothing less.',
  },
  {
    icon: Users,
    title: 'Equipo Especialista',
    title_en: 'Specialist Team',
    description:
      'Cada caso lo atiende el especialista adecuado. Un enfoque multidisciplinar con profesionales de la más alta formación.',
    description_en:
      'Every case is handled by the right specialist. A multidisciplinary approach with the most highly trained professionals.',
  },
]

export default function Philosophy() {
  const locale = useLocale()
  const sectionRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const dividerRef = useRef(null)
  const valuesRef = useRef([])
  const bioRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 767px)', () => {
        // Mobile: reemplazar clip-path por fade simple (clip-path es costoso en GPU mobile)
        gsap.from([line1Ref.current, line2Ref.current], {
          opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: line1Ref.current, start: 'top 85%' },
        })
        gsap.from(dividerRef.current, {
          scaleX: 0, transformOrigin: 'left', duration: 0.55, ease: 'power3.out',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 88%' },
        })
        gsap.from(bioRef.current, {
          opacity: 0, y: 15, duration: 0.45, ease: 'power3.out',
          scrollTrigger: { trigger: bioRef.current, start: 'top 88%' },
        })
        valuesRef.current.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0, y: 25, duration: 0.45, ease: 'power3.out', delay: i * 0.06,
            scrollTrigger: { trigger: card, start: 'top 90%' },
          })
        })
      })

      mm.add('(min-width: 768px)', () => {
        gsap.from(line1Ref.current, {
          clipPath: 'inset(0 100% 0 0)', opacity: 0, duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: line1Ref.current, start: 'top 80%' },
        })
        gsap.from(line2Ref.current, {
          clipPath: 'inset(0 100% 0 0)', opacity: 0, duration: 1.4, ease: 'power4.inOut', delay: 0.2,
          scrollTrigger: { trigger: line2Ref.current, start: 'top 80%' },
        })
        gsap.from(dividerRef.current, {
          scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 85%' },
        })
        gsap.from(bioRef.current, {
          opacity: 0, y: 30, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: bioRef.current, start: 'top 85%' },
        })
        valuesRef.current.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0, y: 50, duration: 0.8, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 88%' },
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-36 px-6 md:px-12 lg:px-20"
      aria-label={locale === 'en' ? 'Philosophy of Debod Dental Clinic — Honest Dentistry' : 'Filosofía de Debod Dental Clinic — Odontología Honesta'}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <span className="font-jakarta text-xs text-gold/80 font-semibold tracking-widest uppercase mb-12 block">
          {locale === 'en' ? 'Our Philosophy' : 'Nuestra Filosofía'}
        </span>

        {/* Manifesto text */}
        <div className="mb-16 md:mb-24 space-y-2">
          <p
            ref={line1Ref}
            className="font-outfit font-bold text-3xl md:text-5xl lg:text-6xl text-white/30 leading-tight tracking-tight"
          >
            {locale === 'en' ? 'Traditional dentistry treats teeth.' : 'La odontología tradicional trata dientes.'}
          </p>
          <p
            ref={line2Ref}
            className="font-cormorant font-light italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
          >
            {locale === 'en' ? 'We sculpt confidence.' : 'Nosotros esculpimos confianza.'}
          </p>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent mb-16" />

        {/* Intro copy */}
        <div ref={bioRef} className="max-w-2xl mb-20">
          <p className="font-jakarta text-white/60 text-lg leading-relaxed">
            {locale === 'en' ? (
              <>
                At <strong className="text-white/90">Debod Dental Clinic</strong>, Argüelles, we practise{' '}
                <strong className="text-white/90">honest dentistry</strong>: transparent diagnoses,
                cutting-edge technology and a multidisciplinary team of specialists who only recommend
                what you genuinely need. Because we believe the best dentistry is the kind that restores
                confidence, not the kind that takes it away.
              </>
            ) : (
              <>
                En <strong className="text-white/90">Debod Dental Clinic</strong>, Argüelles, practicamos la{' '}
                <strong className="text-white/90">odontología honesta</strong>: diagnósticos transparentes,
                tecnología de vanguardia y un equipo multidisciplinar de especialistas que solo te recomienda
                lo que realmente necesitas. Porque creemos que la mejor odontología es la que devuelve
                confianza, no la que la toma.
              </>
            )}
          </p>
        </div>

        {/* Values Grid — Odontología Honesta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                ref={el => valuesRef.current[i] = el}
                className="group rounded-4xl border border-white/8 hover:border-gold/30 bg-white/4 backdrop-blur-sm p-7 flex flex-col gap-5 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white text-lg mb-2 leading-tight">{tf(v, 'title', locale)}</h3>
                  <p className="font-jakarta text-white/55 text-sm leading-relaxed">{tf(v, 'description', locale)}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats row with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/8">
          {[
            { value: 15, suffix: '+', label: locale === 'en' ? 'years of experience' : 'años de experiencia' },
            { value: 350, suffix: '+', label: locale === 'en' ? 'on Google Reviews' : 'en Google Reviews' },
            { value: 2023, label: locale === 'en' ? 'WhiteSmile Award' : 'Premio WhiteSmile' },
            { value: 60, suffix: 'm', label: locale === 'en' ? 'Flexible financing' : 'Financiación flexible' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-outfit font-bold text-4xl text-gold mb-1">
                <Counter value={stat.value} suffix={stat.suffix || ''} duration={2000} />
              </div>
              <div className="font-jakarta text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to={locale === 'en' ? enPathFor('/contacto/') : '/contacto/'}
            className="btn-magnetic inline-flex items-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-300"
          >
            {locale === 'en' ? 'Meet our team → Book your visit' : 'Conoce a nuestro equipo → Agenda tu visita'}
          </Link>
        </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  )
}
