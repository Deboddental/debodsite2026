# Plan 008 — Auditoría total SEO + GEO y plan de mejoras

> Fecha: 2 de julio de 2026 · Sitio: https://deboddentalclinic.com · Repo: `debodsite2026`

## Estado de implementación (2 jul 2026)

- **Fase 1 — Quick wins críticos:** ✅ implementada y verificada (build verde). Excepción: el cambio de dominio primario www→apex requiere acción en el panel de Vercel (no es código).
- **Fase 2 — Schema y grafo de entidad:** ✅ implementada y verificada. Pendiente de dato/decisión: `sameAs` con perfiles reales (LinkedIn/YouTube/Doctoralia/Top Doctors), y AggregateRating/Review auto-referenciados (decisión de negocio).
- **Fase 3 — GEO/IAs:** ✅ implementada (llms.txt bilingüe + entidad consistente, llms-full.txt generado, robots Content-Signal + puntero, IndexNow key + script). Pendiente: alta en Bing Webmaster Tools (cuenta del cliente); pings IndexNow tras el despliegue.
- **Fase 4 — Core Web Vitals:** ✅ fuentes no bloqueantes, vídeo hero con poster/preload/renombrado, HSTS preload. Pendiente/decisión: og:images propias (fotos reales), enforcement de CSP (requiere allow-list de Elfsight/Maps/WhatsApp + testing).
- **Fase 5 — Arquitectura/interlinking:** ✅ clúster huérfano enlazado desde el footer (ubicaciones, barrios, dental-lab, tecnología, antes-después, citas), cross-links All-on-4↔All-on-6 + financiación. Pendiente (contenido): interlinking blog→dinero por post y diferenciación de canibalización ES/EN.
- **Fase 6 — Páginas nuevas:** 🚧 en curso — creada la landing de **Urgencias dentales** (ES + EN, con schema y FAQ). Pendiente: blanqueamiento, "cuánto cuesta un implante en Madrid", All-on-4 en español, comparativas.
- **Fase 7 — E-E-A-T y profundidad:** ⏳ pendiente (fuentes citadas, revisor médico visible en tratamientos, ampliar 9 posts thin) — requiere revisión clínica.
- **Fase 8 — Off-site:** ⏳ pendiente (acción de negocio: GBP, reseñas, directorios, Wikidata).

Nada desplegado aún: se despliega todo junto al cierre (decisión del cliente).

## Metodología

Auditoría multi-agente en 7 dimensiones (SEO técnico, datos estructurados, contenido E-E-A-T, GEO/visibilidad en IAs, plataformas de IA, SEO local, arquitectura), cada una contra el código fuente Y la web en producción. **Cada hallazgo pasó por un verificador adversarial independiente** que intentó refutarlo contra el repo y la web viva: de 78 hallazgos brutos, 4 fueron refutados y descartados. Un crítico de completitud añadió 8 oportunidades no cubiertas.

**Resultado: 74 hallazgos verificados + 8 oportunidades adicionales**, organizados en 8 fases ejecutables (F1–F4 código rápido, F5–F7 contenido, F8 negocio/off-site). Varios huecos fueron detectados por 2–3 auditores independientes sin conocerse entre sí — esos se marcan como "confirmación cruzada" y son los más fiables.

## Top 10 — por dónde empezar

1. **Invertir la redirección www→apex en Vercel (todas las señales apuntan a URLs que redirigen)**
2. **Quitar "resultados que duran toda la vida" del hero (violación YMYL en la página más vista)**
3. **Corregir teléfono y horario erróneos en llms.txt (NAP falso servido directamente a las IAs)**
4. **Desduplicar <title> y og:image en las 156 páginas**
5. **Arreglar MedicalProcedure: hoy declara TODOS los tratamientos como cirugía**
6. **Dar de alta Bing Webmaster Tools + IndexNow (sin Bing no hay ChatGPT search)**
7. **Enlazar el clúster local huérfano (ubicaciones + 4 barrios + citas sin ningún enlace entrante)**
8. **Interlinking blog→tratamientos (los 10 posts nuevos no tienen ni un enlace interno)**
9. **Crear la landing de urgencias dentales Madrid (máxima intención, cero cobertura)**
10. **Citar fuentes externas (SEPA, consejo de dentistas, PubMed) en el contenido médico**

---

## Fase 1 — Quick wins críticos (código, ~1 sesión)

Errores factuales y de señalización que hoy contradicen o diluyen todo lo demás. Todos de esfuerzo S salvo indicación. El primero (dominio) es la mayor palanca de toda la auditoría.

### F1.1 · Dominio primario invertido: el apex redirige 307 a www, pero canónicos, sitemap y hreflang apuntan al apex

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** Test en vivo: https://deboddentalclinic.com/ → 307 → https://www.deboddentalclinic.com/ (temporal, no 308); https://www.deboddentalclinic.com/nosotros/ sirve 200 con canonical=https://deboddentalclinic.com/nosotros/ (que a su vez redirige). BASE apex en scripts/gen-sitemap.mjs:11 y src/data/seo.js:8. Las 156 <loc> del sitemap y los 444 hreflang apuntan a URLs que redirigen. Cadena doble: apex/nosotros → 307 www/nosotros → 308 www/nosotros/.

**Recomendación:** En Vercel → Settings → Domains, marcar deboddentalclinic.com como dominio primario y redirigir www→apex con 308 permanente (hoy está al revés). No hace falta tocar código: todo el SEO ya usa el apex. Verificar después que https://deboddentalclinic.com/nosotros/ devuelve 200 directo.

**Impacto:** Consolida todas las señales en Google (canónico=URL servida, hreflang y sitemap sin redirecciones) y evita que GPTBot/ClaudeBot/PerplexityBot y los link-previews de ChatGPT sigan 307 temporales al visitar la URL canónica. Es el fix de mayor palanca de toda la auditoría.

**Archivos:** `scripts/gen-sitemap.mjs`, `src/data/seo.js`, `vercel.json`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *GEO / IAs*: Conflicto de host canónico: producción sirve en www pero TODAS las señales GEO apuntan al apex — En Vercel (Settings > Domains) marcar deboddentalclinic.com como dominio principal para que www redirija al apex (308), alineándolo con canonical/sitemap/schema/llms.txt. Alternativa (más trabajo): migrar BASE_URL a www …

### F1.2 · El hero de la home usa el absoluto clínico 'resultados que duran toda la vida' (viola las propias reglas YMYL)

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Plataformas IA

**Evidencia:** src/components/Hero.jsx:71 ('results that last a lifetime') y :74 ('resultados que duran toda la vida'); confirmado en producción en https://deboddentalclinic.com/ — el propio brief del cliente prohíbe 'dura toda la vida' (publicidad sanitaria española).

**Recomendación:** Reformular a 'resultados duraderos' / 'long-lasting results'. Revisar también src/i18n/content/treatments.en.js:965 ('for life') y services.en.js:119 ('can last a lifetime') y suavizarlos con condicionales ('con el cuidado adecuado, pueden durar muchos años').

**Impacto:** Confianza E-E-A-T que pesan todos los motores de IA al citar contenido YMYL sanitario (Google AIO, ChatGPT, Perplexity) y cumplimiento de la publicidad sanitaria regulada.

**Archivos:** `src/components/Hero.jsx`, `src/i18n/content/treatments.en.js`, `src/i18n/content/services.en.js`

### F1.3 · llms.txt publica NAP incorrecto: teléfono de llamada y horario no coinciden con la web ni con el schema

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** GEO / IAs

**Evidencia:** public/llms.txt:9 dice "Teléfono / WhatsApp: +34 689 10 47 14" pero la regla del proyecto (src/i18n/glossary.md:42) exige presentar +34 914 47 62 25 como número de llamada (así está en index.html:38 y Footer.jsx:171); public/llms.txt:11 dice horario "9:00–21:00" mientras schema (index.html opens 09:00/closes 20:00), Contacto.jsx:356 y Ubicaciones.jsx:99 dicen 9:00–20:00, y los directorios externos muestran 9:00–14:00/16:00–20:00

**Recomendación:** Corregir public/llms.txt: separar "Teléfono: +34 914 47 62 25" y "WhatsApp: +34 689 10 47 14", y poner el horario real. Verificar con la clínica el horario verdadero (¿jornada partida?) y unificarlo en llms.txt, schema, páginas y Google Business Profile — hoy existen 3 versiones distintas del horario en el ecosistema

**Impacto:** Un asistente (ChatGPT/Perplexity/Gemini) que lea llms.txt dará teléfono y hora de cierre erróneos al paciente; la inconsistencia NAP entre superficies debilita la confianza de entidad en local y AI Overviews

**Archivos:** `public/llms.txt`, `index.html`, `src/pages/Ubicaciones.jsx`, `src/pages/Contacto.jsx`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *SEO local*: llms.txt da como teléfono principal el móvil de WhatsApp, no el fijo del NAP — Corregir a 'Teléfono: +34 914 47 62 25 · WhatsApp: +34 689 10 47 14' y añadir sección de zonas con enlaces a /dentista-moncloa-madrid/, /dentista-chamberi-madrid/, /dentista-centro-madrid/, /dentista-plaza-espana-madrid/…

### F1.4 · <title> y og:image duplicados en el <head> de las ~156 páginas: la plantilla estática convive con los tags de Helmet

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** index.html:16 (<title> estático) e index.html:22 (og:image estático) permanecen tras el prerender: en producción /cirujano-oral-arguelles-madrid-espana/ tiene 2 <title> y 2 og:image, con la genérica og-image.jpg SIEMPRE primera (verificado también en home, /tratamientos/resina-pediatrica.../ y pares EN). prerender.mjs:91-99 serializa el DOM tal cual.

**Recomendación:** Eliminar de index.html el <title>, og:image y meta keywords estáticos (Helmet ya inyecta los suyos por página), o desduplicar en prerender.mjs antes del writeFileSync de la línea 99 (quitar tags sin data-rh cuando exista el equivalente de Helmet). Dejar en la plantilla solo tags globales que Helmet no gestione.

**Impacto:** Google deja de ver 2 títulos contradictorios por página (control del snippet en SERP); WhatsApp/Facebook/X y los previews de AI chats muestran la imagen específica de cada página en lugar de la genérica. Afecta a Google, ChatGPT y Perplexity en todas las páginas.

**Archivos:** `index.html`, `prerender.mjs`

### F1.5 · Entidad #clinic duplicada y contradictoria en /ubicaciones/ (dos definiciones del mismo @id con datos distintos)

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Datos estructurados

**Evidencia:** src/pages/Ubicaciones.jsx:12-45 redefine '@id': /#clinic con priceRange '€€', paymentAccepted 'Cash, Credit Card' y tipo ['Dentist','LocalBusiness'], mientras index.html (bloque global presente en TODAS las páginas) declara '€€€', 'Cash, Credit Card, Financing', ['MedicalClinic','LocalBusiness','Dentist'], aggregateRating, sameAs, hasMap y medicalSpecialty. En /ubicaciones/ conviven ambos nodos contradictorios.

