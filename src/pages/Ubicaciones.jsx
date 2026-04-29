import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import JsonLd from '../components/ui/JsonLd'

const BASE_URL = 'https://deboddentalclinic.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness'],
  '@id': `${BASE_URL}/#clinic`,
  name: 'Debod Dental Clinic',
  description: 'Clínica dental integral en Argüelles, Madrid. Odontología honesta con especialistas de primer nivel.',
  url: BASE_URL,
  telephone: '+34919059095',
  email: 'info@deboddentalclinic.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle de Quintana, 28',
    addressLocality: 'Madrid',
    postalCode: '28008',
    addressRegion: 'Comunidad de Madrid',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4286,
    longitude: -3.7134,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
}

export default function Ubicaciones() {
  return (
    <>
      <Helmet>
        <title>Clínica Dental en Argüelles, Madrid — Cómo Llegar | Debod Dental</title>
        <meta
          name="description"
          content="Debod Dental Clinic en Argüelles, Madrid. Calle de Quintana 28. Metro Argüelles (L3/L4) y Moncloa (L3/L6). Horario de lunes a viernes de 9:00 a 21:00."
        />
        <link rel="canonical" href={`${BASE_URL}/ubicaciones/`} />
        <meta property="og:title" content="Cómo Llegar — Debod Dental Clinic, Argüelles Madrid" />
        <meta property="og:url" content={`${BASE_URL}/ubicaciones/`} />
      </Helmet>

      <JsonLd schema={localBusinessSchema} />

      <PageHero
        subtitle="Dónde estamos"
        title="Argüelles, Madrid"
        description="En el corazón de uno de los barrios más tranquilos y accesibles de Madrid — a pasos del Parque del Oeste y el Templo de Debod."
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Ubicaciones', href: null },
          ]}
        />
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">
                Información de contacto
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">Dirección</div>
                    <div className="font-jakarta text-slate-600">Calle de Quintana, 28</div>
                    <div className="font-jakarta text-slate-600">28008 Madrid</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">Horario</div>
                    <div className="font-jakarta text-slate-600">Lunes a Viernes: 9:00 – 21:00</div>
                    <div className="font-jakarta text-slate-500 text-sm">Fines de semana: previa cita</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={22} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-outfit font-semibold text-charcoal">Teléfono</div>
                    <a href="tel:+34919059095" className="font-jakarta text-slate-600 hover:text-gold transition-colors">
                      +34 919 059 095
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
              <h3 className="font-outfit font-semibold text-charcoal mb-3">Cómo llegar en metro</h3>
              <ul className="space-y-2 font-jakarta text-slate-600 text-sm">
                <li>🚇 <strong>Argüelles</strong> — Líneas 3 y 4 (5 min a pie)</li>
                <li>🚇 <strong>Moncloa</strong> — Líneas 3 y 6 (8 min a pie)</li>
                <li>🚌 <strong>Autobús</strong> — Líneas 21, 74, 133</li>
              </ul>
            </div>

            <Link
              to="/ubicaciones/citas-arguelles-madrid/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal rounded-full font-outfit font-semibold text-sm hover:bg-gold-light transition-colors duration-300"
            >
              Reservar cita online
            </Link>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              title="Debod Dental Clinic — Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6!2d-3.7160!3d40.4286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQyLjkiTiAzwrA0MiczNy43Ilc!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
