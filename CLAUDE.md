# pli — landing

Marketing/acquisition landing for **pli**, a guided journal of letters for couples about to get married
(each partner writes a letter per topic, seals it, and both open them together in a "reveal").

## Scope
- This repo is **only the landing** (Astro). The app itself is built separately with Expo — don't add app logic here.
- Current goal: capture couples for the **pilot**. Flow: landing → Stripe payment link → Youform onboarding.
- Later this may become the marketing site with App Store / Google Play buttons.
- Domain: lovepli.com (DNS on Cloudflare).

## Content & voice
- English first (Latin American Spanish later, using "ustedes").
- Central metaphor: letters, writing, sealing. Narrator is a humble "we" from the creators.
- Tone reference: Once (once.film). Visual direction: editorial, typographic, flat paper-like surfaces.
- Designs live in Figma — match them faithfully (spacing, type, colors). Put tokens in `src/styles/global.css`.

## Stack
- Astro (static output), TypeScript strict. Keep JS minimal; prefer `.astro` components and scoped styles.
- Analytics: **PostHog** via `posthog-js`, set up in `src/components/PostHog.astro` and included in `src/layouts/Layout.astro`.
  - Env vars: `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST` (EU cloud). See `.env.example`.
  - Track clicks declaratively: `data-ph-event="event_name"` plus optional `data-ph-*` properties.
  - Event naming: `snake_case`, object_verb (e.g. `pilot_cta_clicked`, `faq_opened`).

## Commands
- `npm run dev` — local server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run check` — type check
