import { amazonVerifiedProducts } from "../data/amazonVerifiedProducts.js";
import { defaultAmazonAssociateTag } from "./amazonLuxuryProducts.js";
import { publicEnv } from "./env.js";

const asinPattern = /^[A-Z0-9]{10}$/;

function normalizeKey(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function withAmazonTag(url) {
  const taggedUrl = new URL(url);
  taggedUrl.searchParams.set("tag", publicEnv.amazonAssociateTag || defaultAmazonAssociateTag);
  return taggedUrl.toString();
}

export function createAmazonDirectProductUrl(asin = "") {
  const normalizedAsin = String(asin).trim().toUpperCase();

  if (!asinPattern.test(normalizedAsin)) {
    return "";
  }

  return withAmazonTag(`https://www.amazon.com/dp/${normalizedAsin}`);
}

export function normalizeAmazonVerifiedProduct(product) {
  const asin = String(product.asin || "").trim().toUpperCase();

  if (!asinPattern.test(asin)) {
    return null;
  }

  const detailPageUrl = product.detailPageUrl
    ? withAmazonTag(product.detailPageUrl)
    : createAmazonDirectProductUrl(asin);

  return {
    ...product,
    asin,
    detailPageUrl,
    title: String(product.title || "").trim(),
    brand: String(product.brand || "").trim(),
    category: String(product.category || "").trim(),
    verificationSource: product.verificationSource || "manual",
    lastVerifiedAt: product.lastVerifiedAt || "",
  };
}

export const normalizedAmazonVerifiedProducts = amazonVerifiedProducts
  .map(normalizeAmazonVerifiedProduct)
  .filter(Boolean);

const verifiedByTitle = new Map(
  normalizedAmazonVerifiedProducts.map((product) => [normalizeKey(product.title), product]),
);

export function getVerifiedAmazonProductByName(name = "") {
  return verifiedByTitle.get(normalizeKey(name)) || null;
}

export function isVerifiedAmazonProductName(name = "") {
  return Boolean(getVerifiedAmazonProductByName(name));
}

export function getAmazonVerifiedProductStats() {
  return {
    verifiedProductCount: normalizedAmazonVerifiedProducts.length,
    verifiedAsinCount: new Set(normalizedAmazonVerifiedProducts.map((product) => product.asin)).size,
  };
}
