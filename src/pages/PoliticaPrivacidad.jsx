import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'

const BASE_URL = 'https://deboddentalclinic.com'

export default function PoliticaPrivacidad() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Debod Dental Clinic</title>
        <meta
          name="description"
          content="Política de Privacidad de Debod Dental Clinic. Información sobre el tratamiento de datos personales conforme al RGPD."
        />
        <link rel="canonical" href={`${BASE_URL}/politica-de-privacidad/`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <PageHero
        subtitle="Aviso legal"
        title="Política de Privacidad"
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Política de Privacidad', href: null },
          ]}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 prose-policy">
        <div className="space-y-8 font-jakarta text-slate-700 leading-relaxed">

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">1. Responsable del tratamiento</h2>
            <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos que el responsable del tratamiento de tus datos personales es:</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Razón social:</strong> Debod Dental Clinic S.L.</li>
              <li><strong>Dirección:</strong> Calle de Quintana, 28, 28008 Madrid</li>
              <li><strong>Email:</strong> info@deboddentalclinic.com</li>
              <li><strong>Teléfono:</strong> +34 919 059 095</li>
            </ul>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">2. Finalidad del tratamiento</h2>
            <p>Los datos personales que nos facilites serán tratados con las siguientes finalidades:</p>
            <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
              <li>Gestión de citas y consultas odontológicas.</li>
              <li>Historia clínica y seguimiento del tratamiento.</li>
              <li>Comunicaciones relacionadas con tu atención sanitaria.</li>
              <li>Facturación y gestión administrativa.</li>
              <li>Envío de comunicaciones comerciales, si has prestado consentimiento expreso.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">3. Base jurídica</h2>
            <p>El tratamiento se basa en la ejecución de la relación contractual (prestación de servicios sanitarios), el cumplimiento de obligaciones legales en materia sanitaria, y el consentimiento del interesado para comunicaciones comerciales.</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">4. Conservación de datos</h2>
            <p>Los datos de historia clínica se conservarán durante un mínimo de 5 años desde la última asistencia, conforme a la normativa sanitaria aplicable en la Comunidad de Madrid.</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">5. Derechos del interesado</h2>
            <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndote a: <a href="mailto:info@deboddentalclinic.com" className="text-gold hover:underline">info@deboddentalclinic.com</a></p>
            <p className="mt-2">Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">6. Cookies</h2>
            <p>Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros.</p>
          </section>

        </div>
      </div>
    </>
  )
}
