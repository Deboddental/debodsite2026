// ── Dental-tourism landing pages (international / English-speaking patients) ───
// Re-sectorised from the Dr. Diente "Turismo Dental" concept (which targets
// Mexico City) to DEBOD in central Madrid, Spain. EN-only pages rendered by
// src/pages/DentalTourismPage.jsx at /en/<slug>/.
//
// HARD RULE: no fabricated prices and no unverifiable clinical claims. Every fact
// here is already true on the Debod site — 4.9★/350+ reviews, +15 years, in-house
// digital lab, 3D scanner/guided surgery, COEM-registered specialists, and the
// real NAP (C. de Ferraz 24, Argüelles · call +34 914 47 62 25 · WhatsApp
// +34 689 10 47 14). Pricing is handled qualitatively + "request a free quote".
//
// Pure ESM data (no asset/icon imports) so it stays Node-safe for routes.mjs.
// Icons are lucide-react names (strings) mapped to components in the page.

// ── Shared, Madrid-wide content (rendered on every tourism page) ──────────────

export const heroBullets = [
  { icon: 'Languages', text: 'Treated in English, start to finish' },
  { icon: 'Microscope', text: 'In-house digital lab & 3D technology' },
  { icon: 'ShieldCheck', text: 'EU-regulated care · COEM specialists' },
  { icon: 'Video', text: 'Free online video consultation' },
]

export const whyTravel = {
  eyebrow: 'Why Madrid',
  title: 'Why patients travel to Madrid for treatment',
  intro:
    'Private dental care in Spain is known for combining high quality with excellent value compared with the UK, Ireland and the US — without compromising on materials, technology or expertise. We believe in honest, transparent pricing: tell us about your case and we will send you a clear, itemised quote with no obligation.',
  points: [
    { icon: 'Wallet', title: 'Honest, transparent pricing', text: 'A clear, itemised quote up front — no hidden costs, with financing available.' },
    { icon: 'Clock', title: 'No long waiting lists', text: 'Appointments within days — not the months-long waits common on the NHS and elsewhere.' },
    { icon: 'Gem', title: 'Premium materials & in-house lab', text: 'Quality EU-regulated materials, with prostheses crafted in our own digital lab.' },
    { icon: 'Globe', title: 'A trip worth taking', text: 'Top-level dentistry in one of Europe’s most beautiful and best-connected capitals.' },
  ],
}

export const techCards = [
  { icon: 'ScanLine', title: '3D intraoral scanner', text: 'Digital impressions with no messy moulds — precise, comfortable and easy to share for your remote consultation.' },
  { icon: 'Building2', title: 'In-house digital lab', text: 'Our own Debod Dental Lab designs and crafts crowns, veneers and prostheses on site — fewer visits and full quality control.' },
  { icon: 'Target', title: '3D guided implant surgery', text: 'Implants planned virtually and placed through a surgical guide for millimetric precision and a faster recovery.' },
  { icon: 'Smile', title: 'Digital smile design', text: 'Preview and approve your new smile on screen before any treatment begins — no surprises.' },
]

// The "fears" / objection-handling framework, re-sectorised for Europe.
export const objections = [
  {
    icon: 'ShieldCheck',
    question: '“Is treatment abroad really safe?”',
    title: 'EU-regulated care, world-class standards',
    points: [
      'Spain is part of the EU — clinics, materials and sterilisation follow strict European health regulations.',
      'Your treatment is carried out by specialists registered with the COEM (Madrid Dental Association).',
      'Premium, internationally recognised implant systems and CE-marked materials.',
      'Sterilisation and infection-control protocols to European clinical standards.',
      'A 4.9★ rating from 350+ verified Google reviews.',
    ],
  },
  {
    icon: 'Languages',
    question: '“Will there be a language barrier?”',
    title: 'Everything explained in clear English',
    points: [
      'Our team treats international and expat patients in English every day.',
      'Your diagnosis, options and quote are explained clearly, with no jargon.',
      'We share your digital scans, plan and smile design so you can see exactly what is proposed.',
      'WhatsApp and email support before, during and after your visit.',
    ],
  },
  {
    icon: 'HeartHandshake',
    question: '“What about follow-up when I get home?”',
    title: 'Aftercare that travels with you',
    points: [
      'A clear aftercare plan and direct contact with the clinic by WhatsApp.',
      'Digital records of your treatment you can share with your dentist at home.',
      'Treatment staged around your travel dates wherever clinically possible.',
      'Our in-house lab shortens timelines, so more can be completed in fewer visits.',
    ],
  },
]

