import { decorateProgrammaticBestPage } from "./programmaticSeoGovernance.js";

const bestPageCategories = [
  { slug: "moisturizer", label: "moisturizer", plural: "moisturizers", vertical: "skin care", categoryPath: "/skin-care", examples: ["La Mer Creme de la Mer", "CeraVe Moisturizing Cream", "Tatcha Dewy Skin Cream"] },
  { slug: "cleanser", label: "cleanser", plural: "cleansers", vertical: "skin care", categoryPath: "/skin-care", examples: ["CeraVe Hydrating Facial Cleanser", "Tatcha Rice Wash", "Fresh Soy Face Cleanser"] },
  { slug: "serum", label: "serum", plural: "serums", vertical: "skin care", categoryPath: "/skin-care", examples: ["SkinCeuticals C E Ferulic", "The Ordinary Niacinamide Serum", "Estee Lauder Advanced Night Repair"] },
  { slug: "sunscreen", label: "sunscreen", plural: "sunscreens", vertical: "skin care", categoryPath: "/skin-care", examples: ["Supergoop Unseen Sunscreen", "EltaMD UV Clear", "La Roche-Posay Anthelios"] },
  { slug: "toner", label: "toner", plural: "toners", vertical: "skin care", categoryPath: "/skin-care", examples: ["Paula's Choice Toner", "Fresh Rose Toner", "Laneige Cream Skin Toner"] },
  { slug: "eye-cream", label: "eye cream", plural: "eye creams", vertical: "skin care", categoryPath: "/skin-care", examples: ["Kiehl's Avocado Eye Cream", "La Mer Eye Concentrate", "OleHenriksen Banana Bright Eye Creme"] },
  { slug: "face-mask", label: "face mask", plural: "face masks", vertical: "skin care", categoryPath: "/skin-care", examples: ["Summer Fridays Jet Lag Mask", "Tatcha Violet-C Mask", "Fresh Rose Face Mask"] },
  { slug: "exfoliant", label: "exfoliant", plural: "exfoliants", vertical: "skin care", categoryPath: "/skin-care", examples: ["Paula's Choice 2% BHA", "Drunk Elephant Babyfacial", "Dermalogica Daily Microfoliant"] },
  { slug: "retinol-serum", label: "retinol serum", plural: "retinol serums", vertical: "skin care", categoryPath: "/skin-care", examples: ["Sunday Riley A+ Serum", "Shani Darden Retinol Reform", "The Ordinary Retinol"] },
  { slug: "vitamin-c-serum", label: "vitamin C serum", plural: "vitamin C serums", vertical: "skin care", categoryPath: "/skin-care/vitamin-c-serums", examples: ["SkinCeuticals C E Ferulic", "Drunk Elephant C-Firma", "OleHenriksen Truth Serum"] },
  { slug: "niacinamide-serum", label: "niacinamide serum", plural: "niacinamide serums", vertical: "skin care", categoryPath: "/skin-care", examples: ["The Ordinary Niacinamide", "Glow Recipe Dew Drops", "Paula's Choice Niacinamide Booster"] },
  { slug: "barrier-cream", label: "barrier cream", plural: "barrier creams", vertical: "skin care", categoryPath: "/skin-care/barrier-repair-moisturizers", examples: ["CeraVe Moisturizing Cream", "First Aid Beauty Ultra Repair Cream", "Skinfix Barrier+ Cream"] },
  { slug: "cleansing-balm", label: "cleansing balm", plural: "cleansing balms", vertical: "skin care", categoryPath: "/skin-care", examples: ["Clinique Take The Day Off Balm", "Elemis Pro-Collagen Cleansing Balm", "Farmacy Green Clean"] },
  { slug: "foundation", label: "foundation", plural: "foundations", vertical: "makeup", categoryPath: "/makeup/luxury-foundation", examples: ["Armani Luminous Silk Foundation", "Dior Forever Foundation", "NARS Light Reflecting Foundation"] },
  { slug: "concealer", label: "concealer", plural: "concealers", vertical: "makeup", categoryPath: "/makeup/luxury-concealer", examples: ["NARS Radiant Creamy Concealer", "Dior Forever Skin Correct", "Tarte Shape Tape"] },
  { slug: "blush", label: "blush", plural: "blushes", vertical: "makeup", categoryPath: "/makeup/cream-blush", examples: ["Rare Beauty Soft Pinch Blush", "Dior Rosy Glow", "Charlotte Tilbury Beauty Light Wand"] },
  { slug: "bronzer", label: "bronzer", plural: "bronzers", vertical: "makeup", categoryPath: "/makeup", examples: ["Charlotte Tilbury Airbrush Bronzer", "NARS Laguna Bronzer", "Benefit Hoola Bronzer"] },
  { slug: "mascara", label: "mascara", plural: "mascaras", vertical: "makeup", categoryPath: "/makeup", examples: ["Lancome Lash Idole Mascara", "Benefit They're Real Mascara", "Dior Diorshow Mascara"] },
  { slug: "eyeliner", label: "eyeliner", plural: "eyeliners", vertical: "makeup", categoryPath: "/makeup", examples: ["Stila Stay All Day Liner", "Urban Decay 24/7 Eye Pencil", "Victoria Beckham Satin Kajal"] },
  { slug: "lipstick", label: "lipstick", plural: "lipsticks", vertical: "makeup", categoryPath: "/makeup", examples: ["Charlotte Tilbury Pillow Talk", "Dior Rouge Dior", "MAC Matte Lipstick"] },
  { slug: "lip-gloss", label: "lip gloss", plural: "lip glosses", vertical: "makeup", categoryPath: "/lip-care/lip-oils", examples: ["Fenty Gloss Bomb", "Dior Lip Maximizer", "Tower 28 ShineOn Lip Jelly"] },
  { slug: "primer", label: "primer", plural: "primers", vertical: "makeup", categoryPath: "/makeup", examples: ["Milk Hydro Grip Primer", "Tatcha Silk Canvas", "Hourglass Veil Primer"] },
  { slug: "setting-powder", label: "setting powder", plural: "setting powders", vertical: "makeup", categoryPath: "/makeup/setting-powder", examples: ["Laura Mercier Translucent Powder", "Hourglass Veil Powder", "Charlotte Tilbury Airbrush Powder"] },
  { slug: "setting-spray", label: "setting spray", plural: "setting sprays", vertical: "makeup", categoryPath: "/makeup", examples: ["Urban Decay All Nighter", "Charlotte Tilbury Setting Spray", "Milk Hydro Grip Set Spray"] },
  { slug: "skin-tint", label: "skin tint", plural: "skin tints", vertical: "makeup", categoryPath: "/makeup/luxury-foundation", examples: ["ILIA Super Serum Skin Tint", "Summer Fridays Skin Tint", "Fenty Eaze Drop"] },
  { slug: "brow-gel", label: "brow gel", plural: "brow gels", vertical: "makeup", categoryPath: "/makeup", examples: ["Anastasia Brow Gel", "Benefit Gimme Brow", "Kosas Air Brow"] },
  { slug: "highlighter", label: "highlighter", plural: "highlighters", vertical: "makeup", categoryPath: "/makeup", examples: ["Dior Backstage Glow Palette", "Rare Beauty Positive Light", "Charlotte Tilbury Hollywood Flawless Filter"] },
  { slug: "lip-balm", label: "lip balm", plural: "lip balms", vertical: "lip care", categoryPath: "/lip-care/tinted-lip-balms", examples: ["Laneige Lip Glowy Balm", "Summer Fridays Lip Butter Balm", "Dior Lip Glow"] },
  { slug: "lip-mask", label: "lip mask", plural: "lip masks", vertical: "lip care", categoryPath: "/lip-care/lip-masks", examples: ["Laneige Lip Sleeping Mask", "Tatcha Kissu Lip Mask", "Fresh Sugar Recovery Lip Mask"] },
  { slug: "lip-oil", label: "lip oil", plural: "lip oils", vertical: "lip care", categoryPath: "/lip-care/lip-oils", examples: ["Dior Lip Glow Oil", "Clarins Lip Comfort Oil", "Gisou Honey Infused Lip Oil"] },
  { slug: "lip-plumper", label: "lip plumper", plural: "lip plumpers", vertical: "lip care", categoryPath: "/lip-care/lip-plumpers", examples: ["Dior Lip Maximizer", "Too Faced Lip Injection", "Lawless Forget The Filler"] },
  { slug: "shampoo", label: "shampoo", plural: "shampoos", vertical: "hair care", categoryPath: "/hair-care/luxury-shampoo-conditioner", examples: ["Oribe Gold Lust Shampoo", "K18 Peptide Prep Shampoo", "Kerastase Bain Shampoo"] },
  { slug: "conditioner", label: "conditioner", plural: "conditioners", vertical: "hair care", categoryPath: "/hair-care/luxury-shampoo-conditioner", examples: ["Oribe Gold Lust Conditioner", "Kerastase Fondant Conditioner", "Briogeo Superfoods Conditioner"] },
  { slug: "hair-mask", label: "hair mask", plural: "hair masks", vertical: "hair care", categoryPath: "/hair-care/hair-masks", examples: ["K18 Leave-In Molecular Repair Mask", "Olaplex No. 8 Mask", "Briogeo Don't Despair Repair Mask"] },
  { slug: "leave-in-conditioner", label: "leave-in conditioner", plural: "leave-in conditioners", vertical: "hair care", categoryPath: "/hair-care", examples: ["Ouai Leave In Conditioner", "Briogeo Farewell Frizz", "Pureology Color Fanatic"] },
  { slug: "heat-protectant", label: "heat protectant", plural: "heat protectants", vertical: "hair care", categoryPath: "/hair-care", examples: ["GHD Bodyguard Spray", "Oribe Royal Blowout", "Color Wow Dream Coat"] },
  { slug: "perfume", label: "perfume", plural: "perfumes", vertical: "fragrance", categoryPath: "/fragrance/signature-scent-guide", examples: ["CHANEL Coco Mademoiselle", "Dior J'adore", "Maison Francis Kurkdjian Baccarat Rouge 540"] },
  { slug: "fragrance-discovery-set", label: "fragrance discovery set", plural: "fragrance discovery sets", vertical: "fragrance", categoryPath: "/fragrance/fragrance-discovery-sets", examples: ["Sephora Favorites Fragrance Set", "Maison Margiela Replica Discovery Set", "Jo Malone Discovery Collection"] },
  { slug: "body-lotion", label: "body lotion", plural: "body lotions", vertical: "body care", categoryPath: "/body-care/body-moisturizers", examples: ["Sol de Janeiro Bum Bum Cream", "Necessaire Body Lotion", "Kiehl's Creme de Corps"] },
  { slug: "body-scrub", label: "body scrub", plural: "body scrubs", vertical: "body care", categoryPath: "/body-care/body-exfoliants", examples: ["Ouai Scalp and Body Scrub", "Fresh Brown Sugar Body Polish", "Sol de Janeiro Body Scrub"] },
  { slug: "hand-cream", label: "hand cream", plural: "hand creams", vertical: "body care", categoryPath: "/body-care/luxury-hand-care", examples: ["Chanel La Creme Main", "L'Occitane Shea Hand Cream", "Aesop Resurrection Hand Balm"] },
  { slug: "nail-polish", label: "nail polish", plural: "nail polishes", vertical: "nail care", categoryPath: "/nail-care/luxury-nail-polish", examples: ["Chanel Le Vernis", "Dior Vernis", "Hermes Nail Enamel"] },
  { slug: "cuticle-oil", label: "cuticle oil", plural: "cuticle oils", vertical: "nail care", categoryPath: "/nail-care/cuticle-care", examples: ["Dior Huile Abricot", "Olive and June Cuticle Serum", "CND SolarOil"] },
  { slug: "makeup-brushes", label: "makeup brushes", plural: "makeup brushes", vertical: "beauty tools", categoryPath: "/beauty-tools/makeup-brushes", examples: ["Sonia G Brush Set", "Hourglass Makeup Brushes", "Sephora Collection Brush Set"] },
  { slug: "facial-tool", label: "facial tool", plural: "facial tools", vertical: "beauty tools", categoryPath: "/beauty-tools/facial-tools", examples: ["NuFACE Mini", "Mount Lai Gua Sha", "Therabody TheraFace"] },
  { slug: "hair-styling-tool", label: "hair styling tool", plural: "hair styling tools", vertical: "beauty tools", categoryPath: "/beauty-tools/hair-styling-tools", examples: ["Dyson Airwrap", "Shark FlexStyle", "T3 AireBrush"] },
  { slug: "artificial-earrings", label: "artificial earrings", plural: "artificial earrings", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-earrings", examples: ["Gold-Tone Hoop Earrings", "Pearl Drop Fashion Earrings", "Crystal Stud Earring Set"] },
  { slug: "artificial-necklace", label: "artificial necklace", plural: "artificial necklaces", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-necklaces", examples: ["Gold-Tone Layered Necklace", "Pearl Pendant Necklace", "Crystal Tennis Necklace"] },
  { slug: "artificial-bracelet", label: "artificial bracelet", plural: "artificial bracelets", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-bracelets", examples: ["Gold-Tone Bangle Set", "Crystal Tennis Bracelet", "Pearl Stretch Bracelet"] },
  { slug: "artificial-ring", label: "artificial ring", plural: "artificial rings", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Gold-Tone Stack Ring Set", "Cubic Zirconia Cocktail Ring", "Pearl Fashion Ring"] },
  { slug: "artificial-jewelry-set", label: "artificial jewelry set", plural: "artificial jewelry sets", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/jewelry-gift-sets", examples: ["Pearl Necklace and Earring Set", "Crystal Jewelry Gift Set", "Gold-Tone Occasion Jewelry Set"] },
  { slug: "bridal-fashion-jewelry", label: "bridal fashion jewelry", plural: "bridal fashion jewelry", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/jewelry-gift-sets", examples: ["Crystal Bridal Earring Set", "Pearl Bridal Jewelry Set", "Rhinestone Hair and Jewelry Set"] },
  { slug: "beauty-gift-set", label: "beauty gift set", plural: "beauty gift sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Sephora Favorites Set", "Dior Beauty Gift Set", "Charlotte Tilbury Gift Set"] },
  { slug: "makeup-remover", label: "makeup remover", plural: "makeup removers", vertical: "skin care", categoryPath: "/skin-care", examples: ["Bioderma Sensibio Micellar Water", "Clinique Take The Day Off", "Lancome Bi-Facil"] },
  { slug: "body-wash", label: "body wash", plural: "body washes", vertical: "body care", categoryPath: "/body-care", examples: ["Aesop Body Cleanser", "Necessaire Body Wash", "Sol de Janeiro Shower Cream-Gel"] },
  { slug: "scalp-serum", label: "scalp serum", plural: "scalp serums", vertical: "hair care", categoryPath: "/hair-care/scalp-care", examples: ["The Ordinary Natural Moisturizing Factors Scalp Serum", "Act+Acre Scalp Serum", "Briogeo Scalp Revival"] },
  { slug: "lip-liner", label: "lip liner", plural: "lip liners", vertical: "makeup", categoryPath: "/lip-care", examples: ["Charlotte Tilbury Lip Cheat", "Make Up For Ever Artist Color Pencil", "MAC Lip Pencil"] },
];

const bestPageIntents = [
  { slug: "", label: "", title: "", summary: "overall comparison path", angle: "compare the most searched options, seller confidence, and routine fit before clicking out" },
  { slug: "luxury", label: "luxury", title: "Luxury", summary: "premium buyer path", angle: "focus on packaging, brand trust, texture, and giftable presentation" },
  { slug: "for-beginners", label: "for beginners", title: "for Beginners", summary: "first-purchase path", angle: "prioritize easy-to-understand formats, flexible sellers, and low-friction routines" },
  { slug: "for-everyday-use", label: "for everyday use", title: "for Everyday Use", summary: "daily routine path", angle: "look for repeatable use, comfortable textures, and practical seller availability" },
  { slug: "for-travel", label: "for travel", title: "for Travel", summary: "travel-ready path", angle: "compare size, packaging, spill risk, and whether the format is easy to repack" },
  { slug: "for-gifting", label: "for gifting", title: "for Gifting", summary: "gift shopping path", angle: "prioritize presentation, shade flexibility, discovery formats, and return-friendly sellers" },
  { slug: "for-sensitive-shoppers", label: "for sensitive shoppers", title: "for Sensitive Shoppers", summary: "sensitivity-aware path", angle: "review fragrance, sensation, use directions, and visible brand positioning before choosing" },
  { slug: "for-dry-feeling-routines", label: "for dry-feeling routines", title: "for Dry-Feeling Routines", summary: "comfort-focused path", angle: "compare texture, finish, layering, and comfort language without assuming promised outcomes" },
  { slug: "for-polished-routines", label: "for polished routines", title: "for Polished Routines", summary: "elevated routine path", angle: "match the product to a refined routine step, finish preference, and trusted seller path" },
  { slug: "for-minimalist-routines", label: "for minimalist routines", title: "for Minimalist Routines", summary: "simplified routine path", angle: "choose versatile formats that reduce decision fatigue and support simple beauty routines" },
  { slug: "for-mature-routines", label: "for mature routines", title: "for Mature Routines", summary: "mature beauty path", angle: "compare finish, comfort, visible claims, and ease of application without overpromising outcomes" },
  { slug: "for-glow", label: "for glow", title: "for Glow", summary: "radiance-oriented path", angle: "focus on visible radiance positioning, finish, and compatibility with the rest of the routine" },
  { slug: "for-natural-finish", label: "for natural finish", title: "for Natural Finish", summary: "soft-finish path", angle: "prioritize subtle finish, easy blending, and realistic before-click expectations" },
  { slug: "for-long-wear", label: "for long wear", title: "for Long Wear", summary: "wear-focused path", angle: "compare brand wear language, setting steps, and seller policies without guaranteeing longevity" },
  { slug: "under-25", label: "under $25", title: "Under $25", summary: "budget-conscious path", angle: "compare accessible seller routes while checking size, authenticity, and return policy" },
  { slug: "under-50", label: "under $50", title: "Under $50", summary: "mid-price path", angle: "balance prestige appeal, practical size, and seller confidence before clicking out" },
  { slug: "worth-the-splurge", label: "worth the splurge", title: "Worth the Splurge", summary: "splurge path", angle: "weigh packaging, brand trust, format, and routine importance against the higher price point" },
  { slug: "at-amazon", label: "at Amazon", title: "at Amazon", summary: "Amazon seller path", angle: "check seller identity, return clarity, delivery speed, and official brand-store signals" },
  { slug: "at-sephora", label: "at Sephora", title: "at Sephora", summary: "specialty beauty seller path", angle: "compare shade tools, samples, rewards, and beauty-specific return support" },
  { slug: "at-ulta", label: "at Ulta", title: "at Ulta", summary: "broad beauty seller path", angle: "compare prestige and accessible price tiers, rewards, and routine replenishment options" },
];

function titleCase(value) {
  return value.replace(/\b\w/g, (character) => character.toUpperCase());
}

function createSlug(category, intent) {
  if (intent.slug === "luxury") {
    return ["best", "luxury", category.slug].join("-");
  }

  return ["best", category.slug, intent.slug].filter(Boolean).join("-");
}

function createTitle(category, intent) {
  const categoryTitle = titleCase(category.label);

  if (!intent.title) {
    return `Best ${categoryTitle}`;
  }

  if (intent.title === "Luxury") {
    return `Best Luxury ${categoryTitle}`;
  }

  return `Best ${categoryTitle} ${intent.title}`;
}

export function buildProgrammaticBestPages() {
  return bestPageCategories.flatMap((category) =>
    bestPageIntents.map((intent) => {
      const slug = createSlug(category, intent);
      const title = createTitle(category, intent);
      const intentPhrase = intent.label ? `${category.plural} ${intent.label}` : category.plural;

      return {
        slug,
        title,
        categorySlug: category.slug,
        categoryLabel: category.label,
        categoryPlural: category.plural,
        categoryPath: category.categoryPath,
        vertical: category.vertical,
        intentLabel: intent.label || "overall",
        seoKeyword: `best ${intentPhrase}`,
        summary: `A high-intent LipFlower route for shoppers comparing ${intentPhrase} across trusted beauty sellers.`,
        intro: `This page is designed for shoppers searching for ${intentPhrase}. It keeps the decision focused on product format, seller trust, routine fit, and claim-safe comparison signals instead of unsupported before-and-after promises.`,
        methodology: `LipFlower prioritizes visible product positioning, seller confidence, routine compatibility, product directions, disclosure clarity, and practical buying friction. We keep the language claim-safe and do not invent testing results, medical outcomes, or guaranteed beauty claims.`,
        buyingAngle: intent.angle,
        examples: category.examples,
        relatedLinks: [
          category.categoryPath,
          "/beauty",
          "/sellers",
          "/beauty-university",
        ],
        faq: [
          {
            question: `How should I compare ${intentPhrase}?`,
            answer: `Start with routine fit, texture or format, visible brand claims, seller trust, and return flexibility. Avoid assuming that popularity or price guarantees the right result for every shopper.`,
          },
          {
            question: `Will these ${category.plural} work the same way for everyone?`,
            answer: `No. Beauty products can feel different by routine, preference, sensitivity history, and application style. Follow product directions and use conservative expectations.`,
          },
        ],
      };
    }),
  );
}

export const programmaticBestPages = buildProgrammaticBestPages().map(decorateProgrammaticBestPage);

export function getProgrammaticBestPage(slug = "") {
  return programmaticBestPages.find((page) => page.slug === slug) || null;
}
