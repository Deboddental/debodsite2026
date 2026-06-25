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
  'cirugia-guiada-de-implantes-dentales-arguelles-madrid': [
    {
      question: '¿Qué ventaja tiene la cirugía guiada frente a la convencional?',
      answer:
        'Una férula quirúrgica diseñada desde tu escáner 3D coloca el implante en la posición exacta planificada. Eso aporta más precisión y seguridad, una cirugía más rápida y, al ser menos invasiva, un postoperatorio más cómodo.',
    },
    {
      question: '¿Es más segura la cirugía guiada de implantes?',
      answer:
        'Sí. Al planificar virtualmente la intervención antes de empezar, se respetan estructuras importantes como nervios y senos, reduciendo el margen de error y aumentando la previsibilidad del resultado.',
    },
    {
      question: '¿Duele la cirugía guiada de implantes?',
      answer:
        'Se realiza con anestesia local y, gracias a la menor manipulación de los tejidos, suele cursar con menos inflamación y molestias que la técnica tradicional. Te daremos pautas claras para el postoperatorio.',
    },
  ],
  'corona-sobre-implante-arguelles-madrid-espana': [
    {
      question: '¿Qué es una corona sobre implante?',
      answer:
        'Es la parte visible del implante: la "pieza dental" que se atornilla o cementa sobre el implante ya integrado en el hueso. La fabricamos a medida en nuestro laboratorio in-house con cerámica de alta resistencia.',
    },
    {
      question: '¿La corona sobre implante se ve natural?',
      answer:
        'Sí. Se personaliza en color y forma para integrarse con el resto de tu dentición, de modo que el resultado es estético e indistinguible de un diente natural.',
    },
    {
      question: '¿Cuánto dura una corona sobre implante?',
      answer:
        'Con una buena higiene y revisiones periódicas puede durar muchos años. El mantenimiento profesional del implante es clave para su longevidad.',
    },
  ],
  'mantenimiento-de-implante-arguelles-madrid-espana': [
    {
      question: '¿Por qué es importante el mantenimiento del implante?',
      answer:
        'La principal causa de fracaso de un implante es la periimplantitis, una infección de los tejidos que lo rodean. Las revisiones y la higiene profesional periódicas la previenen y permiten que el implante dure muchos años.',
    },
    {
      question: '¿Cada cuánto debo revisar mis implantes?',
      answer:
        'Lo habitual es una revisión de mantenimiento al menos una o dos veces al año, además de tu higiene diaria en casa. Ajustamos la frecuencia a tu caso concreto.',
    },
    {
      question: '¿El mantenimiento del implante duele?',
      answer:
        'No. Es una revisión y limpieza profesional cómoda, sin cirugía, en la que comprobamos el estado del implante, la encía y la oclusión.',
    },
  ],
  'injerto-oseo-alveolar-arguelles-madrid-espana': [
    {
      question: '¿Para qué sirve un injerto óseo alveolar?',
      answer:
        'Cuando tras una pérdida dental no hay suficiente hueso para colocar un implante, el injerto regenera el volumen necesario, recreando las condiciones para que el implante se coloque con éxito.',
    },
    {
      question: '¿Es doloroso el injerto de hueso?',
      answer:
        'Se realiza con anestesia local y suele tolerarse bien. Puede haber inflamación y molestias leves los primeros días, controlables con la pauta que te indiquemos.',
    },
    {
      question: '¿Cuánto hay que esperar antes de poner el implante?',
      answer:
        'Depende de cada caso: el hueso injertado necesita un tiempo de regeneración antes de colocar el implante. En la primera visita, con un escáner 3D, te damos un calendario personalizado.',
    },
  ],
  'carillas-de-porcelana-arguelles-madrid-espana': [
    {
      question: '¿Hay que limar mucho el diente para poner carillas?',
      answer:
        'Las carillas de porcelana requieren un tallado mínimo del esmalte. Trabajamos con un enfoque conservador para preservar la mayor cantidad de diente natural posible.',
    },
    {
      question: '¿Las carillas de porcelana se manchan o amarillean?',
      answer:
        'No. La porcelana es muy resistente a las manchas y mantiene su color y brillo a largo plazo con una higiene adecuada, mejor que las carillas de composite.',
    },
    {
      question: '¿Podré ver cómo quedará mi sonrisa antes?',
      answer:
        'Sí. Realizamos un diseño de sonrisa digital previo para que veas una simulación del resultado antes de empezar. Solo avanzamos cuando estás conforme.',
    },
  ],
  'invisalign-alineadores-transparentes-arguelles-madrid-espana': [
    {
      question: '¿Se nota que llevo Invisalign®?',
      answer:
        'Apenas. Los alineadores son transparentes y prácticamente imperceptibles, por lo que puedes corregir tu sonrisa de forma muy discreta, ideal para adultos y profesionales.',
    },
    {
      question: '¿Cuántas horas al día hay que llevar los alineadores?',
      answer:
        'Para que el tratamiento avance según lo previsto, se recomienda llevarlos en torno a 22 horas al día, retirándolos solo para comer y para tu higiene.',
    },
    {
      question: '¿Cuánto dura un tratamiento con Invisalign®?',
      answer:
        'Depende de la complejidad del caso, normalmente entre varios meses y unos dos años. Tras el estudio inicial te daremos una estimación personalizada.',
    },
  ],
  'tratamientos-coronas-dentales-en-arguelles-madrid': [
    {
      question: '¿Cuándo necesito una corona dental?',
      answer:
        'Cuando un diente está muy dañado, fracturado o debilitado (por ejemplo tras una endodoncia) y un empaste no basta. La corona lo envuelve por completo y le devuelve forma, fuerza y estética.',
    },
    {
      question: '¿De qué material son las coronas?',
      answer:
        'Trabajamos con cerámicas de alta resistencia y aspecto natural, fabricadas a medida en nuestro laboratorio in-house para ajustarse al color del resto de tus dientes.',
    },
    {
      question: '¿Cuánto dura una corona dental?',
      answer:
        'Con una buena higiene y revisiones periódicas, una corona puede durar muchos años. Cuidar la encía y evitar hábitos como apretar los dientes alarga su vida.',
    },
  ],
  'vonlay-arguelles-madrid-espana': [
    {
      question: '¿Qué es un Vonlay?',
      answer:
        'Es una restauración cerámica que combina lo mejor del inlay, el onlay y la carilla. Permite restaurar un diente dañado de forma muy conservadora, manteniendo el máximo de estructura sana.',
    },
    {
      question: '¿En qué se diferencia un Vonlay de una corona?',
      answer:
        'La corona cubre todo el diente y requiere más tallado; el Vonlay es mínimamente invasivo y solo restaura la parte afectada, siendo una opción más conservadora cuando el caso lo permite.',
    },
    {
      question: '¿El Vonlay es estético y duradero?',
      answer:
        'Sí. Se fabrica en cerámica de alta calidad ajustada a tu color natural, ofreciendo un resultado estético y de larga durabilidad.',
    },
  ],
  'raspado-y-alisado-radicular-arguelles-madrid-espana': [
    {
      question: '¿Qué es el raspado y alisado radicular?',
      answer:
        'Es el tratamiento de primera línea para la periodontitis: una limpieza profunda por debajo de la encía que elimina el sarro y la bacteria de la raíz para frenar la infección y estabilizar la enfermedad.',
    },
    {
      question: '¿Es doloroso el raspado radicular?',
      answer:
        'Se realiza con anestesia local para tu comodidad, por lo que no sentirás dolor durante el procedimiento. Después puede haber algo de sensibilidad temporal.',
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer:
        'Depende de la extensión de la enfermedad; a menudo se trabaja por cuadrantes en una o varias sesiones. Tras la evaluación periodontal te indicaremos tu plan concreto.',
    },
  ],
  'injerto-de-encia-arguelles-madrid-espana': [
    {
      question: '¿Para qué sirve un injerto de encía?',
      answer:
        'Recupera el tejido gingival retraído, cubriendo las raíces expuestas. Así reduce la sensibilidad, protege frente a la caries radicular y mejora la estética de la sonrisa.',
    },
    {
      question: '¿Por qué se retraen las encías?',
      answer:
        'Las causas más frecuentes son la enfermedad periodontal, un cepillado demasiado agresivo o la propia anatomía. Conviene valorarlo pronto para evitar que progrese.',
    },
    {
      question: '¿Cómo es la recuperación de un injerto de encía?',
      answer:
        'La intervención se realiza con anestesia local. Los primeros días requieren algunos cuidados e higiene suave en la zona; te daremos indicaciones para una recuperación cómoda.',
    },
  ],
  'gingivoplastia-arguelles-madrid-espana': [
    {
      question: '¿Qué es una gingivoplastia?',
      answer:
        'Es el remodelado del contorno de las encías para conseguir una sonrisa más equilibrada y armónica, por ejemplo cuando se muestra demasiada encía ("sonrisa gingival") o el contorno es irregular.',
    },
    {
      question: '¿La gingivoplastia es dolorosa?',
      answer:
        'Es una intervención mínima que se realiza con anestesia local. Las molestias posteriores suelen ser leves y de corta duración.',
    },
    {
      question: '¿Se notan los resultados enseguida?',
      answer:
        'El cambio en el contorno es visible desde el primer momento, y el aspecto final se aprecia por completo una vez cicatriza la encía.',
    },
  ],
  'extraccion-de-muelas-del-juicio-arguelles-madrid-espana': [
    {
      question: '¿Siempre hay que quitar las muelas del juicio?',
      answer:
        'No. Solo cuando dan problemas: dolor, infecciones de repetición, daño a los dientes vecinos o falta de espacio para erupcionar. Lo valoramos con una radiografía antes de decidir.',
    },
    {
      question: '¿Duele extraer una muela del juicio?',
      answer:
        'La extracción se realiza con anestesia local, por lo que no sentirás dolor durante el procedimiento. Después puede haber inflamación y molestias unos días, controlables con la pauta indicada.',
    },
    {
      question: '¿Cuánto dura la recuperación?',
      answer:
        'Los primeros días requieren cuidados (frío, dieta blanda e higiene suave). La mayoría de pacientes retoma su rutina en poco tiempo siguiendo nuestras indicaciones.',
    },
  ],
  'extracciones-dentales-arguelles-madrid-espana': [
    {
      question: '¿La extracción es siempre la última opción?',
      answer:
        'Sí. Siempre intentamos conservar el diente. Solo recurrimos a la extracción cuando no es posible salvarlo, y la realizamos con técnica atraumática para preservar el hueso de cara a un futuro implante.',
    },
    {
      question: '¿Duele una extracción dental?',
      answer:
        'Se realiza con anestesia local, así que no sentirás dolor durante el procedimiento. Después puede haber molestias leves que se controlan con la pauta que te demos.',
    },
    {
      question: '¿Qué puedo hacer para reponer el diente extraído?',
      answer:
        'La opción más próxima al diente natural es el implante dental. En tu visita valoramos el mejor momento y la mejor solución para reponer la pieza.',
    },
  ],
  'cirugia-apical-arguelles-madrid-espana': [
    {
      question: '¿Qué es la cirugía apical o apicectomía?',
      answer:
        'Es una microcirugía que elimina la infección en el extremo de la raíz cuando una endodoncia previa no ha resuelto el problema. Permite salvar el diente evitando su extracción.',
    },
    {
      question: '¿Cuándo se indica una cirugía apical?',
      answer:
        'Cuando persiste una infección periapical pese al tratamiento de conducto convencional. Lo confirmamos con radiografía o escáner 3D antes de planificar la intervención.',
    },
    {
      question: '¿Es dolorosa la cirugía apical?',
      answer:
        'Se realiza con anestesia local y técnica mínimamente invasiva. El postoperatorio suele ser sencillo, con molestias leves los primeros días.',
    },
  ],
  'examenes-dentales-y-limpiezas-dentales-arguelles-madrid': [
    {
      question: '¿Cada cuánto debo hacerme una limpieza dental?',
      answer:
        'En general, una o dos veces al año, aunque depende de cada paciente. Las revisiones y limpiezas periódicas previenen caries y enfermedad de las encías antes de que aparezcan.',
    },
    {
      question: '¿Qué incluye una revisión con limpieza?',
      answer:
        'Una exploración completa de dientes y encías, detección precoz de caries y de cáncer oral, y la eliminación profesional de placa y sarro (profilaxis) para mantener tu boca sana.',
    },
    {
      question: '¿La limpieza dental daña el esmalte?',
      answer:
        'No. La profilaxis profesional elimina el sarro y la placa sin dañar el esmalte. Es uno de los procedimientos más seguros y rentables para tu salud bucal.',
    },
  ],
  'limpieza-dental-profunda-arguelles-madrid-espana': [
    {
      question: '¿En qué se diferencia de una limpieza normal?',
      answer:
        'La limpieza profunda elimina el sarro acumulado por debajo de la encía, no solo en la superficie. Está indicada cuando ya hay signos de enfermedad periodontal, mientras que la profilaxis convencional es preventiva.',
    },
    {
      question: '¿Necesito una limpieza profunda?',
      answer:
        'Suele indicarse si tienes sangrado de encías, sarro bajo la encía o bolsas periodontales. Tras una evaluación de las encías te confirmamos si es tu caso.',
    },
    {
      question: '¿Es molesta la limpieza dental profunda?',
      answer:
        'Puede realizarse con anestesia local para tu comodidad. Después es normal una sensibilidad temporal que remite en pocos días.',
    },
  ],
  'deteccion-de-cancer-oral-arguelles-madrid-espana': [
    {
      question: '¿Por qué es importante la detección precoz del cáncer oral?',
      answer:
        'Detectado a tiempo, el cáncer oral tiene una tasa de supervivencia muy alta. Por eso incluimos una exploración sistemática de la cavidad oral en las revisiones.',
    },
    {
      question: '¿En qué consiste la exploración?',
      answer:
        'Es una revisión visual y táctil de labios, lengua, encías, paladar y suelo de la boca para identificar lesiones sospechosas de forma precoz. Es rápida e indolora.',
    },
    {
      question: '¿A qué señales debo estar atento?',
      answer:
        'Llagas que no curan en dos semanas, manchas blancas o rojas, bultos o molestias persistentes. Ante cualquiera de ellas, conviene una revisión cuanto antes.',
    },
  ],
  'tratamiento-de-la-apnea-del-sueno-arguelles-madrid-espana': [
    {
      question: '¿Cómo trata el dentista la apnea del sueño?',
      answer:
        'Mediante férulas de avance mandibular: dispositivos a medida que adelantan ligeramente la mandíbula para mantener la vía aérea abierta durante el sueño. Son una alternativa al CPAP en apnea leve y moderada.',
    },
    {
      question: '¿La férula de avance mandibular es cómoda?',
      answer:
        'Sí. Se fabrica a medida de tu boca, por lo que resulta cómoda y discreta, más fácil de tolerar y transportar que un CPAP para muchos pacientes.',
    },
    {
      question: '¿Sirve para todos los casos de apnea?',
      answer:
        'Es especialmente útil en apnea leve y moderada y en el ronquido. Los casos graves requieren valoración médica; te orientaremos sobre la opción más adecuada para ti.',
    },
  ],
  'tratamientos-protectores-bucales-en-arguelles-madrid': [
    {
      question: '¿Por qué un protector bucal a medida y no uno genérico?',
      answer:
        'El protector personalizado se adapta perfectamente a tu dentición, ofreciendo mayor comodidad, mejor ajuste y una protección muy superior a la de los protectores genéricos de farmacia.',
    },
    {
      question: '¿Para qué se usan los protectores bucales?',
      answer:
        'Para proteger los dientes en deportes de contacto y para pacientes con bruxismo, evitando el desgaste y las fracturas por apretar o rechinar los dientes.',
    },
    {
      question: '¿Cómo se cuida un protector bucal?',
      answer:
        'Se limpia tras cada uso y se guarda en su estuche ventilado. En las revisiones comprobamos su estado y ajuste para que siga protegiendo correctamente.',
    },
  ],
  'limpieza-dental-infantil-arguelles-madrid-espana': [
    {
      question: '¿Desde qué edad conviene la limpieza dental infantil?',
      answer:
        'Desde que aparecen los primeros dientes conviene acostumbrar al niño a las revisiones. La limpieza profesional ayuda a prevenir caries y a crear hábitos positivos desde pequeños.',
    },
    {
      question: '¿La limpieza dental en niños es molesta?',
      answer:
        'No. Es un procedimiento suave e indoloro que realizamos en un entorno cálido y sin miedo, adaptándonos al ritmo del niño.',
    },
    {
      question: '¿Cada cuánto debe acudir mi hijo?',
      answer:
        'Por lo general, una revisión con limpieza una o dos veces al año, ajustando la frecuencia según el riesgo de caries de cada niño.',
    },
  ],
  'resina-pediatrica-arguelles-madrid-espana': [
    {
      question: '¿Por qué tratar las caries en dientes de leche?',
      answer:
        'Aunque sean temporales, los dientes de leche mantienen el espacio para los definitivos y son clave para masticar y hablar. Una caries no tratada puede causar dolor e infección.',
    },
    {
      question: '¿Qué es una resina pediátrica?',
      answer:
        'Es un empaste del color del diente, biocompatible y resistente, que es el tratamiento de primera elección para las caries en dientes de leche, conservando la pieza.',
    },
    {
      question: '¿Es doloroso para el niño?',
      answer:
        'Se realiza de forma cómoda y, cuando es necesario, con anestesia local. Cuidamos especialmente la experiencia para que el niño esté tranquilo.',
    },
  ],
  'retenedores-arguelles-madrid-espana-2': [
    {
      question: '¿Para qué sirven los retenedores tras la ortodoncia?',
      answer:
        'Mantienen los dientes en su nueva posición una vez terminada la ortodoncia. Son imprescindibles para evitar la recidiva, es decir, que los dientes tiendan a volver a su sitio anterior.',
    },
    {
      question: '¿Cuánto tiempo hay que llevar retenedores?',
      answer:
        'La retención es una fase de mantenimiento a largo plazo. Según el caso, se usan de forma fija o removible durante un periodo prolongado; te indicaremos la pauta concreta.',
    },
    {
      question: '¿Qué pasa si dejo de usar el retenedor?',
      answer:
        'Los dientes pueden desplazarse y perder la alineación conseguida. Por eso es importante seguir la pauta de uso y acudir a las revisiones de control.',
    },
  ],
}
