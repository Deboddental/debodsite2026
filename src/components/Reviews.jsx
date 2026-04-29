import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews'

gsap.registerPlugin(ScrollTrigger)

export default function Reviews() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
      })

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power3.out',
          delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-charcoal/4"
      aria-label="Opiniones de pacientes de Debod Dental Clinic en Google"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
            Google Reviews
          </span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-4 leading-tight">
            La clínica mejor valorada{' '}
            <em className="font-cormorant font-light italic text-gold">en Argüelles</em>
          </h2>

          {/* Star rating display */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-outfit font-bold text-4xl text-charcoal">5.0</span>
            <span className="font-jakarta text-slate text-sm">en Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              ref={el => cardsRef.current[i] = el}
              className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-all duration-400 border border-charcoal/5 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-gold/30 shrink-0" />

              {/* Review text */}
              <p className="font-jakarta text-charcoal/80 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Treatment tag */}
              <span className="inline-block font-jakarta text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold w-fit">
                {r.treatment}
              </span>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/40 to-gold/70 flex items-center justify-center">
                    <span className="font-outfit font-bold text-xs text-charcoal">{r.initials}</span>
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-sm text-charcoal">{r.name}</p>
                    <p className="font-jakarta text-xs text-slate/70">{r.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Debod+Dental+Clinic+Argüelles+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 font-jakarta font-semibold text-sm text-charcoal border border-charcoal/20 px-6 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Ver todas las reseñas en Google
            <Star size={14} className="text-gold fill-gold" />
          </a>
        </div>
      </div>
    </section>
  )
}