**Recomendación:** Eliminar localBusinessSchema de Ubicaciones.jsx (el nodo global de index.html ya se sirve en esa página) o dejarlo reducido a una referencia { '@context': 'https://schema.org', '@id': 'https://deboddentalclinic.com/#clinic' }. Una única fuente de verdad para la entidad clínica.

**Impacto:** La resolución de entidades de las IAs (y el Knowledge Graph de Google) recibe hechos contradictorios sobre precios y tipo de negocio del MISMO @id. Unificar mejora la confianza de entidad en Google, ChatGPT y Perplexity, y el SEO local.

**Archivos:** `src/pages/Ubicaciones.jsx`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *SEO local*: Entidad Dentist/#clinic declarada dos veces con datos contradictorios (priceRange €€€ vs €€) — Eliminar el schema duplicado de Ubicaciones.jsx y sustituirlo por una referencia { '@id': '#clinic' } o derivar ambos de una única fuente en src/data/seo.js; unificar priceRange y paymentAccepted (la financiación existe:…

### F1.6 · El H1 de la home se extrae sin espacios: "Especialistas enRehabilitación Oralen Madrid."

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** src/components/Hero.jsx:57-65: spans display:block consecutivos sin espacio entre nodos de texto ('Especialistas en'+'Rehabilitación Oral'+'en Madrid.'). Extracción de texto plano del HTML vivo de https://deboddentalclinic.com/ devuelve el H1 concatenado, rompiendo la keyword principal ("Oralen").

**Recomendación:** Añadir un espacio final dentro de cada span ('Especialistas en ', 'Rehabilitación Oral ') — visualmente idéntico al ser bloques, pero la extracción queda correcta. Revisar el mismo patrón en otros headings multi-span (aplica también a la variante EN).

**Impacto:** Los extractores sin CSS (GPTBot, ClaudeBot, PerplexityBot y pipelines RAG) leen el H1 con la keyword limpia "Rehabilitación Oral en Madrid"; hoy el término principal llega corrupto a los índices de AI search.

**Archivos:** `src/components/Hero.jsx`

### F1.7 · Doble generador de sitemap (vite-plugin-sitemap sigue activo) y sitemap vivo sin <lastmod>

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** vite.config.js:3,14-19 mantiene vite-plugin-sitemap, que escribe un sitemap malo (incluye /404, URLs sin trailing slash que redirigen por trailingSlash:true, lastmod=fecha de build en todo) y gen-sitemap.mjs lo sobrescribe después (package.json build:prerender). El dist/ local actual contiene la versión MALA del plugin (dist/sitemap.xml, 1-jul 02:07): la carrera puede acabar mal. El sitemap vivo (el bueno, 156 URLs) tiene 0 <lastmod>.

**Recomendación:** Quitar vite-plugin-sitemap de vite.config.js (gen-sitemap.mjs es la única fuente de verdad) y añadir <lastmod> real por URL en scripts/gen-sitemap.mjs: los posts ya tienen fecha de última revisión y el resto puede usar el mtime del data file.

**Impacto:** Elimina el riesgo de desplegar un sitemap con /404 y 156 redirecciones; <lastmod> fiable acelera el recrawleo de posts actualizados en Google y Bing (Bing alimenta ChatGPT y Copilot).

