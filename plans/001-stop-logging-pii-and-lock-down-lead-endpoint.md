# Plan 001: Stop logging patient PII and lock down the /api/lead endpoint

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 19ab444..HEAD -- api/lead.js`
> If `api/lead.js` changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: security
- **Planned at**: commit `19ab444`, 2026-06-25

## Why this matters

`api/lead.js` is the serverless endpoint that receives every contact-form
submission for a dental clinic operating in Spain (RGPD/GDPR applies, and
clinical interest can be health-adjacent personal data). Today it does two
risky things: (1) it writes the **full lead payload — name, email, phone, IP,
message — to Vercel logs** on every submission, creating an unbounded,
retained store of personal data outside the CRM; and (2) it accepts POSTs from
**any origin** (`Access-Control-Allow-Origin: *`) with **no anti-spam or size
limit**, so any website or bot can push junk leads into the clinic's CRM and
inflate the logs. This plan removes PII from logs and tightens the endpoint to
the clinic's own origins plus a basic spam gate — without adding new
infrastructure.

## Current state

- `api/lead.js` — Vercel serverless function (default export `handler`). It
  validates `contact.firstName` + `contact.phone`, builds a `payload`, POSTs it
  to the GoHighLevel CRM webhook (`process.env.GHL_WEBHOOK_URL`), logs, and
  returns `{ ok, webhookOk, whatsappUrl }`.

CORS block (lines 37–43):

```js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
```

PII logging block (lines 107–115):

```js
    // Backup en logs de Vercel — lead recuperable aunque el CRM esté caído
    console.log('[LEAD]', JSON.stringify({
      ts:      new Date().toISOString(),
      ip,
      email:   contact.email,
      phone,
      servicio: contact.servicio,
      payload,
    }))
```

The client that calls this endpoint is `src/pages/Contacto.jsx` (it POSTs JSON
`{ contact, tracking, event_id }` to `/api/lead` from the same origin). The
production site is served at `https://deboddentalclinic.com` (see `BASE_URL` in
`src/data/seo.js:3` and the sitemap hostname in `vite.config.js:15`).

Convention: this file uses 2-space indent, no semicolons, single quotes, and
`const`/early-return style. Match it exactly.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Install | `npm install` | exit 0 |
| Lint | `npm run lint` | exit 0, no errors |
| Build | `npm run build` | exit 0, `dist/` produced |

(There is no test runner configured in this repo — `package.json` has no `test`
script. Verification is via lint + the manual curl checks in the Test plan.)

## Scope

**In scope** (the only file you should modify):
- `api/lead.js`

**Out of scope** (do NOT touch):
- `src/pages/Contacto.jsx` — the client form. A required consent checkbox and
  honeypot field are added there in Plan 002 / Plan 004. This plan must keep
  working whether or not those land, so the honeypot check here treats a
  **missing** honeypot field as allowed (only a *non-empty* honeypot is
  rejected).
- The CRM webhook payload shape (the object posted to `GHL_WEBHOOK_URL`) — the
  CRM mapping depends on these exact field names. You may stop logging them but
  must keep sending them.

## Git workflow

- Branch: `advisor/001-lock-down-lead-endpoint`
- Conventional commits (match `git log`): e.g.
  `fix(security): drop PII from lead logs and restrict /api/lead origin`
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Replace the wildcard CORS with an origin allowlist

At the top of `handler`, replace the three `setHeader` lines and the OPTIONS
handling with an allowlist. Produce this shape:

```js
const ALLOWED_ORIGINS = [
  'https://deboddentalclinic.com',
  'https://www.deboddentalclinic.com',
]

export default async function handler(req, res) {
  const origin = req.headers.origin || ''
  // Same-origin browser requests send no Origin header — allow those.
  // Cross-origin requests are only allowed from the clinic's own domains.
  // Vercel preview deploys (*.vercel.app) are also allowed for testing.
  const isAllowed =
    !origin ||
    ALLOWED_ORIGINS.includes(origin) ||
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin)

  if (origin && isAllowed) res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  if (origin && !isAllowed) {
    return res.status(403).json({ error: 'Origin not allowed' })
  }
```

**Verify**: `npm run lint` → exit 0.

### Step 2: Add a payload size guard and a honeypot/spam gate

Immediately after `const { contact = {}, tracking = {}, event_id = '' } = body`
(currently line 47), add:

```js
    // Reject oversized submissions (defends logs + CRM from abuse).
    const rawLen =
      typeof req.body === 'string'
        ? req.body.length
        : JSON.stringify(req.body || {}).length
    if (rawLen > 10000) {
      return res.status(413).json({ error: 'Payload too large' })
    }

    // Honeypot: a hidden field bots tend to fill. A NON-EMPTY value means bot.
    // A missing field is fine (the client may not send one yet).
    if (typeof contact.website === 'string' && contact.website.trim() !== '') {
      // Pretend success so the bot gets no signal; do not post to CRM.
      return res.status(200).json({ ok: true, webhookOk: false })
    }

    // Bound individual free-text fields before they reach the CRM.
    const cap = (v, n) => (typeof v === 'string' ? v.slice(0, n) : v)
    contact.firstName = cap(contact.firstName, 80)
    contact.lastName  = cap(contact.lastName, 80)
    contact.email     = cap(contact.email, 160)
    contact.mensaje   = cap(contact.mensaje, 2000)
```

