# GEO Audit Report: Debod Dental Clinic

**Fecha:** 2026-06-25  
**URL:** https://deboddentalclinic.com  
**Tipo de negocio:** Local Business — Clínica dental (Argüelles, Madrid)  
**Páginas analizadas:** 8 representativas (de 58 en sitemap)

---

## Resumen ejecutivo

**GEO Score global: 76/100 (Good)**

Base técnica GEO excelente (prerenderizado, robots con AI crawlers, schema rico, FAQPage en home + servicios + tratamientos, NAP consistente en el propio sitio). Los frenos son externos/de contenido: falta de `llms.txt` real, ausencia de datos cuantitativos citables (precios, plazos, tasas de éxito), NAP inconsistente en fichas de terceros y `aggregateRating` del schema que no coincide con el Google Business Profile real.

### Desglose de puntuación

| Categoría | Score | Peso | Ponderado |
|---|---|---|---|
| AI Citability | 82/100 | 25% | 20.5 |
| Brand Authority | 62/100 | 20% | 12.4 |
| Content E-E-A-T | 72/100 | 20% | 14.4 |
| Technical GEO | 83/100 | 15% | 12.4 |
| Schema & Structured Data | 88/100 | 10% | 8.8 |
| Platform Optimization | 71/100 | 10% | 7.1 |
| **GEO Score global** | | | **76/100** |

---

## Hallazgos por severidad

2 críticos · 13 altos · 15 medios · 12 bajos

### Críticos (2)

**1. [Content E-E-A-T] Las fotos de los 5 miembros del equipo son imágenes de stock de Unsplash, no los profesionales reales. Las URLs en /equipo/ y /equipo/dr-victor-guerrero/ apuntan a images.unsplash.com (p.ej. photo-1612349317150-... para 'Dr. Víctor Guerrero' y photo-1582750433449-... para 'Dr. César Rodríguez'). Para un YMYL médico, mostrar rostros falsos junto a credenciales reales es un golpe directo a la Confianza (T) y a la Experiencia (E): si un usuario o un motor verifica la cara contra Google/Instagram, la incoherencia destruye la credibilidad de toda la página.**

- **Fix:** Reemplazar de inmediato por fotografías profesionales reales de los doctores y del equipo, con alt descriptivo (p.ej. 'Dr. Víctor Guerrero, ortodoncista, Debod Dental Clinic Madrid'). Idealmente que coincidan con las fotos de su perfil de Instagram/LinkedIn (sameAs) para reforzar la verificación cruzada de entidad.
- **Páginas:** /equipo/, /equipo/dr-victor-guerrero/, /equipo/dr-cesar-rodriguez/ (y resto del equipo)

**2. [Platform Optimization] Defecto de prerender en las páginas de mayor valor para cita IA: /especialidades/ortodoncia y /tratamientos/invisalign sirven el MISMO <title> que el home ('Debod Dental Clinic — Clínica Dental en Argüelles, Madrid | Odontología Honesta') y un canonical que apunta a la home (href='https://deboddentalclinic.com/'), NO self-referencing. Esto contradice el recon ('canonicals self-referencing'). Afecta potencialmente a las 8 especialidades + 23 tratamientos (~31 páginas). Google AI Overviews y Bing Copilot desambiguan entidades por title/canonical únicos: con title duplicado y canonical al home, estas páginas no se citarán por su propia URL en consultas como 'ortodoncia Argüelles' o 'Invisalign Madrid'; el motor consolidará la señal en la home, perdiendo la cita granular de tratamiento.**

