import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");

const legacyBrandPatterns = [
  /TireSearchEngine/i,
  /\btire\b/i,
  /HighLiFePO4/i,
  /LiFePO4/i,
  /EV\.Market/i,
  /TheOmega3/i,
  /\bomega[-\s]?3\b/i,
];

const pageMetadataExemptions = new Set([
  "app\\layout.js",
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
      return [fullPath];
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
const sourceFiles = files.filter((file) => [".js", ".jsx", ".mjs", ".ts", ".tsx"].includes(path.extname(file)));
const pageFiles = sourceFiles.filter((file) => path.basename(file) === "page.js" || path.basename(file) === "page.jsx");
const findings = [];

for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const relativeFile = normalizeRelativePath(file);

  for (const pattern of legacyBrandPatterns) {
    for (const match of source.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
      findings.push({
        type: "legacy-brand-reference",
        phrase: match[0],
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }
}

for (const file of pageFiles) {
  const source = await readFile(file, "utf8");
  const relativeFile = normalizeRelativePath(file);

  if (pageMetadataExemptions.has(relativeFile)) {
    continue;
  }

  if (!source.includes("buildBeautyMetadata") && !source.includes("generateMetadata")) {
    findings.push({
      type: "missing-shared-metadata-helper",
      file: relativeFile,
    });
  }

  if (source.includes("buildBeautyMetadata") && !source.includes("canonicalPath")) {
    findings.push({
      type: "missing-canonical-path",
      file: relativeFile,
    });
  }
}

const summary = {
  sourceFilesScanned: sourceFiles.length,
  pageFilesScanned: pageFiles.length,
  findingCount: findings.length,
  findings,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} metadata findings detected.`);
  process.exitCode = 1;
}
