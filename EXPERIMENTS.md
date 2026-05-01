# Design experiments — Kancelaria Pach & Świątek

Status log of design directions explored for the new site. Source content is the static `index.html` from the legacy build (notary contact card, hours, two bank accounts). No invented copy in any variant.

## Stack

- Next.js 16.2.4 (App Router, RSC by default)
- React 19.2.4, TypeScript strict
- Tailwind CSS v4 (`@theme inline`)
- `motion@12` (Framer Motion successor) — only in client-leaf components
- `@phosphor-icons/react@2.1` — `/dist/ssr` path in RSC, main path in `'use client'`
- `leaflet@1.9` + CARTO Positron tiles — `/zaufanie` map only. Async-imported inside `useEffect` to avoid SSR `window` issues. CSS imported in component, not globally.
- Geist Sans + Geist Mono (default), Montserrat (only on `/oryginalna`)
- Shared content module: `lib/kancelaria.ts` (single source of truth, includes geocoded `geo.{lat,lng}`)

## Variants

Each variant is its own route. `/` is a gallery index. All routes verified rendering 200.

| Slug | Label | Aesthetic | Status | Notes |
|---|---|---|---|---|
| `/zaufanie` | Zaufanie | Trust · Private-bank restraint — champagne (`#F4EFE6`), navy ink (`#0F1B2D`), no decorative accent, real Leaflet map | live · candidate | New direction after brief refinement: super clean + trust + experience + luxury. Address geocoded via OSM Nominatim (50.0691, 19.9181). CARTO Positron tiles, custom ink marker with breathing halo. |
| `/edytorska` | Edytorska | Editorial Quiet — bone (`#F8F6F1`), deep rose accent (`#9F2B3A`), grotesk display, sticky info rail | live · candidate | Asymmetric 8/4 grid, hairline section dividers, no cards. |
| `/bento` | Bento | Bento Motion — white cards on `#f9fafb`, emerald accent, perpetual micro-motion | **OUT** | Rejected. Breathing pulse + magnetic CTA + click-to-copy IBANs were built but the direction is no longer in scope. |
| `/marmur` | Marmur | Marble Dark — warm off-black (`#0E0D0A`), brass (`#C8A876`), grain overlay | live · candidate | Kinetic firm-name marquee, 3D tilt contact card. |
| `/marmur-jasny` | Marmur jasny | Marble Light — same composition as marmur, palette inverted: champagne (`#F2EBDD`), warm ink (`#1F1A12`), deeper brass (`#8C6B3D`) | live · candidate | A/B against marmur on light vs. dark for the same layout. |
| `/architektoniczna` | Architektoniczna | Architectural Split — 50/50, `#FAFAFA` + ink (`#0A0A0A`), navy accent | **OUT** | Rejected — too minimal. Long-form left column + sticky info card felt too austere for a notary brand that needs presence. |
| `/urzedowa` | Urzędowa | Brutalist Civic — bone (`#F2EFE9`), ink, saturated red (`#B91C1C`), mono numbers, rigid 12-col grid | **OUT** | Rejected. Distinctive but too aggressive / civic-register for the firm's voice. |
| `/oryginalna` | Oryginalna | Original — Montserrat, zinc-900 bg, zinc-800 cards (`0.75rem` radius, zinc-700 1px borders) | live · candidate | 1:1 reproduction of the legacy `index.html` for comparison. |

## Brief evolution

After the eliminations the user sharpened the brief to: **super clean + trust + experience + luxury + high-end**. Notary handles deeds, escrow, wills — visitor must feel they can trust this person with money / property. Visual register shifted toward **private banking restraint** (Pictet, Lombard Odier) rather than law-firm hard-sell. Triggered two additions:
- `/zaufanie` — fresh direction with prominent real map (Leaflet + CARTO Positron, no API key, free tier).
- `/marmur-jasny` — light counterpart of marmur, same composition, for A/B comparison.

## Open shortlist

Active candidates: **zaufanie, edytorska, marmur, marmur-jasny, oryginalna**. Three rejected (bento, architektoniczna, urzedowa).

## Direction read

The current candidates split into three families:
1. **Restrained / banking** — `zaufanie`. Single ink color, no decorative accent, map as content anchor.
2. **Editorial / typographic** — `edytorska`, `oryginalna`. Type-led, hairline rules.
3. **Luxury / marble** — `marmur`, `marmur-jasny`. Heritage register with brass accent, kinetic marquee, tilt card. Light vs. dark fight.

The user's "luxury / high-end" cue plays best in the marble family or zaufanie. `edytorska` may be too quiet now; `oryginalna` is the legacy reference, not a real candidate.

## Constraints respected

- Polish copy only, no fabricated services / "about" / team bios.
- `lang="pl"`, `latin-ext` font subset for Polish diacritics.
- All five active variants pull from the same `KANCELARIA` constant — content edits propagate.
- Client components isolated to motion leaves (`bento/*.tsx`, `marmur/kinetic-marquee.tsx`, `marmur/tilt-card.tsx`, `urzedowa/address-marquee.tsx`).
- Phone, email, IBAN, address, hours: identical across all variants (verbatim from `index.html`).

## Known follow-ups

- Pick a winner (or merge two — e.g. edytorska skeleton + marmur dark mode).
- Decide on language: site is Polish-only; add EN later if needed.
- Decide on services / scope-of-work content. None present yet — no variant fakes it.
- Responsive audit across mobile/tablet/desktop pending.
- Accessibility audit (WCAG 2.1 AA — contrast on `#9F2B3A`, `#1E3A8A`, `#C8A876` accents) pending.

## Cleanup when rejections are confirmed

Routes to delete:
- `app/bento/` (4 files: `page.tsx`, `breathing-hours.tsx`, `copyable-iban.tsx`, `magnetic-cta.tsx`)
- `app/architektoniczna/` (1 file: `page.tsx`)
- `app/urzedowa/` (2 files: `page.tsx`, `address-marquee.tsx`)

Remove the matching entries from `VARIANTS` in `lib/kancelaria.ts`.

After cleanup, only `marmur` still uses `motion@12` (kinetic marquee, tilt card). If marmur is dropped later too, `motion` becomes unused and can be removed. `@phosphor-icons/react` stays — used by every remaining route.
