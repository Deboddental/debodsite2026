import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

// Mobile-only sticky action bar. Local dental traffic is overwhelmingly on phones,
// where the highest-converting action is a one-tap call / WhatsApp / booking. Shown
// only below md; desktop keeps the floating WhatsApp button.
export default function MobileActionBar() {
  const locale = useLocale()
  const citaTo = locale === 'en' ? enPathFor('/contacto/') : '/contacto/'
  const L = {
    call: locale === 'en' ? 'Call' : 'Llamar',
    book: locale === 'en' ? 'Book' : 'Cita',
    aria: locale === 'en' ? 'Quick actions' : 'Acciones rápidas',
  }

  return (
    <nav
      aria-label={L.aria}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-charcoal/10 shadow-[0_-4px_24px_rgba(0,0,0,0.10)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3">
        <a
          href="tel:+34914476225"
          className="flex flex-col items-center justify-center gap-1 py-3 text-charcoal active:bg-charcoal/5 transition-colors"
        >
          <Phone size={20} className="text-gold" />
          <span className="font-jakarta text-[11px] font-semibold">{L.call}</span>
        </a>
        <a
          href="https://wa.me/34689104714"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-charcoal active:bg-charcoal/5 transition-colors border-x border-charcoal/10"
        >
          <MessageCircle size={20} style={{ color: '#25D366' }} />
          <span className="font-jakarta text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          to={citaTo}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-gold text-charcoal active:bg-gold-light transition-colors"
        >
          <Calendar size={20} />
          <span className="font-jakarta text-[11px] font-bold">{L.book}</span>
        </Link>
      </div>
    </nav>
  )
}
