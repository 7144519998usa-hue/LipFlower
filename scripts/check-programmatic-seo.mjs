import { programmaticBestPages } from "../app/lib/programmaticSeoData.js";
import { summarizeProgrammaticGovernance } from "../app/lib/programmaticSeoGovernance.js";

const summary = summarizeProgrammaticGovernance(programmaticBestPages);

console.log(JSON.stringify(summary, null, 2));

if (summary.total < 1000) {
  console.error(`Expected at least 1000 programmatic pages, found ${summary.total}.`);
  process.exitCode = 1;
}

if (summary.needsReview > 0) {
  console.error(`${summary.needsReview} programmatic pages need review.`);
  process.exitCode = 1;
}
