import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'
import { videoTestimonials } from '../data/videoTestimonials'

export default function VideoTestimonialsSection({ en = false }) {
  const [active, setActive] = useState(null)
  const closeRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!active) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event) => { if (event.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [active])

  const close = () => {
    videoRef.current?.pause()
    setActive(null)
  }

  return (
    <section className="dd-section dd-videoStories">
      <div className="dd-shell">
        <div className="dd-eyebrow"><span />{en ? 'IN THEIR WORDS' : 'EN SUS PALABRAS'}</div>
        <h2>{en ? 'Hear it from them.' : 'Escúchalo de ellos.'}</h2>
        <p className="dd-intro">{en ? 'Real patients share what their treatment and care felt like.' : 'Pacientes reales comparten cómo vivieron su tratamiento y atención.'}</p>
        <div className="dd-videoRail">
          {videoTestimonials.slice(0, 4).map((item) => (
            <article key={item.src}>
              <button type="button" onClick={() => setActive(item)} aria-label={`${en ? 'Play testimonial from' : 'Reproducir testimonio de'} ${item.name}`}>
                <img loading="lazy" decoding="async" src={item.poster} alt={item.name} />
                <span className="dd-play"><Play fill="currentColor" aria-hidden="true" /></span>
                <span className="dd-testimonialMeta"><b>{item.name}</b><small>{item.label}</small></span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && createPortal(
        <div className="dd-videoModal" role="dialog" aria-modal="true" aria-label={`${en ? 'Patient testimonial' : 'Testimonio del paciente'}: ${active.name}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}>
          <button ref={closeRef} className="dd-videoClose" type="button" onClick={close} aria-label={en ? 'Close video' : 'Cerrar video'}><X /></button>
          <div className={`dd-videoFrame dd-videoFrame--${active.aspect || 'video'}`}>
            <video ref={videoRef} controls autoPlay playsInline preload="metadata" poster={active.poster}>
              <source src={active.src} type="video/mp4" />
              {en ? 'Your browser cannot play this video.' : 'Tu navegador no puede reproducir este video.'}
            </video>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
