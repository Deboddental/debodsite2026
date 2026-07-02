import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Clock, AlertTriangle, Activity, Zap, Droplet, Smile } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import FAQ from '../components/FAQ'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { useLocale } from '../hooks/useLocale'

const BASE_URL = 'https://deboddentalclinic.com'
const PHONE = '+34914476225'
const WHATSAPP = 'https://wa.me/34689104714'

// Copy is intentionally non-absolute (YMYL): we describe when to seek care and
// give general first-aid, never diagnose or promise outcomes, and point to 112
// for life-threatening signs.
const content = {
  es: {
    metaTitle: 'Urgencias dentales en Argüelles, Madrid — Atención el mismo día | Debod Dental Clinic',
    metaDescription:
      'Urgencias dentales en Argüelles, Madrid. Atención el mismo día para dolor intenso, dientes rotos, flemones o coronas caídas. Llama al 914 47 62 25.',
    heroSubtitle: 'Atención el mismo día',
    heroTitle: 'Urgencias dentales en Argüelles, Madrid',
    heroDescription:
      'Dolor intenso, un diente roto o un flemón no pueden esperar. Llámanos y te atendemos lo antes posible, el mismo día siempre que sea posible.',
    callNow: 'Llamar ahora',
    whatsapp: 'Escribir por WhatsApp',
    hoursNote: 'Lunes a Viernes, 9:00–20:00 · C. de Ferraz, 24, Argüelles',
    whatTitle: '¿Qué se considera una urgencia dental?',
    whatIntro:
      'Si tienes alguno de estos signos, llámanos: cuanto antes te valoremos, más opciones de tratamiento tendrás.',
    cases: [
      { icon: 'Zap', title: 'Dolor dental intenso', text: 'Dolor que no cede con analgésicos, te impide dormir o comer, o aparece de forma repentina.' },
      { icon: 'Activity', title: 'Traumatismo o diente roto', text: 'Un golpe, un diente fracturado o un diente que se ha salido por completo (avulsión). Actúa rápido.' },
      { icon: 'AlertTriangle', title: 'Inflamación, flemón o absceso', text: 'Hinchazón de la encía o la cara, con o sin pus. Puede indicar una infección que conviene tratar pronto.' },
      { icon: 'Droplet', title: 'Sangrado que no se detiene', text: 'Sangrado de la encía o tras una extracción que no cede con presión durante unos minutos.' },
      { icon: 'Smile', title: 'Corona, carilla o empaste caído', text: 'Se te ha soltado una corona, una carilla o un empaste, o se ha roto una prótesis.' },
      { icon: 'Clock', title: 'Dolor de la muela del juicio', text: 'Dolor, inflamación o dificultad para abrir la boca por una muela del juicio (pericoronaritis).' },
    ],
    firstAidTitle: 'Qué hacer mientras llegas a la clínica',
    firstAid: [
      '**Diente salido por completo:** cógelo por la corona (no por la raíz), enjuágalo suavemente sin frotar y, si puedes, vuelve a colocarlo en su sitio. Si no, guárdalo en leche o en tu propia saliva y ven de inmediato: el tiempo es clave.',
      '**Dolor:** puedes tomar el analgésico que uses habitualmente siguiendo las indicaciones del prospecto. Evita colocar aspirina directamente sobre la encía.',
      '**Inflamación:** aplica frío por fuera de la mejilla en intervalos de unos minutos. No apliques calor.',
      '**Corona o carilla caída:** guárdala y tráela; no intentes pegarla con adhesivos caseros.',
      '**Sangrado:** muerde una gasa limpia haciendo presión suave durante unos minutos.',
    ],
    emergencyNote:
      'Si tienes dificultad para respirar o tragar, o una hinchazón facial que crece con rapidez, no esperes: llama al 112.',
    faqEyebrow: 'Preguntas frecuentes',
    faqSubtitle: 'Dudas habituales sobre las urgencias dentales.',
    faqs: [
      { question: '¿Atienden urgencias el mismo día?', answer: 'Sí, atendemos urgencias el mismo día siempre que es posible dentro de nuestro horario (lunes a viernes, 9:00–20:00). Llámanos al 914 47 62 25 y te daremos la cita más cercana.' },
      { question: '¿Qué hago si se me ha caído un diente por un golpe?', answer: 'Cógelo por la corona, no por la raíz, y evita frotarlo. Si puedes, colócalo de nuevo en su sitio; si no, guárdalo en leche o en tu saliva y ven cuanto antes. Reimplantar un diente es más probable cuanto menos tiempo pasa.' },
      { question: '¿Cuánto cuesta una urgencia dental?', answer: 'El coste depende de lo que necesite tu caso, así que no publicamos una cifra fija. Primero te valoramos, te explicamos qué ocurre y te damos un presupuesto claro y sin compromiso antes de tratarte.' },
      { question: '¿Puedo ir sin cita previa?', answer: 'Es mejor que llames antes al 914 47 62 25 o nos escribas por WhatsApp para que podamos organizarnos y atenderte con la menor espera posible.' },
      { question: '¿Un flemón es una urgencia?', answer: 'La hinchazón de la encía o la cara puede indicar una infección que conviene valorar pronto. Llámanos para que te veamos; si notas dificultad para respirar o tragar, llama al 112.' },
    ],
    ctaHeadline: '¿Tienes una urgencia dental ahora?',
    ctaSubtext: 'No esperes a que empeore. Llámanos y te atendemos lo antes posible.',
    crumbHome: 'Inicio',
  },
  en: {
    metaTitle: 'Dental Emergencies in Madrid — Same-Day Care in Argüelles | Debod Dental Clinic',
    metaDescription:
      'Dental emergencies in central Madrid (Argüelles). Same-day care for severe pain, broken teeth, abscesses or lost crowns. English-speaking team — call +34 914 47 62 25.',
    heroSubtitle: 'Same-day care',
    heroTitle: 'Dental Emergencies in Madrid',
    heroDescription:
      'Severe pain, a broken tooth or facial swelling should not wait. Call us and we will see you as soon as possible — same day whenever we can.',
    callNow: 'Call now',
    whatsapp: 'Message on WhatsApp',
    hoursNote: 'Monday to Friday, 9:00–20:00 · C. de Ferraz, 24, Argüelles',
    whatTitle: 'What counts as a dental emergency?',
    whatIntro:
      'If you have any of these signs, call us — the sooner we assess you, the more treatment options you tend to have.',
    cases: [
      { icon: 'Zap', title: 'Severe toothache', text: 'Pain that does not settle with painkillers, stops you sleeping or eating, or comes on suddenly.' },
      { icon: 'Activity', title: 'Trauma or a broken tooth', text: 'A knock, a fractured tooth or a tooth that has come out completely (avulsion). Act quickly.' },
      { icon: 'AlertTriangle', title: 'Swelling or abscess', text: 'Swelling of the gum or face, with or without pus. This can signal an infection best treated early.' },
      { icon: 'Droplet', title: 'Bleeding that will not stop', text: 'Bleeding from the gum or after an extraction that does not ease with a few minutes of pressure.' },
      { icon: 'Smile', title: 'Lost crown, veneer or filling', text: 'A crown, veneer or filling has come loose, or a prosthesis has broken.' },
      { icon: 'Clock', title: 'Wisdom-tooth pain', text: 'Pain, swelling or difficulty opening your mouth due to a wisdom tooth (pericoronitis).' },
    ],
    firstAidTitle: 'What to do while you make your way to us',
    firstAid: [
      '**Knocked-out tooth:** hold it by the crown (not the root), rinse it gently without scrubbing, and if you can, place it back in its socket. If not, keep it in milk or your own saliva and come straight away — time matters.',
      '**Pain:** you can take your usual painkiller following the packet instructions. Do not place aspirin directly on the gum.',
      '**Swelling:** apply a cold compress to the outside of the cheek in short intervals. Do not apply heat.',
      '**Lost crown or veneer:** keep it and bring it with you; do not try to glue it back with household adhesives.',
      '**Bleeding:** bite gently on a clean gauze pad for a few minutes.',
    ],
    emergencyNote:
      'If you have difficulty breathing or swallowing, or fast-spreading facial swelling, do not wait — call 112 (the EU emergency number).',
    faqEyebrow: 'Frequently asked questions',
    faqSubtitle: 'Common questions about dental emergencies.',
    faqs: [
      { question: 'Do you see emergencies the same day?', answer: 'Yes — we see emergencies the same day whenever possible within our opening hours (Monday to Friday, 9:00–20:00). Call +34 914 47 62 25 and we will give you the earliest appointment.' },
      { question: 'What should I do if a tooth is knocked out?', answer: 'Hold it by the crown, not the root, and avoid scrubbing it. If you can, place it back in the socket; if not, keep it in milk or your saliva and come as soon as possible. Re-implanting a tooth is more likely the sooner it is done.' },
      { question: 'How much does an emergency appointment cost?', answer: 'The cost depends on what your case needs, so we do not publish a fixed figure. We assess you first, explain what is happening and give you a clear, no-obligation quote before any treatment.' },
      { question: 'Can I come without an appointment?', answer: 'It is best to call ahead on +34 914 47 62 25 or message us on WhatsApp so we can organise your visit and keep waiting to a minimum.' },
      { question: 'Is a facial swelling an emergency?', answer: 'Swelling of the gum or face can signal an infection worth assessing promptly. Call us so we can see you; if you have difficulty breathing or swallowing, call 112.' },
    ],
    ctaHeadline: 'Have a dental emergency right now?',
    ctaSubtext: 'Do not wait for it to get worse. Call us and we will see you as soon as possible.',
    crumbHome: 'Home',
  },
}

