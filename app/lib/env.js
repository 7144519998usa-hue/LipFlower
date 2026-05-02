const deploymentEnvironment = process.env.VERCEL_ENV || "local";

function getString(name, fallback = "") {
  const value = process.env[name];
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function getBoolean(name, fallback = false) {
  const value = getString(name);
  if (!value) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export const appEnv = {
  deploymentEnvironment,
  isLocal: deploymentEnvironment === "local",
  isProduction: deploymentEnvironment === "production",
  isNonProduction: deploymentEnvironment !== "production",
};

export const publicEnv = {
  siteUrl: getString("LIPFLOWER_SITE_URL", "https://lipflower.com"),
  googleVerification: getString("LIPFLOWER_GOOGLE_SITE_VERIFICATION"),
  googleAnalyticsId: getString("LIPFLOWER_GA_MEASUREMENT_ID"),
};

export function getServerEnv() {
  return {
    enableVercelAnalytics: getBoolean("LIPFLOWER_ENABLE_VERCEL_ANALYTICS", appEnv.isProduction),
    internalApiKey: getString("LIPFLOWER_INTERNAL_API_KEY"),
  };
}
