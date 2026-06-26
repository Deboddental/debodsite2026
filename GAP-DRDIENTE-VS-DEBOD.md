# Análisis de brechas: DrDiente vs Debod

**Fecha:** 2026-06-26 · **Objetivo:** identificar TODO lo que DrDiente (alto alcance) tiene y Debod no, priorizado por impacto en alcance/tráfico.

**Total de brechas: 74** — 🔴 32 alto impacto · 🟠 34 medio · 🟡 8 bajo.

---

## Resumen ejecutivo — los mayores drivers de alcance que faltan

1. **Volumen de blog 17x inferior (9 vs 153 posts)** — _Contenido y Blog_ · esfuerzo: alto
2. **Posts ~3x más cortos (2.367 vs 7.586 caracteres)** — _Contenido y Blog_ · esfuerzo: medio
3. **Sin FAQPage embebido dentro de los posts del blog** — _Contenido y Blog_ · esfuerzo: bajo
4. **Cero enlazado interno dentro del cuerpo de los posts** — _Contenido y Blog_ · esfuerzo: bajo
5. **Cobertura de temas de cola larga muy estrecha** — _Contenido y Blog_ · esfuerzo: alto
6. **Sin contenido internacional/inglés para turismo dental (versión Madrid)** — _Contenido y Blog_ · esfuerzo: alto
7. **No existe sistema i18n (LanguageContext/t) en todo el sitio** — _Internacionalización (inglés/turismo)_ · esfuerzo: medio
8. **Sin landings en inglés (rutas EN-only) para turismo dental internacional** — _Internacionalización (inglés/turismo)_ · esfuerzo: alto
9. **Sin etiquetas hreflang (alternate es/en/x-default) en ninguna URL** — _Internacionalización (inglés/turismo)_ · esfuerzo: bajo
10. **Sin página/funnel de turismo dental** — _Internacionalización (inglés/turismo)_ · esfuerzo: medio
11. **routes.mjs (fuente única de rutas) no incluye rutas/idioma EN para sitemap+prerender** — _Internacionalización (inglés/turismo)_ · esfuerzo: bajo
12. **Páginas de barrio/distrito (geo-landings) inexistentes** — _Páginas y landings_ · esfuerzo: medio
13. **Página 'dentista cerca de mí' (intent de proximidad) ausente** — _Páginas y landings_ · esfuerzo: bajo
14. **Página de Precios transparentes con schema de oferta inexistente** — _Páginas y landings_ · esfuerzo: medio
15. **Landing de conversión dedicada (tipo 'agenda') con formulario de lead ausente** — _Páginas y landings_ · esfuerzo: medio
16. **Sin schema de precios (Offer/AggregateOffer/PriceSpecification)** — _SEO/Schema/GEO técnico_ · esfuerzo: medio
17. **Cero AggregateRating en páginas de servicio/tratamiento/home** — _SEO/Schema/GEO técnico_ · esfuerzo: bajo
18. **hreflang totalmente ausente (sin estrategia internacional/turismo dental)** — _SEO/Schema/GEO técnico_ · esfuerzo: alto
19. **Sitemap a escala mínima (~58 URLs) y con home duplicada** — _SEO/Schema/GEO técnico_ · esfuerzo: medio
20. **Sin landings de intención local por barrio de Madrid** — _SEO/Schema/GEO técnico_ · esfuerzo: medio
21. **Sin contenedor GTM ni ningún sistema de medición cargado** — _Conversión, tracking y analítica_ · esfuerzo: medio
22. **Sin Meta Pixel ni Meta CAPI (Conversions API) activos** — _Conversión, tracking y analítica_ · esfuerzo: medio
23. **Sin GA4 ni medición de tráfico/comportamiento** — _Conversión, tracking y analítica_ · esfuerzo: bajo
24. **Sin conversión de Google Ads (gclid recogido pero nunca enviado)** — _Conversión, tracking y analítica_ · esfuerzo: medio
25. **Página de Citas sin ningún tracking de conversión** — _Conversión, tracking y analítica_ · esfuerzo: bajo
26. **Clics de WhatsApp y teléfono sin medición en toda la web** — _Conversión, tracking y analítica_ · esfuerzo: bajo
27. **Sin Google Consent Mode v2 (riesgo legal y pérdida de conversiones modeladas en UE)** — _Conversión, tracking y analítica_ · esfuerzo: medio
28. **Volumen de reseñas: 636 vs ~6** — _Features/UX y prueba social_ · esfuerzo: medio
29. **Pipeline automatizado de reseñas (build-reviews.mjs)** — _Features/UX y prueba social_ · esfuerzo: medio
30. **Páginas de aterrizaje de reseñas por tratamiento con schema AggregateRating propio** — _Features/UX y prueba social_ · esfuerzo: medio
31. **Fuentes cargadas con @import CSS render-blocking (mata LCP/Core Web Vitals)** — _Completitud (lo que se escapó)_ · esfuerzo: bajo
32. **Sin atributo sameAs (perfiles sociales/Doctoralia/Google Business) en NINGÚN schema** — _Completitud (lo que se escapó)_ · esfuerzo: bajo

---

## Detalle por impacto

### 🔴 ALTO impacto (32)

#### 1. Volumen de blog 17x inferior (9 vs 153 posts)
*Dimensión: Contenido y Blog · Esfuerzo: alto*

- **DrDiente tiene:** 153 posts vivos en src/data/posts-batch-1..6.js + posts-batch-daily.js, agregados en posts.js. Cubren 7 categorías y 14 meses de publicación continua.
- **Debod le falta:** Solo 9 posts en src/data/blog.js (export blogPosts). El blog es el mayor driver de tráfico orgánico de cola larga y Debod tiene una superficie indexable mínima: cada post es una página que puede rankear, y Debod tiene ~17x menos páginas de blog que el referente ganador.
- **➡️ Recomendación (Madrid):** Construir un backlog editorial de 60-120 posts en 6-9 meses para Madrid: bruxismo, implantes, ortodoncia invisible, blanqueamiento, endodoncia, periodoncia, urgencias dentales. Reutilizar la arquitectura de batches de DrDiente (posts-batch-N.js + index agregador) para escalar sin reescribir el render.
- _Evidencia:_ drdiente posts.js agrega 153 (batch1=16, daily=57, etc.); debod blog.js exporta blogPosts.length=9

#### 2. Posts ~3x más cortos (2.367 vs 7.586 caracteres)
*Dimensión: Contenido y Blog · Esfuerzo: medio*

- **DrDiente tiene:** Media de 7.586 caracteres de contenido por post (≈1.200+ palabras), con 3,1 H2, 5,9 H3, 3,9 listas y 14 <strong> de media por artículo: profundidad y estructura aptas para rankear consultas competitivas.
- **Debod le falta:** Media de 2.367 caracteres (~394 palabras) con 2-6 H2 y sin listas/negritas consistentes. El contenido fino rankea peor para términos competitivos y aporta poca cobertura semántica.
- **➡️ Recomendación (Madrid):** Ampliar cada post a 900-1.400 palabras con estructura rica (H2/H3, listas, negritas, mini-tabla comparativa cuando aplique). Adaptar al contexto Madrid (precios en €, barrios Argüelles/Moncloa/Chamberí, Seguridad Social vs privada).
- _Evidencia:_ debod2.mjs: AVG body chars=2367 (~394 palabras); rich.mjs drdiente: avg 7586 chars, h2:3.1 h3:5.9 ul:3.9 strong:14.0

#### 3. Sin FAQPage embebido dentro de los posts del blog
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** 148 de 153 posts incluyen sección de preguntas frecuentes dentro del contenido (patrón consistente de Q&A al final), reforzando captación de featured snippets y consultas conversacionales.
- **Debod le falta:** Aunque Debod tiene FAQPage en home/servicios/tratamientos, sus posts de blog NO emiten schema FAQPage propio: 7/9 mencionan FAQ en texto pero sin marcado estructurado por-post, perdiendo rich results en las páginas de mayor volumen long-tail.
- **➡️ Recomendación (Madrid):** Añadir un array faqs[] por post y emitir un nodo FAQPage adicional en blogPostSchema(post) junto al Article. Es bajo esfuerzo (campo de datos + schema) y alto retorno en snippets para 'cuánto cuesta', '¿duele?', 'cuánto dura'.
- _Evidencia:_ drdiente: 148/153 posts con contenido FAQ-ish; debod2.mjs: faq en texto Y en 7/9 pero blogPostSchema(post) en seo.js solo emite Article (sin FAQPage)

#### 4. Cero enlazado interno dentro del cuerpo de los posts
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** Media de 1,9 enlaces href por post (máx 12) dentro del contenido HTML, enlazando a servicios, agenda y otros posts: distribuye PageRank interno y crea topic clusters.
- **Debod le falta:** 0 enlaces internos en el cuerpo de los 9 posts (bodyMarkdown sin links a /servicios, /tratamientos ni a otros artículos). Solo hay relatedPosts al pie. Sin internal linking en el texto, el blog no transfiere autoridad a las landings de conversión ni construye clusters.
- **➡️ Recomendación (Madrid):** Insertar 2-4 enlaces internos contextuales por post hacia la landing de tratamiento/servicio relevante y hacia posts hermanos (ej. post de bruxismo → /tratamientos/ferulas-descarga y → post de dolor mandibular). Construir clusters por tema (estética, implantes, ortodoncia, salud).
- _Evidencia:_ debod2.mjs: intLinks:0 en los 9 posts; drdiente inspect.mjs: avg 1.9 href/post, max 12

#### 5. Cobertura de temas de cola larga muy estrecha
*Dimensión: Contenido y Blog · Esfuerzo: alto*

- **DrDiente tiene:** 83 de 153 títulos son long-tail de intención clara (preguntas, precio, '¿cuánto cuesta?', 'cerca de mí', 'mejor', 'cómo'), cubriendo el embudo informativo→transaccional en 7 categorías.
- **Debod le falta:** 9 posts cubren un puñado de temas (bruxismo, encías, limpieza, cáncer oral, carillas, aftas, muelas del juicio, ortodoncia invisible). Faltan masas enteras de long-tail: precios ('cuánto cuesta un implante en Madrid'), comparativas, urgencias, financiación, síntomas, post-operatorios.
- **➡️ Recomendación (Madrid):** Mapear keywords long-tail para Madrid y crear clusters: '¿cuánto cuesta [tratamiento] en Madrid?', '[tratamiento] precio Seguridad Social vs privado', 'síntomas de…', 'qué hacer si…', '[tratamiento] en Argüelles/Chamberí'. Priorizar intención transaccional+local.
- _Evidencia:_ drdiente freq.mjs: 83/153 títulos long-tail (precio/pregunta/ubicación); debod: 9 posts, temas dispersos

#### 6. Sin contenido internacional/inglés para turismo dental (versión Madrid)
*Dimensión: Contenido y Blog · Esfuerzo: alto*

- **DrDiente tiene:** 31 posts en inglés (lang:'en') orientados a turismo dental US→México, con categoría 'Dental Tourism' y landings asociadas, capturando tráfico internacional de alto valor.
- **Debod le falta:** 0 posts en inglés. El inventario confirma i18n=NINGUNO y hreflang=0. Madrid recibe turismo europeo/internacional y expatriados; no hay contenido EN que capte 'dentist in Madrid', 'dental clinic Madrid English-speaking', etc.
- **➡️ Recomendación (Madrid):** Crear un cluster EN para Madrid: 'English-speaking dentist in Madrid (Argüelles)', 'dental implants in Madrid for expats', 'cost of veneers in Madrid'. Combinar con hreflang ES/EN. Es el análogo directo del motor de turismo dental de DrDiente traducido a la demanda internacional de Madrid.
- _Evidencia:_ drdiente inspect.mjs lang:{es:122,en:31}; inventario debod i18n=NINGUNO, hreflang=0

#### 7. No existe sistema i18n (LanguageContext/t) en todo el sitio
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: medio*

