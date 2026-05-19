import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_LINK = 'https://wa.me/34689104714?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cita%20en%20Debod%20Dental%20Clinic.%20%C2%BFPodr%C3%ADan%20ayudarme%3F'

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={`bg-white rounded-3xl shadow-xl shadow-black/15 px-4 py-3 border border-charcoal/8 transition-all duration-400
          ${hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}
      >
        <p className="font-outfit font-semibold text-charcoal text-sm whitespace-nowrap">¿Te ayudamos?</p>
        <p className="font-jakarta text-slate text-xs">Escríbenos por WhatsApp</p>
      </div>

      {/* Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con Debod Dental Clinic por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
        <MessageCircle size={26} className="text-white relative z-10 fill-white/20" />
      </a>
    </div>
  )
}