export const steps = [
  { n: 1, icon: 'MessageCircle', title: 'Tell us about your case', text: 'Send recent photos and any X-rays by WhatsApp or email. We review them and reply with first guidance.' },
  { n: 2, icon: 'Video', title: 'Free video consultation', text: 'Meet your dentist online. We discuss your goals, options and an estimated plan — with no obligation.' },
  { n: 3, icon: 'Plane', title: 'Plan your trip to Madrid', text: 'We help schedule treatment around your travel dates and advise how many days to allow.' },
  { n: 4, icon: 'Smile', title: 'Your treatment in Madrid', text: 'You are treated at our clinic in Argüelles, with crowns and prostheses made in our own lab.' },
]

export const madridExperience = {
  title: 'Treatment in the heart of Madrid',
  text: 'Combine first-class dental care with one of Europe’s great capitals. Our clinic sits in Argüelles, beside Plaza de España and the Temple of Debod, with metro Ventura Rodríguez (Line 3) at the door — minutes from museums, parks, hotels and the airport.',
  cards: [
    { icon: 'MapPin', title: 'Argüelles, central Madrid', text: 'C. de Ferraz, 24 · metro Ventura Rodríguez (L3)' },
    { icon: 'Plane', title: 'Madrid–Barajas airport', text: 'Direct flights from the UK, Ireland, Europe & the Americas' },
    { icon: 'Hotel', title: 'Stay nearby', text: 'Hotels & apartments for every budget within walking distance' },
    { icon: 'Star', title: '4.9★ on Google', text: 'Rated by 350+ verified patients' },
  ],
}

// ── Per-page landings (hub + 7 treatment pages) ───────────────────────────────
// navLabel / navDesc feed the "Dental Tourism" navbar dropdown.
// relatedServiceEnSlug links to the matching EN specialty page (root-level /en/).

