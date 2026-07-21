import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'

const VIDEO_BASE = '/videos/founder/javier-pimienta-founder'

export default function FounderVideoSection({ en = false }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const close = () => {
    videoRef.current?.pause()
    setOpen(false)
  }

  return (
    <section className="dd-section dd-founder" aria-labelledby="founder-video-title">
      <div className="dd-shell">
        <div className="dd-founderIntro">
          <div className="dd-eyebrow"><span />{en ? 'THE VISION BEHIND DEBOD' : 'LA VISIÓN DETRÁS DE DEBOD'}</div>
          <h2 id="founder-video-title">
            {en ? <>Precision in every detail.<br /><em>Care with purpose.</em></> : <>Precisión en cada detalle.<br /><em>Atención con propósito.</em></>}
          </h2>
          <p>{en ? 'Javier Pimienta shares the human and clinical vision that guides every decision at Debod Dental Clinic.' : 'Javier Pimienta comparte la visión humana y clínica que guía cada decisión en Debod Dental Clinic.'}</p>
        </div>

        <button className="dd-founderPoster" type="button" onClick={() => setOpen(true)} aria-label={en ? 'Play founder video' : 'Reproducir video del fundador'}>
          <img src={`${VIDEO_BASE}-poster.jpg`} loading="lazy" decoding="async" alt={en ? 'Javier Pimienta at Debod Dental Clinic' : 'Javier Pimienta en Debod Dental Clinic'} />
          <span className="dd-founderShade" />
          <span className="dd-founderPlay"><Play fill="currentColor" aria-hidden="true" /></span>
          <span className="dd-founderMeta"><b>Javier Pimienta</b><small>{en ? 'Founder & Director · 1:30' : 'Fundador y Director · 1:30'}</small></span>
        </button>
      </div>

      {open && createPortal(
        <div className="dd-videoModal" role="dialog" aria-modal="true" aria-label={en ? 'Founder video' : 'Video del fundador'} onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}>
          <button ref={closeRef} className="dd-videoClose" type="button" onClick={close} aria-label={en ? 'Close video' : 'Cerrar video'}><X /></button>
          <div className="dd-videoFrame">
            <video ref={videoRef} controls autoPlay playsInline preload="metadata" poster={`${VIDEO_BASE}-poster.jpg`}>
              <source src={`${VIDEO_BASE}.webm`} type="video/webm" />
              <source src={`${VIDEO_BASE}.mp4`} type="video/mp4" />
              {en ? 'Your browser cannot play this video.' : 'Tu navegador no puede reproducir este video.'}
            </video>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
