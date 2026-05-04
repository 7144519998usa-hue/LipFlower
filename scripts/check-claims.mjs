import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);

const complianceFiles = [
  "app\\beauty-claims-guide\\page.js",
  "app\\beauty-faq\\page.js",
  "app\\beauty-methodology\\page.js",
  "app\\components\\ProductUseDisclaimer.jsx",
  "app\\about\\editorial-policy\\page.js",
  "app\\about\\media-kit\\page.js",
];

const blockedClaimPatterns = [
  { id: "cure-language", pattern: /\b(cure|cures|cured|curing)\b/i },
  { id: "heal-language", pattern: /\b(heal|heals|healed|healing)\b/i },
  { id: "treats-medical-condition", pattern: /\btreats?\s+(acne|eczema|rosacea|dermatitis|infection|disease)\b/i },
  { id: "guaranteed-results", pattern: /\bguaranteed?\s+(results?|to\s+work|clear|fix|improve)\b/i },
  { id: "pregnancy-safe", pattern: /\bpregnancy[-\s]?safe\b/i },
  { id: "non-toxic", pattern: /\bnon[-\s]?toxic\b/i },
  { id: "hypoallergenic", pattern: /\bhypoallergenic\b/i },
  { id: "dermatologist-recommended", pattern: /\bdermatologist[-\s]?recommended\b/i },
  { id: "clinically-proven", pattern: /\bclinically\s+proven\b/i },
];

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

function normalizeRelativePath(file) {
  return path.relative(rootDir, file).split(path.sep).join("\\");
}

function isComplianceFile(relativeFile) {
  return complianceFiles.includes(relativeFile);
}

const files = await listFiles(appDir);
const findings = [];
const complianceMentions = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const relativeFile = normalizeRelativePath(file);

  for (const { id, pattern } of blockedClaimPatterns) {
    for (const match of source.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
      const finding = {
        id,
        phrase: match[0],
        file: relativeFile,
        line: getLineNumber(source, match.index),
      };

      if (isComplianceFile(relativeFile)) {
        complianceMentions.push(finding);
      } else {
        findings.push(finding);
      }
    }
  }
}

const summary = {
  filesScanned: files.length,
  blockedPatternCount: blockedClaimPatterns.length,
  findingCount: findings.length,
  findings,
  complianceMentionCount: complianceMentions.length,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} unsupported beauty claim findings detected.`);
  process.exitCode = 1;
}