- **DrDiente tiene:** src/i18n/LanguageContext.jsx: LanguageProvider con estado lang (es/en), persistencia en localStorage (clave drdiente_lang), y helper inline t(es,en) que devuelve la cadena activa. Permite migrar páginas a bilingüe de forma incremental sin duplicar componentes.
- **Debod le falta:** Cero infraestructura i18n. No hay carpeta src/i18n, ni Context, ni helper t(). Todo el copy está hardcodeado en español. Imposible servir una sola palabra en inglés sin duplicar páginas a mano.
- **➡️ Recomendación (Madrid):** Portar LanguageContext.jsx a debodsite2026/src/i18n/ (clave localStorage 'debod_lang', default 'es'). Idéntico patrón t(es,en). Habilita capturar tráfico internacional/UK/expats que busca 'dentist Madrid', 'english speaking dentist Madrid', mercado enorme e infraexplotado en Argüelles/Centro.
- _Evidencia:_ find src -iname '*i18n*' en debodsite2026 devuelve vacío; /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/i18n/LanguageContext.jsx vs ausencia total en debod

#### 8. Sin landings en inglés (rutas EN-only) para turismo dental internacional
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: alto*

- **DrDiente tiene:** 7 landings EN-only en App.jsx (EN_ONLY_ROUTES): /dental-implants-mexico-city, /cosmetic-dentistry-mexico, /all-on-4-mexico-city, /all-on-6-mexico-city, /veneers-mexico-city, /porcelain-veneers-mexico-city, /smile-design-mexico-city. Cada una con keyword 'tratamiento + ciudad' en la URL, capturando búsquedas de pacientes US/internacionales.
- **Debod le falta:** Cero rutas en inglés. Ningún slug tipo /dental-implants-madrid o /veneers-madrid. No se posiciona para ninguna query en inglés.
- **➡️ Recomendación (Madrid):** Crear 5-7 landings EN traduciendo el PATRÓN a Madrid: /dental-implants-madrid, /veneers-madrid, /smile-makeover-madrid, /all-on-4-madrid, /invisalign-madrid, /cosmetic-dentistry-madrid, /english-speaking-dentist-madrid. NO copiar datos de México: ajustar a precios EUR y comparativa de coste vs UK/Irlanda/Norte de Europa (turismo dental europeo).
- _Evidencia:_ grep 'english|/en/' en debod/src vacío; EN_ONLY_ROUTES en /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/App.jsx:76-84

#### 9. Sin etiquetas hreflang (alternate es/en/x-default) en ninguna URL
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** App.jsx (AppInner useEffect) inyecta hreflang self-referencial route-aware: rutas EN-only declaran ['en','x-default'], el resto ['es','en','x-default'], capturado por el prerenderer por ruta. Además páginas reviews añaden hreflang es-MX explícito.
- **Debod le falta:** Cero hreflang. Google no sabe que existen variantes de idioma ni a quién servir cada URL. Pérdida directa de elegibilidad en SERP internacional.
- **➡️ Recomendación (Madrid):** Replicar el useEffect route-aware de hreflang en debod: declarar hreflang='es-ES' / 'en' / 'x-default' apuntando a las URLs correctas (dominio debod). Como debod ya prerenderiza vía scripts/routes.mjs, el hreflang quedará capturado en el HTML estático igual que en DrDiente. Esfuerzo bajo, alto retorno SEO.
- _Evidencia:_ grep 'hreflang' en debod/src vacío; /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/App.jsx:96-104 (data-hreflang inyectado)

#### 10. Sin página/funnel de turismo dental
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: medio*

- **DrDiente tiene:** Página dedicada /turismo-dental (TurismoDental.jsx) + componente reutilizable components/turismo/VideoTestimonials.jsx que las landings EN incrustan con lang='en'. Es un embudo completo orientado al paciente que viaja.
- **Debod le falta:** No existe página de turismo dental ni componente equivalente. grep 'turismo|tourism' en debod/src vacío. No hay narrativa para el paciente que viaja a Madrid por tratamiento.
- **➡️ Recomendación (Madrid):** Crear página 'Dental tourism in Madrid' (EN) + variante ES /turismo-dental. Traducir el patrón: turismo europeo (UK/Irlanda/Escandinavia) que viene a Madrid por precio/calidad, en vez de US→México. Reusar VideoTestimonials con lang='en'.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/pages/TurismoDental.jsx y src/components/turismo/VideoTestimonials.jsx; grep turismo en debod vacío

#### 11. routes.mjs (fuente única de rutas) no incluye rutas/idioma EN para sitemap+prerender
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** El prerenderer genera HTML estático por ruta y captura el hreflang/lang inyectado, de modo que cada landing EN se prerenderiza con su lang='en' y hreflang correctos, indexable sin depender de JS.
- **Debod le falta:** scripts/routes.mjs es la fuente única de rutas para prerender+sitemap pero solo contiene rutas ES. Las futuras URLs EN no entrarían en sitemap ni se prerenderizarían (no serían indexables).
- **➡️ Recomendación (Madrid):** Añadir las nuevas rutas EN (/dental-implants-madrid, etc.) a scripts/routes.mjs para que entren automáticamente en prerender y sitemap. Ventaja de Debod: tiene fuente única de rutas, así que es trivial extenderla — algo que en DrDiente está más disperso.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/debodsite2026/scripts/routes.mjs (única fuente de rutas, solo ES) usada por prerender.mjs y validate-data.mjs

#### 12. Páginas de barrio/distrito (geo-landings) inexistentes
*Dimensión: Páginas y landings · Esfuerzo: medio*

- **DrDiente tiene:** 4 landings de barrio dedicadas con URL propia, H1 geolocalizado, FAQPage local, schema Dentist con GeoCoordinates y listado de colonias vecinas: /dentista-polanco (DentistaPolanco.jsx, 28KB), /dentista-roma-norte (DentistaRomaNorte.jsx, 28KB), /dentista-cdmx (city-level, schema con medicalSpecialty) y /dentista-cerca-de-mi (intent 'cerca de mí' con 2 zonas y geo lat/long).
- **Debod le falta:** Cero páginas de barrio. En router.jsx solo existe /ubicaciones/ (su propia dirección en Argüelles) y landings de ESPECIALIDAD (dentista-de-implantes-arguelles-madrid-espana, etc.), pero ninguna captura la búsqueda local 'dentista en Chamberí / Moncloa / Chamartín / Centro / Malasaña'. No hay GeoCoordinates por zona ni listado de barrios vecinos.
- **➡️ Recomendación (Madrid):** Crear 4-6 landings de barrio de Madrid colindantes con Argüelles, una por URL (/dentista-arguelles, /dentista-moncloa, /dentista-chamberi, /dentista-centro-madrid, /dentista-chamartin), cada una con H1 'Dentista en {barrio}', FAQPage local (¿dónde está?, ¿urgencias?, ¿cuánto cuesta la primera visita?), schema Dentist con geo:GeoCoordinates reales de Ferraz 24 y listado de barrios/calles vecinas y bocas de metro (Argüelles L3/L4, Ventura Rodríguez L3, Plaza España). NO copiar Polanco/Roma.
- _Evidencia:_ drdiente-website-ref/src/pages/DentistaPolanco.jsx (faqs + trust + colonias Anzures/Granada/Nuevo Polanco), DentistaCerca.jsx (schema con geo: GeoCoordinates lat 19.43 / -99.19), DentistaCDMX.jsx (schema medicalSpecialty). En debodsite2026/src/router.jsx solo path 'ubicaciones/' y 'ubicaciones/citas-arguelles-madrid/'.

#### 13. Página 'dentista cerca de mí' (intent de proximidad) ausente
*Dimensión: Páginas y landings · Esfuerzo: bajo*

- **DrDiente tiene:** /dentista-cerca-de-mi (DentistaCerca.jsx, 21KB) específica para la query de proximidad 'cerca de mí', con bloque de zonas atendidas, distancias, colonias por sucursal, FAQ '¿dónde está el dentista más cercano?', y schema con GeoCoordinates por sede.
- **Debod le falta:** No existe ninguna página orientada a la intención 'dentista cerca de mí' / 'clínica dental cerca de mí Madrid', una de las búsquedas locales de mayor volumen y máxima intención de conversión en móvil.
- **➡️ Recomendación (Madrid):** Crear /dentista-cerca-de-mi (o /clinica-dental-cerca-de-mi-madrid) con H1 de proximidad, mapa embebido, lista de barrios y bocas de metro a X minutos de Ferraz 24, FAQ de urgencias y horario, y schema Dentist con GeoCoordinates de Argüelles. Esfuerzo bajo: una sola plantilla geolocalizada.
- _Evidencia:_ drdiente-website-ref/src/pages/DentistaCerca.jsx (zonas[], colonias[], FAQ '¿Tienen dentista de urgencias cerca de mí?', schema GeoCoordinates). Ausente en debodsite2026 router.jsx.

#### 14. Página de Precios transparentes con schema de oferta inexistente
*Dimensión: Páginas y landings · Esfuerzo: medio*

- **DrDiente tiene:** /precios (Precios.jsx, 12KB) — página dedicada con 9 categorías de tratamiento, precios 'Desde' por servicio, notas por ítem, H1 'Sin sorpresas. Sin letra pequeña.', disclaimer y title SEO propio. Captura las búsquedas '{tratamiento} precio' y 'cuánto cuesta {tratamiento}'.
- **Debod le falta:** No hay página de precios ni tarifas. Solo aparece la frase suelta 'Primera visita diagnóstica sin coste' en Contacto.jsx:341. Pierde todo el tráfico de búsquedas de precio ('implantes dentales precio Madrid', 'cuánto cuesta Invisalign Madrid'), que tienen alto volumen y alta intención.
- **➡️ Recomendación (Madrid):** Crear /precios con tabla por categorías y precios 'Desde €' adaptados al mercado de Madrid (NO copiar cifras MXN), nota de financiación enlazando a /financiacion, y añadir schema Offer/PriceSpecification por tratamiento para elegibilidad en rich results. Reutilizar la estructura de categorías de Precios.jsx.
- _Evidencia:_ drdiente-website-ref/src/pages/Precios.jsx (categories[] con Odontología General, Estética, Implantología, Ortodoncia, Endodoncia... precios por ítem). En debodsite2026 grep de precio/tarifa/coste solo da Contacto.jsx:341.

#### 15. Landing de conversión dedicada (tipo 'agenda') con formulario de lead ausente
*Dimensión: Páginas y landings · Esfuerzo: medio*

- **DrDiente tiene:** /agenda-roma (AgendaRoma.jsx, 26KB) — landing de conversión pura: formulario multi-campo (nombre, email, teléfono con country code, servicio, cómo nos conoció, mensaje), envío a CRM + URL de WhatsApp prerrellenada con los datos, barra CTA fija en móvil que se oculta al llegar al form (IntersectionObserver), title/desc propios.
- **Debod le falta:** Debod tiene /ubicaciones/citas-arguelles-madrid/ (Citas.jsx) pero es solo una página de MÉTODOS de contacto (botones WhatsApp/teléfono/email), SIN formulario de captación, sin envío a CRM, sin WhatsApp prerrellenado ni CTA fija móvil. No existe una landing de conversión optimizada para tráfico de campañas/orgánico de alta intención.
- **➡️ Recomendación (Madrid):** Crear /pedir-cita (o /agenda-arguelles) como landing de conversión con formulario de lead, envío a su CRM/email y WhatsApp prerrellenado (wa.me/34689104714 con los campos), más barra CTA fija en móvil. Es la página que convierte el tráfico que ya llega; impacto directo en captación además de alcance.
- _Evidencia:_ drdiente-website-ref/src/pages/AgendaRoma.jsx (useState(formData), buildWhatsappUrl con wa.me + datos, formObserver para CTA fija). debodsite2026/src/pages/Citas.jsx solo tiene href wa.me estático (linea 14) y bloques de método de contacto.

#### 16. Sin schema de precios (Offer/AggregateOffer/PriceSpecification)
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: medio*

