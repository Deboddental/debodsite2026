import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '../hooks/useLocale'

gsap.registerPlugin(ScrollTrigger)

// Real patient video testimonials (DEBOD media, compressed to web 720p).
// preload="none" + poster keeps the page light until the user hits play.
const videos = [
  { src: '/videos/testimonios/testimonio-1.mp4', poster: '/videos/testimonios/testimonio-1.jpg', caption: 'Paciente · Debod Dental Clinic' },
  { src: '/videos/testimonios/testimonio-2.mp4', poster: '/videos/testimonios/testimonio-2.jpg', caption: 'Paciente · Debod Dental Clinic' },
  { src: '/videos/testimonios/testimonio-3.mp4', poster: '/videos/testimonios/testimonio-3.jpg', caption: 'Paciente · Debod Dental Clinic' },
]

export default function VideoTestimonials() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const gridRef = useRef(null)
  const locale = useLocale()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0, y: 28, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 82%' },
      })
      gsap.from(gridRef.current.children, {
        opacity: 0, y: 36, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-charcoal"
      aria-label={locale === 'en' ? 'Video testimonials from Debod Dental Clinic patients' : 'Testimonios en vídeo de pacientes de Debod Dental Clinic'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
            {locale === 'en' ? 'Video testimonials' : 'Testimonios en vídeo'}
          </span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-pearl tracking-tight mb-5 leading-tight">
            {locale === 'en' ? 'Real patients,' : 'Pacientes reales,'}{' '}
            <em className="font-cormorant font-light italic text-gold">{locale === 'en' ? 'their words' : 'sus palabras'}</em>
          </h2>
          <p className="font-jakarta text-pearl/70 text-lg leading-relaxed">
            {locale === 'en'
              ? 'Hear first-hand from those who have already transformed their smile with us.'
              : 'Escucha de primera mano la experiencia de quienes ya han transformado su sonrisa con nosotros.'}
          </p>
        </div>

        {/* Video grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <figure
              key={i}
              className="rounded-3xl overflow-hidden bg-black border border-white/10 shadow-xl shadow-black/30"
            >
              <video
                className="w-full aspect-video object-cover bg-black"
                controls
                preload="none"
                playsInline
                poster={v.poster}
              >
                <source src={v.src} type="video/mp4" />
                {locale === 'en' ? 'Your browser does not support video playback.' : 'Tu navegador no admite la reproducción de vídeo.'}
              </video>
              <figcaption className="px-4 py-3 font-jakarta text-xs text-pearl/60 tracking-wide">
                {locale === 'en' ? v.caption.replace('Paciente', 'Patient') : v.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
