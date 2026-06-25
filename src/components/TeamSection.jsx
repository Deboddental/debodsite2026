import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { teamMembers } from '../data/team'

gsap.registerPlugin(ScrollTrigger)

// Home preview of the clinical team — builds trust ("a real face behind the
// clinic") and links through to the full /equipo/ pages.
export default function TeamSection() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 82%' },
      })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.7, ease: 'power3.out', delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-pearl"
      aria-label="Equipo de especialistas de Debod Dental Clinic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
            Nuestro equipo
          </span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-charcoal tracking-tight mb-5 leading-tight">
            Especialistas que ponen{' '}
            <em className="font-cormorant font-light italic text-gold">rostro</em> a tu confianza
          </h2>
          <p className="font-jakarta text-slate text-lg leading-relaxed">
            Un equipo multidisciplinar de odontólogos de primer nivel, cada uno referente en su especialidad.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <Link
              key={member.slug}
              ref={(el) => (cardsRef.current[i] = el)}
              to={`/equipo/${member.slug}/`}
              className="group bg-white rounded-4xl overflow-hidden border border-charcoal/5 hover:border-gold/40 hover:shadow-xl hover:shadow-black/6 transition-all duration-400"
            >
              <div className="h-64 overflow-hidden bg-charcoal/5">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-outfit font-semibold text-charcoal text-xl mb-1 group-hover:text-gold transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="font-jakarta text-slate text-sm mb-4">{member.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-jakarta font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to full team page */}
        <div className="text-center mt-12">
          <Link
            to="/equipo/"
            className="inline-flex items-center gap-2 font-jakarta font-semibold text-sm text-charcoal border border-charcoal/20 px-6 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Conoce a todo el equipo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
