import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada — Debod Dental Clinic</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="font-cormorant text-[8rem] leading-none font-semibold text-gold/20 select-none mb-4">
            404
          </div>
          <h1 className="font-cormorant text-4xl font-semibold text-pearl mb-4">
            Página no encontrada
          </h1>
          <p className="font-jakarta text-pearl/60 text-lg mb-10 leading-relaxed">
            La página que buscas no existe o ha sido movida. Navega al inicio o contáctanos directamente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal rounded-full font-outfit font-semibold text-sm hover:bg-gold-light transition-colors duration-300"
            >
              <Home size={16} />
              Ir al inicio
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-pearl rounded-full font-outfit font-semibold text-sm hover:bg-white/20 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Volver atrás
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
