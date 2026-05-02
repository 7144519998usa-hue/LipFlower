import { NextResponse } from "next/server";
import { programmaticBestPages } from "../../../../lib/programmaticSeoData";
import { summarizeProgrammaticGovernance } from "../../../../lib/programmaticSeoGovernance";

export async function GET() {
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