**Archivos:** `vite.config.js`, `scripts/gen-sitemap.mjs`, `package.json`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Plataformas IA*: Sitemap sin <lastmod>: sin señal de frescura para Bing ni Google — Añadir <lastmod> por URL en gen-sitemap.mjs: para posts usar post.dateModified||publishDate de src/data/blog.js; para el resto derivar la fecha del último commit git del fichero de datos de cada ruta (git log -1 --format…

### F1.8 · Dos posts publican bajo la categoría 'uncategorized' en la URL

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** src/data/blog.js: limpieza-dental-profunda-en-arguelles-madrid y dolor-de-muelas-de-juicio-en-arguelles-madrid tienen category:'uncategorized', y la URL se construye como /blog/${category}/${slug}/ (src/data/seo.js), generando /blog/uncategorized/....

**Recomendación:** Recategorizarlos ('salud-dental' encaja en ambos) y añadir redirect 301 de las URLs /blog/uncategorized/... antiguas en vercel.json para no perder la indexación existente; regenerar sitemap.

**Impacto:** URLs semánticas y coherencia del cluster en Google; elimina una señal de dejadez editorial visible para quality raters y para los LLMs que leen la URL como contexto.

**Archivos:** `src/data/blog.js`, `src/data/seo.js`, `vercel.json`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Plataformas IA*: Categoría 'uncategorized' visible en URLs de producción — Reasignar ambos posts a una categoría real ('salud-dental' o 'servicios'), actualizar slugs.js y añadir redirects 301 en public/_redirects desde las URLs /blog/uncategorized/... antiguas.
- *Arquitectura*: Dos posts publican bajo la categoría 'uncategorized' en la URL — Recategorizar a 'servicios' y 'salud-dental' respectivamente, añadir redirects 301 en vercel.json de las URLs antiguas, y eliminar 'uncategorized'/'general' del mapa de categorías para que no vuelva a usarse.

### F1.9 · public/_redirects es un artefacto de Netlify sin efecto en Vercel (y peligroso si se migra)

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** public/_redirects contiene '/* /index.html 200' (fallback SPA de Netlify). El hosting es Vercel (vercel.json), que lo ignora y lo sirve públicamente en /_redirects. El 404 real ya funciona bien: /pagina-inexistente-xyz/ devuelve HTTP 404 con noindex.

**Recomendación:** Borrar public/_redirects. Si algún día se migrase a Netlify, esa regla convertiría todos los 404 en soft-404 con estado 200, destruyendo la gestión de errores actual.

**Impacto:** Higiene del deploy y eliminación de una mina para el rastreo futuro; sin cambio inmediato en rankings.

**Archivos:** `public/_redirects`

### F1.10 · Clave no estándar '_comment_aggregateRating' embebida en el JSON-LD de producción

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Plataformas IA

**Evidencia:** index.html:69 — la propiedad "_comment_aggregateRating" se sirve dentro del bloque application/ld+json de la home en producción; no es vocabulario schema.org y algunos parsers estrictos de LLM/validadores la marcan como ruido.

**Recomendación:** Mover ese aviso de sincronización a un comentario HTML (<!-- -->) fuera del bloque JSON-LD, manteniendo la nota de verificación contra el Google Business Profile.

**Impacto:** JSON-LD 100% limpio para los parsers de Gemini, Bing y validadores de datos estructurados; cero riesgo de que un parser estricto descarte el nodo con el aggregateRating 4.9/350.

**Archivos:** `index.html`

### F1.11 · Los enlaces a Google Maps apuntan a la dirección genérica, no a la ficha de empresa

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO local

**Evidencia:** src/components/Footer.jsx:189, src/pages/Contacto.jsx:364, index.html:82 (hasMap) y src/pages/Ubicaciones.jsx:145 usan maps.google.com/?q=C.+de+Ferraz,+24,+28008+Madrid; en Ferraz 24 hay al menos 3 negocios (papelería y clínica veterinaria comparten número, verificado en OSM/Nominatim), así que el clic abre un pin ambiguo sin las reseñas de la clínica

**Recomendación:** Sustituir en los 4 puntos por la URL de compartir de la ficha GBP (con place_id o cid de 'Debod Dental Clinic'); mantener output=embed para el iframe pero con q=Debod+Dental+Clinic+Ferraz+24+Madrid

**Impacto:** Refuerza la asociación web↔ficha GBP (señal de local pack) y mejora conversión: el usuario aterriza en la ficha con 4,9★ y botón de cómo llegar, no en un pin de calle compartido

**Archivos:** `src/components/Footer.jsx`, `src/pages/Contacto.jsx`, `index.html`, `src/pages/Ubicaciones.jsx`

---

## Fase 2 — Schema y grafo de entidad (lo que leen las IAs)

Los datos estructurados son la vía principal por la que Google, Gemini y los crawlers de IA entienden quién es Debod, qué hace y quién firma el contenido. Objetivo: un grafo único e interconectado por @id.

### F2.12 · MedicalProcedure declara TODOS los tratamientos como cirugía (procedureType hardcodeado) + status inválido + preparation con markdown crudo

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Datos estructurados

**Evidencia:** src/data/seo.js:94-98 — procedureType: 'SurgicalProcedure' y status: 'EventScheduled' fijos para los ~26 tratamientos; preparation: bodyMarkdown.substring(0,200). Verificado en vivo en https://deboddentalclinic.com/tratamientos/implantes-dentales-arguelles-madrid-espana/ (preparation = '## ¿Qué son los implantes dentales?\n\nUn implante...').

**Recomendación:** Añadir un campo procedureType por tratamiento en src/data/treatments.js ('NoninvasiveProcedure' para Invisalign, blanqueamiento, limpieza, carillas; 'SurgicalProcedure' solo para implantes/cirugías) y usarlo en treatmentPageSchema. Eliminar status: 'EventScheduled' (es un EventStatusType de eventos, no aplica a MedicalProcedure). Sustituir preparation por texto limpio específico o eliminarla — nunca markdown truncado.

**Impacto:** Riesgo YMYL directo: ChatGPT/Perplexity/AI Overviews leen que 'el blanqueamiento en Debod es un procedimiento quirúrgico'. Corregirlo da datos médicos veraces a todas las IAs y evita desinformación clínica atribuible a la clínica.

**Archivos:** `src/data/seo.js`, `src/data/treatments.js`

### F2.13 · Grafo desconectado: cada doctor tiene 3 identidades distintas y el author del blog no tiene @id

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Datos estructurados

**Evidencia:** index.html define a los doctores como @id '.../equipo/dr-cesar-rodriguez/#person'; doctorProfileSchema (src/data/seo.js:303-304) usa @id '.../equipo/dr-cesar-rodriguez/' (sin #person); y blogPostSchema (src/data/seo.js:248-257) crea un Person inline SIN @id. Verificado en vivo: el author de /blog/salud-dental/aftas-bucales-causas-y-tratamiento/ es un nodo suelto (id=NONE). Además publisher re-declara '@type': 'Organization' sobre el @id #clinic (seo.js:277-282), en conflicto con MedicalClinic.

**Recomendación:** Unificar el @id canónico `${BASE_URL}/equipo/${slug}/#person` en los tres sitios. En blogPostSchema, author/reviewedBy deben incluir ese @id (manteniendo name/jobTitle/identifier para redundancia), y publisher debe ser solo { '@id': '.../#clinic' } sin re-tipar.

**Impacto:** Es la interconexión nº1 del grafo E-E-A-T: las IAs podrán verificar que el autor de cada post ES el mismo Physician colegiado del equipo y de la entidad clínica. Beneficia a Google (E-E-A-T YMYL), ChatGPT y Perplexity en consultas de salud dental.

**Archivos:** `src/data/seo.js`, `index.html`

### F2.14 · Perfiles Physician sin medicalSpecialty, sin memberOf (COEM) y con identifier inconsistente

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Datos estructurados

**Evidencia:** src/data/seo.js:296-321 (doctorProfileSchema): identifier como string plano 'Colegiado Nº X' (línea 309) mientras el blog usa PropertyValue con propertyID 'Nº Colegiado (COEM)' (línea 255); no hay medicalSpecialty ni memberOf. Los nodos Person de index.html tampoco tienen image, identifier ni sameAs pese a que team.js contiene colegiadoNum y photoUrl.

**Recomendación:** En doctorProfileSchema y en los Person de index.html: identifier como PropertyValue (formato único), medicalSpecialty (p. ej. 'Orthodontics' para el Dr. Guerrero, 'Prosthodontics' para el Dr. Rodríguez), memberOf: { '@type': 'Organization', name: 'Colegio Oficial de Odontólogos y Estomatólogos de la I Región (COEM)', url: 'https://coem.org.es' }, image (ya hay fotos reales en /Images/Equipo/), y sameAs a LinkedIn/Doctoralia de cada doctor si existen.

**Impacto:** Convierte el nº de colegiado (ya visible en texto) en dato estructurado verificable: máxima señal E-E-A-T para contenido YMYL en Google y para la verificación de expertos que hacen ChatGPT y Perplexity al citar consejos médicos.

**Archivos:** `src/data/seo.js`, `index.html`, `src/data/team.js`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Contenido E-E-A-T*: Schema Person de doctores sin sameAs, alumniOf ni medicalSpecialty; sameAs de la clínica incompleto — En seo.js, enriquecer Person con sameAs (LinkedIn/Doctoralia de cada doctor si existen), alumniOf (UCM — ya está en los bioMarkdown de team.js) y knowsAbout/medicalSpecialty por especialidad. En index.html, ampliar sameA…

### F2.15 · sameAs del schema omite 4 perfiles verificados: LinkedIn, YouTube, Doctoralia y Top Doctors

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** GEO / IAs

**Evidencia:** index.html:78-81 solo lista Instagram y Facebook; existen y están indexados: es.linkedin.com/company/debod-dental-clinic, youtube.com/@deboddental7181, doctoralia.es/clinicas/debod-dental-clinic y topdoctors.es/centro/debod-dental-clinic (más los perfiles de ambos doctores en Top Doctors)

**Recomendación:** Añadir las 4 URLs al array sameAs del nodo #clinic en index.html, y en el schema Person de cada doctor (src/data/seo.js, doctorSchema) añadir sameAs con su perfil de Top Doctors (topdoctors.es/doctor/victor-guerrero-alvarado/ verificado). Verificar antes la URL exacta de cada perfil

**Impacto:** Consolida el knowledge graph de la entidad: los LLMs y Google reconcilian la clínica y los doctores con sus perfiles en directorios médicos de alta autoridad, la señal más fuerte de entidad disponible sin Wikipedia

**Archivos:** `index.html`, `src/data/seo.js`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Datos estructurados*: sameAs de la clínica solo tiene 2 enlaces (Instagram y Facebook) — Ampliar sameAs SOLO con perfiles reales y verificados: URL del perfil de Google Business (share link de Maps), ficha en Doctoralia (directorio dental nº1 en España, muy citado por IAs), y YouTube/LinkedIn/TikTok si exist…
- *Plataformas IA*: Entidad débil: sameAs solo con Instagram y Facebook; doctores sin sameAs ni identificadores en el schema global — Ampliar sameAs de #clinic con la URL pública del Google Business Profile (perfil real ya verificado el 2026-06-26 según el comentario de index.html:69) y los perfiles reales en directorios sanitarios (Doctoralia/Top Doct…

### F2.16 · FAQPage duplicado en las 8 landings de turismo dental (dos bloques idénticos por página)

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Datos estructurados

**Evidencia:** src/data/seo.js:201 incluye faqSchema(landing.faqs) dentro del @graph de dentalTourismSchema Y src/pages/DentalTourismPage.jsx:304-309 renderiza <FAQ ... includeSchema> que emite otro FAQPage. Verificado en vivo: https://deboddentalclinic.com/en/dental-implants-madrid/ sirve dos bloques FAQPage con las mismas 4 preguntas.

**Recomendación:** Pasar includeSchema={false} al componente FAQ en DentalTourismPage.jsx (o eliminar faqSchema del @graph de dentalTourismSchema, pero no ambos). Las directrices de Google prohíben marcar el mismo contenido FAQ dos veces en una página.

**Impacto:** Elimina un error de validación en Search Console y ambigüedad de parsing para las IAs en las landings EN de mayor valor comercial (turismo dental). Canal: Google + ChatGPT/Perplexity para búsquedas 'dental implants Madrid'.

**Archivos:** `src/pages/DentalTourismPage.jsx`, `src/data/seo.js`

### F2.17 · Nodo clínica enriquecible: sin logo, founder, knowsLanguage ni foundingDate; WebSite solo es-ES; geo como strings

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Datos estructurados

**Evidencia:** index.html: el nodo #clinic no tiene logo (existe public/logo.png y sí se usa en el publisher del blog), ni founder pese a que la description dice 'Dirigida por los Dres. Víctor Guerrero y César Rodríguez', ni knowsLanguage; geo latitude/longitude son strings ("40.4249"); el nodo WebSite declara inLanguage 'es-ES' siendo el sitio bilingüe ES/EN.

**Recomendación:** En el @graph de index.html: añadir logo (ImageObject → /logo.png), founder: [{'@id': '.../equipo/dr-victor-guerrero/#person'}, {'@id': '.../equipo/dr-cesar-rodriguez/#person'}] (reutiliza los Person existentes), knowsLanguage: ['es','en'], foundingDate si se conoce; pasar geo a números; WebSite.inLanguage: ['es-ES','en'].

**Impacto:** knowsLanguage estructurado respalda el posicionamiento 'English-speaking dentist in Madrid' de toda la sección de turismo dental ante ChatGPT/Perplexity; founder conecta el grafo clínica↔doctores; logo mejora la presentación de entidad en Google.

**Archivos:** `index.html`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Datos estructurados*: MedicalWebPage.about con propiedades mal ubicadas (relevantSpecialty y availableAtOrFrom dentro de MedicalSpecialty) — Simplificar: about: { '@type': 'MedicalSpecialty', name: ... } sin propiedades ajenas, y añadir provider: { '@id': '.../#clinic' } y mainEntity al nivel de MedicalWebPage para mantener el vínculo con la clínica.
- *SEO local*: areaServed de la entidad principal no enumera los barrios que el sitio dice atender — En la entidad #clinic, sustituir por un array areaServed: [Argüelles, Moncloa, Chamberí, Centro, Plaza de España (+ Malasaña/Aravaca cuando existan)] como Place con containedInPlace Madrid, alineado con las landings de b…

### F2.18 · Las landings de turismo dental no vinculan estructuradamente su procedimiento (MedicalWebPage genérica sobre la clínica)

**Severidad:** 🟡 Baja · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Datos estructurados

**Evidencia:** src/data/seo.js:170-204 (dentalTourismSchema): about y mainEntity apuntan solo a #clinic. Verificado en vivo: https://deboddentalclinic.com/en/dental-implants-madrid/ no referencia ningún MedicalProcedure pese a tratar sobre implantes.

**Recomendación:** Añadir en dentalTourism.js un campo procedureId por landing (p. ej. la URL @id de /tratamientos/implantes-dentales-arguelles-madrid-espana/) y emitir en el @graph un about adicional { '@id': procedureId } o un nodo MedicalProcedure resumido en inglés, conectando landing EN ↔ tratamiento ES ↔ clínica.

**Impacto:** Cierra el triángulo de grafo procedimiento-landing-clínica para las consultas de mayor valor ('dental implants Madrid', 'all-on-4 Madrid') en ChatGPT y Perplexity, donde las landings EN compiten internacionalmente.

**Archivos:** `src/data/seo.js`, `src/data/dentalTourism.js`

### F2.19 · Falta article:modified_time y dateModified real distinto de publishDate en el blog

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Plataformas IA

**Evidencia:** src/pages/blog/BlogPost.jsx:65 solo emite article:published_time. Verificado en vivo (post 'sensibilidad-dental'): article:modified_time=0 apariciones en el HTML; dateModified del JSON-LD = datePublished = 2026-06-25 (fallback de seo.js:274).

**Recomendación:** Añadir <meta property="article:modified_time"> en BlogPost.jsx alimentado por post.dateModified, y establecer post.dateModified en blog.js cada vez que se retoque un post (la fecha visible 'Revisado el' ya existe — mantenerlas sincronizadas).

**Impacto:** Señal de frescura para Perplexity (peso alto), ChatGPT y Google AIO; los posts actualizados dejan de parecer estáticos desde su publicación.

**Archivos:** `src/pages/blog/BlogPost.jsx`, `src/data/blog.js`, `src/data/seo.js`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Plataformas IA*: dateModified de servicios/landings clavado a una constante global única — Sustituir la constante por fecha por sección (services, treatments, barrios, dentalTourism) derivada del último commit git de cada fichero de datos, calculada en build (script prerender) e inyectada como prop.

### F2.20 · Review + AggregateRating auto-referenciados con reseñas copiadas de Google (contra directrices)

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO local

**Evidencia:** index.html incluye aggregateRating 4.9/350 en el shell servido en las ~156 páginas, y src/data/seo.js:334-355 (homeReviewsSchema, usado en src/pages/Resenas.jsx:30) marca como Review schema reseñas copiadas de Google Maps (src/data/reviews.js:1-8 lo documenta: 'copia desde Google Maps')

**Recomendación:** Mantener las reseñas visibles como texto (bueno para usuarios y LLMs) pero retirar el markup Review/AggregateRating de reseñas de terceros, o limitar aggregateRating solo si se recogen valoraciones propias de primera mano; como mínimo, sacarlo del shell global para que no se emita en todas las páginas

**Impacto:** Google ignora las reseñas 'self-serving' en LocalBusiness y marcar reseñas de otra plataforma incumple sus directrices de structured data — riesgo de acción manual sobre rich results en un sitio YMYL; el canal AI no pierde nada porque lee el texto plano

**Archivos:** `index.html`, `src/data/seo.js`, `src/pages/Resenas.jsx`, `src/data/reviews.js`

---

## Fase 3 — GEO: visibilidad directa en ChatGPT, Perplexity y AI Overviews

ChatGPT search se alimenta del índice de Bing; Perplexity y Claude leen el HTML y el llms.txt. Esta fase asegura que las IAs encuentren, entiendan y CITEN a Debod con su marca.

### F3.21 · Sin IndexNow ni verificación de Bing Webmaster Tools (crítico para ChatGPT search)

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** S (horas) · **Dimensión:** Plataformas IA

**Evidencia:** grep -ri 'indexnow|msvalidate' en public/, src/, scripts/ e index.html devuelve 0 resultados; public/ solo contiene robots.txt y llms.txt (sin fichero de clave IndexNow). ChatGPT search (OAI-SearchBot) se apoya en el índice de Bing.

**Recomendación:** 1) Verificar deboddentalclinic.com en Bing Webmaster Tools (importación 1-clic desde Google Search Console) y enviar sitemap.xml. 2) Generar clave IndexNow, publicar public/<clave>.txt y añadir un script post-deploy (junto a scripts/gen-sitemap.mjs) que haga POST a https://api.indexnow.org/indexnow con las URLs modificadas en cada push a main.

