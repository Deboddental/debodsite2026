# DEBOD ← DrDiente · Plan de Estructura Ganadora

Comparativa de arquitectura entre `drdiente-website` (referencia, prod, SEO probado) y
`debodsite2026` (actual), con plan para replicar el patrón ganador.

> **Tesis:** DrDiente NO gana por mejor código — gana por **3 cosas**: (1) prerendering
> (HTML estático por ruta → visible para crawlers e IA), (2) **mucha** superficie SEO
> (35 páginas long-form + landings locales/idioma), (3) profundidad de contenido por página.
> DEBOD ya tiene **mejor arquitectura de componentes** (data-driven, primitivos `ui/`).
> Plan = montar el patrón ganador de DrDiente SOBRE la arquitectura limpia de DEBOD.
> NO copiar páginas hardcodeadas de 1000 líneas — mapear el patrón a plantillas + datos.

---

## 1. Comparativa estructural

| Dimensión | DrDiente (gana) | DEBOD (actual) | Gap |
|---|---|---|---|
| **Renderizado** | Prerender SSG (`prerender.mjs` + puppeteer) → HTML por ruta | SPA puro (Vercel rewrite a `index.html`) | 🔴 CRÍTICO — IA/bots no ven contenido |
| **Sitemap** | `vite-plugin-sitemap` auto (static + blog) | Ninguno | 🔴 |
| **Páginas** | 35 (rich, 100–1000 líneas) | 16 (plantillas finas 40–512) | 🟠 |
| **Landings locales** | `/dentista-cdmx`, `/dentista-polanco`, `/dentista-roma-norte`, `/dentista-cerca-de-mi` | 8 slugs especialidad arguelles (finos) | 🟠 contenido fino |
| **Landings idioma (turismo)** | 7 páginas EN (`/dental-implants-mexico-city`...) | Ninguna | 🟡 (opcional Madrid) |
| **Reviews** | Hub `/reviews` + por-tratamiento (implantes/sonrisa/alineadores) | Solo componente `Reviews` en home | 🟠 |
| **Home** | ~11 secciones (Hero, ScrollVideo, BeforeAfter, Treatments, WhyDrDiente, Technology, Team, Doctor, Testimonials, FAQ, CTA) | ~6 (Hero, Treatments, BeforeAfter, Philosophy, ClinicalExpertise, Reviews) | 🟠 |
| **Blog** | 7 batches de posts + slugs en sitemap | `data/blog.js` (1 archivo) | 🟡 escala |
| **i18n** | ES/EN (`LanguageContext`) + rutas EN-only | Ninguno | 🟡 |
| **Head/SEO** | Manual `document.title`/meta + JSON-LD inline (baked por prerender) | `react-helmet-async` + `JsonLd` (limpio, pero solo client-side) | 🟢 ok, falta prerender |
| **Canonical** | Self-ref canonical+og:url por ruta (App.jsx) | Helmet por página | 🟢 ok |
| **Componentes UI** | Hardcoded por página | `ui/`: Breadcrumb, CtaBand, JsonLd, MarkdownBody, PageHero, RelatedGrid | ✅ DEBOD mejor |

---

## 2. Lo que DEBOD ya hace mejor (NO tocar)
- Modelo data-driven: `data/{services,treatments,team,blog,reviews,seo}.js` + rutas dinámicas.
- Primitivos reutilizables `components/ui/` (Breadcrumb, PageHero, RelatedGrid, CtaBand...).
- `seo.js` con factories de JSON-LD por tipo (MedicalWebPage, MedicalProcedure, Breadcrumb).
- `react-helmet-async` (más declarativo que el manejo manual de DrDiente).

---

## 3. Plan de implementación (priorizado)

### 🔴 FASE 1 — Infra SEO (el mayor diferenciador, sin esto lo demás no cuenta)
1. **Prerender SSG.** Portar `prerender.mjs` de DrDiente. Servir `dist/`, recorrer todas las
   rutas (static + slugs de services/treatments/blog/team), capturar HTML por ruta, escribir
   `dist/<ruta>/index.html`. Añadir script `"prerender"` en `package.json` post-build.
   - Vercel: cambiar `vercel.json` rewrite para servir los `index.html` prerenderizados
     (no reescribir todo a la raíz). Mantener catch-all SPA solo como fallback.
2. **Sitemap.** Añadir `vite-plugin-sitemap`; generar `dynamicRoutes` leyendo slugs de
   `data/services.js`, `data/treatments.js`, `data/blog.js`, `data/team.js`. `hostname`
   = `https://deboddentalclinic.com`.
3. **robots.txt** + referencia a sitemap en `public/`.
4. Verificar canonical/og:url self-referencing por ruta (ya hay base en helmet).

### 🟠 FASE 2 — Superficie + profundidad de contenido
5. **Engordar landings de especialidad** (8 slugs arguelles ya existen): pasar de plantilla
   fina a long-form (hero, beneficios, proceso, FAQ, antes/después, reviews, CTA) — vía
   secciones de datos enriquecidos, no hardcode.
6. **Reviews hub + por-servicio.** Crear `/resenas/` (índice) y `/resenas/:servicio/`
   reutilizando `data/reviews.js` + filtrado por slug.
7. **Enriquecer Home.** Añadir secciones que faltan: TechnologySection, TeamSection,
   DoctorSection, Testimonials, FAQ, CTABand final (DEBOD ya tiene Hero/Treatments/
   BeforeAfter/Philosophy/ClinicalExpertise/Reviews).

### 🟡 FASE 3 — Escala (opcional / fase 2 de negocio)
8. **i18n EN** para turismo dental en Madrid (LanguageContext + rutas `-madrid-spain`).
9. **Blog a batches** si el volumen de posts crece.
10. **Landings de barrio** Madrid (chamberí, moncloa, etc.) replicando patrón local-SEO.

---

## 4. Rutas objetivo DEBOD (espejo del patrón DrDiente, contexto Madrid/Argüelles)
```
/                                   home (rich, ~10 secciones)
/servicios/  /servicios/:slug       índice + especialidad
/<8 slugs especialidad arguelles>   landings locales long-form
/tratamientos/:slug                 tratamiento (long-form)
/resenas/  /resenas/:servicio       NUEVO — hub + por-servicio
/equipo/  /equipo/:doctor           equipo + perfil
/blog/  /blog/:cat/:slug            blog
/nosotros /dental-lab /financiacion /ubicaciones /contacto /citas-arguelles /privacidad
+ (opcional EN) landings turismo
```

---

## 5. Dependencias a añadir
- `vite-plugin-sitemap` (dev)
- `puppeteer-core` + `@sparticuz/chromium` (prerender) — o `@prerenderer/rollup-plugin`

## 6. Orden de ataque recomendado
FASE 1 completa primero (prerender+sitemap = ROI SEO inmediato) → medir → FASE 2.