export const tourismLandings = [
  // ── HUB ────────────────────────────────────────────────────────────────────
  {
    slug: 'dental-tourism-madrid',
    isHub: true,
    navLabel: 'Dental Tourism',
    navDesc: 'Dentistry for international patients',
    title: 'Dental Tourism in Madrid',
    heroEyebrow: 'For international & English-speaking patients',
    heroText:
      'Premium, English-speaking dental care in the heart of Madrid — implants, full-arch solutions, veneers and smile design, with a free video consultation and an in-house digital lab.',
    heroImage: '/Images/clinica/dsc00131.webp',
    metaTitle: 'Dental Tourism in Madrid — English-Speaking Clinic | Debod Dental Clinic',
    metaDescription:
      'Dental tourism in central Madrid for UK, Irish, European & international patients. Implants, All-on-4/6, veneers & smile design with an English-speaking team and in-house lab. Free video consultation.',
    esAlternate: '/servicios/',
    intro: `## Premium dental care in Madrid — explained in English

If you are considering travelling for dental treatment, **Debod Dental Clinic** makes it simple. We are a boutique clinic in **Argüelles, central Madrid**, where international and English-speaking patients are treated from start to finish in English — with **honest pricing, premium materials and our own in-house digital lab**.

From a single implant to a **full-arch rehabilitation (All-on-4 / All-on-6)**, porcelain veneers or a complete **smile makeover**, your treatment is planned digitally and crafted on site — so you spend fewer days in the chair and more enjoying the city.

### Why patients choose Debod
- 🗣️ **English-speaking team** — clear diagnosis, options and quote, no jargon.
- 🧭 **Digital dentistry** — 3D scanner, guided implant surgery and digital smile design.
- 🏭 **In-house lab (Debod Dental Lab)** — crowns, veneers and prostheses made on site.
- 📍 **Central location** in Argüelles, beside Plaza de España, with metro at the door.
- 💳 **Honest, transparent pricing** with financing available.

### How to start
It begins with a **free online video consultation**. Send us recent photos and any X-rays by **WhatsApp (+34 689 10 47 14)** or email **info@deboddentalclinic.com**, and we will review your case and reply with first guidance and an estimated plan — with no obligation.`,
    faqs: [
      { question: 'How much can I save with dental treatment in Madrid?', answer: 'Savings vary by case and by the prices you have been quoted at home, so we do not promise a fixed figure. Private care in Spain is known for strong value versus UK, Irish and US private fees, using premium materials and the same digital technology. Book a free video consultation and we will send a clear, itemised quote you can compare like-for-like — with no obligation.' },
      { question: 'Is dental treatment in Spain safe?', answer: 'Yes. Spain is part of the EU, so clinics, materials and sterilisation follow strict European health regulations. At Debod your treatment is carried out by specialists registered with the COEM (Madrid Dental Association), using internationally recognised implant systems, and we hold a 4.9★ rating from 350+ verified Google reviews.' },
      { question: 'Will I be treated in English?', answer: 'Absolutely. Our team treats international and expat patients in English every day, explaining your diagnosis, options and quote clearly so you can make an informed decision.' },
      { question: 'How do I get started from another country?', answer: 'Send us recent photos and any X-rays by WhatsApp (+34 689 10 47 14) or email (info@deboddentalclinic.com). We review your case, arrange a free online video consultation and give you an estimated plan and timeline before you travel.' },
      { question: 'How many days should I plan to stay in Madrid?', answer: 'It depends on the treatment. Some cosmetic work can be completed in a few days thanks to our in-house lab, while implants may need two trips to allow healing. We plan everything around your travel dates and tell you exactly what is realistic at your video consultation.' },
    ],
  },

  // ── DENTAL IMPLANTS ──────────────────────────────────────────────────────────
  {
    slug: 'dental-implants-madrid',
    navLabel: 'Dental Implants · Madrid',
    navDesc: 'Single & multiple implants',
    title: 'Dental Implants in Madrid',
    heroEyebrow: 'For international & English-speaking patients',
    heroText:
      'Replace missing teeth with dental implants planned digitally and placed with 3D guided surgery — by an English-speaking team in central Madrid.',
    heroImage: '/Images/clinica/dsc00238.webp',
    metaTitle: 'Dental Implants in Madrid (English-Speaking) — Debod Dental Clinic',
    metaDescription:
      'Dental implants in central Madrid with 3D guided surgery and an in-house lab. English-speaking implant dentist in Argüelles for international patients. Free quote. Book: +34 914 47 62 25.',
    esAlternate: '/dentista-de-implantes-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'dental-implants-dentist-arguelles-madrid',
    intro: `## Dental implants in Madrid, the digital way

A **dental implant** is the closest thing to a natural tooth: a titanium root that integrates with the bone (osseointegration) to support a crown, bridge or full prosthesis. At **Debod Dental Clinic** in **Argüelles, Madrid**, we plan every implant digitally and place it with **3D guided surgery** for millimetric precision and a more comfortable recovery.

Your crown is made in our **in-house lab (Debod Dental Lab)**, matching the colour and shape of your natural teeth for a result that looks and feels natural.

### Why choose Debod for your implants
- 🧭 **3D guided surgery** — planned virtually before we start, less invasive.
- 🦴 **Bone grafting** when needed, so more patients are candidates.
- 🏭 **In-house lab** for natural-looking crowns and shorter timelines.
- 🗣️ **English-speaking team** and transparent, honest treatment plans.
- 💳 **Financing** available, with a first diagnostic visit included.

Whether you are an expat in Madrid or travelling for treatment, we will tell you honestly what your case needs and what is realistic for your timeline.`,
    faqs: [
      { question: 'How much do dental implants cost in Madrid?', answer: 'The price depends on your case (number of implants, whether bone grafting is needed and the type of crown). We do not publish fixed prices, so book a free video consultation and we will send a clear, itemised quote you can compare like-for-like with fees at home — with no obligation.' },
      { question: 'Does getting a dental implant hurt?', answer: 'Implant placement is done under local anaesthesia and is usually more comfortable than patients expect. Mild discomfort for a few days afterwards is normal and easily managed with the guidance we provide.' },
      { question: 'How long does the whole implant treatment take?', answer: 'It varies by case, but several months usually pass between placing the implant and fitting the final crown, to allow osseointegration. Many travelling patients plan two visits to Madrid; at your video consultation we give you a personalised timeline.' },
      { question: 'Am I a candidate if I have lost bone?', answer: 'Often yes. When bone is insufficient, techniques such as alveolar bone grafting rebuild the volume needed to place the implant safely. We assess this with a 3D scan before treatment.' },
    ],
  },

  // ── ALL-ON-4 ──────────────────────────────────────────────────────────────────
  {
    slug: 'all-on-4-madrid',
    navLabel: 'All-on-4 · Madrid',
    navDesc: 'Full-arch fixed teeth on 4 implants',
    title: 'All-on-4 in Madrid',
    heroEyebrow: 'Full-arch implant solutions',
    heroText:
      'Fixed teeth on just four implants — a full-arch solution planned in 3D and crafted in our in-house lab, by an English-speaking team in central Madrid.',
    heroImage: '/Images/clinica/dsc00253.webp',
    metaTitle: 'All-on-4 Dental Implants in Madrid — Debod Dental Clinic',
    metaDescription:
      'All-on-4 full-arch dental implants in central Madrid for international patients. Fixed teeth on four implants, planned with 3D guided surgery and an in-house lab. Free quote and video consultation.',
    esAlternate: '/dentista-de-implantes-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'dental-implants-dentist-arguelles-madrid',
    intro: `## All-on-4 in Madrid — a fixed full arch on four implants

**All-on-4** replaces a full arch of missing or failing teeth with a fixed bridge supported by just **four implants**. For many patients it means **fixed teeth in a short timeframe**, often without extensive bone grafting — a life-changing alternative to a removable denture.

At **Debod Dental Clinic** in central Madrid, every All-on-4 case is **planned in 3D** and placed with **guided surgery** for precision and comfort. Your provisional and final teeth are crafted in our **in-house digital lab**, so timelines stay tight — ideal when you are travelling for treatment.

### Why choose Debod for All-on-4
- 🦷 **Fixed, natural-looking teeth** supported by four implants per arch.
- 🧭 **3D guided surgery** — planned virtually before we begin.
- 🏭 **In-house lab** for provisional and final prostheses, fewer visits.
- 🗣️ **English-speaking team** and a clear plan around your travel dates.
- 💳 **Transparent pricing** and financing available.

We will tell you honestly whether All-on-4, All-on-6 or another solution best fits your case — after a proper 3D assessment.`,
    faqs: [
      { question: 'How much does All-on-4 cost in Madrid?', answer: 'All-on-4 is quoted per arch and depends on your case and the materials chosen for the final bridge. Book a free video consultation and we will send an itemised, no-obligation quote you can weigh up against quotes from home.' },
      { question: 'Will I leave with teeth the same day?', answer: 'In many cases a fixed provisional bridge can be placed shortly after surgery, so you are not without teeth. The final prosthesis is fitted once healing is complete. We confirm what is possible for your case after a 3D assessment.' },
      { question: 'How long do I need to stay in Madrid for All-on-4?', answer: 'Most travelling patients plan two trips: one for surgery and the provisional bridge, and a second for the final prosthesis after healing. Our in-house lab keeps timelines efficient — we plan everything around your dates.' },
      { question: 'Is All-on-4 better than dentures?', answer: 'All-on-4 gives you fixed teeth that do not move, look natural and let you eat with confidence, unlike a removable denture. Whether it is right for you depends on your bone and overall case, which we assess with a 3D scan.' },
    ],
  },

  // ── ALL-ON-6 ──────────────────────────────────────────────────────────────────
  {
    slug: 'all-on-6-madrid',
    navLabel: 'All-on-6 · Madrid',
    navDesc: 'Full-arch on 6 implants — max stability',
    title: 'All-on-6 in Madrid',
    heroEyebrow: 'Full-arch implant solutions',
    heroText:
      'Maximum-stability full-arch teeth on six implants — planned in 3D and crafted in our in-house lab, by an English-speaking team in central Madrid.',
    heroImage: '/Images/clinica/dsc00259.webp',
    metaTitle: 'All-on-6 Dental Implants in Madrid — Debod Dental Clinic',
    metaDescription:
      'All-on-6 full-arch dental implants in central Madrid for international patients. Fixed teeth on six implants for maximum stability, planned with 3D guided surgery and an in-house lab. Free quote.',
    esAlternate: '/dentista-de-implantes-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'dental-implants-dentist-arguelles-madrid',
    intro: `## All-on-6 in Madrid — full-arch teeth on six implants

**All-on-6** restores a complete arch with a fixed bridge supported by **six implants**. The two extra implants spread the load and can offer **greater stability**, which is often ideal when bone volume allows and for patients who want the most robust full-arch solution.

At **Debod Dental Clinic** in central Madrid, your All-on-6 is **planned in 3D** and placed with **guided surgery**, with provisional and final teeth made in our **in-house digital lab** for tight, travel-friendly timelines.

### Why choose Debod for All-on-6
- 🦷 **Maximum stability** with six implants distributing the load per arch.
- 🧭 **3D guided surgery** for precise, less invasive placement.
- 🏭 **In-house lab** for provisional and final prostheses.
- 🗣️ **English-speaking team** and an honest, staged plan for travellers.
- 💳 **Transparent pricing** and financing available.

After a 3D assessment we will recommend honestly whether All-on-6, All-on-4 or another approach is best for your bone and your goals.`,
    faqs: [
      { question: 'What is the difference between All-on-4 and All-on-6?', answer: 'Both restore a full arch with fixed teeth. All-on-4 uses four implants; All-on-6 uses six, which can distribute the load more and offer greater stability when bone volume allows. The best option depends on your case, which we assess with a 3D scan.' },
      { question: 'How much does All-on-6 cost in Madrid?', answer: 'All-on-6 is quoted per arch and depends on your case and the final materials. Book a free video consultation for a clear, itemised, no-obligation quote you can compare directly with what you have been quoted elsewhere.' },
      { question: 'How long does All-on-6 take?', answer: 'Most travelling patients plan two trips: surgery with a provisional bridge, then the final prosthesis after healing. We plan the timeline around your travel dates and our in-house lab keeps it efficient.' },
      { question: 'Do I need a bone graft for All-on-6?', answer: 'Sometimes. Six implants need sufficient bone; where it is lacking we may recommend grafting or an alternative such as All-on-4. We confirm this with a 3D scan before any treatment.' },
    ],
  },

  // ── COSMETIC DENTISTRY ────────────────────────────────────────────────────────
  {
    slug: 'cosmetic-dentistry-madrid',
    navLabel: 'Cosmetic Dentistry · Madrid',
    navDesc: 'Veneers, smile design & crowns',
    title: 'Cosmetic Dentistry in Madrid',
    heroEyebrow: 'For international & English-speaking patients',
    heroText:
      'Veneers, smile design, whitening and natural-looking crowns — designed digitally and crafted in our in-house lab, by an English-speaking team in central Madrid.',
    heroImage: '/Images/clinica/dsc00147.webp',
    metaTitle: 'Cosmetic Dentistry in Madrid (English-Speaking) — Debod Dental Clinic',
    metaDescription:
      'Cosmetic dentistry in central Madrid for international patients: porcelain veneers, digital smile design, whitening and natural crowns. English-speaking team, in-house lab. Free quote and video consultation.',
    esAlternate: '/dentista-cosmetico-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'cosmetic-dentist-arguelles-madrid',
    intro: `## Cosmetic dentistry in Madrid — see your smile first

From **porcelain veneers** and **digital smile design** to **whitening** and natural-looking **crowns**, cosmetic dentistry at **Debod Dental Clinic** is built around one idea: you should be able to **preview and approve your new smile before we start**.

Based in **Argüelles, central Madrid**, we design every case digitally and craft your restorations in our **in-house lab (Debod Dental Lab)** — matching colour, shape and proportion to your face for a result that looks effortlessly natural.

### Why choose Debod for your smile
- 👀 **Digital smile design** — see the result first, then decide.
- 💎 **Porcelain veneers** that resist staining and keep their shine.
- 🏭 **In-house lab** for natural, made-to-measure results.
- 🗣️ **English-speaking team** and honest advice on what your smile really needs.
- 💳 **Financing** available, with transparent pricing.

Ideal for expats and visitors who want a premium, natural-looking smile in the heart of Madrid — often completed in just a few days.`,
    faqs: [
      { question: 'How much does cosmetic dentistry cost in Madrid?', answer: 'It depends on the treatment (veneers, whitening, crowns or a full smile makeover) and how many teeth are involved. Because every case is different, we do not publish fixed prices — book a free video consultation for a clear, itemised quote.' },
      { question: 'Can my smile makeover be done in one trip?', answer: 'Often yes. Because we design your smile digitally and craft restorations in our in-house lab, many cosmetic cases can be completed within a few days — ideal for visitors. We confirm the plan at your video consultation.' },
      { question: 'Will the results look natural?', answer: 'Yes. Every restoration is designed to match your face and crafted to measure in our lab, for a natural, harmonious result rather than an obvious “done” look.' },
      { question: 'Do you offer teeth whitening too?', answer: 'Yes. Whitening is a simple, conservative way to brighten your smile, and is often combined with a smile design. We will advise the best approach for your case in English.' },
    ],
  },

  // ── PORCELAIN VENEERS ─────────────────────────────────────────────────────────
  {
    slug: 'porcelain-veneers-madrid',
    navLabel: 'Porcelain Veneers · Madrid',
    navDesc: 'Premium porcelain veneers',
    title: 'Porcelain Veneers in Madrid',
    heroEyebrow: 'For international & English-speaking patients',
    heroText:
      'Premium porcelain veneers designed digitally and crafted in our in-house lab — preview your new smile before we begin, in central Madrid.',
    heroImage: '/Images/clinica/dsc00148.webp',
    metaTitle: 'Porcelain Veneers in Madrid (English-Speaking) — Debod Dental Clinic',
    metaDescription:
      'Porcelain veneers in central Madrid for international patients. Digital smile design, premium ceramics and an in-house lab. English-speaking cosmetic dentist in Argüelles. Free quote and video consultation.',
    esAlternate: '/tratamientos/carillas-de-porcelana-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'cosmetic-dentist-arguelles-madrid',
    intro: `## Porcelain veneers in Madrid — premium, natural, made to measure

**Porcelain veneers** are thin, custom ceramic shells that transform your smile by correcting colour, shape and alignment — with a minimal, conservative preparation of the tooth. At **Debod Dental Clinic** in **Argüelles, Madrid**, we start every case with a **digital smile design**, so you can preview and approve your new smile **before we touch a single tooth**.

Each veneer is crafted in our **in-house lab (Debod Dental Lab)** to look natural and match your face — and to keep full control of quality and timing.

### Why choose Debod for porcelain veneers
- 👀 **Digital smile design** — see the result first, then decide.
- 💎 **Premium porcelain** that resists staining and keeps its shine.
- 🪶 **Conservative preparation** — we preserve as much healthy tooth as possible.
- 🏭 **In-house lab** for natural, made-to-measure veneers.
- 🗣️ **English-speaking team** and honest advice, with financing available.

Ideal for expats and visitors who want a premium, natural-looking smile — often completed in just a few days in the heart of Madrid.`,
    faqs: [
      { question: 'How much do porcelain veneers cost in Madrid?', answer: 'The price depends on how many veneers you need and your case. Because results are designed digitally first, you know exactly what you are getting before starting — book a free video consultation for a clear, itemised quote you can compare like-for-like.' },
      { question: 'Do veneers look natural?', answer: 'Yes. Veneers are crafted to measure in our in-house lab, matching colour and shape to your face for a natural, harmonious result that is indistinguishable from natural teeth.' },
      { question: 'Will veneers damage my teeth?', answer: 'No. Porcelain veneers require only a minimal preparation of the enamel (around 0.5 mm). We work conservatively to preserve as much healthy tooth as possible.' },
      { question: 'How many visits do veneers take if I am travelling?', answer: 'Typically a few visits: the digital smile design and preparation, then fitting the final veneers. With our in-house lab we keep timelines short — tell us your dates and we will plan around them.' },
    ],
  },

  // ── VENEERS & SMILE DESIGN (smile makeover) ───────────────────────────────────
  {
    slug: 'veneers-smile-design-madrid',
    navLabel: 'Smile Makeover · Madrid',
    navDesc: 'Digital smile design & makeover',
    title: 'Smile Design & Makeover in Madrid',
    heroEyebrow: 'For international & English-speaking patients',
    heroText:
      'Transform your smile with a digital smile makeover — preview the result before we start, crafted in our in-house lab in central Madrid.',
    heroImage: '/Images/clinica/dsc00141.webp',
    metaTitle: 'Smile Design & Makeover in Madrid — Debod Dental Clinic',
    metaDescription:
      'Digital smile design and complete smile makeovers in central Madrid for international patients. Preview your smile first; veneers, whitening and crowns crafted in our in-house lab. Free quote.',
    esAlternate: '/tratamientos/carillas-de-porcelana-arguelles-madrid-espana/',
    relatedServiceEnSlug: 'cosmetic-dentist-arguelles-madrid',
    intro: `## Smile design & makeover in Madrid — preview before you decide

A **smile makeover** combines the right treatments — veneers, whitening, crowns or alignment — into one coordinated plan to transform your smile. At **Debod Dental Clinic** in **Argüelles, Madrid**, it all begins with a **digital smile design**: a screen preview of your future smile that you approve **before any treatment starts**.

Your restorations are crafted in our **in-house lab (Debod Dental Lab)**, designed to suit your face for a result that looks natural — not “done”.

### Why choose Debod for your smile makeover
- 👀 **Digital smile design** — visualise and approve your new smile first.
- 🎯 **One coordinated plan** combining the treatments your case needs.
- 🏭 **In-house lab** for natural, made-to-measure results and tight timelines.
- 🗣️ **English-speaking team** and honest, no-pressure advice.
- 💳 **Transparent pricing** with financing available.

Perfect for expats and visitors who want a confident, natural smile — often achieved in just a few days in the heart of Madrid.`,
    faqs: [
      { question: 'What is a digital smile design?', answer: 'It is a screen preview of your future smile, created from photos and scans, so you can see and approve the result before any treatment begins. It removes the guesswork and makes sure we are aligned on your goals.' },
      { question: 'How much does a smile makeover cost in Madrid?', answer: 'It depends on which treatments your makeover combines and how many teeth are involved. Book a free video consultation and we will send a clear, itemised quote with no obligation.' },
      { question: 'Can a smile makeover be done while I am visiting Madrid?', answer: 'Often yes. Thanks to digital design and our in-house lab, many makeovers can be completed within a few days. We confirm exactly what is feasible for your case and your dates at your video consultation.' },
      { question: 'Will my new smile look natural?', answer: 'Yes. We design every case to match your face and craft your restorations to measure, for a natural, harmonious result rather than an obvious one.' },
    ],
  },

  // ── ENGLISH-SPEAKING DENTIST ──────────────────────────────────────────────────
  {
    slug: 'english-speaking-dentist-madrid',
    navLabel: 'English-Speaking Dentist · Madrid',
    navDesc: 'Your dentist in English in Madrid',
    title: 'English-Speaking Dentist in Madrid',
    heroEyebrow: 'For expats & international patients',
    heroText:
      'A boutique dental clinic in the heart of Madrid where you are treated in English — implants, orthodontics, cosmetic dentistry and oral rehabilitation, with an in-house digital lab.',
    heroImage: '/Images/clinica/dsc00256.webp',
    metaTitle: 'English-Speaking Dentist in Madrid (Argüelles) — Debod Dental Clinic',
    metaDescription:
      'Looking for an English-speaking dentist in central Madrid? Debod Dental Clinic in Argüelles offers implants, Invisalign®, veneers and full oral rehabilitation. Book: +34 914 47 62 25.',
    esAlternate: '/servicios/',
    relatedServiceEnSlug: 'general-dentist-arguelles-madrid',
    intro: `## Your English-speaking dental clinic in Madrid

If you live in Madrid as an expat, or you are visiting and need a dentist, **Debod Dental Clinic** is the easy choice. We are based at **C. de Ferraz, 24, in Argüelles** — a few minutes from Plaza de España and the Temple of Debod — and our team treats international patients **in English**, with clear explanations and transparent pricing.

We are a boutique clinic specialised in **digital implantology, invisible orthodontics (Invisalign®), porcelain veneers and full oral rehabilitation**, with our own **in-house dental lab** (Debod Dental Lab) for faster, fully controlled treatments.

### Why international patients choose Debod
- 🗣️ **English-speaking team** and a calm, honest approach.
- 🦷 **Specialists by field**: implants, orthodontics, periodontics, aesthetics.
- 💻 **Digital dentistry**: 3D intraoral scanner and digital smile design (you see the result before we start).
- 📍 **Central location** in Argüelles, with metro Ventura Rodríguez (L3) at the door.
- 💳 **Financing available** and a first diagnostic visit included.

### How to book
Call us at **+34 914 47 62 25**, message us on WhatsApp at **+34 689 10 47 14**, or email **info@deboddentalclinic.com**. We will confirm your appointment and answer any questions before your visit.`,
    faqs: [
      { question: 'Do the dentists at Debod speak English?', answer: 'Yes. Our team treats international and expat patients in English, explaining your diagnosis, options and budget clearly so you can make an informed decision.' },
      { question: 'Where is the clinic located in Madrid?', answer: 'We are at C. de Ferraz, 24, in the Argüelles neighbourhood (28008 Madrid), a few minutes from Plaza de España and the Temple of Debod. The nearest metro is Ventura Rodríguez (Line 3).' },
      { question: 'Can you treat me during a short stay in Madrid?', answer: 'Yes. For visitors, we plan treatment around your dates where clinically possible, and our in-house lab helps shorten timelines for crowns, veneers and prostheses. Tell us your stay and we will advise what is feasible.' },
      { question: 'Is the first visit free?', answer: 'The first diagnostic visit is included: we assess your case, take the necessary scans or X-rays and explain your options with a clear, no-obligation quote.' },
    ],
  },
]

export const getTourismLanding = (slug) => tourismLandings.find((l) => l.slug === slug)
export const tourismSlugs = tourismLandings.map((l) => l.slug)
export default tourismLandings
