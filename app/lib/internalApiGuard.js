import { NextResponse } from "next/server";
import { appEnv, getServerEnv } from "./env.js";

function getProvidedKey(request) {
  const authHeader = request.headers.get("authorization") || "";
  const bearerPrefix = "Bearer ";

  if (authHeader.startsWith(bearerPrefix)) {
    return authHeader.slice(bearerPrefix.length).trim();
  }

  return request.headers.get("x-lipflower-internal-key") || "";
}

export function enforceInternalApiAccess(request) {
  if (appEnv.isNonProduction) {
    return null;
  }

  const { internalApiKey } = getServerEnv();
  const providedKey = getProvidedKey(request);

  if (internalApiKey && providedKey === internalApiKey) {
    return null;
  }

  return NextResponse.json(
    { error: "Not found" },
    {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
