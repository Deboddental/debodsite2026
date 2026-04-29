import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 md:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
