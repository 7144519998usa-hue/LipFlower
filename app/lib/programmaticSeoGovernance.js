const requiredSafeTerms = ["claim-safe", "seller", "routine", "directions"];

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

export function summarizeProgrammaticGovernance(pages = []) {
  const summary = {
    total: pages.length,
    indexable: 0,
    needsReview: 0,
    averageScore: 0,
    byVertical: {},
  };
  let scoreTotal = 0;

  pages.forEach((page) => {
    const governance = page.governance || scoreProgrammaticBestPage(page);
    scoreTotal += governance.score;

    if (governance.indexabilityState === "indexable") {
      summary.indexable += 1;
    } else {
      summary.needsReview += 1;
    }

    summary.byVertical[page.vertical] ||= {
      total: 0,
      indexable: 0,
      needsReview: 0,
    };
    summary.byVertical[page.vertical].total += 1;
    summary.byVertical[page.vertical][governance.indexabilityState === "indexable" ? "indexable" : "needsReview"] += 1;
  });

  summary.averageScore = pages.length ? Math.round(scoreTotal / pages.length) : 0;

  return summary;
}