**Impacto:** Indexación rápida y completa de las ~156 URLs en Bing → visibilidad en ChatGPT search y Bing Copilot, los dos canales con OAI-SearchBot/bingbot ya permitidos en robots.txt pero sin garantía de indexación.

**Archivos:** `public/`, `scripts/gen-sitemap.mjs`, `index.html`

### F3.22 · llms.txt ignora todo el sitio EN: cero enlaces /en/, sin turismo dental ni english-speaking-dentist

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** GEO / IAs

**Evidencia:** public/llms.txt (57 líneas): los 26 enlaces son rutas ES; no aparece ninguna de las 20+ páginas bajo dist/en/ (en/english-speaking-dentist-madrid/, en/dental-tourism-madrid/, en/all-on-4-madrid/, etc.) que son exactamente las páginas objetivo de consultas tipo "dentist in Madrid for foreigners"

**Recomendación:** Añadir a llms.txt una sección "## English / International Patients" con las 8 landings de turismo dental (src/data/dentalTourism.js), english-speaking-dentist-madrid y las páginas EN de implantes/carillas/Invisalign, cada una con descripción de 1 línea en inglés. Mantener el H1 y blockquote actuales (cumplen la spec llmstxt.org)

**Impacto:** ChatGPT y Perplexity resuelven las consultas de pacientes internacionales en inglés; hoy llms.txt no les señala ninguna página EN, desperdiciando la inversión en las 8 landings de turismo dental

**Archivos:** `public/llms.txt`, `src/data/dentalTourism.js`

### F3.23 · No existe llms-full.txt ni versiones markdown limpias de las páginas clave

**Severidad:** 🟡 Baja · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** GEO / IAs

**Evidencia:** ls public/llms-full.txt → No such file; todos los enlaces de public/llms.txt apuntan a HTML (~57-152 KB por página, verificado en dist/) en lugar del markdown limpio que recomienda la spec llmstxt.org

**Recomendación:** Extender scripts/prerender.mjs para emitir, junto a cada index.html de las ~30 rutas clave (servicios, tratamientos, turismo dental, barrios), un index.html.md con el contenido principal en markdown limpio; enlazar esos .md desde llms.txt y concatenarlos en /llms-full.txt. El pipeline de prerender ya recorre todas las rutas (scripts/routes.mjs), es un paso adicional de extracción

**Impacto:** Reduce el coste de ingestión para ChatGPT/Claude/Perplexity y aumenta la probabilidad de que usen el contenido completo (no solo el snippet) al responder; sube el cumplimiento llms.txt de básico a completo

**Archivos:** `scripts/prerender.mjs`, `scripts/routes.mjs`, `public/llms.txt`

### F3.24 · robots.txt sin directiva Content-Signal ni puntero a llms.txt

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** GEO / IAs

**Evidencia:** public/robots.txt (verificado idéntico en vivo): permite todos los crawlers IA y declara Sitemap, pero no incluye Content-Signal: (draft IETF contentsignals.org) ni comentario/referencia a /llms.txt

**Recomendación:** Añadir al final de public/robots.txt: "Content-Signal: search=yes, ai-train=yes, ai-retrieval=yes" (o ai-train=no si la clínica prefiere excluir entrenamiento manteniendo búsqueda/citación) y un comentario "# LLM guidance: https://deboddentalclinic.com/llms.txt"

**Impacto:** Señal emergente de preferencias para crawlers IA (Cloudflare y varios bots ya la parsean); el puntero a llms.txt mejora su descubrimiento por agentes que solo leen robots.txt

**Archivos:** `public/robots.txt`

### F3.25 · Definición de entidad divergente entre llms.txt y schema: "boutique" vs "de referencia"

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** GEO / IAs

**Evidencia:** public/llms.txt:3 define la clínica como "Clínica dental boutique en el barrio de Argüelles..." mientras index.html:36 (schema description) dice "Clínica dental de referencia en Argüelles, Madrid..."; el resto de la frase (especialidades, doctores, premio WhiteSmile 2023) sí coincide

**Recomendación:** Elegir una única frase de definición de entidad (sugerido: la versión "boutique" + odontología honesta, que es más diferenciadora) y usarla literalmente en: schema description (index.html), llms.txt, meta description de la home y sección hero/about. Replicar el equivalente EN exacto en /en/

**Impacto:** Los LLMs consolidan la entidad por consistencia textual entre fuentes; una definición idéntica en todas las superficies aumenta la probabilidad de que ChatGPT/Gemini describan la clínica con el posicionamiento elegido y no con una paráfrasis aleatoria

**Archivos:** `public/llms.txt`, `index.html`

### F3.26 · Las respuestas FAQ citables no llevan la marca: la cita viaja sin atribución a Debod

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** GEO / IAs

**Evidencia:** En dist/ (HTML prerenderizado): tratamientos/implantes-dentales-arguelles-madrid-espana/ → 0 de 3 respuestas FAQPage mencionan "Debod"; en/dental-implants-madrid/ → 0 de 8; home → 2 de 8; en el cuerpo de la página de implantes solo 1 de 13 párrafos sustantivos menciona la marca

**Recomendación:** Reescribir la primera frase de las respuestas FAQ de mayor intención comercial (implantes, carillas, Invisalign, turismo dental, ES y EN) para anclar entidad+ubicación: "En Debod Dental Clinic, en Argüelles (Madrid), ...". Mantener las FAQ puramente definicionales neutras. Respetar YMYL: sin absolutos clínicos ni cifras sin fuente

**Impacto:** Cuando Perplexity/ChatGPT/AI Overviews extraen el pasaje como respuesta, el nombre de la clínica aparece dentro del texto citado — mención de marca aunque el usuario no haga clic

**Archivos:** `src/data/faqs.js`, `src/data/treatments.js`, `src/data/dentalTourism.js`, `src/i18n/content/services.en.js`

### F3.27 · Posts sin bloque de respuesta directa extraíble por AI Overviews

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Plataformas IA

**Evidencia:** Post vivo 'sensibilidad-dental-causas-y-alivio': tras el H1 hay entradilla narrativa; el primer H2 ('Qué es exactamente la sensibilidad dental') va seguido de 2 párrafos largos, no de una respuesta de 40-60 palabras. Solo algunos posts EN tienen '## The short answer' (blog.en.js:796).

**Recomendación:** Crear un componente 'Respuesta rápida' estandarizado: primer H2 en forma de pregunta + párrafo-resumen de 40-60 palabras justo debajo, en todos los posts y páginas de servicio ES/EN. Reutilizar el patrón 'The short answer' que ya funciona en el post de brackets vs Invisalign.

**Impacto:** Formato de extracción directa para Google AI Overviews y citas literales en ChatGPT/Perplexity — el canal con más volumen de pacientes.

**Archivos:** `src/pages/blog/BlogPost.jsx`, `src/data/blog.js`, `src/i18n/content/blog.en.js`

### F3.28 · Ausente de Apple Business Connect y Bing Places: dos mapas que usan justo los pacientes objetivo

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** El público de turismo dental EN y expats de Argüelles es mayoritariamente usuario de iPhone: 'dentist near me' en Siri/Apple Maps no consulta Google. ChatGPT search se apoya en el índice de Bing, donde una ficha de Bing Places refuerza la entidad local. El hallazgo de plataformas cubre Bing Webmaster pero nadie cubre los dos directorios cartográficos.

**Recomendación:** Reclamar/crear la ficha en Apple Business Connect (Apple Maps + Siri) y en Bing Places con NAP idéntico al schema (fijo 914 47 62 25, C. de Ferraz — verificar contra src/data/seo.js), categoría, fotos reales y horario. Vincular Bing Places con la verificación de Bing Webmaster Tools ya recomendada en otro hallazgo.

---

## Fase 4 — Rendimiento web (Core Web Vitals)

La velocidad es factor de ranking y de conversión. El prerender ya da buena base; estos cuatro puntos son lo que queda.

### F4.29 · CSS de Google Fonts queda render-blocking al prerenderizar (el truco async se destruye) y se cargan 24 variantes de fuente

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** SEO técnico

**Evidencia:** index.html:131-137 usa el patrón preload+media-switch, pero prerender.mjs serializa el DOM ya conmutado: en dist/index.html el stylesheet queda como <link rel="stylesheet" media="all" onload=...> → bloqueante para todos los visitantes en las 156 páginas. Se piden 3 familias con ~24 pesos/estilos (Outfit ×7, Cormorant ×12, Jakarta ×5).

**Recomendación:** En el post-proceso de prerender.mjs, restaurar media="print" en ese <link> antes de escribir el HTML; mejor aún, self-hostear los woff2 subseteados con solo los pesos realmente usados (3-4 por familia) y font-display:swap, eliminando la dependencia de fonts.googleapis.com.

**Impacto:** Mejora FCP/LCP móvil en todo el sitio (Core Web Vitals, señal de ranking en Google) y reduce trabajo de red para crawlers y usuarios.

**Archivos:** `index.html`, `prerender.mjs`

### F4.30 · Vídeo hero de 1,5 MB solo en webm, sin poster ni fallback mp4, con autoplay y nombre de archivo con espacios

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** SEO técnico

**Evidencia:** src/components/Hero.jsx:11 ('/hero/video hero doctores.webm') y :45 (autoPlay muted loop sin poster ni preload). public/hero/video hero doctores.webm = 1.541.594 bytes. En el HTML prerenderizado el atributo muted no se serializa (bug conocido de React) → el autoplay queda bloqueado hasta hidratar; sin poster, el LCP de la home depende del primer frame del vídeo.

**Recomendación:** Añadir poster (webp del primer frame, con fetchpriority="high": se convierte en candidato LCP estable), un <source> mp4/H.264 de respaldo para Safari/iOS sin VP9, renombrar el archivo sin espacios y usar preload="metadata".

**Impacto:** LCP y estabilidad visual de la home (la página con más enlaces) en móvil; evita hero en negro en iOS antiguos y ahorra 1,5 MB a quien no reproduce el vídeo. Beneficia Google (CWV) y la experiencia de cita desde móvil.

**Archivos:** `src/components/Hero.jsx`, `public/hero/`

### F4.31 · og:image de tratamientos, servicios y blog apunta a fotos stock de Unsplash en dominio ajeno

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** SEO técnico

