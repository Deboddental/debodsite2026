// EN translation reviewStatus: pending-human (legal)
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

export default function PoliticaPrivacidad() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Privacy Policy | Debod Dental Clinic' : 'Política de Privacidad | Debod Dental Clinic'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Debod Dental Clinic Privacy Policy. Information on the processing of personal data in accordance with the GDPR.' : 'Política de Privacidad de Debod Dental Clinic. Información sobre el tratamiento de datos personales conforme al RGPD.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Privacy Policy | Debod Dental Clinic' : 'Política de Privacidad | Debod Dental Clinic'} />
        <meta property="og:description" content={locale === 'en' ? 'Debod Dental Clinic Privacy Policy. Information on the processing of personal data in accordance with the GDPR.' : 'Política de Privacidad de Debod Dental Clinic. Información sobre el tratamiento de datos personales conforme al RGPD.'} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Legal notice' : 'Aviso legal'}
        title={locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad', href: null },
          ]}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 prose-policy">
        <div className="space-y-8 font-jakarta text-slate-700 leading-relaxed">

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '1. Data controller' : '1. Responsable del tratamiento'}</h2>
            <p>{locale === 'en' ? 'In compliance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), we inform you that the controller responsible for processing your personal data is:' : 'En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos que el responsable del tratamiento de tus datos personales es:'}</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>{locale === 'en' ? 'Company name:' : 'Razón social:'}</strong> Debod Dental Clinic S.L.</li>
              <li><strong>{locale === 'en' ? 'Address:' : 'Dirección:'}</strong> C. de Ferraz, 24, Argüelles, 28008 Madrid</li>
              <li><strong>Email:</strong> info@deboddentalclinic.com</li>
              <li><strong>{locale === 'en' ? 'Telephone:' : 'Teléfono:'}</strong> +34 914 47 62 25</li>
            </ul>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '2. Purpose of processing' : '2. Finalidad del tratamiento'}</h2>
            <p>{locale === 'en' ? 'The personal data you provide will be processed for the following purposes:' : 'Los datos personales que nos facilites serán tratados con las siguientes finalidades:'}</p>
            <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
              <li>{locale === 'en' ? 'Management of dental appointments and consultations.' : 'Gestión de citas y consultas odontológicas.'}</li>
              <li>{locale === 'en' ? 'Clinical records and treatment follow-up.' : 'Historia clínica y seguimiento del tratamiento.'}</li>
              <li>{locale === 'en' ? 'Communications relating to your healthcare.' : 'Comunicaciones relacionadas con tu atención sanitaria.'}</li>
              <li>{locale === 'en' ? 'Invoicing and administrative management.' : 'Facturación y gestión administrativa.'}</li>
              <li>{locale === 'en' ? 'Sending commercial communications, if you have given express consent.' : 'Envío de comunicaciones comerciales, si has prestado consentimiento expreso.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '3. Legal basis' : '3. Base jurídica'}</h2>
            <p>{locale === 'en' ? 'Processing is based on the performance of the contractual relationship (provision of healthcare services), compliance with legal obligations in healthcare matters, and the consent of the data subject for commercial communications.' : 'El tratamiento se basa en la ejecución de la relación contractual (prestación de servicios sanitarios), el cumplimiento de obligaciones legales en materia sanitaria, y el consentimiento del interesado para comunicaciones comerciales.'}</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '4. Data retention' : '4. Conservación de datos'}</h2>
            <p>{locale === 'en' ? 'Clinical record data will be retained for a minimum of 5 years from the last care provided, in accordance with the healthcare regulations applicable in the Community of Madrid.' : 'Los datos de historia clínica se conservarán durante un mínimo de 5 años desde la última asistencia, conforme a la normativa sanitaria aplicable en la Comunidad de Madrid.'}</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '5. Rights of the data subject' : '5. Derechos del interesado'}</h2>
            <p>{locale === 'en' ? 'You may exercise your rights of access, rectification, erasure, restriction, portability and objection by contacting: ' : 'Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndote a: '}<a href="mailto:info@deboddentalclinic.com" className="text-gold hover:underline">info@deboddentalclinic.com</a></p>
            <p className="mt-2">{locale === 'en' ? 'You have the right to lodge a complaint with the Spanish Data Protection Agency (aepd.es).' : 'Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).'}</p>
          </section>

          <section>
            <h2 className="font-outfit font-semibold text-charcoal text-xl mb-3">{locale === 'en' ? '6. Cookies' : '6. Cookies'}</h2>
            <p>{locale === 'en' ? 'This website uses technical cookies necessary for its operation. We do not use third-party tracking cookies.' : 'Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros.'}</p>
          </section>

        </div>
      </div>
    </>
  )
}
