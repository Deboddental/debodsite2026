# Plan 002: Make the contact form validate input and stop reporting false success

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 19ab444..HEAD -- src/pages/Contacto.jsx`
> If `src/pages/Contacto.jsx` changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (but see Maintenance: do this BEFORE Plan 003, which also edits this file)
- **Category**: bug
- **Planned at**: commit `19ab444`, 2026-06-25

## Why this matters

The contact form is the clinic's main lead-capture path. Today it tells every
visitor "¡Mensaje enviado!" and opens WhatsApp **even when the submission was
empty or the server rejected it**. Three things combine to cause this:
`<form noValidate>` disables the browser's built-in `required`/`type=email`
checks, `handleSubmit` does no JavaScript validation, and the code ignores a
non-OK response from `/api/lead` (it only reads the body when `res.ok`, then
unconditionally shows success). The result is lost or garbage leads and
patients who believe they contacted the clinic when they did not. This plan
adds real client-side validation and makes the success/error states honest.

## Current state

- `src/pages/Contacto.jsx` — the `/contacto/` page. Controlled form with
  `formData` state (`firstName, lastName, email, telefono, phoneCountryCode,
  servicio, otroServicio, comoNosConocio, mensaje`), `loading`, `submitted`,
  `error` state. `handleSubmit` builds tracking + a WhatsApp URL, POSTs to
  `/api/lead`, then shows a success panel.

`handleSubmit` tail — the bug (lines 159–193):

```js
    // POST /api/lead — graceful fallback si no existe aún
    let waUrl = buildWhatsAppUrl(formData, normalizedPhone)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* contact, tracking, event_id */ }),
      })
      if (res.ok) {
        const data = await res.json().catch(() => ({}))
        if (data.whatsappUrl) waUrl = data.whatsappUrl
      }
    } catch {
      // backend no disponible aún — fallback a WhatsApp directo
    }

    setLoading(false)
    setSubmitted(true)
    setTimeout(() => { window.open(waUrl, '_blank') }, 700)
```

The `<form>` opening tag (line 333): `<form onSubmit={handleSubmit} noValidate className="space-y-5">`

The error display already exists (lines 481–483):
```jsx
{error && (
  <p className="font-jakarta text-red-400 text-sm">{error}</p>
)}
```

Convention: 2-space indent, no semicolons, single quotes, controlled inputs via
`handleChange`. Match it.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Install | `npm install` | exit 0 |
| Lint | `npm run lint` | exit 0 |
| Dev server | `npm run dev` | serves on http://localhost:5173 |
| Build | `npm run build` | exit 0 |

(No test runner is configured — verify via lint, build, and the manual browser
checks in the Test plan.)

## Scope

**In scope**:
- `src/pages/Contacto.jsx`

**Out of scope** (do NOT touch):
- `api/lead.js` — server validation is handled in Plan 001.
- The WhatsApp fallback design itself: keep opening WhatsApp on a *successful*
  submit. The fix is to gate it on validation + a non-error response, not to
  remove it. (The clinic relies on the WhatsApp handoff.)
- Tracking / `dataLayer` push logic (Plan 003 governs that).

## Git workflow

- Branch: `advisor/002-contact-form-validation`
- Conventional commit, e.g. `fix(contacto): validate form and stop false success states`
- Do NOT push or open a PR unless instructed.

## Steps

### Step 1: Add a validator helper above the component

Above `export default function Contacto()`, add:

```js
function validateForm(formData) {
  const errors = {}
  if (!formData.firstName.trim()) errors.firstName = 'Introduce tu nombre.'
  if (!formData.lastName.trim())  errors.lastName  = 'Introduce tu apellido.'
  const email = formData.email.trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Introduce un email válido.'
  const digits = formData.telefono.replace(/\D/g, '')
  if (digits.length < 6) errors.telefono = 'Introduce un teléfono válido.'
  return errors
}
```

**Verify**: `npm run lint` → exit 0.

### Step 2: Validate at the top of `handleSubmit` and stop early on failure

At the very start of `handleSubmit`, after `e.preventDefault()`, before
`setLoading(true)`:

```js
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setError('Revisa los campos marcados antes de enviar.')
      return
    }
