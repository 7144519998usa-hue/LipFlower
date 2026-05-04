import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const requiredHeaderFragments = [
  "Referrer-Policy",
  "strict-origin-when-cross-origin",
  "X-Content-Type-Options",
  "nosniff",
  "X-Frame-Options",
  "DENY",
  "Permissions-Policy",
  "Cross-Origin-Opener-Policy",
  "Cross-Origin-Resource-Policy",
  "Strict-Transport-Security",
  "Content-Security-Policy",
  "default-src 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
];

const requiredInternalApiFragments = [
  "enforceInternalApiAccess",
  "status: 404",
  "Cache-Control",
  "no-store",
];

const requiredAffiliateFragments = [
  "allowedAffiliateHosts",
  "destination.protocol === \"https:\"",
  "allowedAffiliateHosts.has(hostname)",
  "return null",
];

const requiredGitignoreFragments = [
  ".env.local",
  ".env.production.local",
  ".vercel",
  "node_modules",
  ".next",
];

async function readProjectFile(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

function collectMissing(source, fragments, file) {
  return fragments
    .filter((fragment) => !source.includes(fragment))
    .map((fragment) => ({ file, missing: fragment }));
}

const [
  nextConfig,
  internalApiGuard,
  affiliateRouting,
  outboundRoute,
  gitignore,
  envExample,
] = await Promise.all([
  readProjectFile("next.config.js"),
  readProjectFile("app/lib/internalApiGuard.js"),
  readProjectFile("app/lib/affiliateRouting.js"),
  readProjectFile("app/api/outbound/route.js"),
  readProjectFile(".gitignore"),
  readProjectFile(".env.example"),
]);

const findings = [
  ...collectMissing(nextConfig, requiredHeaderFragments, "next.config.js"),
  ...collectMissing(internalApiGuard, requiredInternalApiFragments, "app/lib/internalApiGuard.js"),
  ...collectMissing(affiliateRouting, requiredAffiliateFragments, "app/lib/affiliateRouting.js"),
  ...collectMissing(gitignore, requiredGitignoreFragments, ".gitignore"),
];

if (!outboundRoute.includes("getSafeAffiliateDestination")) {
  findings.push({
    file: "app/api/outbound/route.js",
    missing: "safe affiliate destination validation",
  });
}

if (!outboundRoute.includes("NextResponse.redirect(new URL(\"/sellers\", request.url), 302)")) {
  findings.push({
    file: "app/api/outbound/route.js",
    missing: "blocked outbound redirect fallback",
  });
}

if (!envExample.includes("LIPFLOWER_INTERNAL_API_KEY=")) {
  findings.push({
    file: ".env.example",
    missing: "LIPFLOWER_INTERNAL_API_KEY",
  });
}

const summary = {
  filesChecked: [
    "next.config.js",
    "app/lib/internalApiGuard.js",
    "app/lib/affiliateRouting.js",
    "app/api/outbound/route.js",
    ".gitignore",
    ".env.example",
  ],
  findingCount: findings.length,
  findings,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} security findings detected.`);
  process.exitCode = 1;
}
