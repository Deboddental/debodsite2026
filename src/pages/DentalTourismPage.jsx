import { useLocation, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Languages, Microscope, ShieldCheck, Video, Wallet, Clock, Gem, Globe,
  ScanLine, Building2, Target, Smile, HeartHandshake, MessageCircle, Plane,
  MapPin, Hotel, Star, ArrowRight, Phone, Check,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import MarkdownBody from '../components/ui/MarkdownBody'
import CtaBand from '../components/ui/CtaBand'
import FAQ from '../components/FAQ'
import JsonLd from '../components/ui/JsonLd'
import { dentalTourismSchema } from '../data/seo'
import { ratingSummary } from '../data/reviews'
import {
  getTourismLanding, tourismLandings, heroBullets, whyTravel, techCards,
  objections, steps, madridExperience, spotlights,
} from '../data/dentalTourism'

const BASE_URL = 'https://deboddentalclinic.com'
const HUB_PATH = '/en/dental-tourism-madrid/'
const CALL_TEL = '+34914476225'
const CONTACT_PATH = '/en/contact/'

// Data files reference lucide icons by NAME (Node-safe). Map them here.
const ICONS = {
  Languages, Microscope, ShieldCheck, Video, Wallet, Clock, Gem, Globe,
  ScanLine, Building2, Target, Smile, HeartHandshake, MessageCircle, Plane,
  MapPin, Hotel, Star,
}
const Icon = ({ name, ...props }) => {
  const C = ICONS[name]
  return C ? <C {...props} /> : null
}

export default function DentalTourismPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/en\/|\/$/g, '')
  const landing = getTourismLanding(slug)

  if (!landing) return <Navigate to={HUB_PATH} replace />

  const treatments = tourismLandings.filter((l) => !l.isHub)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{landing.metaTitle}</title>
        <meta name="description" content={landing.metaDescription} />
        <meta property="og:title" content={landing.metaTitle} />
        <meta property="og:description" content={landing.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd schema={dentalTourismSchema(landing)} />

      <PageHero
        subtitle={landing.heroEyebrow}
        title={landing.title}
        description={landing.heroText}
        imageUrl={landing.heroImage}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/en/' },
            { label: 'Dental Tourism', href: landing.isHub ? null : HUB_PATH },
            ...(landing.isHub ? [] : [{ label: landing.title, href: null }]),
          ]}
        />
      </div>

      {/* Trust band — real, verifiable signals */}
      <section className="bg-charcoal px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {heroBullets.map((b) => (
            <div key={b.text} className="flex items-start gap-3">
              <span className="shrink-0 w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center">
                <Icon name={b.icon} size={20} className="text-gold" />
              </span>
              <span className="font-jakarta text-pearl/85 text-sm leading-snug">{b.text}</span>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-3 gap-6 text-center">
          <Stat value={`${ratingSummary.ratingValue}★`} label={`${ratingSummary.reviewCount}+ Google reviews`} />
          <Stat value="+15" label="years of experience" />
          <Stat value="In-house" label="digital dental lab" />
        </div>
      </section>

      {/* Intro / treatment body */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <MarkdownBody>{landing.intro}</MarkdownBody>

        {!landing.isHub && (
          <Link
            to="/en/treatments/"
            className="inline-flex items-center gap-2 mt-4 text-gold font-outfit font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Explore all treatments <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {/* Treatment-specific proof block (unique per landing) */}
      {spotlights[landing.slug] && (
        <section className="px-4 pb-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal rounded-3xl p-8 md:p-10">
              <Icon name={spotlights[landing.slug].icon} size={28} className="text-gold mb-4" />
              <h2 className="font-cormorant text-3xl font-semibold text-pearl mb-5">{spotlights[landing.slug].title}</h2>
              <ul className="space-y-3">
                {spotlights[landing.slug].points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-jakarta text-pearl/80 text-sm md:text-base leading-relaxed">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Why travel to Madrid (value, no fabricated prices) */}
      <section className="bg-pearl/40 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              {whyTravel.eyebrow}
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal mb-5">
              {whyTravel.title}
            </h2>
            <p className="font-jakarta text-slate-600 text-lg leading-relaxed">{whyTravel.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTravel.points.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl border border-slate-100 p-7">
                <Icon name={p.icon} size={28} className="text-gold mb-4" />
                <h3 className="font-outfit font-semibold text-charcoal text-lg mb-2">{p.title}</h3>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={CONTACT_PATH}
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-outfit font-semibold text-sm px-7 py-4 rounded-full hover:bg-gold-light transition-colors duration-300"
            >
              <Check size={16} /> Send your case for a free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment grid — hub only */}
      {landing.isHub && (
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
                Treatments for international patients
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal">
                Popular treatments in Madrid
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((t) => (
                <Link
                  key={t.slug}
                  to={`/en/${t.slug}/`}
                  className="group bg-white rounded-3xl border border-slate-100 p-7 hover:border-gold hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-outfit font-semibold text-charcoal text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                    {t.title}
                  </h3>
                  <p className="font-jakarta text-slate-500 text-sm mb-5 leading-relaxed">{t.navDesc}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology */}
      <section className="bg-charcoal px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Technology
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-pearl">
              Digital dentistry, world-class standards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCards.map((c) => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded-3xl p-7">
                <Icon name={c.icon} size={28} className="text-gold mb-4" />
                <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">{c.title}</h3>
                <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Your peace of mind
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal">
              Everything you might be wondering
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objections.map((o) => (
              <div key={o.title} className="bg-white rounded-3xl border border-slate-100 p-8">
                <Icon name={o.icon} size={30} className="text-gold mb-4" />
                <p className="font-cormorant text-2xl italic text-charcoal mb-1">{o.question}</p>
                <h3 className="font-outfit font-semibold text-charcoal text-base mb-4">{o.title}</h3>
                <ul className="space-y-2.5">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 font-jakarta text-slate-600 text-sm leading-relaxed">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-pearl/40 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              How it works
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal">
              From your first message to your new smile
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-3xl border border-slate-100 p-7 relative">
                <span className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-gold text-charcoal font-outfit font-bold flex items-center justify-center shadow-md">
                  {s.n}
                </span>
                <Icon name={s.icon} size={26} className="text-gold mb-4 mt-2" />
                <h3 className="font-outfit font-semibold text-charcoal text-lg mb-2">{s.title}</h3>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Madrid experience */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Your trip
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal mb-5">
              {madridExperience.title}
            </h2>
            <p className="font-jakarta text-slate-600 text-lg leading-relaxed">{madridExperience.text}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {madridExperience.cards.map((c) => (
              <div key={c.title} className="bg-white rounded-3xl border border-slate-100 p-7 text-center">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-gold/15 items-center justify-center mb-4">
                  <Icon name={c.icon} size={22} className="text-gold" />
                </span>
                <h3 className="font-outfit font-semibold text-charcoal text-base mb-1">{c.title}</h3>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {landing.faqs?.length > 0 && (
        <FAQ
          faqs={landing.faqs}
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Common questions from our international patients."
          includeSchema
        />
      )}

      <CtaBand
        headline="Your new smile is one conversation away"
        subtext="Start with a free online video consultation with our English-speaking team — no obligation."
        ctaLabel="Book a free video consultation"
        ctaTo="/en/contact/"
      />

      {/* Quick-contact strip */}
      <section className="bg-charcoal px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${CALL_TEL}`}
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-outfit font-semibold text-sm px-7 py-4 rounded-full hover:bg-gold-light transition-colors duration-300"
          >
            <Phone size={16} /> Call +34 914 47 62 25
          </a>
          <Link
            to={CONTACT_PATH}
            className="inline-flex items-center gap-2 bg-white/10 text-pearl font-outfit font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Check size={16} /> Book a free consultation
          </Link>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-cormorant text-4xl md:text-5xl font-semibold text-gold mb-1">{value}</div>
      <div className="font-jakarta text-pearl/60 text-xs md:text-sm leading-snug">{label}</div>
    </div>
  )
}
