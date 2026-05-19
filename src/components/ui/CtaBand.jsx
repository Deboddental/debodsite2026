import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  headline = '¿Listo para transformar tu sonrisa?',
  subtext = 'Pide tu consulta gratuita con nuestro equipo de especialistas.',
  ctaLabel = 'Agendar consulta gratuita',
  ctaTo = '/contacto/',
  variant = 'gold', // 'gold' | 'dark'
}) {
  const isGold = variant === 'gold'
  return (
    <section
      className={`py-20 px-4 ${isGold ? 'bg-gold' : 'bg-charcoal'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`font-cormorant text-4xl md:text-5xl font-semibold italic mb-4 ${
            isGold ? 'text-charcoal' : 'text-pearl'
          }`}
        >
          {headline}
        </h2>
        <p
          className={`font-jakarta text-lg mb-10 ${
            isGold ? 'text-charcoal/80' : 'text-pearl/70'
          }`}
        >
          {subtext}
        </p>
        <Link
          to={ctaTo}
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-outfit font-semibold text-sm tracking-wide transition-all duration-300 hover:gap-4 ${
            isGold
              ? 'bg-charcoal text-pearl hover:bg-charcoal/90'
              : 'bg-gold text-charcoal hover:bg-gold-light'
          }`}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
