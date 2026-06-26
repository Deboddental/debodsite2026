// ── Static prerendering (SSG) ──────────────────────────────────────────────
// Runs AFTER `vite build`. Serves the built `dist/` over a tiny static server,
// drives a headless Chrome to each route, lets React + react-helmet-async render,
// then writes the fully-rendered HTML to dist/<route>/index.html.
//
// Why: the site is a client-rendered SPA. Without prerendering, search engines
// and (especially) AI crawlers receive an empty <div id="root"></div> shell.
// Baking real HTML per route makes every page independently indexable with its
// own <title>, meta, canonical and JSON-LD.

import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { createServer } from 'http'
import { getAllRoutes } from './scripts/routes.mjs'

const allRoutes = getAllRoutes()
console.log(`\n🔍 Pre-rendering ${allRoutes.length} routes...\n`)

// ── Serve dist folder ──────────────────────────────────────────────────────
const distDir = resolve('dist')
const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

const server = createServer((req, res) => {
  const urlPath = req.url.split('?')[0]
  let filePath = resolve(distDir, urlPath === '/' ? 'index.html' : urlPath.slice(1))

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = resolve(filePath, 'index.html')
  }

  if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
    const ext = filePath.split('.').pop()
    const types = {
      html: 'text/html', js: 'application/javascript', css: 'text/css',
      json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
      jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml',
      mp4: 'video/mp4', webm: 'video/webm', woff2: 'font/woff2',
    }
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' })
    res.end(readFileSync(filePath))
  } else {
    // SPA fallback so react-router can resolve the route client-side.
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(indexHtml)
  }
})

const PORT = 4180

server.listen(PORT, async () => {
  console.log(`📦 Static server running on http://localhost:${PORT}`)

  // On Vercel/serverless build containers full Chrome can't run, so use
  // @sparticuz/chromium + puppeteer-core. Locally, the full `puppeteer`
  // package ships its own Chrome.
  const onVercel = !!process.env.VERCEL
  let browser
  if (onVercel) {
    const { default: chromium } = await import('@sparticuz/chromium')
    const { default: puppeteer } = await import('puppeteer-core')
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport,
    })
    console.log('  🧩 Using @sparticuz/chromium (serverless build)')
  } else {
    const { default: puppeteer } = await import('puppeteer')
    browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })
    console.log('  🧩 Using local puppeteer Chrome')
  }

  let success = 0
  let failed = 0

  for (const route of allRoutes) {
    try {
      const page = await browser.newPage()
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      })
      // Give React + useEffect (canonical/meta/JSON-LD) time to settle.
      await new Promise((r) => setTimeout(r, 1200))

      const html = await page.content()

      const clean = route.replace(/^\/+|\/+$/g, '') // strip leading/trailing slashes
      const outPath = route === '/'
        ? resolve(distDir, 'index.html')
        : resolve(distDir, clean, 'index.html')

      mkdirSync(dirname(outPath), { recursive: true })
      writeFileSync(outPath, html)

      success++
      if (success % 10 === 0 || allRoutes.length - success < 5) {
        console.log(`  ✅ ${success}/${allRoutes.length} rendered`)
      }
      await page.close()
    } catch (err) {
      failed++
      console.log(`  ❌ Failed: ${route} — ${err.message}`)
    }
  }

  // 404 page: render the NotFound route to dist/404.html so Vercel can serve it
  // with a real HTTP 404 for unmatched paths (no SPA catch-all → no soft-404s).
  try {
    const page = await browser.newPage()
    await page.goto(`http://localhost:${PORT}/__not-found-${Date.now()}`, { waitUntil: 'networkidle2', timeout: 30000 })
    await new Promise((r) => setTimeout(r, 800))
    writeFileSync(resolve(distDir, '404.html'), await page.content())
    await page.close()
    console.log('  ✅ 404.html rendered')
  } catch (err) {
    console.log(`  ❌ Failed: 404.html — ${err.message}`)
  }

  await browser.close()
  server.close()

  console.log(`\n🎉 Pre-rendering complete!`)
  console.log(`   ✅ ${success} pages rendered`)
  if (failed > 0) console.log(`   ❌ ${failed} pages failed`)
  console.log(`   📁 Output: dist/\n`)

  if (failed > 0) process.exitCode = 1
})