```

(Keep using the existing single `error` string for the message. A
field-by-field error map is a nice-to-have but out of scope — one summary
message is enough to fix the bug.)

**Verify**: `npm run lint` → exit 0.

### Step 3: Only show success when the request actually succeeded

Replace the tail of `handleSubmit` (the `try/catch` + the final
`setLoading/setSubmitted/setTimeout` block shown in Current state) with logic
that distinguishes outcomes:

```js
    let waUrl = buildWhatsAppUrl(formData, normalizedPhone)
    let ok = false
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* keep the existing contact/tracking/event_id body unchanged */ }),
      })
      if (res.ok) {
        ok = true
        const data = await res.json().catch(() => ({}))
        if (data.whatsappUrl) waUrl = data.whatsappUrl
      }
    } catch {
      ok = false
    }

    setLoading(false)

    if (!ok) {
      setError('No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.')
      return
    }

    setSubmitted(true)
    setTimeout(() => { window.open(waUrl, '_blank') }, 700)
```

Keep the existing request body (the `contact`/`tracking`/`event_id` object) exactly
as it is now — only the control flow around the response changes.

> Design note: when the server is unreachable the form now shows an error
> instead of a fake success. The success panel already offers a manual "abrir
> WhatsApp" link (lines 322–329), so a user who hits the error can still reach
> the clinic. Do NOT auto-open WhatsApp on failure — that's what made the bug
> invisible.

**Verify**: `npm run lint` → exit 0.

### Step 4: Clear the error when the user edits a field

In `handleChange`, after the `setFormData(...)` call, add `if (error) setError('')`
so a stale error message disappears as the user corrects input.

**Verify**: `npm run lint` → exit 0, then `npm run build` → exit 0.

## Test plan

No automated runner. Verify in the browser via `npm run dev` →
`http://localhost:5173/contacto/`:

1. **Empty submit**: click "Enviar" with all fields blank → an error message
   appears, NO success panel, WhatsApp does NOT open.
2. **Invalid email**: fill name/lastname/phone, set email to `abc` → error,
   no success.
3. **Short phone**: valid email, phone `12` → error, no success.
4. **Happy path** (with the API reachable, or stub it to 200): all fields valid
   → success panel shows and WhatsApp opens.
5. **Server error path**: temporarily make `/api/lead` return 500 (or block the
   network in devtools) and submit a valid form → the error message shows, no
   success panel. Revert the stub afterward.

## Done criteria

ALL must hold:

- [ ] `npm run lint` exits 0
- [ ] `npm run build` exits 0
- [ ] `grep -n "validateForm" src/pages/Contacto.jsx` returns the helper + its call
- [ ] `grep -n "if (!ok)" src/pages/Contacto.jsx` returns the failure branch
- [ ] Manual: empty form does NOT reach the success panel (Test plan step 1)
- [ ] No files outside `src/pages/Contacto.jsx` modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report if:

- `Contacto.jsx` does not match the "Current state" excerpts (drift).
- The `submitted` success panel or `error` display markup is no longer present
  where described — the control-flow change assumes both exist.
- A verification fails twice after a reasonable fix attempt.

## Maintenance notes

- **Ordering**: do this plan BEFORE Plan 003 (RGPD consent). Both edit
  `Contacto.jsx`; Plan 003 adds a consent checkbox whose `checked` state should
  be folded into `validateForm`. If 003 already landed, also require the consent
  box in `validateForm`.
- Keep client and server validation in sync: `api/lead.js` (Plan 001) requires
  `firstName` + `phone`; this client now requires firstName, lastName, a
  well-formed email, and a 6+ digit phone. If the server rules change, revisit
  `validateForm`.
- Reviewer should confirm WhatsApp never opens on a validation failure or a
  non-OK response.
