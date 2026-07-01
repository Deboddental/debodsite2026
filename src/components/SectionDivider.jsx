export default function SectionDivider({ variant = 'wave', position = 'bottom', color = 'gold' }) {
  const isGold = color === 'gold'
  const fill = isGold ? '#D4AF37' : '#1A1A1A'
  const fillOpacity = isGold ? '0.15' : '0.04'

  return (
    <div className={`section-divider-wave ${position === 'top' ? '-mt-1' : '-mb-1'}`}>
      {variant === 'wave' && (
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60 Z" fill={fill} fillOpacity={fillOpacity} />
        </svg>
      )}
      {variant === 'slant' && (
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 L1440,0 L1440,60 Z" fill={fill} fillOpacity={fillOpacity} />
        </svg>
      )}
      {variant === 'curve' && (
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,60 720,0 1440,60 Z" fill={fill} fillOpacity={fillOpacity} />
        </svg>
      )}
    </div>
  )
}
