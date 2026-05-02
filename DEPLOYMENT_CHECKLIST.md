# LipFlower Deployment Checklist

1. Create a dedicated GitHub repo for `lipflower.com`.
2. Push only the contents of this folder as the root of that repo.
3. Create a new Vercel project and connect it to the new repo.
4. Set production domains to `lipflower.com` and `www.lipflower.com`.
5. In the Vercel project dashboard, enable the free Web Analytics product for the project.
6. Add env vars:
   - `LIPFLOWER_SITE_URL`
   - `LIPFLOWER_GOOGLE_SITE_VERIFICATION`
   - `LIPFLOWER_GA_MEASUREMENT_ID`
   - `LIPFLOWER_ENABLE_VERCEL_ANALYTICS` only if you want to override the production default
   - `LIPFLOWER_INTERNAL_API_KEY`
7. Run `npm install`.
8. Run `npm run build`.
9. Verify:
   - homepage
   - `/luxury-beauty`
   - `/skin-care`
   - `/hair-care`
   - `/makeup`
   - `/lip-care`
   - `/fragrance`
   - `/body-care`
   - `/nail-care`
   - `/beauty-tools`
   - `/natural-beauty`
   - `/compare`
   - `/brands`
   - `/sellers`
   - `/beauty-university`
   - `/sitemap.xml`
   - `/sitemap_index.xml`
   - `/robots.txt`
   - `/sitemaps/beauty-core/sitemap.xml`
10. Confirm canonical tags use `https://lipflower.com`.
11. Deploy production and submit the sitemap index in Google Search Console.
12. After production deploy, open Vercel Analytics and confirm pageviews are arriving for `lipflower.com`.