**Evidencia:** src/pages/treatments/TreatmentPage.jsx:51 y src/pages/blog/BlogPost.jsx:64 usan heroImageUrl; 27 referencias a images.unsplash.com en src/data/*.js. En vivo: og:image=https://images.unsplash.com/photo-1551601651... en /cirujano-oral-arguelles-madrid-espana/.

**Recomendación:** Generar imágenes OG propias 1200×630 con marca (foto real de clínica/doctores + título del tratamiento, hay material en las carpetas de fotos del equipo) y servirlas desde el propio dominio. Priorizar las 8 landings de turismo dental EN y los tratamientos estrella.

**Impacto:** Previews con imagen propia en redes y en las cards de ChatGPT/Perplexity; coherencia E-E-A-T en un sitio YMYL (las fotos stock restan autenticidad como señal de confianza); elimina el hotlinking a un tercero que puede cambiar o limitar las URLs.

**Archivos:** `src/pages/treatments/TreatmentPage.jsx`, `src/pages/blog/BlogPost.jsx`, `src/data/treatments.js`, `src/data/blog.js`

### F4.32 · La CSP solo existe en Report-Only sin endpoint de reporte (no protege ni reporta) y HSTS sin preload

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO técnico

**Evidencia:** vercel.json: Content-Security-Policy-Report-Only definida sin report-uri/report-to (las violaciones no van a ningún sitio); verificado en vivo que no hay header Content-Security-Policy. HSTS = max-age=31536000; includeSubDomains, sin preload.

**Recomendación:** Promover la política a Content-Security-Policy enforcing (ya está acotada a GTM, Facebook, Google Fonts y Unsplash; probar en preview antes) o, si se quiere mantener RO, añadir report-to. Añadir '; preload' al HSTS y dar de alta el dominio en hstspreload.org.

**Impacto:** Señal de seguridad/confianza real para usuarios y crawlers en un sitio sanitario YMYL; hoy el header RO consume bytes sin aportar nada.

**Archivos:** `vercel.json`

---

## Fase 5 — Arquitectura interna e interlinking

Páginas huérfanas no reciben autoridad y las IAs no las descubren navegando. El interlinking blog→tratamiento es el que convierte tráfico informacional en pacientes.

### F5.33 · Clúster local completo huérfano: /ubicaciones/, 4 páginas de barrio y /citas-arguelles-madrid/ sin enlaces entrantes

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Arquitectura

**Evidencia:** src/components/Footer.jsx:22-40 y src/components/Navbar.jsx:80-205 no contienen ningún enlace a /ubicaciones/ ni a los slugs de barrios.js (dentista-moncloa-madrid, dentista-chamberi-madrid, dentista-centro-madrid, dentista-plaza-espana-madrid). Los únicos enlaces entrantes vienen de Ubicaciones.jsx, Citas.jsx y BarrioPage.jsx — el clúster solo se enlaza a sí mismo.

**Recomendación:** Añadir en Footer.jsx una columna 'Zonas de Madrid' con anchors exactos ('Dentista en Moncloa', 'Dentista en Chamberí', 'Dentista en Plaza de España', 'Dentista en el centro de Madrid') y un enlace a /ubicaciones/ en el Navbar o en el bloque de contacto del footer. Enlazar también desde el cuerpo de los servicios ('nuestra clínica atiende pacientes de Chamberí y Moncloa').

**Impacto:** Local SEO en Google ('dentista moncloa/chamberí'): las páginas de barrio hoy solo reciben PageRank vía sitemap; con enlaces sitewide pasan de profundidad ~3 huérfana a profundidad 1. También mejora grounding local en AI Overviews y Perplexity.

**Archivos:** `src/components/Footer.jsx`, `src/components/Navbar.jsx`, `src/data/barrios.js`, `src/pages/Ubicaciones.jsx`

### F5.34 · /dental-lab/ es huérfana total (0 enlaces internos) y /tecnologia/ y /antes-despues/ solo se enlazan desde Ubicaciones

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Arquitectura

**Evidencia:** grep de 'dental-lab' en src/**/*.jsx solo aparece en router/seo/slugs (0 enlaces <Link>). '/tecnologia/' y '/antes-despues/' solo tienen 1 enlace entrante cada una: src/pages/Ubicaciones.jsx:165-166. Irónico: el laboratorio propio es el diferenciador nº1 del copy de turismo (src/data/dentalTourism.js:39 'In-house digital lab') pero nunca se enlaza.

**Recomendación:** Enlazar /dental-lab/ desde: footer (columna clínica), los tratamientos de prótesis (coronas, carillas, vonlay, corona sobre implante) y las 8 landings de turismo donde ya se menciona el lab. Enlazar /antes-despues/ desde carillas, Invisalign y las landings de veneers/smile design; /tecnologia/ desde cirugía guiada e implantes.

**Impacto:** Google: recupera 3 páginas de confianza/E-E-A-T que hoy no reciben autoridad. ChatGPT/Perplexity citan mejor la propuesta de valor (lab propio) si la página es alcanzable y enlazada con anchor descriptivo.

**Archivos:** `src/components/Footer.jsx`, `src/data/dentalTourism.js`, `src/data/treatments.js`

### F5.35 · Interlinking blog→money casi inexistente: los 10 posts nuevos no tienen ni un enlace interno y la plantilla no enlaza tratamientos

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** grep '](/'  en src/data/blog.js: solo 9 enlaces internos en ~19 posts, todos en los posts antiguos. Los posts nuevos (p. ej. 'endodoncia-o-extraccion' blog.js:649, 'molestias-tras-un-implante-dental' blog.js:829, 'coronas-de-zirconio' blog.js:919) mencionan endodoncia, implantes y coronas sin un solo enlace a sus tratamientos. src/pages/blog/BlogPost.jsx:182-216 solo renderiza relatedPosts y autor — no existe bloque 'tratamiento relacionado'.

**Recomendación:** 1) Añadir campo relatedTreatment (slug) a cada post y renderizar en BlogPost.jsx una tarjeta CTA 'Tratamiento relacionado' encima de related posts. 2) Insertar 2-3 enlaces contextuales en el bodyMarkdown de los 10 posts nuevos con anchor exacto ('endodoncia en Argüelles', 'implantes dentales en Madrid'). 3) Añadir la regla al script generador de posts para futuros artículos.

**Impacto:** Google: los posts (que captan el 80% de las queries long-tail) hoy no transfieren autoridad ni tráfico a las páginas de dinero; es la mayor fuga de la estructura hub-spoke del sitio.

**Archivos:** `src/data/blog.js`, `src/pages/blog/BlogPost.jsx`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Contenido E-E-A-T*: Cuerpos de tratamientos sin ningún enlace interno y posts recientes sin enlazar al cluster — Añadir 2-4 enlaces internos contextuales por página: cada tratamiento hacia su servicio padre, tratamientos hermanos del cluster y el post de blog relacionado (p. ej. implantes-dentales → mantenimiento-de-implante, injer…

### F5.36 · Canibalización ES: posts de blog casi idénticos a sus páginas de tratamiento (limpieza profunda y detección de cáncer oral)

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** src/data/blog.js:233-234 ('limpieza-dental-profunda-en-arguelles-madrid') vs src/data/treatments.js:721 ('limpieza-dental-profunda-arguelles-madrid-espana'); src/data/blog.js:295-296 ('deteccion-de-cancer-oral-en-arguelles-madrid') vs treatments.js:767 ('deteccion-de-cancer-oral-arguelles-madrid-espana'). Mismo keyword + misma geo + misma intención en slug y title. Además services.js:47 enlaza el highlight 'Diagnóstico dental' a un POST de blog (/blog/servicios/diagnostico-dental-en-arguelles-madrid/) en lugar de a una página de tratamiento.

**Recomendación:** Reorientar los 2 posts a intención puramente informativa con title/H1 distintos (p. ej. '¿Cada cuánto se necesita una limpieza profunda?' / 'Autoexploración: señales de cáncer oral') y añadir enlace prominente post→tratamiento con anchor exacto. Para 'Diagnóstico dental': crear página de tratamiento propia o dejar de presentarla como servicio en el hub. Alternativa barata: 301 del post al tratamiento.

**Impacto:** Google: elimina la competencia interna por 'limpieza dental profunda Madrid' y 'detección cáncer oral Madrid' que hoy divide señales entre 2 URLs; el tratamiento (money page) consolida el ranking.

**Archivos:** `src/data/blog.js`, `src/data/treatments.js`, `src/data/services.js`

### F5.37 · Canibalización EN: tres páginas compiten por 'veneers Madrid' y tres por 'dental implants Madrid'

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** Veneers: /en/porcelain-veneers-madrid/ (dentalTourism.js:294) + /en/veneers-smile-design-madrid/ (dentalTourism.js:331) + /en/treatments/porcelain-veneers-arguelles-madrid/ (slugs.js:29, mirror del tratamiento ES). Implantes: /en/dental-implants-madrid/ (dentalTourism.js:146) + /en/treatments/dental-implants-arguelles-madrid/ (slugs.js:24) + /en/dental-implants-dentist-arguelles-madrid/ (slugs.js:14).

**Recomendación:** Diferenciar intención en title/H1: landings de turismo = 'for international patients / from the UK & Ireland' (transaccional viajero); mirrors de tratamiento = clínico-local para expatriados en Madrid ('in Argüelles'). Cross-link explícito entre ambas ('Visiting from abroad? See our international patients guide') para que Google entienda la jerarquía, y consolidar veneers-smile-design como página de proceso DSD enlazando a porcelain-veneers como tratamiento.

**Impacto:** Google EN y Bing: evita que las 3 URLs se alternen en ranking para 'veneers Madrid' / 'dental implants Madrid' (hoy ninguna consolida); ChatGPT elige mejor qué URL citar según la intención del usuario.

**Archivos:** `src/data/dentalTourism.js`, `src/i18n/slugs.js`, `src/pages/DentalTourismPage.jsx`

### F5.38 · Huecos en el embudo de turismo dental EN: 'financing available' sin enlace, sin comparativa All-on-4 vs All-on-6, y uso de 'Free'

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Arquitectura

**Evidencia:** src/data/dentalTourism.js:30,131,207,244,318 repiten 'financing available' como texto plano sin enlazar /en/financing/. Las landings spoke solo enlazan a su servicio EN y al hub (DentalTourismPage.jsx:101-106); no hay enlaces a /en/reviews/ ni /en/before-after/ (prueba social, fase de decisión) ni cross-link All-on-4↔All-on-6 pese a ser la duda nº1 del paciente. Además dentalTourism.js:84 y DentalTourismPage.jsx:316 usan 'Free video consultation' — choca con la norma interna de no usar 'gratis' (la visita es 'incluida').

**Recomendación:** 1) Enlazar 'financing available' → /en/financing/ en las 5 menciones. 2) Añadir bloque 'Compare: All-on-4 vs All-on-6' con enlaces recíprocos entre ambas landings y a before-after/reviews EN. 3) Cambiar 'Free video consultation' por 'Video consultation included' / 'no-cost, no-obligation video consultation' según criterio legal del cliente.

**Impacto:** Conversión del embudo EN (landing→decisión→contacto) y cumplimiento de publicidad sanitaria; Perplexity/ChatGPT citan mejor páginas con rutas de decisión explícitas (comparativas enlazadas).

**Archivos:** `src/data/dentalTourism.js`, `src/pages/DentalTourismPage.jsx`

---

## Fase 6 — Contenido nuevo: money pages con demanda real en Madrid

Páginas que faltan y que capturan búsquedas de máxima intención comercial. Todas respetando las reglas YMYL: sin precios inventados, sin absolutos clínicos, sin "gratis".

### F6.39 · Falta landing de urgencias dentales en Madrid/Argüelles

