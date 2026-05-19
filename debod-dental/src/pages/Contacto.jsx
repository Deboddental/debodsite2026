import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ChevronDown, CheckCircle, Loader2 } from 'lucide-react'
import { getTrackingData } from '../utils/tracking'

const WA_NUMBER = '34689104714'

const phoneCountryCodes = [
  { code: '+34', label: '+34 ES', placeholder: '612 34 56 78' },
  { code: '+33', label: '+33 FR', placeholder: '6 12 34 56 78' },
  { code: '+44', label: '+44 UK', placeholder: '7700 900123' },
  { code: '+1',  label: '+1 US/CA', placeholder: '555 123 4567' },
  { code: '+351',label: '+351 PT', placeholder: '912 345 678' },
  { code: '+49', label: '+49 DE', placeholder: '1512 3456789' },
  { code: '+39', label: '+39 IT', placeholder: '312 345 6789' },
]

const servicios = [
  'Rehabilitación Oral',
  'Implantes Dentales',
  'Odontología Estética',
  'Ortodoncia / Invisalign',
  'Periodoncia',
  'Endodoncia',
  'Odontopediatría',
  'Cirugía Oral',
  'Otro Servicio',
]

const comoOpciones = [
  'Google / Búsqueda',
  'Google Maps',
  'Instagram',
  'Facebook',
  'TikTok',
  'Recomendación de un paciente',
  'Recomendación de un doctor',
  'Pasé por la clínica',
  'Otro',
]

function combinePhone(rawPhone, countryCode) {
  if (!rawPhone) return ''
  const hasPlus = String(rawPhone).trim().startsWith('+')
  const digits  = String(rawPhone).replace(/\D/g, '')
  if (!digits) return ''
  if (hasPlus) return '+' + digits
  const cc = (countryCode || '+34').replace(/\D/g, '')
  if (digits.startsWith(cc) && digits.length > cc.length + 8) return '+' + digits
  return '+' + cc + digits
}

