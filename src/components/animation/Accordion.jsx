import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ question, children, open, onToggle }) {
  const contentRef = useRef(null)
  const iconRef = useRef(null)
  const initialized = useRef(false)

  useLayoutEffect(() => {
    const content = contentRef.current
    const icon = iconRef.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!initialized.current) {
      gsap.set(content, { height: open ? 'auto' : 0, overflow: 'hidden' })
      gsap.set(icon, { rotation: open ? 180 : 0 })
      initialized.current = true
      return undefined
    }

    if (reduced) {
      gsap.set(content, { height: open ? 'auto' : 0 })
      gsap.set(icon, { rotation: open ? 180 : 0 })
      return undefined
    }

    const timeline = gsap.timeline({ defaults: { duration: 0.65, ease: 'expo.inOut' } })
    timeline.to(content, { height: open ? 'auto' : 0 }, 0).to(icon, { rotation: open ? 180 : 0 }, 0)
    if (open) timeline.fromTo(content.firstElementChild, { yPercent: 35, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: 'expo.out' }, 0.2)
    return () => timeline.kill()
  }, [open])

  return <article className={`dd-accordionItem ${open ? 'open' : ''}`}>
    <button type="button" aria-expanded={open} onClick={onToggle}>
      <span>{question}</span><ChevronDown ref={iconRef} aria-hidden="true" />
    </button>
    <div ref={contentRef} className="dd-accordionContent"><div>{children}</div></div>
  </article>
}
