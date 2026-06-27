import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent } from '@/utils/consent'
import { captureTrackingData } from '@/utils/tracking'
import { useLocale } from '@/hooks/useLocale'
import { t } from '@/i18n/ui'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null)
  const locale = useLocale()

  if (!visible) return null

  function choose(granted) {
    setConsent(granted)
    if (granted) captureTrackingData() // capture current page now that consent exists
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-charcoal/95 backdrop-blur border-t border-white/10 px-5 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="font-jakarta text-white/70 text-xs sm:text-sm flex-1">
          {t('consent.text', locale)}{' '}
          <Link to={locale === 'en' ? '/en/privacy-policy/' : '/politica-de-privacidad/'} className="text-gold underline">{t('consent.more', locale)}</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => choose(false)} className="font-jakarta text-xs font-semibold text-white/70 px-4 py-2 rounded-full border border-white/20 hover:text-white">
            {t('consent.reject', locale)}
          </button>
          <button onClick={() => choose(true)} className="font-jakarta text-xs font-bold text-charcoal bg-gold px-5 py-2 rounded-full hover:bg-gold-light">
            {t('consent.accept', locale)}
          </button>
        </div>
      </div>
    </div>
  )
}