- **Fix:** Corregir la generación SSG para que cada ruta dinámica (especialidades/* y tratamientos/*) inyecte su propio <title> único, meta description y <link rel=canonical> self-referencing en el HTML prerenderizado (no el shell del index). Verificar con curl -sL <url> | grep -E '<title>|canonical' que cada una difiere. /equipo y /resenas ya lo hacen bien, así que el sistema soporta titles únicos: el fallo está en las rutas de especialidad/tratamiento.
- **Páginas:** https://deboddentalclinic.com/especialidades/ortodoncia, https://deboddentalclinic.com/tratamientos/invisalign (y por extensión las 8 especialidades + 23 tratamientos)


### Prioridad Alta (13)

**1. [AI Citability] Las respuestas carecen de datos cuantitativos citables. Ni la home ni la pagina de implantes incluyen precios ('desde X EUR'), plazos en meses, numero de sesiones ni tasas de exito. ChatGPT/Perplexity priorizan y citan pasajes con cifras concretas frente a respuestas cualitativas como 'puede durar muchos anos' o 'presupuesto claro'.**

- **Fix:** Anadir cifras verificables a las FAQ y al cuerpo: rango de precio orientativo del implante unitario y de la rehabilitacion (con nota '*precio orientativo, sujeto a valoracion'), duracion tipica en semanas/meses, tasa de exito de oseointegracion (ej. >95-98%) y financiacion (hasta 60 meses, 0% hasta 12). Reflejar tambien en schema (priceRange / offers en LocalBusiness y en las answers de FAQPage).
- **Páginas:** https://deboddentalclinic.com/ , https://deboddentalclinic.com/dentista-de-implantes-arguelles-madrid-espana/

**2. [AI Citability] No existe /llms.txt real (la ruta devuelve el HTML del index). Sin este fichero las IAs no disponen de un mapa curado de los pasajes y URLs mas citables (FAQ, especialidades, NAP, doctores).**

- **Fix:** Publicar un /llms.txt real servido como text/plain con: descripcion de la clinica + NAP, doctores y credenciales, enlaces a las 8 especialidades y a /resenas/ /financiacion/ /contacto/, y una seccion de definiciones y respuestas clave. Servirlo como archivo estatico, no como ruta capturada por el router.
- **Páginas:** https://deboddentalclinic.com/llms.txt

**3. [Brand Authority] Inconsistencia de NAP entre fuentes de terceros, lo que daña la confianza de la entidad para las IA. El canal de YouTube (@deboddental7181) y otras fichas muestran un teléfono antiguo (914 476 225 / +34 914 476 225) en lugar del NAP oficial confirmado (+34 689 10 47 14). Las IA penalizan la ambigüedad de entidad cuando el mismo negocio aparece con teléfonos distintos en plataformas distintas.**

- **Fix:** Auditar TODAS las fichas de terceros (Google Business Profile, YouTube, Doctoralia, Top Doctors, Páginas Amarillas, Facebook, LinkedIn, clinicaortodonciamadrid.com, clinicasespinoza.es, tusonrisaideal.com) y unificar el NAP exacto: 'C. de Ferraz, 24, 28008 Madrid · +34 689 10 47 14 · info@deboddentalclinic.com'. Eliminar o corregir el teléfono 914 476 225 en cada ficha donde aparezca.
- **Páginas:** YouTube @deboddental7181; deboddentalclinic.com (página de contacto/equipo)

**4. [Brand Authority] Discrepancia entre el aggregateRating del schema (5.0/87 reviews en el sitio) y el rating real del Google Business Profile mostrado en terceros (4.9/5 con ~197 reseñas, otra fuente cita 181). Esta divergencia entre el dato declarado y el verificable externamente reduce la fiabilidad para IA y puede activar filtros anti-spam de rich results de Google.**

- **Fix:** Alinear el aggregateRating del JSON-LD (#clinic) con el GBP real: usar 4.9 y el recuento vigente de reseñas de Google (~197), o documentar claramente que el rating del sitio proviene de una fuente agregada distinta. Idealmente, sincronizar automáticamente con el conteo real de Google para evitar deriva futura.
- **Páginas:** deboddentalclinic.com (JSON-LD home #clinic); GBP/Google Maps

**5. [Brand Authority] Ficha de Facebook duplicada/fragmentada. Existe la página vanity gestionada (facebook.com/debodclinicadental) PERO también una página auto-generada de categoría sin gestionar (facebook.com/pages/category/Dentist---Dental-Office/Debod-Dental-Clinic-101396118398287/, ~110 likes). Dos entidades de Facebook para el mismo negocio confunden el grafo de entidad de las IA y diluyen señales de autoridad.**

- **Fix:** Reclamar y fusionar (merge) la página duplicada 101396118398287 con la oficial @debodclinicadental desde la configuración de Facebook (Meta Business Suite > Páginas > Combinar). Verificar que el sameAs del schema apunte solo a la URL canónica oficial.
- **Páginas:** facebook.com (ambas fichas); schema sameAs en deboddentalclinic.com

**6. [Content E-E-A-T] No hay señales de frescura ni de revisión médica: ninguna página de doctor, especialidad ni tratamiento muestra 'Última actualización' o 'Revisado por [Dr.] el [fecha]'. En contenido médico (YMYL) la frescura y la firma de autor-revisor son pilares de Pericia/Autoridad que los motores generativos buscan explícitamente.**

- **Fix:** Añadir en cada página de especialidad/tratamiento una línea visible 'Contenido revisado por el Dr. Víctor Guerrero / Dr. César Rodríguez · Actualizado en [mes/año]' enlazando al perfil del doctor. Reflejarlo también en JSON-LD MedicalWebPage con lastReviewed, reviewedBy (tipo Physician/Person) y dateModified.
- **Páginas:** Las 8 especialidades y los 23 tratamientos; ambos perfiles de doctor

**7. [Content E-E-A-T] Falta el logo de marca real (señal de identidad/marca verificable). Sin un logo propio coherente en header, favicon, Schema Organization 'logo' y OG image, se debilita el reconocimiento de entidad y la Confianza percibida por humanos y por LLMs que mapean la marca.**

- **Fix:** Diseñar y desplegar el logo real de Debod Dental Clinic en header, favicon e imagen OG, y declararlo en el JSON-LD (Organization/MedicalClinic property 'logo' con URL absoluta). Asegurar consistencia de marca en todas las páginas.
- **Páginas:** Global (header, favicon, OG); #clinic JSON-LD

**8. [Technical GEO] llms.txt NO existe. La ruta /llms.txt (apex y www) devuelve HTTP 200 con Content-Type text/html y el mismo cuerpo de 134.891 bytes que el index; no es un fichero de texto. Mismo comportamiento en /llms-full.txt. Los asistentes AI que buscan este estandar emergente no encuentran un mapa curado del sitio. Es el gap GEO principal.**

- **Fix:** Crear /llms.txt real servido como text/plain en el host canonico. Estructura: H1 con el nombre (Debod Dental Clinic), 1-2 frases de resumen (clinica dental en Arguelles, Madrid; NAP C. de Ferraz 24, 28008; +34 689 10 47 14), y secciones markdown con enlaces a las 8 especialidades, 23 tratamientos, /equipo/, /resenas/ y blog. Anadir /llms-full.txt con el contenido expandido. En Vercel, generarlo como ruta estatica en build (no SPA fallback) y excluirlo del rewrite catch-all del index.
- **Páginas:** https://www.deboddentalclinic.com/llms.txt , https://www.deboddentalclinic.com/llms-full.txt

**9. [Technical GEO] Soft-404: rutas inexistentes (ej. /zzz-bogus-path-12345) devuelven HTTP 200 con la home completa (~20KB de texto, title de la clinica) y SIN meta noindex. Los crawlers AI pueden indexar URLs basura como contenido valido y diluir la autoridad de las paginas reales.**

- **Fix:** Configurar una pagina 404 real que devuelva status HTTP 404 (en Vercel, 404.html / not-found route) o, como minimo, anadir <meta name=robots content=noindex> en el fallback. Evitar que el catch-all SPA sirva la home con 200 para cualquier ruta.
- **Páginas:** https://www.deboddentalclinic.com/zzz-bogus-path-12345 (cualquier ruta inexistente)

**10. [Schema & Structured Data] El logo del publisher está roto: el JSON-LD (Organization #clinic y publisher.logo de cada Article) apunta a https://deboddentalclinic.com/logo.png, pero esa URL devuelve content-type text/html (HTML del index, 404 silencioso), no una imagen. Google exige un logo válido para los rich results de Organization y para el publisher de Article; un logo inexistente invalida estas mejoras.**

- **Fix:** Subir un logo real (PNG/SVG, fondo claro, >112x112px) a /logo.png y verificar que responde con content-type image/*. Coincide con la debilidad conocida de falta de logo de marca: crearlo resuelve a la vez branding y schema. Confirmar en Rich Results Test.
- **Páginas:** / (todas las páginas, #clinic) y todos los posts de /blog/ (publisher.logo)

**11. [Platform Optimization] llms.txt NO existe: /llms.txt devuelve 200 con content-type text/html (es el fallback SPA del index, no un archivo de texto). Aunque llms.txt no es factor de ranking en ningún motor, ChatGPT y Perplexity usan cada vez más esta convención como mapa curado de la entidad. Sin él, la clínica deja a los crawlers reconstruir el contexto desde 57 páginas sin priorización, y compite peor en consultas conversacionales de marca/local.**

- **Fix:** Generar un /llms.txt real (text/plain) en el SSG con: H1 del negocio (Debod Dental Clinic, clínica dental en Argüelles, Madrid), NAP completo (C. de Ferraz 24, 28008 Madrid · +34 689 10 47 14), los dos doctores y su especialidad (Dr. Víctor Guerrero – Ortodoncia/Invisalign; Dr. César Rodríguez – Prostodoncia/Rehabilitación Oral), y enlaces a las páginas clave (especialidades, tratamientos, reseñas, equipo). Servir con content-type text/plain (no HTML). Verificar: curl -sL -w '%{content_type}' /llms.txt debe devolver text/plain.
- **Páginas:** https://deboddentalclinic.com/llms.txt

**12. [Platform Optimization] Bing Copilot subóptimo: robots.txt sólo declara bots de OpenAI/Perplexity/Anthropic/Google-Extended + wildcard, sin directiva explícita para bingbot/msnbot. Copilot se nutre del índice de Bing; el wildcard permite el rastreo, pero la indexación en Bing es históricamente más lenta y peor cubierta que Google para sitios locales nuevos. No hay señal de Bing Webmaster Tools / IndexNow, que son los factores que más mueven la aparición en Copilot.**

- **Fix:** 1) Dar de alta el dominio en Bing Webmaster Tools y enviar el sitemap (https://deboddentalclinic.com/sitemap.xml). 2) Implementar IndexNow (clave en raíz + ping a api.indexnow.org en cada deploy) para indexación casi inmediata en Bing/Copilot. 3) Añadir bloque explícito 'User-agent: bingbot / Allow: /' en robots.txt por claridad. Bing también pondera fuerte la consistencia NAP con Bing Places: crear/verificar la ficha de Bing Places for Business.
- **Páginas:** https://deboddentalclinic.com/robots.txt, https://deboddentalclinic.com/sitemap.xml

**13. [Platform Optimization] Google AI Overviews / Gemini — riesgo de E-E-A-T por fotos de stock: el schema Person de los doctores es sólido (credenciales, sameAs), pero /equipo usa imágenes de stock de Unsplash en lugar de los doctores reales y falta el logo de marca. Google AI Overviews y Gemini ponderan señales de confianza de negocio local (autoría real, coherencia entre Person schema, foto y Google Business Profile). La incongruencia foto-stock vs. persona real debilita la confianza de entidad que decide qué fuente local se cita.**

- **Fix:** Sustituir las fotos de stock de /equipo por fotos reales de Dr. Víctor Guerrero y Dr. César Rodríguez, con alt descriptivo que incluya nombre+especialidad, y referenciarlas en el campo 'image' de cada Person JSON-LD. Añadir el logo real de marca y declararlo en 'logo' del schema Organization/MedicalClinic y en OG image. Asegurar que la misma foto aparece en el Google Business Profile para reforzar la coincidencia de entidad que usan AI Overviews.
- **Páginas:** https://deboddentalclinic.com/equipo


### Prioridad Media (15)

**1. [AI Citability] La FAQ de la pagina de implantes es corta y deja sin cubrir preguntas de alta intencion: precio/financiacion del implante, candidatos y contraindicaciones, postoperatorio y cuidados, alternativas (puente vs implante), carga inmediata / implante el mismo dia y cuanto tarda la oseointegracion. Mas Q&A equivale a mas superficie citable.**

- **Fix:** Ampliar la FAQ de la URL de implantes a 6-8 preguntas autocontenidas (cada respuesta legible y citable sin contexto) e incluirlas en el bloque FAQPage JSON-LD de esa misma URL para reforzar la extractabilidad.
- **Páginas:** https://deboddentalclinic.com/dentista-de-implantes-arguelles-madrid-espana/

**2. [AI Citability] Los testimonios destacados de la home se sirven como video con el texto fallback 'Tu navegador no admite la reproduccion de video', sin transcripcion. Ese contenido no es extraible ni citable por las IAs, que no procesan el audio del video embebido.**

- **Fix:** Anadir bajo cada video una transcripcion o cita textual del testimonio (nombre + tratamiento + frase literal), como ya se hace en el carrusel de resenas escritas. Asi el contenido pasa a ser texto citable y refuerza E-E-A-T.
- **Páginas:** https://deboddentalclinic.com/

**3. [Brand Authority] Perfiles de directorio sanitario presentes pero vacíos de reseñas/señal social. Doctoralia tiene perfil de clínica pero 0 reseñas; el GBP concentra toda la prueba social. Las IA valoran la corroboración multiplataforma de reseñas; tener reviews solo en Google reduce la robustez de la entidad frente a consultas en Perplexity/ChatGPT que cruzan fuentes.**

- **Fix:** Activar un flujo de solicitud de reseñas que dirija a pacientes también a Doctoralia y, opcionalmente, Top Doctors (no solo a Google). Completar/optimizar el perfil de Doctoralia (servicios, fotos reales, horarios, descripción) y reclamar verificación. Meta: 15-25 reseñas reales en Doctoralia en 6 meses.
- **Páginas:** doctoralia.es/clinicas/debod-dental-clinic; topdoctors.es/clinica-dental/debod-dental-clinic

**4. [Brand Authority] Ausencia de una entidad de marca consolidada en grafos de conocimiento (sin Wikipedia/Wikidata, ni Knowledge Panel propio claro). Esperable en una clínica pequeña, pero limita el reconocimiento automático de 'Debod Dental Clinic' como entidad nombrada por las IA. El Dr. Guerrero SÍ tiene fuerte autoridad de persona (Top Doctors, método SAS, prensa en murcia.com y gironanoticies.com) que la marca infrautiliza.**

- **Fix:** Crear una entidad en Wikidata para 'Debod Dental Clinic' (con NAP, doctores como P-statements, sameAs a redes y sitio). Apalancar la autoridad del Dr. Guerrero: enlazar bidireccionalmente desde smartalignerservices.com/victor-guerrero/ y notas de prensa hacia la clínica, y reflejar esas menciones de prensa como sameAs/citations en el schema Person del Dr. Guerrero.
- **Páginas:** wikidata.org (crear); schema Person en deboddentalclinic.com/equipo/

**5. [Brand Authority] Canal de YouTube (@deboddental7181) existe pero con baja actividad/optimización y handle no alineado con la marca (deboddental7181 vs debodclinicadental usado en IG/FB). Inconsistencia de handle entre plataformas debilita la asociación de entidad cross-platform que usan las IA.**

- **Fix:** Renombrar el handle de YouTube a @debodclinicadental o @deboddentalclinic para alinear con el resto de redes; actualizar la descripción del canal con NAP oficial y enlace al sitio; añadir el canal de YouTube al array sameAs del schema (#clinic), que actualmente solo lista Instagram y Facebook.
- **Páginas:** youtube.com/@deboddental7181; schema sameAs (#clinic) en deboddentalclinic.com

**6. [Brand Authority] sameAs del schema incompleto. El JSON-LD #clinic solo declara Instagram + Facebook. No incluye LinkedIn (es.linkedin.com/company/debod-dental-clinic), YouTube, Doctoralia, Top Doctors ni el perfil personal del Dr. Guerrero en LinkedIn. Cuantas más URLs verificables enlace sameAs, mejor consolidan las IA la identidad de la entidad.**

- **Fix:** Ampliar sameAs en el schema MedicalClinic/LocalBusiness (#clinic) para incluir: LinkedIn de empresa, YouTube, Doctoralia y Top Doctors. En el schema Person del Dr. Guerrero, añadir su LinkedIn (linkedin.com/in/víctor-guerrero-86272533), Top Doctors (topdoctors.es/doctor/victor-guerrero-alvarado/) y su página en Smart Aligner Services.
- **Páginas:** deboddentalclinic.com (JSON-LD #clinic y Person x2)

**7. [Content E-E-A-T] Ausencia de citas/fuentes externas autoritativas en el contenido. La página 'Nosotros' afirma 'tratamientos basados en evidencia científica' pero no enlaza a ninguna fuente (sociedades científicas, guías clínicas, estudios). Los motores generativos premian el contenido que cita fuentes verificables.**

- **Fix:** Incluir referencias a autoridades reconocidas (SEPA, SEPES, Consejo General de Dentistas de España, European Aligner Society) y enlaces salientes a guías clínicas relevantes en páginas de tratamiento. Añadir un enlace de verificación al colegio profesional (ICOEM) para los números de colegiado.
- **Páginas:** /nosotros/, páginas de tratamiento; perfiles de doctor

**8. [Content E-E-A-T] Los números de colegiado se muestran como texto plano sin verificación ni vínculo a un registro oficial, y solo los dos doctores propietarios tienen colegiado visible; el resto del equipo (Dra. de los Mozos, Dra. López) no muestra número de colegiado en /equipo/.**

- **Fix:** Mostrar el número de colegiado de TODOS los profesionales clínicos y enlazar al buscador del colegio oficial (Ilustre Colegio Oficial de Odontólogos y Estomatólogos de la I Región) para permitir verificación. Reflejar el colegiado en el JSON-LD Person de cada doctor (identifier/hasCredential).
- **Páginas:** /equipo/ y páginas individuales de cada especialista

**9. [Technical GEO] Inconsistencia de host canonico. El apex deboddentalclinic.com hace 307 a www.deboddentalclinic.com, pero TODOS los canonicals (ej. home: https://deboddentalclinic.com/) y los <loc> del sitemap apuntan al apex (no-www) que redirige. El canonical declarado nunca responde 200 directamente; ademas robots.txt declara Sitemap con la URL apex que tambien 307. Senal mixta de URL preferida para crawlers AI y buscadores.**

- **Fix:** Decidir un unico host canonico y alinearlo. Recomendado: hacer del apex el host 200 (o cambiar todos los canonicals/sitemap/robots a www para coincidir con el host que realmente sirve 200). Hoy el host servido es www pero los canonicals son apex: unificar a uno solo y que ese responda 200 sin redireccion.
- **Páginas:** https://deboddentalclinic.com/ (307->www) vs canonical=https://deboddentalclinic.com/ ; Sitemap directive en robots.txt usa apex

**10. [Technical GEO] Faltan headers de seguridad. Solo presente Strict-Transport-Security. Ausentes: Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. No bloquea el crawling AI pero reduce las senales de confianza tecnica (E-E-A-T) y deja superficie de clickjacking/MIME-sniffing.**

- **Fix:** Anadir en vercel.json (headers): X-Content-Type-Options: nosniff; X-Frame-Options: SAMEORIGIN; Referrer-Policy: strict-origin-when-cross-origin; Permissions-Policy: geolocation=(), camera=(), microphone=(); y una CSP basica (al menos default-src self con allowlist para Instagram/Facebook/Google fonts y schema).
- **Páginas:** https://www.deboddentalclinic.com/ (todas las paginas, cabeceras de respuesta)

**11. [Schema & Structured Data] Las imágenes de Article usan ruta relativa, no URL absoluta. Ejemplo en /blog/salud-dental/bruxismo-estres-dientes/: "image":"/Images/blog/webp/bruxismo-estres.webp". Google requiere URLs absolutas y rastreables en la propiedad image de Article; una ruta relativa puede impedir que la imagen se asocie al artículo en resultados enriquecidos.**

- **Fix:** Cambiar image a URL absoluta completa: https://deboddentalclinic.com/Images/blog/webp/bruxismo-estres.webp. Idealmente usar un objeto ImageObject con url, width y height (>1200px de ancho) para elegibilidad de rich results.
- **Páginas:** Todos los posts de /blog/ (Article.image)

**12. [Schema & Structured Data] Los doctores se marcan como Person genérico, no como Physician (subtipo médico de schema.org), y no se enlazan como employee de la clínica. Además les faltan propiedades de autoridad/E-E-A-T: medicalSpecialty, alumniOf (Máster UCM del Dr. Rodríguez), memberOf (colegio/asociaciones), knowsAbout y award (ponente internacional del Dr. Guerrero). El nodo #clinic tampoco tiene la propiedad employee.**

- **Fix:** Cambiar @type a Physician (o añadir Physician al array) para ambos doctores; añadir medicalSpecialty (Orthodontics / Prosthodontics), alumniOf (Universidad Complutense de Madrid), knowsAbout (Invisalign, rehabilitación oral) y award. Añadir employee:[{@id doctor1},{@id doctor2}] en el nodo #clinic para enlazar el grafo entidad-clínica.
- **Páginas:** / y /nosotros/ (nodos Person de Dr. Guerrero y Dr. Rodríguez)

**13. [Schema & Structured Data] El nodo MedicalClinic no expone su catálogo de servicios de forma estructurada: faltan availableService y hasOfferCatalog/makesOffer. Existen 8 páginas de especialidad (MedicalWebPage) y 23 de tratamiento (MedicalProcedure) que no están vinculadas desde la entidad clínica, perdiendo una oportunidad de que los motores generativos relacionen clínica↔servicios.**

- **Fix:** Añadir al nodo #clinic un availableService o hasOfferCatalog (OfferCatalog) con MedicalProcedure/Service referenciando por @id las 8 especialidades y 23 tratamientos ya marcados. Asegurar @id consistentes para que el grafo conecte clínica → especialidad → tratamiento.
- **Páginas:** / (#clinic), enlazando /ortodoncista-... y demás páginas de especialidad/tratamiento

**14. [Platform Optimization] Perplexity / ChatGPT search — falta de señales de frescura y autoría a nivel de artículo en el blog. El blog (/blog, /diario) responde 200 e ItemList existe, pero el grep en vivo no detectó datePublished/dateModified ni autor a nivel de post. Perplexity y ChatGPT priorizan fuentes con fecha visible y autoría atribuida (Article/MedicalWebPage con author=Person y dateModified) para decidir qué citar en consultas informativas dentales.**

- **Fix:** Añadir a cada post de blog schema Article o MedicalWebPage con author (vinculado al @id del Dr. correspondiente), datePublished y dateModified, y mostrar la fecha y el autor visiblemente en la página (no sólo en JSON-LD). Esto convierte el blog en superficie citable por Perplexity/ChatGPT para consultas como 'cuánto dura un tratamiento de Invisalign'.
- **Páginas:** https://deboddentalclinic.com/blog, https://deboddentalclinic.com/diario

**15. [Platform Optimization] Schema duplicado de reseñas en cada página: el JSON-LD de Review x6 y AggregateRating 5.0 se repite idéntico en home, especialidades y tratamientos. Repetir las MISMAS 6 reseñas y el AggregateRating en páginas que no son la entidad principal puede ser interpretado por Google como rich-result no representativo de esa página concreta (riesgo de que ignore el aggregateRating fuera de la página de la clínica/reseñas) y diluye la señal por página para AI Overviews.**

- **Fix:** Limitar Review + AggregateRating al nodo principal del negocio (#clinic en home y /resenas). En páginas de especialidad/tratamiento, mantener FAQPage y el MedicalProcedure/MedicalWebPage específicos, y referenciar la clínica vía @id (provider/about) sin reinyectar las 6 reseñas completas. Esto refuerza la relevancia por página sin duplicar la prueba social.
- **Páginas:** https://deboddentalclinic.com/especialidades/ortodoncia, https://deboddentalclinic.com/tratamientos/invisalign


### Prioridad Baja (12)

**1. [AI Citability] Varios encabezados usan marcas de enfasis incrustadas a mitad del titulo (ej. 'Preguntas _frecuentes_', 'N.o 1 en Rehabilitacion Oral _en Madrid._'). Al extraerse fragmentan el titulo y ensucian el pasaje citado.**

- **Fix:** Aplicar el enfasis visual via CSS (span con clase) en vez de cortar la frase con etiquetas em/i a mitad, de modo que el heading se lea como una unidad limpia ('Preguntas frecuentes', 'N.o 1 en Rehabilitacion Oral en Madrid').
- **Páginas:** https://deboddentalclinic.com/

**2. [AI Citability] Falta una frase-definicion canonica al inicio de la pagina de implantes. La intro arranca con marketing ('uno de nuestros servicios mas avanzados') antes de definir que es un implante dental, que es justo el snippet que las IAs prefieren citar para 'que es un implante'.**

- **Fix:** Anadir una definicion corta y autocontenida al comienzo del cuerpo: 'Un implante dental es una raiz artificial de titanio que se integra en el hueso (oseointegracion) para sostener una corona, puente o protesis...', antes del contenido promocional.
- **Páginas:** https://deboddentalclinic.com/dentista-de-implantes-arguelles-madrid-espana/

**3. [Brand Authority] Sin presencia ni menciones orgánicas en foros/comunidades (Reddit, foros de pacientes). No aparecen hilos ni discusiones reales sobre la clínica. Las IA generativas a veces citan experiencias de usuarios de Reddit/foros como señal de confianza para recomendaciones locales.**

- **Fix:** No fabricar reseñas. En su lugar, fomentar contenido orgánico legítimo: animar a pacientes satisfechos a compartir su experiencia, y publicar contenido educativo del Dr. Guerrero/Dr. Rodríguez que pueda ser referenciado y citado de forma natural. Considerar participación profesional genuina en comunidades de odontología (no autopromoción).
- **Páginas:** reddit.com (sin presencia actual)

**4. [Brand Authority] Dr. César Rodríguez (Prostodoncia/Rehabilitación Oral, Máster UCM) tiene una huella de entidad externa mucho más débil que el Dr. Guerrero. Solo aparece tangencialmente en el directorio UCM. Esto desequilibra la autoridad percibida del equipo: las IA reconocen bien a un doctor pero apenas al otro.**

- **Fix:** Reforzar la presencia de tercera parte del Dr. Rodríguez: crear/reclamar perfil en Top Doctors y Doctoralia, perfil de LinkedIn optimizado con credenciales UCM, y enlazar su afiliación verificable a la UCM desde el schema Person. Añadir sus sameAs verificables al JSON-LD una vez creados.
- **Páginas:** deboddentalclinic.com/equipo/ (schema Person Dr. Rodríguez); topdoctors.es / doctoralia.es (crear perfil)

**5. [Brand Authority] DEBILIDAD CONOCIDA confirmada como riesgo de autoridad: las fotos del equipo en /equipo/ son stock (Unsplash), no los doctores reales, y falta el logo de marca real. Para reconocimiento de entidad visual y E-E-A-T, las IA y los usuarios valoran fotos reales coherentes entre el sitio y las fichas de terceros (GBP, LinkedIn, Top Doctors).**

- **Fix:** Sustituir las imágenes de stock de /equipo/ por fotografías profesionales reales de los Dres. Guerrero y Rodríguez, y reutilizar las MISMAS fotos en GBP, LinkedIn, Doctoralia y Top Doctors para reforzar la coincidencia de entidad cross-platform. Incorporar un logo de marca real y usarlo de forma consistente como imagen/logo en el schema (#clinic) y en todas las fichas.
- **Páginas:** deboddentalclinic.com/equipo/; GBP, LinkedIn, Doctoralia, Top Doctors

**6. [Content E-E-A-T] La página 'Nosotros' usa cifras potencialmente inconsistentes/poco respaldadas: '+15 años de experiencia' junto a 'Apertura sede actual 2023'. Sin contexto, un revisor puede leerlo como contradictorio (clínica abierta en 2023 vs 15 años de experiencia del equipo).**

- **Fix:** Aclarar la redacción: distinguir 'experiencia del equipo' de 'años de la clínica en esta sede' (p.ej. 'Más de 15 años de experiencia de nuestros especialistas · Sede actual desde 2023'). Mantener coherencia entre el texto y el JSON-LD foundingDate.
- **Páginas:** /nosotros/

**7. [Technical GEO] Los valores <loc> del sitemap.xml estan pretty-printed con saltos de linea y espacios dentro de la etiqueta (<loc> newline espacios https://... newline </loc>). Tolerado por la mayoria de parsers pero no es la forma estricta del estandar sitemaps.org y puede causar problemas con parsers estrictos.**

- **Fix:** Serializar cada <loc> en una sola linea sin whitespace interno: <loc>https://host/ruta/</loc>. Verificar tras el cambio que las 58 URLs siguen apuntando al host canonico unificado.
- **Páginas:** https://www.deboddentalclinic.com/sitemap.xml

**8. [Technical GEO] Fortaleza confirmada (sin accion critica): pagina profunda de tratamiento (implantes) sirve 11.260 chars de texto prerenderizado real con 3 bloques JSON-LD (MedicalProcedure + FAQPage) directamente al User-Agent ClaudeBot, con brotli y TTFB 0.41s. El prerender SSG funciona correctamente para crawlers AI.**

- **Fix:** Mantener. Tras resolver el host canonico, re-verificar que las paginas profundas conservan el canonical correcto con trailing slash consistente.
- **Páginas:** https://www.deboddentalclinic.com/tratamientos/implantes-dentales-arguelles-madrid-espana/

**9. [Schema & Structured Data] dateModified es igual a datePublished en los Articles (ej. ambos 2026-03-15). Esto desperdicia la señal de frescura que los motores generativos valoran y, si el contenido se actualiza, no lo refleja.**

- **Fix:** Poblar dateModified con la fecha real de última edición cada vez que se revise un post; mantenerlo distinto de datePublished cuando haya cambios.
- **Páginas:** Todos los posts de /blog/

**10. [Schema & Structured Data] El autor de los Article es Organization (Debod Dental Clinic) en lugar de un Person/Physician. El contenido visible firma 'Equipo Debod Dental', pero atribuir la autoría a un doctor concreto refuerza la señal de expertise (E-E-A-T) que ChatGPT/Perplexity usan para citar fuentes médicas.**

- **Fix:** Cuando un post sea atribuible, usar author como Person/Physician con @id al nodo del doctor correspondiente (p. ej. el Dr. Guerrero en artículos de ortodoncia). Mantener publisher como Organization.
- **Páginas:** Todos los posts de /blog/ (Article.author)

**11. [Schema & Structured Data] El nodo WebSite no incluye potentialAction (SearchAction). Es opcional, pero si existe búsqueda interna, declarar SearchAction habilita el sitelinks search box y ayuda a los rastreadores a entender la estructura.**

- **Fix:** Si hay buscador interno, añadir potentialAction de tipo SearchAction con urlTemplate y query-input al nodo WebSite. Si no hay búsqueda, omitir sin penalización.
- **Páginas:** / (nodo WebSite)

**12. [Platform Optimization] Cita local en AI Overviews/Copilot depende de señales off-site no verificables en el sitio: Google Business Profile y Bing Places son los desencadenantes principales para la cita en respuestas locales ('dentista en Argüelles'). El sitio tiene NAP consistente y sameAs a Instagram/Facebook, pero no hay sameAs a Google Business Profile ni a directorios médicos (Doctoralia/Top Doctors) que los motores usan para corroborar la entidad.**

- **Fix:** Añadir al array sameAs del schema MedicalClinic los perfiles de Google Business Profile, Bing Places, Doctoralia y/o Top Doctors de la clínica y de cada doctor. Mantener NAP idéntico carácter a carácter en todos ellos. Esto refuerza la corroboración cruzada de entidad que AI Overviews, Copilot y Gemini exigen antes de citar un negocio local.
- **Páginas:** https://deboddentalclinic.com/ (schema #clinic), https://deboddentalclinic.com/equipo


---

## Análisis por categoría

### AI Citability — 82/100

El sitio tiene una citabilidad muy alta: el contenido vive en bloques extraibles ideales para IA (FAQ en formato Q&A literal, listas numeradas, vinetas con terminos clave en negrita, NAP y credenciales embebidos como respuestas directas autocontenidas). El techo lo marcan la ausencia de cifras concretas (precios, plazos, tasas de exito), la falta de llms.txt real y los testimonios atados a video sin transcripcion.

### Brand Authority — 62/100

Debod Dental Clinic tiene una presencia en terceros sólida para una clínica local: GBP fuerte (4.9/5 ~197 reseñas), Instagram activo (~3.878 seguidores), perfiles en Doctoralia, Top Doctors y Páginas Amarillas, LinkedIn de empresa, y un activo de autoridad excepcional en el Dr. Víctor Guerrero (Top Doctors, método SAS/Smart Aligner Services, prensa, ponente internacional). Las debilidades clave para reconocimiento de entidad por IA son la inconsistencia de NAP entre fuentes, una ficha de Facebook duplicada/sin gestionar, perfiles de directorio vacíos de reseñas, y la ausencia de menciones orgánicas (Reddit) o de una entidad de marca consolidada (sin Wikipedia/Wikidata).

### Content E-E-A-T — 72/100

El E-E-A-T textual es fuerte: bios detalladas de ambos doctores con credenciales reales, números de colegiado (28013382 y 28015194), formación universitaria, docencia y ponencias internacionales, más una página "Nosotros" con principios claros y aggregateRating 5.0. El factor que más penaliza la Confianza es que TODAS las fotos del equipo son stock de Unsplash (no los doctores reales), lo que socava la verificabilidad de identidad. Faltan además fechas de "última revisión", firma de autor médico y citas a fuentes externas.

### Technical GEO — 83/100

Infraestructura tecnica GEO solida: prerender SSG real (paginas profundas sirven 11KB+ de texto y 3 bloques JSON-LD a ClaudeBot), robots.txt permite todos los crawlers AI, sitemap de 58 URLs, compresion brotli y TTFB ~0.3-0.4s con cache edge HIT en Vercel. Penalizada porque /llms.txt NO existe (devuelve el HTML del index de 134KB, no un fichero real), y por hallazgos adicionales: soft-404 (rutas inexistentes devuelven 200 con la home), inconsistencia de host (apex 307 a www pero canonicals y sitemap apuntan al apex) y ausencia de headers de seguridad salvo HSTS.

### Schema & Structured Data — 88/100

El structured data es excepcionalmente completo: grafo JSON-LD con MedicalClinic/LocalBusiness/Dentist (aggregateRating 5.0/87, geo, horarios, medicalSpecialty, hasMap, award), Person x2, WebSite, Review x6, FAQPage en home/8 especialidades/23 tratamientos, BreadcrumbList, MedicalWebPage, MedicalProcedure e ItemList. El supuesto gap de Article SÍ está cubierto: los posts de blog incluyen Article + BreadcrumbList. Los defectos que restan puntos son de calidad/validez, no de ausencia: el logo del publisher (logo.png) devuelve HTML 404 en vez de imagen, las imágenes de Article usan rutas relativas, y los doctores son Person genérico (no Physician) sin enlazar como employee de la clínica.

### Platform Optimization — 71/100

Base sólida y multiplataforma: SSG prerenderizado, robots permisivo con todos los bots IA, NAP local consistente, FAQPage y schema MedicalClinic/Dentist con aggregateRating 5.0/87. Pero hay dos defectos verificados en vivo que limitan la cita en Google AI Overviews y Bing Copilot: las páginas de especialidades (/especialidades/ortodoncia) y tratamientos (/tratamientos/invisalign) sirven el title del home y canonical apuntando a la home (no self-referencing), y falta llms.txt real. Estos defectos afectan precisamente a las ~31 páginas de mayor intención de cita.

---

## Quick wins (esta semana)

1. **[AI Citability]** Anadir cifras verificables a las FAQ y al cuerpo: rango de precio orientativo del implante unitario y de la rehabilitacion (con nota '*precio orientativo, sujeto a valoracion'), duracion tipica en semanas/meses, tasa de exito de oseointegracion (ej. >95-98%) y financiacion (hasta 60 meses, 0% hasta 12). Reflejar tambien en schema (priceRange / offers en LocalBusiness y en las answers de FAQPage).
2. **[AI Citability]** Publicar un /llms.txt real servido como text/plain con: descripcion de la clinica + NAP, doctores y credenciales, enlaces a las 8 especialidades y a /resenas/ /financiacion/ /contacto/, y una seccion de definiciones y respuestas clave. Servirlo como archivo estatico, no como ruta capturada por el router.
3. **[Brand Authority]** Auditar TODAS las fichas de terceros (Google Business Profile, YouTube, Doctoralia, Top Doctors, Páginas Amarillas, Facebook, LinkedIn, clinicaortodonciamadrid.com, clinicasespinoza.es, tusonrisaideal.com) y unificar el NAP exacto: 'C. de Ferraz, 24, 28008 Madrid · +34 689 10 47 14 · info@deboddentalclinic.com'. Eliminar o corregir el teléfono 914 476 225 en cada ficha donde aparezca.
4. **[Brand Authority]** Alinear el aggregateRating del JSON-LD (#clinic) con el GBP real: usar 4.9 y el recuento vigente de reseñas de Google (~197), o documentar claramente que el rating del sitio proviene de una fuente agregada distinta. Idealmente, sincronizar automáticamente con el conteo real de Google para evitar deriva futura.
5. **[Brand Authority]** Reclamar y fusionar (merge) la página duplicada 101396118398287 con la oficial @debodclinicadental desde la configuración de Facebook (Meta Business Suite > Páginas > Combinar). Verificar que el sameAs del schema apunte solo a la URL canónica oficial.
6. **[Content E-E-A-T]** Añadir en cada página de especialidad/tratamiento una línea visible 'Contenido revisado por el Dr. Víctor Guerrero / Dr. César Rodríguez · Actualizado en [mes/año]' enlazando al perfil del doctor. Reflejarlo también en JSON-LD MedicalWebPage con lastReviewed, reviewedBy (tipo Physician/Person) y dateModified.
7. **[Content E-E-A-T]** Diseñar y desplegar el logo real de Debod Dental Clinic en header, favicon e imagen OG, y declararlo en el JSON-LD (Organization/MedicalClinic property 'logo' con URL absoluta). Asegurar consistencia de marca en todas las páginas.

## Plan 30 días

- **Semana 1 — Críticos + quick wins técnicos** (llms.txt real, alinear aggregateRating).
- **Semana 2 — Contenido citable:** cifras (precios/plazos/tasas de éxito), ampliar FAQ, transcripciones de vídeos.
- **Semana 3 — Autoridad de marca:** unificar NAP en terceros (quitar teléfono 914…), fusionar Facebook duplicado, reseñas en Doctoralia.
- **Semana 4 — Schema + plataformas:** schema faltante (Article en blog, Physician), refuerzo por plataforma.
