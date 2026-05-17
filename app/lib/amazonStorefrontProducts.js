const storefrontCategories = [
  {
    slug: "makeup",
    label: "Makeup",
    accent: "Rose",
    products: [
      "lipstick",
      "lip stain",
      "satin lipstick",
      "cream lipstick",
      "lip liner",
      "brown mascara",
      "pressed powder",
      "under-eye powder",
      "cream foundation",
      "cream-to-powder foundation",
      "mineral powder foundation",
      "radiant concealer",
      "cream bronzer",
      "contour stick",
      "gripping primer",
      "pore primer",
      "cream eyeliner",
      "gel eyeliner pencil",
      "everyday eyeshadow palette",
      "cream eyeshadow",
    ],
  },
  {
    slug: "skin-care",
    label: "Skin care",
    accent: "Ivory",
    products: [
      "cleansing balm",
      "makeup remover balm",
      "travel oil cleanser",
      "cleansing oil",
      "powder cleanser",
      "gel moisturizer",
      "cica cream",
      "hyaluronic acid moisturizer",
      "polyglutamic acid serum",
      "mandelic acid serum",
      "azelaic acid serum",
      "centella serum",
      "rice toner",
      "green tea toner",
      "face mist",
      "sunscreen serum",
      "tinted mineral sunscreen",
      "overnight face mask",
      "facial balm cleanser",
      "mini skincare set",
    ],
  },
  {
    slug: "hair-care",
    label: "Hair care",
    accent: "Champagne",
    products: [
      "sulfate-free shampoo",
      "sulfate-free shampoo and conditioner",
      "sulfate-free moisturizing shampoo",
      "sulfate-free volume shampoo",
      "dry shampoo",
      "deep conditioner",
      "anti-frizz serum",
      "hair shine oil",
      "texture spray",
      "drugstore texture spray",
      "blow dry cream",
      "hair primer",
      "hair volumizer powder",
      "hair wax stick",
      "detangling brush",
      "boar bristle brush",
      "curling wand",
      "curling iron",
      "hair mousse",
      "hair gloss",
    ],
  },
  {
    slug: "body-care",
    label: "Body care",
    accent: "Warm",
    products: [
      "scented body lotion",
      "vanilla body mist",
      "coconut body lotion",
      "fragrance body lotion",
      "body butter",
      "luxury body butter",
      "body lotion stick",
      "shimmer body oil",
      "body bronzer",
      "body cleansing oil",
      "bath oil",
      "shaving cream",
      "exfoliating glove",
      "body scrub",
      "body serum spray",
      "floral body lotion",
    ],
  },
  {
    slug: "fragrance",
    label: "Fragrance",
    accent: "Plum",
    products: [
      "vanilla body spray",
      "oud perfume",
      "fragrance wardrobe set",
      "fragrance discovery set",
      "perfumed body lotion",
      "floral body mist",
      "luxury bath oil",
      "shower oil",
      "signature scent set",
      "travel perfume",
    ],
  },
  {
    slug: "nails-tools-jewelry",
    label: "Nails, tools, jewelry",
    accent: "Gold",
    products: [
      "gel nail kit",
      "nail polish thinner",
      "nail ridge filler",
      "cuticle cream",
      "travel nail polish remover",
      "makeup brush set",
      "foundation brush",
      "silicone makeup sponge",
      "travel makeup mirror",
      "palette organizer",
      "lash serum",
      "eyebrow pomade",
      "rhinestone bracelet",
      "charm bracelet",
      "choker necklace",
      "fashion earrings",
    ],
  },
];

