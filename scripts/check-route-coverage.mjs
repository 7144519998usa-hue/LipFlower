import {
  buildGeneratedRouteSet,
  buildRegistryRouteSet,
  buildStaticRouteSet,
  intentionallyUnregisteredRoutes,
} from "./lib/route-engine.mjs";

const ignoredRoutePrefixes = [
  "/api/",
  "/sitemaps/",
];

const ignoredExactRoutes = new Set([
  "/icon.svg",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap_index.xml",
]);

function isIgnoredRoute(route) {
  return (
    ignoredExactRoutes.has(route) ||
    ignoredRoutePrefixes.some((prefix) => route.startsWith(prefix)) ||
    intentionallyUnregisteredRoutes.has(route)
  );
}

const staticRoutes = await buildStaticRouteSet();
const generatedRoutes = buildGeneratedRouteSet();
const knownRoutes = new Set([...staticRoutes, ...generatedRoutes]);
const registryRoutes = buildRegistryRouteSet();

const missingFromRegistry = [...knownRoutes]
  .filter((route) => !registryRoutes.has(route) && !isIgnoredRoute(route))
  .sort();

const registryWithoutRoute = [...registryRoutes]
  .filter((route) => !knownRoutes.has(route))
  .sort();

const summary = {
  knownRouteCount: knownRoutes.size,
  registryRouteCount: registryRoutes.size,
  intentionallyUnregisteredRoutes: [...intentionallyUnregisteredRoutes].sort(),
  missingFromRegistryCount: missingFromRegistry.length,
  missingFromRegistry,
  registryWithoutRouteCount: registryWithoutRoute.length,
  registryWithoutRoute,
};

console.log(JSON.stringify(summary, null, 2));

if (missingFromRegistry.length > 0 || registryWithoutRoute.length > 0) {
  console.error("Route registry coverage mismatch detected.");
  process.exitCode = 1;
}
