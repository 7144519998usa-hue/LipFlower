import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const requiredEnvVars = [
  "LIPFLOWER_SITE_URL",
  "LIPFLOWER_GOOGLE_SITE_VERIFICATION",
  "LIPFLOWER_GA_MEASUREMENT_ID",
  "LIPFLOWER_AMAZON_ASSOCIATE_TAG",
  "LIPFLOWER_ENABLE_VERCEL_ANALYTICS",
  "LIPFLOWER_INTERNAL_API_KEY",
];

const futureEnvVars = [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
];

const disallowedExampleValues = [
  "changeme",
  "password",
  "secret",
  "sk-",
  "eyJ",
];

async function readProjectFile(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

function parseEnvExample(source) {
  return source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [name, ...valueParts] = line.split("=");
      return { name, value: valueParts.join("=") };
    });
}

const [envSource, envExampleSource, readmeSource, gitignoreSource] = await Promise.all([
  readProjectFile("app/lib/env.js"),
  readProjectFile(".env.example"),
  readProjectFile("README.md"),
  readProjectFile(".gitignore"),
]);

const exampleEntries = parseEnvExample(envExampleSource);
const exampleNames = new Set(exampleEntries.map((entry) => entry.name));
const findings = [];

for (const envVar of requiredEnvVars) {
  if (!envSource.includes(envVar)) {
    findings.push({ type: "env-not-read-by-app", envVar, file: "app/lib/env.js" });
  }

  if (!exampleNames.has(envVar)) {
    findings.push({ type: "missing-env-example", envVar, file: ".env.example" });
  }

  if (!readmeSource.includes(envVar)) {
    findings.push({ type: "missing-readme-env-doc", envVar, file: "README.md" });
  }
}

for (const envVar of futureEnvVars) {
  if (!exampleNames.has(envVar)) {
    findings.push({ type: "missing-future-env-example", envVar, file: ".env.example" });
  }
}

for (const entry of exampleEntries) {
  const lowerValue = entry.value.toLowerCase();
  if (entry.value && disallowedExampleValues.some((value) => lowerValue.includes(value.toLowerCase()))) {
    findings.push({
      type: "unsafe-placeholder-secret",
      envVar: entry.name,
      file: ".env.example",
    });
  }
}

for (const ignoredFile of [".env.local", ".env.production.local", ".env.development.local", ".env.test.local"]) {
  if (!gitignoreSource.includes(ignoredFile)) {
    findings.push({ type: "env-file-not-ignored", file: ".gitignore", envFile: ignoredFile });
  }
}

const summary = {
  requiredEnvVars,
  futureEnvVars,
  envExampleEntries: exampleEntries.map((entry) => entry.name),
  findingCount: findings.length,
  findings,
};

console.log(JSON.stringify(summary, null, 2));

if (findings.length > 0) {
  console.error(`${findings.length} environment configuration findings detected.`);
  process.exitCode = 1;
}
