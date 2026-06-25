// ─────────────────────────────────────────────────────────────────────────────
// FAQ content — rendered by <FAQ /> and emitted as FAQPage JSON-LD (see seo.js).
//
// Keep answers factual and grounded in what the clinic actually offers; AI
// assistants quote these verbatim. One question = one self-contained answer.
// ─────────────────────────────────────────────────────────────────────────────

// General clinic FAQs — shown on the Home page.
export const homeFaqs = [
  {
    question: '¿Dónde está Debod Dental Clinic?',
    answer:
      'Estamos en C. de Ferraz, 24, en el barrio de Argüelles (Madrid, 28008), a pocos metros del Templo de Debod y con fácil acceso en metro (línea 3, Ventura Rodríguez). Puedes pedir cita en el +34 689 10 47 14.',
  },
  {
    question: '¿Qué especialidades ofrece Debod Dental Clinic?',
    answer:
      'Ofrecemos Rehabilitación Oral integral, Implantología Digital con cirugía guiada 3D, Ortodoncia con Invisalign®, Odontología Estética (carillas de porcelana, blanqueamiento láser), Periodoncia, Endodoncia, Cirugía Oral y Odontopediatría.',
  },
  {
    question: '¿Quiénes son los doctores de Debod Dental Clinic?',
    answer:
      'La clínica está dirigida por el Dr. Víctor Guerrero (Ortodoncia y Ortopedia Dentofacial, referente internacional en Invisalign® y anclaje esquelético) y el Dr. César Rodríguez (Prostodoncia y Rehabilitación Oral, Máster por la UCM). Ambos son los propietarios y atienden personalmente a los pacientes.',
  },
  {
    question: '¿La primera visita tiene coste?',
    answer:
      'La primera visita diagnóstica está incluida: valoramos tu caso, realizamos las pruebas necesarias y te explicamos las opciones de tratamiento con un presupuesto claro y sin compromiso.',
  },
  {
    question: '¿Ofrecéis financiación para los tratamientos?',
    answer:
      'Sí. Disponemos de financiación de hasta 60 meses, con 0% de interés en los primeros 12 meses y sin entrada inicial, para que el presupuesto nunca sea un obstáculo. La aprobación suele resolverse en 24 horas.',
  },
  {
    question: '¿Tenéis laboratorio dental propio?',
    answer:
      'Sí. Contamos con el Debod Digital Lab, nuestro laboratorio in-house. Esto nos permite controlar la calidad de cada restauración —coronas, carillas, prótesis sobre implante— y reducir los tiempos de tratamiento.',
  },
  {
    question: '¿Qué tecnología utilizáis?',
    answer:
      'Trabajamos con odontología digital: escáner intraoral 3D, radiografía digital de baja radiación y diseño de sonrisa previo, para que veas el resultado antes de empezar y el tratamiento sea lo más preciso y mínimamente invasivo posible.',
  },
  {
    question: '¿Cómo pido cita?',
    answer:
      'Puedes llamarnos o escribirnos por WhatsApp al +34 689 10 47 14, o rellenar el formulario de contacto de la web. Te confirmamos la cita y resolvemos cualquier duda antes de tu visita.',
  },
]