**Severidad:** 🔴 Alta · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** grep -i 'urgencia|urgente' en src/data/services.js, treatments.js, faqs.js y scripts/routes.mjs devuelve 0 páginas. Solo hay una mención dentro del post de muelas del juicio (src/data/blog.js:547 'debes buscar atención dental urgente') sin enlace a nada.

**Recomendación:** Crear landing '/urgencias-dentales-arguelles-madrid/' con: qué se considera urgencia (dolor agudo, traumatismo, flemón), protocolo de la clínica, horario, teléfono y WhatsApp click-to-call en el hero, y schema FAQPage. Enlazarla desde Navbar/Footer y desde los posts de dolor (muelas del juicio, sensibilidad). Mirror EN 'emergency-dentist-madrid' para expatriados.

**Impacto:** Google local y Maps: 'dentista de urgencia Madrid / urgencias dentales Argüelles' es intención de máxima conversión (llamada inmediata) y el sitio hoy es invisible para ella. También es query frecuente en ChatGPT para turistas.

**Archivos:** `scripts/routes.mjs`, `src/data/services.js`, `src/i18n/slugs.js`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *SEO local*: No existe página de urgencias dentales Madrid (query local de máxima intención) — Crear landing /urgencias-dentales-madrid/ (+ par EN /en/emergency-dentist-madrid/ con hreflang) siguiendo el patrón de barrios.js: atención el mismo día L–V 9:00–20:00, tel +34 914 47 62 25 y WhatsApp clic-para-llamar, q…
- *Contenido E-E-A-T*: Falta landing de Urgencias dentales pese a ofrecer atención el mismo día — Crear /urgencias-dentales-arguelles-madrid/ (ES+EN /en/emergency-dentist-madrid/) con: qué se considera urgencia (dolor agudo, traumatismo, corona caída, flemón), qué hacer mientras llegas, horario L-V 9:00–21:00, teléfo…

### F6.40 · No existe página de blanqueamiento dental y sus anchors apuntan a páginas equivocadas

**Severidad:** 🔴 Alta · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** grep 'blanqueamiento|whitening' en src/data/treatments.js y src/i18n/slugs.js devuelve 0 resultados (no hay página). src/data/services.js:92: el highlight 'Blanqueamiento dental' enlaza a /tratamientos/examenes-dentales-y-limpiezas-dentales-arguelles-madrid/ (página de limpiezas, no de blanqueamiento). src/components/Footer.jsx:35: 'tr.whitening' enlaza al servicio genérico de estética.

**Recomendación:** Crear tratamiento 'blanqueamiento-dental-arguelles-madrid' en treatments.js (con mirror EN 'teeth-whitening-arguelles-madrid' en slugs.js), colgado del servicio de estética, con FAQ sobre sensibilidad y duración orientativa sin absolutos. Corregir los dos anchors para que apunten a la nueva página.

**Impacto:** Google: 'blanqueamiento dental Madrid' es de las keywords transaccionales dentales con más volumen y hoy el sitio no tiene NINGUNA página elegible; los anchors incorrectos además envían señal errónea a la página de limpiezas.

**Archivos:** `src/data/treatments.js`, `src/data/services.js`, `src/components/Footer.jsx`, `src/i18n/slugs.js`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Contenido E-E-A-T*: Falta landing de Blanqueamiento dental — Crear tratamiento 'blanqueamiento-dental-arguelles-madrid-espana' (ES+EN 'teeth-whitening') en treatments.js con FAQs en faqs.js: tipos (clínica vs. férulas domiciliarias supervisadas), sensibilidad esperable, duración o…

### F6.41 · Falta la money page 'Cuánto cuesta un implante dental en Madrid' (factores de precio, sin cifras)

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** grep 'precio|cuesta|coste' en scripts/routes.mjs, src/data/treatments.js y blog.js: no existe ninguna página de coste. El blog ya cubre 'cuanto-dura-un-implante-dental' (src/data/blog.js:762, informacional) pero nadie responde a la query transaccional de coste; solo existe /financiacion/, enlazada únicamente desde Footer.jsx:40 y ClinicalExpertise.jsx.

**Recomendación:** Crear post/página pilar 'Cuánto cuesta un implante dental en Madrid: los 6 factores que determinan tu presupuesto' (marca, corona, injerto, cirugía guiada, lab propio, financiación) sin publicar cifras, con CTA a primera visita diagnóstica incluida + enlace a /financiacion/ y a /tratamientos/implantes-dentales-arguelles-madrid-espana/. Versión EN espejo para el embudo de turismo ('dental implant cost in Madrid — what determines your quote').

**Impacto:** Google y sobre todo ChatGPT/Perplexity/AI Overviews: 'cuánto cuesta un implante en Madrid' es la query de implantes más citada por asistentes; una página de factores honesta es altamente citable y captura al usuario en fase de decisión.

**Archivos:** `src/data/blog.js`, `src/i18n/slugs.js`, `src/data/dentalTourism.js`

### F6.42 · All-on-4 / All-on-6 existen solo en inglés: el mercado español de arcada completa queda sin página

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** src/data/dentalTourism.js:183 ('all-on-4-madrid') y :220 ('all-on-6-madrid') son landings solo EN bajo /en/. En treatments.js no existe ningún tratamiento ES de rehabilitación de arcada completa/all-on-4 (los 23 slugs listados no lo incluyen).

**Recomendación:** Crear tratamiento ES '/tratamientos/implantes-all-on-4-arguelles-madrid/' (o 'rehabilitacion-arcada-completa') colgado del servicio de implantes, reutilizando el contenido clínico ya escrito en dentalTourism.js, con hreflang hacia /en/all-on-4-madrid/ si se decide emparejarlos.

**Impacto:** Google ES: 'all on 4 Madrid' tiene demanda alta y ticket muy alto; hoy solo compiten clínicas grandes. La página EN existente demuestra que el contenido ya está redactado — es adaptación, no creación desde cero.

**Archivos:** `src/data/treatments.js`, `src/data/dentalTourism.js`, `src/i18n/slugs.js`

### F6.43 · Faltan páginas de decisión con demanda: sedación consciente, implante vs puente y carillas composite vs porcelana

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** Arquitectura

**Evidencia:** Sedación consciente solo existe como párrafo enterrado en src/data/services.js:324-326 (cuerpo de cirujano-oral), sin URL propia ni anchor. No existe ningún contenido 'implante vs puente' (solo una mención de pasada en blog.js:649) ni 'carillas composite vs porcelana' — el patrón comparativo ya funciona en el sitio (carillas-vs-coronas blog.js:359, brackets-o-invisalign en slugs.js).

**Recomendación:** 1) Crear tratamiento/landing 'sedacion-consciente-arguelles-madrid' colgada de cirugía oral (keyword 'dentista sedación consciente Madrid', pacientes con odontofobia = ticket alto). 2) Crear posts comparativos 'Implante o puente: cómo decidir' y 'Carillas de composite vs porcelana' en odontologia-estetica/servicios, cada uno enlazando a sus tratamientos con anchor exacto y FAQ schema.

**Impacto:** Google y asistentes AI: las queries comparativas son las más citadas por AI Overviews/ChatGPT en fase de decisión; sedación consciente es un diferenciador competitivo hoy invisible para búsqueda.

**Archivos:** `src/data/treatments.js`, `src/data/blog.js`, `src/data/services.js`, `src/i18n/slugs.js`

### F6.44 · Faltan landings de barrio con demanda: Malasaña y Aravaca

**Severidad:** 🟡 Baja · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** SEO local

**Evidencia:** src/data/barrios.js contiene solo 4 slugs (moncloa, chamberi, centro, plaza-espana); grep 'Malasaña' en src/ = 0 resultados y 'Aravaca' solo como nombre de distrito (src/components/Footer.jsx:164)

**Recomendación:** Añadir 2 entradas al patrón existente (contenido de transporte real + FAQ + versión EN en src/i18n/content/barrios.en.js): /dentista-malasana-madrid/ (Ventura Rodríguez L3 conecta directo, 10-15 min andando por Conde Duque) y /dentista-aravaca-madrid/ (mismo distrito Moncloa-Aravaca, ya citado en el footer); las rutas se generan solas vía scripts/routes.mjs

**Impacto:** Cubre 'dentista Malasaña' y 'dentista Aravaca' en Google local y en respuestas de AI por barrio; las 4 landings actuales son sustanciales (~2,8 KB + FAQ cada una), el patrón funciona y solo hay que extenderlo

**Archivos:** `src/data/barrios.js`, `src/i18n/content/barrios.en.js`

### F6.45 · La página Cómo llegar (/ubicaciones/) no menciona parking, bus ni accesibilidad

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** SEO local

**Evidencia:** src/pages/Ubicaciones.jsx solo lista 3 estaciones de metro (Ventura Rodríguez, Plaza de España, Argüelles); grep 'parking|aparcamiento|bus|BiciMAD' en Ubicaciones.jsx = 0 (aparcamiento solo se menciona de pasada en src/data/barrios.js:83,93)

**Recomendación:** Añadir bloques bilingües 'En coche' (parkings públicos de Plaza de España y zona Ferraz/Princesa, zona SER), 'En autobús' (líneas EMT que paran en Ferraz/Marqués de Urquijo) y accesibilidad del local; reflejar también 'fines de semana previa cita' que ya aparece en el texto pero no en el openingHoursSpecification

**Impacto:** Enriquece la página local principal para AI Overviews y queries 'dentista con parking Madrid'; es la información práctica que Gemini/ChatGPT extraen al recomendar cómo llegar

**Archivos:** `src/pages/Ubicaciones.jsx`

---

## Fase 7 — E-E-A-T y profundidad del contenido YMYL

Google exige el listón más alto a contenido de salud. Fuentes citadas + revisor médico visible en TODO (no solo el blog) es lo que separa una web que las IAs citan de una que ignoran.

### F7.46 · Cero fuentes externas citadas en todo el contenido médico (19 posts + 23 tratamientos)

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** Análisis programático de src/data/blog.js: 0 enlaces https:// en los 19 bodyMarkdown (ES y EN). src/data/treatments.js: 0 enlaces en los 23 bodyMarkdown. Ningún post tiene sección de referencias (grep 'fuente|referenc|bibliograf' en src/pages/blog/BlogPost.jsx = false).

**Recomendación:** Añadir 2-4 citas a fuentes autorizadas por post/tratamiento (Consejo General de Dentistas, SEPA, SEPES, SECIB, Cochrane, MSD Manuals) con enlace saliente y una sección 'Fuentes consultadas' al final del bodyMarkdown. Priorizar los posts YMYL sensibles (detección de cáncer oral, periodontitis, endodoncia-o-extracción). Cumple la restricción: cualquier dato clínico debe llevar fuente.

**Impacto:** Trust E-E-A-T en Google (YMYL) y citabilidad directa en Perplexity y ChatGPT, que privilegian contenido con afirmaciones atribuidas a fuentes verificables.