const ICONS = { Zap, Activity, AlertTriangle, Droplet, Smile, Clock }

// Minimal inline markdown → strong/text (only ** bold ** used in first-aid list).
function boldParts(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-charcoal">{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>,
  )
}

export default function Urgencias() {
  const locale = useLocale()
  const c = content[locale === 'en' ? 'en' : 'es']
  const url = locale === 'en' ? `${BASE_URL}/en/dental-emergency-madrid/` : `${BASE_URL}/urgencias-dentales-arguelles-madrid/`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        url,
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage: locale === 'en' ? 'en' : 'es-ES',
        about: { '@type': 'MedicalSpecialty', name: 'Emergency Dentistry' },
        provider: { '@id': `${BASE_URL}/#clinic` },
        mainEntity: { '@id': `${BASE_URL}/#clinic` },
        isPartOf: { '@id': `${BASE_URL}/#website` },
        areaServed: { '@type': 'City', name: 'Madrid' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.crumbHome, item: locale === 'en' ? `${BASE_URL}/en/` : `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: c.heroTitle },
        ],
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta property="og:title" content={c.heroTitle} />
        <meta property="og:description" content={c.metaDescription} />
      </Helmet>

      <JsonLd schema={schema} />

      <PageHero
        subtitle={c.heroSubtitle}
        title={c.heroTitle}
        description={c.heroDescription}
        imageUrl="/Images/clinica/dsc00238.webp"
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Breadcrumb
          items={[
            { label: c.crumbHome, href: locale === 'en' ? '/en/' : '/' },
            { label: c.heroTitle, href: null },
          ]}
        />
      </div>

      {/* Prominent call / WhatsApp CTA — emergencies are phone-first */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-2 pb-10">
        <div className="bg-charcoal rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="text-center sm:text-left">
            <p className="font-outfit font-bold text-xl text-pearl mb-1">{c.heroSubtitle}</p>
            <p className="font-jakarta text-pearl/60 text-sm">{c.hoursNote}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 bg-gold text-charcoal font-outfit font-bold text-sm px-6 py-3.5 rounded-full hover:bg-gold-light transition-colors">
              <Phone size={17} /> {c.callNow} · 914 47 62 25
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-pearl/25 text-pearl font-outfit font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors">
              <MessageCircle size={17} /> {c.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* What counts as an emergency */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-14">
        <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-2">{c.whatTitle}</h2>
        <p className="font-jakarta text-slate mb-8 max-w-2xl">{c.whatIntro}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.cases.map((item) => {
            const Icon = ICONS[item.icon] || AlertTriangle
            return (
              <div key={item.title} className="bg-pearl border border-charcoal/5 rounded-3xl p-6">
                <Icon size={24} className="text-gold mb-3" />
                <h3 className="font-outfit font-semibold text-charcoal mb-1.5">{item.title}</h3>
                <p className="font-jakarta text-slate text-sm leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* First aid */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-14">
        <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-charcoal mb-6">{c.firstAidTitle}</h2>
        <ul className="space-y-4">
          {c.firstAid.map((item, i) => (
            <li key={i} className="flex gap-3 font-jakarta text-slate text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <span>{boldParts(item)}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-5 mt-8">
          <AlertTriangle size={22} className="text-red-500 shrink-0 mt-0.5" />
          <p className="font-jakarta text-red-900 text-sm leading-relaxed">{c.emergencyNote}</p>
        </div>
      </section>

      <FAQ faqs={c.faqs} eyebrow={c.faqEyebrow} subtitle={c.faqSubtitle} />

      <CtaBand
        headline={c.ctaHeadline}
        subtext={c.ctaSubtext}
        ctaLabel={c.callNow}
        ctaTo={locale === 'en' ? '/en/contact/' : '/contacto/'}
      />
    </>
  )
}
