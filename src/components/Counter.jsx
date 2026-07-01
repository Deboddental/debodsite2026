import { useEffect, useRef, useState } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el) } },
      { threshold: 0.3, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

export default function Counter({ value, suffix = '', prefix = '', duration = 2000, decimals = 0 }) {
  const [ref, inView] = useInView()
  const [display, setDisplay] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true
    const start = performance.now()
    const numValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, ''), 10) : value

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(numValue * eased * Math.pow(10, decimals)) / Math.pow(10, decimals))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, value, duration, decimals])

  return (
    <span ref={ref} className="counter-value">
      {prefix}{display.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  )
}

