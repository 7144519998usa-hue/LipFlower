import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);

const allowedSchemaTypes = new Set([
  "AboutPage",
  "Answer",
  "Article",
  "BreadcrumbList",
  "CollectionPage",
  "DefinedTerm",
  "DefinedTermSet",
  "FAQPage",
  "ItemList",
  "ListItem",
  "Organization",
  "Question",
  "SearchAction",
  "WebSite",
]);

const blockedSchemaTypes = new Set([
  "AggregateRating",
  "Offer",
  "Product",
  "Review",
]);

const blockedSchemaProperties = new Set([
  "aggregateRating",
  "availability",
  "offers",
  "price",
  "priceCurrency",
  "review",
  "reviewRating",
]);

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

function getLineNumber(source, index) {
  return source.slice(0, index).split(/\r?\n/).length;
}

const files = await listFiles(appDir);
const schemaTypes = new Set();
const findings = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const relativeFile = path.relative(rootDir, file);

  for (const match of source.matchAll(/"@type"\s*:\s*"([^"]+)"/g)) {
    const schemaType = match[1];
    schemaTypes.add(schemaType);

    if (!allowedSchemaTypes.has(schemaType)) {
      findings.push({
        type: blockedSchemaTypes.has(schemaType) ? "blocked-schema-type" : "unknown-schema-type",
        schemaType,
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }

  for (const property of blockedSchemaProperties) {
    const propertyPattern = new RegExp(`["']${property}["']\\s*:`, "g");
    for (const match of source.matchAll(propertyPattern)) {
      findings.push({
        type: "blocked-schema-property",
        property,
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }
}

const summary = {
  filesScanned: files.length,
  schemaTypes: [...schemaTypes].sort(),
  allowedSchemaTypes: [...allowedSchemaTypes].sort(),
  findingCount: findings.length,
  findings,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} structured data safety findings detected.`);
  process.exitCode = 1;
}
