import { NextResponse } from "next/server";
import { getOutboundLogContext, getSafeAffiliateDestination } from "../../lib/affiliateRouting";

export function GET(request) {
  const start = Date.now();
  const destination = getSafeAffiliateDestination(request.nextUrl.searchParams.get("url"));

  if (!destination) {
    console.warn(JSON.stringify({
      level: "warn",
      msg: "blocked_outbound_redirect",
      ...getOutboundLogContext(request, null),
      ms: Date.now() - start,
    }));

    return NextResponse.redirect(new URL("/sellers", request.url), 302);
  }

  console.log(JSON.stringify({
    level: "info",
    msg: "outbound_redirect",
    ...getOutboundLogContext(request, destination),
    ms: Date.now() - start,
  }));

  return NextResponse.redirect(destination, 302);
}
