# LipFlower

Standalone Next.js site for [lipflower.com](https://lipflower.com).

LipFlower is positioned as a luxury beauty and artificial jewelry affiliate marketplace for cosmetics, skin care, makeup, fragrance, accessories, and lip care. The site is built for programmatic SEO collections, premium brand research, seller comparison, and Amazon/retailer affiliate routing.

## Core route families

- `/`
- `/luxury-beauty`
- `/skin-care`
- `/skin-care/[slug]`
- `/hair-care`
- `/makeup`
- `/makeup/[slug]`
- `/lip-care`
- `/lip-care/[slug]`
- `/fragrance`
- `/body-care`
- `/nail-care`
- `/beauty-tools`
- `/artificial-jewelry`
- `/artificial-jewelry/[slug]`
- `/natural-beauty`
- `/compare`
- `/compare/[slug]`
- `/brands`
- `/brands/[slug]`
- `/brands/[slug]/[category]`
- `/sellers`
- `/sellers/[slug]`
- `/beauty-university`
- `/beauty-university/[slug]`

## Environment variables

Copy [.env.example](./.env.example) into `.env.local` and set:

- `LIPFLOWER_SITE_URL`
- `LIPFLOWER_GOOGLE_SITE_VERIFICATION`
- `LIPFLOWER_GA_MEASUREMENT_ID`
- `LIPFLOWER_ENABLE_VERCEL_ANALYTICS` only when overriding the production default
- `LIPFLOWER_INTERNAL_API_KEY`

## Vercel Web Analytics

LipFlower uses the free Vercel Web Analytics package through `@vercel/analytics`.
The app renders `<Analytics />` by default; set `LIPFLOWER_ENABLE_VERCEL_ANALYTICS=false` only if you intentionally want to disable it.
Enable Web Analytics in the Vercel project dashboard, then deploy production.

## Local development

```bash
npm install
npm run build
npm run dev
```

## Production verification

After deployment, run:

```bash
npm run verify:production
```

This checks the live homepage, robots, sitemap index, programmatic sitemap, a representative `/best` page, Vercel Analytics, and protected internal system endpoints.
