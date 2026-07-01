import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Layers, Smile } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'
import { useTilt3D } from '../hooks/useTilt3D'

gsap.registerPlugin(ScrollTrigger)

const CARD_IMAGES = [
  '/Images/tratamientos/webp/rehabilitacion.webp',
  '/Images/tratamientos/webp/implantologia.webp',
  '/Images/tratamientos/webp/estetica.webp',
]

const treatments = [
  {
    index: '01',
    category: 'Rehabilitación Oral',
    category_en: 'Full Oral Rehabilitation',
    title: 'Devolvemos función\ny estética completas.',
    title_en: 'Restoring complete function\nand aesthetics.',
    description:
      'La Rehabilitación Oral integral es nuestro tratamiento más avanzado. Ideal para pacientes con desgaste dental severo, pérdida de múltiples piezas o problemas funcionales al masticar. Diseñamos tu nueva sonrisa digitalmente antes de tocar un solo diente.',
    description_en:
      'Comprehensive full oral rehabilitation is our most advanced treatment. Ideal for patients with severe tooth wear, the loss of multiple teeth or functional difficulties when chewing. We design your new smile digitally before touching a single tooth.',
    treatments: ['Coronas sobre Implantes', 'Prótesis Fija', 'Vonlay', 'Carillas de Porcelana'],
    treatments_en: ['Implant-Supported Crowns', 'Fixed Prostheses', 'Vonlay', 'Porcelain Veneers'],
    cta: 'Ver Rehabilitación',
    cta_en: 'View Rehabilitation',
    href: '/tratamientos/implantes-dentales-arguelles-madrid-espana/',
    icon: Layers,
    image: CARD_IMAGES[0],
    accentColor: '#D4AF37',
  },
  {
    index: '02',
    category: 'Implantología Digital',
    category_en: 'Digital Implantology',
    title: 'Implantes con\ncirugía guiada 3D.',
    title_en: 'Implants with\n3D guided surgery.',
    description:
      'Utilizamos escáneres intraorales 3D y planificación virtual para una implantología de precisión milimétrica. Nuestro protocolo de cirugía guiada minimiza el tiempo quirúrgico y acelera la recuperación del paciente.',
    description_en:
      'We use 3D intraoral scanners and virtual planning for implantology of millimetric precision. Our guided surgery protocol minimises operating time and speeds up the patient’s recovery.',
    treatments: ['Implantes Unitarios', 'Cirugía Guiada', 'Corona sobre Implante', 'Injerto Óseo'],
    treatments_en: ['Single Implants', 'Guided Surgery', 'Implant-Supported Crown', 'Bone Graft'],
    cta: 'Ver Implantología',
    cta_en: 'View Implantology',
    href: '/dentista-de-implantes-arguelles-madrid-espana/',
    icon: Zap,
    image: CARD_IMAGES[1],
    accentColor: '#60A5FA',
  },
  {
    index: '03',
    category: 'Ortodoncia & Estética',
    category_en: 'Orthodontics & Cosmetic Dentistry',
    title: 'Invisalign® y\nsonrisas perfectas.',
    title_en: 'Invisalign® and\nperfect smiles.',
    description:
      'El Dr. Víctor Guerrero, referente europeo en ortodoncia invisible, diseña tratamientos con Invisalign® y anclaje esquelético cortical que combinan eficacia clínica con una experiencia de paciente excepcional.',
    description_en:
      'Dr Víctor Guerrero, a European authority in invisible orthodontics, designs treatments with Invisalign® and cortical skeletal anchorage that combine clinical efficacy with an exceptional patient experience.',
    treatments: ['Invisalign®', 'Alineadores', 'Retenedores', 'Blanqueamiento Láser'],
    treatments_en: ['Invisalign®', 'Aligners', 'Retainers', 'Laser Whitening'],
    cta: 'Ver Ortodoncia',
    cta_en: 'View Orthodontics',
    href: '/ortodoncista-arguelles-madrid-espana/',
    icon: Smile,
    image: CARD_IMAGES[2],
    accentColor: '#A78BFA',
  },
]

