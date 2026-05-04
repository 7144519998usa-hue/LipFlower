# Contributing to LipFlower

LipFlower changes should protect three things at the same time: SEO quality, shopper trust, and production stability.

## Required Local Verification

Before opening or updating a pull request, run:

```bash
npm run verify
```

This runs the internal link, route coverage, programmatic SEO, sitemap, structured data, claims, metadata, security, environment, and build checks.

## Route and SEO Rules

- Register new public indexable routes in the page registry.
- Keep `/search` and weak filter states `noindex,follow`.
- Do not add thin programmatic pages without product depth, internal links, and useful page framing.
- Keep sitemap assignments intentional.
- Add canonical metadata through `buildBeautyMetadata`.

## Beauty Claims Rules

- Do not invent product efficacy, ingredient benefits, safety claims, or review data.
- Avoid unsupported medical, pregnancy-safe, non-toxic, dermatologist, sensitivity, or guaranteed-outcome claims.
- Use cautious language such as `may help`, `designed for`, `positioned for`, `commonly used for`, or `shopper context`.
- Keep structured data aligned with visible page content.

## Affiliate and Security Rules

- Use the centralized outbound link system for affiliate destinations.
- Keep affiliate disclosures visible and accurate.
- Do not expose supplier strategy, secrets, internal keys, or private scoring logic.
- Keep internal APIs protected in production.

## Pull Request Checklist

Use the GitHub pull request template and explain:

- SEO/routes affected
- Sitemap or registry changes
- Claims or structured data impact
- Affiliate or outbound routing impact
- Verification performed
