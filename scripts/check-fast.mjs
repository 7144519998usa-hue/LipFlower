import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

const routeChecks = [
  { name: "check:internal-links", file: "check-internal-links.mjs" },
  { name: "check:route-coverage", file: "check-route-coverage.mjs" },
  { name: "check:programmatic-seo", file: "check-programmatic-seo.mjs" },
  { name: "check:sitemaps", file: "check-sitemaps.mjs" },
];

const sourceChecks = [
  { name: "check:structured-data", file: "check-structured-data.mjs" },
  { name: "check:claims", file: "check-claims.mjs" },
  { name: "check:metadata", file: "check-metadata.mjs" },
  { name: "check:security", file: "check-security.mjs" },
  { name: "check:env", file: "check-env.mjs" },
  { name: "check:affiliate", file: "check-affiliate.mjs" },
  { name: "check:a11y", file: "check-a11y.mjs" },
];

function runScript(script) {
  const startedAt = Date.now();

  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["--no-warnings", path.join(scriptsDir, script.file)], {
      cwd: process.cwd(),
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("close", (code) => {
      resolve({
        scriptName: script.name,
        code,
        durationMs: Date.now() - startedAt,
        stdout: stdout.trim(),
        stderr: stderr.trim(),
      });
    });
  });
}

async function runGroup(label, scripts) {
  console.log(`Running ${label}: ${scripts.map((script) => script.name).join(", ")}`);
  const results = await Promise.all(scripts.map(runScript));
  const failed = results.filter((result) => result.code !== 0);

  for (const result of results) {
    const status = result.code === 0 ? "passed" : "failed";
    console.log(`${result.scriptName}: ${status} in ${(result.durationMs / 1000).toFixed(1)}s`);
    if (result.code !== 0) {
      if (result.stdout) {
        console.log(result.stdout);
      }
      if (result.stderr) {
        console.error(result.stderr);
      }
    }
  }

  return failed;
}

const startedAt = Date.now();
const routeFailures = await runGroup("route and registry checks", routeChecks);
const sourceFailures = await runGroup("source and policy checks", sourceChecks);
const failures = [...routeFailures, ...sourceFailures];

const summary = {
  scriptsRun: routeChecks.length + sourceChecks.length,
  failedCount: failures.length,
  failedScripts: failures.map((result) => result.scriptName),
  durationSeconds: Number(((Date.now() - startedAt) / 1000).toFixed(1)),
};

console.log(JSON.stringify(summary, null, 2));

if (failures.length > 0) {
  process.exitCode = 1;
}
