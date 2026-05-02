import { NextResponse } from "next/server";
import { getSafeAffiliateDestination } from "../../lib/affiliateRouting";

export function GET(request) {
  const destination = getSafeAffiliateDestination(request.nextUrl.searchParams.get("url"));

  if (!destination) {
    return NextResponse.redirect(new URL("/sellers", request.url), 302);
  }

  return NextResponse.redirect(destination, 302);
}