const shoppingAngles = [
  { slug: "best", label: "Best picks", prefix: "best", badge: "Popular search", priceCue: "Compare offers" },
  { slug: "under-50", label: "Under $50", prefix: "best", suffix: "under $50", badge: "Under $50 search", priceCue: "Lower-price intent" },
  { slug: "amazon", label: "Amazon", prefix: "best", suffix: "on Amazon", badge: "Amazon search", priceCue: "Marketplace check" },
  { slug: "travel", label: "Travel", prefix: "travel", badge: "Travel size", priceCue: "Compact picks" },
  { slug: "luxury", label: "Luxury", prefix: "luxury", badge: "Luxury search", priceCue: "Premium picks" },
  { slug: "reviewed", label: "Good reviews", prefix: "best reviewed", badge: "Review-led", priceCue: "Check ratings" },
];

const categoryDescriptions = {
  makeup: "Color, finish, and everyday makeup staples with direct Amazon shopping paths.",
  "skin-care": "Cleansers, serums, SPF, mists, and routine products shoppers compare often.",
  "hair-care": "Shampoo, conditioner, styling, brushes, and hot tools with high buyer intent.",
  "body-care": "Lotions, oils, bath, shave, scent, and body glow products for fast shopping.",
  fragrance: "Discovery sets, body sprays, scent layering, and giftable fragrance searches.",
  "nails-tools-jewelry": "Nails, beauty tools, organizers, and artificial jewelry shopping cards.",
};

function titleCase(value = "") {
  return value
    .split(" ")
    .map((word) => (word.length <= 3 && word !== "gel" ? word : `${word.charAt(0).toUpperCase()}${word.slice(1)}`))
    .join(" ")
    .replace("Spf", "SPF")
    .replace("Amazon", "Amazon");
}

function makeSearchQuery(product, angle) {
  return [angle.prefix, product, angle.suffix].filter(Boolean).join(" ");
}

function makeDescription(product, angle, category) {
  const base = titleCase(product);

  if (angle.slug === "under-50") {
    return `Amazon search card for ${base} with lower-price shopping intent. Check live size, shade, seller, and return details before checkout.`;
  }

  if (angle.slug === "luxury") {
    return `Premium ${category.label.toLowerCase()} search card for comparing brand options, sizes, sets, and current Amazon availability.`;
  }

  if (angle.slug === "travel") {
    return `Travel-focused ${base} search card for minis, compact formats, and carry-on-friendly beauty routines.`;
  }

  if (angle.slug === "reviewed") {
    return `Review-led ${base} search card for checking current ratings, seller details, and product formats on Amazon.`;
  }

  if (angle.slug === "amazon") {
    return `Direct Amazon shopping card for ${base}. Compare listings, seller identity, price, shade, size, and delivery timing.`;
  }

  return `Clean shopping card for ${BaseFix(base)}. Compare current Amazon listings, formats, prices, and seller details in one click.`;
}

function BaseFix(value) {
  return value.replace("Sulfate-free", "Sulfate-Free").replace("Under-eye", "Under-Eye");
}

function buildStorefrontProducts() {
  return storefrontCategories.flatMap((category) =>
    category.products.flatMap((product, productIndex) =>
      shoppingAngles.map((angle, angleIndex) => {
        const searchQuery = makeSearchQuery(product, angle);
        const id = `${category.slug}-${product.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${angle.slug}`;

        return {
          id,
          title: `${BaseFix(titleCase(product))}${angle.slug === "best" ? "" : ` · ${angle.label}`}`,
          categorySlug: category.slug,
          categoryLabel: category.label,
          accent: category.accent,
          badge: angle.badge,
          priceCue: angle.priceCue,
          searchQuery,
          description: makeDescription(product, angle, category),
          sortScore: (productIndex + 1) * 10 + angleIndex,
          amazonLabel: `Check Price`,
        };
      }),
    ),
  );
}

export const amazonStorefrontCategories = storefrontCategories.map((category) => ({
  slug: category.slug,
  label: category.label,
  description: categoryDescriptions[category.slug],
  count: category.products.length * shoppingAngles.length,
}));

export const amazonStorefrontProducts = buildStorefrontProducts();

export function getAmazonStorefrontProducts() {
  return amazonStorefrontProducts;
}
