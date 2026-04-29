import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'

const BASE_URL = 'https://deboddentalclinic.com'

const advantages = [
  { title: 'Control total de calidad', desc: 'Supervisión directa en cada etapa de fabricación, desde el diseño digital hasta el pulido final.' },
  { title: 'Personalización máxima', desc: 'Ajuste preciso del color, translucidez y morfología. Cada restauración es única.' },
  { title: 'Menor tiempo de espera', desc: 'Sin envíos a laboratorios externos. Las restauraciones están listas en menos tiempo.' },
  { title: 'Comunicación en tiempo real', desc: 'El técnico puede estar presente durante la toma de color y discutir el caso directamente con el paciente.' },
]

const specialties = [
  'Carillas de porcelana y Vonlay',
  'Coronas de disilicato de litio y circonio',
  'Prótesis sobre implantes',
  'Férulas de descarga y ortodoncia',
  'Restauraciones CAD/CAM con tecnología CEREC',
  'Prótesis parciales y completas',
]

export default function DentalLab() {
  return (
    <>
      <Helmet>
        <title>Debod Dental Lab — Laboratorio Dental In-House | Argüelles, Madrid</title>
        <meta
          name="description"
          content="Debod Dental Lab es el laboratorio dental propio de Debod Dental Clinic. CAD/CAM, cerámica de alta estética, carillas y coronas fabricadas con control total de calidad en Argüelles, Madrid."
        />
        <link rel="canonical" href={`${BASE_URL}/dental-lab/`} />
        <meta property="og:title" content="Debod Dental Lab — Laboratorio In-House" />
        <meta property="og:url" content={`${BASE_URL}/dental-lab/`} />
      </Helmet>

      <PageHero
        subtitle="Laboratorio propio"
        title="Debod Dental Lab"
        description="El único laboratorio dental in-house de Argüelles. Fabricamos tus restauraciones con tecnología CAD/CAM y cerámica de alta estética, con control total en cada etapa."
        imageUrl="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Dental Lab', href: null },
          ]}
        />
      </div>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-jakarta text-slate-600 text-lg leading-relaxed">
          <p>
            Pocas clínicas dentales en Madrid pueden ofrecer lo que ofrecemos en Debod: un laboratorio dental propio integrado en la misma clínica, bajo la dirección de un maestro cerámista con décadas de experiencia.
          </p>
          <p>
            Esta integración permite algo que transforma radicalmente el resultado: la <strong className="text-charcoal">colaboración directa y en tiempo real</strong> entre el clínico y el técnico dental durante el diseño de cada restauración.
          </p>
          <p>
            El resultado son restauraciones que no solo ajustan perfectamente, sino que se mimetizan con el entorno natural de tu sonrisa.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-pearl text-center mb-12">
            El valor del lab in-house
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map(({ title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/50 transition-colors duration-300">
                <CheckCircle size={28} className="text-gold mb-4" />
                <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">{title}</h3>
                <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-charcoal text-center mb-10">
            Especialidades del laboratorio
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((s) => (
              <li key={s} className="flex items-center gap-3 font-jakarta text-slate-700 text-base bg-pearl px-5 py-3.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        headline="¿Quieres ver cómo trabaja nuestro laboratorio?"
        subtext="Visítanos en Argüelles. Te mostramos el proceso de fabricación de tu restauración."
      />
    </>
  )
}
