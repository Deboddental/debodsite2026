const WEBHOOK_URL = process.env.GHL_WEBHOOK_URL

const WA_NUMBER = '34689104714'

function normalizePhone(phone, countryCode) {
  if (!phone) return ''
  const raw = String(phone).trim()
  const hasPlus = raw.startsWith('+')
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  if (hasPlus) return '+' + digits
  const cc = (countryCode || '+34').replace(/\D/g, '')
  if (digits.startsWith(cc) && digits.length > cc.length + 8) return '+' + digits
  return '+' + cc + digits
}

function buildWhatsAppMessage(contact, phone) {
  const servicio =
    contact.servicio === 'Otro Servicio' && contact.otroServicio
      ? contact.otroServicio
      : contact.servicio || 'Consulta General'

  const lines = [
    '¡Hola Debod Dental! Me gustaría agendar una cita.',
    '',
    `Nombre: ${contact.firstName} ${contact.lastName || ''}`.trim(),
    `Email: ${contact.email || ''}`,
    `Teléfono: ${phone}`,
    `Servicio: ${servicio}`,
  ]
  if (contact.comoNosConocio) lines.push(`Cómo nos conoció: ${contact.comoNosConocio}`)
  if (contact.mensaje) { lines.push(''); lines.push(`Mensaje: ${contact.mensaje}`) }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { contact = {}, tracking = {}, event_id = '' } = body

    if (!contact.firstName || !contact.phone) {
      return res.status(400).json({ error: 'Missing required fields: firstName, phone' })
    }

    const ip        = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    const userAgent = req.headers['user-agent'] || ''
    const phone     = normalizePhone(contact.phone, contact.phoneCountryCode)

    const payload = {
      // Campos estándar de contacto
      firstName: contact.firstName,
      lastName:  contact.lastName  || '',
      email:     contact.email     || '',
      phone,
      tags:   ['Lead-Web', 'Lead-Debod-Arguelles'],
      source: 'Web Form - deboddentalclinic.com',

      // Atribución — Campaña
      utm_source:   tracking.utm_source   || '',
      utm_medium:   tracking.utm_medium   || '',
      utm_campaign: tracking.utm_campaign || '',
      utm_term:     tracking.utm_term     || '',
      utm_content:  tracking.utm_content  || '',

      // Atribución — Click IDs
      gclid:  tracking.gclid  || '',
      fbclid: tracking.fbclid || '',
      ttclid: tracking.ttclid || '',

      // Atribución — Multi-touch
      first_touch_source:       tracking.first_touch_source        || '',
      first_touch_landing_page: tracking.first_touch_landing_page  || '',
      first_touch_date:         tracking.first_touch_date          || '',
      last_touch_source:        tracking.last_touch_source         || '',

      // Lead — Contexto clínico
      servicio_interes: contact.servicio       || '',
      otro_servicio:    contact.otroServicio   || '',
      como_nos_conocio: contact.comoNosConocio || '',
      mensaje_lead:     contact.mensaje        || '',

      // Server-side tracking
      external_id:      tracking.external_id   || '',
      fbp:              tracking.fbp            || '',
      fbc:              tracking.fbc            || '',
      user_agent:       userAgent,
      landing_page_url: tracking.landing_page_url || '',

      // Enriquecimiento servidor
      event_id,
      client_ip:            ip,
      conversion_timestamp: tracking.conversion_timestamp || new Date().toISOString(),
      pages_visited:        Array.isArray(tracking.pages_visited)
                              ? tracking.pages_visited.join(' → ')
                              : '',
      device: tracking.device || '',
    }

    // Backup en logs de Vercel — lead recuperable aunque el CRM esté caído
    console.log('[LEAD]', JSON.stringify({
      ts:      new Date().toISOString(),
      ip,
      email:   contact.email,
      phone,
      servicio: contact.servicio,
      payload,
    }))

    let webhookOk = false
    if (WEBHOOK_URL) {
      try {
        const r = await fetch(WEBHOOK_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        })
        webhookOk = r.ok
        if (!webhookOk) {
          console.error('[LEAD] Webhook error', r.status, await r.text().catch(() => ''))
        }
      } catch (err) {
        console.error('[LEAD] Webhook fetch failed', err?.message || err)
      }
    } else {
      console.warn('[LEAD] GHL_WEBHOOK_URL not set — skipping CRM post')
    }

    const whatsappUrl = buildWhatsAppMessage(contact, phone)

    return res.status(200).json({ ok: true, webhookOk, whatsappUrl })
  } catch (err) {
    console.error('[LEAD] Handler error', err?.message || err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
