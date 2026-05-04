# Security Policy

## Reporting a Vulnerability

If you find a security issue in LipFlower, do not open a public GitHub issue with exploit details.

Use a private maintainer channel for:

- Exposed secrets or environment variables
- Unsafe affiliate redirects
- Internal API access issues
- Cross-site scripting or content injection risk
- Security header regressions
- Build or deployment configuration leaks

Include:

- Affected URL, route, or file
- Reproduction steps
- Expected impact
- Screenshots or logs if useful

## Security Baseline

LipFlower is expected to keep these controls in place:

- `npm run check:security` passes
- Internal system APIs return protected responses in production
- Outbound affiliate redirects only allow approved HTTPS seller hosts
- Local env files and Vercel project files are ignored by git
- Security headers remain configured in `next.config.js`
- No secrets are committed to the repository

## Supported Version

Only the current `main` branch is supported.

