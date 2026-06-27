import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import CtaBand from '../components/ui/CtaBand'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

const advantages = [
  { title: 'Control total de calidad', title_en: 'Total quality control', desc: 'Supervisión directa en cada etapa de fabricación, desde el diseño digital hasta el pulido final.', desc_en: 'Direct supervision at every stage of fabrication, from digital design to the final polish.' },
  { title: 'Personalización máxima', title_en: 'Maximum personalisation', desc: 'Ajuste preciso del color, translucidez y morfología. Cada restauración es única.', desc_en: 'Precise matching of colour, translucency and morphology. Every restoration is unique.' },
  { title: 'Menor tiempo de espera', title_en: 'Shorter waiting times', desc: 'Sin envíos a laboratorios externos. Las restauraciones están listas en menos tiempo.', desc_en: 'No shipping to external laboratories. Restorations are ready in less time.' },
  { title: 'Comunicación en tiempo real', title_en: 'Real-time communication', desc: 'El técnico puede estar presente durante la toma de color y discutir el caso directamente con el paciente.', desc_en: 'The technician can be present during the shade selection and discuss the case directly with the patient.' },
]

const specialties = [
  { es: 'Carillas de porcelana y Vonlay', en: 'Porcelain veneers and Vonlay restorations' },
  { es: 'Coronas de disilicato de litio y circonio', en: 'Lithium disilicate and zirconia crowns' },
  { es: 'Prótesis sobre implantes', en: 'Implant-supported prostheses' },
  { es: 'Férulas de descarga y ortodoncia', en: 'Night guards and orthodontic appliances' },
  { es: 'Restauraciones CAD/CAM con tecnología CEREC', en: 'CAD/CAM restorations with CEREC technology' },
  { es: 'Prótesis parciales y completas', en: 'Partial and full dentures' },
]

export default function DentalLab() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Debod Dental Lab — In-House Dental Laboratory | Argüelles, Madrid' : 'Debod Dental Lab — Laboratorio Dental In-House | Argüelles, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? "Debod Dental Lab is Debod Dental Clinic's own dental laboratory. CAD/CAM, high-aesthetic ceramics, veneers and crowns crafted with total quality control in Argüelles, Madrid." : "Debod Dental Lab es el laboratorio dental propio de Debod Dental Clinic. CAD/CAM, cerámica de alta estética, carillas y coronas fabricadas con control total de calidad en Argüelles, Madrid."}
        />
        <meta property="og:title" content={locale === 'en' ? 'Debod Dental Lab — In-House Laboratory' : 'Debod Dental Lab — Laboratorio In-House'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Our own laboratory' : 'Laboratorio propio'}
        title="Debod Dental Lab"
        description={locale === 'en' ? 'The only in-house dental laboratory in Argüelles. We craft your restorations with CAD/CAM technology and high-aesthetic ceramics, with total control at every stage.' : 'El único laboratorio dental in-house de Argüelles. Fabricamos tus restauraciones con tecnología CAD/CAM y cerámica de alta estética, con control total en cada etapa.'}
        imageUrl="/Images/clinica/dsc00148.webp"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: 'Dental Lab', href: null },
          ]}
        />
      </div>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-jakarta text-slate-600 text-lg leading-relaxed">
          <p>
            {locale === 'en' ? 'Few dental clinics in Madrid can offer what we offer at Debod: our own dental laboratory integrated within the clinic itself, led by a master ceramist with decades of experience.' : 'Pocas clínicas dentales en Madrid pueden ofrecer lo que ofrecemos en Debod: un laboratorio dental propio integrado en la misma clínica, bajo la dirección de un maestro cerámista con décadas de experiencia.'}
          </p>
          <p>
            {locale === 'en' ? <>This integration makes possible something that radically transforms the result: <strong className="text-charcoal">direct, real-time collaboration</strong> between the clinician and the dental technician during the design of each restoration.</> : <>Esta integración permite algo que transforma radicalmente el resultado: la <strong className="text-charcoal">colaboración directa y en tiempo real</strong> entre el clínico y el técnico dental durante el diseño de cada restauración.</>}
          </p>
          <p>
            {locale === 'en' ? 'The result is restorations that not only fit perfectly, but blend in seamlessly with the natural surroundings of your smile.' : 'El resultado son restauraciones que no solo ajustan perfectamente, sino que se mimetizan con el entorno natural de tu sonrisa.'}
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-pearl text-center mb-12">
            {locale === 'en' ? 'The value of an in-house lab' : 'El valor del lab in-house'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map(({ title, title_en, desc, desc_en }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/50 transition-colors duration-300">
                <CheckCircle size={28} className="text-gold mb-4" />
                <h3 className="font-outfit font-semibold text-pearl text-lg mb-2">{locale === 'en' ? title_en : title}</h3>
                <p className="font-jakarta text-pearl/60 text-sm leading-relaxed">{locale === 'en' ? desc_en : desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-charcoal text-center mb-10">
            {locale === 'en' ? 'Laboratory specialities' : 'Especialidades del laboratorio'}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((s) => (
              <li key={s.es} className="flex items-center gap-3 font-jakarta text-slate-700 text-base bg-pearl px-5 py-3.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {locale === 'en' ? s.en : s.es}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        headline={locale === 'en' ? 'Would you like to see how our laboratory works?' : '¿Quieres ver cómo trabaja nuestro laboratorio?'}
        subtext={locale === 'en' ? 'Visit us in Argüelles. We will show you the fabrication process for your restoration.' : 'Visítanos en Argüelles. Te mostramos el proceso de fabricación de tu restauración.'}
      />
    </>
  )
}