function buildWhatsAppUrl(formData, normalizedPhone) {
  const servicio =
    formData.servicio === 'Otro Servicio' && formData.otroServicio
      ? formData.otroServicio
      : formData.servicio || 'Consulta General'

  const lines = [
    '¡Hola Debod Dental! Me gustaría agendar una cita.',
    '',
    `Nombre: ${formData.firstName} ${formData.lastName}`,
    `Email: ${formData.email}`,
    `Teléfono: ${normalizedPhone}`,
    `Servicio: ${servicio}`,
  ]
  if (formData.comoNosConocio) lines.push(`Cómo nos conoció: ${formData.comoNosConocio}`)
  if (formData.mensaje) { lines.push(''); lines.push(`Mensaje: ${formData.mensaje}`) }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

const inputBase =
  'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 font-jakarta text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300'

const labelBase = 'block font-jakarta text-white/60 text-xs font-semibold uppercase tracking-wider mb-2'

export default function Contacto() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telefono: '',
    phoneCountryCode: '+34',
    servicio: '',
    otroServicio: '',
    comoNosConocio: '',
    mensaje: '',
  })
  const [loading, setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const tracking       = getTrackingData()
    const normalizedPhone = combinePhone(formData.telefono, formData.phoneCountryCode)
    const servicio =
      formData.servicio === 'Otro Servicio' && formData.otroServicio
        ? formData.otroServicio
        : formData.servicio || 'Consulta General'

    const eventId =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

    // dataLayer push — independiente del backend
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'generate_lead',
        event_id: eventId,
        user_data: {
          email:          formData.email,
          phone:          normalizedPhone,
          first_name:     formData.firstName,
          last_name:      formData.lastName,
          external_id:    tracking.external_id,
          fbp:            tracking.fbp,
          fbc:            tracking.fbc,
          client_user_agent: navigator.userAgent,
        },
        lead: {
          servicio,
          como_nos_conocio: formData.comoNosConocio || '',
          mensaje:          formData.mensaje || '',
        },
        attribution: {
          utm_source:               tracking.utm_source,
          utm_medium:               tracking.utm_medium,
          utm_campaign:             tracking.utm_campaign,
          utm_term:                 tracking.utm_term,
          utm_content:              tracking.utm_content,
          gclid:                    tracking.gclid,
          fbclid:                   tracking.fbclid,
          ttclid:                   tracking.ttclid,
          first_touch_source:       tracking.first_touch_source,
          first_touch_landing_page: tracking.first_touch_landing_page,
          first_touch_date:         tracking.first_touch_date,
          last_touch_source:        tracking.last_touch_source,
          landing_page_url:         tracking.landing_page_url,
        },
        conversion_page:      tracking.conversion_page,
        pages_visited:        tracking.pages_visited,
        conversion_timestamp: tracking.conversion_timestamp,
      })
    }

    // POST /api/lead — graceful fallback si no existe aún
    let waUrl = buildWhatsAppUrl(formData, normalizedPhone)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: {
            firstName:       formData.firstName.trim(),
            lastName:        formData.lastName.trim(),
            email:           formData.email.trim(),
            phone:           formData.telefono.trim(),
            servicio:        formData.servicio,
            otroServicio:    formData.otroServicio.trim(),
            sucursal:        'Debod Dental · Argüelles',
            comoNosConocio:  formData.comoNosConocio,
            mensaje:         formData.mensaje.trim(),
            phoneCountryCode: formData.phoneCountryCode,
          },
          tracking,
          event_id: eventId,
        }),
      })
      if (res.ok) {
        const data = await res.json().catch(() => ({}))
        if (data.whatsappUrl) waUrl = data.whatsappUrl
      }
    } catch {
      // backend no disponible aún — fallback a WhatsApp directo
    }

    setLoading(false)
    setSubmitted(true)
    setTimeout(() => { window.open(waUrl, '_blank') }, 700)
  }

  return (
    <>
      <Helmet>
        <title>Contacto — Debod Dental Clinic · Argüelles, Madrid</title>
        <meta
          name="description"
          content="Agenda tu cita en Debod Dental Clinic. Especialistas en Rehabilitación Oral, Implantología y Estética Dental en Argüelles, Madrid. Primera visita diagnóstica incluida."
        />
        <link rel="canonical" href="https://www.deboddentalclinic.com/contacto/" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden -mt-20 pt-40 md:pt-48 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/8 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 font-jakarta text-xs text-white/40 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/70">Contacto</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-dot" />
            <span className="font-jakarta text-gold text-xs font-semibold tracking-widest uppercase">
              Argüelles, Madrid · Primera visita incluida
            </span>
          </div>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl text-white mb-4 leading-tight">
            Agenda tu <em className="font-cormorant font-light italic text-gold not-italic">cita</em>
          </h1>
          <p className="font-jakarta text-white/60 text-base md:text-lg max-w-lg mx-auto">
            Rellena el formulario y te contactamos en menos de 24 h — o te abrimos WhatsApp directamente.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-charcoal pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-outfit font-bold text-xl text-white mb-6">Información de contacto</h2>
                <address className="not-italic space-y-5">
                  <div className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta text-white/80 text-sm">C. de Ferraz, 24</p>
                      <p className="font-jakarta text-white/50 text-sm">Argüelles · Moncloa-Aravaca</p>
                      <p className="font-jakarta text-white/50 text-sm">28008 Madrid, España</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-gold" />
                    </div>
                    <a href="tel:+34689104714" className="font-jakarta text-white/80 text-sm hover:text-gold transition-colors">
                      +34 689 10 47 14
                    </a>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-gold" />
                    </div>
                    <a href="mailto:info@deboddentalclinic.com" className="font-jakarta text-white/80 text-sm hover:text-gold transition-colors">
                      info@deboddentalclinic.com
                    </a>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta text-white/80 text-sm">Lun – Vie: 9:00 – 20:00</p>
                      <p className="font-jakarta text-white/50 text-sm">Sáb: 9:00 – 14:00</p>
                    </div>
                  </div>
                </address>
              </div>

              <a
                href="https://maps.google.com/?q=C.+de+Ferraz,+24,+28008+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-gold hover:underline"
              >
                Ver en Google Maps <ArrowUpRight size={14} />
              </a>

              {/* Trust signals */}
              <div className="border-t border-white/8 pt-6 space-y-3">
                {[
                  'Primera visita diagnóstica sin coste',
                  'Respuesta en menos de 24 h',
                  'Presupuesto personalizado y sin compromiso',
                  'Financiación hasta 60 meses disponible',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    <p className="font-jakarta text-white/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle size={30} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-xl text-white mb-2">¡Mensaje enviado!</h3>
                      <p className="font-jakarta text-white/60 text-sm">
                        Abriendo WhatsApp para confirmar tu cita…
                      </p>
                    </div>
                    <p className="font-jakarta text-white/40 text-xs">
                      ¿No se abrió?{' '}
                      <a
                        href={`https://wa.me/${WA_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline"
                      >
                        Toca aquí para abrir WhatsApp
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Nombre + Apellido */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase}>Nombre *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="María"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className={labelBase}>Apellido *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="García"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelBase}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maria@ejemplo.com"
                        className={inputBase}
                      />
                    </div>

                    {/* Teléfono con country code */}
                    <div>
                      <label className={labelBase}>Teléfono / WhatsApp *</label>
                      <div className="flex items-stretch rounded-xl bg-white/5 border border-white/10 focus-within:border-gold/50 focus-within:bg-white/8 transition-all duration-300 overflow-hidden">
                        <div className="relative flex items-center border-r border-white/10 shrink-0">
                          <select
                            name="phoneCountryCode"
                            value={formData.phoneCountryCode}
                            onChange={handleChange}
                            className="appearance-none bg-transparent pl-3 pr-7 py-3.5 text-white/70 font-jakarta text-sm focus:outline-none cursor-pointer"
                          >
                            {phoneCountryCodes.map((c) => (
                              <option key={c.code} value={c.code} className="bg-charcoal">
                                {c.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                        </div>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder={
                            (phoneCountryCodes.find((c) => c.code === formData.phoneCountryCode) || phoneCountryCodes[0]).placeholder
                          }
                          className="flex-1 px-4 py-3.5 bg-transparent text-white placeholder-white/25 font-jakarta text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Servicio */}
                    <div>
                      <label className={labelBase}>Servicio de interés</label>
                      {formData.servicio === 'Otro Servicio' ? (
                        <div className="relative">
                          <input
                            type="text"
                            name="otroServicio"
                            value={formData.otroServicio}
                            onChange={handleChange}
                            placeholder="Especifica el servicio…"
                            autoFocus
                            className={`${inputBase} pr-20`}
                          />
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, servicio: '', otroServicio: '' }))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/70 font-jakarta text-xs hover:text-gold transition-colors"
                          >
                            ← Volver
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <select
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleChange}
                            className={`${inputBase} appearance-none pr-10`}
                          >
                            <option value="">Seleccionar…</option>
                            {servicios.map((s) => (
                              <option key={s} value={s} className="bg-charcoal">{s}</option>
                            ))}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                        </div>
                      )}
                    </div>

                    {/* Cómo nos conociste */}
                    <div>
                      <label className={labelBase}>¿Cómo nos conociste?</label>
                      <div className="relative">
                        <select
                          name="comoNosConocio"
                          value={formData.comoNosConocio}
                          onChange={handleChange}
                          className={`${inputBase} appearance-none pr-10`}
                        >
                          <option value="">Seleccionar…</option>
                          {comoOpciones.map((o) => (
                            <option key={o} value={o} className="bg-charcoal">{o}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className={labelBase}>Mensaje (opcional)</label>
                      <textarea
                        name="mensaje"
                        rows={3}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos brevemente tu caso o cualquier duda…"
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="font-jakarta text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-gold text-charcoal font-outfit font-bold text-sm py-4 rounded-full hover:bg-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-gold/20"
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" /> Enviando…</>
                      ) : (
                        'Enviar y confirmar por WhatsApp'
                      )}
                    </button>

                    <p className="font-jakarta text-white/30 text-xs text-center">
                      Al enviar aceptas nuestra{' '}
                      <Link to="/politica-de-privacidad/" className="text-white/50 hover:text-gold transition-colors underline">
                        política de privacidad
                      </Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
