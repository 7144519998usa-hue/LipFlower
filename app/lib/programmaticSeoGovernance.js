const requiredSafeTerms = ["claim-safe", "seller", "routine", "directions"];
const defaultProgrammaticIndexLimit = 1200;

export function getProgrammaticIndexLimit() {
  const configuredLimit = Number.parseInt(process.env.LIPFLOWER_PROGRAMMATIC_INDEX_LIMIT || "", 10);

  if (Number.isFinite(configuredLimit) && configuredLimit >= 0) {
    return configuredLimit;
  }

  return defaultProgrammaticIndexLimit;
}

function hasDuplicateValues(values = []) {
  return new Set(values).size !== values.length;
}

export function scoreProgrammaticBestPage(page) {
  const checks = {
    hasUniqueSlug: Boolean(page.slug),
    hasKeyword: Boolean(page.seoKeyword && page.seoKeyword.startsWith("best ")),
    hasEnoughProductAnchors: page.examples.length >= 3,
    hasEnoughInternalLinks: page.relatedLinks.length >= 4,
    hasFaq: page.faq.length >= 2,
    hasMethodology: page.methodology.length >= 120,
    hasUniqueProductAnchors: !hasDuplicateValues(page.examples),
    claimSafeLanguage: requiredSafeTerms.every((term) =>
      `${page.intro} ${page.methodology}`.toLowerCase().includes(term),
    ),
  };
  const passed = Object.values(checks).filter(Boolean).length;
  const score = Math.round((passed / Object.keys(checks).length) * 100);
  const indexabilityState = score >= 88 ? "indexable" : "noindex";

  return {
    score,
    checks,
    indexabilityState,
    sitemapEligible: indexabilityState === "indexable",
  };
}

export function decorateProgrammaticBestPage(page) {
  const governance = scoreProgrammaticBestPage(page);

  return {
    ...page,
    governance,
    contentStatus: governance.indexabilityState === "indexable" ? "approved" : "needs_review",
  };
}

export function applyProgrammaticIndexRollout(pages = [], limit = getProgrammaticIndexLimit()) {
  const alreadyEligiblePages = pages.filter((page) => page.governance?.indexabilityState === "indexable");
  const groupedByVertical = new Map();

  alreadyEligiblePages.forEach((page) => {
    const verticalPages = groupedByVertical.get(page.vertical) || [];
    verticalPages.push(page);
    groupedByVertical.set(page.vertical, verticalPages);
  });

  const verticals = [...groupedByVertical.keys()].sort();
  const selectedSlugs = new Set();

  while (selectedSlugs.size < limit && verticals.some((vertical) => groupedByVertical.get(vertical)?.length)) {
    for (const vertical of verticals) {
      const verticalPages = groupedByVertical.get(vertical);

      if (!verticalPages?.length || selectedSlugs.size >= limit) {
        continue;
      }

      selectedSlugs.add(verticalPages.shift().slug);
    }
  }

  return pages.map((page) => {
    if (page.governance?.indexabilityState !== "indexable" || selectedSlugs.has(page.slug)) {
      return {
        ...page,
        indexRolloutPhase: "active",
      };
    }

    return {
      ...page,
      governance: {
        ...page.governance,
        indexabilityState: "noindex",
        sitemapEligible: false,
        rolloutReason: `Held from indexation during phased launch; current programmatic index limit is ${limit}.`,
      },
      contentStatus: "needs_review",
      indexRolloutPhase: "held",
    };
  });
}

export function summarizeProgrammaticGovernance(pages = []) {
  const summary = {
    total: pages.length,
    indexable: 0,
    needsReview: 0,
    averageScore: 0,
    indexRolloutLimit: getProgrammaticIndexLimit(),
    heldFromIndexation: 0,
    byVertical: {},
  };
  let scoreTotal = 0;

  pages.forEach((page) => {
    const governance = page.governance || scoreProgrammaticBestPage(page);
    scoreTotal += governance.score;

    if (governance.indexabilityState === "indexable") {
      summary.indexable += 1;
    } else if (page.indexRolloutPhase === "held") {
      summary.heldFromIndexation += 1;
    } else {
      summary.needsReview += 1;
    }

    summary.byVertical[page.vertical] ||= {
      total: 0,
      indexable: 0,
      heldFromIndexation: 0,
      needsReview: 0,
    };
    summary.byVertical[page.vertical].total += 1;
    if (governance.indexabilityState === "indexable") {
      summary.byVertical[page.vertical].indexable += 1;
    } else if (page.indexRolloutPhase === "held") {
      summary.byVertical[page.vertical].heldFromIndexation += 1;
    } else {
      summary.byVertical[page.vertical].needsReview += 1;
    }
  });

  summary.averageScore = pages.length ? Math.round(scoreTotal / pages.length) : 0;

  return summary;
}