**Archivos:** `src/data/blog.js`, `src/data/treatments.js`, `src/pages/blog/BlogPost.jsx`

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Plataformas IA*: Posts YMYL sin fuentes externas autorizadas citadas — Añadir una sección 'Fuentes y referencias' al final de cada post con 2-3 enlaces a sociedades científicas españolas (SEPA para periodoncia, SEPES para prótesis, Consejo General de Dentistas) y citarlas en el cuerpo cuand…

### F7.47 · Páginas de tratamientos y servicios (YMYL) sin revisor médico visible ni reviewedBy en schema

**Severidad:** 🔴 Alta · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** src/pages/treatments/TreatmentPage.jsx y src/pages/services/ServicePage.jsx: sin 'Revisado por', sin autor, sin colegiado (grep revis/author/reviewedBy = false en ambos). El blog SÍ lo tiene (BlogPost.jsx muestra 'Revisado por Dr. César Rodríguez · Nº Colegiado COEM 28015194 · Última revisión'). Verificado en vivo: /tratamientos/implantes-dentales-arguelles-madrid-espana/ no muestra revisor.

**Recomendación:** Reutilizar la caja de revisión médica del blog en TreatmentPage.jsx y ServicePage.jsx, mapeando cada tratamiento a su especialista por el campo specialty (p. ej. implantes → Dra. Mercedes López, endodoncia → Dra. Irene de los Mozos), y añadir reviewedBy (Person con colegiadoNum) + lastReviewed al schema MedicalWebPage en src/data/seo.js.

**Impacto:** E-E-A-T en las 31 páginas de mayor intención comercial: mejora en Google YMYL y AI Overviews, y da a los LLMs una señal de revisión médica atribuible al citar la clínica.

**Archivos:** `src/pages/treatments/TreatmentPage.jsx`, `src/pages/services/ServicePage.jsx`, `src/data/seo.js`, `src/data/treatments.js`

### F7.48 · 9 posts del blog son thin content (285–453 palabras), incluido uno de cáncer oral

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** src/data/blog.js, recuento de bodyMarkdown ES — los 5 más débiles: limpieza-dental-profunda-en-arguelles-madrid (285), dolor-de-muelas-de-juicio-en-arguelles-madrid (307), diagnostico-dental-en-arguelles-madrid (317), deteccion-de-cancer-oral-en-arguelles-madrid (355), aftas-bucales-causas-y-tratamiento (373). Todos los posts de feb–mar 2026 están bajo 460 palabras; los de may–jun rondan 600–785.

**Recomendación:** Expandir estos 9 posts a 800–1.200 palabras siguiendo el patrón del post 'cuanto-dura-un-implante-dental' (arranque '## La respuesta corta' con respuesta directa de 40-60 palabras, H2 en forma de pregunta, matices y señales de práctica clínica real). Prioridad máxima: detección de cáncer oral, el tema más YMYL del sitio con solo 355 palabras. Actualizar la fecha de última revisión al expandir.

**Impacto:** Elimina el riesgo de thin content en Google y multiplica los pasajes citables en AI Overviews, ChatGPT y Perplexity para consultas informacionales de pacientes de Madrid.

**Archivos:** `src/data/blog.js`

### F7.49 · Tratamientos con estructura pobre para extracción por LLMs: 1,4 H2 de media y solo 1 tabla en 23 páginas

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** Análisis de src/data/treatments.js: 32 H2 en total entre 23 bodyMarkdown (15 en forma de pregunta), y solo 1 página contiene tabla markdown. Cuerpos de ~500–1.150 palabras colgando casi todo de un único H2 con H3s.

**Recomendación:** Reestructurar los bodyMarkdown con 4-6 H2 en forma de pregunta ('¿Cuánto dura el proceso?', '¿Duele la colocación?' — sin absolutos clínicos) seguidos de una respuesta directa de 40-60 palabras, y añadir tablas comparativas citables: implante vs. puente, corona de zirconio vs. metal-porcelana, Invisalign vs. brackets, carillas vs. coronas (columnas: indicación, duración del proceso, mantenimiento — sin precios).

**Impacto:** Las tablas y los bloques pregunta-respuesta directa son el formato que más citan AI Overviews, ChatGPT y Perplexity; también habilita featured snippets en Google.

**Archivos:** `src/data/treatments.js`

### F7.50 · Perfil EN de los 23 tratamientos marcado 'pending-human': traducción sin revisión humana

**Severidad:** 🟠 Media · **Tipo:** fix · **Esfuerzo:** M (1–2 días) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** src/data/treatments.js: campo reviewStatus_en = 'pending-human' en los 23 tratamientos. Estas páginas EN sostienen el funnel de turismo dental (el menú Dental Tourism enlaza a /en/treatments/...).

**Recomendación:** Revisión humana (idealmente por el equipo o un revisor nativo) de los 23 bodyMarkdown_en, actualizando reviewStatus_en al terminar. Priorizar los 5 del cluster de implantes y carillas, que son los que recibe el tráfico de dental tourism.

**Impacto:** Calidad percibida y señales de contenido AI sin editar en Google EN; crítico para que ChatGPT/Perplexity recomienden la clínica a pacientes internacionales sin errores de traducción clínica.

**Archivos:** `src/data/treatments.js`

### F7.51 · No existe página de Aviso Legal con registro sanitario

**Severidad:** 🔴 Alta · **Tipo:** nuevo · **Esfuerzo:** S (horas) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** grep repo-wide: la única aparición de 'aviso legal' es el subtítulo de src/pages/PoliticaPrivacidad.jsx:22. No hay ruta /aviso-legal/ en scripts/routes.mjs ni mención de 'registro sanitario' o 'autorización sanitaria' en todo src/.

**Recomendación:** Crear /aviso-legal/ (y /en/legal-notice/) con: denominación social y NIF del titular, nº de autorización de centro sanitario de la Comunidad de Madrid, responsable sanitario con colegiado, y enlazarla desde el footer. Obligatorio por LSSI y normativa de centros sanitarios; añadirla a routes.mjs y al sitemap.

**Impacto:** Trustworthiness (la dimensión E-E-A-T que Google pondera más en YMYL) y cumplimiento legal español; también refuerza la entidad para Google local y los verificadores de fiabilidad de los LLMs.

**Archivos:** `scripts/routes.mjs`, `src/components/Footer.jsx`, `src/pages/PoliticaPrivacidad.jsx`

### F7.52 · Perfiles de doctores no muestran los artículos que han revisado/firmado

**Severidad:** 🟡 Baja · **Tipo:** fix · **Esfuerzo:** S (horas) · **Dimensión:** Contenido E-E-A-T

**Evidencia:** src/pages/team/DoctorProfile.jsx: grep 'blogPosts|authorSlug|artículos' = sin resultados, pese a que cada post de src/data/blog.js ya lleva authorSlug apuntando al doctor.

**Recomendación:** Añadir en DoctorProfile.jsx una sección 'Artículos revisados por [nombre]' filtrando blogPosts por authorSlug, con enlace a cada post. Cierra el circuito autor↔contenido que ya existe a nivel de datos.

**Impacto:** Refuerza Expertise/Experience del autor en Google (patrón author page recomendado para YMYL) y da a los LLMs evidencia navegable de que los revisores publican regularmente.

**Archivos:** `src/pages/team/DoctorProfile.jsx`, `src/data/blog.js`

---

## Fase 8 — Off-site y entidad: señales fuera de la web (requiere acción del negocio)

Las IAs recomiendan clínicas basándose en lo que dicen TERCEROS: Google Business Profile, directorios sanitarios, foros de expats, prensa. Esta fase no es código; es proceso y presencia. Es donde se gana "mejor dentista Madrid" en ChatGPT.

### F8.53 · Google Business Profile inactivo como canal: sin posts, sin Q&A sembrado y sin catálogo de servicios sincronizado con la web

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Gemini, AI Overviews y el local pack se alimentan directamente de GBP, no de la web. Los hallazgos existentes solo tocan el enlace a Maps y el CTA de reseña; nadie audita la ficha en sí. Para una clínica de barrio en Argüelles, GBP genera más llamadas que todo el SEO orgánico junto, y el Q&A sembrado es contenido que las IAs citan literalmente.

**Recomendación:** Trabajar la ficha de GBP como activo GEO: (1) sembrar la sección Preguntas y Respuestas con las mismas FAQs ya redactadas en src/data/faqs.js (urgencias, primera visita incluida, idiomas, financiación) respondidas desde la cuenta propietaria; (2) publicar 2 posts/mes (casos antes-después reales de public/Images/antes despues, tecnología, equipo); (3) dar de alta el catálogo de Servicios de GBP con los 23 tratamientos usando los mismos nombres que las URLs del sitio; (4) subir las fotos reales de public/Images/clinica y Equipo (la ficha suele quedarse con fotos de usuarios); (5) añadir el enlace de cita (misma URL que el CTA web) como 'Enlace de reserva'.

### F8.54 · Sin proceso de respuesta del propietario a las reseñas de Google (velocidad y contenido de las respuestas)

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** El hallazgo existente cubre solo la captación (CTA writereview), no la gestión. Las respuestas del propietario son texto indexable que Google usa como señal de negocio activo y que Perplexity/Gemini leen al resumir la clínica. Una reseña negativa sin respuesta es lo primero que un LLM cita cuando le preguntan 'is Debod Dental Clinic good?'.

**Recomendación:** Establecer SLA de respuesta a toda reseña nueva en <72h desde la cuenta de GBP, con plantillas que mencionen de forma natural el tratamiento y la ubicación ('gracias por confiar en nosotros para tu implante en nuestra clínica de Argüelles') sin revelar datos clínicos del paciente (LOPD/secreto profesional). Responder también las reseñas antiguas sin respuesta, empezando por las negativas o de 4 estrellas.

### F8.55 · No hay CTA ni flujo (enlace writereview/QR) para dejar reseña en Google

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** S (horas) · **Dimensión:** SEO local

**Evidencia:** grep 'writereview|g.page' en src/ = 0 resultados; src/pages/Resenas.jsx muestra reseñas y el widget Elfsight pero no tiene botón 'Déjanos tu reseña'

**Recomendación:** Añadir en /resenas/ (y en la firma de emails/pantalla de recepción vía QR) el enlace directo https://search.google.com/local/writereview?placeid=<PLACE_ID de la ficha GBP>; en la web, un botón secundario junto a 'Ver todas nuestras reseñas' (Reviews.jsx:131)

**Impacto:** La velocidad y frescura de reseñas es uno de los 3 factores principales del local pack; también alimenta el widget Elfsight y el texto que los LLMs leen en /resenas/

**Archivos:** `src/pages/Resenas.jsx`, `src/components/Reviews.jsx`

### F8.56 · sameAs solo con Instagram/Facebook: sin citations en directorios sanitarios españoles

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** SEO local

**Evidencia:** index.html:78 sameAs = [instagram.com/debodclinicadental, facebook.com/debodclinicadental] únicamente; grep 'doctoralia|topdoctors|masquemedicos' en src/ = 0 resultados

**Recomendación:** Crear/reclamar perfiles con NAP idéntico ('Debod Dental Clinic', C. de Ferraz, 24, 28008 Madrid, +34 914 47 62 25, L–V 9:00–20:00) en Doctoralia, Top Doctors, Bing Places y Apple Business Connect, con las mismas categorías/servicios que GBP (implantología, Invisalign, estética, rehabilitación oral); añadir esas URLs al array sameAs de index.html y a llms.txt

