const requiredSafeTerms = ["claim-safe", "seller", "routine", "directions"];
const defaultProgrammaticIndexLimit = 1200;
const priorityIndexSlugs = new Set([
  "best-lipstick-under-50",
  "best-sulfate-free-shampoo",
  "best-sulfate-free-shampoo-under-50",
  "best-lip-stain",
  "best-lip-stain-under-50",
  "best-pressed-powder",
  "best-satin-lipstick",
  "best-brown-mascara",
  "best-cream-to-powder-foundation",
  "best-polyglutamic-acid-serum",
  "best-under-eye-powder",
  "best-setting-powder-for-under-eyes",
  "best-oil-cleanser-for-travel",
  "best-cleansing-oil-for-travel",
  "best-makeup-remover-balm",
  "best-powder-cleanser",
  "best-cream-bronzer",
  "best-cleansing-balm",
  "best-face-oil",
  "best-luxury-face-oil",
  "best-body-lotion-with-fragrance",
  "best-scented-body-lotion",
  "best-deep-conditioner",
  "best-mineral-powder-foundation",
  "best-nail-polish-thinner",
  "best-everyday-eyeshadow-palette",
  "best-cream-foundation",
  "best-body-lotion-stick",
  "best-cica-cream",
  "best-pore-primer",
  "best-makeup-gripping-primer",
  "best-foundation-brush-for-sensitive-shoppers",
  "best-shimmer-body-oil",
  "best-vanilla-body-mist",
  "best-contour-stick",
  "best-shaving-cream",
  "best-texturizing-spray",
  "best-hydrating-face-mist-for-travel",
  "best-mandelic-acid-serum",
  "best-azelaic-acid-serum",
  "best-curling-wand",
  "best-curling-iron",
]);

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
  const selectedSlugs = new Set();

  alreadyEligiblePages.forEach((page) => {
    if (priorityIndexSlugs.has(page.slug)) {
      selectedSlugs.add(page.slug);
      return;
    }

    const verticalPages = groupedByVertical.get(page.vertical) || [];
    verticalPages.push(page);
    groupedByVertical.set(page.vertical, verticalPages);
  });

  const verticals = [...groupedByVertical.keys()].sort();

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