- **DrDiente tiene:** Emite Offer + AggregateOffer + PriceSpecification con priceCurrency/lowPrice/highPrice en 7 landings (CosmeticDentistryMexico, AllOn6, Veneers, PorcelainVeneers, SmileDesign, AllOn4, DentalImplants). Esto activa rich snippets de precio en Google y da a ChatGPT/Perplexity datos de coste citables, principal gancho de captación.
- **Debod le falta:** 0 ocurrencias de Offer/AggregateOffer/PriceSpecification/priceCurrency en todo src. treatments.js y services.js no exponen precio en schema. La página /precios (si existe) no emite JSON-LD de Offer.
- **➡️ Recomendación (Madrid):** Crear una factory offerSchema()/priceSpecSchema() en src/data/seo.js y adjuntar Offer con priceCurrency:'EUR', priceRange y lowPrice/highPrice 'desde X €' a cada tratamiento/servicio y a la página de precios. Usar precios reales de Madrid (no MXN). Envolver MedicalProcedure con un Offer o un Product/Service con AggregateOffer para disparar rich snippet de precio.
- _Evidencia:_ grep en drdiente-ref: 6x lowPrice, 6x highPrice, 7x priceCurrency, 1x AggregateOffer, 1x PriceSpecification en src/pages/*MexicoCity.jsx; Debod: 1x 'offer' suelto, 0 PriceSpecification/AggregateOffer en debodsite2026/src

#### 17. Cero AggregateRating en páginas de servicio/tratamiento/home
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: bajo*

- **DrDiente tiene:** 14 bloques aggregateRating/AggregateRating distribuidos (reviews por tratamiento + LocalBusiness), generando estrellas en SERP que disparan CTR.
- **Debod le falta:** Solo 1 AggregateRating en todo el sitio (probablemente en /resenas/). Ni home, ni los 8 servicios, ni los 23 tratamientos llevan AggregateRating, así que no salen estrellas en resultados.
- **➡️ Recomendación (Madrid):** Añadir aggregateRating (ratingValue + reviewCount, datos reales de Google Reviews de la clínica de Argüelles) al nodo MedicalClinic/LocalBusiness del @graph en home y replicarlo en cada servicePageSchema/treatmentPageSchema. Es bajo esfuerzo y de los mayores multiplicadores de CTR.
- _Evidencia:_ grep: drdiente 14x aggregateRating/14x AggregateRating; debod 1x aggregateRating/1x AggregateRating, 7x ratingValue, 1x reviewCount en src

#### 18. hreflang totalmente ausente (sin estrategia internacional/turismo dental)
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: alto*

- **DrDiente tiene:** Inyecta hreflang self-referencial es/en/x-default en cada ruta (App.jsx) + hreflang es-MX en páginas de reviews, y tiene 14 landings EN para turismo dental US→México. Capta tráfico internacional en buscador.
- **Debod le falta:** 0 hreflang, 0 alternates, ninguna landing en inglés. Madrid recibe turismo dental europeo/internacional (expats, UK, etc.) que se está perdiendo por completo en búsqueda en inglés.
- **➡️ Recomendación (Madrid):** Replicar el patrón de DrDiente al contexto Madrid: crear landings EN ('dentist in Madrid', 'dental implants Madrid', 'English-speaking dentist Arguelles', 'dental tourism Spain') bajo /en/, e inyectar hreflang es-ES/en/x-default self-referencial en cada ruta. Es el equivalente Madrid del turismo dental US→México de DrDiente.
- _Evidencia:_ grep hreflang/alternate: drdiente App.jsx:90-103 (es/en/x-default) + 3 páginas Reviews; debod: '=== Debod hreflang ===' devuelve vacío (0 resultados)

#### 19. Sitemap a escala mínima (~58 URLs) y con home duplicada
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: medio*

- **DrDiente tiene:** vite-plugin-sitemap genera staticRoutes + 154 posts de blog ≈ 190 URLs con hostname canónico; el log confirma 'X pages + N blog posts = total URLs'. Más URLs indexables = más superficie de captación.
- **Debod le falta:** dist/sitemap.xml tiene solo 58 <loc> y, además, la home aparece DUPLICADA (misma URL https://deboddentalclinic.com/ con lastmod idéntico repetida), lo que diluye señales. Con solo 27 posts vs 154, la superficie indexable es ~3x menor.
- **➡️ Recomendación (Madrid):** 1) Corregir el bug de home duplicada en el generador de sitemap de Debod. 2) Escalar el blog (ver gap de volumen de contenido). 3) Confirmar que cada post/tratamiento/servicio entra una sola vez con su URL canónica. Cada URL nueva indexable es superficie directa de tráfico.
- _Evidencia:_ drdiente prerender.mjs:67 '${staticRoutes.length} pages + ${blogSlugs.length} blog posts'; debod dist/sitemap.xml = 58 locs con primeras 2 entradas idénticas (home repetida); blog.js debod = 27 slugs vs drdiente posts-batch-* = 154

#### 20. Sin landings de intención local por barrio de Madrid
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: medio*

- **DrDiente tiene:** Páginas 'dentista-cdmx', 'dentista-polanco', 'dentista-roma-norte', 'dentista-cerca-de-mi' y 'agenda-roma': captura búsquedas geo-locales de alta intención por barrio.
- **Debod le falta:** No hay equivalentes geo-locales de Madrid (no se detectan rutas tipo 'dentista-arguelles', 'dentista-chamberi', 'dentista-moncloa', 'dentista-centro', 'dentista-cerca-de-mi'). Se pierde el tráfico 'dentista + barrio' que es de máxima conversión.
- **➡️ Recomendación (Madrid):** Crear landings 'dentista-arguelles', 'dentista-chamberi', 'dentista-moncloa', 'dentista-centro-madrid' y 'dentista-cerca-de-mi', cada una con su MedicalClinic+geo+areaServed del barrio y FAQ local. Es la traducción directa del patrón Polanco/Roma de DrDiente a barrios de Madrid.
- _Evidencia:_ drdiente prerender.mjs rutas: /dentista-cdmx, /dentista-polanco, /dentista-roma-norte, /dentista-cerca-de-mi, /agenda-roma; debod prerender usa getAllRoutes() sin equivalentes geo por barrio

#### 21. Sin contenedor GTM ni ningún sistema de medición cargado
*Dimensión: Conversión, tracking y analítica · Esfuerzo: medio*

- **DrDiente tiene:** Carga en index.html un contenedor GTM server-side (stape: ss.clinicadrdiente.com, ID 5tefqhrfky) que dispara y enruta TODA la medición: GA4, Google Ads, Meta, TikTok.
- **Debod le falta:** index.html NO carga GTM ni ningún tag manager (grep gtm/googletagmanager/gtag/fbq = 0). Los push a window.dataLayer existen pero nadie los escucha: la medición está completamente a oscuras.
- **➡️ Recomendación (Madrid):** Crear contenedor GTM (idealmente server-side en stape/GTM-SS bajo subdominio propio p.ej. ss.deboddentalclinic.com) y cargarlo en index.html. Es el prerequisito de TODO lo demás: sin él, los eventos generate_lead ya programados no llegan a ningún sitio.
- _Evidencia:_ drdiente-website-ref/index.html (snippet stape ss.clinicadrdiente.com); debodsite2026/index.html grep gtm/gtag/fbq devuelve 0; src/main.jsx solo inicializa dataLayer vacío

#### 22. Sin Meta Pixel ni Meta CAPI (Conversions API) activos
*Dimensión: Conversión, tracking y analítica · Esfuerzo: medio*

- **DrDiente tiene:** Toda la infraestructura de dedup Pixel<->CAPI: external_id, fbp, fbc, event_id por evento, user_data hasheado, relayado server-side vía GTM-SS a Meta CAPI con client_ip y user_agent.
- **Debod le falta:** Debod recoge fbp/fbc/external_id/event_id e incluso hashea email/phone/nombre con SHA-256 en el dataLayer, pero NO hay Pixel de Meta cargado ni endpoint CAPI: ni un solo evento llega a Meta. Imposible optimizar campañas de Facebook/Instagram ni hacer retargeting.
- **➡️ Recomendación (Madrid):** Activar Meta Pixel vía el GTM nuevo + tag de CAPI server-side reutilizando el event_id/fbp/fbc que el código YA produce. El front-end ya está listo (mejor que DrDiente: hashea PII); solo falta el destino. Clave para escalar captación en Meta en Madrid.
- _Evidencia:_ debodsite2026/src/pages/Contacto.jsx (genera event_id, hashea em/ph/fn/ln, push user_data con fbp/fbc) pero index.html sin connect.facebook/fbq; api/lead.js recibe fbp/fbc/event_id pero no los reenvía a CAPI

#### 23. Sin GA4 ni medición de tráfico/comportamiento
*Dimensión: Conversión, tracking y analítica · Esfuerzo: bajo*

- **DrDiente tiene:** @vercel/analytics (<Analytics/> en App.jsx) + GA4 vía GTM. Sabe qué páginas/landings/posts traen tráfico y convierten.
- **Debod le falta:** Cero analítica de audiencia: no hay @vercel/analytics en package.json ni GA4. No se puede saber qué páginas atraen visitas, qué fuentes funcionan, ni el embudo. Sin medición no se puede priorizar el trabajo de alcance.
- **➡️ Recomendación (Madrid):** Instalar @vercel/analytics (1 línea, sin coste) Y configurar GA4 vía el GTM nuevo respetando consentimiento. Es el esfuerzo más bajo con retorno inmediato: dirige dónde invertir el esfuerzo de SEO/contenido.
- _Evidencia:_ drdiente package.json @vercel/analytics ^2.0.1 + App.jsx:159 <Analytics/>; debod package.json sin paquete de analytics; tracking referenciado en 19 archivos (debod) vs 36 (drdiente)

#### 24. Sin conversión de Google Ads (gclid recogido pero nunca enviado)
*Dimensión: Conversión, tracking y analítica · Esfuerzo: medio*

- **DrDiente tiene:** Captura gclid/gbraid/wbraid, lo manda a GHL y el workflow sube la conversión a Google Ads (smart bidding alimentado con conversiones reales).
- **Debod le falta:** Debod captura gclid/gbraid/wbraid en tracking.js y lo pasa a /api/lead, pero no hay tag de conversión de Google Ads ni envío offline: Google Ads no recibe ninguna conversión, así que Smart Bidding optimiza a ciegas y el CPA se dispara, limitando cuánto tráfico de pago se puede comprar de forma rentable.
- **➡️ Recomendación (Madrid):** Añadir tag de conversión de Google Ads (Enhanced Conversions con el email/phone ya hasheados) en el GTM nuevo, y/o subida offline desde GHL. Habilita Smart Bidding eficiente para captar tráfico de búsqueda en Madrid (p.ej. 'dentista Argüelles/Chamberí').
- _Evidencia:_ debodsite2026/src/utils/tracking.js (UTM_KEYS+CLICK_IDS incl. gclid/gbraid/wbraid); api/lead.js payload.gclid presente pero sin tag de Google Ads en cliente ni Enhanced Conversions

#### 25. Página de Citas sin ningún tracking de conversión
*Dimensión: Conversión, tracking y analítica · Esfuerzo: bajo*

- **DrDiente tiene:** Página de agenda dedicada (AgendaRoma.jsx) que dispara generate_lead a dataLayer con event_id y postea a /api/lead, midiendo cada intento de cita.
- **Debod le falta:** Citas.jsx (la página principal de 'pedir cita') solo tiene enlaces wa.me y tel: sin disparar NINGÚN evento: ni generate_lead, ni clic WhatsApp, ni clic teléfono. La vía de conversión más importante es invisible para la analítica.
- **➡️ Recomendación (Madrid):** Instrumentar Citas.jsx: disparar evento dataLayer (p.ej. 'click_whatsapp' / 'click_call' con event_id) en cada CTA. Es de bajo esfuerzo y descubre cuántas conversiones reales salen por WhatsApp/teléfono, hoy completamente sin medir.
- _Evidencia:_ debodsite2026/src/pages/Citas.jsx (101 líneas; solo href wa.me/34689104714 y tel:+34914476225; grep generate_lead/api/lead/dataLayer/event_id = vacío)

#### 26. Clics de WhatsApp y teléfono sin medición en toda la web
*Dimensión: Conversión, tracking y analítica · Esfuerzo: bajo*

- **DrDiente tiene:** wa.me/WhatsApp instrumentado en 10+ componentes (WhatsAppButton, CTASection, FAQ, landings) y 12 archivos con tel: dentro del sistema de tracking de 36 archivos.
- **Debod le falta:** WhatsAppWidget y CTAs de teléfono existen pero no emiten eventos al dataLayer al hacer clic. Solo 4 archivos con tel: (vs 12) y ningún evento de clic. En una clínica donde la mayoría de conversiones ocurren por WhatsApp/llamada, esto deja la mayor parte del embudo sin medir y sin optimizar para Ads.
- **➡️ Recomendación (Madrid):** Envolver cada CTA de WhatsApp y teléfono con un handler que haga dataLayer.push({event:'contact_whatsapp'/'contact_call', event_id}). Permite contarlos como conversiones en Ads y entender qué páginas generan contactos directos.
- _Evidencia:_ debod WhatsAppWidget.jsx, RootLayout.jsx; tel: en 4 archivos (vs drdiente 12); ningún wrapper que haga dataLayer.push en onClick de wa.me/tel:

#### 27. Sin Google Consent Mode v2 (riesgo legal y pérdida de conversiones modeladas en UE)
*Dimensión: Conversión, tracking y analítica · Esfuerzo: medio*

- **DrDiente tiene:** Opera en México, donde Consent Mode v2 no es obligatorio; su stack server-side igualmente recoge señal.
- **Debod le falta:** Debod tiene consent.js + ConsentBanner (granted/denied) pero NO implementa Google Consent Mode v2 (gtag('consent',...) con ad_storage/analytics_storage). En España/UE esto es obligatorio: sin él, ni Google Ads ni GA4 pueden recibir datos legalmente y se pierde el 'conversion modeling' que recupera conversiones de usuarios que rechazan cookies, reduciendo el volumen medido y el rendimiento de las campañas.
- **➡️ Recomendación (Madrid):** Implementar Consent Mode v2: estado por defecto 'denied' antes de GTM y actualizar a 'granted' desde ConsentBanner conectándolo al setConsent existente. Es requisito UE para que Google Ads/GA4 reciban datos y activen modelado de conversiones; sin esto el resto de la medición de pago es no conforme.
- _Evidencia:_ debodsite2026/src/utils/consent.js (solo flag local granted/denied); ConsentBanner.jsx existe; grep ad_storage/analytics_storage/gtag('consent' = 0 en todo el repo

#### 28. Volumen de reseñas: 636 vs ~6
*Dimensión: Features/UX y prueba social · Esfuerzo: medio*

- **DrDiente tiene:** 636 reseñas reales verificadas de Google en public/reviews/all.json (336 KB), todas 5 estrellas, mostradas en la web. La sección Testimonials del home muestra badge '5.0/5.0 · 700+ reseñas verificadas en Google' con logo de Google.
- **Debod le falta:** Solo ~6 reseñas hardcodeadas en src/data/reviews.js (el ratingSummary dice 197 pero el array real tiene 6 objetos). La prueba social mostrada es ínfima comparada con el reclamo de 197/190+, lo que resta credibilidad y volumen de contenido único indexable.
- **➡️ Recomendación (Madrid):** Exportar el máximo de reseñas reales del Google Business Profile de Debod (Argüelles, Madrid) y cargarlas en reviews.js / un JSON equivalente. Subir el conteo mostrado a docenas/cientos de reseñas verificadas para que el reclamo '+190' tenga respaldo visible y genere texto único indexable.
- _Evidencia:_ drdiente-website-ref/public/reviews/stats.json (total:636); debodsite2026/src/data/reviews.js (grep -c text: = 6, ratingSummary.reviewCount=197)

#### 29. Pipeline automatizado de reseñas (build-reviews.mjs)
*Dimensión: Features/UX y prueba social · Esfuerzo: medio*

- **DrDiente tiene:** Script scripts/build-reviews.mjs que ingiere un CSV de Outscraper (export de Google Reviews), lo parsea (RFC 4180), autodetecta columnas, clasifica por especialidad, y genera all.json, stats.json y archivos JSON/CSV por especialidad con promedios y conteos. Reproducible en cada deploy.
- **Debod le falta:** No hay pipeline. El workflow de Debod es copiar-pegar manualmente cada reseña desde Google Maps (documentado en el header de reviews.js), lo que limita el volumen a un puñado y no escala.
- **➡️ Recomendación (Madrid):** Portar build-reviews.mjs a Debod: ingerir un export (Outscraper u otro) de las reseñas reales de Google de Debod y generar JSON por tratamiento (implantes, ortodoncia invisible, diseño de sonrisa, rehabilitación). Esto desbloquea el volumen del gap anterior de forma sostenible y mantenible.
- _Evidencia:_ drdiente-website-ref/scripts/build-reviews.mjs (parseCSV, detectColumns, SPECIALTIES, stats.json); debodsite2026/src/data/reviews.js header 'copia desde Google Maps' manual

#### 30. Páginas de aterrizaje de reseñas por tratamiento con schema AggregateRating propio
*Dimensión: Features/UX y prueba social · Esfuerzo: medio*

- **DrDiente tiene:** 4 rutas dedicadas: /reviews (índice con tabs y paginación), /reviews/implantes-dentales, /reviews/diseno-de-sonrisa, /reviews/alineadores. Cada una con title/description/canonical/hreflang propios y JSON-LD Dentist+MedicalProcedure con AggregateRating (ratingValue/reviewCount) específico de esa especialidad. Son páginas indexables que capturan búsquedas tipo 'reseñas implantes [ciudad]'.
- **Debod le falta:** Solo una página /resenas/ genérica. No hay landings de reseñas por tratamiento, ni AggregateRating segmentado por especialidad, ni captura de la intención de búsqueda 'opiniones/reseñas + tratamiento'.
- **➡️ Recomendación (Madrid):** Crear /resenas/implantes, /resenas/ortodoncia-invisalign, /resenas/diseno-de-sonrisa, /resenas/rehabilitacion en Debod, cada una con sus reseñas filtradas y JSON-LD Dentist+AggregateRating propio (areaServed: Madrid/Argüelles, addressCountry ES). Cada landing es una nueva URL indexable de alta intención comercial.
- _Evidencia:_ drdiente-website-ref/src/App.jsx L138-141 (4 rutas /reviews/*); ReviewsImplantes.jsx (buildSchema con aggregateRating por especialidad); debodsite2026/src/pages/Resenas.jsx (página única)

#### 31. Fuentes cargadas con @import CSS render-blocking (mata LCP/Core Web Vitals)
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** index.html carga las fuentes con <link rel=preconnect> + <link href=fonts.googleapis.com/css2?...&display=optional>. 'display=optional' evita el reflow de texto (FOIT/CLS) y el <link> en el <head> permite que el navegador descubra y precargue la hoja de fuentes en paralelo, protegiendo el LCP.
- **Debod le falta:** src/index.css carga 3 familias completas (Outfit 7 pesos, Cormorant 8 variantes ital, Plus Jakarta 5 pesos) vía @import url(fonts.googleapis.com...&display=swap) en la PRIMERA línea del CSS. El @import dentro de CSS es render-blocking en cadena (el navegador descarga el CSS, lo parsea, y SÓLO ENTONCES descubre el @import y va a por las fuentes), retrasando el First Paint y el LCP. Además 'display=swap' provoca CLS por reflow. Core Web Vitals es factor de ranking de Google; un LCP lento hunde posiciones en móvil, justo donde se juega el tráfico local.
- **➡️ Recomendación (Madrid):** Mover las fuentes a <link rel=preload as=style> + <link rel=stylesheet> en el <head> de index.html (eliminar el @import del CSS), usar display=optional o swap con preload, y reducir el número de pesos/variantes cargados (Cormorant carga 16 variantes — cargar solo las usadas). Reduce LCP en móvil, factor directo de ranking.
- _Evidencia:_ debodsite2026/src/index.css línea 1: @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300..900&family=Cormorant+Garamond:ital,wght...&family=Plus+Jakarta+Sans:wght@300..700&display=swap'); vs drdiente index.html: <link ...display=optional>

#### 32. Sin atributo sameAs (perfiles sociales/Doctoralia/Google Business) en NINGÚN schema
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** Aunque DrDiente tampoco lo expone en un grep simple, su entidad MedicalOrganization/LocalBusiness está consolidada; el patrón ganador para clínicas es declarar sameAs hacia Google Business Profile, Doctoralia, Instagram, etc. para que Google y los LLMs vinculen la entidad y muestren el panel de conocimiento.
- **Debod le falta:** grep 'sameAs' en TODO debodsite2026/src devuelve 0 resultados. El nodo MedicalClinic/Organization de Debod no enlaza a su ficha de Google Business, Doctoralia, Instagram ni redes. Sin sameAs, Google no puede consolidar la entidad 'Debod Dental Clinic' en el Knowledge Graph ni asociar las reseñas/perfiles externos, debilitando el panel de conocimiento de marca y la confianza que ChatGPT/Perplexity otorgan a la entidad.
- **➡️ Recomendación (Madrid):** Añadir array sameAs al nodo MedicalClinic/Organization con las URLs reales de Debod: Google Business Profile, Doctoralia (perfil de la clínica y de cada doctor), Instagram, Facebook, LinkedIn. Replicar el sameAs en el schema Person de cada doctor del equipo. Bajo esfuerzo, alto impacto en consolidación de entidad y citabilidad en IA.
- _Evidencia:_ grep -rln 'sameAs' debodsite2026/src = 0 resultados; el inventario confirma schema MedicalClinic/Person/Review pero sin array sameAs en seo.js

### 🟠 MEDIO impacto (34)

#### 1. Sin arquitectura de batches escalable
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** Patrón de batches: posts-batch-1.js…posts-batch-6.js + posts-batch-daily.js (774KB, 57 posts) unificados en posts.js con spread + sort por fecha, getPostBySlug, getPostsByCategory y array exportado de categorías.
- **Debod le falta:** Un único archivo blog.js con un array plano. No hay separación en lotes ni helper centralizado de consulta/categorías, lo que dificulta crecer a decenas/cientos de posts y mantener la cadencia.
- **➡️ Recomendación (Madrid):** Refactorizar a blog-batch-N.js con un blog.js agregador (spread + sort por publishDate + getPostBySlug + getPostsByCategory + categorías canónicas). Habilita publicar en lotes y soporta el plan de volumen sin tocar BlogPost.jsx.
- _Evidencia:_ drdiente posts.js: import batch1..6 + daily, .sort, getPostBySlug, getPostsByCategory, export categories; debod blog.js: solo export blogPosts plano

#### 2. Schema de blog más débil: Article genérico con autor Organization
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** BlogPosting con author Person nombrado (Dr. Carlos Ariza, jobTitle, affiliation MedicalOrganization), publisher con logo, image absoluta, mainEntityOfPage y dateModified. E-E-A-T médico fuerte (YMYL).
- **Debod le falta:** blogPostSchema emite '@type':'Article' con author '@type':'Organization' (sin persona/profesional colegiado). Google trata salud dental como YMYL y prioriza autoría médica verificable; el Article genérico con autor organizacional es señal E-E-A-T más débil.
- **➡️ Recomendación (Madrid):** Cambiar a BlogPosting y poner author como Person (odontólogo colegiado de Debod, con jobTitle y nº de colegiado COEM), añadir mainEntityOfPage y reviewedBy. Reutiliza los datos del equipo ya existentes en team.js.
- _Evidencia:_ drdiente BlogPost.jsx:36 '@type':'BlogPosting' con author Person Dr.Ariza+jobTitle+affiliation; debod seo.js:100 '@type':'Article' author Organization

#### 3. Sin bloque de revisión médica / autoría E-E-A-T en el post renderizado
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** Cada post renderiza un bloque 'Revisado por el Dr. Carlos Ariza' con credencial regulatoria (COFEPRIS), disclaimer médico informativo y tarjeta de autor enlazando a /nosotros: señales E-E-A-T visibles para usuario y crawler en YMYL.
- **Debod le falta:** BlogPost.jsx solo muestra post.author como texto plano ('Equipo Debod Dental'). No hay bloque de revisión por profesional colegiado, ni disclaimer médico, ni tarjeta de autor con credenciales/enlace al equipo.
- **➡️ Recomendación (Madrid):** Añadir un bloque 'Revisado por [Dr./Dra. + nº COEM]' con disclaimer médico y tarjeta de autor enlazando a la ficha del equipo. Adaptar credencial a España (Colegio Oficial de Odontólogos, nº de colegiado).
- _Evidencia:_ drdiente BlogPost.jsx: bloque 'Revisado por el Dr.' + COFEPRIS + disclaimer + author card a /nosotros; debod BlogPost.jsx:66 solo {post.author}

#### 4. Sin cadencia/automatización de publicación
*Dimensión: Contenido y Blog · Esfuerzo: medio*

- **DrDiente tiene:** posts-batch-daily.js con 57 posts fechados del 2026-05-27 al 2026-06-24 (cadencia ~diaria reciente); hasta 40 posts/mes en picos. Señal de freshness y crecimiento sostenido para los crawlers.
- **Debod le falta:** 9 posts sin un sistema de cadencia ni lote 'daily'. El rango de fechas es disperso y la frescura/regularidad de publicación —factor de crawl y de autoridad temática— es casi inexistente.
- **➡️ Recomendación (Madrid):** Definir un calendario editorial sostenible (p.ej. 8-12 posts/mes) y adoptar un blog-batch-daily.js como lote de alta frecuencia. Priorizar consistencia mensual sobre picos para construir autoridad temática y freshness.
- _Evidencia:_ drdiente freq.mjs: 2026-06=40, 2026-05=17, daily batch 57 posts 2026-05-27→06-24; debod: 9 posts dispersos

#### 5. Taxonomía de categorías rota: filtros sin resultados y posts 'uncategorized'
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** 7 categorías canónicas coherentes entre datos, filtro y export (Diseño de Sonrisa, Implantes, Ortodoncia, etc.); cada post tiene categoría real y el filtro del índice coincide con los datos.
- **Debod le falta:** Desajuste entre el filtro y los datos: BlogIndex ofrece 'ortodoncia', 'implantes', 'estetica-dental' que NO existen en los datos (los datos usan 'odontologia-estetica', 'servicios'), por lo que esos filtros devuelven 0 resultados; y 2 posts están literalmente en categoría 'uncategorized'. Páginas de categoría vacías/incoherentes diluyen la arquitectura de información y el internal linking por tema.
- **➡️ Recomendación (Madrid):** Unificar la taxonomía: definir categorías canónicas, reasignar los 2 posts 'uncategorized', alinear los value del filtro con los de los datos y generar páginas de categoría reales (hub pages) que enlacen a sus posts, creando clusters temáticos indexables.
- _Evidencia:_ BlogIndex.jsx CATEGORIES: ortodoncia/implantes/estetica-dental; data categorías reales: salud-dental, servicios, uncategorized, odontologia-estetica; 2 posts 'uncategorized'

#### 6. Los posts del blog probablemente no llegan al sitemap.xml
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** Pipeline de contenido con prerender.mjs y un blog completo conectado al render; el blog escala como superficie indexable real.
- **Debod le falta:** El sitemap se genera con vite-plugin-sitemap a partir de rutas; scripts/routes.mjs SÍ construye blogRoutes para el prerender, pero conviene verificar que esas rutas /blog/:cat/:slug/ se inyectan en el sitemap del plugin. Si el plugin solo descubre rutas estáticas, los 9 posts (y futuros) podrían quedar fuera del sitemap, frenando la indexación.
- **➡️ Recomendación (Madrid):** Verificar en vite.config.js que vite-plugin-sitemap recibe las dynamicRoutes de blog (getAllRoutes/blogRoutes). Garantizar que cada /blog/:category/:slug/ aparece en sitemap.xml con lastmod=publishDate para acelerar indexación.
- _Evidencia:_ debod package.json usa vite-plugin-sitemap; routes.mjs genera blogRoutes para prerender pero no se halló inyección explícita de blogRoutes en config de sitemap

#### 7. <html lang> hardcodeado a 'es', no es route-aware
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** document.documentElement.lang se fija dinámicamente: 'en' en rutas EN-only, lang activo en el resto, para que cada página reporte el idioma real de su contenido.
- **Debod le falta:** index.html tiene <html lang="es"> fijo. Cualquier landing en inglés futura reportaría lang='es', confundiendo a Google y lectores de pantalla, y degradando el ranking en inglés.
- **➡️ Recomendación (Madrid):** Añadir lógica route-aware igual que DrDiente: mantener un array EN_ONLY_ROUTES en debod y fijar documentElement.lang='en' en esas rutas. Imprescindible si se crean las landings EN.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/debodsite2026/index.html línea 2: <html lang="es">; vs /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/App.jsx:94 (documentElement.lang route-aware)

#### 8. Sin selector de idioma (LanguageToggle) en la cabecera
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** components/layout/LanguageToggle.jsx: switch segmentado EN/ES con icono Globe, accesible (role=group, aria-pressed, aria-label), integrado en header desktop y móvil. Permite a un usuario internacional cambiar a inglés en un clic y descubrir el contenido EN.
- **Debod le falta:** Navbar.jsx no tiene ningún toggle de idioma. Aunque hubiera contenido EN, el visitante no podría descubrirlo ni cambiar.
- **➡️ Recomendación (Madrid):** Portar LanguageToggle.jsx a debod e insertarlo en Navbar.jsx (desktop + menú móvil), reusando los colores de marca de Debod. Conectar a la nueva LanguageProvider.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/components/layout/LanguageToggle.jsx vs /Users/zacroye/Documents/DEBOD/debodsite2026/src/components/Navbar.jsx (sin toggle)

#### 9. Sin bloque de confianza 'equipo bilingüe / English-first'
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** Bloque de objeciones con sección 'Fully Bilingual Team — English First': el doctor comunica en inglés, planes/presupuestos/post-op en inglés, soporte WhatsApp y videoconsulta en inglés. Neutraliza el miedo a la barrera idiomática del paciente extranjero.
- **Debod le falta:** Ningún mensaje sobre atención en inglés. El paciente internacional no tiene señal de que será atendido en su idioma, lo que reduce conversión y confianza.
- **➡️ Recomendación (Madrid):** Si el equipo de Debod atiende en inglés, añadir un bloque 'English-speaking dental team in Madrid' en las landings EN: consulta, presupuesto y seguimiento en inglés, WhatsApp/videollamada. Es señal clave para expats/turistas.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/pages/DentalImplantsMexicoCity.jsx (objections: 'Fully Bilingual Team — English First', WhatsApp/video en inglés)

#### 10. Sin tabla comparativa de precios / ahorro orientada al mercado emisor
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** priceComparison: tabla 'tratamiento vs precio US vs precio DrDiente vs % ahorro' (ej. All-on-8 $20-40k US vs ~$22k, 'up to 45%'), con priceCurrency USD. Convierte la búsqueda de ahorro del paciente US en argumento de venta y keyword.
- **Debod le falta:** No hay comparativa de precios internacional ni ángulo de ahorro para el paciente extranjero. Sin tabla de coste vs país de origen.
- **➡️ Recomendación (Madrid):** Crear tabla 'Save vs UK/Ireland dental prices' en EUR (no USD/México): comparar coste de implantes/carillas en Reino Unido/Irlanda frente a Madrid. Es el gancho del turismo dental europeo hacia España.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/pages/DentalImplantsMexicoCity.jsx líneas 7-13 (priceComparison) y schema priceCurrency:'USD'

#### 11. Reviews/testimonios sin versión en inglés ni pacientes internacionales
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: bajo*

- **DrDiente tiene:** Array de reviews en inglés con ubicaciones internacionales (Los Angeles, USA; Toronto; London; 'International Patient') incrustado en las landings EN, reforzando prueba social para el visitante extranjero.
- **Debod le falta:** Las reseñas (/resenas/) están solo en español y de pacientes locales. El visitante internacional no ve prueba social en su idioma ni de pacientes que viajaron.
- **➡️ Recomendación (Madrid):** Recopilar/traducir reseñas de pacientes internacionales o expats en Madrid e incrustarlas en las landings EN, con ubicación de origen (London, Dublin, etc.). Reusar el patrón de array de reviews EN de DrDiente.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/pages/DentalImplantsMexicoCity.jsx (reviews con location 'Los Angeles, USA', 'International Patient')

#### 12. Schema MedicalClinic/Offer en inglés con moneda y geo no localizado a EN
*Dimensión: Internacionalización (inglés/turismo) · Esfuerzo: medio*

- **DrDiente tiene:** Landings EN inyectan JSON-LD MedicalClinic con makesOffer→Offer→PriceSpecification (priceCurrency USD), aggregateRating, geo y FAQPage en inglés, alineado al contenido EN de la página. Hace la página elegible para rich results en SERP en inglés.
- **Debod le falta:** Debod tiene schema MedicalClinic en español (ya inventariado) pero ninguna variante en inglés con Offer/PriceSpecification en EUR para las (inexistentes) landings EN. Sin schema EN no hay rich results en inglés.
- **➡️ Recomendación (Madrid):** Al crear cada landing EN, inyectar JSON-LD MedicalClinic+Offer+PriceSpecification con priceCurrency 'EUR', geo de Argüelles/Madrid, y FAQPage con preguntas en inglés (precio, idioma, cuántos días en Madrid). Reusar el patrón de schema EN de DrDiente.
- _Evidencia:_ /Users/zacroye/Documents/DEBOD/drdiente-website-ref/src/pages/DentalImplantsMexicoCity.jsx:209-243 (MedicalClinic+Offer+PriceSpecification USD+FAQPage)

#### 13. Página dedicada de Tecnología (E-E-A-T / diferenciación) ausente
*Dimensión: Páginas y landings · Esfuerzo: bajo*

- **DrDiente tiene:** /tecnologia (Tecnologia.jsx, 9.5KB) — página dedicada que lista equipamiento (CEREC CAD/CAM, CBCT 3D, cirugía guiada) con descripciones, tags y title SEO propio. Refuerza autoridad/E-E-A-T y capta búsquedas de tecnología ('clínica con escáner 3D Madrid', 'CEREC Madrid').
- **Debod le falta:** No existe página /tecnologia. Aunque Debod tiene /dental-lab, no hay una página que agrupe y posicione la tecnología/equipamiento de la clínica como activo de autoridad y captación de búsquedas tecnológicas.
- **➡️ Recomendación (Madrid):** Crear /tecnologia listando el equipamiento real de Debod (escáner intraoral, TAC/CBCT 3D, su laboratorio propio dental-lab como ventaja, etc.) con descripciones y schema. Refuerza E-E-A-T y capta queries de tecnología en Madrid. Esfuerzo bajo: contenido + plantilla.
- _Evidencia:_ drdiente-website-ref/src/pages/Tecnologia.jsx (array de equipos: CEREC Dentsply Sirona, Tomografía Cone Beam CBCT, con desc y tag). En debodsite2026 grep 'tecno/tech' en /pages no devuelve nada.

#### 14. Reseñas segmentadas por tratamiento (hub + sub-páginas) inexistentes
*Dimensión: Páginas y landings · Esfuerzo: medio*

- **DrDiente tiene:** Arquitectura de reseñas multi-página: hub /reviews (reviews/index.jsx con tabs filtrables y schema Dentist/AggregateRating) + 3 páginas por tratamiento /reviews/implantes-dentales, /reviews/diseno-de-sonrisa, /reviews/alineadores (ReviewsImplantes.jsx, ReviewsDisenoDeSonrisa.jsx, ReviewsAlineadores.jsx). Captura '{tratamiento} opiniones / reseñas'.
- **Debod le falta:** Debod tiene UNA sola página /resenas/ (Resenas.jsx) general. No hay hub con tabs ni sub-páginas por tratamiento, así que no posiciona para 'implantes dentales opiniones Madrid', 'Invisalign opiniones Madrid', 'diseño de sonrisa opiniones', etc.
- **➡️ Recomendación (Madrid):** Convertir /resenas en hub con pestañas y crear sub-páginas por tratamiento clave de Debod (/resenas/implantes-dentales, /resenas/ortodoncia-invisible, /resenas/diseno-de-sonrisa) reutilizando sus reseñas reales segmentadas, cada una con Review/AggregateRating schema. Capta long-tail de opiniones por tratamiento.
- _Evidencia:_ drdiente-website-ref/src/pages/reviews/index.jsx (TAB_DEFS por tratamiento, schema Dentist) + ReviewsImplantes/ReviewsDisenoDeSonrisa/ReviewsAlineadores.jsx. debodsite2026/src/router.jsx solo tiene path 'resenas/' (una página).

#### 15. Página dedicada de Antes y Después filtrable (galería como página propia)
*Dimensión: Páginas y landings · Esfuerzo: bajo*

- **DrDiente tiene:** /antes-despues (AntesYDespues.jsx, 8.3KB) — PÁGINA propia con galería de casos clínicos filtrable por categoría (Implantes, Blanqueamiento, Coronas, All-on-4/6, Diseño de sonrisa...), H1 'Casos clínicos reales', title SEO propio e indexable.
- **Debod le falta:** Debod tiene galería antes/después pero como sección/componente, sin página dedicada indexable con URL propia ni filtros por tratamiento. Pierde la captación de 'antes y después implantes Madrid', 'resultados Invisalign Madrid' y el valor de prueba social como página de aterrizaje.
- **➡️ Recomendación (Madrid):** Crear /antes-despues como página propia indexable con filtros por tratamiento, usando los casos reales de Debod, H1 'Casos reales' y schema ImageObject/MedicalProcedure. Esfuerzo bajo si reutiliza la galería existente; gana una URL de aterrizaje de alta prueba social.
- _Evidencia:_ drdiente-website-ref/src/pages/AntesYDespues.jsx (cases[] con category, filtro de categorías, document.title propio). Debod: el inventario indica galería antes/después pero no aparece ruta /antes-despues en router.jsx (solo componentes).

#### 16. Hub de Precios por tratamiento enlazado desde cada landing (silo de pricing) inexistente
*Dimensión: Páginas y landings · Esfuerzo: bajo*

- **DrDiente tiene:** Cada tratamiento y barrio en DrDiente referencia precios concretos ('primera consulta $2,125', 'Desde...') y enlaza al silo /precios, creando enlazado interno hacia una página que concentra autoridad de las queries de precio.
- **Debod le falta:** Al no existir página de precios, las landings de especialidad/tratamiento de Debod no pueden enlazar a un silo de pricing; se pierde enlazado interno temático y la concentración de autoridad para queries comerciales de precio.
- **➡️ Recomendación (Madrid):** Tras crear /precios, añadir desde cada landing de especialidad/tratamiento de Debod un bloque de precio orientativo y enlace interno a /precios (y opcionalmente anclas /precios#implantes). Refuerza el silo comercial y el enlazado interno.
- _Evidencia:_ En DrDiente DentistaPolanco.jsx la FAQ '¿Cuánto cuesta el dentista en Polanco?' cita el precio y refuerza /precios. Debod no tiene destino de pricing al que enlazar (solo Contacto.jsx:341).

#### 17. Página/hub de urgencias dentales ausente
*Dimensión: Páginas y landings · Esfuerzo: bajo*

- **DrDiente tiene:** DrDiente trata las urgencias como argumento SEO recurrente integrado en sus landings de barrio y cerca-de-mí (FAQ '¿Tienen urgencias dentales en Polanco?', horarios de fin de semana), capturando la búsqueda de altísima intención 'dentista urgencias'.
- **Debod le falta:** Debod no tiene página ni sección dedicada a urgencias dentales. 'Dentista de urgencias Madrid' / 'urgencias dentales Argüelles' es una de las búsquedas locales de mayor intención y conversión inmediata y queda sin cubrir.
- **➡️ Recomendación (Madrid):** Crear /urgencias-dentales-madrid (o /dentista-urgencias-arguelles) con horario, teléfono/WhatsApp directo, qué hacer ante dolor/fractura/flemón, schema con openingHours y CTA inmediata. Esfuerzo bajo, captura intención de máxima conversión.
- _Evidencia:_ drdiente-website-ref/src/pages/DentistaPolanco.jsx FAQ de urgencias y DentistaCerca.jsx '¿Tienen dentista de urgencias cerca de mí?'. Sin equivalente en el router.jsx de debodsite2026.

#### 18. Schema de blog pobre: Article genérico, autor=Organization, sin BlogPosting ni metadatos de artículo
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: bajo*

- **DrDiente tiene:** BlogPost.jsx inyecta '@type':'BlogPosting' con datePublished por cada post (154 posts), tipo correcto para artículos de blog que Google y motores GEO prefieren.
- **Debod le falta:** blogPostSchema usa '@type':'Article' (genérico), author como Organization (no Person/E-E-A-T), datePublished===dateModified, y le faltan wordCount, articleSection, keywords y mainEntityOfPage. Señales de autoría/frescura débiles para ranking y citabilidad en IA.
- **➡️ Recomendación (Madrid):** Cambiar a '@type':'BlogPosting', poner author como Person (dentista real de Debod con sameAs a su perfil) para E-E-A-T médico, separar dateModified real, y añadir wordCount, articleSection, keywords y mainEntityOfPage. Mejora ranking de blog y citas en ChatGPT/Perplexity.
- _Evidencia:_ drdiente src/pages/BlogPost.jsx:36 '@type':'BlogPosting' + datePublished; debod src/data/seo.js blogPostSchema usa 'Article', author Organization, sin wordCount/articleSection/keywords/mainEntityOfPage

#### 19. Falta el nodo MedicalOrganization/Organization-publisher en el @graph global
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: bajo*

- **DrDiente tiene:** Usa MedicalOrganization (2x) además de LocalBusiness+MedicalBusiness combinados (51x, uno por post), consolidando la entidad clínica que los buscadores y LLMs reconocen como organización médica.
- **Debod le falta:** Solo tiene MedicalClinic/Person/Review/Breadcrumb y un Organization suelto como publisher del blog, sin un nodo MedicalOrganization de entidad ni @graph global enlazado por @id en todas las páginas. Entidad médica menos consolidada.
- **➡️ Recomendación (Madrid):** Definir un nodo único MedicalOrganization (o Dentist + MedicalClinic) con @id estable (#clinic), medicalSpecialty, sameAs (Google Business, Doctoralia, redes), priceRange, areaServed Madrid/Argüelles, y referenciarlo por @id desde todas las páginas. Esto fortalece el Knowledge Graph de la entidad.
- _Evidencia:_ drdiente: 2x MedicalOrganization, 51x ['LocalBusiness','MedicalBusiness'] en posts-batch-daily.js; debod: tipos = MedicalClinic implícito + 2x Organization (solo como publisher/author), 0 MedicalOrganization

#### 20. Inyección de schema solo client-side, no garantizada en el HTML prerenderizado
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: bajo*

- **DrDiente tiene:** Combina prerender con puppeteer (build:prerender) Y schema en JSX (dangerouslySetInnerHTML) más inyección JS; el HTML estático resultante contiene el JSON-LD para crawlers que no ejecutan JS y para LLMs.
- **Debod le falta:** Riesgo: BlogPost/SEO factory podrían inyectar JSON-LD vía JS en runtime; hay que verificar que el JSON-LD quede embebido en el HTML prerenderizado de cada ruta y no solo se cree con createElement tras hidratar (crawlers de IA suelen no ejecutar JS).
- **➡️ Recomendación (Madrid):** Auditar los .html de dist/ de Debod y confirmar que cada página incluye su <script type=application/ld+json> en el HTML servido (no solo tras hidratación). Si el prerender no captura el JSON-LD inyectado por efecto, mover el JSON-LD a render directo en JSX para que el prerender lo congele.
- _Evidencia:_ drdiente BlogPost.jsx usa script.type='application/ld+json' + script.text en useEffect (client-side) PERO compensa con prerender puppeteer; debod prerender.mjs existe pero conviene verificar que el ld+json aparece en dist/*.html

#### 21. MedicalProcedure incompleto en tratamientos (faltan howPerformed, bodyLocation, etc.)
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: medio*

- **DrDiente tiene:** Páginas de tratamiento con schema rico (precio, rating, FAQ, MedicalBusiness) que dan a Google y a los LLMs contexto clínico y comercial completo por procedimiento.
- **Debod le falta:** treatmentPageSchema solo tiene name/description/url/procedureType/status/performedBy/preparation. Faltan howPerformed, bodyLocation, followup, expectedPrognosis, relevantSpecialty y, sobre todo, el Offer/precio. 'preparation' se rellena con substring(0,200) del markdown (ruido, no preparación clínica real).
- **➡️ Recomendación (Madrid):** Enriquecer treatmentPageSchema con howPerformed, bodyLocation, followup, expectedPrognosis y relevantSpecialty con texto clínico real (no substring), y enlazar un Offer con precio. Mejora elegibilidad a rich results médicos y citabilidad GEO.
- _Evidencia:_ debod src/data/seo.js treatmentPageSchema: campos limitados + preparation: treatment.bodyMarkdown?.substring(0,200); drdiente adjunta schema rico por tratamiento vía TreatmentPage.jsx prop schema

#### 22. Sin canonical/og:url self-referencial dinámico por ruta verificado
*Dimensión: SEO/Schema/GEO técnico · Esfuerzo: bajo*

- **DrDiente tiene:** App.jsx fija un canonical self-referencial + og:url en el host www en CADA ruta, evitando duplicados y consolidando señales; además canonical hardcodeado por landing EN.
- **Debod le falta:** Conviene verificar que Debod emite canonical self-referencial por ruta en el HTML prerenderizado (no se observó lógica de canonical dinámica en src equivalente a App.jsx de DrDiente). Sin canonical consistente, riesgo de dilución por parámetros/trailing slash.
- **➡️ Recomendación (Madrid):** Garantizar un <link rel=canonical> self-referencial y og:url con la URL canónica (con/sin trailing slash unificado) en cada página prerenderizada de Debod. Bajo esfuerzo, evita canibalización y fugas de PageRank.
- _Evidencia:_ drdiente App.jsx:53-60 canonical+og:url self-referencial por ruta; en debod no apareció lógica canonical análoga en el grep de src (solo seo.js de JSON-LD)

#### 23. Sin TikTok Pixel ni Events API
*Dimensión: Conversión, tracking y analítica · Esfuerzo: medio*

- **DrDiente tiene:** Captura ttclid, external_id y event_id preparados para dedup TikTok Pixel <-> TikTok Events API server-side.
- **Debod le falta:** Debod captura ttclid y prepara event_id/external_id pero no carga TikTok Pixel ni envía Events API: cero medición y optimización en TikTok, un canal con fuerte alcance orgánico/pago para estética dental en España.
- **➡️ Recomendación (Madrid):** Si se plantea captación en TikTok (alto potencial para diseño de sonrisa/ortodoncia invisible en Madrid), activar TikTok Pixel + Events API en el GTM nuevo reutilizando ttclid/event_id ya capturados.
- _Evidencia:_ debodsite2026/src/utils/tracking.js CLICK_IDS incluye ttclid; api/lead.js payload.ttclid presente; sin script de TikTok en index.html

#### 24. Sin puente de conversiones offline desde el software de gestión clínica
*Dimensión: Conversión, tracking y analítica · Esfuerzo: alto*

- **DrDiente tiene:** api/dentalink-webhook.js: cuando Dentalink crea/actualiza una cita, enriquece (email/phone vía API) y lo manda al CRM, cerrando el bucle de conversiones offline (cita real -> Ads).
- **Debod le falta:** Debod no tiene ningún webhook desde su software dental: el CRM/Ads nunca sabe qué leads se convirtieron en cita real. Sin esta señal de calidad, Smart Bidding optimiza por 'formularios' en vez de por pacientes reales, captando tráfico de menor calidad.
- **➡️ Recomendación (Madrid):** Crear un webhook análogo desde el software de gestión de Debod (Gesden/Dentalink/el que usen) hacia GHL para registrar la conversión offline (cita asistida). Eleva la calidad de la señal de Ads y, con ello, el alcance rentable. Esfuerzo alto: requiere acceso/API del software clínico.
- _Evidencia:_ drdiente-website-ref/api/dentalink-webhook.js (Dentalink->Elevator/GHL, enriquecimiento + SUCURSAL_MAP); debodsite2026/api solo contiene lead.js (sin webhook de gestión clínica)

#### 25. Atribución capturada pero potencialmente perdida por orden de consentimiento
*Dimensión: Conversión, tracking y analítica · Esfuerzo: bajo*

- **DrDiente tiene:** captureTrackingData() se ejecuta en cada carga sin gate de consentimiento (contexto MX), garantizando primer-touch siempre persistido.
- **Debod le falta:** En Debod captureTrackingData() y getTrackingData() abortan si !hasConsent(). Correcto para RGPD, pero si el banner no se acepta antes de la primera navegación, se pierde el first-touch (gclid/fbclid/UTM de la URL de entrada), degradando la atribución justo de los clics de pago que más importan para medir alcance.
- **➡️ Recomendación (Madrid):** Persistir los click-ids/UTM de la URL de entrada de forma RGPD-compatible (no son cookies de marketing per se y suelen poder guardarse como dato técnico de la solicitud) o capturarlos en el primer evento tras aceptar, para no perder la atribución de pago de la primera visita.
- _Evidencia:_ debodsite2026/src/utils/tracking.js líneas 'if (!hasConsent()) return' al inicio de captureTrackingData y getTrackingData; consent por defecto no 'granted'

#### 26. Filtrado/tabs de reseñas e índice paginado
*Dimensión: Features/UX y prueba social · Esfuerzo: bajo*

- **DrDiente tiene:** El índice /reviews tiene tabs por especialidad (TAB_DEFS), paginación con PAGE_SIZE, carga incremental (slice displayed), skeleton loaders y caché. UX rica que invita a explorar el volumen de reseñas y aumenta tiempo en página.
- **Debod le falta:** La página /resenas/ y la sección home renderizan un grid plano de las pocas reseñas sin tabs, sin filtro por tratamiento (aunque cada reseña ya tiene campo r.treatment), sin paginación ni carga incremental.
- **➡️ Recomendación (Madrid):** Añadir tabs/filtro por tratamiento usando el campo r.treatment ya existente, y paginación 'ver más'. Mejora engagement y señala a buscadores que hay profundidad de contenido de reseñas.
- _Evidencia:_ drdiente-website-ref/src/pages/reviews/index.jsx (TABS, PAGE_SIZE, visibleReviews.slice, SkeletonCard); debodsite2026/src/components/Reviews.jsx (grid plano, treatment tag sin filtro)

#### 27. Sección de autoridad del doctor (DoctorSection) con credenciales fechadas
*Dimensión: Features/UX y prueba social · Esfuerzo: medio*

- **DrDiente tiene:** DoctorSection.jsx: perfil del doctor con nombre (Dr. Carlos Ariza), especialidad, carrusel de fotos verticales, y lista de credenciales con iconos y AÑOS concretos (Licenciatura 2011, Especialidad en Ortodoncia ULM 2013, etc.). Refuerza E-E-A-T (experiencia/autoridad), clave para YMYL médico.
- **Debod le falta:** Debod tiene TeamSection (equipo) pero no una sección de autoridad del doctor principal con credenciales académicas fechadas, diplomas y trayectoria. El E-E-A-T del autor/profesional es más débil.
- **➡️ Recomendación (Madrid):** Crear una sección de doctor/director clínico de Debod con nombre, nº de colegiado, titulación universitaria con años, especialidades y sociedades (SEPA, SEPES, etc.). Enlazar con schema Person/Physician. Eleva E-E-A-T, factor de confianza en sector salud.
- _Evidencia:_ drdiente-website-ref/src/components/home/DoctorSection.jsx (credentials con GraduationCap y años); debodsite2026/src/components/TeamSection.jsx (105 líneas, equipo genérico)

#### 28. Sección de tecnología detallada (TechnologySection)
*Dimensión: Features/UX y prueba social · Esfuerzo: bajo*

- **DrDiente tiene:** TechnologySection.jsx con lista descriptiva de equipos (Escaneo Intraoral 3D 'precisión 20 micrones', CEREC CAD/CAM, iTero, Tomografía 3D, flujo digital) con copy específico por tecnología, iconos y tags. Comunica capacidad clínica diferencial y genera contenido temático único.
- **Debod le falta:** Debod menciona tecnología dentro de ClinicalExpertise/Philosophy de forma más superficial (telemetría animada, 'laboratorio digital propio') pero sin un bloque dedicado que enumere cada equipo con su descripción técnica y beneficio.
- **➡️ Recomendación (Madrid):** Añadir un bloque de tecnología en Debod que liste cada equipo real de la clínica (escáner intraoral, TAC/CBCT 3D, CAD/CAM, etc.) con descripción y beneficio para el paciente. Aporta contenido único y refuerza la percepción de clínica de alta tecnología en Madrid.
- _Evidencia:_ drdiente-website-ref/src/components/home/TechnologySection.jsx (technologies con desc por equipo, tags CEREC/iTero/3D); debodsite2026/src/components/ClinicalExpertise.jsx (tecnología mencionada en TELEMETRY/desc cortas)

#### 29. Sin <meta name=robots> global ni meta description global en index.html
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** index.html declara explícitamente <meta name=robots content='index, follow'>, <meta name=description ...> y <link rel=canonical> y <meta property=og:url> a nivel global, de modo que incluso si Helmet fallara, el HTML base ya indica a los crawlers que indexen y con qué descripción/canónica.
- **Debod le falta:** index.html de Debod NO tiene <meta name=robots>, ni description global, ni canonical/og:url global (los comentarios del propio HTML dicen que se delega TODO a react-helmet-async por ruta). Es un patrón válido, PERO crea un punto único de fallo: si Helmet no inyecta en alguna ruta (o el crawler de IA no ejecuta JS antes del prerender), esa página queda sin señal robots/description. DrDiente tiene red de seguridad en el HTML base; Debod no.
- **➡️ Recomendación (Madrid):** Añadir en index.html de Debod un <meta name=robots content='index, follow'> y una description global por defecto como red de seguridad (Helmet seguirá sobreescribiendo por ruta). Garantiza que ninguna página quede sin directiva de indexación si el prerender de una ruta concreta falla.
- _Evidencia:_ grep en debodsite2026/index.html de 'meta name=robots'/'meta name=description'/'rel=canonical' = sin salida; drdiente index.html líneas 14/16/17/21 los tiene

#### 30. Sin code-splitting por ruta (0 lazy() vs 34 en DrDiente) — bundle inicial pesado
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** App.jsx usa lazy(() => import(...)) 34 veces, una por página/landing, con Suspense. Cada ruta se descarga en su propio chunk bajo demanda, así la home y cada landing cargan un JS mínimo: mejor TTI/LCP en móvil y menor consumo de datos, lo que mejora Core Web Vitals y ranking.
- **Debod le falta:** router.jsx de Debod tiene 0 llamadas a lazy() — todas las páginas se importan de forma estática y entran en el bundle inicial. Aunque hay manualChunks para vendor/markdown/animations en vite.config, las ~17 páginas + sus dependencias se cargan de golpe. Bundle inicial mayor = LCP/TTI peor en móvil = peor Core Web Vitals = peor ranking, especialmente en 4G y dispositivos de gama media donde está gran parte del tráfico local.
- **➡️ Recomendación (Madrid):** Convertir las páginas del router de Debod a React.lazy() + <Suspense fallback>, especialmente las pesadas (BlogPost con react-markdown, páginas con GSAP). Reduce el JS inicial y mejora LCP/TTI en móvil. El prerender SSG sigue funcionando igual (el HTML estático ya está congelado).
- _Evidencia:_ grep -c 'lazy(' debodsite2026/src/router.jsx = 0; drdiente src/App.jsx = 34

#### 31. Sitemap declara namespaces image/video pero NO usa ni una etiqueta <image:image> (sin sitemap de imágenes)
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** DrDiente tiene 174 imágenes JPG de casos/equipo/testimonios como activo visual indexable. Un sitemap de imágenes permite que esas fotos (antes/después, equipo, casos clínicos) aparezcan en Google Imágenes, una superficie de descubrimiento extra de alta intención visual en estética dental.
- **Debod le falta:** El sitemap.xml de Debod declara los namespaces xmlns:image y xmlns:video en el <urlset> pero hay 0 etiquetas <image:image>/<image:loc>/<video:video> en las 58 URLs. Las fotos de antes/después, equipo y la galería (activos clave en estética dental) NO se declaran a Google Imágenes, perdiendo descubrimiento en búsqueda visual ('antes despues carillas Madrid' en Imágenes).
- **➡️ Recomendación (Madrid):** Extender la generación del sitemap para emitir <image:image><image:loc> por cada URL con sus imágenes relevantes (galería antes/después, fotos de equipo, casos). vite-plugin-sitemap soporta el campo de imágenes por ruta; o post-procesar el sitemap. Aprovecha que el namespace ya está declarado y abre Google Imágenes como canal.
- _Evidencia:_ grep 'image:image|video:video' en debodsite2026/dist/sitemap.xml = 0, pese a que el <urlset> declara xmlns:image y xmlns:video

#### 32. Sitemap con priority=1.0 y changefreq=daily UNIFORMES en todas las URLs (sin jerarquía de crawl)
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** El patrón ganador diferencia priority/changefreq por tipo de página (home alta, landings comerciales media-alta, posts media) para guiar el presupuesto de rastreo de Google hacia las páginas que más importan.
- **Debod le falta:** En el sitemap de Debod, TODAS las URLs llevan priority 1.0 y changefreq 'daily' idénticos (incluida la home duplicada). Cuando todo es prioridad máxima, nada lo es: Google ignora señales uniformes y, peor, 'daily' en páginas que no cambian a diario malgasta presupuesto de rastreo. No hay jerarquía que dirija el crawler a las landings de conversión.
- **➡️ Recomendación (Madrid):** Diferenciar en el generador: home priority 1.0 changefreq weekly; landings de barrio/tratamiento 0.8 weekly; posts de blog 0.6 monthly con lastmod=publishDate real (no la fecha de build). Además corregir la home duplicada. Da a Google una jerarquía de rastreo y lastmod fiable.
- _Evidencia:_ debodsite2026/dist/sitemap.xml: las 58 <url> con <priority>1.0</priority> y <changefreq>daily</changefreq>; además la home aparece duplicada con valores idénticos

#### 33. lastmod del sitemap = fecha de BUILD, no fecha real de modificación del contenido
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** Un lastmod fiel a la fecha real de publicación/edición de cada post/página indica frescura veraz al crawler y acelera la reindexación de lo que de verdad cambió.
- **Debod le falta:** Todas las URLs del sitemap de Debod comparten el MISMO lastmod (2026-06-26T06:03:39.430Z = timestamp del build). Esto le dice a Google que TODO el sitio cambió a la vez en cada deploy, lo cual es ruido: el crawler aprende a desconfiar del lastmod y no prioriza el contenido realmente nuevo. Se pierde la señal de frescura por-página que acelera la indexación de posts nuevos.
- **➡️ Recomendación (Madrid):** Pasar a vite-plugin-sitemap (o post-proceso) un mapa de lastmod por ruta usando la fecha real: publishDate/updatedAt de cada post y la fecha de último cambio de cada landing. Frescura veraz = reindexación más rápida de lo nuevo y mejor confianza del crawler.
- _Evidencia:_ debodsite2026/dist/sitemap.xml: todas las <lastmod> = 2026-06-26T06:03:39.430Z (timestamp idéntico de build)

#### 34. Sin redirección www→no-www (ni canonical de host) — riesgo de contenido duplicado por host
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** DrDiente canonicaliza explícitamente al host con www (canonical y og:url a https://www.clinicadrdiente.com), unificando todas las señales en una sola variante de host.
- **Debod le falta:** No hay regla de redirección entre deboddentalclinic.com y www.deboddentalclinic.com en vercel.json (sin 'redirects') ni en _redirects (que solo tiene el fallback SPA '/* /index.html 200'). Si ambos hosts resuelven, Google puede indexar duplicados y dividir la autoridad entre www y no-www. Además, con trailingSlash:true activo pero sin un canonical de host coherente, aumenta el riesgo de dilución.
- **➡️ Recomendación (Madrid):** Añadir en vercel.json un redirect 301 permanente de www→no-www (o viceversa, según el canonical elegido) y asegurar que TODOS los canonical/og:url de Helmet usan exactamente ese host con trailing slash consistente. Evita duplicados de host y consolida la autoridad en una sola variante.
- _Evidencia:_ debodsite2026/vercel.json no contiene clave 'redirects'; public/_redirects = solo '/* /index.html 200'; canonical de host no enforced

### 🟡 BAJO impacto (8)

#### 1. Sin schema Blog/ItemList ni hub que agregue la colección de posts
*Dimensión: Contenido y Blog · Esfuerzo: bajo*

- **DrDiente tiene:** Blog.jsx con índice rico (featured post, filtros de categoría, búsqueda) y colección agregada de 153 posts que funciona como hub temático con enlaces a todos los artículos.
- **Debod le falta:** BlogIndex tiene búsqueda y filtros, pero con solo 9 posts el hub aporta poca masa de enlaces internos y no hay schema Blog/CollectionPage/ItemList que declare la colección. Hub débil = menor descubrimiento y menor distribución de autoridad.
- **➡️ Recomendación (Madrid):** Al crecer el volumen, añadir schema Blog/CollectionPage con ItemList en BlogIndex y reforzar el hub con secciones por cluster temático. Acompaña al plan de volumen para maximizar descubrimiento e internal linking.
- _Evidencia:_ drdiente Blog.jsx: featured+filtros+búsqueda sobre 153 posts; debod BlogIndex.jsx: filtros+búsqueda sobre 9 posts, sin schema de colección

#### 2. Webhook de leads único, sin enrutado por sede ni separación de campañas
*Dimensión: Conversión, tracking y analítica · Esfuerzo: bajo*

- **DrDiente tiene:** Enrutado de leads por sucursal (Polanco/Roma Norte) a subcuentas GHL distintas con fallback, cada una subiendo su conversión a su propia cuenta de Ads.
- **Debod le falta:** Debod usa un único GHL_WEBHOOK_URL con tags fijos. Es razonable para una sola sede en Argüelles, pero no hay arquitectura para separar campañas por servicio/idioma ni para escalar a una segunda sede. Menos crítico que la medición, pero limita la atribución por campaña.
- **➡️ Recomendación (Madrid):** Mantener el webhook único por ahora (1 sede), pero parametrizar tags por servicio/landing para mejor atribución por campaña en GHL. Reservar el patrón de routing por si se abre segunda clínica.
- _Evidencia:_ debodsite2026/api/lead.js (WEBHOOK_URL único, tags ['Lead-Web','Lead-Debod-Arguelles']); drdiente api/lead.js GHL_WEBHOOK_BY_SUCURSAL con routing Polanco/Roma Norte

#### 3. Ticker animado de confianza/tecnología (ScrollVideoSection)
*Dimensión: Features/UX y prueba social · Esfuerzo: bajo*

- **DrDiente tiene:** ScrollVideoSection.jsx: cinta de auto-scroll infinito con sellos de tecnología y prueba social ('iTero', 'CEREC', '700+ 5 Estrellas', 'Cirugía 3D Guiada'). Elemento de engagement visual que repite mensajes de confianza a lo largo del scroll.
- **Debod le falta:** Debod no tiene un ticker/marquee de sellos de confianza ni de tecnología que refuerce de forma continua los mensajes de autoridad y prueba social durante el recorrido.
- **➡️ Recomendación (Madrid):** Añadir una cinta de sellos (Invisalign, Straumann/implantes, escáner 3D, '4,9★ en Google', 'X+ reseñas') con auto-scroll. Refuerza confianza de forma persistente; impacto en alcance bajo pero ayuda a conversión.
- _Evidencia:_ drdiente-website-ref/src/components/home/ScrollVideoSection.jsx (auto-scroll track con tags iTero/CEREC/700+ 5 Estrellas)

#### 4. Badge de Google verificado prominente en Testimonials del home
*Dimensión: Features/UX y prueba social · Esfuerzo: bajo*

- **DrDiente tiene:** La sección Testimonials del home muestra un badge destacado: '5.0/5.0', '700+ reseñas 5 estrellas en Google', etiqueta 'Verificadas' y logo de Google, junto a tarjetas con estrellas, ubicación, tratamiento y foto del paciente.
- **Debod le falta:** Debod muestra estrellas y ratingValue, pero sin un badge tipo 'Google verificado' con logo oficial de Google y conteo de reseñas prominente en la sección de reseñas del home (la confianza visual de marca Google es más débil).
- **➡️ Recomendación (Madrid):** Añadir un badge de 'Reseñas verificadas en Google' con logo oficial, media 4,9 y conteo real, tanto en la sección home de reseñas como en /resenas/. Aumenta la credibilidad percibida y el CTR del CTA 'ver en Google'.
- _Evidencia:_ drdiente-website-ref/src/components/home/Testimonials.jsx (badge '700+ reseñas 5 estrellas en Google' + /images/google-logo.png + 'Verificadas'); debodsite2026/src/components/Reviews.jsx (estrellas + ratingValue, sin badge Google con logo)

#### 5. Foto/avatar real del paciente en tarjetas de testimonio
*Dimensión: Features/UX y prueba social · Esfuerzo: bajo*

- **DrDiente tiene:** Las tarjetas de Testimonials incluyen foto real del paciente (/images/testimonios/<nombre>.jpg) además de nombre, ubicación y tratamiento, aumentando autenticidad percibida.
- **Debod le falta:** Las tarjetas de reseñas de Debod usan solo iniciales en un avatar de degradado (r.initials), sin foto del paciente, lo que reduce la sensación de autenticidad de la prueba social.
- **➡️ Recomendación (Madrid):** Donde haya consentimiento, añadir foto real (o frame del vídeo) del paciente en al menos los testimonios destacados del home. Eleva la autenticidad de la prueba social y la confianza.
- _Evidencia:_ drdiente-website-ref/src/components/home/Testimonials.jsx (image: /images/testimonios/nadia.jpg); debodsite2026/src/components/Reviews.jsx (avatar con {r.initials}, sin foto)

#### 6. Sin og:image:width/height/alt ni twitter:image por página (previews sociales degradadas)
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** DrDiente declara og:image y twitter:card/title/description; el patrón completo incluye dimensiones e image alt para que las previsualizaciones en WhatsApp/Facebook/Twitter rendericen al instante y con imagen correcta, impulsando el CTR del contenido compartido (canal de descubrimiento social).
- **Debod le falta:** grep de 'og:image:width|og:image:height|og:image:alt|twitter:image' en debodsite2026/src = 0. Debod tiene og:image global pero ningún og:image:width/height (que acelera y estabiliza el render del preview), ningún og:image:alt (accesibilidad/contexto), y al parecer ningún twitter:image dedicado por página. Cuando alguien comparte una landing o post de Debod en WhatsApp (canal enorme en España) o redes, el preview puede salir sin imagen o recortado, reduciendo el CTR del tráfico social/referido.
- **➡️ Recomendación (Madrid):** Añadir en el Helmet base (y por página cuando proceda) og:image:width (1200), og:image:height (630), og:image:alt descriptivo y twitter:image explícito. Estabiliza y mejora los previews al compartir en WhatsApp/redes, subiendo el CTR del tráfico social hacia las landings.
- _Evidencia:_ grep -rn 'og:image:width|og:image:height|og:image:alt|twitter:image' debodsite2026/src = 0 resultados

#### 7. Sin tiempo de lectura / recuento de palabras en los posts del blog
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: bajo*

- **DrDiente tiene:** 158 referencias a readingTime/readTime/wordCount en el código: cada post muestra 'X min de lectura', señal de UX que reduce rebote y, vía wordCount en schema, refuerza a Google la profundidad del artículo.
- **Debod le falta:** 0 referencias a readingTime/readTime/wordCount en todo debodsite2026/src. Los posts no muestran tiempo estimado de lectura (peor UX, más rebote percibido) ni exponen wordCount en el schema del artículo (señal de profundidad que ayuda al ranking de contenido informativo). Es un detalle de completitud que el patrón ganador sí cubre.
- **➡️ Recomendación (Madrid):** Calcular y mostrar 'X min de lectura' en BlogPost.jsx (palabras/200) y añadir wordCount al BlogPosting schema. Mejora la UX percibida (menos rebote) y aporta una señal de profundidad de contenido. Esfuerzo trivial: una función de conteo.
- _Evidencia:_ grep -rn 'readingTime|readTime|minutos de lectura|wordCount' debodsite2026/src = 0; drdiente = 158

#### 8. Sin endpoint serverless de integración con software clínico (api/ solo tiene lead.js)
*Dimensión: Completitud (lo que se escapó) · Esfuerzo: medio*

- **DrDiente tiene:** Carpeta api/ con DOS funciones: lead.js (captación) y dentalink-webhook.js (puente con el software de gestión clínica para conversiones offline). Dos integraciones server-side.
- **Debod le falta:** La carpeta api/ de Debod contiene ÚNICAMENTE lead.js. No hay ningún segundo endpoint (ni webhook de gestión clínica, ni endpoint de revalidación/ISR, ni función de envío de reseñas). Más allá del puente offline ya señalado por otro analista, esto confirma que toda la lógica server-side de Debod se reduce a un único punto, sin la red de integraciones que sostiene el bucle de datos del referente.
- **➡️ Recomendación (Madrid):** Planificar la capa api/ de Debod más allá de lead.js: a corto plazo un endpoint para ingestar/refrescar reseñas de Google (alimenta el pipeline de reseñas) y, a medio plazo, el webhook de gestión clínica para conversiones offline. Consolida el bucle de datos que hace escalable la captación.
- _Evidencia:_ ls debodsite2026/api/ = solo lead.js (7038 bytes); drdiente api/ = lead.js + dentalink-webhook.js (7115 bytes)

---

## Plan de acción sugerido (orden por ROI = alto impacto / bajo esfuerzo primero)

1. [alto/bajo] **Sin FAQPage embebido dentro de los posts del blog** → Añadir un array faqs[] por post y emitir un nodo FAQPage adicional en blogPostSchema(post) junto al Article. Es bajo esfuerzo (campo de datos + schema) y alto r
2. [alto/bajo] **Cero enlazado interno dentro del cuerpo de los posts** → Insertar 2-4 enlaces internos contextuales por post hacia la landing de tratamiento/servicio relevante y hacia posts hermanos (ej. post de bruxismo → /tratamien
3. [alto/bajo] **Sin etiquetas hreflang (alternate es/en/x-default) en ninguna URL** → Replicar el useEffect route-aware de hreflang en debod: declarar hreflang='es-ES' / 'en' / 'x-default' apuntando a las URLs correctas (dominio debod). Como debo
4. [alto/bajo] **routes.mjs (fuente única de rutas) no incluye rutas/idioma EN para sitemap+prerender** → Añadir las nuevas rutas EN (/dental-implants-madrid, etc.) a scripts/routes.mjs para que entren automáticamente en prerender y sitemap. Ventaja de Debod: tiene 
5. [alto/bajo] **Página 'dentista cerca de mí' (intent de proximidad) ausente** → Crear /dentista-cerca-de-mi (o /clinica-dental-cerca-de-mi-madrid) con H1 de proximidad, mapa embebido, lista de barrios y bocas de metro a X minutos de Ferraz 
6. [alto/bajo] **Cero AggregateRating en páginas de servicio/tratamiento/home** → Añadir aggregateRating (ratingValue + reviewCount, datos reales de Google Reviews de la clínica de Argüelles) al nodo MedicalClinic/LocalBusiness del @graph en 
7. [alto/bajo] **Sin GA4 ni medición de tráfico/comportamiento** → Instalar @vercel/analytics (1 línea, sin coste) Y configurar GA4 vía el GTM nuevo respetando consentimiento. Es el esfuerzo más bajo con retorno inmediato: diri
8. [alto/bajo] **Página de Citas sin ningún tracking de conversión** → Instrumentar Citas.jsx: disparar evento dataLayer (p.ej. 'click_whatsapp' / 'click_call' con event_id) en cada CTA. Es de bajo esfuerzo y descubre cuántas conve
9. [alto/bajo] **Clics de WhatsApp y teléfono sin medición en toda la web** → Envolver cada CTA de WhatsApp y teléfono con un handler que haga dataLayer.push({event:'contact_whatsapp'/'contact_call', event_id}). Permite contarlos como con
10. [alto/bajo] **Fuentes cargadas con @import CSS render-blocking (mata LCP/Core Web Vitals)** → Mover las fuentes a <link rel=preload as=style> + <link rel=stylesheet> en el <head> de index.html (eliminar el @import del CSS), usar display=optional o swap c
11. [alto/bajo] **Sin atributo sameAs (perfiles sociales/Doctoralia/Google Business) en NINGÚN schema** → Añadir array sameAs al nodo MedicalClinic/Organization con las URLs reales de Debod: Google Business Profile, Doctoralia (perfil de la clínica y de cada doctor)
12. [alto/medio] **Posts ~3x más cortos (2.367 vs 7.586 caracteres)** → Ampliar cada post a 900-1.400 palabras con estructura rica (H2/H3, listas, negritas, mini-tabla comparativa cuando aplique). Adaptar al contexto Madrid (precios
13. [alto/medio] **No existe sistema i18n (LanguageContext/t) en todo el sitio** → Portar LanguageContext.jsx a debodsite2026/src/i18n/ (clave localStorage 'debod_lang', default 'es'). Idéntico patrón t(es,en). Habilita capturar tráfico intern
14. [alto/medio] **Sin página/funnel de turismo dental** → Crear página 'Dental tourism in Madrid' (EN) + variante ES /turismo-dental. Traducir el patrón: turismo europeo (UK/Irlanda/Escandinavia) que viene a Madrid por
15. [alto/medio] **Páginas de barrio/distrito (geo-landings) inexistentes** → Crear 4-6 landings de barrio de Madrid colindantes con Argüelles, una por URL (/dentista-arguelles, /dentista-moncloa, /dentista-chamberi, /dentista-centro-madr
