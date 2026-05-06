import { NextResponse } from "next/server";
import { beautyComparePages, beautySellers } from "../../../../lib/beautyData";
import { programmaticBestPages } from "../../../../lib/programmaticSeoData";
import { enforceInternalApiAccess } from "../../../../lib/internalApiGuard";

function getFeaturedSellerCount() {
  return beautySellers.filter((seller) => ["amazon", "sephora", "ulta"].includes(seller.slug)).length;
}

export async function GET(request) {
  const accessDenied = enforceInternalApiAccess(request);
  if (accessDenied) {
    return accessDenied;
  }

  const featuredSellerCount = getFeaturedSellerCount();
  const bestProductCards = programmaticBestPages.length * 3;
  const bestProductMerchantLinks = bestProductCards * featuredSellerCount;
  const bestSellerPanelLinks = programmaticBestPages.length * featuredSellerCount;
  const bestStickyLinks = programmaticBestPages.length;
  const comparisonOfferLinks = beautyComparePages.reduce(
    (total, page) => total + page.columns.length * featuredSellerCount,
    0,
  );
  const comparisonStickyLinks = beautyComparePages.length;

  return NextResponse.json(
    {
      vertical: "beauty",
      monetizedTemplates: {
        bestPages: programmaticBestPages.length,
        comparisonPages: beautyComparePages.length,
        featuredSellers: featuredSellerCount,
      },
      estimatedAffiliateSurfaces: {
        bestProductCards,
        bestProductMerchantLinks,
        bestSellerPanelLinks,
        bestStickyLinks,
        comparisonOfferLinks,
        comparisonStickyLinks,
        totalEstimatedAffiliateLinks:
          bestProductMerchantLinks +
          bestSellerPanelLinks +
          bestStickyLinks +
          comparisonOfferLinks +
          comparisonStickyLinks,
      },
      instrumentation: {
        outboundRoute: "/api/outbound",
        eventName: "outbound_affiliate_click",
        eventVersion: 1,
        protectedSystemEndpoint: true,
      },
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
