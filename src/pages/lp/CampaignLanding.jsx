import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Check, Star, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { landingBases, FIRST_VISIT } from '../../data/campaignLandings'
import { ratingSummary, reviews } from '../../data/reviews'
import LeadForm from '../../components/LeadForm'
import VideoTestimonialGrid from '../../components/VideoTestimonialGrid'
import { videosForCategory, videoCatForBase } from '../../data/videoTestimonials'
import FAQ from '../../components/FAQ'

function TrustSignal({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={15} style={{ color: '#FBBC04' }} className="fill-current" />)}</div>
      <span className="font-jakarta text-sm font-medium">
        {ratingSummary.ratingValue} · {ratingSummary.reviewCount}+ reseñas en Google · Premio WhiteSmile 2023
      </span>
    </div>
  )
}

export default function CampaignLanding({ landing }) {
  const base = landingBases[landing.base]
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    const el = document.getElementById('formulario')
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setFormInView(e.isIntersecting), { threshold: 0.18 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [landing.slug])

  if (!base) return <Navigate to="/" replace />

  const scrollToForm = () => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const featured = reviews.slice(0, 3)
  const videoTests = videosForCategory(videoCatForBase(landing.base))

  return (
    <>
      <Helmet>
        <title>{landing.metaTitle}</title>
        <meta name="description" content={landing.metaDescription} />
        {/* Paid landing — keep out of the organic index so it never competes with the SEO pages. */}
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={landing.h1} />
        <meta property="og:description" content={landing.metaDescription} />
      </Helmet>

      {/* ── Hero + form (above the fold) ── */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <img src={base.heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="font-jakarta text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{landing.subtitle}</p>
            <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">{landing.h1}</h1>
            <ul className="space-y-2.5 mb-6">
              {base.benefits.slice(0, 4).map((b) => (
                <li key={b} className="flex items-start gap-2.5 font-jakarta text-white/85 text-sm sm:text-base">
                  <Check size={18} className="text-gold shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mb-6">
              <button onClick={scrollToForm} className="flex items-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors shadow-xl shadow-gold/25">
                <MessageCircle size={17} /> Reservar mi cita
              </button>
              <a href="#precios" className="flex items-center gap-2 border border-white/25 text-white font-outfit font-semibold text-sm px-7 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors">
                Ver precios y proceso
              </a>
            </div>
            <TrustSignal className="text-white/85" />
          </div>
          <div className="lg:pt-2"><LeadForm servicio={base.servicio} /></div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <p className="font-jakarta text-gold/60 text-[11px] font-semibold uppercase tracking-[0.25em] mb-2">Por qué Debod</p>
        <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-8">Tu tratamiento, con todo el control de calidad</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {base.benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-pearl border border-charcoal/5 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0"><Check size={16} className="text-gold" /></div>
              <p className="font-jakarta text-slate text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Precio / transparencia ── */}
      <section id="precios" className="bg-pearl py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="font-jakarta text-gold/60 text-[11px] font-semibold uppercase tracking-[0.25em] mb-2">Precio</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-4">Presupuesto cerrado, sin sorpresas</h2>
          {base.priceFrom && <p className="font-outfit font-extrabold text-4xl text-gold mb-4">{base.priceFrom}</p>}
          <p className="font-jakarta text-slate leading-relaxed mb-6">{base.priceLead}</p>
          <div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-2 bg-white border border-charcoal/8 rounded-2xl px-6 py-4 font-jakarta text-sm text-charcoal">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> Financiación hasta 60 meses</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> 0 % los primeros 12 meses</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> {FIRST_VISIT}</span>
          </div>
          <div className="mt-8"><button onClick={scrollToForm} className="bg-gold text-charcoal font-outfit font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors">Pedir mi presupuesto sin compromiso</button></div>
        </div>
      </section>

      {/* ── Testimonios: vídeos reales por tratamiento, o reseñas ── */}
      {videoTests.length > 0 ? (
        <VideoTestimonialGrid videos={videoTests} title="Lo que dicen nuestros pacientes" />
      ) : (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-8 text-center">Lo que dicen nuestros pacientes</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((r) => (
              <div key={r.name} className="bg-white border border-charcoal/8 rounded-2xl p-6 shadow-sm">
                <div className="flex mb-3">{[...Array(r.rating || 5)].map((_, i) => <Star key={i} size={14} style={{ color: '#FBBC04' }} className="fill-current" />)}</div>
                <p className="font-jakarta text-slate text-sm leading-relaxed mb-4 line-clamp-6">{r.text}</p>
                <p className="font-outfit font-semibold text-charcoal text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Proceso ── */}
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold mb-10 text-center">Cómo será tu tratamiento, paso a paso</h2>
          <div className="space-y-5">
            {base.process.map((s) => (
              <div key={s.n} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold text-charcoal font-outfit font-bold flex items-center justify-center shrink-0">{String(s.n).padStart(2, '0')}</div>
                <div><p className="font-outfit font-semibold text-lg">{s.title}</p><p className="font-jakarta text-white/60 text-sm">{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (emite FAQPage schema) ── */}
      <FAQ faqs={base.faqs.map((f) => ({ question: f.q, answer: f.a }))} eyebrow="Preguntas frecuentes" subtitle="Resolvemos las dudas más habituales antes de tu cita." />

      {/* ── CTA final ── */}
      <section className="bg-pearl py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-3">Tu cita empieza con una llamada</h2>
          <p className="font-jakarta text-slate mb-7">Cuéntanos tu caso sin compromiso. Te damos un plan claro y un presupuesto cerrado. {FIRST_VISIT}.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={scrollToForm} className="flex items-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm px-7 py-4 rounded-full hover:bg-gold-light transition-colors shadow-lg shadow-gold/25"><MessageCircle size={17} /> Reservar mi cita</button>
            <a href="tel:+34914476225" className="flex items-center gap-2 border border-charcoal/20 text-charcoal font-outfit font-semibold text-sm px-7 py-4 rounded-full hover:border-gold hover:text-gold transition-colors"><Phone size={16} /> 914 47 62 25</a>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA — hides when the form is on screen ── */}
      <div className={`lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-charcoal/10 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 ${formInView ? 'translate-y-full' : 'translate-y-0'}`} style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
        <div className="max-w-md mx-auto">
          <button onClick={scrollToForm} className="w-full flex items-center justify-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm py-3.5 rounded-full">Reservar mi cita ahora</button>
        </div>
      </div>
    </>
  )
}
