# Lipflower Extraction Audit

Last updated: 2026-04-30

## Status

`lipflower-site` is already a standalone Next.js App Router project for `lipflower.com`.

The project builds independently from the TireSearchEngine root:

```bash
npm run build
```

Latest verified result: passed in `C:\TireSearchEngine\lipflower-site`.

## Standalone Project Root

The independent Lipflower project lives at:

```text
C:\TireSearchEngine\lipflower-site
```

This folder contains its own:

- `package.json`
- `package-lock.json`
- `next.config.js`
- `vercel.json`
- `.env.example`
- `README.md`
- `DEPLOYMENT_CHECKLIST.md`
- `app` directory
- `public` directory

## Lipflower Files To Keep

Core app files:

- `app/layout.js`
- `app/page.js`
- `app/globals.css`
- `app/robots.js`
- `app/sitemap.js`
- `app/manifest.js`
- `app/icon.svg`

Policy and trust pages:

- `app/about/page.js`
- `app/about/advertiser-disclosure/page.js`
- `app/about/editorial-policy/page.js`
- `app/about/how-we-make-money/page.js`
- `app/privacy-policy/page.js`
- `app/terms/page.js`
- `app/contact/page.js`

Beauty route families:

- `app/luxury-beauty/page.js`
- `app/skin-care/page.js`
- `app/skin-care/[slug]/page.js`
- `app/makeup/page.js`
- `app/makeup/[slug]/page.js`
- `app/lip-care/page.js`
- `app/lip-care/[slug]/page.js`
- `app/fragrance/page.js`
- `app/compare/page.js`
- `app/compare/[slug]/page.js`
- `app/brands/page.js`
- `app/brands/[slug]/page.js`
- `app/brands/[slug]/[category]/page.js`
- `app/sellers/page.js`
- `app/sellers/[slug]/page.js`
- `app/search/page.js`
- `app/beauty-university/page.js`
- `app/beauty-university/[slug]/page.js`

SEO and sitemap routes:

- `app/sitemap_index.xml/route.js`
- `app/sitemaps/[section]/sitemap.xml/route.js`
- `app/api/v1/system/page-registry/route.js`

Lipflower components:

- `app/components/AffiliateLink.jsx`
- `app/components/BeautyHubPage.jsx`
- `app/components/ComparisonTable.jsx`
- `app/components/DisclosureNotice.jsx`
- `app/components/JsonLd.jsx`
- `app/components/Logo.jsx`
- `app/components/SellerCard.jsx`
- `app/components/SiteFooter.jsx`
- `app/components/SiteHeader.jsx`

Lipflower data and system files:

- `app/lib/beautyData.js`
- `app/lib/beautyMetadata.js`
- `app/lib/beautyPageRegistry.js`
- `app/lib/env.js`
- `app/lib/searchIndex.js`
- `app/lib/siteConfig.js`
- `app/lib/sitemapData.js`

## Generic Reusable Systems

The following systems are generic enough to remain in Lipflower because they are not tire, LiFePO4, EV, or omega-specific:

- Affiliate link wrapper
- Disclosure and disclaimer components
- Comparison table component
- Seller profile pattern
- Page registry pattern
- Sitemap generator
- Sitemap index generator
- Search index
- Beauty University education hub pattern
- Metadata helper
- JSON-LD helper

## Files To Exclude From Lipflower

Do not copy these TireSearchEngine root systems into the Lipflower repo:

- Tire routes under `app/tires`, `app/tire-university`, `app/truck-tires`, `app/commercial-truck-tires`, `app/vehicles`, `app/models`, and tire-specific brand routes
- Tire data files such as `app/lib/siteData.js`, `app/lib/tireCategories.js`, `app/lib/tireModels.js`, `app/lib/tireUniversityData.js`, `app/lib/truckData.js`, and `app/lib/vehicleSeo.js`
- Tire affiliate catalogs such as Amazon tire offer CSVs and tire merchant import scripts
- Tire-specific API routes under `app/api/v1/system` and tire catalog ingestion systems
- Tire Search Engine ops dashboards and admin routes

