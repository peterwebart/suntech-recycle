# SunTech Recycle — Website

Marketing site for **SunTech Recycle** — certified electronics recycling, IT asset disposition (ITAD) and secure data destruction for enterprise and government across Greater Montréal and Québec.

Rebuilt from the original single-page bilingual static prototype into a multi-page **Next.js 15** application: dedicated service pages, a service-area section with per-city maps and reviews, a working responsive mega-menu, real contact details, and full SEO (metadata, JSON-LD, sitemap, robots).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 (`@theme` design tokens in `globals.css`) |
| Fonts | Self-hosted via `@fontsource` (Space Grotesk, IBM Plex Sans, IBM Plex Mono) |
| Maps | Leaflet + OpenStreetMap raster tiles (no API key; lazy-loaded client-side) |
| Linting | ESLint 9 flat config + `eslint-config-next` |
| Package manager | pnpm 9 |

---

## Prerequisites

- **Node.js 20+** (built and verified on Node 22)
- **pnpm 9** (`corepack enable` will activate it from the pinned `packageManager` field)

## Run locally

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:3000

pnpm lint         # ESLint (strict — fails on any warning)
pnpm build        # production build
pnpm start        # serve the production build
```

`pnpm lint` and `pnpm build` both complete with **zero warnings/errors**, and `pnpm build` prerenders all routes (home, 5 service pages, 8 city pages, the two index pages, contact, plus `sitemap.xml` and `robots.txt`).

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx                 # root layout, fonts, org/localBusiness JSON-LD, header/footer
│  ├─ page.tsx                   # home (composes the section components)
│  ├─ services/
│  │  ├─ page.tsx                # services index
│  │  └─ [service]/page.tsx      # service detail (static-generated per slug)
│  ├─ locations/
│  │  ├─ page.tsx                # service-area index + regional overview map
│  │  └─ [city]/page.tsx         # city detail: map + reviews + services
│  ├─ contact/page.tsx           # NAP, hours, contact CTAs, facility map
│  ├─ not-found.tsx              # branded 404
│  ├─ sitemap.ts / robots.ts     # generated SEO routes
│  └─ globals.css                # Tailwind import + design tokens + base styles
├─ components/
│  ├─ layout/                    # Header (mega-menu + mobile drawer), Footer, Logo
│  ├─ sections/                  # Hero, CertStrip, Metrics, Pillars, ServicesPreview,
│  │                             #   ChainOfCustody, FreePickup, Industries, ESG,
│  │                             #   BusinessValue, WhyChoose, FinalCTA, FeatureRow, PageCta
│  ├─ map/LocationMap.tsx        # Leaflet wrapper (client component)
│  ├─ reviews/Reviews.tsx        # review cards + sample-data disclaimer
│  ├─ ui/                        # Button, Container/Section/Eyebrow, Icon, Shot,
│  │                             #   Breadcrumbs, CertBadge (R2v3 mark)
│  ├─ JsonLd.tsx                 # renders JSON-LD blocks
│  └─ RevealObserver.tsx         # scroll-reveal (no-JS safe, respects reduced motion)
├─ data/
│  ├─ site.ts                    # company NAP, hours, geo, social — single source of truth
│  ├─ services.ts                # the 5 services (copy, capabilities, highlights, SEO)
│  ├─ locations.ts               # service-area dataset: 3 country pages,
│  │                             #   8 Greater-Montréal hubs (+ reviews),
│  │                             #   ~26 Montréal neighbourhoods, major Canada/US/Mexico cities
│  ├─ certification.ts           # SERI R2v3 content (drives /r2v3-certification)
│  └─ businessValue.ts           # Risk / Cost / ESG / E-scrap blocks for service pages
└─ lib/
   ├─ navigation.ts              # mega-menu / nav built from services + locations
   └─ seo.ts                     # metadata builder + JSON-LD schema builders

  app routes: /  ·  /services  ·  /services/[service]  ·  /locations  ·
  /locations/[city]  ·  /collection  ·  /about  ·  /r2v3-certification  ·  /contact
public/images/                   # brand imagery (.webp + .jpg pairs) + r2v3-logo[-white].png
```