**Verify**: `npm run lint` → exit 0.

### Step 3: Remove PII from the log line

Replace the existing `console.log('[LEAD]', ...)` block (lines 107–115) with a
metadata-only log that contains **no** name, email, phone, IP, or message:

```js
    // Non-PII telemetry only. The CRM (GHL_WEBHOOK_URL) is the system of record
    // for lead data — never persist patient PII to application logs (RGPD).
    console.log('[LEAD]', JSON.stringify({
      ts:       new Date().toISOString(),
      event_id,
      servicio: contact.servicio || '',
      hasEmail: Boolean(contact.email),
      hasPhone: Boolean(contact.phone),
    }))
```

Leave the `ip` and `userAgent` variables in place where they are still added to
`payload` (the CRM may legitimately use them) — only stop **logging** them.

**Verify**: `grep -nE "email:\s*contact\.email|^\s*ip,|phone,$" api/lead.js`
→ returns matches **only** inside the `payload` object (lines ~99 and ~62),
**not** inside any `console.log`. Then run `npm run build` → exit 0.

### Step 4: Confirm no PII remains in any log statement

**Verify**:
```
grep -nE "console\.(log|error|warn)" api/lead.js
```
Read each matched line. None of them may include `contact.email`, `email:`,
`phone`, `contact.firstName`, `payload`, or `ip`. The pre-existing
`console.error('[LEAD] Webhook error', ...)` and `console.warn('[LEAD] GHL_WEBHOOK_URL not set ...')`
are fine (they carry no PII) and should be left as-is.

## Test plan

No automated test runner exists. Verify manually with the dev server:

1. `npm run dev`, then in a second terminal:
2. Same-origin happy path (should succeed):
   ```
   curl -i -X POST http://localhost:5173/api/lead \
     -H 'Content-Type: application/json' \
     -d '{"contact":{"firstName":"Test","phone":"600000000","email":"t@e.com","servicio":"Implantes"},"tracking":{},"event_id":"evt_test"}'
   ```
   Expect HTTP 200 and JSON `{ "ok": true, ... }`.
   > NOTE: `vite dev` does not run Vercel functions. If `/api/lead` 404s under
   > `npm run dev`, use `npx vercel dev` instead (it serves `api/`). If neither
   > is available in the executor environment, SKIP the curl checks and rely on
   > lint + build + the grep verifications, and say so in the status note.
3. Honeypot (should fake-succeed, no CRM post): add `"website":"x"` to
   `contact`. Expect HTTP 200 `{ "ok": true, "webhookOk": false }`.
4. Disallowed cross-origin: add `-H 'Origin: https://evil.example'`. Expect
   HTTP 403.
5. Oversized: send a `mensaje` field of 20000 chars. Expect HTTP 413.
6. Inspect the dev server stdout: the `[LEAD]` log line must NOT contain the
   email, phone, name, or IP.

## Done criteria

ALL must hold:

- [ ] `npm run lint` exits 0
- [ ] `npm run build` exits 0
- [ ] `grep -nE "console\.(log|warn|error)" api/lead.js` shows no PII fields
      (`contact.email`, `phone`, `firstName`, `payload`, `ip`) in any log call
- [ ] `grep -n "Access-Control-Allow-Origin', '\*'" api/lead.js` returns nothing
      (wildcard removed)
- [ ] `grep -n "contact.website" api/lead.js` returns the honeypot check
- [ ] No files outside `api/lead.js` modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report (do not improvise) if:

- `api/lead.js` does not match the "Current state" excerpts (codebase drifted).
- Removing fields from the log appears to require changing the CRM `payload`
  object (it should not — logging and the webhook payload are independent).
- You cannot determine the real production origin(s) — do not guess a different
  domain; report and ask. (The canonical domain is `deboddentalclinic.com` per
  `src/data/seo.js:3`; only change the allowlist if that file says otherwise.)

## Maintenance notes

- If real rate-limiting is needed later (this plan only adds a honeypot + size
  cap), the right tool on Vercel is a KV/Upstash counter keyed by `client_ip`,
  or Cloudflare Turnstile on the form — both deferred here to avoid new infra.
- When Plan 002 adds the honeypot `website` field and consent flag to the form,
  this endpoint already tolerates them (honeypot checked, consent ignored
  server-side). If you later want to *require* consent server-side, add a
  `contact.consent === true` check next to the firstName/phone validation.
- Reviewer should confirm no log line anywhere in `api/` prints patient PII.