export default function Treatments() {
  const locale = useLocale()
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const labelRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 767px)', () => {
        gsap.from(labelRef.current, {
          opacity: 0, y: 12, duration: 0.45,
          scrollTrigger: { trigger: labelRef.current, start: 'top 88%' },
        })
        cardsRef.current.forEach((card, i) => {
          if (!card) return
          const isLast = i === cardsRef.current.length - 1
          if (!isLast) {
            gsap.to(card, {
              scale: 0.93, opacity: 0.5,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: cardsRef.current[i + 1],
                start: 'top 85%', end: 'top 20%', scrub: 0.8,
              },
            })
          }
          gsap.from(card, {
            opacity: 0, y: 40, duration: 0.55, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
          })
        })
      })

      mm.add('(min-width: 768px)', () => {
        gsap.from(labelRef.current, {
          opacity: 0, y: 20, duration: 0.8,
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%' },
        })
        cardsRef.current.forEach((card, i) => {
          if (!card) return
          const isLast = i === cardsRef.current.length - 1
          if (!isLast) {
            gsap.to(card, {
              scale: 0.9, filter: 'blur(12px)', opacity: 0.4,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: cardsRef.current[i + 1],
                start: 'top 85%', end: 'top 20%', scrub: 0.8,
              },
            })
          }
          gsap.from(card, {
            opacity: 0, y: 80, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="tratamientos"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-pearl"
      aria-label={locale === 'en' ? 'Treatments at Debod Dental Clinic in Argüelles, Madrid' : 'Tratamientos de Debod Dental Clinic en Argüelles, Madrid'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={labelRef} className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              {locale === 'en' ? 'Treatments of Excellence' : 'Tratamientos de Excelencia'}
            </span>
            <h2 className="font-outfit font-bold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight">
              {locale === 'en' ? 'Every case, a unique' : 'Cada caso, un enfoque'}{' '}
              <em className="font-cormorant font-light italic text-gold">{locale === 'en' ? 'approach' : 'único'}</em>
            </h2>
          </div>
          <a
            href={locale === 'en' ? enPathFor('/servicios/') : '/servicios/'}
            className="btn-magnetic flex items-center gap-2 font-jakarta font-semibold text-sm text-charcoal border border-charcoal/20 px-5 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 shrink-0"
          >
            {locale === 'en' ? 'All treatments' : 'Todos los tratamientos'} <ArrowRight size={14} />
          </a>
        </div>

        {/* Treatment Cards Stack */}
        <div className="space-y-8">
          {treatments.map((t, i) => {
            const Icon = t.icon
            return (
              <article
                key={t.index}
                ref={el => cardsRef.current[i] = el}
                className="tilt-card relative rounded-4xl overflow-hidden min-h-[480px] md:min-h-[520px] flex items-end group cursor-pointer"
                style={{ willChange: 'transform, opacity, filter' }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = (e.clientX - rect.left) / rect.width
                  const y = (e.clientY - rect.top) / rect.height
                  const tiltX = (y - 0.5) * -8
                  const tiltY = (x - 0.5) * 8
                  card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01,1.01,1.01)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-charcoal/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />

                {/* Index label (top-right) */}
                <div className="absolute top-8 right-8 font-outfit font-bold text-6xl text-white/8 select-none">
                  {t.index}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 w-full grid md:grid-cols-2 gap-8 items-end">
                  {/* Left: Text */}
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-jakarta font-semibold"
                      style={{ background: `${t.accentColor}20`, color: t.accentColor, border: `1px solid ${t.accentColor}40` }}
                    >
                      <Icon size={12} />
                      {locale === 'en' ? t.category_en : t.category}
                    </div>
                    <h3 className="font-outfit font-bold text-3xl md:text-4xl text-white leading-tight mb-5 whitespace-pre-line">
                      {locale === 'en' ? t.title_en : t.title}
                    </h3>
                    <p className="font-jakarta text-white/65 text-base leading-relaxed max-w-md">
                      {locale === 'en' ? t.description_en : t.description}
                    </p>
                  </div>

                  {/* Right: Treatment list + CTA */}
                  <div className="flex flex-col gap-5 md:items-end">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {(locale === 'en' ? t.treatments_en : t.treatments).map(item => (
                        <span
                          key={item}
                          className="font-jakarta text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/15 backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={locale === 'en' ? enPathFor(t.href) : t.href}
                      className="btn-magnetic inline-flex items-center gap-2.5 font-outfit font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                      style={{
                        background: t.accentColor,
                        color: t.accentColor === '#D4AF37' ? '#1A1A1A' : '#fff',
                      }}
                    >
                      {locale === 'en' ? t.cta_en : t.cta} <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