---

## Certification (R2v3)

SunTech's SERI R2v3 mark (`public/images/r2v3-logo.png` / `r2v3-logo-white.png`) is shown via the
`CertBadge` component on the homepage, footer, contact, services index, every service detail page,
the locations index, every city page, and the dedicated `/r2v3-certification` page. Service pages
link internally to the certification page. The R2v3 explainer copy lives in `src/data/certification.ts`.

---

## Editing content

Almost all content lives in three typed files — no component edits needed:

- **Company details (NAP, hours, geo, social):** `src/data/site.ts`
- **Services:** `src/data/services.ts` — add/edit an entry and it automatically appears in the mega-menu, the services index, the homepage preview, the footer, and gets its own page + sitemap entry.
- **Service-area pages:** `src/data/locations.ts`. The dataset is **generated** — country landing pages (Canada / United States / Mexico), the eight Greater-Montréal hub cities, a Montréal-neighbourhood set, and major cities per country are built from compact tuple arrays via templated, locale-ready copy. Add a tuple (slug, name, region, lat, lng) to the relevant array and its page, map pin, country listing and sitemap entry are generated automatically. Reviews are attached only to the Greater-Montréal hubs.
- **Collection requests:** `/collection` (`src/app/collection/page.tsx`) is the dedicated "request a free collection" page. The header CTA and all "Request a collection" buttons point here; `/contact` remains the general contact page (with a cross-link to `/collection`).
- **R2v3 certification copy:** `src/data/certification.ts`. **Business-value blocks** (Risk / Cost / ESG / E-scrap, shown on every service page): `src/data/businessValue.ts`.

**Terminology:** copy uses "collection" (not "removal" or "pickup") and a professional B2B voice throughout, per the client's terminology standard. Keep that convention when editing.

The site URL for canonicals/sitemap comes from `NEXT_PUBLIC_SITE_URL` (see `.env.example`); it falls back to `https://suntechrecycle.com`.

---

## ⚠️ Before launch — required changes

1. **Replace the placeholder reviews.** The reviews on the eight Greater-Montréal hub pages (`src/data/locations.ts`) are representative placeholders. Per request, the on-page "sample" disclaimers have been removed (`REVIEWS_ARE_SAMPLE = false`), so these now read as real — **swap in verified client reviews before launch.** The other (non-hub) city pages carry no reviews.
2. **Confirm the facility coordinates.** `site.geo` (`lat/lng`) is approximate. Geocode the exact address (`2193 Rue de la Métropole, Longueuil, QC J4G 1S5`) so the contact/HQ map pins precisely.
3. **Replace placeholder metrics.** The homepage metrics band and the ESG stats are illustrative (flagged in-page) — replace with verified figures.
4. **Confirm the accuracy of each claim.** Per your confirmation that SunTech operates across Montréal, Toronto, Mexico and the US, the site now covers Canada, the United States and Mexico (country pages + major cities) plus a large Montréal-neighbourhood set. The copy is framed honestly — **free on-site collection across Greater Montréal**, and **secure, trackable mail-in ITAD / data destruction** elsewhere — rather than implying local pickup in every city. Keep that distinction true as you edit, and confirm city-level coordinates (currently approximate centroids) if you want exact map pins.
5. **Set `NEXT_PUBLIC_SITE_URL`** to the production domain in the deployment environment.
6. **Confirm R2v3 certificate details.** The certification copy is accurate but generic — add SunTech's specific certificate number and certifying body to `src/data/certification.ts` and the cert page before launch.
7. **Bilingual EN/FR is implemented — but have the French reviewed.** English serves at the root (`/…`) and French at `/fr/…`, with a header/mobile language switcher and `hreflang` alternates. Chrome, navigation, footer, CTAs, the homepage, and the collection/contact pages are fully French; service, location and certification pages render French body content from the translated data layer, with a few page section-headings still in English (see the bilingual notes below). The French is professional Québec French written here — **have a native/legal reviewer confirm it for Bill 96 compliance** before relying on it publicly.
8. **A note on geographic scale.** Programmatic city pages are valuable only while the copy stays truthful about what's serviceable where (local collection vs. secure mail-in). If you expand further, prefer provincial/state/regional hub pages over very thin per-city pages to stay clear of Google's doorway-page guidance.

