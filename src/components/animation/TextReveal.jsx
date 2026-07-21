import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function TextReveal({ children, className = '', start = 'top 84%', stagger = 0.055 }) {
  const wrapRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const text = textRef.current
    if (!wrap || !text || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let split
    let tween
    let cancelled = false
    document.fonts.ready.then(() => {
      if (cancelled) return
      split = SplitText.create(text, { type: 'lines,words', mask: 'lines', linesClass: 'dd-splitLine', wordsClass: 'dd-splitWord' })
      tween = gsap.from(split.words, {
        yPercent: 115,
        autoAlpha: 0,
        duration: 0.82,
        stagger,
        ease: 'expo.out',
        scrollTrigger: { trigger: wrap, start, once: true },
      })
    })

    return () => {
      cancelled = true
      tween?.scrollTrigger?.kill()
      tween?.kill()
      split?.revert()
    }
  }, [start, stagger])

  return <div ref={wrapRef} className={`dd-textReveal ${className}`}><div ref={textRef}>{children}</div></div>
}
