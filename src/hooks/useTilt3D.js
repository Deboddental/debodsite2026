import { useRef, useCallback } from 'react'

export function useTilt3D(maxTilt = 8) {
  const ref = useRef(null)
  const stateRef = useRef({ isInside: false, rect: null })

  const handleMouseEnter = useCallback(() => {
    stateRef.current.isInside = true
    stateRef.current.rect = ref.current?.getBoundingClientRect() ?? null
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!stateRef.current.isInside || !stateRef.current.rect || !ref.current) return
    const { left, top, width, height } = stateRef.current.rect
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    const tiltX = (y - 0.5) * -maxTilt
    const tiltY = (x - 0.5) * maxTilt
    ref.current.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01,1.01,1.01)`
  }, [maxTilt])

  const handleMouseLeave = useCallback(() => {
    stateRef.current.isInside = false
    if (ref.current) {
      ref.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }
  }, [])

  return { ref, handlers: { onMouseEnter: handleMouseEnter, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave } }
}