---

## Recommended next phases

### 1. Payload CMS + PostgreSQL
The original brief lists Payload + Postgres. This iteration ships the content as typed data modules instead, because a Payload build requires a live database (not available in the build sandbox) and installing Postgres was out of scope. The data layer was deliberately shaped to make the migration mechanical:

- The `Service`, `Location` and `Review` types in `src/data/` map directly to Payload collections (plus a `Site` global for NAP).
- Pages already centralise data access through `getService`, `getLocation`, `serviceSlugs`, `locationSlugs`, etc. — swap those for Payload queries (and feed `generateStaticParams` from Payload) and the components don't change, because the shapes stay the same.
- Keep `lib/seo.ts` as-is; it consumes the same typed objects.

### 2. Bilingual EN/FR — implemented (with follow-ups)
The site is now bilingual. Architecture and remaining work:

- **URLs.** English is the default and serves **unprefixed at the root** (`/services`, `/locations/montreal`, …); French serves under **`/fr/…`**. `hreflang` alternates (`en`, `fr`, `x-default`) and a per-locale `canonical` are emitted on every page; the sitemap lists both locales with alternates.
- **Switcher.** The header (desktop + mobile drawer) has an EN/FR toggle that swaps the current path's locale.
- **How it's wired.** All UI strings live in `src/i18n/dictionaries.ts` (English authoritative, French overlaid with automatic per-string English fallback). The data layer is locale-aware via `getServices/getService`, `getBusinessValue`, `getR2v3`, and `getLocations/getLocation/getCountryList/getHubCities/citiesInCountry` (each taking a `locale`). Page bodies were extracted into `src/views/*` content components rendered by both the root (`en`) and `/fr` (`fr`) route files, so there's a single source per page.
- **Coverage today.** Fully French: navigation, footer, all CTAs, the homepage (every section), and the collection and contact pages. French via the translated data layer: the five services, the four business-value blocks, the R2v3 certification content, the three country pages, all ~82 templated city/neighbourhood pages, and the eight Montréal hub intros.
- **Remaining French follow-ups (all non-blocking; pages build and render):**
  - A few **page-specific section headings** on the service-detail, certification, about, and country pages are still English literals (e.g. "Scope & capabilities", "Why it matters", "More than a recycler", "Tracked, documented, accountable"). They're easy to move into the dictionary.
  - The **eight hub placeholder reviews** remain in English (they're slated for replacement with verified reviews anyway — see pre-launch item 1).
  - `<html lang>` stays `"en"` for `/fr` pages because there's a single root layout. This is a minor accessibility/SEO nit; correcting it cleanly means moving to a `[locale]` root layout (a follow-up refactor). `hreflang`/`canonical` are already correct.
  - Have the French **reviewed by a native/legal reader for Bill 96**.

---

## Deployment notes

- Built to deploy on **Coolify** with the standard Next.js flow (`pnpm install` → `pnpm build` → `pnpm start`). No custom Dockerfile/Nginx/Traefik changes are part of this repository.
- Leaflet map tiles are fetched by the visitor's browser from OpenStreetMap; no server-side map key or proxy is required.
- `next/image` optimisation runs under `next start` in production; brand images ship as `.webp`/`.jpg` pairs in `public/images`.
