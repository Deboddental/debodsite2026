import { Helmet } from 'react-helmet-async'
import { Scan, Radio, FlaskConical, Layers, Sparkles, ShieldCheck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import JsonLd from '../components/ui/JsonLd'
import { breadcrumbSchema } from '../data/seo'

const BASE_URL = 'https://deboddentalclinic.com'

const tech = [
  {
    Icon: Scan,
    tag: 'Diagnóstico digital',
    name: 'Escáner intraoral 3D',
    desc: 'Tomamos impresiones digitales sin pastas incómodas. Un modelo 3D exacto de tu boca en segundos, base de cada tratamiento de precisión.',
  },
  {
    Icon: Radio,
    tag: 'Imagen',
    name: 'Radiografía digital de baja radiación',
    desc: 'Diagnóstico por imagen con una fracción de la radiación de la radiografía convencional y resultados al instante para planificar con seguridad.',
  },
  {
    Icon: FlaskConical,
    tag: 'Lab in-house',
    name: 'Debod Digital Lab — laboratorio propio',
    desc: 'Fabricamos coronas, carillas y prótesis sobre implante en nuestro laboratorio interno: control total de la calidad y tiempos de tratamiento más cortos.',
  },
  {
    Icon: Layers,
    tag: 'Implantología',
    name: 'Cirugía guiada de implantes 3D',
    desc: 'Planificación virtual del implante y férula quirúrgica personalizada. Colocación con precisión milimétrica, menos invasiva y más predecible.',
  },
  {
    Icon: Sparkles,
    tag: 'Estética',
    name: 'Diseño de sonrisa digital',
    desc: 'Diseñamos y simulamos tu nueva sonrisa antes de tocar un solo diente. Ves el resultado y lo apruebas antes de empezar.',
  },
  {
    Icon: ShieldCheck,
    tag: 'Mínimamente invasivo',
    name: 'Odontología de precisión',
    desc: 'La tecnología digital nos permite conservar la máxima estructura dental sana: la intervención justa, ni más ni menos.',
  },
]

export default function Tecnologia() {
  const canonical = `${BASE_URL}/tecnologia/`
  return (
    <>
      <Helmet>
        <title>Tecnología Dental — Escáner 3D, Lab Propio y Cirugía Guiada | Debod Dental Clinic</title>
        <meta
          name="description"
          content="La tecnología dental de Debod Dental Clinic en Argüelles, Madrid: escáner intraoral 3D, radiografía digital de baja radiación, laboratorio propio, cirugía guiada de implantes y diseño de sonrisa digital."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Tecnología Dental — Debod Dental Clinic" />
        <meta property="og:description" content="Escáner 3D, laboratorio propio, cirugía guiada de implantes y diseño de sonrisa digital en Argüelles, Madrid." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      </Helmet>

      <JsonLd
        schema={breadcrumbSchema([
          { label: 'Inicio', href: '/' },
          { label: 'Tecnología', href: null },
        ])}
      />

      <PageHero
        subtitle="Tecnología"
        title="La tecnología que transforma tu sonrisa"
        description="Combinamos odontología digital de vanguardia con laboratorio propio para diagnósticos precisos, tratamientos predecibles y mínimamente invasivos."
        imageUrl="/Images/clinica/dsc00147.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Tecnología', href: null },
          ]}
        />
      </div>

      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20" aria-label="Tecnología de Debod Dental Clinic">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map(({ Icon, tag, name, desc }) => (
            <article
              key={name}
              className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:shadow-black/6 transition-all duration-400 border border-charcoal/5 flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-jakarta font-semibold w-fit">
                <Icon size={13} />
                {tag}
              </div>
              <h2 className="font-outfit font-bold text-xl text-charcoal leading-tight">{name}</h2>
              <p className="font-jakarta text-sm text-slate leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        headline="Vive la diferencia de la odontología digital"
        subtext="Reserva tu primera visita diagnóstica y descubre cómo nuestra tecnología cuida tu sonrisa."
      />
    </>
  )
}
