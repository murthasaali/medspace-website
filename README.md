# MedSpace AI

Marketing site for MedSpace AI — the knowledge-graph AI layer for clinics.
Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Structure

```
app/
  page.tsx                    Home — hero, pain-point table, product grid, architecture, build order
  products/[slug]/page.tsx    One template, 5 static params (medscribe, vitalgraph, clinicops, companion, enterprise)
  pricing/page.tsx            Go-to-market ladder
  hardware/page.tsx           Kits + deployment tiers
  roi-calculator/page.tsx     Interactive ROI calculator (client component)
  technology/page.tsx         VeritasGraph pipeline explainer
  evidence/page.tsx           Benchmarks (AUROC etc.)
  integrations/page.tsx       FHIR/HL7/channels/API
  security/page.tsx           Compliance guardrails
components/
  Header.tsx, Footer.tsx, ProductCard.tsx (+ SectionHeading, CitationChip)
lib/
  products.ts                 Single source of truth for all 5 products, the pain table, and the build-order roadmap
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Almost all copy lives in `lib/products.ts` — update the `products`,
`painTable`, or `buildOrder` arrays and every page that references them
(home, product pages, pricing) updates automatically.

## Still to build (not in this scaffold)

- Persona landing pages (`/for-doctors`, `/for-clinics`, `/for-patients`, `/for-hospitals`)
- `/blog`, `/docs`, `/llms.txt`
- Structured data (schema.org `MedicalOrganization`, `SoftwareApplication`,
  `FAQPage`, `Product`/`Offer`) — see the GEO/SEO section of the source plan
- Real pricing numbers (current copy uses placeholder feel-based tiers)
- Waitlist form wiring (no backend/DB included)
- Named clinician reviewer bylines on `/evidence` and clinical pages

## Design system

Dark, industrial-clean palette matching the wider Space AI product family:
Barlow Condensed for display type, DM Mono for technical/citation chips,
Inter for body copy. Tokens are in `tailwind.config.ts` (`ink`, `panel`,
`line`, `muted`, `accent`, `accent2`).
