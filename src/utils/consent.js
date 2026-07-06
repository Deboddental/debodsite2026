const CONSENT_KEY = 'debod_consent' // 'granted' | 'denied'

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function hasConsent() {
  return getConsent() === 'granted'
}

// Push the Consent Mode v2 update so Google tags react live (no reload needed).
// The `gtag` shim is defined inline in index.html before any tag loads.
export function updateConsentMode(granted) {
  if (typeof window === 'undefined') return
  const state = granted ? 'granted' : 'denied'
  const payload = {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  }
  if (typeof window.gtag === 'function') window.gtag('consent', 'update', payload)
  else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(['consent', 'update', payload])
  }
}

export function setConsent(value) {
  updateConsentMode(!!value)
  try {
    localStorage.setItem(CONSENT_KEY, value ? 'granted' : 'denied')
    window.dispatchEvent(new Event('debod-consent-change'))
  } catch {
    // localStorage unavailable (private mode / SSR) — consent simply not persisted
  }
}
