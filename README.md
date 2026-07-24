# Nashville Concrete Solutions

Marketing website for Nashville Concrete Solutions — a concrete contractor
serving Greater Nashville, TN. Built with Next.js 14 (App Router), TypeScript,
and Tailwind CSS, with a technical-SEO layer (JSON-LD, sitemap, OG images,
metadata) baked in on every route.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values before enabling email/analytics
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build (also type-checks and lints)
- `npm run start` — run the production build
- `npm run lint` — ESLint only

## Structure

- `src/data/site.ts` — business profile (single source of truth)
- `src/data/services.ts` — service catalog (drives `/services/[slug]`)
- `src/data/cities.ts` — service-area cities (drives `/service-areas/[slug]`)
- `src/data/service-city-content/` — optional bespoke overrides for the
  `/[serviceSlug]/[citySlug]` local-SEO matrix; falls back to templated
  content built from `services.ts` + `cities.ts` when empty
- `src/content/blog/*.mdx` — blog posts
- `src/components/seo/` — JSON-LD schema components
- `src/lib/metadata.ts` — shared `buildMetadata()` helper used by every page

## NEEDS INPUT before launch

The following fields were left blank in the business profile brief and are
typed `null`/empty in `src/data/site.ts` — the site renders correctly without
them (fields are conditionally shown), but should be filled in before launch:

- `geo` — exact latitude/longitude (needed for a fully-precise `GeoCoordinates`
  in LocalBusiness schema)
- `license` / `insurance` — never fabricate; leave blank until real IDs exist
- `warranty` — warranty terms
- `financingPartner`
- `socials` — Facebook / Instagram / Google Business Profile URLs
- `aggregateRating` — leave `null` until real review data exists; do not fabricate

Also review before publishing:

- **Testimonials** (`src/components/sections/TestimonialsSection.tsx`) contain
  clearly-labeled placeholder quotes — replace with real, attributable
  customer reviews.
- **Brand colors** (charcoal/orange in `tailwind.config.ts`) were not
  specified in the brief and were chosen as sensible defaults for a concrete
  contractor site — confirm or adjust.
- **Fonts** (`src/app/layout.tsx`) use Bitter (slab serif, headings) + Source
  Sans 3 (body) for a warmer, more timeless feel than a generic modern
  sans-serif — reference sites named in chat (sanantonioconcretecontractors.com,
  azdesertconcrete.com) were blocked by this environment's network policy, so
  this pairing is a judgment call rather than a direct match — swap in
  `src/app/layout.tsx` / `tailwind.config.ts` if you want something closer to
  those references.
- **Service list** (`src/data/services.ts`) — 8 standard concrete-contractor
  services were authored based on the business type; confirm these match the
  actual services offered.
- **City landmarks/neighborhoods** (`src/data/cities.ts`) — limited to
  widely-known public references; verify local accuracy.
- **Privacy Policy / Terms** pages are placeholder copy — replace with
  reviewed, legally-vetted text.
- `.env.example` variables (Resend API key, `CONTACT_EMAIL`, `FROM_EMAIL`, GA4,
  Search Console verification) are blank by default — the contact form
  returns a clear error until `RESEND_API_KEY` and `CONTACT_EMAIL` are set.

## Deployment

Target platform is Vercel (Node 20+). Set the environment variables from
`.env.example` in the Vercel project settings before going live.
