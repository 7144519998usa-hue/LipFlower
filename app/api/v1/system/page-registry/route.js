import { NextResponse } from "next/server";
import {
  getIndexableBeautyPageRegistryEntries,
  getIndexableBeautyPageRegistryEntriesByAssignment,
} from "../../../../lib/beautyPageRegistry";
import { enforceInternalApiAccess } from "../../../../lib/internalApiGuard";

function getVerticalEntries(assignment) {
  return assignment
    ? getIndexableBeautyPageRegistryEntriesByAssignment(assignment)
    : getIndexableBeautyPageRegistryEntries();
}

export async function GET(request) {
  const accessDenied = enforceInternalApiAccess(request);
  if (accessDenied) {
    return accessDenied;
  }

  const { searchParams } = new URL(request.url);
  const assignment = searchParams.get("assignment") || "";
  const entries = getVerticalEntries(assignment);

  return NextResponse.json(
    {
      vertical: "beauty",
      assignment: assignment || null,
      count: entries.length,
      entries,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
