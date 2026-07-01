// ── Treatment Pages — English content ─────────────────────────
// Keys are the EXACT Spanish slugs (from src/data/treatments.js).
// Merged onto the ES records at runtime via mergeEn() (see src/data/treatments.js).
// EN pages live at /en/treatments/<treatmentSlugEn[esSlug]>/.
//
// reviewStatus: 'pending-human' on every record — clinical (YMYL) content
// must be reviewed by a human before publication.

export const treatmentsEn = {
  // ── Implantology ────────────────────────────────────────────
  'implantes-dentales-arguelles-madrid-espana': {
    title: 'Dental Implants in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Dental Implants in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Titanium dental implants with 3D planning in Argüelles, Madrid. Natural, long-lasting results. First diagnostic visit included.',
    heroText: 'Dental implants are the solution closest to a natural tooth. With prior digital planning we guarantee precise, safe and long-lasting results.',
    bodyMarkdown: `## What are dental implants?

A dental implant is an artificial titanium root that is placed in the lower or upper jawbone to replace the root of a lost tooth. A dental crown is then placed on top of this implant, faithfully reproducing the appearance and function of the natural tooth.

### Before treatment

Before placing the implant we carry out a complete study:

- **CBCT scan** (cone beam computed tomography) to assess the volume and quality of the available bone.
- **Virtual surgical planning** with specialised software.
- **Assessment of periodontal health** to make sure the gums are healthy.

If there is not enough bone, we can perform a **bone graft** beforehand to create the optimal conditions.

### The placement process

1. Local anaesthetic (the procedure is painless).
2. Placement of the implant in the bone.
3. Osseointegration period: 3–6 months for the bone to fuse with the titanium.
4. Placement of the abutment and the final crown.

### Post-operative care

The first few days are essential:

- Apply cold to the area during the first 24 hours.
- Soft diet for the first few days.
- Medication prescribed by the specialist.
- Do not smoke during the healing period.

With the right care, a dental implant can last **a lifetime**.`,
    benefits: [
      { title: 'Natural result', description: 'Appearance and function identical to a real tooth.' },
      { title: 'Permanent', description: 'With proper care, they last a lifetime.' },
      { title: 'Preserves bone', description: 'Prevents the bone resorption that follows tooth loss.' },
    ],
    relatedTreatments: [
      { title: 'Guided implant surgery', description: 'Maximum precision with a custom surgical guide.', href: '/en/treatments/guided-implant-surgery-arguelles-madrid/' },
      { title: 'Implant crown', description: 'The final aesthetic restoration of the implant.', href: '/en/treatments/implant-crown-arguelles-madrid/' },
      { title: 'Alveolar bone graft', description: 'Bone regeneration when there is not enough bone.', href: '/en/treatments/alveolar-bone-graft-arguelles-madrid/' },
      { title: 'Implant maintenance', description: 'Regular check-ups to preserve the implant.', href: '/en/treatments/implant-maintenance-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'cirugia-guiada-de-implantes-dentales-arguelles-madrid': {
    title: 'Guided Implant Surgery in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Guided Implant Surgery in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Guided dental implant surgery in Argüelles, Madrid. Millimetre precision with 3D digital planning. Debod Dental Clinic.',
    heroText: 'Guided surgery represents the evolution of implant dentistry. A custom surgical guide, designed from your 3D scan, ensures that each implant is placed exactly where it was planned.',
    bodyMarkdown: `## Guided surgery: implant dentistry with millimetre precision

**Guided implant surgery** is the most advanced protocol in dental implant dentistry. It combines the 3D scan (CBCT), surgical planning software and a 3D-printed guide to ensure the implant is placed exactly where it was virtually planned.

### Advantages over conventional surgery

- **Less invasive**: In many cases, it allows minimally invasive surgery without the need to raise tissue flaps.
- **Greater precision**: The implant is placed in the exact position, angle and depth of the surgical plan.
- **Less chair time**: Surgery is faster thanks to prior planning.
- **Faster recovery**: Less tissue trauma means less swelling and post-operative pain.
- **Better aesthetic result**: The optimal implant position makes it easier to create an aesthetic crown.

### The process step by step

1. **CBCT scan** of your mouth to obtain a precise 3D model of the bone.
2. **Virtual planning**: The specialist designs the position of each implant in the software.
3. **Manufacture of the surgical guide**: A guide that fits perfectly over your teeth is 3D-printed.
4. **Surgery**: The guide directs the drill and the implant with millimetre precision.
5. **Restoration**: The abutment and the final crown are placed.`,
    benefits: [
      { title: 'Millimetre precision', description: 'The 3D guide ensures the exact planned position.' },
      { title: 'Faster surgery', description: 'Less chair time thanks to prior planning.' },
      { title: 'Accelerated recovery', description: 'Less tissue trauma reduces swelling and pain.' },
    ],
    relatedTreatments: [
      { title: 'Dental implants', description: 'The standard implant with 3D planning.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
      { title: 'Alveolar bone graft', description: 'Bone regeneration for cases of resorption.', href: '/en/treatments/alveolar-bone-graft-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'corona-sobre-implante-arguelles-madrid-espana': {
    title: 'Implant Crown in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Implant Crown in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Implant crowns made in our in-house laboratory in Argüelles, Madrid. Maximum aesthetics and precision. Debod Dental Clinic.',
    heroText: 'The implant crown is the visible part of the dental implant system. Made in our in-house laboratory with high-strength ceramic, it faithfully reproduces the appearance of a natural tooth.',
    bodyMarkdown: `## The implant crown: the final piece of the puzzle

Once the titanium implant has integrated with the bone (the osseointegration process), the time comes for the final restoration: the **implant crown**.

### Made in our in-house laboratory

At **Debod Dental Clinic**, we have our own dental laboratory (Debod Dental Lab). This allows us to:

- **Total quality control**: We supervise every stage of manufacturing.
- **Maximum personalisation**: We adjust the colour, shape and size so that the crown is indistinguishable from your natural teeth.
- **Less waiting time**: No shipping to external laboratories.
- **Direct communication**: The dental technician works in close collaboration with the clinician.

### High-quality materials

We use lithium disilicate ceramic and monolithic zirconia, materials that combine:

- High mechanical strength to withstand chewing forces
- Excellent optical properties to reproduce the translucency of natural enamel
- Full biocompatibility with the soft tissues

### Maintenance of the implant crown

With care similar to that of natural teeth —correct brushing, dental floss or a water flosser and regular check-ups— an implant crown can last **decades**.`,
    benefits: [
      { title: 'In-house lab', description: 'Made in our laboratory with total quality control.' },
      { title: 'Natural appearance', description: 'Custom ceramic indistinguishable from your natural teeth.' },
      { title: 'Long durability', description: 'With proper care, decades of function.' },
    ],
    relatedTreatments: [
      { title: 'Dental implants', description: 'The foundation of the implant system.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
      { title: 'Implant maintenance', description: 'Check-ups to preserve the implant over the long term.', href: '/en/treatments/implant-maintenance-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'mantenimiento-de-implante-arguelles-madrid-espana': {
    title: 'Implant Maintenance in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Implant Maintenance in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Dental implant check-ups and maintenance in Argüelles, Madrid. Protect your long-term investment. Debod Dental Clinic.',
    heroText: 'A well-maintained dental implant lasts a lifetime. Regular check-ups and professional hygiene are the key to protecting your long-term investment.',
    bodyMarkdown: `## Why implant maintenance is essential

Dental implants have a success rate of over 95% at 10 years, but that success largely depends on **proper maintenance**. Peri-implantitis (infection around the implant) is the main cause of long-term failure and is completely preventable.

### Maintenance protocol at Debod Dental Clinic

We carry out regular check-ups that include:

- **Clinical assessment**: Checking the stability of the implant and the condition of the peri-implant tissues.
- **Control radiograph**: Verifying the bone level around the implant.
- **Professional hygiene**: Cleaning with implant-specific instruments (titanium curettes, ultrasonics with plastic tips).
- **Bite review**: Monitoring the chewing loads on the implant.

### Home hygiene

We teach you the correct technique to clean implants at home:
- Interdental brush
- Implant floss or oral irrigator
- Implant-specific brush head`,
    benefits: [
      { title: 'Prevents peri-implantitis', description: 'Peri-implant infection is the main cause of failure.' },
      { title: 'Ensures durability', description: 'With proper maintenance, the implant lasts decades.' },
      { title: 'Saves future costs', description: 'Prevention is better than treating a failed implant.' },
    ],
    relatedTreatments: [
      { title: 'Dental implants', description: 'The foundation of the implant system.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'injerto-oseo-alveolar-arguelles-madrid-espana': {
    title: 'Alveolar Bone Graft in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Alveolar Bone Graft in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Alveolar bone graft in Argüelles, Madrid. Bone regeneration to prepare for dental implant placement. Debod Dental Clinic.',
    heroText: 'When tooth loss leaves insufficient bone, an alveolar bone graft recreates the conditions needed to place implants successfully.',
    bodyMarkdown: `## Bone graft: preparing the ground for the implant

When a tooth is lost, the bone that supported it begins to resorb. In some cases, this resorption is so significant that there is not enough bone left to place an implant directly. The **alveolar bone graft** solves this problem.

### Types of bone graft

- **Autologous graft**: Uses the patient's own bone (usually from the chin or the jaw ramus). It is the gold standard in bone regeneration.
- **Allogeneic graft**: Bone from a tissue bank, previously sterilised and processed.
- **Bone substitute materials**: Synthetic biomaterials that act as a scaffold for new bone growth.

### When is a bone graft needed?

- Long-standing tooth loss with significant bone resorption
- Bone defects after complicated extractions
- Failure of a previous implant
- Advanced periodontal disease

### Healing process

After the graft, the new bone takes between **4 and 6 months** to consolidate before the implant can be placed. During this time we carry out regular check-ups to verify the correct integration of the graft.`,
    benefits: [
      { title: 'Makes implants possible', description: 'Creates the bone conditions needed for the implant.' },
      { title: 'Restores facial volume', description: 'Prevents collapse of the soft tissues.' },
      { title: 'Long-term result', description: 'The regenerated bone is permanent.' },
    ],
    relatedTreatments: [
      { title: 'Dental implants', description: 'The next step after bone regeneration.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
      { title: 'Guided implant surgery', description: 'Implant placement with maximum precision.', href: '/en/treatments/guided-implant-surgery-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── Aesthetics ──────────────────────────────────────────────
  'carillas-de-porcelana-arguelles-madrid-espana': {
    title: 'Porcelain Veneers in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Porcelain Veneers in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Custom porcelain veneers in Argüelles, Madrid. CEREC technology, digital design and in-house laboratory. Debod Dental Clinic.',
    heroText: 'Porcelain veneers are thin, high-quality, custom-made ceramic shells that transform your smile by correcting colour, shape and alignment in just a few visits.',
    bodyMarkdown: `## What are porcelain veneers?

Porcelain veneers in Argüelles, Madrid are a **restorative dental treatment** that enhances the appearance of your teeth and your smile. They consist of thin pieces of porcelain that are bonded to the surface of your teeth, custom-made to match the colour and shape of your natural teeth.

Porcelain veneers can solve many problems: chips, stubborn stains, irregular gaps between teeth and minor wear.

## Preparation for porcelain veneers

After confirming that you are a candidate, we reshape the surface of your teeth. We remove a small amount of enamel so that the veneers sit level with the rest of the teeth and do not protrude beyond the edge of your mouth.

This enamel removal is necessary for the veneers to look natural. It is minimal —just 0.5–0.7 mm— and is carried out completely painlessly.

## The fabrication process: CEREC technology

We use advanced **CEREC** technology (Chairside Economical Restoration of Esthetic Ceramics) to create high-quality veneers that require fewer visits:

1. **3D digital scan** of your mouth to build a precise three-dimensional model.
2. **CAD design** of the veneers with computer-aided design tools.
3. **Milling in our in-house laboratory** to manufacture them on the same day.
4. **Customisation of shade and glaze** using various stains and ceramic characterisation techniques.

## What to expect after getting porcelain veneers?

With proper care, porcelain veneers can last **10 to 20 years**. Avoid biting hard foods or habits that could break them (chewing ice, biting your nails, using your teeth as tools).

You can brush and floss as normal. We do not recommend whitening toothpastes, as they are abrasive. If you suffer from **bruxism**, we recommend a custom-made night guard to minimise wear.

## How do they improve your oral health?

It is a mistake to think that veneers only have aesthetic benefits. If the enamel has deteriorated, it can cause toothache and sensitivity to cold and heat. Placing veneers reduces these symptoms and allows you to use all your teeth to chew and bite, ensuring there are no areas of excessive wear.

## What are the benefits?

### The veneers will look and feel natural

Customising porcelain veneers ensures they look and function like your own teeth. No one will be able to tell they are not your natural teeth.

### Porcelain veneers are low-maintenance

The non-porous porcelain material we use minimises staining even more than natural tooth enamel. You only need regular brushing and routine visits.

### Veneers are versatile

Thanks to our ability to shape and place the veneers, we can solve a variety of aesthetic problems with a single restorative procedure.`,
    benefits: [
      { title: '100% natural appearance', description: 'Customisation ensures they look like your own teeth.' },
      { title: 'Low maintenance', description: 'Non-porous porcelain resists stains better than enamel.' },
      { title: 'Versatile solution', description: 'Corrects colour, shape, size and small gaps in a single solution.' },
    ],
    relatedTreatments: [
      { title: 'Dental crowns', description: 'When the damage is more extensive and requires greater coverage.', href: '/en/treatments/dental-crowns-arguelles-madrid/' },
      { title: 'Vonlay', description: 'Ceramic restorations for intermediate cases.', href: '/en/treatments/vonlay-restorations-arguelles-madrid/' },
      { title: 'Invisalign®', description: 'Align first, then beautify.', href: '/en/treatments/invisalign-clear-aligners-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'invisalign-alineadores-transparentes-arguelles-madrid-espana': {
    title: 'Invisalign® in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Invisalign® in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Invisalign® in Argüelles, Madrid. Clear aligners for adults and teenagers. Invisible orthodontics specialists. Debod Dental Clinic.',
    heroText: 'Invisalign® is the most advanced invisible orthodontics system in the world. Clear, removable and virtually imperceptible aligners to achieve the smile you have always wanted.',
    bodyMarkdown: `## What is invisible orthodontics?

**Invisible orthodontics in Argüelles, Madrid** is one of our greatest competitive advantages. It is a very special process in which we create your perfect smile using custom clear aligners.

We recommend invisible orthodontics for patients with minor spacing issues or mild to moderate dental crowding. If you have severe orthodontic problems, such as extensive crowding or a major bite issue, you may need more extensive treatment from our orthodontist.

## Preparation: digital impressions and 3D printing

First we carry out an examination to confirm that you are a good candidate. We then use innovative technology:

- **Digital impressions**: High-quality scanners to produce a precise 3D model of your teeth.
- **3D printing**: We manufacture your aligners from the digital scan, which eliminates long waiting periods and multiple trips to the dentist.

## How to use your invisible orthodontics?

We fit you with several aligners. As your teeth move, you will need a new one that accommodates the changes. Most patients change to a new aligner **every week** during treatment.

It is important to wear your aligner **20 to 22 hours a day** for optimal results. You should only remove it to eat, brush your teeth and floss.

## What happens after treatment?

Most patients wear invisible orthodontics **between 6 and 24 months**, depending on the case. Once treatment is complete, you will wear a retainer to prevent the teeth from moving out of their new positions.

It is very important to wear the retainer 20 to 22 hours a day during the first 2 months after treatment, so that the bone can consolidate the teeth in their new positions. After that, it is worn only at night, for life.

## What are the benefits?

### You can remove it to eat and care for your teeth

One of the great advantages is that, although you must wear it most of the time, you can take it out to eat, brush and floss. You do not need to change your diet or your eating habits.

### Invisible orthodontics is very comfortable

Traditional metal braces rub and scrape the inside of the mouth. The **flexible plastic** we use for the aligners is comfortable and does not cut or irritate the mouth.

### They are virtually invisible

The aligner's clear plastic is almost imperceptible. No one will know you are undergoing treatment, and your aligners will not detract from your smile.`,
    benefits: [
      { title: 'Invisible and removable', description: 'Wear your treatment without anyone noticing.' },
      { title: 'No restrictions', description: 'Eat what you like: simply remove the aligner.' },
      { title: 'Predictable result', description: 'See your final smile in 3D before you begin.' },
    ],
    relatedTreatments: [
      { title: 'Retainers', description: 'Maintain the results once treatment is complete.', href: '/en/treatments/orthodontic-retainers-arguelles-madrid/' },
      { title: 'Porcelain veneers', description: 'After alignment, perfect the aesthetics of your smile.', href: '/en/treatments/porcelain-veneers-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'tratamientos-coronas-dentales-en-arguelles-madrid': {
    title: 'Dental Crowns in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Dental Crowns in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'High-quality ceramic dental crowns in Argüelles, Madrid. Made in our in-house laboratory. Debod Dental Clinic.',
    heroText: 'A dental crown completely covers the damaged tooth, restoring its size, shape, appearance and strength. Made from high-strength ceramic in our in-house laboratory.',
    bodyMarkdown: `## What is a dental crown?

A dental crown is a restoration that completely covers the damaged tooth, protecting what remains of its structure and restoring its aesthetic and chewing function. It is one of the most versatile restorations in dentistry.

### When is a crown needed?

- Fractured tooth or one with extensive decay
- After root canal treatment (endodontics)
- Tooth with severe wear
- Tooth with a very large filling that weakens the structure
- To improve the aesthetics of teeth with poor colour or shape

### CEREC fabrication process

We use the **CEREC** system to make crowns in our in-house laboratory:

1. **Digital scan** of the prepared tooth (no uncomfortable moulds).
2. **CAD design** of the crown on the computer.
3. **Milling** in high-strength ceramic (lithium disilicate or zirconia).
4. **Customisation** of the colour with stains and glazes.
5. **Final cementation** at the same visit or the next.

### Crown care

With the right care, a dental crown lasts between **10 and 20 years**:
- Correct brushing at the crown-gum margin.
- Use of dental floss around the crown.
- Avoid biting hard objects.
- If you have bruxism, use a night guard.`,
    benefits: [
      { title: 'Total tooth protection', description: 'Covers and protects all the remaining tooth structure.' },
      { title: 'High durability', description: 'With the right care, 10 to 20 years of service life.' },
      { title: 'Natural aesthetics', description: 'The ceramic faithfully reproduces the appearance of natural enamel.' },
    ],
    relatedTreatments: [
      { title: 'Porcelain veneers', description: 'For cases where only the front surface needs improvement.', href: '/en/treatments/porcelain-veneers-arguelles-madrid/' },
      { title: 'Implant crown', description: 'The crown that goes on a titanium implant.', href: '/en/treatments/implant-crown-arguelles-madrid/' },
      { title: 'Vonlay', description: 'An intermediate restoration between a filling and a crown.', href: '/en/treatments/vonlay-restorations-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'vonlay-arguelles-madrid-espana': {
    title: 'Vonlay in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Vonlay in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Vonlay restorations in Argüelles, Madrid. The minimally invasive alternative between a filling and a crown. Debod Dental Clinic.',
    heroText: 'The Vonlay is a ceramic restoration that combines the best of the inlay, the onlay and the veneer. Minimally invasive, aesthetically excellent and long-lasting.',
    bodyMarkdown: `## What is a Vonlay?

The **Vonlay** is an indirect ceramic restoration that covers the occlusal (chewing) surface, one or more cusps and the buccal (front) surface of the tooth. It is the midpoint between an onlay and a veneer: the ideal solution when the tooth has damage on both the biting surface and the visible surface.

### Advantages of the Vonlay

- **Minimally invasive**: Preserves more tooth structure than a full crown.
- **A single ceramic piece**: Integrates the occlusal and aesthetic restoration into one element.
- **High strength**: Lithium disilicate ceramic withstands chewing forces.
- **Superior aesthetics**: Mimics the translucency and shine of natural enamel.
- **Long durability**: With proper care, it can last 15–20 years.

### When is it the right option?

The Vonlay is ideal for:
- Posterior teeth with decay or fractures affecting the cusp and the visible surface
- Teeth with very large fillings that need to be replaced
- Cases where you want to improve aesthetics without preparing the tooth for a full crown`,
    benefits: [
      { title: 'Minimally invasive', description: 'Less tooth preparation than a conventional crown.' },
      { title: 'Ceramic strength', description: 'Withstands the chewing forces of the posterior teeth.' },
      { title: 'Integral aesthetics', description: 'Restores function and aesthetics in a single piece.' },
    ],
    relatedTreatments: [
      { title: 'Dental crowns', description: 'For cases with more extensive damage.', href: '/en/treatments/dental-crowns-arguelles-madrid/' },
      { title: 'Porcelain veneers', description: 'For purely aesthetic cases on the front surface.', href: '/en/treatments/porcelain-veneers-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── Periodontics ────────────────────────────────────────────
  'raspado-y-alisado-radicular-arguelles-madrid-espana': {
    title: 'Scaling and Root Planing in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Scaling and Root Planing in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Conservative periodontal treatment in Argüelles, Madrid. Scaling and root planing to treat periodontitis. Debod Dental Clinic.',
    heroText: 'Scaling and root planing is the first-line treatment for periodontitis. A deep clean below the gums that removes the bacteria causing periodontal disease.',
    bodyMarkdown: `## What is scaling and root planing?

**Scaling and root planing** (also known as curettage) is the most effective conservative periodontal treatment for periodontitis. It involves removing bacterial plaque, tartar and bacterial toxins from the root surfaces of the teeth, below the gum line.

### Why is it necessary?

In periodontal disease, bacteria colonise the space between the tooth and the gum (the periodontal pocket). These bacteria and their toxins progressively destroy the bone and the tissue that supports the tooth. Scaling and root planing interrupts this process.

### The procedure

1. **Local anaesthetic** of the area to be treated to ensure comfort.
2. **Subgingival scaling**: Removal of tartar and plaque from the root surfaces with curettes and ultrasonic instruments.
3. **Root planing**: Smoothing of the root surfaces to make it harder for bacteria to reattach.
4. **Antiseptic irrigation**: Disinfection of the periodontal pockets.

Treatment is generally divided into quadrants, treating one or two quadrants per session.

### Results and follow-up

After treatment, the gums recover a healthier appearance, bleeding is reduced and the depth of the pockets decreases. In the following weeks a periodontal re-evaluation is carried out to assess the response to treatment.`,
    benefits: [
      { title: 'Stops the disease', description: 'Interrupts the destruction of the bone and supporting tissues.' },
      { title: 'Non-invasive', description: 'Conservative treatment without the need for surgery in most cases.' },
      { title: 'Quick recovery', description: 'The patient can resume their activity the same day.' },
    ],
    relatedTreatments: [
      { title: 'Gum graft', description: 'For cases of associated gum recession.', href: '/en/treatments/gum-graft-arguelles-madrid/' },
      { title: 'Gingivoplasty', description: 'Reshaping of the gum contour.', href: '/en/treatments/gingivoplasty-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'injerto-de-encia-arguelles-madrid-espana': {
    title: 'Gum Graft in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Gum Graft in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Gum graft to treat gum recession in Argüelles, Madrid. Restore receding gums and protect exposed roots. Debod Dental Clinic.',
    heroText: 'A gum graft restores receding gum tissue, covering exposed roots and protecting the teeth from sensitivity and the risk of root decay.',
    bodyMarkdown: `## What is gum recession and how is it treated?

**Gum recession** occurs when the gum recedes and exposes the root of the tooth. It can cause sensitivity, increase the risk of root decay and compromise the aesthetics of the smile.

The **gum graft** is the most effective treatment to correct gum recession.

### Types of gum graft

- **Subepithelial connective tissue graft**: The most widely used. Tissue is taken from the palate and placed in the area of recession.
- **Free gingival graft**: A patch of keratinised gum is taken from the palate.
- **Dermal substitute graft (AlloDerm®)**: A material of biological origin that avoids a second surgical site on the palate.

### Expected results

The gum graft achieves:
- Total or partial coverage of the exposed roots
- Reduction of tooth sensitivity
- Prevention of root decay
- Aesthetic improvement of the gum line

### Recovery

Complete healing takes between 4 and 8 weeks. During the first few weeks a soft diet is recommended and you should avoid brushing the treated area directly.`,
    benefits: [
      { title: 'Covers exposed roots', description: 'Protects the roots and reduces sensitivity.' },
      { title: 'Prevents root decay', description: 'A covered root is less vulnerable to decay.' },
      { title: 'Aesthetic improvement', description: 'Restores a more harmonious gum contour.' },
    ],
    relatedTreatments: [
      { title: 'Scaling and root planing', description: 'Treatment of the underlying periodontal disease.', href: '/en/treatments/scaling-and-root-planing-arguelles-madrid/' },
      { title: 'Gingivoplasty', description: 'Reshaping of the gum contour.', href: '/en/treatments/gingivoplasty-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'gingivoplastia-arguelles-madrid-espana': {
    title: 'Gingivoplasty in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Gingivoplasty in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Gingivoplasty to reshape the gums in Argüelles, Madrid. Correction of a gummy smile and the gum contour. Debod Dental Clinic.',
    heroText: 'Gingivoplasty reshapes the gum contour to achieve a more balanced and harmonious smile. A minimal procedure with maximum visual impact.',
    bodyMarkdown: `## Gingivoplasty: designing the gum contour

**Gingivoplasty** is the surgical procedure that reshapes the gum tissue to improve the aesthetics of the smile. It is used both to correct a gummy smile (showing too much gum) and to even out an irregular gum line.

### When is it recommended?

- **Gummy smile**: The gum covers too much of the teeth, making them look small.
- **Irregular gum line**: A gum that does not follow a symmetrical contour affects the visual balance of the smile.
- **Post-orthodontics**: After orthodontic treatment, the gum contour sometimes needs adjustment.

### The procedure

Gingivoplasty is performed under local anaesthetic and uses a scalpel or dental laser to reshape the gum tissue with precision. It is a quick procedure (30–60 minutes) with recovery in a few days.

### Relationship with crown lengthening

Gingivoplasty is closely related to **crown lengthening**: when gum is removed to expose more tooth surface, the teeth are made to look longer and more proportionate.`,
    benefits: [
      { title: 'Immediate visual improvement', description: 'A more symmetrical gum line transforms the smile.' },
      { title: 'Quick procedure', description: 'Performed in 30–60 minutes under local anaesthetic.' },
      { title: 'Quick recovery', description: 'Within a few days the patient can resume normal life.' },
    ],
    relatedTreatments: [
      { title: 'Gum graft', description: 'When the gum is insufficient rather than excessive.', href: '/en/treatments/gum-graft-arguelles-madrid/' },
      { title: 'Porcelain veneers', description: 'An aesthetic complement after gingivoplasty.', href: '/en/treatments/porcelain-veneers-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── Oral Surgery ────────────────────────────────────────────
  'extraccion-de-muelas-del-juicio-arguelles-madrid-espana': {
    title: 'Wisdom Teeth Removal in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Wisdom Teeth Removal in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Wisdom teeth removal in Argüelles, Madrid. A safe, painless procedure, even in cases of impaction. Debod Dental Clinic.',
    heroText: 'Wisdom teeth removal is one of the most common procedures in oral surgery. With local anaesthetic and the right technique, it is a safe process with minimal post-operative discomfort.',
    bodyMarkdown: `## When do wisdom teeth need to be removed?

Wisdom teeth or third molars are the last teeth to erupt, usually between the ages of 17 and 25. They do not always cause problems, but in many cases they:

- **Lack the space** to erupt correctly and become partially or fully impacted in the bone.
- Cause **pressure on the adjacent teeth**.
- Are **difficult to clean** and prone to decay.
- Cause **pericoronitis** (infection of the tissue around the tooth).

### The extraction procedure

1. **Prior radiographic study** to assess the position and relationship with nerves.
2. **Local anaesthetic** of the area (the procedure is completely painless).
3. **Extraction** with an atraumatic technique that preserves the bone and soft tissues.
4. **Closure with stitches** when necessary.

For impacted teeth, a small incision in the gum and/or sectioning of the tooth may be needed to make extraction easier.

### Post-operative care

The first few days are the most important:
- Apply cold to the outside (20 min cold, 20 min off).
- Soft, cold diet for the first few days.
- Do not smoke or drink alcohol during healing.
- Take the prescribed medication.

Most patients return to their normal activity within **24–48 hours**.`,
    benefits: [
      { title: 'Prevents complications', description: 'Avoids infections, crowding and damage to adjacent teeth.' },
      { title: 'Safe procedure', description: 'Atraumatic technique and prior radiographic study.' },
      { title: 'Quick recovery', description: 'Most patients return to activity within 24–48 hours.' },
    ],
    relatedTreatments: [
      { title: 'Tooth extractions', description: 'Removal of other teeth when necessary.', href: '/en/treatments/tooth-extractions-arguelles-madrid/' },
      { title: 'Dental implants', description: 'Replace the extracted tooth if necessary.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'extracciones-dentales-arguelles-madrid-espana': {
    title: 'Tooth Extractions in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Tooth Extractions in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Atraumatic tooth extractions in Argüelles, Madrid. Always the last option when the tooth cannot be saved. Debod Dental Clinic.',
    heroText: 'Tooth extraction is always our last option. When it is not possible to save the tooth, we perform the extraction with an atraumatic technique to preserve the bone and soft tissues for future rehabilitation.',
    bodyMarkdown: `## Tooth extraction: when there is no other option

At **Debod Dental Clinic**, our philosophy is to preserve natural teeth whenever possible. Tooth extraction is the last option when the tooth cannot be saved by root canal treatment, fillings or other conservative alternatives.

### When is extraction recommended?

- Very extensive decay that destroys most of the tooth crown
- Vertical root fracture
- Advanced periodontitis with severe mobility
- A tooth with no possibility of restoration
- Preparation for orthodontics (when there is severe crowding)

### Atraumatic technique

We use an atraumatic extraction technique that minimises trauma to the bone and soft tissues. This is especially important when an implant is planned, since preserving the socket makes the later surgery easier.

### Extraction with socket preservation

When a later implant is planned, we carry out **socket preservation**: we fill the socket with biomaterial to prevent bone resorption and prepare the ground for the implant.

### Tooth replacement options

After extraction, we always present the replacement options:
- **Dental implant**: The most durable and natural solution.
- **Fixed dental bridge**: An alternative without surgery.
- **Removable partial denture**: For complex cases.`,
    benefits: [
      { title: 'Atraumatic technique', description: 'Preserves the bone for future rehabilitation with an implant.' },
      { title: 'Painless', description: 'With the right anaesthetic, the procedure is completely comfortable.' },
      { title: 'Comprehensive planning', description: 'We always plan the replacement of the extracted tooth.' },
    ],
    relatedTreatments: [
      { title: 'Dental implants', description: 'The best solution to replace the extracted tooth.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
      { title: 'Alveolar bone graft', description: 'Bone preservation after extraction.', href: '/en/treatments/alveolar-bone-graft-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'cirugia-apical-arguelles-madrid-espana': {
    title: 'Apical Surgery in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Apical Surgery in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Apicoectomy or apical surgery in Argüelles, Madrid. Surgical treatment when root canal treatment is not enough. Debod Dental Clinic.',
    heroText: 'Apical surgery (apicoectomy) makes it possible to save teeth with persistent periapical infection that does not respond to conventional root canal treatment.',
    bodyMarkdown: `## What is apical surgery?

**Apical surgery** or apicoectomy is a minor surgical procedure that involves accessing the apex (tip) of the tooth root through the gum to remove the infected tissue and seal the end of the root.

### When is it indicated?

- Periapical infection that does not respond to conventional root canal treatment.
- A tooth with previous root canal treatment that develops an infection.
- A periapical cyst that does not resolve with conservative treatment.
- Root anatomy that prevents access to the canals from inside.

### The procedure step by step

1. **Local anaesthetic** of the area.
2. **Incision in the gum** to access the bone.
3. **Removal of bone** to expose the root apex.
4. **Resection of the apex** and removal of the infected tissue.
5. **Retrograde filling**: Sealing the end of the root with a biocompatible material (MTA).
6. **Closure with sutures** of the gum.

### Prognosis

Apical surgery has a long-term success rate of around 85–90%. It makes it possible to preserve the natural tooth and avoid extraction.`,
    benefits: [
      { title: 'Saves the natural tooth', description: 'An alternative to extraction when the root canal is not enough.' },
      { title: 'High success rate', description: 'Around 85–90% long-term success.' },
      { title: 'Quick procedure', description: 'Performed in a single session under local anaesthetic.' },
    ],
    relatedTreatments: [
      { title: 'Tooth extractions', description: 'If apical surgery is not viable.', href: '/en/treatments/tooth-extractions-arguelles-madrid/' },
      { title: 'Dental implants', description: 'If the tooth cannot be saved.', href: '/en/treatments/dental-implants-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── General ─────────────────────────────────────────────────
  'examenes-dentales-y-limpiezas-dentales-arguelles-madrid': {
    title: 'Dental Exams and Cleanings in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Dental Check-ups and Cleanings in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Professional dental check-ups and cleanings in Argüelles, Madrid. Prevention and early detection to keep your smile healthy. Debod Dental Clinic.',
    heroText: 'Regular dental check-ups and cleanings are the most cost-effective investment in your oral health. They prevent problems before they appear and keep your smile healthy and bright.',
    bodyMarkdown: `## The importance of regular check-ups

Regular dental check-ups, combined with professional cleanings, are the foundation of preventive dentistry. Most dental problems —decay, periodontal disease, oral lesions— have a much better prognosis when detected and treated at an early stage.

### What does our dental check-up include?

- **Complete clinical examination**: Assessment of all the teeth, the gums and the soft tissues.
- **Periodontal probing**: Measuring the depth of the pockets to detect periodontitis.
- **Review of existing restorations**: Assessment of the condition of fillings and crowns.
- **Oral cancer screening**: A systematic examination of the oral mucosa.
- **Diagnostic radiographs** when indicated.

### Professional dental cleaning (prophylaxis)

Professional cleaning removes the tartar and bacterial plaque that the brush cannot reach:

- Ultrasonics for supragingival tartar
- Curettes for interdental areas
- Polishing with prophylactic paste
- Personalised hygiene instructions

### How often?

We recommend a check-up every **6 months** for most patients. Higher-risk patients (smokers, diabetics, periodontal patients) may need more frequent visits.`,
    benefits: [
      { title: 'Active prevention', description: 'Detects and treats problems before they become complicated.' },
      { title: 'Saves time and money', description: 'A filling is much cheaper than a root canal or an implant.' },
      { title: 'A whiter smile', description: 'Professional cleaning removes stains and tartar.' },
    ],
    relatedTreatments: [
      { title: 'Deep dental cleaning', description: 'For cases with a greater build-up of subgingival tartar.', href: '/en/treatments/deep-dental-cleaning-arguelles-madrid/' },
      { title: 'Oral cancer screening', description: 'Included in every check-up at Debod Dental Clinic.', href: '/en/treatments/oral-cancer-screening-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'limpieza-dental-profunda-arguelles-madrid-espana': {
    title: 'Deep Dental Cleaning in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Deep Dental Cleaning in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Deep dental cleaning in Argüelles, Madrid. Removal of subgingival tartar to combat periodontitis. Debod Dental Clinic.',
    heroText: 'A deep dental cleaning goes beyond a conventional prophylaxis, removing tartar that has built up below the gums to treat and prevent periodontal disease.',
    bodyMarkdown: `## Deep dental cleaning: more than a conventional cleaning

A **deep dental cleaning** or subgingival scaling is a therapeutic procedure for patients with early or moderate periodontitis. Unlike a standard cleaning, it acts in the periodontal pockets, removing the tartar that has accumulated below the gum line.

### When is a deep cleaning needed?

- Frequent bleeding of the gums
- Reddened or inflamed gums
- Periodontal pockets deeper than 4 mm
- Subgingival tartar visible on radiographs

### Differences from a standard cleaning

| Standard Cleaning (prophylaxis) | Deep Cleaning (subgingival scaling) |
|---|---|
| Only above the gum | Above and below the gum |
| Preventive maintenance | Therapeutic treatment |
| No anaesthetic needed | With or without local anaesthetic |
| Every six months | Depending on periodontal progress |

### Process

It is generally carried out in two sessions, treating half of the mouth at each visit:
1. Optional local anaesthetic for greater comfort.
2. Scaling with ultrasonics and curettes.
3. Root planing to smooth the surfaces.
4. Antiseptic irrigation.`,
    benefits: [
      { title: 'Treats periodontitis', description: 'First-line treatment for periodontal disease.' },
      { title: 'Removes subgingival tartar', description: 'Reaches where the brush and a standard cleaning cannot.' },
      { title: 'Measurable results', description: 'Reduction in pocket depth and bleeding within a few weeks.' },
    ],
    relatedTreatments: [
      { title: 'Scaling and root planing', description: 'For cases of more advanced periodontitis.', href: '/en/treatments/scaling-and-root-planing-arguelles-madrid/' },
      { title: 'Dental exams and cleanings', description: 'Regular maintenance after treatment.', href: '/en/treatments/dental-exams-and-cleanings-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'deteccion-de-cancer-oral-arguelles-madrid-espana': {
    title: 'Oral Cancer Screening in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Oral Cancer Screening in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Early oral cancer screening in Argüelles, Madrid. A systematic examination included in every check-up. Debod Dental Clinic.',
    heroText: 'Oral cancer detected early has a survival rate of over 80%. At Debod Dental Clinic we carry out a systematic examination of the oral mucosa at every check-up.',
    bodyMarkdown: `## Why early detection of oral cancer is so important

**Oral cancer** is one of the cancers with the highest mortality, not because it is especially aggressive, but because it is often diagnosed at an advanced stage. Early detection radically changes the prognosis.

### Risk factors

- Tobacco use (including e-cigarettes)
- High alcohol consumption
- Human papillomavirus (HPV) infection
- Chronic sun exposure (lips)
- Previous premalignant lesions (leukoplakia, erythroplakia)

### What do we look for during the examination?

At every check-up we systematically examine:
- Lips (inside and outside)
- Gums
- Tongue (top, underside and lateral borders)
- Floor of the mouth
- Hard and soft palate
- Cheek mucosa
- Tonsils and oropharynx

### Warning signs

- An ulcer that does not heal within more than 2 weeks
- A persistent white or red patch
- A lump or thickening in the mucosa
- Difficulty swallowing or moving the tongue
- Swollen neck lymph nodes

If we detect a suspicious lesion, we refer you immediately to a maxillofacial surgery specialist for further study.`,
    benefits: [
      { title: 'Included in every check-up', description: 'At no extra cost at every routine visit.' },
      { title: 'Early detection saves lives', description: 'Early diagnosis: >80% survival at 5 years.' },
      { title: 'Systematic examination', description: 'A structured protocol covering the entire oral mucosa.' },
    ],
    relatedTreatments: [
      { title: 'Dental exams and cleanings', description: 'A complete check-up that includes oral screening.', href: '/en/treatments/dental-exams-and-cleanings-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'tratamiento-de-la-apnea-del-sueno-arguelles-madrid-espana': {
    title: 'Sleep Apnea Treatment in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Sleep Apnea Treatment in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Mandibular advancement devices for sleep apnea in Argüelles, Madrid. An alternative to CPAP. Debod Dental Clinic.',
    heroText: 'Mandibular advancement devices are an effective alternative to CPAP for the treatment of mild and moderate sleep apnea. Comfortable, discreet and custom-made.',
    bodyMarkdown: `## Sleep apnea and dentistry: an integrated approach

**Obstructive sleep apnea** is a disorder in which the airway is repeatedly obstructed during sleep, causing pauses in breathing. In addition to CPAP, dental treatment offers an effective alternative for mild and moderate cases.

### The mandibular advancement device (MAD)

The **mandibular advancement device** is a custom dental appliance worn during sleep. It works by slightly advancing the lower jaw and the tongue, which keeps the airway open and prevents obstructions.

### Who is it for?

- Mild or moderate sleep apnea
- Patients who cannot tolerate CPAP
- As a complement to CPAP in severe cases
- Simple snoring without significant apnea

### Fabrication process

1. Taking impressions or a digital scan of the mouth.
2. Determining the correct mandibular advancement position.
3. Custom fabrication in our in-house laboratory.
4. Adjustment and monitoring of effectiveness.

### Follow-up and adjustment

The MAD requires regular adjustments to maximise its effectiveness. We work in coordination with the patient's sleep physician to ensure integrated treatment.`,
    benefits: [
      { title: 'Alternative to CPAP', description: 'Comfortable and discreet for patients who cannot tolerate CPAP.' },
      { title: 'Custom-made', description: 'Personalised in our in-house laboratory.' },
      { title: 'Improves sleep quality', description: 'Reduces breathing pauses and snoring.' },
    ],
    relatedTreatments: [
      { title: 'Mouthguards', description: 'Similar devices for bruxism and sport.', href: '/en/treatments/mouthguards-night-guards-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'tratamientos-protectores-bucales-en-arguelles-madrid': {
    title: 'Mouthguards in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Mouthguards in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Custom mouthguards in Argüelles, Madrid. For sport, bruxism and sleep apnea. Debod Dental Clinic.',
    heroText: 'Custom mouthguards offer superior protection to generic ones, fitting your teeth perfectly for maximum comfort and effectiveness.',
    bodyMarkdown: `## Mouthguards: custom protection

**Custom mouthguards** are made from a mould of your teeth, guaranteeing a perfect fit, greater comfort and better protection than generic over-the-counter mouthguards.

### Types of mouthguard

#### Sports mouthguards
Recommended for contact sports (boxing, martial arts, rugby, hockey) and also for high-impact sports such as cycling or athletics. They protect the teeth, gums, lips and the temporomandibular joint.

#### Night guards (bruxism)
For patients who clench or grind their teeth at night. They distribute chewing forces and protect the tooth enamel from wear.

#### Mandibular advancement devices
For the treatment of mild and moderate sleep apnea and snoring.

### Advantages of a custom mouthguard

- **Perfect fit**: Does not move or fall out during sleep or sporting activity.
- **Greater protection**: Covers exactly the anatomy of your teeth.
- **Greater comfort**: Does not interfere with breathing or speech.
- **Greater durability**: Laboratory materials are superior to those of commercial options.`,
    benefits: [
      { title: 'Custom fit', description: 'Made exactly for your teeth.' },
      { title: 'Superior protection', description: 'More effective than over-the-counter mouthguards.' },
      { title: 'For every need', description: 'Sports, anti-bruxism or anti-snoring.' },
    ],
    relatedTreatments: [
      { title: 'Sleep apnea treatment', description: 'The advanced device for real apnea.', href: '/en/treatments/sleep-apnea-treatment-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── Paediatric Dentistry ────────────────────────────────────
  'limpieza-dental-infantil-arguelles-madrid-espana': {
    title: "Children's Dental Cleaning in Argüelles, Madrid",
    subtitle: 'TREATMENTS',
    metaTitle: "Children's Dental Cleaning in Argüelles, Madrid — Debod Dental Clinic",
    metaDescription: "Children's dental cleaning in Argüelles, Madrid. Check-ups and prophylaxis for children in a friendly environment. Debod Dental Clinic.",
    heroText: "Children's dental cleaning is the first line of defence against decay in the little ones. In a warm, fear-free environment, we make the trip to the dentist a positive experience.",
    bodyMarkdown: `## Children's dental cleaning: prevention from an early age

**Children's dental cleaning** is a preventive procedure that removes the plaque and tartar built up on children's teeth, significantly reducing the risk of decay.

### Why are children's cleanings important?

Baby teeth are just as important as permanent teeth. They are essential for:
- The child's chewing and nutrition.
- The correct development of speech.
- Maintaining the space for the permanent teeth.
- The child's self-esteem (a healthy smile is a happy smile).

### The children's cleaning process

1. **Clinical examination**: Review of all the teeth, gums and the bite.
2. **Selective radiographs** when indicated.
3. **Professional cleaning**: Removal of plaque and tartar with instruments adapted for children.
4. **Fluoride application**: Strengthening the enamel with topical fluoride.
5. **Pit and fissure sealants**: When recommended.
6. **Hygiene education**: We teach the child to brush correctly.

### How often?

We recommend visits every **6 months** from the eruption of the first tooth.`,
    benefits: [
      { title: 'Prevents decay', description: 'Regular cleaning removes plaque before it causes damage.' },
      { title: 'A positive experience', description: 'We build a relationship of trust with the dentist from an early age.' },
      { title: 'Development monitoring', description: 'We monitor the eruption and development of the bite.' },
    ],
    relatedTreatments: [
      { title: 'Paediatric dental fillings', description: 'Treatment of decay with biocompatible materials.', href: '/en/treatments/pediatric-dental-fillings-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  'resina-pediatrica-arguelles-madrid-espana': {
    title: 'Paediatric Dental Fillings in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Paediatric Dental Fillings in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Paediatric composite fillings in Argüelles, Madrid. Treatment of decay in baby teeth with biocompatible materials. Debod Dental Clinic.',
    heroText: 'Paediatric composite fillings are the first-choice treatment for decay in baby teeth. Biocompatible, aesthetic and strong, they preserve the tooth until its natural replacement.',
    bodyMarkdown: `## Paediatric fillings: the modern treatment for childhood decay

**Paediatric composite fillings** are restorative materials specially formulated for children's baby teeth. They are the modern alternative to mercury amalgams (no longer used in quality paediatric dentistry).

### Why treat baby teeth?

Many parents think it is not worth treating baby teeth because "they are going to fall out anyway". This belief is a mistake:

- Decay in baby teeth can cause **intense pain** that affects eating and sleep.
- Untreated decay can **infect the bud of the permanent tooth** underneath.
- Premature loss of baby teeth can cause **spacing problems** for the permanent ones.

### Advantages of paediatric composite fillings

- **Aesthetic**: A colour similar to the natural tooth, without the metallic appearance of amalgam.
- **Biocompatible**: No mercury or heavy metals.
- **Adhesive**: They bond chemically to the tooth, reinforcing its structure.
- **Quick**: In a single visit.

### The procedure in children

We adapt the procedure to make it as comfortable and quick as possible for the child. We use distraction techniques, adapted communication and, when necessary, nitrous oxide (laughing gas) to ensure a calm experience.`,
    benefits: [
      { title: 'Mercury-free', description: 'A biocompatible material that is safe for children.' },
      { title: 'In a single visit', description: "Quick treatment that does not exhaust the child's patience." },
      { title: 'Preserves the tooth', description: 'Keeps the baby tooth until its natural replacement.' },
    ],
    relatedTreatments: [
      { title: "Children's dental cleaning", description: 'Prevention so that new decay does not form.', href: '/en/treatments/childrens-dental-cleaning-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
  // ── Orthodontics ────────────────────────────────────────────
  'retenedores-arguelles-madrid-espana-2': {
    title: 'Retainers in Argüelles, Madrid',
    subtitle: 'TREATMENTS',
    metaTitle: 'Retainers in Argüelles, Madrid — Debod Dental Clinic',
    metaDescription: 'Custom orthodontic retainers in Argüelles, Madrid. Keep the results of your orthodontic treatment forever. Debod Dental Clinic.',
    heroText: 'Retainers are the final stage of orthodontic treatment. They are essential to maintain the position achieved and prevent relapse.',
    bodyMarkdown: `## Retainers: protecting your orthodontic investment

Once orthodontic treatment is finished, the teeth tend to want to return to their original position. This phenomenon is called **orthodontic relapse** and is completely preventable with the correct use of retainers.

### Types of retainer

#### Fixed or lingual retainer
A small wire that is bonded to the inner surface of the front teeth. It is permanent and the patient does not have to remember to put it in.

#### Removable Hawley retainer
The classic retainer with a wire and acrylic. It is worn at night or as directed by the specialist.

#### Clear retainer (Essix type)
Similar to an Invisalign aligner but with a purely retentive function. It is aesthetic and comfortable.

### How long do retainers need to be worn?

The honest answer is: **for life**, although less frequently as the years go by. The first few months are the most critical.

### Care of removable retainers

- Clean them with a brush and cold water (never hot, as they would deform).
- Keep them in their case when not in use.
- Do not wrap them in napkins (they get thrown away by accident).
- Bring them to every check-up so the specialist can verify their fit.`,
    benefits: [
      { title: 'Maintains the results', description: 'Without a retainer, the teeth tend to return to their position.' },
      { title: 'Several options', description: 'Fixed, removable or clear depending on each case.' },
      { title: 'Protected investment', description: 'The retainer is the guarantee of your orthodontic treatment.' },
    ],
    relatedTreatments: [
      { title: 'Invisalign®', description: 'The orthodontic treatment that retainers complete.', href: '/en/treatments/invisalign-clear-aligners-arguelles-madrid/' },
    ],
    reviewStatus: 'pending-human',
  },
}

export default treatmentsEn