// Per-service FAQs, keyed by the service slug. ServicePage renders these when a
// matching entry exists. Answers stay conservative (no fixed prices) and defer
// a personalised plan/budget to the first visit.
export const serviceFaqs = {
  'dentista-general-arguelles-madrid-espana': [
    {
      question: '¿Cada cuánto debo acudir al dentista?',
      answer:
        'Recomendamos una revisión al menos una vez al año, e idealmente dos, además de una limpieza profesional periódica. Las revisiones permiten detectar caries, problemas de encías o desgaste de forma precoz, cuando el tratamiento es más sencillo y conservador.',
    },
    {
      question: '¿Qué incluye una revisión de odontología general?',
      answer:
        'Una exploración completa de dientes y encías, escáner intraoral 3D o radiografía digital cuando es necesario, detección precoz de caries y de cáncer oral, y un plan claro con las opciones de tratamiento que realmente necesitas.',
    },
    {
      question: '¿Los empastes duelen?',
      answer:
        'No. Los empastes se realizan con anestesia local, por lo que no notarás dolor durante el procedimiento. Trabajamos con un enfoque mínimamente invasivo para conservar la mayor cantidad de diente sano posible.',
    },
  ],
  'dentista-cosmetico-arguelles-madrid-espana': [
    {
      question: '¿Cuál es la diferencia entre carillas y blanqueamiento?',
      answer:
        'El blanqueamiento aclara el color de tus dientes naturales. Las carillas son finas láminas de porcelana que, además del color, corrigen forma, tamaño, pequeñas fracturas o espacios. En la primera visita valoramos qué opción se ajusta mejor a tu caso.',
    },
    {
      question: '¿Podré ver el resultado antes de empezar?',
      answer:
        'Sí. Realizamos un diseño de sonrisa digital previo para que veas una simulación del resultado antes de tocar un solo diente. Solo avanzamos cuando estás conforme con la propuesta.',
    },
    {
      question: '¿Las carillas se notan artificiales?',
      answer:
        'No. Se fabrican a medida en nuestro laboratorio in-house con porcelana de aspecto natural, ajustando color y forma a tu rostro para un resultado armónico e indistinguible de un diente natural.',
    },
  ],
  'dentista-de-implantes-arguelles-madrid-espana': [
    {
      question: '¿Poner un implante dental duele?',
      answer:
        'La colocación se realiza con anestesia local y suele ser más cómoda de lo que muchos pacientes esperan. Tras la intervención puede haber molestias leves durante unos días, controlables con la pauta que te indiquemos.',
    },
    {
      question: '¿Cuánto dura un implante dental?',
      answer:
        'Con un buen mantenimiento y revisiones periódicas, un implante puede durar muchos años, incluso de por vida. El cuidado de la higiene y el seguimiento profesional son clave para prevenir la periimplantitis.',
    },
    {
      question: '¿Soy candidato si me falta hueso?',
      answer:
        'En muchos casos sí. Cuando el hueso es insuficiente, técnicas como el injerto óseo alveolar permiten regenerar el volumen necesario para colocar el implante con garantías. Lo valoramos con un escáner 3D en la primera visita.',
    },
    {
      question: '¿Puedo financiar el tratamiento de implantes?',
      answer:
        'Sí. Ofrecemos financiación de hasta 60 meses, con 0% de interés en los primeros 12 meses y sin entrada, para que puedas afrontar el tratamiento con comodidad.',
    },
  ],
  'endodoncista-arguelles-madrid-espana': [
    {
      question: '¿Qué es una endodoncia y cuándo se necesita?',
      answer:
        'La endodoncia ("matar el nervio") trata el interior del diente cuando la caries o un traumatismo afectan a la pulpa. Permite conservar tu diente natural en lugar de extraerlo, eliminando la infección y el dolor.',
    },
    {
      question: '¿La endodoncia es dolorosa?',
      answer:
        'Se realiza con anestesia local, así que el procedimiento no duele. De hecho, la endodoncia alivia el dolor que provoca la infección. Después puede haber sensibilidad leve unos días.',
    },
    {
      question: '¿Necesitaré una corona después?',
      answer:
        'Con frecuencia sí. Un diente endodonciado queda más frágil, por lo que a menudo se recomienda una corona para protegerlo y devolverle la resistencia y la estética a largo plazo.',
    },
  ],
  'odontopediatra-arguelles-madrid-espana': [
    {
      question: '¿A qué edad debe ir mi hijo al dentista por primera vez?',
      answer:
        'Idealmente alrededor del primer año de vida o cuando aparecen los primeros dientes. Las visitas tempranas ayudan a prevenir caries y a que el niño se familiarice con la consulta de forma positiva.',
    },
    {
      question: '¿Hay que tratar las caries en dientes de leche?',
      answer:
        'Sí. Aunque sean temporales, los dientes de leche mantienen el espacio para los definitivos y son importantes para la masticación y el habla. Una caries no tratada puede causar dolor e infección.',
    },
    {
      question: '¿Cómo ayudáis a los niños con miedo al dentista?',
      answer:
        'Trabajamos con un trato cercano y adaptado a cada edad, explicando cada paso de forma sencilla y respetando el ritmo del niño para crear una experiencia tranquila y de confianza.',
    },
  ],
  'ortodoncista-arguelles-madrid-espana': [
    {
      question: '¿Invisalign® o brackets: cuál me conviene?',
      answer:
        'Depende de tu caso y tus preferencias. Invisalign® usa alineadores transparentes y removibles, muy discretos y cómodos. En la primera visita estudiamos tu mordida y te recomendamos la opción más adecuada.',
    },
    {
      question: '¿Cuánto dura un tratamiento de ortodoncia?',
      answer:
        'Varía según la complejidad, pero la mayoría de los tratamientos se sitúan entre 6 y 24 meses. Tras el estudio inicial podremos darte una estimación personalizada de tu caso.',
    },
    {
      question: '¿La ortodoncia es solo estética?',
      answer:
        'No. Además de alinear la sonrisa, corrige la mordida, facilita la higiene y previene desgastes y problemas de articulación. Tiene beneficios tanto estéticos como funcionales y de salud.',
    },
  ],
  'periodoncista-arguelles-madrid-espana': [
    {
      question: '¿Por qué me sangran las encías?',
      answer:
        'El sangrado al cepillarse suele ser el primer signo de gingivitis, una inflamación por acumulación de placa. Si no se trata, puede evolucionar a periodontitis y afectar al hueso que sostiene los dientes. Conviene valorarlo cuanto antes.',
    },
    {
      question: '¿Tiene cura la enfermedad de las encías?',
      answer:
        'La gingivitis es reversible con tratamiento e higiene adecuada. La periodontitis no se revierte, pero sí se controla y estabiliza con tratamiento periodontal y mantenimiento, evitando que siga progresando.',
    },
    {
      question: '¿En qué consiste una limpieza periodontal?',
      answer:
        'A diferencia de una limpieza convencional, el tratamiento periodontal (raspado y alisado radicular) elimina el sarro por debajo de la encía para frenar la infección. Puede realizarse con anestesia local para tu comodidad.',
    },
  ],
  'cirujano-oral-arguelles-madrid-espana': [
    {
      question: '¿Cuándo hay que extraer una muela del juicio?',
      answer:
        'Cuando provoca dolor, infecciones de repetición, daña a los dientes vecinos o no tiene espacio para erupcionar correctamente. No todas las muelas del juicio deben extraerse; lo valoramos con una radiografía.',
    },
    {
      question: '¿La cirugía oral es dolorosa?',
      answer:
        'Las intervenciones se realizan con anestesia local y un protocolo cuidadoso, por lo que no sentirás dolor durante el procedimiento. Te daremos pautas claras para un postoperatorio cómodo y sin complicaciones.',
    },
    {
      question: '¿Cuánto dura la recuperación tras una extracción?',
      answer:
        'Los primeros días requieren algunos cuidados, y la mayoría de pacientes retoman su vida normal en poco tiempo. Siguiendo nuestras indicaciones de higiene y alimentación, la recuperación suele ser rápida.',
    },
  ],
}

// Per-treatment FAQs, keyed by the treatment slug. TreatmentPage renders these
// when a matching entry exists. Seed more treatments over time following this
// same pattern (one map entry per treatment slug).
export const treatmentFaqs = {
  'implantes-dentales-arguelles-madrid-espana': [
    {
      question: '¿Cuánto tarda todo el tratamiento de implante?',
      answer:
        'Depende de cada caso, pero entre la colocación del implante y la corona definitiva suelen pasar unos meses, necesarios para que el implante se integre con el hueso (osteointegración). En la primera visita te damos un calendario personalizado.',
    },
    {
      question: '¿Se nota o se ve que es un implante?',
      answer:
        'No. La corona se fabrica a medida en nuestro laboratorio in-house imitando el color y la forma de tus dientes naturales, de modo que el resultado es estético y se integra de forma natural en tu sonrisa.',
    },
    {
      question: '¿Qué cuidados necesita un implante?',
      answer:
        'Los mismos que un diente natural: buena higiene diaria y revisiones de mantenimiento periódicas. Ese seguimiento es clave para prevenir la periimplantitis y que el implante dure muchos años.',
    },
  ],
}
