import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);

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

function hasAccessibleName(tag) {
  return (
    /aria-label=/.test(tag) ||
    /aria-labelledby=/.test(tag) ||
    />\s*[^<{]/.test(tag) ||
    /<span[^>]*>\s*[^<]/.test(tag) ||
    /<strong[^>]*>\s*[^<]/.test(tag)
  );
}

const files = await listFiles(appDir);
const findings = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const relativeFile = normalizeRelativePath(file);

  for (const match of source.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=/.test(match[0])) {
      findings.push({
        type: "image-missing-alt",
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }

  for (const match of source.matchAll(/<input\b[^>]*>/gi)) {
    if (!/aria-label=|aria-labelledby=|id=/.test(match[0])) {
      findings.push({
        type: "input-missing-accessible-label",
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }

  for (const match of source.matchAll(/<button\b[\s\S]*?<\/button>/gi)) {
    if (!hasAccessibleName(match[0])) {
      findings.push({
        type: "button-missing-accessible-name",
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }

  for (const match of source.matchAll(/<nav\b[^>]*className=["'][^"']*breadcrumb-row[^"']*["'][^>]*>/gi)) {
    if (!/aria-label=/.test(match[0])) {
      findings.push({
        type: "breadcrumb-nav-missing-label",
        file: relativeFile,
        line: getLineNumber(source, match.index),
      });
    }
  }

  for (const match of source.matchAll(/\sautoFocus\b/g)) {
    findings.push({
      type: "avoid-autofocus",
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
  console.error(`${findings.length} accessibility findings detected.`);
  process.exitCode = 1;
}
