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
      'Estamos en C. de Ferraz, 24, en el barrio de Argüelles (Madrid, 28008), a pocos metros del Templo de Debod y con fácil acceso en metro (línea 3, Ventura Rodríguez). Puedes pedir cita en el +34 914 47 62 25.',
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
      'Sí. Contamos con el Debod Dental Lab, nuestro laboratorio in-house. Esto nos permite controlar la calidad de cada restauración —coronas, carillas, prótesis sobre implante— y reducir los tiempos de tratamiento.',
  },
  {
    question: '¿Qué tecnología utilizáis?',
    answer:
      'Trabajamos con odontología digital: escáner intraoral 3D, radiografía digital de baja radiación y diseño de sonrisa previo, para que veas el resultado antes de empezar y el tratamiento sea lo más preciso y mínimamente invasivo posible.',
  },
  {
    question: '¿Cómo pido cita?',
    answer:
      'Puedes llamarnos al +34 914 47 62 25 o escribirnos por WhatsApp al +34 689 10 47 14, o rellenar el formulario de contacto de la web. Te confirmamos la cita y resolvemos cualquier duda antes de tu visita.',
  },
]

// General clinic FAQs — English (shown on the EN Home page).
export const homeFaqs_en = [
  {
    question: 'Where is Debod Dental Clinic?',
    answer:
      'We are at C. de Ferraz, 24, in the Argüelles neighbourhood (Madrid, 28008), just a few metres from the Temple of Debod and easily reached by metro (line 3, Ventura Rodríguez). You can book an appointment by calling +34 914 47 62 25.',
  },
  {
    question: 'What specialties does Debod Dental Clinic offer?',
    answer:
      'We offer full oral rehabilitation, digital implant dentistry with 3D guided surgery, orthodontics with Invisalign®, cosmetic dentistry (porcelain veneers, laser teeth whitening), periodontics, root canal treatment, oral surgery and paediatric dentistry.',
  },
  {
    question: 'Who are the dentists at Debod Dental Clinic?',
    answer:
      'The clinic is led by Dr Víctor Guerrero (Orthodontics and Dentofacial Orthopaedics, an international reference in Invisalign® and skeletal anchorage) and Dr César Rodríguez (Prosthodontics and Oral Rehabilitation, with a Master’s degree from the UCM). Both are the owners and care for patients personally.',
  },
  {
    question: 'Is the first visit free of charge?',
    answer:
      'The first diagnostic visit is included: we assess your case, carry out the necessary tests and explain the treatment options with a clear, no-obligation quote.',
  },
  {
    question: 'Do you offer financing for treatments?',
    answer:
      'Yes. We offer financing of up to 60 months, with 0% interest for the first 12 months and no down payment, so that the cost is never an obstacle. Approval is usually resolved within 24 hours.',
  },
  {
    question: 'Do you have your own dental laboratory?',
    answer:
      'Yes. We have the Debod Dental Lab, our in-house laboratory. This lets us control the quality of every restoration —crowns, veneers, implant-supported prostheses— and reduce treatment times.',
  },
  {
    question: 'What technology do you use?',
    answer:
      'We work with digital dentistry: a 3D intraoral scanner, low-radiation digital X-rays and a preview smile design, so you can see the result before we start and the treatment is as precise and minimally invasive as possible.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can call us on +34 914 47 62 25, message us on WhatsApp at +34 689 10 47 14, or fill in the contact form on the website. We confirm your appointment and answer any questions before your visit.',
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
  'dentista-general-arguelles-madrid-espana_en': [
    {
      question: 'How often should I visit the dentist?',
      answer:
        'We recommend a check-up at least once a year, ideally twice, along with regular professional cleanings. Check-ups allow us to detect cavities, gum problems or wear early, when treatment is simpler and more conservative.',
    },
    {
      question: 'What does a general dentistry check-up include?',
      answer:
        'A full examination of your teeth and gums, a 3D intraoral scan or digital X-ray when needed, early detection of cavities and oral cancer, and a clear plan with the treatment options you genuinely need.',
    },
    {
      question: 'Do fillings hurt?',
      answer:
        'No. Fillings are done under local anaesthetic, so you will not feel pain during the procedure. We use a minimally invasive approach to preserve as much healthy tooth as possible.',
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
  'dentista-cosmetico-arguelles-madrid-espana_en': [
    {
      question: 'What is the difference between veneers and teeth whitening?',
      answer:
        'Teeth whitening lightens the colour of your natural teeth. Veneers are thin porcelain shells that, beyond colour, also correct shape, size, small chips or gaps. At the first visit we assess which option best suits your case.',
    },
    {
      question: 'Will I be able to see the result before we start?',
      answer:
        'Yes. We carry out a digital smile design beforehand so you can see a simulation of the result before touching a single tooth. We only proceed once you are happy with the proposal.',
    },
    {
      question: 'Do veneers look artificial?',
      answer:
        'No. They are custom-made in our in-house laboratory with natural-looking porcelain, matching colour and shape to your face for a harmonious result that is indistinguishable from a natural tooth.',
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
  'dentista-de-implantes-arguelles-madrid-espana_en': [
    {
      question: 'Does placing a dental implant hurt?',
      answer:
        'Placement is carried out under local anaesthetic and is usually more comfortable than many patients expect. After the procedure there may be mild discomfort for a few days, manageable with the instructions we give you.',
    },
    {
      question: 'How long does a dental implant last?',
      answer:
        'With good maintenance and regular check-ups, an implant can last many years, even a lifetime. Good hygiene and professional follow-up are key to preventing peri-implantitis.',
    },
    {
      question: 'Am I a candidate if I have lost bone?',
      answer:
        'In many cases, yes. When there is not enough bone, techniques such as an alveolar bone graft can regenerate the volume needed to place the implant reliably. We assess this with a 3D scan at the first visit.',
    },
    {
      question: 'Can I finance implant treatment?',
      answer:
        'Yes. We offer financing of up to 60 months, with 0% interest for the first 12 months and no down payment, so you can manage the treatment comfortably.',
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
  'endodoncista-arguelles-madrid-espana_en': [
    {
      question: 'What is root canal treatment and when is it needed?',
      answer:
        'Root canal treatment ("killing the nerve") treats the inside of the tooth when decay or trauma affects the pulp. It lets you keep your natural tooth instead of extracting it, removing the infection and the pain.',
    },
    {
      question: 'Is root canal treatment painful?',
      answer:
        'It is done under local anaesthetic, so the procedure does not hurt. In fact, root canal treatment relieves the pain caused by the infection. Afterwards there may be mild sensitivity for a few days.',
    },
    {
      question: 'Will I need a crown afterwards?',
      answer:
        'Often, yes. A tooth that has had root canal treatment becomes more fragile, so a crown is frequently recommended to protect it and restore its strength and appearance in the long term.',
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
  'odontopediatra-arguelles-madrid-espana_en': [
    {
      question: 'At what age should my child first see the dentist?',
      answer:
        'Ideally around their first birthday or when the first teeth appear. Early visits help prevent cavities and let the child become familiar with the clinic in a positive way.',
    },
    {
      question: 'Do cavities in baby teeth need to be treated?',
      answer:
        'Yes. Even though they are temporary, baby teeth hold the space for the permanent teeth and are important for chewing and speech. An untreated cavity can cause pain and infection.',
    },
    {
      question: 'How do you help children who are afraid of the dentist?',
      answer:
        'We use a warm approach tailored to each age, explaining every step simply and respecting the child’s pace to create a calm, trusting experience.',
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
  'ortodoncista-arguelles-madrid-espana_en': [
    {
      question: 'Invisalign® or braces: which is right for me?',
      answer:
        'It depends on your case and your preferences. Invisalign® uses clear, removable aligners that are very discreet and comfortable. At the first visit we study your bite and recommend the most suitable option.',
    },
    {
      question: 'How long does orthodontic treatment take?',
      answer:
        'It varies with complexity, but most treatments fall between 6 and 24 months. After the initial study we can give you a personalised estimate for your case.',
    },
    {
      question: 'Is orthodontics only about aesthetics?',
      answer:
        'No. As well as aligning your smile, it corrects the bite, makes hygiene easier and prevents wear and joint problems. It has aesthetic, functional and health benefits.',
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
  'periodoncista-arguelles-madrid-espana_en': [
    {
      question: 'Why are my gums bleeding?',
      answer:
        'Bleeding when brushing is usually the first sign of gingivitis, an inflammation caused by plaque build-up. Left untreated, it can progress to periodontitis and affect the bone that supports your teeth. It is best assessed as soon as possible.',
    },
    {
      question: 'Can gum disease be cured?',
      answer:
        'Gingivitis is reversible with treatment and proper hygiene. Periodontitis cannot be reversed, but it can be controlled and stabilised with periodontal treatment and maintenance, preventing it from progressing.',
    },
    {
      question: 'What does a periodontal cleaning involve?',
      answer:
        'Unlike a standard cleaning, periodontal treatment (scaling and root planing) removes tartar from below the gum line to halt the infection. It can be done under local anaesthetic for your comfort.',
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
  'cirujano-oral-arguelles-madrid-espana_en': [
    {
      question: 'When does a wisdom tooth need to be removed?',
      answer:
        'When it causes pain, recurrent infections, damages the neighbouring teeth or has no room to erupt properly. Not all wisdom teeth need to be removed; we assess this with an X-ray.',
    },
    {
      question: 'Is oral surgery painful?',
      answer:
        'Procedures are carried out under local anaesthetic with a careful protocol, so you will not feel pain during the procedure. We give you clear instructions for a comfortable, complication-free recovery.',
    },
    {
      question: 'How long does recovery take after an extraction?',
      answer:
        'The first few days call for some care, and most patients return to normal life quickly. By following our hygiene and diet instructions, recovery is usually fast.',
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
  'implantes-dentales-arguelles-madrid-espana_en': [
    {
      question: 'How long does the whole implant treatment take?',
      answer:
        'It depends on each case, but a few months usually pass between placing the implant and the final crown — time needed for the implant to integrate with the bone (osseointegration). At the first visit we give you a personalised timeline.',
    },
    {
      question: 'Can you tell or see that it is an implant?',
      answer:
        'No. The crown is custom-made in our in-house laboratory to mimic the colour and shape of your natural teeth, so the result is aesthetic and blends naturally into your smile.',
    },
    {
      question: 'What care does an implant need?',
      answer:
        'The same as a natural tooth: good daily hygiene and regular maintenance check-ups. That follow-up is key to preventing peri-implantitis and helping the implant last many years.',
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
  'cirugia-guiada-de-implantes-dentales-arguelles-madrid_en': [
    {
      question: 'What is the advantage of guided surgery over conventional surgery?',
      answer:
        'A surgical guide designed from your 3D scan places the implant in the exact planned position. This gives greater precision and safety, a faster surgery and, being less invasive, a more comfortable recovery.',
    },
    {
      question: 'Is guided implant surgery safer?',
      answer:
        'Yes. By planning the procedure virtually before we start, important structures such as nerves and sinuses are respected, reducing the margin of error and making the result more predictable.',
    },
    {
      question: 'Does guided implant surgery hurt?',
      answer:
        'It is done under local anaesthetic and, thanks to less handling of the tissues, it usually involves less swelling and discomfort than the traditional technique. We give you clear post-operative instructions.',
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
  'corona-sobre-implante-arguelles-madrid-espana_en': [
    {
      question: 'What is an implant crown?',
      answer:
        'It is the visible part of the implant: the "tooth" that is screwed or cemented onto the implant once it has integrated into the bone. We make it custom in our in-house laboratory with high-strength ceramic.',
    },
    {
      question: 'Does an implant crown look natural?',
      answer:
        'Yes. It is personalised in colour and shape to blend with the rest of your teeth, so the result is aesthetic and indistinguishable from a natural tooth.',
    },
    {
      question: 'How long does an implant crown last?',
      answer:
        'With good hygiene and regular check-ups it can last many years. Professional maintenance of the implant is key to its longevity.',
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
  'mantenimiento-de-implante-arguelles-madrid-espana_en': [
    {
      question: 'Why is implant maintenance important?',
      answer:
        'The main cause of implant failure is peri-implantitis, an infection of the surrounding tissues. Regular check-ups and professional hygiene prevent it and help the implant last many years.',
    },
    {
      question: 'How often should I have my implants checked?',
      answer:
        'A maintenance check-up at least once or twice a year is usual, in addition to your daily hygiene at home. We tailor the frequency to your specific case.',
    },
    {
      question: 'Does implant maintenance hurt?',
      answer:
        'No. It is a comfortable professional check-up and cleaning, with no surgery, in which we check the condition of the implant, the gum and the bite.',
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
  'injerto-oseo-alveolar-arguelles-madrid-espana_en': [
    {
      question: 'What is an alveolar bone graft for?',
      answer:
        'When there is not enough bone to place an implant after a tooth loss, the graft regenerates the volume needed, recreating the conditions for the implant to be placed successfully.',
    },
    {
      question: 'Is a bone graft painful?',
      answer:
        'It is done under local anaesthetic and is usually well tolerated. There may be swelling and mild discomfort for the first few days, manageable with the instructions we give you.',
    },
    {
      question: 'How long do I have to wait before placing the implant?',
      answer:
        'It depends on each case: the grafted bone needs time to regenerate before the implant is placed. At the first visit, using a 3D scan, we give you a personalised timeline.',
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
  'carillas-de-porcelana-arguelles-madrid-espana_en': [
    {
      question: 'Does the tooth need to be heavily filed down for veneers?',
      answer:
        'Porcelain veneers require minimal reshaping of the enamel. We use a conservative approach to preserve as much natural tooth as possible.',
    },
    {
      question: 'Do porcelain veneers stain or turn yellow?',
      answer:
        'No. Porcelain is highly resistant to staining and keeps its colour and shine over the long term with proper hygiene, better than composite veneers.',
    },
    {
      question: 'Will I be able to see how my smile will look beforehand?',
      answer:
        'Yes. We carry out a digital smile design beforehand so you can see a simulation of the result before we start. We only proceed once you are happy.',
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
  'invisalign-alineadores-transparentes-arguelles-madrid-espana_en': [
    {
      question: 'Can people tell I am wearing Invisalign®?',
      answer:
        'Barely. The aligners are clear and practically imperceptible, so you can straighten your smile very discreetly — ideal for adults and professionals.',
    },
    {
      question: 'How many hours a day do I need to wear the aligners?',
      answer:
        'For treatment to progress as planned, we recommend wearing them around 22 hours a day, removing them only to eat and for your hygiene.',
    },
    {
      question: 'How long does Invisalign® treatment take?',
      answer:
        'It depends on the complexity of the case, normally between several months and about two years. After the initial study we will give you a personalised estimate.',
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
  'tratamientos-coronas-dentales-en-arguelles-madrid_en': [
    {
      question: 'When do I need a dental crown?',
      answer:
        'When a tooth is badly damaged, fractured or weakened (for example after root canal treatment) and a filling is not enough. The crown covers it completely and restores its shape, strength and appearance.',
    },
    {
      question: 'What material are crowns made of?',
      answer:
        'We work with high-strength, natural-looking ceramics, custom-made in our in-house laboratory to match the colour of the rest of your teeth.',
    },
    {
      question: 'How long does a dental crown last?',
      answer:
        'With good hygiene and regular check-ups, a crown can last many years. Looking after your gums and avoiding habits such as clenching extends its life.',
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
  'vonlay-arguelles-madrid-espana_en': [
    {
      question: 'What is a Vonlay?',
      answer:
        'It is a ceramic restoration that combines the best of the inlay, the onlay and the veneer. It lets us restore a damaged tooth very conservatively, keeping as much healthy structure as possible.',
    },
    {
      question: 'How is a Vonlay different from a crown?',
      answer:
        'A crown covers the whole tooth and requires more reshaping; a Vonlay is minimally invasive and only restores the affected part, making it a more conservative option when the case allows.',
    },
    {
      question: 'Is a Vonlay aesthetic and durable?',
      answer:
        'Yes. It is made from high-quality ceramic matched to your natural colour, offering an aesthetic result with long-lasting durability.',
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
  'raspado-y-alisado-radicular-arguelles-madrid-espana_en': [
    {
      question: 'What is scaling and root planing?',
      answer:
        'It is the first-line treatment for periodontitis: a deep cleaning below the gum line that removes tartar and bacteria from the root to halt the infection and stabilise the disease.',
    },
    {
      question: 'Is root planing painful?',
      answer:
        'It is done under local anaesthetic for your comfort, so you will not feel pain during the procedure. Afterwards there may be some temporary sensitivity.',
    },
    {
      question: 'How many sessions do I need?',
      answer:
        'It depends on how extensive the disease is; the work is often done by quadrants over one or several sessions. After the periodontal assessment we will set out your specific plan.',
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
  'injerto-de-encia-arguelles-madrid-espana_en': [
    {
      question: 'What is a gum graft for?',
      answer:
        'It restores receded gum tissue, covering exposed roots. This reduces sensitivity, protects against root decay and improves the appearance of your smile.',
    },
    {
      question: 'Why do gums recede?',
      answer:
        'The most common causes are periodontal disease, overly aggressive brushing or your own anatomy. It is best assessed early to prevent it from progressing.',
    },
    {
      question: 'What is recovery from a gum graft like?',
      answer:
        'The procedure is done under local anaesthetic. The first few days call for some care and gentle hygiene in the area; we give you instructions for a comfortable recovery.',
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
  'gingivoplastia-arguelles-madrid-espana_en': [
    {
      question: 'What is a gingivoplasty?',
      answer:
        'It is the reshaping of the gum contour to achieve a more balanced, harmonious smile — for example when too much gum shows ("gummy smile") or the contour is uneven.',
    },
    {
      question: 'Is a gingivoplasty painful?',
      answer:
        'It is a minor procedure carried out under local anaesthetic. Any subsequent discomfort is usually mild and short-lived.',
    },
    {
      question: 'Are the results visible straight away?',
      answer:
        'The change in contour is visible from the very first moment, and the final appearance is fully seen once the gum has healed.',
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
  'extraccion-de-muelas-del-juicio-arguelles-madrid-espana_en': [
    {
      question: 'Do wisdom teeth always have to be removed?',
      answer:
        'No. Only when they cause problems: pain, recurrent infections, damage to neighbouring teeth or a lack of room to erupt. We assess this with an X-ray before deciding.',
    },
    {
      question: 'Does removing a wisdom tooth hurt?',
      answer:
        'The extraction is done under local anaesthetic, so you will not feel pain during the procedure. Afterwards there may be swelling and discomfort for a few days, manageable with the instructions given.',
    },
    {
      question: 'How long does recovery take?',
      answer:
        'The first few days call for some care (cold compresses, a soft diet and gentle hygiene). Most patients return to their routine quickly by following our instructions.',
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
  'extracciones-dentales-arguelles-madrid-espana_en': [
    {
      question: 'Is extraction always the last resort?',
      answer:
        'Yes. We always try to save the tooth. We only resort to extraction when it cannot be saved, and we do it with an atraumatic technique to preserve the bone for a future implant.',
    },
    {
      question: 'Does a tooth extraction hurt?',
      answer:
        'It is done under local anaesthetic, so you will not feel pain during the procedure. Afterwards there may be mild discomfort, managed with the instructions we give you.',
    },
    {
      question: 'What can I do to replace the extracted tooth?',
      answer:
        'The option closest to a natural tooth is a dental implant. At your visit we assess the best timing and the best solution to replace the tooth.',
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
  'cirugia-apical-arguelles-madrid-espana_en': [
    {
      question: 'What is apical surgery or apicoectomy?',
      answer:
        'It is a microsurgery that removes the infection at the tip of the root when a previous root canal treatment has not solved the problem. It allows the tooth to be saved and avoids its extraction.',
    },
    {
      question: 'When is apical surgery indicated?',
      answer:
        'When a periapical infection persists despite conventional root canal treatment. We confirm this with an X-ray or 3D scan before planning the procedure.',
    },
    {
      question: 'Is apical surgery painful?',
      answer:
        'It is done under local anaesthetic with a minimally invasive technique. Recovery is usually straightforward, with mild discomfort for the first few days.',
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
  'examenes-dentales-y-limpiezas-dentales-arguelles-madrid_en': [
    {
      question: 'How often should I have a dental cleaning?',
      answer:
        'Generally once or twice a year, although it depends on each patient. Regular check-ups and cleanings prevent cavities and gum disease before they appear.',
    },
    {
      question: 'What does a check-up with cleaning include?',
      answer:
        'A full examination of your teeth and gums, early detection of cavities and oral cancer, and the professional removal of plaque and tartar (a scale and polish) to keep your mouth healthy.',
    },
    {
      question: 'Does a dental cleaning damage the enamel?',
      answer:
        'No. A professional scale and polish removes tartar and plaque without damaging the enamel. It is one of the safest and most cost-effective procedures for your oral health.',
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
  'limpieza-dental-profunda-arguelles-madrid-espana_en': [
    {
      question: 'How is it different from a normal cleaning?',
      answer:
        'A deep cleaning removes tartar built up below the gum line, not just on the surface. It is indicated when there are already signs of periodontal disease, whereas a standard scale and polish is preventive.',
    },
    {
      question: 'Do I need a deep cleaning?',
      answer:
        'It is usually indicated if you have bleeding gums, tartar below the gum line or periodontal pockets. After a gum assessment we confirm whether it applies to your case.',
    },
    {
      question: 'Is a deep dental cleaning uncomfortable?',
      answer:
        'It can be done under local anaesthetic for your comfort. Afterwards, some temporary sensitivity is normal and settles within a few days.',
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
  'deteccion-de-cancer-oral-arguelles-madrid-espana_en': [
    {
      question: 'Why is early detection of oral cancer important?',
      answer:
        'When caught early, oral cancer has a very high survival rate. That is why we include a systematic examination of the oral cavity in our check-ups.',
    },
    {
      question: 'What does the examination involve?',
      answer:
        'It is a visual and tactile check of the lips, tongue, gums, palate and floor of the mouth to identify suspicious lesions early. It is quick and painless.',
    },
    {
      question: 'What signs should I watch out for?',
      answer:
        'Sores that do not heal within two weeks, white or red patches, lumps or persistent discomfort. If any of these appear, it is best to have a check-up as soon as possible.',
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
  'tratamiento-de-la-apnea-del-sueno-arguelles-madrid-espana_en': [
    {
      question: 'How does the dentist treat sleep apnoea?',
      answer:
        'With mandibular advancement devices: custom-made appliances that move the lower jaw slightly forward to keep the airway open during sleep. They are an alternative to CPAP in mild and moderate apnoea.',
    },
    {
      question: 'Is a mandibular advancement device comfortable?',
      answer:
        'Yes. It is custom-made to fit your mouth, so it is comfortable and discreet — easier to tolerate and carry than a CPAP for many patients.',
    },
    {
      question: 'Does it work for all cases of apnoea?',
      answer:
        'It is especially useful in mild and moderate apnoea and for snoring. Severe cases require medical assessment; we will guide you towards the most suitable option for you.',
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
  'tratamientos-protectores-bucales-en-arguelles-madrid_en': [
    {
      question: 'Why a custom mouthguard rather than a generic one?',
      answer:
        'A custom mouthguard fits your teeth perfectly, offering greater comfort, a better fit and far better protection than generic over-the-counter mouthguards.',
    },
    {
      question: 'What are mouthguards used for?',
      answer:
        'To protect the teeth in contact sports and for patients with bruxism, preventing the wear and fractures caused by clenching or grinding the teeth.',
    },
    {
      question: 'How do I care for a mouthguard?',
      answer:
        'Clean it after each use and store it in its ventilated case. At your check-ups we check its condition and fit so it keeps protecting you properly.',
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
  'limpieza-dental-infantil-arguelles-madrid-espana_en': [
    {
      question: 'From what age is a children’s dental cleaning advisable?',
      answer:
        'From the moment the first teeth appear it is good to get the child used to check-ups. A professional cleaning helps prevent cavities and build positive habits from an early age.',
    },
    {
      question: 'Is a dental cleaning uncomfortable for children?',
      answer:
        'No. It is a gentle, painless procedure that we carry out in a warm, fear-free environment, adapting to the child’s pace.',
    },
    {
      question: 'How often should my child come in?',
      answer:
        'Generally, a check-up with cleaning once or twice a year, adjusting the frequency according to each child’s risk of cavities.',
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
  'resina-pediatrica-arguelles-madrid-espana_en': [
    {
      question: 'Why treat cavities in baby teeth?',
      answer:
        'Even though they are temporary, baby teeth hold the space for the permanent teeth and are key for chewing and speaking. An untreated cavity can cause pain and infection.',
    },
    {
      question: 'What is a paediatric filling?',
      answer:
        'It is a tooth-coloured, biocompatible and durable filling that is the first-choice treatment for cavities in baby teeth, preserving the tooth.',
    },
    {
      question: 'Is it painful for the child?',
      answer:
        'It is done comfortably and, when needed, under local anaesthetic. We take special care over the experience so the child stays calm.',
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
  'retenedores-arguelles-madrid-espana-2_en': [
    {
      question: 'What are retainers for after orthodontics?',
      answer:
        'They keep the teeth in their new position once orthodontic treatment is finished. They are essential to prevent relapse — that is, the teeth tending to drift back to their previous place.',
    },
    {
      question: 'How long do I have to wear retainers?',
      answer:
        'Retention is a long-term maintenance phase. Depending on the case, fixed or removable retainers are worn for an extended period; we will set out your specific instructions.',
    },
    {
      question: 'What happens if I stop using my retainer?',
      answer:
        'The teeth can shift and lose the alignment achieved. That is why it is important to follow the wear instructions and attend your follow-up check-ups.',
    },
  ],
}
