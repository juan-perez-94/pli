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

## Design system
- Source frame: Figma `DWjtX9B3yCBVRaHIZkNVcu`, node `133:1634` (1440px desktop; no mobile frame — mobile layout is ours).
- Figma has no variables yet; tokens in `src/styles/global.css` were read from layers. Fonts: Instrument Serif + Instrument Sans (Google Fonts).
- Type roles are utility classes (`.t-display-xl` … `.t-label`); use them or the tokens, never raw px for color/type.
- `src/components/ui/` — primitives (Button, Chip, MetaList, LetterCard, Logo, Pli wordmark).
- `src/components/sections/` — one file per landing section, composed in `src/pages/index.astro`.
- Pilot facts (price, seats, dates, checkout URL) live in `src/config.ts`.
- When passing `class` to a child component, the child must spread `...rest` onto its root, or scoped styles won't reach it.

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
