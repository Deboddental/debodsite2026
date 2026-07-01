import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [phase, setPhase] = useState('enter') // enter → visible → exit

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('visible'), 100)
    const exitTimer = setTimeout(() => setPhase('exit'), 1800)
    const removeTimer = setTimeout(() => setPhase('gone'), 2400)
    return () => { clearTimeout(enterTimer); clearTimeout(exitTimer); clearTimeout(removeTimer) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-charcoal select-none
        ${phase === 'exit' ? 'loading-fade-out' : ''}`}
      aria-hidden="true"
    >
      {/* Logo */}
      <div className={`loading-logo-pulse ${phase === 'enter' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} transition-all duration-700 ease-out`}>
        <img
          src="/logo-light.webp"
          alt="Debod Dental Clinic"
          className="w-48 md:w-60 h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* Spinner */}
      <div className={`mt-10 ${phase === 'enter' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 delay-500`}>
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full loading-spinner" />
      </div>
    </div>
  )
}
