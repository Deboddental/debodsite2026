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

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value ? 'granted' : 'denied')
    window.dispatchEvent(new Event('debod-consent-change'))
  } catch {
    // localStorage unavailable (private mode / SSR) — consent simply not persisted
  }
}
