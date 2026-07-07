import { useState } from 'react'
import { CheckCircle, Loader2, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getTrackingData } from '../utils/tracking'
import { combinePhone, buildWhatsAppUrl, validateForm, sha256Hex } from '../utils/leadForm'

// Compact lead form for campaign landings AND treatment pages. Fires the IDENTICAL
// pipe as the contact page (getTrackingData → dataLayer generate_lead → /api/lead →
// WhatsApp fallback). `servicio` is pinned per page so every lead lands in the CRM
// already classified. Bilingual via `locale` (defaults 'es' — /lp/ landings are ES).
const T = {
  es: {
    header: 'Reserva tu cita', sub: 'Rellena y te confirmamos por WhatsApp',
    name: 'Nombre', surname: 'Apellido', email: 'Email', phone: 'Teléfono / WhatsApp',
    submit: 'Pedir cita por WhatsApp', sending: 'Enviando…',
    consent1: 'Acepto la ', consentLink: 'política de privacidad', consent2: ' y el tratamiento de mis datos para gestionar mi cita.',
    reassure: 'Sin compromiso · Primera visita diagnóstica incluida',
    okTitle: '¡Solicitud recibida!', okText: 'Te abrimos WhatsApp para confirmar tu cita al instante. Si no se abre, escríbenos al 689 10 47 14.',
    errReview: 'Revisa los campos marcados antes de enviar.', errConsent: 'Debes aceptar la política de privacidad para enviar.',
    errSend: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.',
    privacyHref: '/politica-de-privacidad/',
  },
  en: {
    header: 'Book your appointment', sub: 'Fill it in and we confirm by WhatsApp',
    name: 'First name', surname: 'Surname', email: 'Email', phone: 'Phone / WhatsApp',
    submit: 'Book via WhatsApp', sending: 'Sending…',
    consent1: 'I accept the ', consentLink: 'privacy policy', consent2: ' and the processing of my data to manage my appointment.',
    reassure: 'No obligation · First diagnostic visit included',
    okTitle: 'Request received!', okText: 'We are opening WhatsApp to confirm your appointment. If it does not open, message us at +34 689 10 47 14.',
    errReview: 'Please review the highlighted fields before submitting.', errConsent: 'You must accept the privacy policy to submit.',
    errSend: 'We could not send your request. Please try again or message us on WhatsApp.',
    privacyHref: '/en/privacy-policy/',
  },
}

