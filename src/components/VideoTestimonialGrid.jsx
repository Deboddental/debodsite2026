import { useState } from 'react'
import { Play } from 'lucide-react'

// Per-treatment lazy video testimonials: only the poster image loads up front; the
// <video> is mounted (and the file downloaded) ONLY when the user clicks play. Each
// card uses its clip's real aspect ratio so nothing is cropped. (Distinct from the
// homepage VideoTestimonials section.)
const ASPECT = { video: 'aspect-video', portrait: 'aspect-[9/16]', square: 'aspect-square' }

function VideoCard({ v }) {
  const [play, setPlay] = useState(false)
  const a = ASPECT[v.aspect] || 'aspect-video'
  return (
    <figure className="w-full max-w-[260px] mx-auto">
      <div className={`relative ${a} rounded-2xl overflow-hidden bg-charcoal border border-charcoal/10 shadow-sm`}>
        {play ? (
          <video src={v.src} poster={v.poster} controls autoPlay playsInline className="w-full h-full object-cover" />
        ) : (
          <button type="button" onClick={() => setPlay(true)} aria-label={`Ver testimonio de ${v.name}`} className="group block w-full h-full">
            <img src={v.poster} alt="" loading="lazy" className="w-full h-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-charcoal/25 group-hover:bg-charcoal/10 transition-colors">
              <span className="w-14 h-14 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Play size={22} className="fill-current ml-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-center mt-3">
        <p className="font-outfit font-semibold text-charcoal text-sm">{v.name}</p>
        <p className="font-jakarta text-gold text-xs">{v.label}</p>
      </figcaption>
    </figure>
  )
}

export default function VideoTestimonialGrid({ videos, title }) {
  if (!videos?.length) return null
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
      <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start">
        {videos.map((v) => <VideoCard key={v.src} v={v} />)}
      </div>
    </section>
  )
}
