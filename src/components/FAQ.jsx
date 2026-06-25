import { useEffect, useRef, useState, useId } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'
import JsonLd from './ui/JsonLd'
import { faqSchema } from '../data/seo'

gsap.registerPlugin(ScrollTrigger)

// Accessible FAQ accordion. Renders the visible Q&A list AND (by default) the
// matching FAQPage JSON-LD so search engines / AI assistants can quote it.
export default function FAQ({
  faqs = [],
  eyebrow = 'Preguntas frecuentes',
  title,
  titleAccent = 'frecuentes',
  subtitle = 'Resolvemos las dudas más habituales antes de tu primera visita.',
  includeSchema = true,
}) {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const listRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)
  const baseId = useId()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 82%' },
      })
      gsap.from(listRef.current.children, {
        opacity: 0, y: 24, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  if (!faqs.length) return null

  // Default title with a gold cormorant-italic accent on the last word.
  const renderedTitle = title ?? (
    <>
      Preguntas <em className="font-cormorant font-light italic text-gold">{titleAccent}</em>
    </>
  )

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-pearl"
      aria-labelledby={`${baseId}-title`}
    >
      <div className="max-w-3xl mx-auto">
        {includeSchema && <JsonLd schema={faqSchema(faqs)} />}

        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
            {eyebrow}
          </span>
          <h2
            id={`${baseId}-title`}
            className="font-outfit font-bold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-5"
          >
            {renderedTitle}
          </h2>
          {subtitle && (
            <p className="font-jakarta text-slate text-lg leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Accordion */}
        <div ref={listRef} className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const panelId = `${baseId}-panel-${i}`
            const btnId = `${baseId}-btn-${i}`
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-3xl border transition-colors duration-300 ${
                  isOpen ? 'border-gold/40 shadow-lg shadow-black/5' : 'border-charcoal/8'
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6 cursor-pointer"
                  >
                    <span className="font-outfit font-semibold text-lg text-charcoal leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="font-jakarta text-slate leading-relaxed px-6 md:px-8 pb-6 md:pb-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