export default function LeadForm({ servicio = 'Consulta General', locale = 'es' }) {
  const L = T[locale === 'en' ? 'en' : 'es']
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', telefono: '', consent: false })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validateForm(form, locale)
    if (Object.keys(errs).length > 0) { setError(L.errReview); return }
    if (!form.consent) { setError(L.errConsent); return }

    setLoading(true)
    setError('')
    const tracking = getTrackingData()
    const normalizedPhone = combinePhone(form.telefono, '+34')
    const eventId =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

    const [emailHash, phoneHash, fnHash, lnHash] = await Promise.all([
      sha256Hex(form.email), sha256Hex(normalizedPhone), sha256Hex(form.firstName), sha256Hex(form.lastName),
    ])

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'generate_lead',
        event_id: eventId,
        user_data: { em: emailHash, ph: phoneHash, fn: fnHash, ln: lnHash, external_id: tracking.external_id, fbp: tracking.fbp, fbc: tracking.fbc, client_user_agent: navigator.userAgent },
        lead: { servicio, como_nos_conocio: '', mensaje: '' },
        attribution: {
          utm_source: tracking.utm_source, utm_medium: tracking.utm_medium, utm_campaign: tracking.utm_campaign,
          utm_term: tracking.utm_term, utm_content: tracking.utm_content,
          gclid: tracking.gclid, fbclid: tracking.fbclid, ttclid: tracking.ttclid,
          first_touch_source: tracking.first_touch_source, first_touch_landing_page: tracking.first_touch_landing_page,
          first_touch_date: tracking.first_touch_date, last_touch_source: tracking.last_touch_source,
          landing_page_url: tracking.landing_page_url,
        },
        conversion_page: tracking.conversion_page,
        pages_visited: tracking.pages_visited,
        conversion_timestamp: tracking.conversion_timestamp,
      })
    }

    let waUrl = buildWhatsAppUrl({ ...form, servicio }, normalizedPhone, locale)
    let ok = false
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: {
            firstName: form.firstName.trim(), lastName: form.lastName.trim(), email: form.email.trim(),
            phone: form.telefono.trim(), servicio, otroServicio: '', sucursal: 'Debod Dental · Argüelles',
            comoNosConocio: '', mensaje: '', phoneCountryCode: '+34', website: '',
          },
          tracking, event_id: eventId,
        }),
      })
      if (res.ok) { ok = true; const data = await res.json().catch(() => ({})); if (data.whatsappUrl) waUrl = data.whatsappUrl }
    } catch { ok = false }

    setLoading(false)
    if (!ok) { setError(L.errSend); return }
    setSubmitted(true)
    setTimeout(() => { window.open(waUrl, '_blank') }, 700)
  }

  const field = 'w-full px-4 py-3.5 rounded-xl bg-white border border-charcoal/12 text-charcoal placeholder-white/40 font-jakarta text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all'

  if (submitted) {
    return (
      <div id="formulario" className="bg-white rounded-3xl border border-charcoal/8 p-8 text-center shadow-xl shadow-charcoal/5">
        <CheckCircle size={44} className="text-gold mx-auto mb-3" />
        <h3 className="font-outfit font-bold text-xl text-charcoal mb-1.5">{L.okTitle}</h3>
        <p className="font-jakarta text-slate text-sm">{L.okText}</p>
      </div>
    )
  }

  return (
    <form id="formulario" onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl border border-charcoal/8 p-6 sm:p-7 shadow-xl shadow-charcoal/5">
      <p className="font-outfit font-bold text-lg text-charcoal mb-1">{L.header}</p>
      <p className="font-jakarta text-slate text-xs mb-5">{L.sub} · <strong className="text-charcoal">{servicio}</strong></p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <input name="firstName" value={form.firstName} onChange={onChange} required placeholder={L.name} className={field} />
        <input name="lastName" value={form.lastName} onChange={onChange} required placeholder={L.surname} className={field} />
      </div>
      <input name="email" type="email" value={form.email} onChange={onChange} required placeholder={L.email} className={`${field} mb-3`} />
      <div className="flex gap-2 mb-4">
        <span className="flex items-center px-3 rounded-xl bg-charcoal/5 border border-charcoal/12 font-jakarta text-sm text-charcoal/70 shrink-0">+34</span>
        <input name="telefono" type="tel" value={form.telefono} onChange={onChange} required placeholder={L.phone} className={field} />
      </div>

      {error && <p className="font-jakarta text-red-600 text-xs mb-3">{error}</p>}

      <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2.5 bg-gold text-charcoal font-outfit font-bold text-sm py-4 rounded-full hover:bg-gold-light transition-colors disabled:opacity-60 shadow-lg shadow-gold/25">
        {loading ? (<><Loader2 size={16} className="animate-spin" /> {L.sending}</>) : (<><MessageCircle size={17} /> {L.submit}</>)}
      </button>

      <label className="flex items-start gap-2 mt-4 cursor-pointer">
        <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="mt-0.5 accent-gold" />
        <span className="font-jakarta text-[11px] text-slate leading-snug">
          {L.consent1}<Link to={L.privacyHref} className="text-gold hover:underline">{L.consentLink}</Link>{L.consent2}
        </span>
      </label>

      <p className="text-center font-jakarta text-[11px] text-slate/70 mt-3">{L.reassure}</p>
    </form>
  )
}
