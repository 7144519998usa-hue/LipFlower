import { NextResponse } from "next/server";
import {
  getIndexableBeautyPageRegistryEntries,
  getIndexableBeautyPageRegistryEntriesByAssignment,
} from "../../../../lib/beautyPageRegistry";

function getVerticalEntries(assignment) {
  return assignment
    ? getIndexableBeautyPageRegistryEntriesByAssignment(assignment)
    : getIndexableBeautyPageRegistryEntries();
}

export async function GET(request) {
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
