import { NextResponse } from "next/server";
import { getSafeAffiliateDestination } from "../../lib/affiliateRouting";
import { buildOutboundClickEvent } from "../../lib/outboundClickEvent";

export function GET(request) {
  const start = Date.now();
  const destination = getSafeAffiliateDestination(request.nextUrl.searchParams.get("url"));

  if (!destination) {
    console.warn(
      JSON.stringify(
        buildOutboundClickEvent({
          request,
          destination: null,
          status: "blocked",
          elapsedMs: Date.now() - start,
        }),
      ),
    );

    return NextResponse.redirect(new URL("/sellers", request.url), 302);
  }

  console.log(
    JSON.stringify(
      buildOutboundClickEvent({
        request,
        destination,
        status: "redirected",
        elapsedMs: Date.now() - start,
      }),
    ),
  );

  return NextResponse.redirect(destination, 302);
}
