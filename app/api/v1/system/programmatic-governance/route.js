import { NextResponse } from "next/server";
import { programmaticBestPages } from "../../../../lib/programmaticSeoData";
import { summarizeProgrammaticGovernance } from "../../../../lib/programmaticSeoGovernance";
import { enforceInternalApiAccess } from "../../../../lib/internalApiGuard";

export async function GET(request) {
  const accessDenied = enforceInternalApiAccess(request);
  if (accessDenied) {
    return accessDenied;
  }

  const summary = summarizeProgrammaticGovernance(programmaticBestPages);

  return NextResponse.json(
    {
      vertical: "beauty",
      pageFamily: "best-programmatic",
      summary,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
