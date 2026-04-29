import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function RelatedGrid({ items = [], title = 'Tratamientos relacionados' }) {
  if (!items.length) return null
  return (
    <section className="py-16 px-4 bg-pearl">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-charcoal mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-outfit font-semibold text-charcoal text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                {item.title}
              </h3>
              {item.description && (
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              )}
              <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                Ver más <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
