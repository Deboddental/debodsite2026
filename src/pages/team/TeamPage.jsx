import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/ui/PageHero'
import Breadcrumb from '../../components/ui/Breadcrumb'
import CtaBand from '../../components/ui/CtaBand'
import TeamRoster from '../../components/TeamRoster'
import { useLocale } from '../../hooks/useLocale'
import { enPathFor } from '../../i18n/slugs'

export default function TeamPage() {
  const locale = useLocale()
  return (
    <>
      <Helmet>
        <title>{locale === 'en' ? 'Our Team of Dental Specialists | Debod Dental Clinic — Argüelles, Madrid' : 'Nuestro Equipo de Especialistas Dentales | Debod Dental Clinic — Argüelles, Madrid'}</title>
        <meta
          name="description"
          content={locale === 'en' ? 'Meet the team of specialist dentists at Debod Dental Clinic in Argüelles, Madrid. Orthodontics, dental implants, root canal, periodontics and our own dental laboratory.' : 'Conoce al equipo de odontólogos especialistas de Debod Dental Clinic en Argüelles, Madrid. Ortodoncia, implantes, endodoncia, periodoncia y laboratorio dental propio.'}
        />
        <meta property="og:title" content={locale === 'en' ? 'Our Team — Debod Dental Clinic' : 'Nuestro Equipo — Debod Dental Clinic'} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero
        subtitle={locale === 'en' ? 'The team' : 'El equipo'}
        title={locale === 'en' ? 'Specialists committed to your health' : 'Especialistas comprometidos con tu salud'}
        description={locale === 'en' ? 'A multidisciplinary team of first-class dentists, united by a philosophy of honest dentistry and clinical excellence.' : 'Un equipo multidisciplinar de odontólogos de primer nivel, unidos por la filosofía de la odontología honesta y la excelencia clínica.'}
        imageUrl="/Images/clinica/dsc00256.webp"
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? enPathFor('/') : '/' },
            { label: locale === 'en' ? 'Team' : 'Equipo', href: null },
          ]}
        />
      </div>

      <TeamRoster />

      <CtaBand
        headline={locale === 'en' ? 'Speak directly with our specialists' : 'Habla directamente con nuestros especialistas'}
        subtext={locale === 'en' ? 'First consultation with no obligation. A complete diagnosis with the right specialist for your case.' : 'Primera consulta sin compromiso. Diagnóstico completo con el especialista adecuado para tu caso.'}
        variant="dark"
      />
    </>
  )
}
