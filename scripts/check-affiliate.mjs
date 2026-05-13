import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defaultAmazonAssociateTag, amazonLuxuryProductTargetMinimum } from "../app/lib/amazonLuxuryProducts.js";
import { programmaticBestPages } from "../app/lib/programmaticSeoData.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);

const allowedExternalCommerceFiles = new Set([
  "app\\data\\amazonVerifiedProducts.js",
  "app\\components\\BestProgrammaticPage.jsx",
  "app\\lib\\affiliateRouting.js",
  "app\\lib\\amazonVerifiedProducts.js",
  "app\\lib\\beautyData.js",
]);

const allowedAnchorFiles = new Set([
  "app\\components\\AffiliateLink.jsx",
]);

const requiredAffiliateLinkFragments = [
  "createAffiliateOutboundHref",
  "rel=\"sponsored nofollow noopener noreferrer\"",
  "target=\"_blank\"",
  "aria-label={label}",
];

const requiredAmazonFragments = [
  "LIPFLOWER_AMAZON_ASSOCIATE_TAG",
  "createAmazonSearchUrl",
  "url.searchParams.set(\"tag\"",
  defaultAmazonAssociateTag,
];

const requiredDisclosureFragments = [
  "may earn affiliate revenue",
  "/about/advertiser-disclosure",
];

const commerceHostPattern = /https:\/\/(?:www\.)?(amazon\.com|sephora\.com|ulta\.com|nordstrom\.com)/gi;

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next") {
          return [];
        }
        return listFiles(fullPath);
      }
      return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
    }),
  );

  return files.flat();
}

function normalizeRelativePath(file) {
  return path.relative(rootDir, file).split(path.sep).join("\\");
}

function getLineNumber(source, index) {
  return source.slice(0, index).split(/\r?\n/).length;
}

const files = await listFiles(appDir);
const findings = [];

const affiliateLinkSource = await readFile(path.join(rootDir, "app/components/AffiliateLink.jsx"), "utf8");
const disclosureSource = await readFile(path.join(rootDir, "app/components/DisclosureNotice.jsx"), "utf8");
const layoutSource = await readFile(path.join(rootDir, "app/layout.js"), "utf8");

for (const fragment of requiredAffiliateLinkFragments) {
  if (!affiliateLinkSource.includes(fragment)) {
    findings.push({
      type: "affiliate-link-missing-fragment",
      file: "app\\components\\AffiliateLink.jsx",
      missing: fragment,
    });
  }
}

for (const fragment of requiredDisclosureFragments) {
  if (!disclosureSource.includes(fragment)) {
    findings.push({
      type: "disclosure-missing-fragment",
      file: "app\\components\\DisclosureNotice.jsx",
      missing: fragment,
    });
  }
}

if (!layoutSource.includes("<DisclosureNotice />")) {
  findings.push({
    type: "sitewide-disclosure-not-rendered",
    file: "app\\layout.js",
  });
}

const envSource = await readFile(path.join(rootDir, "app/lib/env.js"), "utf8");
const affiliateRoutingSource = await readFile(path.join(rootDir, "app/lib/affiliateRouting.js"), "utf8");
const envExampleSource = await readFile(path.join(rootDir, ".env.example"), "utf8");

for (const fragment of requiredAmazonFragments) {
  const source = fragment === "LIPFLOWER_AMAZON_ASSOCIATE_TAG" || fragment === defaultAmazonAssociateTag
    ? `${envSource}\n${envExampleSource}`
    : affiliateRoutingSource;

  if (!source.includes(fragment)) {
    findings.push({
      type: "amazon-affiliate-routing-missing-fragment",
      file: fragment === "LIPFLOWER_AMAZON_ASSOCIATE_TAG" || fragment === defaultAmazonAssociateTag
        ? "app\\lib\\env.js/.env.example"
        : "app\\lib\\affiliateRouting.js",
      missing: fragment,
    });
  }
}

const uniqueAmazonProductAnchors = new Set(
  programmaticBestPages.flatMap((page) => page.examples || []).map((example) => example.toLowerCase()),
);

if (uniqueAmazonProductAnchors.size < amazonLuxuryProductTargetMinimum) {
  findings.push({
    type: "amazon-luxury-product-target-count-below-minimum",
    minimum: amazonLuxuryProductTargetMinimum,
    actual: uniqueAmazonProductAnchors.size,
  });
}

for (const file of files) {
  const source = await readFile(file, "utf8");
  const relativeFile = normalizeRelativePath(file);

  if (!allowedAnchorFiles.has(relativeFile) && /<a\s/i.test(source)) {
    findings.push({
      type: "raw-anchor-tag",
      file: relativeFile,
    });
  }

  if (allowedExternalCommerceFiles.has(relativeFile)) {
    continue;
  }

  for (const match of source.matchAll(commerceHostPattern)) {
    findings.push({
      type: "external-commerce-url-outside-allowed-file",
      host: match[1],
      file: relativeFile,
      line: getLineNumber(source, match.index),
    });
  }
}

const summary = {
  filesScanned: files.length,
  findingCount: findings.length,
  findings,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} affiliate/disclosure findings detected.`);
  process.exitCode = 1;
}
