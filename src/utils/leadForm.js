// Shared lead-form helpers — used by BOTH the contact page and the campaign
// landing pages so every lead fires the IDENTICAL WhatsApp/payload shape into
// the same /api/lead → GoHighLevel pipe. Do not fork this logic per form.

export const WA_NUMBER = '34689104714'

// Normalise a phone to E.164-ish (+<cc><digits>), tolerant of user formatting.
export function combinePhone(rawPhone, countryCode) {
  if (!rawPhone) return ''
  const hasPlus = String(rawPhone).trim().startsWith('+')
  const digits = String(rawPhone).replace(/\D/g, '')
  if (!digits) return ''
  if (hasPlus) return '+' + digits
  const cc = (countryCode || '+34').replace(/\D/g, '')
  if (digits.startsWith(cc) && digits.length > cc.length + 8) return '+' + digits
  return '+' + cc + digits
}

// Pre-filled WhatsApp message. `servicio` may be pinned by a landing (servicioClavado).
export function buildWhatsAppUrl(formData, normalizedPhone, locale = 'es') {
  const en = locale === 'en'
  const servicio =
    formData.servicio === 'Otro Servicio' && formData.otroServicio
      ? formData.otroServicio
      : formData.servicio || (en ? 'General enquiry' : 'Consulta General')

  const lines = en
    ? [
        'Hello Debod Dental! I would like to book an appointment.',
        '',
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Phone: ${normalizedPhone}`,
        `Service: ${servicio}`,
      ]
    : [
        '¡Hola Debod Dental! Me gustaría agendar una cita.',
        '',
        `Nombre: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Teléfono: ${normalizedPhone}`,
        `Servicio: ${servicio}`,
      ]
  if (formData.comoNosConocio) lines.push(`${en ? 'How you heard about us' : 'Cómo nos conoció'}: ${formData.comoNosConocio}`)
  if (formData.mensaje) { lines.push(''); lines.push(`${en ? 'Message' : 'Mensaje'}: ${formData.mensaje}`) }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

export function validateForm(formData, locale) {
  const errors = {}
  if (!formData.firstName.trim()) errors.firstName = locale === 'en' ? 'Enter your first name.' : 'Introduce tu nombre.'
  if (!formData.lastName.trim()) errors.lastName = locale === 'en' ? 'Enter your surname.' : 'Introduce tu apellido.'
  const email = formData.email.trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = locale === 'en' ? 'Enter a valid email address.' : 'Introduce un email válido.'
  const digits = formData.telefono.replace(/\D/g, '')
  if (digits.length < 6) errors.telefono = locale === 'en' ? 'Enter a valid phone number.' : 'Introduce un teléfono válido.'
  return errors
}

// SHA-256 hex of a normalised value (for hashed PII in the dataLayer / Meta CAPI).
export async function sha256Hex(value) {
  const v = String(value || '').trim().toLowerCase()
  if (!v) return ''
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}
