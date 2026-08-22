import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import { useLocale } from '../hooks/useLocale'
import { enPathFor } from '../i18n/slugs'

// NOTE: the authoritative #clinic (Dentist/LocalBusiness) node is defined once in
// index.html and baked into every prerendered page's <head>. This page must NOT
// redefine it — a second #clinic with different data (priceRange, description) is a
// schema conflict for Google and AI crawlers.

export default function Ubicaciones() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Dental Clinic in Argüelles, Madrid — How to Get Here | Debod Dental' : 'Clínica Dental en Argüelles, Madrid — Cómo Llegar | Debod Dental'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Debod Dental Clinic in Argüelles, Madrid. C. de Ferraz, 24. Metro Argüelles (L3/L4/L6) and Ventura Rodríguez (L3). Open Monday to Friday from 9:00 to 20:00.' : 'Debod Dental Clinic en Argüelles, Madrid. C. de Ferraz, 24. Metro Argüelles (L3/L4/L6) y Ventura Rodríguez (L3). Horario de lunes a viernes de 9:00 a 20:00.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'How to Get Here — Debod Dental Clinic, Argüelles Madrid' : 'Cómo Llegar — Debod Dental Clinic, Argüelles Madrid'} />
        <meta property="og:description" content={locale === 'en' ? 'Debod Dental Clinic in Argüelles, Madrid. C. de Ferraz, 24. Metro Argüelles (L3/L4/L6) and Ventura Rodríguez (L3). Open Monday to Friday from 9:00 to 20:00.' : 'Debod Dental Clinic en Argüelles, Madrid. C. de Ferraz, 24. Metro Argüelles (L3/L4/L6) y Ventura Rodríguez (L3). Horario de lunes a viernes de 9:00 a 20:00.'} />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'Where we are' : 'Dónde estamos'}
        title="Argüelles, Madrid"
        description={locale === 'en' ? 'In the heart of one of the calmest and most accessible neighbourhoods in Madrid — a few steps from Parque del Oeste and the Temple of Debod.' : 'En el corazón de uno de los barrios más tranquilos y accesibles de Madrid — a pasos del Parque del Oeste y el Templo de Debod.'}
        imageUrl="/Images/clinica/dsc00131.webp"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Locations' : 'Ubicaciones', href: null },
          ]}
        />
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">
                {locale === 'en' ? 'Contact information' : 'Información de contacto'}
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">{locale === 'en' ? 'Address' : 'Dirección'}</div>
                    <div className="font-jakarta text-slate-600">C. de Ferraz, 24</div>
                    <div className="font-jakarta text-slate-600">Argüelles · 28008 Madrid</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">{locale === 'en' ? 'Opening hours' : 'Horario'}</div>
                    <div className="font-jakarta text-slate-600">{locale === 'en' ? 'Monday to Friday: 9:00 – 20:00' : 'Lunes a Viernes: 9:00 – 20:00'}</div>
                    <div className="font-jakarta text-slate-500 text-sm">{locale === 'en' ? 'Weekends: by appointment' : 'Fines de semana: previa cita'}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">{locale === 'en' ? 'Phone' : 'Teléfono'}</div>
                    <a href="tel:+34914476225" className="font-jakarta text-slate-600 hover:text-gold transition-colors">
                      +34 914 47 62 25
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">Email</div>
                    <a href="mailto:info@deboddentalclinic.com" className="font-jakarta text-slate-600 hover:text-gold transition-colors">
                      info@deboddentalclinic.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal/5 rounded-2xl p-6">
              <h3 className="font-outfit font-semibold text-charcoal mb-3">{locale === 'en' ? 'How to get here by metro' : 'Cómo llegar en metro'}</h3>
              <ul className="space-y-2 font-jakarta text-slate-600 text-sm">
                <li>🚇 <strong>Ventura Rodríguez</strong> — {locale === 'en' ? 'Line 3 (a few minutes away)' : 'Línea 3 (a pocos minutos)'}</li>
                <li>🚇 <strong>Plaza de España</strong> — {locale === 'en' ? 'Lines 3 and 10' : 'Líneas 3 y 10'}</li>
                <li>🚇 <strong>Argüelles</strong> — {locale === 'en' ? 'Lines 3, 4 and 6' : 'Líneas 3, 4 y 6'}</li>
              </ul>
            </div>

            <Link
              to={locale === 'en' ? enPathFor('/ubicaciones/citas-arguelles-madrid/') : '/ubicaciones/citas-arguelles-madrid/'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal rounded-full font-outfit font-semibold text-sm hover:bg-gold-light transition-colors duration-300"
            >
              {locale === 'en' ? 'Book an appointment online' : 'Reservar cita online'}
            </Link>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              title={locale === 'en' ? 'Debod Dental Clinic — Map' : 'Debod Dental Clinic — Mapa'}
              src="https://www.google.com/maps?q=C.+de+Ferraz,+24,+28008+Madrid&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Zonas que atendemos + más — enlace interno / SEO local */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-5">{locale === 'en' ? 'Areas we serve in Madrid' : 'Zonas que atendemos en Madrid'}</h2>
          <div className="flex flex-wrap gap-3">
            {[
              [locale === 'en' ? 'Dentist in Moncloa' : 'Dentista en Moncloa', '/dentista-moncloa-madrid/'],
              [locale === 'en' ? 'Dentist in Chamberí' : 'Dentista en Chamberí', '/dentista-chamberi-madrid/'],
              [locale === 'en' ? 'Dentist in Central Madrid' : 'Dentista en el Centro de Madrid', '/dentista-centro-madrid/'],
              [locale === 'en' ? 'Dentist in Plaza de España' : 'Dentista en Plaza de España', '/dentista-plaza-espana-madrid/'],
              [locale === 'en' ? 'Our technology' : 'Nuestra tecnología', '/tecnologia/'],
              [locale === 'en' ? 'Before and after cases' : 'Casos antes y después', '/antes-despues/'],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={locale === 'en' ? enPathFor(href) : href}
                className="font-jakarta text-sm text-charcoal/80 border border-charcoal/15 px-4 py-2 rounded-full hover:bg-charcoal hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