**Impacto:** Citations consistentes son señal clave del local pack de Google y de Bing/Copilot; además Perplexity y ChatGPT citan Doctoralia/Top Doctors en consultas 'mejor dentista Madrid', donde hoy la clínica es invisible

**Archivos:** `index.html`, `public/llms.txt`

### F8.57 · Debod ausente de las fuentes que las IAs citan para "english speaking dentist Madrid" y turismo dental

**Severidad:** 🟠 Media · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** GEO / IAs

**Evidencia:** Búsqueda "best english speaking dentist Madrid expat guide 2026": los resultados citables son Expatica, SpainMadeSimple.com/english-speaking-dentists-madrid/, Bookimed (agregador de turismo dental), Yelp Madrid y guías propias de competidores (Clínica Aya, Calma Estudio, 32Dental); Debod no aparece en ninguna

**Recomendación:** Alta priorizada: (1) Bookimed — agregador de clínicas dentales de España que las IAs citan para turismo dental; (2) SpainMadeSimple, directorio de dentistas English-speaking; (3) perfil Yelp de la clínica; (4) contactar Expatica para inclusión en su guía de dental care. Todo con el NAP unificado del hallazgo 2

**Impacto:** ChatGPT y Perplexity construyen sus recomendaciones de "dentist in Madrid for foreigners" desde estas fuentes de terceros; estar listado es la vía más directa a aparecer en la respuesta generada

**Confirmación cruzada** — el mismo hueco fue detectado independientemente por:
- *Plataformas IA*: Sin validación de terceros enlazada: Perplexity no encuentra señales de comunidad — Plan off-site: completar/reclamar perfiles en Doctoralia y Top Doctors para ambos doctores, mantener flujo de reseñas recientes en Google (las >12 meses pierden peso), y participar con cuenta identificada de la clínica e…

### F8.58 · Cero menciones en Reddit y foros de expats, fuente principal de Perplexity para recomendaciones locales

**Severidad:** 🟡 Baja · **Tipo:** nuevo · **Esfuerzo:** M (1–2 días) · **Dimensión:** GEO / IAs

**Evidencia:** Búsqueda site:reddit.com "dentist Madrid recommendation english speaking" → sin resultados que mencionen Debod; tampoco aparece en la búsqueda general de marca fuera de sus propios perfiles sociales

**Recomendación:** Programa ético de presencia en comunidades: monitorizar r/Madrid, r/askspain, r/expats y foros de expats (búsquedas guardadas de "dentist Madrid"); responder desde cuenta identificada como clínica solo cuando se pida recomendación, e invitar a pacientes internacionales reales satisfechos a compartir su experiencia si lo desean. Prohibido fabricar reseñas o astroturfing (riesgo de ban y de sanción sanitaria)

**Impacto:** Reddit es una de las fuentes más citadas por Perplexity y ChatGPT search para consultas de recomendación local; una mención orgánica genuina vale más que cualquier optimización on-page para este canal

### F8.59 · La entidad Debod no existe en Wikidata ni en ningún grafo de conocimiento público

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Wikidata es la fuente de resolución de entidades más barata que existe: alimenta el Knowledge Graph de Google y los datasets de entrenamiento y grounding de los LLMs. Ningún hallazgo cubre la presencia en grafos de conocimiento; todos los de 'entidad débil' se limitan al sameAs del schema propio. Es una tarde de trabajo, gratis y permanente.

**Recomendación:** Crear un ítem de Wikidata para 'Debod Dental Clinic' (instancia de: clínica dental; sede: Madrid; sitio web oficial; coordenadas; fecha de fundación) y para el Dr. Víctor Guerrero como profesional (con nº colegiado COEM como identificador externo si procede). Después añadir la URL de Wikidata al array sameAs del nodo #clinic en src/data/seo.js. No intentar Wikipedia (no cumpliría notabilidad y el borrado dañaría más que ayudar).

### F8.60 · Ausencia total en el ecosistema Google multimedia: sin YouTube ni VideoObject

**Severidad:** 🟡 Baja · **Tipo:** nuevo · **Esfuerzo:** L (semanas) · **Dimensión:** Plataformas IA

**Evidencia:** grep de 'youtube' en src/data/seo.js, Footer.jsx e index.html: 0 resultados; public/videos/ existe pero ningún schema VideoObject se genera en seo.js (no aparece en los @type detectados).

**Recomendación:** Crear canal de YouTube de la clínica con 3-5 vídeos cortos reales (tour de la clínica, explicación de tratamiento por cada doctor), enlazarlo en sameAs y marcar los vídeos ya alojados en public/videos/ con schema VideoObject en las páginas donde se reproducen.

**Impacto:** Gemini pondera fuertemente la presencia en el ecosistema Google (YouTube); el contenido multiformato también alimenta el Knowledge Graph y los paquetes de vídeo en resultados locales.

**Archivos:** `src/data/seo.js`, `index.html`, `public/videos/`

### F8.61 · Cero datos propios publicables: la clínica no genera ningún dato citable por prensa ni por IAs

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Los LLMs y los periodistas citan a quien publica números originales, no a quien repite contenido. Un dato como 'el 34% de nuestros pacientes internacionales viene de Reino Unido' es citable en cualquier listicle de dental tourism y convierte a Debod en fuente primaria. Ningún hallazgo cubre la creación de datos propios, y es el vector de digital PR más barato para una clínica pequeña.

**Recomendación:** Publicar una página anual de 'Datos de la clínica' con datos operativos agregados y verificables que la clínica sí posee: países de origen de pacientes internacionales, tratamientos más solicitados por trimestre, tiempo medio hasta primera cita, % de pacientes atendidos en inglés. Marcarla con Dataset schema y enlazarla desde llms.txt. Estrictamente operativo, nunca resultados clínicos ni tasas de éxito (YMYL/publicidad sanitaria).

### F8.62 · Sin estrategia de menciones expertas: los doctores no aparecen como fuente en prensa ni podcasts citables

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Los hallazgos existentes detectan la ausencia en listicles y Reddit, pero ninguno propone el mecanismo para generar menciones nuevas. Las citas en medios con autoridad son la señal E-E-A-T que ni el schema ni el contenido on-site pueden fabricar, y son exactamente lo que Perplexity y ChatGPT recuperan al evaluar si una clínica es 'reputable'.

**Recomendación:** Posicionar al Dr. Guerrero (nº colegiado COEM ya publicado) como fuente experta: darse de alta en plataformas de peticiones de fuentes para periodistas españoles, ofrecer 2-3 pitches estacionales a medios de salud madrileños (ej. blanqueamiento antes de bodas, urgencias en verano) y buscar 1-2 entrevistas en podcasts de salud o de expats en Madrid. Cada mención conseguida se añade al sameAs/subjectOf del Person schema del doctor en src/data/seo.js.

### F8.63 · El funnel de turismo dental ignora el mercado francés: sin ninguna página fr ni hreflang fr

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Francia es el mayor emisor europeo de turismo dental hacia España (los precios franceses de implantología duplican los españoles) y Madrid tiene vuelo directo desde 6 ciudades francesas. Toda la inversión de turismo dental existente (8 landings) compite en el saturado mercado EN mientras el hueco FR está vacío. Ningún hallazgo menciona idiomas más allá de ES/EN.

**Recomendación:** Crear 2-3 landings piloto en francés (implants dentaires Madrid, facettes dentaires, tourisme dentaire Espagne) reutilizando la estructura de src/data/dentalTourism.js, con hreflang fr añadido en src/components/Hreflang.jsx y en scripts/gen-sitemap.mjs (hoy hardcodeados a es/en, líneas 21-23 y 33-35 respectivamente), y traducción revisada por humano. Medir 3 meses antes de ampliar. Solo si la clínica puede atender en francés o con intérprete: indicarlo honestamente en la página.

### F8.64 · Sin auditoría de accesibilidad WCAG: obligación legal europea vigente y señal de calidad que Google mide vía experiencia de página

**Severidad:** propuesta del crítico de completitud · **Tipo:** nuevo

**Por qué:** Ningún hallazgo de las 7 dimensiones toca accesibilidad. Para un sitio sanitario es doble riesgo: legal (EAA/Ley 11/2023 en España) y de negocio (pacientes mayores, el segmento principal de implantología, son los más afectados por mal contraste y formularios sin labels). Además el HTML accesible es el que mejor parsean los extractores de los LLMs.

**Recomendación:** Ejecutar una auditoría WCAG 2.2 AA sobre el sitio (axe-core o Lighthouse en CI sobre dist/): contraste del tema oscuro (html class='dark' por defecto en index.html), foco visible en la navegación, labels de los formularios de cita, alt de las imágenes de tratamientos y equipo, y skip-link. El European Accessibility Act aplica desde junio de 2025 a servicios digitales de consumo en la UE; documentar la conformidad en una página de declaración de accesibilidad enlazada en el footer.

---

## Verificación por fase

- **F1:** `npm run build:prerender` exit 0; en vivo `deboddentalclinic.com/nosotros/` responde 200 directo (sin 307); `grep -c "<title>" dist/**/index.html` = 1 por página; llms.txt con NAP correcto.
- **F2:** validar 5 páginas muestra en validator.schema.org y Google Rich Results Test: 0 errores, 1 solo nodo `#clinic`, doctores con @id único referenciado desde Article.author.
- **F3:** Bing Webmaster Tools verificado e IndexNow respondiendo 200; llms.txt cubre ES+EN; preguntar a ChatGPT/Perplexity "english speaking dentist in Madrid" y comprobar si cita la web (baseline mensual).
- **F4:** PageSpeed Insights móvil ≥ 90 en home y una landing de turismo; sin CSS render-blocking de terceros.
- **F5:** script de grafo interno: 0 páginas huérfanas en routes.mjs; cada post con ≥2 enlaces a money pages.
- **F6:** nuevas páginas en sitemap + prerender, indexadas en GSC en <2 semanas; validator de datos pasa.
- **F7:** cada tratamiento con revisor visible + reviewedBy en schema; 0 posts <500 palabras; fuentes con enlace saliente a organismo oficial.
- **F8:** GBP con ≥2 posts/mes y 100% reseñas respondidas <72h; alta verificada en Doctoralia/Top Doctors/Bing Places/Apple Business Connect; entidad en Wikidata.

## Dependencias que necesita aportar la clínica

- Acceso a Vercel (dominio primario), Google Search Console, Bing Webmaster Tools y Google Business Profile.
- Nº de registro sanitario del centro (CAM) para el Aviso Legal (F7).
- Entidad financiera y TAE representativa para la página de financiación (pendiente de fases anteriores).
- Fotos reales de clínica/equipo para og:image propias (F4) y sustituir stock de Unsplash.
- Decisión sobre AggregateRating: mantener solo con reseñas de primera parte o retirarlo (F2, ítem 60).
- Revisión clínica humana de los 23 tratamientos EN marcados `pending-human` (F7).
