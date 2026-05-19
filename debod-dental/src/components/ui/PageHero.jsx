import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PageHero({ subtitle, title, description, imageUrl }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-anim]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2,
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative -mt-20 min-h-[48vh] flex items-end overflow-hidden bg-charcoal"
    >
      {/* Background image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
      )}
      {!imageUrl && (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/90" />
      )}

      {/* Content — starts below the navbar (pt-28) and sits at bottom via flex items-end */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-14 md:pb-20 w-full">
        {subtitle && (
          <p
            data-hero-anim
            className="font-jakarta text-gold text-sm uppercase tracking-[0.15em] mb-3"
          >
            {subtitle}
          </p>
        )}
        <h1
          data-hero-anim
          className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-pearl leading-tight mb-4"
        >
          {title}
        </h1>
        {description && (
          <p
            data-hero-anim
            className="font-jakarta text-pearl/70 text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
