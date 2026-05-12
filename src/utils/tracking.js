const FIRST_TOUCH_KEY = 'debod_first_touch'
const LAST_TOUCH_KEY  = 'debod_last_touch'
const PAGES_KEY       = 'debod_pages'
const EXTERNAL_ID_KEY = 'debod_external_id'

const UTM_KEYS  = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const CLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'ttclid']

function getCookie(name) {
  if (typeof document === 'undefined') return ''
  const m = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  )
  return m ? decodeURIComponent(m[1]) : ''
}

function getOrCreateExternalId() {
  try {
    let id = localStorage.getItem(EXTERNAL_ID_KEY)
    if (!id) {
      id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
              const r = (Math.random() * 16) | 0
              return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
            })
      localStorage.setItem(EXTERNAL_ID_KEY, id)
    }
    return id
  } catch {
    return ''
  }
}

function readUrlParams() {
  const params = new URLSearchParams(window.location.search)
  const out = {}
  for (const k of [...UTM_KEYS, ...CLICK_IDS]) out[k] = params.get(k) || ''
  return out
}

function makeSourceSummary(d) {
  if (d.utm_source) return d.utm_source + (d.utm_medium ? ' / ' + d.utm_medium : '')
  if (d.gclid || d.gbraid || d.wbraid) return 'google / cpc'
  if (d.fbclid) return 'facebook / paid'
  if (d.ttclid) return 'tiktok / paid'
  if (d.referrer && d.referrer !== '(direct)') {
    try {
      return new URL(d.referrer).hostname.replace(/^www\./, '') + ' / referral'
    } catch {
      return 'referral'
    }
  }
  return '(direct)'
}

export function captureTrackingData() {
  try {
    const urlData  = readUrlParams()
    const visitData = {
      ...urlData,
      landing_url:  window.location.href,
      landing_path: window.location.pathname,
      referrer:     document.referrer || '(direct)',
      timestamp:    new Date().toISOString(),
      device:       /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      language:     navigator.language || '',
      screen:       typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : '',
    }

    const hasNewSignal =
      UTM_KEYS.some((k) => visitData[k]) || CLICK_IDS.some((k) => visitData[k])

    if (!localStorage.getItem(FIRST_TOUCH_KEY))
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(visitData))

    if (hasNewSignal || !localStorage.getItem(LAST_TOUCH_KEY))
      localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(visitData))

    const pages = JSON.parse(sessionStorage.getItem(PAGES_KEY) || '[]')
    if (!pages.includes(window.location.pathname)) {
      pages.push(window.location.pathname)
      sessionStorage.setItem(PAGES_KEY, JSON.stringify(pages))
    }

    getOrCreateExternalId()
  } catch {}
}

export function getTrackingData() {
  try {
    const firstTouch = JSON.parse(localStorage.getItem(FIRST_TOUCH_KEY) || '{}')
    const lastTouch  = JSON.parse(localStorage.getItem(LAST_TOUCH_KEY)  || '{}')
    const pages      = JSON.parse(sessionStorage.getItem(PAGES_KEY)      || '[]')

    return {
      utm_source:              lastTouch.utm_source   || '',
      utm_medium:              lastTouch.utm_medium   || '',
      utm_campaign:            lastTouch.utm_campaign || '',
      utm_term:                lastTouch.utm_term     || '',
      utm_content:             lastTouch.utm_content  || '',
      gclid:                   lastTouch.gclid || lastTouch.gbraid || lastTouch.wbraid || '',
      fbclid:                  lastTouch.fbclid  || '',
      ttclid:                  lastTouch.ttclid  || '',
      first_touch_source:      makeSourceSummary(firstTouch),
      first_touch_landing_page: firstTouch.landing_url || '',
      first_touch_date:        firstTouch.timestamp || '',
      last_touch_source:       makeSourceSummary(lastTouch),
      external_id:             getOrCreateExternalId(),
      fbp:                     getCookie('_fbp'),
      fbc:                     getCookie('_fbc'),
      landing_page_url:        window.location.href,
      pages_visited:           pages,
      conversion_page:         window.location.pathname,
      conversion_timestamp:    new Date().toISOString(),
      device:                  lastTouch.device || (/Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'),
      language:                lastTouch.language || navigator.language || '',
    }
  } catch {
    return { external_id: getOrCreateExternalId() }
  }
}
