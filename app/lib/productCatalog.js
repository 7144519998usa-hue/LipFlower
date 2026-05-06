function inferBrand(productName = "") {
  const knownBrands = [
    "La Mer",
    "CeraVe",
    "Tatcha",
    "SkinCeuticals",
    "The Ordinary",
    "Estee Lauder",
    "Supergoop",
    "EltaMD",
    "La Roche-Posay",
    "Paula's Choice",
    "Fresh",
    "Laneige",
    "Kiehl's",
    "OleHenriksen",
    "Summer Fridays",
    "Drunk Elephant",
    "Dermalogica",
    "Sunday Riley",
    "Shani Darden",
    "Glow Recipe",
    "First Aid Beauty",
    "Skinfix",
    "Clinique",
    "Elemis",
    "Farmacy",
    "Armani",
    "Dior",
    "NARS",
    "Tarte",
    "Rare Beauty",
    "Charlotte Tilbury",
    "Lancome",
    "Benefit",
    "Fenty",
    "Tower 28",
    "Milk",
    "Hourglass",
    "Laura Mercier",
    "Urban Decay",
    "MAC",
    "Oribe",
    "K18",
    "Kerastase",
    "Briogeo",
    "CHANEL",
    "Maison Francis Kurkdjian",
    "Jo Malone",
    "Sol de Janeiro",
    "Necessaire",
    "Aesop",
    "Chanel",
    "Hermes",
    "Sonia G",
    "Sephora Collection",
    "NuFACE",
    "Dyson",
    "Shark",
    "T3",
  ];

  const matchedBrand = knownBrands.find((brand) =>
    productName.toLowerCase().startsWith(brand.toLowerCase()),
  );

  return matchedBrand || productName.split(" ").slice(0, 2).join(" ");
}

function inferPriceTier(productName = "", page) {
  const text = `${productName} ${page.title} ${page.intentLabel}`.toLowerCase();

  if (text.includes("under $25") || text.includes("budget")) {
    return "$";
  }

  if (text.includes("la mer") || text.includes("dyson") || text.includes("luxury") || text.includes("splurge")) {
    return "$$$";
  }

  if (text.includes("dior") || text.includes("chanel") || text.includes("armani") || text.includes("tatcha")) {
    return "$$$";
  }

  return "$$";
}

function buildPros(page, badge) {
  const basePros = [
    `Clear fit for ${page.intentLabel === "overall" ? page.categoryPlural : page.intentLabel}`,
    `Easy to compare across ${page.vertical} retailers`,
  ];

  if (badge === "Best Overall") {
    return [...basePros, "Strong anchor product for starting a shortlist"];
  }

  if (badge === "Best Value") {
    return [...basePros, "Useful when price and availability matter"];
  }

  return [...basePros, "Good fit for shoppers comparing elevated presentation"];
}

function buildCons(page, badge) {
  const caution = page.intentLabel.includes("sensitive")
    ? "Review fragrance, ingredient, and use-direction details carefully"
    : "Check seller, size, shade, and return details before clicking out";

  if (badge === "Luxury Pick") {
    return [caution, "Premium positioning may not be necessary for every routine"];
  }

  return [caution, "Availability and pricing can vary by seller"];
}

function buildProductSummary(productName, page, badge) {
  const category = page.categoryLabel;
  const intent = page.intentLabel === "overall" ? "general comparison" : page.intentLabel;

  return `${productName} is included as a ${badge.toLowerCase()} anchor for ${category} shoppers comparing ${intent}. LipFlower uses it as a recognizable buying reference, not as an invented performance ranking.`;
}

function buildProductFit(page, index) {
  const fits = [
    page.buyingAngle,
    `Shoppers who want a familiar ${page.categoryLabel} starting point`,
    `Readers comparing ${page.categoryPlural} across Amazon, Sephora, and Ulta-style retailers`,
  ];

  return fits[index] || fits[0];
}

export function getProductsForBestPage(page) {
  const badges = ["Best Overall", "Best Value", "Luxury Pick"];

  return page.examples.map((productName, index) => {
    const badge = badges[index] || "Recommended";

    return {
      id: `${page.slug}-${index}`,
      name: productName,
      brand: inferBrand(productName),
      category: page.categoryLabel,
      badge,
      priceTier: inferPriceTier(productName, page),
      summary: buildProductSummary(productName, page, badge),
      bestFor: buildProductFit(page, index),
      texture: page.vertical,
      pros: buildPros(page, badge),
      cons: buildCons(page, badge),
      sellerQuery: `${productName} ${page.categoryLabel}`,
    };
  });
}
