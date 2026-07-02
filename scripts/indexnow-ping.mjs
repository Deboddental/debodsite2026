// ── IndexNow submitter ──────────────────────────────────────────────────────
// Notifies IndexNow-enabled engines (Bing, Yandex — and, importantly, the Bing
// index that powers ChatGPT search & Copilot) that URLs changed, so they recrawl
// fast. Run manually AFTER a production deploy:  node scripts/indexnow-ping.mjs
//
// It reads the freshly built dist/sitemap.xml and submits every URL in one batch.
// The key is published as a static file at /<key>.txt (in public/) so IndexNow can
// verify ownership. If the key file is renamed/removed, update KEY below to match.

import { readFileSync } from 'fs'
import { resolve } from 'path'

const HOST = 'deboddentalclinic.com'
const KEY = '51f7975319b1830d3839b9ec89e8311b'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const xml = readFileSync(resolve('dist/sitemap.xml'), 'utf-8')
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

if (!urlList.length) {
  console.error('✗ No URLs found in dist/sitemap.xml — run the build first.')
  process.exit(1)
}

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
})

// IndexNow returns 200 (accepted) or 202 (accepted, pending). 403 = key not found
// at keyLocation (deploy the key file first); 422 = URLs don't match host.
console.log(`IndexNow → HTTP ${res.status} for ${urlList.length} URLs (key: ${KEY_LOCATION})`)
if (![200, 202].includes(res.status)) {
  console.error('✗ IndexNow rejected the submission:', await res.text())
  process.exit(1)
}
console.log('✓ Submitted. Bing/Copilot/ChatGPT-search index will recrawl these URLs.')
