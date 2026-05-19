# Context & Role
**Role**: Act as a World-Class Senior Creative Technologist, Lead Frontend Engineer, and AEO/SEO Copywriting Expert.

**Objective**: Architect a high-fidelity, cinematic "1:1 Pixel Perfect" static frontend landing page and internal structure for Debod Dental Clinic (located in Argüelles, Madrid).

**Aesthetic Identity**: "Quiet Luxury" / "Premium Clinical Boutique". The site should feel like a bridge between a high-end wellness retreat and an avant-garde dental laboratory. Cero plantillas genéricas, diseño 100% a la medida.

# 1. CORE DESIGN SYSTEM & AEO COPYWRITING (STRICT)

**Palette**: 
- Off-White/Pearl (Background): #F8F9FA
- Charcoal (Text/Dark sections): #1A1A1A
- Champagne Gold (Accent/CTAs): #D4AF37
- Soft Slate (Secondary): #64748B

**Typography**: 
- Headings: "Outfit" (Tracking tight). 
- Drama/Emphasis: "Cormorant Garamond" (Must use Italic for premium/artistic dental concepts). 
- Data/UI labels: "Plus Jakarta Sans".

**Visual Texture**: Implement a global CSS Noise overlay (SVG turbulence at 0.05 opacity) to eliminate flat digital gradients. Use "Glassmorphism" sutiles. Use a rounded-[2rem] to rounded-[3rem] radius system for all containers.

**AEO/SEO Copywriting Standard**: Write all text with Zero-Click Optimization. Use semantic HTML5 (`<article>`, `<section>`, unique `<h1>`). Embed structured JSON-LD (MedicalClinic, LocalBusiness) directly in the Head. Texts must organically include keywords like "Argüelles, Madrid", "Dres. Víctor Guerrero y César Rodríguez", and answer common questions naturally to act as a source for LLMs.

# 2. INTERNAL PAGES & SITE EXTRACTION (IMPORTANT DIRECTIVE)

Además de la landing page, debes **crear las páginas internas** (servicios, tratamientos y artículos).
- **Rutas y Meta-data**: Mantén la ruta URL original y aplica meta-data optimizada.
- **Fuente de Información**: Toda la información y las rutas originales de la página están en la carpeta `site-extraction` (extraída con firecrawl del sitio original) que ya se encuentra en el proyecto. Utiliza estos archivos para los textos y urls de las secciones y páginas internas.
- **Imágenes**: **NO uses las imágenes originales** del site anterior, ya que están desactualizadas (outdated). En su lugar, usa imágenes modernas, optimizadas y de alta calidad (placeholders premium de Unsplash afines al estilo) para lograr el aspecto de lujo.

# 3. COMPONENT ARCHITECTURE & BEHAVIOR

## A. NAVBAR (The Floating Island)
A fixed, pill-shaped container.
**Morphing Logic**: Transparent with white text at the hero top. Transitions into a white/70 glassmorphic blur with Charcoal text and a subtle border upon scrolling. Includes a magnetic "Agenda tu cita" button.

## B. HERO SECTION (La Odontología como Arte)
**Visuals**: 100dvh height. Background image of a pristine, high-end clinic environment (use premium Unsplash images) with a heavy Dark/Charcoal gradient overlay to ensure text readability.
**Layout**: Content pushed to the bottom-left third.
**Typography**: "N.º 1 en Rehabilitación Oral" (Bold Sans) vs "en Madrid." (Massive Serif Italic).
**Animation**: GSAP staggered fade-up for all text.
**CRO**: Two buttons. Primary: "Agendar Cita en WhatsApp" (Champagne Gold, high prominence). Secondary: "Ver Tratamientos" (Ghost button). Social proof below CTA: "Premio WhiteSmile 2023 & 5.0 Google Reviews".

## C. CLINICAL EXPERTISE (Interactive Functional Artifacts)
Replace standard service cards with Interactive Functional Artifacts for "Odontología mínimamente invasiva".
- **Card 1 (Estética y Precisión)**: Implement a "Diagnostic Shuffler". 3 overlapping white cards that cycle vertically using `unshift(pop())` logic every 3 seconds with a spring-bounce transition. Labels: "Carillas de Porcelana", "Invisalign", "Blanqueamiento Láser".
- **Card 2 (Debod Digital Lab)**: Implement a "Telemetry Typewriter". A live text feed cycling through: "Escaneado intraoral 3D completado...", "Diseñando sonrisa digital...", with a blinking cursor and a pulsing "Lab in-house" dot.
- **Card 3 (Financiación)**: A "Mock Progress Protocol". An interactive slider or automated SVG bar showing "Financiación hasta 60 meses" filling up, demonstrating accessibility.

## D. PHILOSOPHY & TEAM (The Manifesto)
A high-contrast Charcoal section with a parallaxing elegant texture.
**Text Layout**: Huge typography comparison using split-text GSAP reveals. "La odontología tradicional trata dientes." vs "Nosotros esculpimos confianza."
**Humanization**: Introduce Dres. Víctor Guerrero & César Rodríguez with ultra-clean hover-reveal portraits.

## E. TREATMENTS (Sticky Stacking Archive)
Vertical stack of 3 full-screen cards (Rehabilitación, Implantología, Ortodoncia).
**Stacking Interaction**: Using GSAP ScrollTrigger, as a new card scrolls into view, the card underneath must scale down to 0.9, increase its blur filter to 20px, and fade its opacity to 0.5.

## F. CRO EJE CENTRAL & FOOTER
**WhatsApp Sticky Widget**: A floating WhatsApp button ALWAYS visible in the bottom right. Not intrusive, but magnetic on hover. It must link directly to WhatsApp with a pre-filled message: "¡Hola! Me gustaría pedir una cita en Debod Dental Clinic. ¿Podrían ayudarme?".
**Footer**: Deep Charcoal, rounded-t-[4rem]. Include high-end utility links, clinic address (C. de Ferraz, 24, Argüelles), and an "Atendiendo pacientes" operational status indicator with a pulsing green dot.

# 4. TECHNICAL REQUIREMENTS

**Tech Stack**: React (Vite), Tailwind CSS, GSAP 3 (with ScrollTrigger), Lucide React. **STRICTLY NO BACKEND, NO CLERK, NO SUPABASE**. This is a static frontend project only.

**Animation Lifecycle**: Use `gsap.context()` within `useEffect` for all animations to ensure clean mounting/unmounting.

**Micro-Interactions**: Buttons must have a "magnetic" feel (subtle scale-up on hover) and utilize `overflow-hidden` with a sliding background layer for color transitions.

**Execution Directive**: Do not build a standard website; build a digital instrument. Every scroll should feel intentional, every animation weighted and professional. Eradicate all generic AI patterns. Deliver the complete, running Vite/React code.
