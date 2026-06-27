import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, MapPin, MessageCircle, Phone, Globe, Stethoscope, CreditCard } from 'lucide-react'
import { enLandings } from '../../data/enLandings'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import CtaBand from '../../components/ui/CtaBand'
import FAQ from '../../components/FAQ'
import JsonLd from '../../components/ui/JsonLd'
import { enHomeSchema } from '../../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

const enHomeFaqs = [
  {
    question: 'What dental treatments can I have at Debod as an English-speaking patient?',
    answer:
      'Our specialists cover the full range in English: dental implants with 3D guided surgery, Invisalign® and orthodontics, porcelain veneers and digital smile design, periodontics, root canals, crowns and full oral rehabilitation — all supported by our in-house Debod Digital Lab.',
  },
  {
    question: 'Do you treat international patients and dental tourists?',
    answer:
      'Yes. We regularly treat expats living in Madrid and visitors travelling for treatment. Tell us your dates and we will plan what is feasible during your stay; our in-house lab helps shorten timelines for crowns, veneers and prostheses.',
  },
  {
    question: 'How does the first visit and quote work?',
    answer:
      'The first diagnostic visit is included. We assess your case, take the scans or X-rays needed, and explain your options with a clear, itemised, no-obligation quote before any treatment begins. Financing is available.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Call +34 914 47 62 25, message us on WhatsApp at +34 689 10 47 14, or email info@deboddentalclinic.com. The first diagnostic visit is included, with a clear, no-obligation quote.',
  },
]

const highlights = [
  {
    icon: Globe,
    title: 'English-speaking team',
    text: 'Your whole treatment — diagnosis, options and pricing — explained clearly in English.',
  },
  {
    icon: Stethoscope,
    title: 'Specialists & in-house lab',
    text: 'Implants, orthodontics, periodontics and aesthetics, with our own Debod Digital Lab for faster, fully controlled results.',
  },
  {
    icon: MapPin,
    title: 'Central Madrid location',
    text: 'C. de Ferraz, 24, Argüelles — minutes from Plaza de España, metro Ventura Rodríguez (L3) at the door.',
  },
  {
    icon: CreditCard,
    title: 'Transparent & financed',
    text: 'Honest, itemised quotes with no surprises, financing available and a first diagnostic visit included.',
  },
]

export default function EnHome() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>English-Speaking Dental Clinic in Madrid (Argüelles) — Debod Dental Clinic</title>
        <meta
          name="description"
          content="A boutique English-speaking dental clinic in central Madrid (Argüelles). Implants, Invisalign®, porcelain veneers and full oral rehabilitation, with an in-house digital lab. Book: +34 914 47 62 25."
        />
        <meta property="og:title" content="English-Speaking Dental Clinic in Madrid — Debod Dental Clinic" />
        <meta
          property="og:description"
          content="Boutique dental clinic in central Madrid where you are treated in English — implants, orthodontics, cosmetic dentistry and oral rehabilitation."
        />
        <meta property="og:type" content="website" />
        {/* og:locale is set centrally by RootLayout's LocaleMeta (en_GB on /en/ pages) */}
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd schema={enHomeSchema()} />

      <PageHero
        subtitle="English-speaking dental clinic in Madrid"
        title="Your dentist in the heart of Madrid"
        description="A boutique clinic in Argüelles where international patients are treated in English — implants, orthodontics, cosmetic dentistry and full oral rehabilitation, with an in-house digital lab."
        imageUrl="/Images/clinica/dsc00131.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'English', href: null },
          ]}
        />
      </div>

      {/* Intro + highlights */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-jakarta text-slate-600 text-lg leading-relaxed mb-3">
            Whether you live in Madrid as an expat or you are visiting and need a dentist,{' '}
            <strong>Debod Dental Clinic</strong> makes it easy. We are based at{' '}
            <strong>C. de Ferraz, 24, in Argüelles</strong> and treat international patients in
            English, with clear explanations and transparent pricing.
          </p>
          <p className="font-jakarta text-slate-500 leading-relaxed mb-10">
            We specialise in digital implantology, invisible orthodontics (Invisalign®), porcelain
            veneers and full oral rehabilitation — all backed by our own in-house lab,{' '}
            <strong>Debod Digital Lab</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <div
                  key={h.title}
                  className="bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-outfit font-semibold text-charcoal text-lg mb-1">{h.title}</h3>
                  <p className="font-jakarta text-slate-500 text-sm leading-relaxed">{h.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatments in English — cards link to the EN landing pages */}
      <section className="py-12 px-4 bg-charcoal/[0.03]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-jakarta text-xs text-gold font-semibold tracking-widest uppercase mb-3 block">
              Treatments in English
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
              Popular treatments for international patients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enLandings.map((l) => (
              <Link
                key={l.slug}
                to={`/en/${l.slug}/`}
                className="group bg-white rounded-3xl border border-slate-100 p-7 hover:border-gold hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <h3 className="font-outfit font-semibold text-charcoal text-xl mb-3 group-hover:text-gold transition-colors duration-200">
                  {l.title}
                </h3>
                <p className="font-jakarta text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                  {l.heroText}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical contact block */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 p-8 md:p-10">
          <h2 className="font-outfit font-bold text-2xl md:text-3xl text-charcoal mb-2">
            Book your visit in central Madrid
          </h2>
          <p className="font-jakarta text-slate-500 mb-8">
            The first diagnostic visit is included, with a clear, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+34914476225"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-charcoal text-pearl font-outfit font-semibold text-sm px-6 py-4 rounded-full hover:bg-charcoal/90 transition-colors duration-300"
            >
              <Phone size={16} /> Call +34 914 47 62 25
            </a>
            <a
              href="https://wa.me/34689104714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-outfit font-semibold text-sm px-6 py-4 rounded-full hover:bg-gold-light transition-colors duration-300"
            >
              <MessageCircle size={16} /> WhatsApp us
            </a>
          </div>
          <p className="font-jakarta text-slate-400 text-sm mt-6 flex items-center gap-2">
            <MapPin size={14} className="text-gold shrink-0" /> C. de Ferraz, 24, Argüelles, 28008
            Madrid · metro Ventura Rodríguez (L3)
          </p>
        </div>
      </section>

      <FAQ
        faqs={enHomeFaqs}
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Common questions from our international and expat patients."
        includeSchema
      />

      <CtaBand
        headline="Treated in English, in the heart of Madrid"
        subtext="Book a first diagnostic visit with our English-speaking team — no obligation."
        ctaLabel="Book an appointment"
        ctaTo="/contacto/"
      />
    </>
  )
}
