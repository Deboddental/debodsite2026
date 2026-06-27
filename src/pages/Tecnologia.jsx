import { Helmet } from 'react-helmet-async'
import { Scan, Radio, FlaskConical, Layers, Sparkles, ShieldCheck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { breadcrumbSchema } from '../data/seo'
import { useLocale } from '../hooks/useLocale'

const BASE_URL = 'https://deboddentalclinic.com'

const tech = [
  {
    Icon: Scan,
    tag: 'Diagnóstico digital',
    tagEn: 'Digital diagnostics',
    name: 'Escáner intraoral 3D',
    nameEn: '3D intraoral scanner',
    desc: 'Tomamos impresiones digitales sin pastas incómodas. Un modelo 3D exacto de tu boca en segundos, base de cada tratamiento de precisión.',
    descEn: 'We take digital impressions without uncomfortable pastes. An exact 3D model of your mouth in seconds, the foundation of every precision treatment.',
  },
  {
    Icon: Radio,
    tag: 'Imagen',
    tagEn: 'Imaging',
    name: 'Radiografía digital de baja radiación',
    nameEn: 'Low-radiation digital radiography',
    desc: 'Diagnóstico por imagen con una fracción de la radiación de la radiografía convencional y resultados al instante para planificar con seguridad.',
    descEn: 'Diagnostic imaging with a fraction of the radiation of conventional radiography and instant results to plan with confidence.',
  },
  {
    Icon: FlaskConical,
    tag: 'Lab in-house',
    tagEn: 'In-house lab',
    name: 'Debod Digital Lab — laboratorio propio',
    nameEn: 'Debod Digital Lab — our own laboratory',
    desc: 'Fabricamos coronas, carillas y prótesis sobre implante en nuestro laboratorio interno: control total de la calidad y tiempos de tratamiento más cortos.',
    descEn: 'We craft crowns, veneers and implant-supported prosthetics in our in-house laboratory: total quality control and shorter treatment times.',
  },
  {
    Icon: Layers,
    tag: 'Implantología',
    tagEn: 'Implantology',
    name: 'Cirugía guiada de implantes 3D',
    nameEn: '3D guided implant surgery',
    desc: 'Planificación virtual del implante y férula quirúrgica personalizada. Colocación con precisión milimétrica, menos invasiva y más predecible.',
    descEn: 'Virtual implant planning and a bespoke surgical guide. Placement with millimetre precision, less invasive and more predictable.',
  },
  {
    Icon: Sparkles,
    tag: 'Estética',
    tagEn: 'Aesthetics',
    name: 'Diseño de sonrisa digital',
    nameEn: 'Digital smile design',
    desc: 'Diseñamos y simulamos tu nueva sonrisa antes de tocar un solo diente. Ves el resultado y lo apruebas antes de empezar.',
    descEn: 'We design and simulate your new smile before touching a single tooth. You see the result and approve it before we begin.',
  },
  {
    Icon: ShieldCheck,
    tag: 'Mínimamente invasivo',
    tagEn: 'Minimally invasive',
    name: 'Odontología de precisión',
    nameEn: 'Precision dentistry',
    desc: 'La tecnología digital nos permite conservar la máxima estructura dental sana: la intervención justa, ni más ni menos.',
    descEn: 'Digital technology lets us preserve the maximum amount of healthy tooth structure: exactly the right intervention, no more, no less.',
  },
]

export default function Tecnologia() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Dental Technology — 3D Scanner, Own Lab and Guided Surgery | Debod Dental Clinic' : 'Tecnología Dental — Escáner 3D, Lab Propio y Cirugía Guiada | Debod Dental Clinic'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'The dental technology of Debod Dental Clinic in Argüelles, Madrid: 3D intraoral scanner, low-radiation digital radiography, our own laboratory, guided implant surgery and digital smile design.' : 'La tecnología dental de Debod Dental Clinic en Argüelles, Madrid: escáner intraoral 3D, radiografía digital de baja radiación, laboratorio propio, cirugía guiada de implantes y diseño de sonrisa digital.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Dental Technology — Debod Dental Clinic' : 'Tecnología Dental — Debod Dental Clinic'} />
        <meta property="og:description" content={locale === 'en' ? '3D scanner, our own laboratory, guided implant surgery and digital smile design in Argüelles, Madrid.' : 'Escáner 3D, laboratorio propio, cirugía guiada de implantes y diseño de sonrisa digital en Argüelles, Madrid.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd
        schema={breadcrumbSchema([
          { label: locale === 'en' ? 'Home' : 'Inicio', href: '/' },
          { label: locale === 'en' ? 'Technology' : 'Tecnología', href: null },
        ])}
      />

      <PageHero
        subtitle={locale === 'en' ? 'Technology' : 'Tecnología'}
        title={locale === 'en' ? 'The technology that transforms your smile' : 'La tecnología que transforma tu sonrisa'}
        description={locale === 'en' ? 'We combine cutting-edge digital dentistry with our own laboratory for accurate diagnoses and predictable, minimally invasive treatments.' : 'Combinamos odontología digital de vanguardia con laboratorio propio para diagnósticos precisos, tratamientos predecibles y mínimamente invasivos.'}
        imageUrl="/Images/clinica/dsc00147.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: '/' },
            { label: locale === 'en' ? 'Technology' : 'Tecnología', href: null },
          ]}
        />
      </div>

      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20" aria-label={locale === 'en' ? 'Debod Dental Clinic technology' : 'Tecnología de Debod Dental Clinic'}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map(({ Icon, tag, tagEn, name, nameEn, desc, descEn }) => (
            <article
              key={name}
              className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-all duration-400 border border-charcoal/5 flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-jakarta font-semibold w-fit">
                <Icon size={13} />
                {locale === 'en' ? tagEn : tag}
              </div>
              <h2 className="font-outfit font-bold text-xl text-charcoal leading-tight">{locale === 'en' ? nameEn : name}</h2>
              <p className="font-jakarta text-sm text-slate leading-relaxed">{locale === 'en' ? descEn : desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Experience the difference of digital dentistry' : 'Vive la diferencia de la odontología digital'}
        subtext={locale === 'en' ? 'Book your first diagnostic visit and discover how our technology takes care of your smile.' : 'Reserva tu primera visita diagnóstica y descubre cómo nuestra tecnología cuida tu sonrisa.'}
      />
    </>
  )
}
