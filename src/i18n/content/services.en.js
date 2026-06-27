// English content for services, keyed by the Spanish slug. Merged onto the
// service records as `<field>_en` via mergeEn() in src/data/services.js.
// Per slug: { title, subtitle, metaTitle, metaDescription, heroText, bodyMarkdown,
//             relatedTreatments:[{title,description,href}] }  (href = /en/... )
// British English spelling. Internal hrefs rewritten via src/i18n/slugs.js maps.
export const servicesEn = {
  'dentista-general-arguelles-madrid-espana': {
    title: 'Dentist in Argüelles, Madrid',
    subtitle: 'General Dentistry',
    metaTitle: 'Dentist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'General dentistry clinic in Argüelles, Madrid. High-quality check-ups, cleanings, fillings and preventive dentistry. Book your appointment: +34 914 47 62 25.',
    heroText:
      'At Debod Dental Clinic we offer comprehensive care for all your general oral health needs. From preventive check-ups and cleanings to fillings, early decay detection and the treatment of sensitivity.',
    bodyMarkdown: `## How general dentistry can help you

At **Debod Dental Clinic**, located in the neighbourhood of **Argüelles, Madrid**, general dentistry is the foundation of our care. Our general dentistry specialists support you at every stage of life, from childhood to maturity.

### What does our general dentistry include?

- **Regular check-ups**: Early diagnosis so we can treat problems before they get worse.
- **Professional dental cleanings**: Removal of tartar and bacterial plaque to prevent periodontal disease.
- **Fillings and restorations**: We restore function and aesthetics to teeth affected by decay.
- **Sensitivity treatment**: Specific protocols for sensitive teeth.
- **Oral cancer screening**: A systematic check at every visit.
- **Night guards**: For patients with bruxism or temporomandibular dysfunction.

### The honest dentistry you deserve

We believe in **honest dentistry**: clear diagnoses, transparent treatment options and quotes with no small print. We only recommend what you genuinely need.

At our clinic at **C. de Ferraz, 24, Argüelles**, we combine the most advanced technology — a 3D intraoral scanner, low-radiation digital X-rays — with warm, personalised care.

### When should you visit us?

We recommend visiting our general dentist in Argüelles at least once a year, though two check-ups a year is ideal. Also whenever you notice:

- Pain or sensitivity in a tooth
- Bleeding when you brush
- Loose teeth
- Stains or changes in colour
- Persistent bad breath

Early detection saves time, money and more invasive procedures.`,
    relatedTreatments: [
      { title: 'Dental diagnosis', description: '3D intraoral scanner and digital X-rays.', href: '/en/blog/services/dental-diagnosis-arguelles-madrid/' },
      { title: 'Deep dental cleaning', description: 'Tartar removal and periodontal prevention.', href: '/en/treatments/deep-dental-cleaning-arguelles-madrid/' },
      { title: 'Oral cancer screening', description: 'A systematic check included at every visit.', href: '/en/treatments/oral-cancer-screening-arguelles-madrid/' },
      { title: 'Exams and cleanings', description: 'Complete check-ups with professional prophylaxis.', href: '/en/treatments/dental-exams-and-cleanings-arguelles-madrid/' },
      { title: 'Sleep apnoea treatment', description: 'Custom guards for sleep apnoea and bruxism.', href: '/en/treatments/sleep-apnea-treatment-arguelles-madrid/' },
      { title: 'Mouthguards', description: 'Personalised protection for sport and bruxism.', href: '/en/treatments/mouthguards-night-guards-arguelles-madrid/' },
    ],
  },
  'dentista-cosmetico-arguelles-madrid-espana': {
    title: 'Cosmetic Dentist in Argüelles, Madrid',
    subtitle: 'Cosmetic Dentistry',
    metaTitle: 'Cosmetic Dentist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Premium cosmetic dentistry in Argüelles, Madrid. Porcelain veneers, Invisalign, laser teeth whitening and digital smile design. Debod Dental Clinic.',
    heroText:
      'We look after the aesthetics of your smile from start to finish. We begin with photos of your smile and facial features, continue with a three-dimensional diagnosis and finish by scanning your mouth. A complete overview in a single appointment.',
    bodyMarkdown: `## How cosmetic dentistry can transform your life

At **Debod Dental Clinic**, located in the vibrant neighbourhood of **Argüelles, Madrid**, cosmetic dentistry is not just about appearance; it is about rejuvenating your confidence and improving your overall quality of life.

Our team of specialists understands the transformative power of a radiant smile. Using cutting-edge techniques and tools, we offer a range of aesthetic treatments designed to correct imperfections, brighten your smile and boost your self-esteem.

### Digital smile design

Before carrying out any procedure, we design your new smile digitally. You will see the final result before we touch a single tooth. This process includes:

- Clinical photography and facial analysis
- A high-precision 3D intraoral scanner
- CAD/CAM design of your smile with our in-house laboratory
- A simulation of the final result

### A tailored approach

We recognise that every smile is unique. Our treatments adapt to your specific needs and wishes, ensuring natural-looking results that harmonise with your facial features.

Beyond aesthetics, many procedures also improve oral function, offering a blend of beauty and health.

### Minimally invasive dentistry

We believe in **honest, minimally invasive dentistry**: we preserve as much healthy tooth structure as possible. The right amount of intervention, no more and no less.`,
    relatedTreatments: [
      { title: 'Porcelain veneers', description: 'Thin porcelain shells personalised for your smile.', href: '/en/treatments/porcelain-veneers-arguelles-madrid/' },
      { title: 'Invisible orthodontics', description: 'Invisalign® to align your smile discreetly.', href: '/en/treatments/invisalign-clear-aligners-arguelles-madrid/' },
      { title: 'Teeth whitening', description: 'Whiter teeth in a single in-clinic session.', href: '/en/treatments/dental-exams-and-cleanings-arguelles-madrid/' },
      { title: 'Dental crowns', description: 'Full restoration of size, shape and aesthetics.', href: '/en/treatments/dental-crowns-arguelles-madrid/' },
      { title: 'Vonlay', description: 'Durable, aesthetic ceramic restorations.', href: '/en/treatments/vonlay-restorations-arguelles-madrid/' },
      { title: 'Gingivoplasty', description: 'Gum reshaping for a more harmonious smile.', href: '/en/treatments/gingivoplasty-arguelles-madrid/' },
    ],
  },
  'dentista-de-implantes-arguelles-madrid-espana': {
    title: 'Dental Implant Dentist in Argüelles, Madrid',
    subtitle: 'Dental Implantology',
    metaTitle: 'Dental Implants in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Dental implants with 3D guided surgery in Argüelles, Madrid. Replace missing teeth with millimetre-precise technology. Debod Dental Clinic.',
    heroText:
      'We use cutting-edge technology to deliver dental implants with millimetre precision. Prior virtual planning and 3D guided surgery ensure natural-looking results and a faster recovery.',
    bodyMarkdown: `## State-of-the-art digital implantology in Argüelles

At **Debod Dental Clinic**, in **Argüelles, Madrid**, dental implantology is one of our most advanced services. We use a complete 3D guided surgery protocol that begins long before you reach the chair.

### Our digital implantology protocol

1. **3D intraoral scanner**: We obtain a precise model of your mouth without uncomfortable moulds.
2. **Virtual planning**: We design the exact position of each implant before surgery.
3. **Guided surgery**: A custom surgical guide ensures precision during the procedure.
4. **Aesthetic restoration**: The crown on the implant is made in our in-house laboratory.

### Why choose dental implants?

Dental implants are the solution closest to a natural tooth. Unlike removable dentures, implants:

- **Preserve the bone**: They prevent the bone resorption that follows the loss of a tooth.
- **Are permanent**: With proper care, they can last a lifetime.
- **Are comfortable**: They integrate with the bone and feel like your own teeth.
- **Protect adjacent teeth**: They do not require reshaping neighbouring teeth, unlike bridges.

### Candidates for implants

Anyone in good general health with enough available bone can opt for implants. In cases of insufficient bone, we perform bone grafts to create the optimal conditions.

We offer solutions for cases of one or several missing teeth, including full rehabilitation of the dental arch.`,
    relatedTreatments: [
      { title: 'Dental implants', description: 'The standard implant with 3D planning.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
      { title: 'Guided implant surgery', description: 'Millimetre precision with a custom surgical guide.', href: '/en/treatments/guided-implant-surgery-arguelles-madrid/' },
      { title: 'Implant crown', description: 'Aesthetic restoration made in our in-house lab.', href: '/en/treatments/implant-crown-arguelles-madrid/' },
      { title: 'Alveolar bone graft', description: 'Bone regeneration for cases of resorption.', href: '/en/treatments/alveolar-bone-graft-arguelles-madrid/' },
      { title: 'Implant maintenance', description: 'Long-term check-ups and care for your implants.', href: '/en/treatments/implant-maintenance-arguelles-madrid/' },
    ],
  },
  'endodoncista-arguelles-madrid-espana': {
    title: 'Endodontist in Argüelles, Madrid',
    subtitle: 'Endodontics',
    metaTitle: 'Endodontist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Root canal treatment specialists in Argüelles, Madrid. Pain-free root canal treatments to save your natural teeth. Debod Dental Clinic.',
    heroText:
      'Specialising in saving teeth through modern, pain-free root canal treatments. Precision endodontics that preserves your natural teeth for as long as possible.',
    bodyMarkdown: `## Endodontics: saving is better than extracting

At **Debod Dental Clinic**, in **Argüelles, Madrid**, root canal treatment allows us to save teeth that would otherwise have to be extracted. Our goal is always to preserve as much healthy tooth structure as possible.

### What is a root canal treatment?

Root canal treatment (endodontics) involves removing the infected or damaged dental pulp from inside the tooth, cleaning and disinfecting the canal system, and sealing it tightly to prevent reinfection.

With modern techniques and the right anaesthesia, a root canal treatment is as comfortable as a conventional filling.

### When is root canal treatment needed?

- Intense, persistent pain in a tooth
- Prolonged sensitivity to heat or cold
- Darkening of the tooth
- Swelling or tenderness in the gums
- Deep decay that has reached the pulp

### Root canal treatment with precision technology

We use rotary nickel-titanium files and electronic apex location to ensure a complete, precise cleaning of the canal system, maximising the chances of long-term success.`,
    relatedTreatments: [
      { title: 'Apical surgery', description: 'Surgical intervention for complex endodontic cases.', href: '/en/treatments/apicoectomy-apical-surgery-arguelles-madrid/' },
      { title: 'Tooth extractions', description: 'When extraction is the only option.', href: '/en/treatments/tooth-extractions-arguelles-madrid/' },
      { title: 'Dental implants', description: 'The best alternative when a tooth cannot be saved.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
    ],
  },
  'odontopediatra-arguelles-madrid-espana': {
    title: 'Paediatric Dentist in Argüelles, Madrid',
    subtitle: 'Paediatric Dentistry',
    metaTitle: 'Paediatric Dentist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Paediatric dentistry in Argüelles, Madrid. Specialist dental care for children in a warm, fear-free environment. Debod Dental Clinic.',
    heroText:
      'Specialist, gentle dental care for the youngest smiles. Our paediatric dentistry team works to give children a positive relationship with the dentist from day one.',
    bodyMarkdown: `## Paediatric dentistry: oral health starts in childhood

At **Debod Dental Clinic**, in **Argüelles, Madrid**, paediatric dentistry is much more than treating baby teeth. It is about building habits, preventing future problems and creating a relationship of trust with the dentist from an early age.

### An environment designed for the youngest patients

Our paediatric dentistry team is specially trained to work with children of all ages. We use distraction techniques, age-appropriate communication and endless patience so that every visit is a positive experience.

### What do we treat?

- **Children's check-ups and cleanings**: Monitoring dental development from the first teeth.
- **Pit and fissure sealants**: Preventing decay in the permanent molars.
- **Paediatric fillings**: Treating decay with biocompatible, natural-looking materials.
- **Maxillary orthopaedics**: Early correction of bite and growth problems.
- **Oral hygiene education**: We teach children to look after their teeth effectively.

### When should you bring your child for the first time?

We recommend a first visit to the paediatric dentist around the first year of life, or when the first teeth appear. Early prevention is the best investment in your child's oral health.`,
    relatedTreatments: [
      { title: "Children's dental cleaning", description: 'Prophylaxis and a complete check-up for little ones.', href: '/en/treatments/childrens-dental-cleaning-arguelles-madrid/' },
      { title: 'Paediatric resin', description: 'Biocompatible fillings for baby teeth.', href: '/en/treatments/pediatric-dental-fillings-arguelles-madrid/' },
    ],
  },
  'ortodoncista-arguelles-madrid-espana': {
    title: 'Orthodontist in Argüelles, Madrid',
    subtitle: 'Orthodontics',
    metaTitle: 'Orthodontist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Invisible orthodontics and Invisalign specialists in Argüelles, Madrid. Aligned smiles for children and adults with the most advanced technology.',
    heroText:
      'High-precision orthodontics to achieve the smile you have always wanted. Specialising in Invisalign® and invisible orthodontics for children and adults.',
    bodyMarkdown: `## Invisible orthodontics: discretion and results

At **Debod Dental Clinic**, in **Argüelles, Madrid**, orthodontics has evolved. You no longer need to wear visible metal braces to achieve a perfectly aligned smile.

### Invisalign® in Argüelles

We are specialists in **Invisalign®**, the most advanced clear aligner system in the world. Invisalign aligners are:

- **Virtually invisible**: No one will notice you are in treatment.
- **Removable**: You can take them out to eat, brush your teeth and on special occasions.
- **Comfortable**: No brackets that rub or wires that bother you.
- **Predictable**: We visualise the final result before we begin.

### Dentofacial orthopaedics

For the most complex cases, especially in children and adolescents, dentofacial orthopaedics acts directly on the growth of the jawbones, correcting bite problems and the relationship between the dental arches.

### The benefits of orthodontics beyond aesthetics

Correct dental alignment is not just a matter of aesthetics. Well-aligned teeth are:

- Easier to clean → less decay and less periodontal disease
- Less prone to uneven wear
- Functional: a correct bite protects the temporomandibular joints

### Orthodontics for adults

It is never too late to achieve the smile you deserve. Today, more than 30% of our orthodontic patients are adults.`,
    relatedTreatments: [
      { title: 'Invisalign®', description: 'State-of-the-art clear aligners.', href: '/en/treatments/invisalign-clear-aligners-arguelles-madrid/' },
      { title: 'Retainers', description: 'Maintaining the results after treatment.', href: '/en/treatments/orthodontic-retainers-arguelles-madrid/' },
      { title: 'Mouthguards', description: 'Protection for athletes and patients with bruxism.', href: '/en/treatments/mouthguards-night-guards-arguelles-madrid/' },
    ],
  },
  'periodoncista-arguelles-madrid-espana': {
    title: 'Periodontist in Argüelles, Madrid',
    subtitle: 'Periodontics',
    metaTitle: 'Periodontist in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'Periodontics and gum health specialists in Argüelles, Madrid. Treatment of periodontitis and gingivitis. Debod Dental Clinic.',
    heroText:
      'The health of your gums is the foundation of your oral health. Specialising in periodontics, we treat and prevent gingivitis and periodontitis to protect your teeth in the long term.',
    bodyMarkdown: `## Periodontics: the foundation of your oral health

At **Debod Dental Clinic**, in **Argüelles, Madrid**, periodontics deals with the tissues that support the teeth: the gums, the alveolar bone and the periodontal ligament. Without a healthy periodontal foundation, any other dental treatment loses its footing.

### Periodontal disease: a silent problem

Periodontitis is the second most common cause of tooth loss, and many people are unaware they have it until the damage is significant. The warning signs are:

- Gums that bleed when brushing or spontaneously
- Reddened, inflamed or receding gums
- Loose teeth
- Persistent bad breath
- Root sensitivity

### Our periodontal treatments

- **Scaling and root planing**: Removal of bacterial plaque and tartar from the root surfaces.
- **Periodontal surgery**: For advanced cases that do not respond to conservative treatment.
- **Gum graft**: Restoration of receding gum tissue.
- **Gingivoplasty**: Reshaping of the gum contour.
- **Periodontal maintenance**: Regular check-ups to maintain the results.

### The link between periodontal health and your general health

Periodontitis is scientifically associated with cardiovascular disease, diabetes, complications during pregnancy and other systemic conditions. Looking after your gums means looking after your overall health.`,
    relatedTreatments: [
      { title: 'Scaling and root planing', description: 'Conservative treatment of periodontitis.', href: '/en/treatments/scaling-and-root-planing-arguelles-madrid/' },
      { title: 'Gum graft', description: 'Restoration of receding gum tissue.', href: '/en/treatments/gum-graft-arguelles-madrid/' },
      { title: 'Gingivoplasty', description: 'Reshaping of the gum contour for a harmonious smile.', href: '/en/treatments/gingivoplasty-arguelles-madrid/' },
    ],
  },
  'cirujano-oral-arguelles-madrid-espana': {
    title: 'Oral Surgeon in Argüelles, Madrid',
    subtitle: 'Oral Surgery',
    metaTitle: 'Oral Surgeon in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription:
      'High-precision oral surgery in Argüelles, Madrid. Wisdom teeth removal, implants and advanced surgical procedures. Debod Dental Clinic.',
    heroText:
      'Oral surgical procedures with maximum safety and precision. From complex extractions to apical surgery and bone regeneration, always with the aim of restoring your health and function.',
    bodyMarkdown: `## Precision oral surgery in Argüelles, Madrid

At **Debod Dental Clinic**, in **Argüelles, Madrid**, oral surgery is performed to the highest standards of safety and precision. Our oral surgeons have extensive experience in both straightforward and complex procedures.

### What does oral surgery include?

- **Wisdom teeth removal**: A common procedure we carry out with complete safety, even in cases of partial or full impaction.
- **Apical surgery (apicoectomy)**: Surgical treatment of infections at the root apex.
- **Dental implants and guided surgery**: Implant placement with prior 3D planning.
- **Bone grafts**: Bone regeneration to prepare the ground for implants.
- **Gum grafts**: Correction of gingival recession.
- **Removal of impacted teeth**: Canines and other impacted teeth.

### Oral surgery with conscious sedation

For patients with dental anxiety, we offer the option of carrying out surgical procedures under conscious sedation, ensuring a calm, stress-free experience.

### Post-operative recovery

Our team provides you with detailed recovery instructions and is available to answer any questions during the post-operative period. Most patients return to their normal activity within 24-48 hours.`,
    relatedTreatments: [
      { title: 'Wisdom teeth removal', description: 'A safe procedure for problematic wisdom teeth.', href: '/en/treatments/wisdom-teeth-removal-arguelles-madrid/' },
      { title: 'Tooth extractions', description: 'Atraumatic extraction when necessary.', href: '/en/treatments/tooth-extractions-arguelles-madrid/' },
      { title: 'Apical surgery', description: 'Surgical treatment of periapical infections.', href: '/en/treatments/apicoectomy-apical-surgery-arguelles-madrid/' },
      { title: 'Alveolar bone graft', description: 'Bone regeneration for implants.', href: '/en/treatments/alveolar-bone-graft-arguelles-madrid/' },
    ],
  },
}

export default servicesEn