Do not copy these HighLiFePO4 systems into the Lipflower repo:

- `app/lifepo4-batteries`
- `app/lifepo4-university`
- `app/home-backup`
- `app/solar-panels`
- `app/inverters`
- `app/calculators`
- `app/lib/energyData.js`
- `app/lib/energyMetadata.js`
- `app/lib/energyPageRegistry.js`
- Energy sitemap sections

Do not copy these EV.Market systems into the Lipflower repo:

- `app/ev-*`
- `app/components/ev-market`
- `app/lib/ev-market`
- EV installer, quote, lead, and content management routes
- EV sitemap sections

Do not copy these TheOmega3 systems into the Lipflower repo:

- Omega-3 supplement routes
- Omega-3 product taxonomy
- Omega-3 deployment scripts
- Supplement claim logic unless rewritten for beauty compliance

## Branding Check

The standalone Lipflower source is branded as `LipFlower` / `Lipflower`.

The current standalone project scan found no source references to:

- `TireSearchEngine`
- `tiresearchengine`
- `HighLiFePO4`
- `EV.Market`
- `TheOmega3`
- unsupported Codex-labeled model identifiers

Note: Generated build artifacts under `.next` are intentionally excluded from source audits.

## Beauty Taxonomy In Scope

Current route and content coverage includes:

- Luxury beauty
- Skin care
- Hair care
- Makeup
- Lip care
- Fragrance
- Body care
- Nail care
- Beauty tools
- Natural beauty
- Beauty brands
- Beauty sellers
- Beauty comparisons
- Beauty University

Recommended next taxonomy additions:

- Sunscreen
- Cleansers
- Moisturizers
- Serums
- Anti-aging skincare
- Sensitive skin products
- Acne-prone skin products
- Natural beauty

## Compliance Rules

Lipflower pages must keep these safeguards:

- No medical cure claims
- No guaranteed results
- No hidden product claims in schema
- Affiliate disclosure on monetized pages
- Product-use disclaimer for beauty guidance
- Use cautious language such as `may help`, `designed for`, `supports`, and `commonly used for`
- Do not expose affiliate strategy, supplier hierarchy, or programmatic generation logic publicly

## Environment Variables

Standalone Lipflower env vars are documented in `.env.example`:

- `LIPFLOWER_SITE_URL`
- `LIPFLOWER_GOOGLE_SITE_VERIFICATION`
- `LIPFLOWER_GA_MEASUREMENT_ID`
- `LIPFLOWER_ENABLE_VERCEL_ANALYTICS`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LIPFLOWER_INTERNAL_API_KEY`

Do not reuse TireSearchEngine, HighLiFePO4, EV.Market, or TheOmega3 env names in the standalone Lipflower repo.

## Deployment Checklist

1. Create a dedicated GitHub repo for `lipflower.com`.
2. Use `C:\TireSearchEngine\lipflower-site` as the repo root.
3. Confirm `.next`, logs, and local env files are ignored.
4. Connect the repo to a new Vercel project.
5. Add `lipflower.com` and `www.lipflower.com` domains.
6. Add only `LIPFLOWER_*` and Lipflower-specific Supabase env vars.
7. Run `npm install`.
8. Run `npm run build`.
9. Verify `/`, `/robots.txt`, `/sitemap.xml`, `/sitemap_index.xml`, and key route families.
10. Submit the sitemap index in Google Search Console.

## Build Verification

Latest standalone verification:

```text
Project: C:\TireSearchEngine\lipflower-site
Command: npm run build
Result: passed
Generated static pages: 49
```

## TireSearchEngine Safety

No files were deleted or moved from the TireSearchEngine root as part of this audit.

The Lipflower standalone project builds separately and can be prepared for its own repo without changing TireSearchEngine, HighLiFePO4, EV.Market, or TheOmega3.
