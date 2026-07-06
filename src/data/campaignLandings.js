// ── Google Ads campaign landings ────────────────────────────────────────────
// 1 template (src/pages/lp/CampaignLanding.jsx) + this data file. Each landing is
// ONE row here; add a row → get a /lp/<slug> page. Content is shared per theme via
// `landingBases` so copy lives in one place, not repeated per landing.
//
// PRICING: we never invent "desde €X" figures. Each base ships an honest price-
// transparency block + the real financing hook. When the clinic confirms real
// starting prices, set `priceFrom` on the base (e.g. 'desde 900 €') — the template
// shows it automatically.
//
// "gratis" vs "incluida": FIRST_VISIT is the single source of truth for that wording.
// Flip it to "gratis" only if the clinic confirms the first visit is genuinely free.

export const FIRST_VISIT = 'Primera visita diagnóstica incluida'

export const landingBases = {
  implantes: {
    servicio: 'Implantes Dentales',
    heroImage: '/Images/clinica/dsc00253.webp',
    benefits: [
      'Cirugía guiada por TAC 3D — mayor precisión y recuperación más cómoda',
      'Laboratorio propio (Debod Dental Lab) — coronas a medida y control total de calidad',
      'Implantes de casas premium con alta tasa de éxito documentada',
      'Financiación hasta 60 meses, 0 % los primeros 12 — sin entrada',
      'Especialistas colegiados (COEM) — cada caso lo valora un profesional',
      'Primera visita con radiografía y plan de tratamiento claro',
    ],
    priceFrom: null,
    priceLead:
      'El precio de un implante depende de tu caso: número de implantes, si necesitas injerto de hueso y el tipo de corona. Por eso no publicamos una cifra genérica que luego cambie. En tu primera visita con TAC 3D te damos un presupuesto cerrado y sin sorpresas, con financiación hasta 60 meses (0 % los primeros 12).',
    process: [
      { n: 1, title: 'Valoración y TAC 3D', text: 'Estudiamos hueso y encía para planificar con precisión.' },
      { n: 2, title: 'Plan y presupuesto cerrado', text: 'Sabes exactamente qué se hará y cuánto cuesta, sin sorpresas.' },
      { n: 3, title: 'Cirugía guiada del implante', text: 'Colocación planificada en 3D, mínimamente invasiva.' },
      { n: 4, title: 'Corona a medida', text: 'Diseñada y fabricada en nuestro laboratorio propio.' },
      { n: 5, title: 'Revisiones de seguimiento', text: 'Controlamos la integración y tu mantenimiento.' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta un implante dental en Madrid?', a: 'Depende del número de implantes, de si hace falta injerto de hueso y del tipo de corona. No publicamos una cifra fija; en tu valoración con TAC 3D te damos un presupuesto cerrado y sin compromiso, con opción de financiación hasta 60 meses.' },
      { q: '¿Poner un implante es doloroso?', a: 'La cirugía se realiza con anestesia local y la mayoría de pacientes retoman su vida al día siguiente. Te explicamos los cuidados de cada fase para que estés tranquilo.' },
      { q: '¿Cuánto tarda todo el tratamiento?', a: 'Depende de tu caso (cicatrización, si necesitas injerto, etc.). En la valoración con TAC 3D te damos un plazo realista, no una promesa genérica.' },
      { q: '¿Puedo financiar el tratamiento?', a: 'Sí, hasta 60 meses, con 0 % de interés los primeros 12 y sin entrada.' },
      { q: '¿Y si me falta hueso?', a: 'En muchos casos es posible con técnicas de regeneración o injerto. Lo confirmamos con el TAC 3D antes de plantear nada.' },
      { q: '¿Tienen laboratorio propio?', a: 'Sí, el Debod Dental Lab in-house: más control de calidad y menos visitas para ti.' },
    ],
  },
  carillas: {
    servicio: 'Carillas / Diseño de Sonrisa',
    heroImage: '/Images/clinica/dsc00131.webp',
    benefits: [
      'Diseño de sonrisa digital — ves tu resultado antes de empezar',
      'Laboratorio propio (Debod Dental Lab) — carillas de porcelana a medida',
      'Porcelana o composite — te asesoramos cuál encaja con tu caso y presupuesto',
      'Mínimamente invasivas — conservamos al máximo tu diente natural',
      'Financiación hasta 60 meses, 0 % los primeros 12',
      'Primera visita con estudio estético incluida',
    ],
    priceFrom: null,
    priceLead:
      'El precio de las carillas depende del número de dientes y del material (porcelana o composite). En tu valoración con diseño de sonrisa digital te damos un presupuesto cerrado, con financiación hasta 60 meses. Así ves tu nueva sonrisa —y su precio— antes de decidir.',
    process: [
      { n: 1, title: 'Estudio estético y diseño digital', text: 'Diseñamos tu sonrisa en pantalla según tu cara y tus gustos.' },
      { n: 2, title: 'Previsualización (mock-up)', text: 'Apruebas la forma y el color antes de tocar ningún diente.' },
      { n: 3, title: 'Preparación mínima', text: 'Conservamos al máximo el esmalte natural.' },
      { n: 4, title: 'Carillas a medida', text: 'Fabricadas en nuestro laboratorio propio.' },
      { n: 5, title: 'Colocación y ajuste final', text: 'Revisamos mordida, color y encaje.' },
    ],
    faqs: [
      { q: '¿Cuánto cuestan las carillas en Madrid?', a: 'Depende del número de carillas y del material (porcelana o composite). No damos una cifra genérica; en tu valoración te entregamos un presupuesto cerrado, con financiación disponible.' },
      { q: '¿Porcelana o composite?', a: 'La porcelana es más resistente y estable en color; el composite es más económico y reversible. Te asesoramos según tu caso, tus objetivos y tu presupuesto.' },
      { q: '¿Cuánto duran las carillas?', a: 'Con buena higiene y revisiones, las de porcelana son muy duraderas; las de composite requieren más mantenimiento. En la valoración te explicamos qué esperar en tu caso.' },
      { q: '¿Puedo ver el resultado antes?', a: 'Sí. Con el diseño de sonrisa digital y un mock-up previo apruebas la forma antes de empezar.' },
      { q: '¿Dañan el diente?', a: 'Se realiza con una preparación mínima; el objetivo es conservar al máximo tu diente natural.' },
    ],
  },
  ortodoncia: {
    servicio: 'Ortodoncia / Invisalign',
    heroImage: '/Images/clinica/dsc00141.webp',
    benefits: [
      'Ortodoncia invisible (Invisalign®) — alinea sin brackets metálicos',
      'Plan digital: ves tu resultado final antes de empezar',
      'Alineadores retirables: comes y te cepillas con normalidad',
      'Especialista en ortodoncia colegiado (COEM)',
      'Financiación hasta 60 meses, 0 % los primeros 12',
      'Primera visita con escaneo 3D incluida',
    ],
    priceFrom: null,
    priceLead:
      'El precio de la ortodoncia invisible depende de la complejidad de tu caso y su duración. En tu valoración con escaneo 3D te damos un presupuesto cerrado y sin sorpresas, con financiación hasta 60 meses (0 % los primeros 12). Verás tu resultado final en 3D antes de empezar.',
    process: [
      { n: 1, title: 'Estudio y escaneo 3D', text: 'Escaneamos tu boca sin moldes incómodos.' },
      { n: 2, title: 'Plan digital', text: 'Previsualizas tu sonrisa final antes de empezar.' },
      { n: 3, title: 'Tus alineadores a medida', text: 'Fabricados según tu plan de tratamiento.' },
      { n: 4, title: 'Cambios de férula y controles', text: 'Avanzas cómodamente, con revisiones espaciadas.' },
      { n: 5, title: 'Retenedores y mantenimiento', text: 'Fijamos el resultado a largo plazo.' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta Invisalign en Madrid?', a: 'Depende de la complejidad de tu caso y de la duración del tratamiento. En tu valoración con escaneo 3D te damos un presupuesto cerrado, con financiación hasta 60 meses.' },
      { q: '¿Se nota que llevo ortodoncia?', a: 'Los alineadores son transparentes y muy discretos; la mayoría de la gente no los percibe.' },
      { q: '¿Cuánto dura el tratamiento?', a: 'Depende de tu caso. En el estudio digital te damos una estimación realista, no una promesa genérica.' },
      { q: '¿Invisalign o brackets?', a: 'Depende de tu caso y tus preferencias. Te asesoramos en la valoración cuál encaja mejor.' },
      { q: '¿Puedo comer con normalidad?', a: 'Sí. Los alineadores se retiran para comer y para cepillarte.' },
      { q: '¿Duele?', a: 'Puede haber molestias leves los primeros días de cada férula; es pasajero y señal de que avanza.' },
    ],
  },
  allonx: {
    servicio: 'Prótesis / All-on-X',
    heroImage: '/Images/clinica/dsc00259.webp',
    benefits: [
      'Arcada completa fija sobre implantes — recupera todos los dientes',
      'Cirugía guiada por TAC 3D y laboratorio propio',
      'Dientes fijos en menos tiempo cuando el caso lo permite',
      'Solución estable para comer y sonreír con seguridad',
      'Financiación hasta 60 meses, 0 % los primeros 12',
      'Especialistas colegiados en implantología (COEM)',
    ],
    priceFrom: null,
    priceLead:
      'El All-on-4 / arcada completa se presupuesta por arcada y depende de tu caso y de los materiales de la prótesis. En tu valoración con TAC 3D te damos un presupuesto cerrado, con financiación hasta 60 meses. Sin cifras genéricas que luego cambien.',
    process: [
      { n: 1, title: 'Valoración y TAC 3D', text: 'Estudiamos hueso, encía y toda la arcada.' },
      { n: 2, title: 'Plan y presupuesto cerrado', text: 'Número de implantes y prótesis, sin sorpresas.' },
      { n: 3, title: 'Cirugía guiada', text: 'Colocación de implantes planificada en 3D.' },
      { n: 4, title: 'Prótesis fija a medida', text: 'Diseñada y fabricada en nuestro laboratorio propio.' },
      { n: 5, title: 'Ajustes y revisiones', text: 'Controlamos mordida, estética y mantenimiento.' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta un All-on-4 o arcada completa en Madrid?', a: 'Se presupuesta por arcada y depende de tu caso y de los materiales. En tu valoración con TAC 3D te damos un presupuesto cerrado, con financiación disponible.' },
      { q: '¿All-on-4 o All-on-6?', a: 'Depende de tu hueso y de tu caso; el número de implantes lo confirmamos con el TAC 3D.' },
      { q: '¿Tendré dientes fijos el mismo día?', a: 'En muchos casos es posible una prótesis provisional fija en poco tiempo; lo confirmamos tras la valoración.' },
      { q: '¿Duele la cirugía?', a: 'Se realiza con anestesia. Te explicamos el postoperatorio y los cuidados de cada fase.' },
      { q: '¿Puedo si me falta hueso?', a: 'A menudo sí, con técnicas de regeneración. El TAC 3D nos dice qué es posible en tu caso.' },
    ],
  },
  ubicacion: {
    servicio: 'Consulta General',
    heroImage: '/Images/clinica/dsc00238.webp',
    benefits: [
      'Clínica boutique en Argüelles — junto al Templo de Debod y Plaza de España',
      'Especialistas colegiados en todas las áreas (COEM)',
      'Laboratorio propio (Debod Dental Lab)',
      'Tecnología digital: TAC 3D, escáner intraoral y diseño de sonrisa',
      'Financiación hasta 60 meses, 0 % los primeros 12',
      'Primera visita diagnóstica incluida',
    ],
    priceFrom: null,
    priceLead:
      'En tu primera visita diagnóstica (incluida) valoramos tu caso y te damos un presupuesto cerrado y sin sorpresas, con financiación hasta 60 meses. Sin compromiso.',
    process: [
      { n: 1, title: 'Pide tu cita', text: 'Por WhatsApp, teléfono o el formulario.' },
      { n: 2, title: 'Primera visita', text: 'Valoración y diagnóstico de tu caso.' },
      { n: 3, title: 'Plan y presupuesto claro', text: 'Sabes qué necesitas y cuánto cuesta.' },
      { n: 4, title: 'Tratamiento digital', text: 'Con tecnología 3D y laboratorio propio.' },
      { n: 5, title: 'Revisiones', text: 'Seguimiento y mantenimiento a largo plazo.' },
    ],
    faqs: [
      { q: '¿Dónde está la clínica?', a: 'C. de Ferraz, 24, Argüelles, 28008 Madrid, a pocos metros del Templo de Debod. Metro Ventura Rodríguez (L3), Argüelles y Plaza de España.' },
      { q: '¿Qué horario tienen?', a: 'Lunes a viernes de 9:00 a 20:00.' },
      { q: '¿La primera visita tiene coste?', a: 'La primera visita diagnóstica está incluida.' },
      { q: '¿Hay financiación?', a: 'Sí, hasta 60 meses, con 0 % de interés los primeros 12 y sin entrada.' },
      { q: '¿Cómo pido cita?', a: 'Por teléfono al 914 47 62 25, por WhatsApp al 689 10 47 14, o rellenando el formulario de esta página.' },
    ],
  },
  urgencias: {
    servicio: 'Urgencias Dentales',
    heroImage: '/Images/clinica/dsc00238.webp',
    benefits: [
      'Atención el mismo día siempre que es posible',
      'Dolor, flemón, diente roto o corona caída — te vemos pronto',
      'Diagnóstico claro y presupuesto antes de tratar',
      'Especialistas colegiados en Argüelles, Madrid',
      'Financiación disponible si necesitas tratamiento',
      'Llámanos ahora: 914 47 62 25',
    ],
    priceFrom: null,
    priceLead:
      'El coste de una urgencia depende de lo que necesite tu caso. Primero te valoramos, te explicamos qué ocurre y te damos un presupuesto claro antes de tratar. Sin sorpresas.',
    process: [
      { n: 1, title: 'Llámanos o escríbenos', text: 'Teléfono 914 47 62 25 o WhatsApp.' },
      { n: 2, title: 'Cita lo antes posible', text: 'Te damos el hueco más cercano disponible.' },
      { n: 3, title: 'Valoración de la urgencia', text: 'Diagnóstico claro de lo que ocurre.' },
      { n: 4, title: 'Tratamiento y presupuesto', text: 'Te explicamos el coste antes de tratar.' },
      { n: 5, title: 'Seguimiento', text: 'Plan de continuación si hace falta.' },
    ],
    faqs: [
      { q: '¿Atienden urgencias el mismo día?', a: 'Sí, siempre que es posible dentro del horario (lunes a viernes, 9:00–20:00). Llama al 914 47 62 25.' },
      { q: '¿Qué hago si se me ha caído un diente?', a: 'Cógelo por la corona (no por la raíz), guárdalo en leche o en tu saliva y ven cuanto antes: el tiempo es clave.' },
      { q: '¿Cuánto cuesta una urgencia dental?', a: 'Depende de lo que necesites. Primero te valoramos y te damos un presupuesto claro antes de tratar, sin compromiso.' },
      { q: '¿Puedo ir sin cita?', a: 'Mejor llama antes al 914 47 62 25 o escríbenos por WhatsApp para atenderte con la menor espera.' },
      { q: '¿Un flemón es una urgencia?', a: 'La inflamación puede indicar una infección que conviene valorar pronto. Llámanos; si tienes dificultad para respirar o tragar, llama al 112.' },
    ],
  },
}

export const campaignLandings = [
  // ── Implantes (campaña 24010889749) ──
  { slug: 'implantes-dentales-madrid', base: 'implantes', keyword: 'implantes dentales', h1: 'Implantes Dentales en Madrid', subtitle: 'Implantología · Cirugía Guiada 3D · Argüelles, Madrid', metaTitle: 'Implantes Dentales en Madrid | Debod Dental Clinic', metaDescription: 'Implantes dentales en Argüelles, Madrid, con cirugía guiada 3D y laboratorio propio. Primera visita con TAC incluida y financiación hasta 60 meses. Pide cita.' },
  { slug: 'implante-dental-precio-madrid', base: 'implantes', keyword: 'implante dental precio', h1: 'Implante Dental: Precio en Madrid', subtitle: 'Presupuesto cerrado tras tu valoración con TAC 3D', metaTitle: 'Implante Dental Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio de un implante dental en Madrid: presupuesto cerrado y sin sorpresas tras tu valoración con TAC 3D. Financiación hasta 60 meses. Pide tu cita.' },
  { slug: 'implantes-dentales-madrid-centro', base: 'implantes', keyword: 'implantes dentales madrid', h1: 'Implantes Dentales en Madrid Centro', subtitle: 'Clínica en Argüelles · junto a Plaza de España', metaTitle: 'Implantes Dentales Madrid Centro | Debod Dental Clinic', metaDescription: 'Clínica de implantes dentales en el centro de Madrid (Argüelles). Cirugía guiada 3D, laboratorio propio y financiación. Primera visita incluida.' },
  { slug: 'cuanto-cuesta-implante-dental-madrid', base: 'implantes', keyword: 'cuanto cuesta un implante dental', h1: '¿Cuánto Cuesta un Implante Dental?', subtitle: 'Te lo explicamos claro, con presupuesto cerrado', metaTitle: 'Cuánto Cuesta un Implante Dental en Madrid | Debod Dental', metaDescription: '¿Cuánto cuesta un implante dental en Madrid? Depende de tu caso: te damos un presupuesto cerrado y sin sorpresas tras la valoración con TAC 3D. Financiación disponible.' },
  { slug: 'clinica-implantes-dentales-madrid', base: 'implantes', keyword: 'clinica de implantes dentales', h1: 'Clínica de Implantes Dentales en Madrid', subtitle: 'Especialistas colegiados · Laboratorio propio', metaTitle: 'Clínica de Implantes Dentales en Madrid | Debod Dental Clinic', metaDescription: 'Clínica de implantes dentales en Argüelles, Madrid. Especialistas colegiados, cirugía guiada 3D y laboratorio propio. Primera visita incluida.' },
  { slug: 'implantes-carga-inmediata-madrid', base: 'implantes', keyword: 'implantes de carga inmediata', h1: 'Implantes de Carga Inmediata en Madrid', subtitle: 'Dientes fijos en menos tiempo, cuando tu caso lo permite', metaTitle: 'Implantes de Carga Inmediata en Madrid | Debod Dental Clinic', metaDescription: 'Implantes de carga inmediata en Madrid: dientes fijos en menos tiempo cuando el caso lo permite, planificados con TAC 3D. Valoración incluida y financiación.' },
  { slug: 'implante-muela-precio-madrid', base: 'implantes', keyword: 'implante de muela precio', h1: 'Implante de Muela: Precio en Madrid', subtitle: 'Recupera tu muela con un presupuesto claro', metaTitle: 'Implante de Muela Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio de un implante de muela en Madrid: presupuesto cerrado tras tu valoración con TAC 3D, con financiación hasta 60 meses. Pide cita en Argüelles.' },

  // ── Carillas / Diseño de Sonrisa (campaña 24001537437) ──
  { slug: 'carillas-dentales-madrid', base: 'carillas', keyword: 'carillas dentales', h1: 'Carillas Dentales en Madrid', subtitle: 'Diseño de Sonrisa Digital · Laboratorio Propio', metaTitle: 'Carillas Dentales en Madrid | Debod Dental Clinic', metaDescription: 'Carillas dentales en Argüelles, Madrid, con diseño de sonrisa digital y laboratorio propio. Ves tu resultado antes de empezar. Financiación y valoración incluida.' },
  { slug: 'carillas-dentales-precio-madrid', base: 'carillas', keyword: 'carillas dentales precio', h1: 'Carillas Dentales: Precio en Madrid', subtitle: 'Presupuesto cerrado tras tu diseño de sonrisa', metaTitle: 'Carillas Dentales Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio de las carillas dentales en Madrid: presupuesto cerrado tras tu valoración con diseño de sonrisa digital. Porcelana o composite. Financiación disponible.' },
  { slug: 'carillas-porcelana-madrid', base: 'carillas', keyword: 'carillas de porcelana', h1: 'Carillas de Porcelana en Madrid', subtitle: 'Resistentes y estables en color · a medida', metaTitle: 'Carillas de Porcelana en Madrid | Debod Dental Clinic', metaDescription: 'Carillas de porcelana en Madrid, diseñadas y fabricadas en nuestro laboratorio propio. Diseño de sonrisa digital previo. Valoración incluida y financiación.' },
  { slug: 'carillas-composite-madrid', base: 'carillas', keyword: 'carillas de composite', h1: 'Carillas de Composite en Madrid', subtitle: 'Estética en menos sesiones y más económica', metaTitle: 'Carillas de Composite en Madrid | Debod Dental Clinic', metaDescription: 'Carillas de composite en Argüelles, Madrid: estética en menos sesiones, mínimamente invasivas y con presupuesto claro. Te asesoramos porcelana vs composite.' },
  { slug: 'carillas-composite-precio-madrid', base: 'carillas', keyword: 'carillas composite precio', h1: 'Carillas de Composite: Precio', subtitle: 'Presupuesto claro, sin sorpresas', metaTitle: 'Carillas de Composite Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio de las carillas de composite en Madrid: presupuesto cerrado tras tu valoración estética, con financiación disponible. Pide cita en Argüelles.' },
  { slug: 'diseno-de-sonrisa-madrid', base: 'carillas', keyword: 'diseño de sonrisa', h1: 'Diseño de Sonrisa en Madrid', subtitle: 'Previsualiza tu sonrisa antes de empezar', metaTitle: 'Diseño de Sonrisa en Madrid | Debod Dental Clinic', metaDescription: 'Diseño de sonrisa digital en Argüelles, Madrid: aprueba tu nueva sonrisa en pantalla antes de empezar. Carillas a medida en laboratorio propio. Valoración incluida.' },
  { slug: 'estetica-dental-madrid', base: 'carillas', keyword: 'estetica dental madrid', h1: 'Estética Dental en Madrid', subtitle: 'Carillas · Diseño de Sonrisa · Blanqueamiento', metaTitle: 'Estética Dental en Madrid | Debod Dental Clinic', metaDescription: 'Estética dental en Argüelles, Madrid: carillas, diseño de sonrisa digital y blanqueamiento con laboratorio propio. Ves tu resultado antes. Valoración incluida.' },
  { slug: 'carillas-dentales-madrid-centro', base: 'carillas', keyword: 'carillas dentales madrid', h1: 'Carillas Dentales en Madrid Centro', subtitle: 'Clínica en Argüelles · junto a Plaza de España', metaTitle: 'Carillas Dentales Madrid Centro | Debod Dental Clinic', metaDescription: 'Carillas dentales en el centro de Madrid (Argüelles): diseño de sonrisa digital, porcelana o composite y laboratorio propio. Valoración incluida y financiación.' },

  // ── Ortodoncia Invisible / Invisalign (campaña 24010895407) ──
  { slug: 'invisalign-madrid', base: 'ortodoncia', keyword: 'invisalign', h1: 'Invisalign en Madrid', subtitle: 'Ortodoncia Invisible · Plan Digital · Argüelles', metaTitle: 'Invisalign en Madrid | Debod Dental Clinic', metaDescription: 'Invisalign en Argüelles, Madrid: ortodoncia invisible con plan digital: ves tu resultado antes de empezar. Financiación hasta 60 meses. Valoración con escaneo 3D incluida.' },
  { slug: 'invisalign-precio-madrid', base: 'ortodoncia', keyword: 'invisalign precio', h1: 'Invisalign: Precio en Madrid', subtitle: 'Presupuesto cerrado tras tu escaneo 3D', metaTitle: 'Invisalign Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio de Invisalign en Madrid: presupuesto cerrado tras tu valoración con escaneo 3D, con financiación hasta 60 meses. Ves tu resultado antes de empezar.' },
  { slug: 'invisalign-madrid-centro', base: 'ortodoncia', keyword: 'invisalign madrid', h1: 'Invisalign en Madrid Centro', subtitle: 'Clínica en Argüelles · junto a Plaza de España', metaTitle: 'Invisalign Madrid Centro | Debod Dental Clinic', metaDescription: 'Invisalign en el centro de Madrid (Argüelles): ortodoncia invisible discreta, plan digital y financiación. Valoración con escaneo 3D incluida.' },
  { slug: 'ortodoncia-invisible-madrid', base: 'ortodoncia', keyword: 'ortodoncia invisible', h1: 'Ortodoncia Invisible en Madrid', subtitle: 'Alineadores transparentes · Argüelles, Madrid', metaTitle: 'Ortodoncia Invisible en Madrid | Debod Dental Clinic', metaDescription: 'Ortodoncia invisible en Argüelles, Madrid: alineadores transparentes y discretos con plan digital. Financiación hasta 60 meses. Valoración incluida.' },
  { slug: 'ortodoncia-invisible-precio-madrid', base: 'ortodoncia', keyword: 'ortodoncia invisible precio', h1: 'Ortodoncia Invisible: Precio en Madrid', subtitle: 'Presupuesto cerrado, sin sorpresas', metaTitle: 'Ortodoncia Invisible Precio en Madrid | Debod Dental', metaDescription: 'Precio de la ortodoncia invisible en Madrid: presupuesto cerrado tras tu valoración con escaneo 3D, con financiación hasta 60 meses. Pide cita en Argüelles.' },
  { slug: 'alineadores-invisibles-madrid', base: 'ortodoncia', keyword: 'alineadores invisibles', h1: 'Alineadores Invisibles en Madrid', subtitle: 'Discretos y retirables · Plan digital', metaTitle: 'Alineadores Invisibles en Madrid | Debod Dental Clinic', metaDescription: 'Alineadores invisibles en Argüelles, Madrid: discretos, retirables y planificados en 3D. Ves tu resultado antes de empezar. Financiación y valoración incluida.' },
  { slug: 'alineadores-dentales-madrid', base: 'ortodoncia', keyword: 'alineadores dentales', h1: 'Alineadores Dentales en Madrid', subtitle: 'Ortodoncia invisible · Argüelles, Madrid', metaTitle: 'Alineadores Dentales en Madrid | Debod Dental Clinic', metaDescription: 'Alineadores dentales en Madrid: ortodoncia invisible con plan digital y controles cómodos. Financiación hasta 60 meses. Valoración con escaneo 3D incluida.' },

  // ── Prótesis / All-on-X (campaña 24001540044) ──
  { slug: 'all-on-4-madrid', base: 'allonx', keyword: 'all on 4', h1: 'All-on-4 en Madrid', subtitle: 'Arcada Completa Fija · Cirugía Guiada 3D', metaTitle: 'All-on-4 en Madrid | Debod Dental Clinic', metaDescription: 'All-on-4 en Argüelles, Madrid: arcada completa fija sobre 4 implantes, planificada con TAC 3D y laboratorio propio. Financiación hasta 60 meses. Valoración incluida.' },
  { slug: 'all-on-4-precio-madrid', base: 'allonx', keyword: 'all on 4 precio', h1: 'All-on-4: Precio en Madrid', subtitle: 'Presupuesto cerrado por arcada', metaTitle: 'All-on-4 Precio en Madrid | Debod Dental Clinic', metaDescription: 'Precio del All-on-4 en Madrid: se presupuesta por arcada tras tu valoración con TAC 3D, con financiación hasta 60 meses. Sin cifras genéricas. Pide cita.' },
  { slug: 'all-on-6-madrid', base: 'allonx', keyword: 'all on 6', h1: 'All-on-6 en Madrid', subtitle: 'Máxima estabilidad · 6 implantes por arcada', metaTitle: 'All-on-6 en Madrid | Debod Dental Clinic', metaDescription: 'All-on-6 en Argüelles, Madrid: arcada completa fija sobre 6 implantes para máxima estabilidad, con TAC 3D y laboratorio propio. Financiación y valoración incluida.' },
  { slug: 'implantes-toda-la-boca-madrid', base: 'allonx', keyword: 'implantes toda la boca', h1: 'Implantes de Toda la Boca en Madrid', subtitle: 'Recupera todos tus dientes fijos', metaTitle: 'Implantes de Toda la Boca en Madrid | Debod Dental', metaDescription: 'Implantes de toda la boca en Madrid: arcada completa fija sobre implantes, planificada con TAC 3D y laboratorio propio. Financiación hasta 60 meses. Valoración incluida.' },
  { slug: 'arcada-completa-dental-madrid', base: 'allonx', keyword: 'arcada completa dental', h1: 'Arcada Completa Dental en Madrid', subtitle: 'Dientes fijos sobre implantes · Argüelles', metaTitle: 'Arcada Completa Dental en Madrid | Debod Dental Clinic', metaDescription: 'Arcada completa dental en Madrid: prótesis fija sobre implantes con cirugía guiada 3D y laboratorio propio. Presupuesto cerrado por arcada y financiación.' },
  { slug: 'dientes-fijos-un-dia-madrid', base: 'allonx', keyword: 'dientes fijos en un dia', h1: 'Dientes Fijos en un Día en Madrid', subtitle: 'Cuando tu caso lo permite · Cirugía Guiada 3D', metaTitle: 'Dientes Fijos en un Día en Madrid | Debod Dental Clinic', metaDescription: 'Dientes fijos en menos tiempo en Madrid cuando el caso lo permite: arcada completa sobre implantes con TAC 3D y laboratorio propio. Valoración incluida y financiación.' },
  { slug: 'protesis-sobre-implantes-madrid', base: 'allonx', keyword: 'protesis sobre implantes', h1: 'Prótesis sobre Implantes en Madrid', subtitle: 'Fijas y a medida · Laboratorio propio', metaTitle: 'Prótesis sobre Implantes en Madrid | Debod Dental Clinic', metaDescription: 'Prótesis sobre implantes en Argüelles, Madrid: fijas, estables y fabricadas en nuestro laboratorio propio. Cirugía guiada 3D. Financiación y valoración incluida.' },

  // ── Ubicación / Dentista Madrid (campaña 24001540761) — solo landings nuevas ──
  { slug: 'dentista-madrid', base: 'ubicacion', keyword: 'dentista madrid', h1: 'Dentista en Madrid', subtitle: 'Clínica Boutique en Argüelles · Especialistas COEM', metaTitle: 'Dentista en Madrid | Debod Dental Clinic Argüelles', metaDescription: 'Dentista en Madrid: clínica boutique en Argüelles con especialistas colegiados, laboratorio propio y tecnología digital. Primera visita incluida y financiación.' },
  { slug: 'dentista-cerca-de-mi-madrid', base: 'ubicacion', keyword: 'dentista cerca de mi', h1: 'Dentista Cerca de Mí en Madrid', subtitle: 'Argüelles · junto a Plaza de España y Templo de Debod', metaTitle: 'Dentista Cerca de Mí en Madrid | Debod Dental Clinic', metaDescription: 'Dentista cerca de ti en el centro de Madrid (Argüelles), junto a Plaza de España. Especialistas colegiados y laboratorio propio. Primera visita incluida.' },
  { slug: 'clinica-dental-madrid', base: 'ubicacion', keyword: 'clinica dental madrid', h1: 'Clínica Dental en Madrid', subtitle: 'Argüelles · Todas las especialidades', metaTitle: 'Clínica Dental en Madrid | Debod Dental Clinic', metaDescription: 'Clínica dental en Argüelles, Madrid: implantes, ortodoncia invisible, estética y rehabilitación oral con laboratorio propio. Primera visita incluida y financiación.' },
  { slug: 'dentista-arguelles', base: 'ubicacion', keyword: 'dentista arguelles', h1: 'Dentista en Argüelles', subtitle: 'C. de Ferraz, 24 · Metro Ventura Rodríguez', metaTitle: 'Dentista en Argüelles, Madrid | Debod Dental Clinic', metaDescription: 'Dentista en Argüelles (C. de Ferraz, 24, Madrid): clínica boutique con especialistas colegiados y laboratorio propio. Primera visita incluida. Pide cita.' },
  { slug: 'mejor-dentista-madrid', base: 'ubicacion', keyword: 'mejor dentista madrid', h1: 'Mejor Dentista en Madrid', subtitle: '4,9★ · 350 reseñas · Premio WhiteSmile 2023', metaTitle: 'Mejor Dentista en Madrid | Debod Dental Clinic', metaDescription: 'Buscas el mejor dentista en Madrid: Debod Dental Clinic en Argüelles, 4,9★ con 350 reseñas y Premio WhiteSmile 2023. Especialistas colegiados. Primera visita incluida.' },

  // ── Urgencias Dentales (campaña 24001536231) — solo landings nuevas ──
  { slug: 'dentista-urgencias-madrid', base: 'urgencias', keyword: 'dentista urgencias', h1: 'Dentista de Urgencias en Madrid', subtitle: 'Atención el mismo día · Argüelles', metaTitle: 'Dentista de Urgencias en Madrid | Debod Dental Clinic', metaDescription: 'Dentista de urgencias en Argüelles, Madrid: atención el mismo día para dolor, flemón, diente roto o corona caída. Llama al 914 47 62 25.' },
  { slug: 'dentista-abierto-hoy-madrid', base: 'urgencias', keyword: 'dentista abierto hoy', h1: 'Dentista Abierto Hoy en Madrid', subtitle: 'Lunes a Viernes 9:00–20:00 · Argüelles', metaTitle: 'Dentista Abierto Hoy en Madrid | Debod Dental Clinic', metaDescription: 'Dentista abierto hoy en Madrid (Argüelles), lunes a viernes de 9:00 a 20:00. Atención de urgencias el mismo día siempre que es posible. Llama al 914 47 62 25.' },
  { slug: 'dolor-de-muela-madrid', base: 'urgencias', keyword: 'dolor de muela', h1: '¿Dolor de Muela? Dentista en Madrid', subtitle: 'Te vemos el mismo día · Argüelles', metaTitle: 'Dolor de Muela — Dentista en Madrid | Debod Dental Clinic', metaDescription: '¿Dolor de muela en Madrid? Te atendemos el mismo día siempre que es posible en Argüelles. Diagnóstico claro y presupuesto antes de tratar. Llama al 914 47 62 25.' },
  { slug: 'diente-roto-madrid', base: 'urgencias', keyword: 'diente roto', h1: '¿Diente Roto? Dentista en Madrid', subtitle: 'Urgencia el mismo día · Argüelles', metaTitle: 'Diente Roto — Dentista en Madrid | Debod Dental Clinic', metaDescription: '¿Diente roto en Madrid? Urgencia dental el mismo día siempre que es posible en Argüelles. Te valoramos y te damos un presupuesto claro. Llama al 914 47 62 25.' },
]
