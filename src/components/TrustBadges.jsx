import { Star, Award, Shield, ThumbsUp } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'

const badges = [
  {
    icon: Star,
    label: { es: '4.9 Google Reviews', en: '4.9 Google Reviews' },
    color: 'text-gold',
    bg: 'bg-gold/10',
    border: 'border-gold/20',
  },
  {
    icon: Award,
    label: { es: 'Premio WhiteSmile 2023', en: 'WhiteSmile 2023 Award' },
    color: 'text-gold',
    bg: 'bg-gold/10',
    border: 'border-gold/20',
  },
  {
    icon: Shield,
    label: { es: 'Odontología Garantizada', en: 'Guaranteed Dentistry' },
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: ThumbsUp,
    label: { es: 'Especialistas UCM', en: 'UCM Specialists' },
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
]

export default function TrustBadges() {
  const locale = useLocale()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      {badges.map((b) => {
        const Icon = b.icon
        return (
          <div
            key={b.label[locale]}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-jakarta font-semibold ${b.bg} ${b.border} border ${b.color}`}
          >
            <Icon size={12} />
            {b.label[locale]}
          </div>
        )
      })}
    </div>
  )
}
