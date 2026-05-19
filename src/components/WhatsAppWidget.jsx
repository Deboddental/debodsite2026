import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip — solo visible en desktop (hover) */}
      <div
        className={`hidden md:block bg-white rounded-3xl shadow-xl shadow-black/15 px-4 py-3 border border-charcoal/8 transition-all duration-300
          ${hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}
      >
        <p className="font-outfit font-semibold text-charcoal text-sm whitespace-nowrap">¿Te ayudamos?</p>
        <p className="font-jakarta text-slate text-xs">Agenda tu cita en segundos</p>
      </div>

      {/* Button */}
      <Link
        to="/contacto/"
        aria-label="Agendar cita en Debod Dental Clinic"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', transform: 'translateZ(0)' }}
      >
        {/* Pulsing ring — forzado a capa GPU para evitar parpadeo en scroll largo */}
        <div
          className="absolute inset-0 rounded-full bg-green-400/30"
          style={{
            animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
        <MessageCircle size={26} className="text-white relative z-10 fill-white/20" />
      </Link>
    </div>
  )
}
