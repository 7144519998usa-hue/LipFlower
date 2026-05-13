export const defaultAmazonAssociateTag = "lipflower-20";

export const amazonLuxuryProductTargetMinimum = 5000;

const luxuryBeautyBrands = [
  "La Mer",
  "Tatcha",
  "SkinCeuticals",
  "Dr. Barbara Sturm",
  "Augustinus Bader",
  "Sunday Riley",
  "Shani Darden",
  "Elemis",
  "Fresh",
  "SK-II",
  "Sulwhasoo",
  "Dior",
  "Chanel",
  "Charlotte Tilbury",
  "Giorgio Armani",
  "Tom Ford",
  "Yves Saint Laurent",
  "Hourglass",
  "NARS",
  "Laura Mercier",
  "Pat McGrath Labs",
  "Westman Atelier",
  "Victoria Beckham Beauty",
  "Rare Beauty",
  "Fenty Beauty",
  "Oribe",
  "Kerastase",
  "K18",
  "Olaplex",
  "Briogeo",
  "Dyson",
  "T3",
  "GHD",
  "Sonia G",
  "NuFACE",
  "Foreo",
  "Therabody",
  "Maison Francis Kurkdjian",
  "Jo Malone",
  "Byredo",
  "Diptyque",
  "Le Labo",
  "Creed",
  "Parfums de Marly",
  "Sol de Janeiro",
  "Aesop",
  "L'Occitane",
  "Osea",
  "Nuxe",
  "Deborah Lippmann",
  "Hermes",
  "Olive and June",
  "Tweezerman",
  "Riki Loves Riki",
  "Simplehuman",
  "Calpak",
  "Dagne Dover",
];

const luxuryIntentModifiers = [
  "luxury",
  "premium",
  "gift set",
  "prestige",
  "designer",
  "professional",
  "travel size",
  "full size",
  "refill",
  "mini set",
  "value set",
  "limited edition",
  "Amazon luxury beauty",
  "high end",
  "boutique",
  "designer inspired",
  "routine set",
  "collector",
  "holiday gift",
  "wedding ready",
  "travel kit",
  "pro artist",
  "refillable",
  "deluxe size",
  "starter set",
  "splurge",
  "editorial",
  "occasion",
  "vanity",
  "glow routine",
  "fragrance layering",
  "spa routine",
];

const luxuryUseCases = [
  "for gifting",
  "for travel",
  "for wedding beauty",
  "for mature routines",
  "for sensitive shoppers",
  "for everyday luxury",
  "for date night",
  "for holiday beauty",
  "for makeup prep",
  "for dry-feeling routines",
  "for polished routines",
  "for minimalist routines",
  "for luxury self care",
  "for beauty lovers",
  "for vanity organization",
  "for routine upgrades",
];

const verticalBrandPriority = {
  "skin care": [
    "La Mer",
    "Tatcha",
    "SkinCeuticals",
    "Dr. Barbara Sturm",
    "Augustinus Bader",
    "Sunday Riley",
    "Shani Darden",
    "Elemis",
    "Fresh",
    "SK-II",
    "Sulwhasoo",
  ],
  makeup: [
    "Dior",
    "Chanel",
    "Charlotte Tilbury",
    "Giorgio Armani",
    "Tom Ford",
    "Yves Saint Laurent",
    "Hourglass",
    "NARS",
    "Laura Mercier",
    "Pat McGrath Labs",
    "Westman Atelier",
    "Victoria Beckham Beauty",
    "Rare Beauty",
    "Fenty Beauty",
  ],
  "lip care": [
    "Dior",
    "Chanel",
    "Tatcha",
    "Fresh",
    "Laneige",
    "Summer Fridays",
    "Yves Saint Laurent",
    "Charlotte Tilbury",
    "Tom Ford",
  ],
  "hair care": [
    "Oribe",
    "Kerastase",
    "K18",
    "Olaplex",
    "Briogeo",
    "Dyson",
    "T3",
    "GHD",
  ],
  fragrance: [
    "Maison Francis Kurkdjian",
    "Jo Malone",
    "Byredo",
    "Diptyque",
    "Le Labo",
    "Creed",
    "Parfums de Marly",
    "Tom Ford",
    "Dior",
    "Chanel",
  ],
  "body care": [
    "Sol de Janeiro",
    "Aesop",
    "L'Occitane",
    "Osea",
    "Nuxe",
    "Necessaire",
    "Jo Malone",
    "Chanel",
    "Dior",
  ],
  "nail care": [
    "Chanel",
    "Dior",
    "Hermes",
    "Deborah Lippmann",
    "Olive and June",
    "OPI",
    "Essie",
    "Tweezerman",
  ],
  "beauty tools": [
    "Dyson",
    "T3",
    "GHD",
    "Sonia G",
    "NuFACE",
    "Foreo",
    "Therabody",
    "Riki Loves Riki",
    "Simplehuman",
  ],
  "artificial jewelry": [
    "Kendra Scott",
    "Kate Spade",
    "BaubleBar",
    "Swarovski",
    "Nadri",
    "Pavoi",
    "J.Crew",
    "Rocksbox",
  ],
  "luxury beauty": [
    "Dior",
    "Chanel",
    "Charlotte Tilbury",
    "La Mer",
    "Tatcha",
    "Dyson",
    "Maison Francis Kurkdjian",
    "Tom Ford",
    "Jo Malone",
  ],
};

function stableIndex(value = "") {
  return [...String(value)].reduce((sum, character) => sum + character.charCodeAt(0), 0);
}

function uniqueValues(values = []) {
  const seen = new Set();
  return values.filter((value) => {
    const normalized = value.toLowerCase();
    if (seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
}

function getBrandPool(vertical = "") {
  return uniqueValues([...(verticalBrandPriority[vertical] || []), ...luxuryBeautyBrands]);
}

export function getAmazonLuxuryExamplesForCategory(category, minimumCount = 5) {
  const baseExamples = category.examples || [];
  const brandPool = getBrandPool(category.vertical);
  const offset = stableIndex(`${category.slug}-${category.vertical}`);
  const generatedExamples = [];

  for (let index = 0; generatedExamples.length < minimumCount + 2 && index < brandPool.length * 8; index += 1) {
    const brand = brandPool[(offset + index) % brandPool.length];
    const modifier = luxuryIntentModifiers[(offset + index) % luxuryIntentModifiers.length];
    const useCase = luxuryUseCases[(offset + index) % luxuryUseCases.length];
    const pattern = index % 4;
    const label = pattern === 0
      ? `${brand} ${category.label}`
      : pattern === 1
        ? `${brand} ${modifier} ${category.label}`
        : pattern === 2
          ? `${brand} ${category.label} ${useCase}`
          : `${brand} ${modifier} ${category.label} ${useCase}`;

    generatedExamples.push(label);
  }

  return uniqueValues([...baseExamples, ...generatedExamples]).slice(0, minimumCount);
}

export function buildAmazonLuxuryProductTargets(categories = [], perCategory = 5) {
  return uniqueValues(
    categories.flatMap((category) => getAmazonLuxuryExamplesForCategory(category, perCategory)),
  );
}
