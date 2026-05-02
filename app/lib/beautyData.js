export const beautySiteName = "LipFlower";
export const beautySiteUrl = "https://lipflower.com";

export const beautyHubPages = {
  home: {
    title: "Luxury beauty, skin care, makeup, and lip care worth comparing",
    description:
      "LipFlower is a premium beauty affiliate marketplace for affluent shoppers comparing luxury skin care, makeup, fragrance, hair care, and lip care across trusted retailers.",
    eyebrow: "Luxury beauty marketplace",
    intro:
      "Use brand, product-category, and routine-led buying paths to compare high-end beauty before continuing to Amazon, department stores, specialty beauty retailers, or official brand boutiques.",
    actions: [
      { href: "/beauty", label: "Explore Beauty", variant: "primary" },
      { href: "/skin-care", label: "Shop Skin Care", variant: "secondary" },
    ],
    sections: [
      {
        title: "Start with luxury beauty categories",
        links: [
          {
            href: "/skin-care",
            label: "Skin care",
            description: "Compare serums, moisturizers, eye creams, cleansers, SPF, and treatment-led luxury routines.",
          },
          {
            href: "/makeup",
            label: "Makeup",
            description: "Browse complexion, eye, cheek, and finishing products from prestige and designer beauty brands.",
          },
          {
            href: "/lip-care",
            label: "Lip care",
            description: "Find premium balms, masks, plumpers, oils, liners, gloss, and lipstick-led buying paths.",
          },
          {
            href: "/fragrance",
            label: "Fragrance",
            description: "Compare signature scents, discovery sets, gifting options, and luxury fragrance houses.",
          },
          {
            href: "/hair-care",
            label: "Hair care",
            description: "Compare shampoos, conditioners, masks, stylers, scalp care, and salon-grade routines.",
          },
          {
            href: "/body-care",
            label: "Body care",
            description: "Browse elevated body moisturizers, exfoliants, SPF, fragrance layering, and hand care.",
          },
          {
            href: "/nail-care",
            label: "Nail care",
            description: "Research polish, treatments, tools, cuticle care, and salon-inspired at-home systems.",
          },
          {
            href: "/beauty-tools",
            label: "Beauty tools",
            description: "Compare brushes, facial tools, hair tools, storage, and routine-support accessories.",
          },
        ],
      },
      {
        title: "Shop by intent",
        links: [
          {
            href: "/luxury-beauty",
            label: "Luxury beauty edit",
            description: "A curated route for prestige shoppers who want top-tier brands and giftable products.",
          },
          {
            href: "/compare",
            label: "Beauty comparisons",
            description: "Use head-to-head pages before choosing between brands, routines, textures, and sellers.",
          },
          {
            href: "/brands",
            label: "Brand directory",
            description: "Move from designer and prestige brand research into category-specific shopping paths.",
          },
          {
            href: "/sellers",
            label: "Seller directory",
            description: "Understand when Amazon, Sephora, Nordstrom, Ulta, or brand boutiques are the right next click.",
          },
        ],
      },
      {
        title: "Programmatic SEO collections",
        links: [
          {
            href: "/skin-care/anti-aging-serums",
            label: "Anti-aging serums",
            description: "Compare prestige serum routes by concern, texture, ingredients, and retailer availability.",
          },
          {
            href: "/skin-care/barrier-repair-moisturizers",
            label: "Barrier-support moisturizers",
            description: "Compare premium creams and moisturizers by comfort, finish, and routine role.",
          },
          {
            href: "/skin-care/vitamin-c-serums",
            label: "Vitamin C serums",
            description: "Evaluate radiance-focused serum routes with careful ingredient-claim context.",
          },
          {
            href: "/makeup/luxury-foundation",
            label: "Luxury foundation",
            description: "Narrow complexion products by finish, coverage, undertone, and high-end brand positioning.",
          },
          {
            href: "/makeup/cream-blush",
            label: "Cream blush",
            description: "Compare prestige cream blush by finish, pigment, shade family, and seller confidence.",
          },
          {
            href: "/lip-care/lip-masks",
            label: "Lip masks",
            description: "Compare overnight lip treatments, balm masks, and glossy treatment formats.",
          },
          {
            href: "/lip-care/lip-oils",
            label: "Lip oils",
            description: "Compare shine, tint, applicator, fragrance, and premium lip-comfort positioning.",
          },
          {
            href: "/beauty-university",
            label: "Beauty University",
            description: "Read buyer-first guides that support premium beauty decisions before affiliate clicks.",
          },
        ],
      },
    ],
  },
};

export const beautyLandingPages = [
  {
    categoryPath: "skin-care",
    slug: "anti-aging-serums",
    title: "Luxury Anti-Aging Serums",
    summary: "Compare prestige serums for firming, radiance, fine lines, and elevated daily routines.",
    intro:
      "Luxury serum shoppers should compare concern fit, texture, ingredient story, and seller confidence before chasing one viral bottle.",
    bestFor: ["Fine-line routines", "Radiance-focused skin care", "Premium gifting"],
    watchFor: ["Ingredient sensitivity", "Authenticity and seller trust"],
    relatedLinks: ["/skin-care", "/compare/luxury-serum-vs-moisturizer", "/brands"],
  },
  {
    categoryPath: "skin-care",
    slug: "barrier-repair-moisturizers",
    title: "Barrier-Support Luxury Moisturizers",
    summary: "Compare premium moisturizers for comfort, texture, dry-feeling skin, and routine anchoring.",
    intro:
      "Barrier-support moisturizer pages should explain texture, finish, fragrance, skin-feel, and seller confidence without promising medical repair or guaranteed results.",
    bestFor: ["Dry-feeling skin routines", "Comfort-first skin care", "Night cream shoppers"],
    watchFor: ["Fragrance sensitivity", "Rich textures under makeup"],
    relatedLinks: ["/skin-care", "/compare/luxury-serum-vs-moisturizer", "/beauty-university/skin-barrier-basics"],
  },
  {
    categoryPath: "skin-care",
    slug: "vitamin-c-serums",
    title: "Luxury Vitamin C Serums",
    summary: "Compare prestige vitamin C serum routes by texture, packaging, routine role, and seller trust.",
    intro:
      "Vitamin C shoppers should compare packaging, skin-feel, routine timing, and brand claims carefully because visible product details matter more than hype.",
    bestFor: ["Radiance-focused routines", "Morning skin care", "Prestige serum shoppers"],
    watchFor: ["Sensitivity history", "Packaging and freshness expectations"],
    relatedLinks: ["/skin-care/anti-aging-serums", "/beauty-university/ingredient-claims-guide", "/sellers"],
  },
  {
    categoryPath: "skin-care",
    slug: "sunscreen-for-makeup-prep",
    title: "Luxury Sunscreen for Makeup Prep",
    summary: "Compare elevated SPF routes by finish, layering feel, tint, and makeup compatibility.",
    intro:
      "SPF pages should stay claim-safe: help shoppers compare visible SPF positioning, finish, texture, and layering behavior while reminding them to follow product directions.",
    bestFor: ["Daily routines", "Makeup layering", "Polished skin prep"],
    watchFor: ["White cast", "Pilling under complexion products"],
    relatedLinks: ["/skin-care", "/makeup/luxury-foundation", "/beauty-university/makeup-prep-routine"],
  },
  {
    categoryPath: "makeup",
    slug: "luxury-foundation",
    title: "Luxury Foundation",
    summary: "Compare prestige foundation by finish, coverage, shade range, and seller path.",
    intro:
      "High-end foundation is a fit decision as much as a brand decision, so this route keeps finish, coverage, undertone, and return-friendly sellers in view.",
    bestFor: ["Designer complexion products", "Polished everyday makeup", "Event-ready coverage"],
    watchFor: ["Shade matching", "Return policy and seller reliability"],
    relatedLinks: ["/makeup", "/compare/luxury-foundation-vs-skin-tint", "/beauty-university/shade-matching-guide"],
  },
  {
    categoryPath: "makeup",
    slug: "cream-blush",
    title: "Luxury Cream Blush",
    summary: "Compare prestige cream blush by finish, pigment, skin prep, packaging, and seller path.",
    intro:
      "Cream blush is a texture and color-payoff decision, so shoppers should compare blendability, finish, shade family, and return-friendly sellers before choosing.",
    bestFor: ["Fresh complexion makeup", "Natural-looking color", "Compact luxury gifts"],
    watchFor: ["Pigment intensity", "Layering over powder"],
    relatedLinks: ["/makeup", "/compare/cream-blush-vs-powder-blush", "/beauty-university/shade-matching-guide"],
  },
  {
    categoryPath: "makeup",
    slug: "luxury-concealer",
    title: "Luxury Concealer",
    summary: "Compare high-end concealer by coverage, finish, undertone, wear, and seller confidence.",
    intro:
      "Concealer shoppers need more than a shade name. Coverage level, finish, undertone, use case, and return path all shape the best buying route.",
    bestFor: ["Complexion refinement", "Under-eye makeup", "Spot coverage"],
    watchFor: ["Creasing concerns", "Shade matching"],
    relatedLinks: ["/makeup/luxury-foundation", "/compare/luxury-foundation-vs-skin-tint", "/beauty-university/shade-matching-guide"],
  },
  {
    categoryPath: "makeup",
    slug: "setting-powder",
    title: "Luxury Setting Powder",
    summary: "Compare prestige setting powders by finish, blur effect, skin tone support, and makeup style.",
    intro:
      "Setting powder pages should help shoppers understand finish and use case without implying universal pore, oil, or longevity results.",
    bestFor: ["Polished makeup finish", "Event makeup", "Touch-up routines"],
    watchFor: ["Flashback risk", "Dry-looking texture"],
    relatedLinks: ["/makeup", "/compare/luxury-foundation-vs-skin-tint", "/beauty-university/makeup-prep-routine"],
  },
  {
    categoryPath: "lip-care",
    slug: "lip-masks",
    title: "Luxury Lip Masks",
    summary: "Compare overnight masks, balm treatments, and high-gloss lip repair products.",
    intro:
      "Premium lip masks work best when the shopper understands texture, finish, fragrance, and whether the product is a treatment, gloss, or overnight ritual.",
    bestFor: ["Dry lips", "Night routines", "Giftable lip care"],
    watchFor: ["Fragrance preferences", "Jar versus tube formats"],
    relatedLinks: ["/lip-care", "/compare/lip-mask-vs-lip-balm", "/brands"],
  },
  {
    categoryPath: "lip-care",
    slug: "lip-oils",
    title: "Luxury Lip Oils",
    summary: "Compare premium lip oils by shine, tint, texture, applicator, and seller path.",
    intro:
      "Lip oil shoppers often want treatment feel and gloss-like shine in one product, so this route keeps texture, tint, and fragrance preferences visible.",
    bestFor: ["Glossy lip routines", "Tinted comfort", "Giftable lip products"],
    watchFor: ["Stickiness tolerance", "Fragrance and flavor"],
    relatedLinks: ["/lip-care", "/compare/lip-oil-vs-lip-gloss", "/beauty-university/luxury-lip-care-routine"],
  },
  {
    categoryPath: "lip-care",
    slug: "tinted-lip-balms",
    title: "Luxury Tinted Lip Balms",
    summary: "Compare premium tinted balms by color payoff, comfort, finish, and daily-carry appeal.",
    intro:
      "Tinted balms sit between treatment and makeup, so shoppers should compare shade family, finish, reapplication style, and comfort expectations.",
    bestFor: ["Low-effort color", "Daily carry", "Makeup-minimal routines"],
    watchFor: ["Shade payoff", "Transfer and reapplication"],
    relatedLinks: ["/lip-care", "/makeup", "/compare/lip-mask-vs-lip-balm"],
  },
  {
    categoryPath: "lip-care",
    slug: "lip-plumpers",
    title: "Luxury Lip Plumpers",
    summary: "Compare premium lip plumpers by finish, sensation level, shine, and claim-safe expectations.",
    intro:
      "Lip plumper pages need extra care: describe visible positioning, finish, and common sensation language without promising lasting volume or medical-style results.",
    bestFor: ["Glossy statement lips", "Makeup-focused routines", "Short-term visual effect shoppers"],
    watchFor: ["Tingling sensitivity", "Irritation-prone lips"],
    relatedLinks: ["/lip-care", "/beauty-university/ingredients-to-watch-in-lip-plumpers", "/compare/lip-oil-vs-lip-gloss"],
  },
  {
    categoryPath: "hair-care",
    slug: "luxury-shampoo-conditioner",
    title: "Luxury Shampoo and Conditioner",
    summary: "Compare premium shampoo and conditioner routes by hair type, fragrance, finish, and seller trust.",
    intro:
      "Luxury shampoo and conditioner shoppers should compare hair-feel goals, fragrance, color-care positioning, and routine fit instead of assuming a higher price guarantees better results.",
    bestFor: ["Salon-inspired routines", "Giftable hair care", "Fragrance-led hair care"],
    watchFor: ["Color-treated hair needs", "Scalp sensitivity"],
    relatedLinks: ["/hair-care", "/hair-care/hair-masks", "/sellers/sephora"],
  },
  {
    categoryPath: "hair-care",
    slug: "hair-masks",
    title: "Luxury Hair Masks",
    summary: "Compare premium hair masks by texture, use frequency, hair-feel goals, and treatment intensity.",
    intro:
      "Hair mask pages should help shoppers compare rinse-out versus leave-in positioning, texture, fragrance, and use directions without promising repair that the product data does not support.",
    bestFor: ["Weekly routine upgrades", "Dry-feeling lengths", "Premium self-care rituals"],
    watchFor: ["Heavy residue", "Fine hair compatibility"],
    relatedLinks: ["/hair-care/luxury-shampoo-conditioner", "/hair-care/scalp-care", "/beauty-university"],
  },
  {
    categoryPath: "hair-care",
    slug: "scalp-care",
    title: "Luxury Scalp Care",
    summary: "Compare premium scalp-care products by format, routine step, fragrance, and comfort positioning.",
    intro:
      "Scalp-care shopping needs careful language: compare visible product positioning, application style, and comfort-focused claims while avoiding medical treatment promises.",
    bestFor: ["Routine refreshes", "Scalp-focused shoppers", "Pre-wash rituals"],
    watchFor: ["Sensitivity history", "Ingredient intensity"],
    relatedLinks: ["/hair-care", "/beauty-university/ingredient-claims-guide", "/sellers"],
  },
  {
    categoryPath: "fragrance",
    slug: "fragrance-discovery-sets",
    title: "Luxury Fragrance Discovery Sets",
    summary: "Compare discovery sets by scent family, sample count, redemption value, and gifting flexibility.",
    intro:
      "Discovery sets reduce blind-buy risk by letting shoppers compare scent families, wear preference, and presentation before choosing a full bottle.",
    bestFor: ["Gift research", "Scent exploration", "Lower-risk luxury buying"],
    watchFor: ["Voucher restrictions", "Sample size expectations"],
    relatedLinks: ["/fragrance", "/fragrance/luxury-perfume-gifts", "/beauty-university/fragrance-gifting-guide"],
  },
  {
    categoryPath: "fragrance",
    slug: "luxury-perfume-gifts",
    title: "Luxury Perfume Gifts",
    summary: "Compare premium fragrance gifts by bottle size, scent family, packaging, and return-friendly sellers.",
    intro:
      "Perfume gifting works best when the route considers presentation, scent familiarity, discovery alternatives, and seller flexibility rather than pushing one universal fragrance.",
    bestFor: ["Holiday gifts", "Designer fragrance shoppers", "Luxury presentation"],
    watchFor: ["Personal scent preference", "Final-sale policies"],
    relatedLinks: ["/fragrance/fragrance-discovery-sets", "/brands/chanel", "/sellers/nordstrom"],
  },
  {
    categoryPath: "fragrance",
    slug: "signature-scent-guide",
    title: "Signature Scent Guide",
    summary: "Compare luxury fragrance routes by scent family, occasion, bottle size, and buyer confidence.",
    intro:
      "A signature scent is personal, so LipFlower frames fragrance discovery around scent family, wear occasion, seller trust, and sampling options before a full-size purchase.",
    bestFor: ["Everyday fragrance", "Personal luxury routines", "Brand discovery"],
    watchFor: ["Blind-buy risk", "Season and occasion fit"],
    relatedLinks: ["/fragrance", "/fragrance/fragrance-discovery-sets", "/beauty-university/fragrance-gifting-guide"],
  },
  {
    categoryPath: "body-care",
    slug: "body-moisturizers",
    title: "Luxury Body Moisturizers",
    summary: "Compare premium body creams and lotions by texture, fragrance, finish, and routine role.",
    intro:
      "Luxury body moisturizers should be compared by skin feel, scent profile, absorption, packaging, and seller path without promising guaranteed skin changes.",
    bestFor: ["Elevated daily routines", "Fragrance layering", "Giftable body care"],
    watchFor: ["Fragrance sensitivity", "Rich texture preferences"],
    relatedLinks: ["/body-care", "/fragrance", "/sellers/nordstrom"],
  },
  {
    categoryPath: "body-care",
    slug: "body-exfoliants",
    title: "Luxury Body Exfoliants",
    summary: "Compare premium body scrubs and exfoliating treatments by format, texture, fragrance, and use guidance.",
    intro:
      "Body exfoliant pages need claim-safe guidance around texture, use frequency, and product directions, especially for shoppers with sensitivity history.",
    bestFor: ["Polished body routines", "Pre-event prep", "Spa-style self care"],
    watchFor: ["Overuse risk", "Sensitive-feeling skin"],
    relatedLinks: ["/body-care/body-moisturizers", "/beauty-university/ingredient-claims-guide", "/body-care"],
  },
  {
    categoryPath: "body-care",
    slug: "luxury-hand-care",
    title: "Luxury Hand Care",
    summary: "Compare premium hand creams, cuticle-adjacent routines, fragrance, and giftable hand-care sets.",
    intro:
      "Hand-care shopping blends body care and gifting, so this route keeps texture, scent, portability, packaging, and seller confidence in view.",
    bestFor: ["Daily carry", "Desk-side routines", "Small luxury gifts"],
    watchFor: ["Greasy finish", "Strong fragrance"],
    relatedLinks: ["/body-care", "/nail-care/cuticle-care", "/luxury-beauty"],
  },
  {
    categoryPath: "nail-care",
    slug: "luxury-nail-polish",
    title: "Luxury Nail Polish",
    summary: "Compare premium nail polish by finish, shade family, wear expectations, and seller confidence.",
    intro:
      "Luxury nail polish shoppers should compare finish, brush style, shade family, and removal expectations without treating wear claims as guaranteed.",
    bestFor: ["At-home manicures", "Seasonal color", "Small luxury gifts"],
    watchFor: ["Shade accuracy", "Wear varies by routine"],
    relatedLinks: ["/nail-care", "/nail-care/manicure-tools", "/sellers"],
  },
  {
    categoryPath: "nail-care",
    slug: "cuticle-care",
    title: "Luxury Cuticle Care",
    summary: "Compare premium cuticle oils, creams, and hand-care pairings by texture, scent, and routine fit.",
    intro:
      "Cuticle-care pages should focus on product format, comfort, and routine fit while avoiding repair or medical-style claims.",
    bestFor: ["Manicure prep", "Hand-care routines", "Portable beauty care"],
    watchFor: ["Oil texture", "Fragrance sensitivity"],
    relatedLinks: ["/nail-care", "/body-care/luxury-hand-care", "/beauty-university"],
  },
  {
    categoryPath: "nail-care",
    slug: "manicure-tools",
    title: "Luxury Manicure Tools",
    summary: "Compare premium manicure tools by material, ergonomics, care needs, and at-home routine support.",
    intro:
      "Manicure tools are a quality and handling decision, so shoppers should compare materials, tool care, storage, and seller reliability before clicking out.",
    bestFor: ["At-home manicure systems", "Tool upgrades", "Beauty gifts"],
    watchFor: ["Care instructions", "Counterfeit risk"],
    relatedLinks: ["/nail-care/luxury-nail-polish", "/beauty-tools", "/sellers/amazon"],
  },
  {
    categoryPath: "beauty-tools",
    slug: "makeup-brushes",
    title: "Luxury Makeup Brushes",
    summary: "Compare premium makeup brushes by shape, material, use case, storage, and seller confidence.",
    intro:
      "Brush shopping works best when shoppers compare application role, bristle material, handle feel, cleaning needs, and whether the set duplicates tools they already own.",
    bestFor: ["Complexion routines", "Color makeup", "Giftable tool sets"],
    watchFor: ["Brush redundancy", "Cleaning requirements"],
    relatedLinks: ["/beauty-tools", "/makeup/luxury-foundation", "/makeup/cream-blush"],
  },
  {
    categoryPath: "beauty-tools",
    slug: "facial-tools",
    title: "Luxury Facial Tools",
    summary: "Compare premium facial tools by routine role, material, care instructions, and claim-safe positioning.",
    intro:
      "Facial-tool pages need extra restraint: compare visible product features, routine feel, and care instructions without implying clinical outcomes.",
    bestFor: ["Self-care routines", "Skin-care pairing", "Luxury gifting"],
    watchFor: ["Unsupported claims", "Cleaning and storage needs"],
    relatedLinks: ["/beauty-tools", "/skin-care", "/beauty-university/ingredient-claims-guide"],
  },
  {
    categoryPath: "beauty-tools",
    slug: "hair-styling-tools",
    title: "Luxury Hair Styling Tools",
    summary: "Compare premium hair tools by styling goal, heat settings, attachment set, and seller confidence.",
    intro:
      "Hair styling tools should be compared by hair type, heat options, attachments, warranty context, and seller trust rather than trend-led claims alone.",
    bestFor: ["Salon-style routines", "Giftable devices", "Premium hair styling"],
    watchFor: ["Heat damage risk", "Voltage and warranty details"],
    relatedLinks: ["/beauty-tools", "/hair-care", "/hair-care/luxury-shampoo-conditioner"],
  },
];

export const beautyComparePages = [
  {
    slug: "luxury-serum-vs-moisturizer",
    title: "Luxury Serum vs Moisturizer",
    summary: "Decide whether the routine needs a targeted treatment, a barrier cream, or both.",
    verdict:
      "Serums usually win for targeted concerns and elegant active stories, while moisturizers anchor comfort, barrier support, and daily consistency.",
    columns: ["Luxury serum", "Luxury moisturizer"],
    rows: [
      { label: "Best role", values: ["Targeted treatment", "Barrier and comfort"] },
      { label: "Texture", values: ["Lightweight layers", "Cream, gel, or rich finish"] },
      { label: "Buyer mindset", values: ["Concern-led upgrade", "Routine anchor"] },
      { label: "Shopping note", values: ["Check actives and sensitivity", "Check skin type and finish"] },
    ],
    relatedLinks: ["/skin-care/anti-aging-serums", "/skin-care", "/brands"],
  },
  {
    slug: "luxury-foundation-vs-skin-tint",
    title: "Luxury Foundation vs Skin Tint",
    summary: "Compare polished coverage against lighter, skin-forward complexion products.",
    verdict:
      "Foundation is stronger for coverage and event polish, while skin tint is better for sheer, everyday luxury makeup.",
    columns: ["Luxury foundation", "Skin tint"],
    rows: [
      { label: "Coverage", values: ["Medium to full", "Sheer to light"] },
      { label: "Finish", values: ["More perfected", "More natural"] },
      { label: "Best for", values: ["Events and polish", "Daily effortless makeup"] },
      { label: "Shopping note", values: ["Shade match matters most", "Undertone flexibility can be higher"] },
    ],
    relatedLinks: ["/makeup/luxury-foundation", "/makeup", "/beauty-university/shade-matching-guide"],
  },
  {
    slug: "lip-mask-vs-lip-balm",
    title: "Lip Mask vs Lip Balm",
    summary: "Choose between a richer treatment ritual and a portable daily lip-care staple.",
    verdict:
      "Lip masks win for nighttime repair and indulgent texture, while lip balms win for frequent daytime comfort and easy reapplication.",
    columns: ["Lip mask", "Lip balm"],
    rows: [
      { label: "Best role", values: ["Night treatment", "Daytime maintenance"] },
      { label: "Texture", values: ["Richer and glossier", "Portable and practical"] },
      { label: "Gift appeal", values: ["High", "Moderate to high"] },
      { label: "Shopping note", values: ["Check fragrance and format", "Check SPF or tint preferences"] },
    ],
    relatedLinks: ["/lip-care/lip-masks", "/lip-care", "/brands"],
  },
  {
    slug: "cream-blush-vs-powder-blush",
    title: "Cream Blush vs Powder Blush",
    summary: "Compare fresh, blendable color against classic powder structure and longevity expectations.",
    verdict:
      "Cream blush usually wins for fresh, skin-like color, while powder blush is stronger when shoppers want structure, layering over powder, and easier touch-ups.",
    columns: ["Cream blush", "Powder blush"],
    rows: [
      { label: "Finish", values: ["Fresh and skin-like", "Soft-focus or polished"] },
      { label: "Best for", values: ["Dewy routines", "Set makeup looks"] },
      { label: "Application", values: ["Fingers, sponge, or brush", "Brush-led"] },
      { label: "Shopping note", values: ["Check pigment intensity", "Check texture and shade payoff"] },
    ],
    relatedLinks: ["/makeup/cream-blush", "/makeup/setting-powder", "/makeup"],
  },
  {
    slug: "lip-oil-vs-lip-gloss",
    title: "Lip Oil vs Lip Gloss",
    summary: "Decide between a comfort-shine hybrid and a classic high-shine makeup finish.",
    verdict:
      "Lip oil is usually better for shoppers who want cushiony shine and comfort, while lip gloss is better for a more makeup-forward finish and stronger visual impact.",
    columns: ["Lip oil", "Lip gloss"],
    rows: [
      { label: "Primary role", values: ["Comfort-shine hybrid", "Makeup shine"] },
      { label: "Texture", values: ["Cushiony or slick", "Glossy and more structured"] },
      { label: "Best for", values: ["Daily shine", "Statement lip looks"] },
      { label: "Shopping note", values: ["Check tint and fragrance", "Check stickiness and pigment"] },
    ],
    relatedLinks: ["/lip-care/lip-oils", "/lip-care/tinted-lip-balms", "/lip-care"],
  },
  {
    slug: "vitamin-c-vs-niacinamide-serum",
    title: "Vitamin C vs Niacinamide Serum",
    summary: "Compare two popular ingredient-led serum routes without overstating outcomes.",
    verdict:
      "Vitamin C is usually positioned around radiance-focused routines, while niacinamide is commonly positioned around tone, texture, and balance. The better choice depends on visible product claims, tolerance, and routine fit.",
    columns: ["Vitamin C serum", "Niacinamide serum"],
    rows: [
      { label: "Common positioning", values: ["Radiance and antioxidant story", "Tone, texture, and balance story"] },
      { label: "Routine timing", values: ["Often morning", "Often flexible"] },
      { label: "Buyer concern", values: ["Dull-looking skin", "Uneven-looking texture"] },
      { label: "Shopping note", values: ["Check packaging and sensitivity", "Check concentration and formula context"] },
    ],
    relatedLinks: ["/skin-care/vitamin-c-serums", "/beauty-university/ingredient-claims-guide", "/skin-care"],
  },
];

export const beautyCalculators = [
  {
    slug: "routine-finder",
    title: "Luxury Beauty Routine Finder",
    summary: "Map skin concern, makeup style, budget, and brand preference into better shopping paths.",
  },
  {
    slug: "gift-finder",
    title: "Beauty Gift Finder",
    summary: "Narrow luxury beauty gifts by recipient, price tier, category, and seller confidence.",
  },
];

export const beautyBrands = [
  {
    slug: "dior",
    name: "Dior Beauty",
    description: "Dior fits shoppers looking for designer makeup, fragrance, lip color, and giftable luxury beauty.",
  },
  {
    slug: "chanel",
    name: "CHANEL Beauty",
    description: "CHANEL matters for classic fragrance, complexion, lip, and prestige beauty shoppers with a timeless luxury lens.",
  },
  {
    slug: "la-mer",
    name: "La Mer",
    description: "La Mer is strongest for affluent skin care shoppers comparing ultra-premium creams, serums, and treatment rituals.",
  },
  {
    slug: "tom-ford-beauty",
    name: "Tom Ford Beauty",
    description: "Tom Ford Beauty fits elevated makeup and fragrance shoppers who want rich color, sleek packaging, and a premium finish.",
  },
];

export const beautySellers = [
  {
    slug: "amazon",
    name: "Amazon",
    description: "Amazon is useful for broad beauty discovery, fast shipping, and cross-brand comparison when seller trust is checked carefully.",
    bestFor: ["Fast shipping", "Broad selection", "Price comparison"],
    trustSignal: "Use official brand stores, authorized sellers, and clear return paths when available.",
    affiliateUrl: "https://www.amazon.com/s?k=luxury+beauty",
  },
  {
    slug: "sephora",
    name: "Sephora",
    description: "Sephora is a strong specialty beauty path for prestige brands, shade discovery, samples, and loyalty-driven shopping.",
    bestFor: ["Prestige beauty", "Shade discovery", "Beauty rewards"],
    trustSignal: "Strong fit for shoppers who value beauty-specific merchandising and returns.",
    affiliateUrl: "https://www.sephora.com/",
  },
  {
    slug: "nordstrom",
    name: "Nordstrom",
    description: "Nordstrom fits affluent beauty shoppers who care about luxury service, gifting, premium brands, and easy returns.",
    bestFor: ["Luxury service", "Gifting", "Designer beauty"],
    trustSignal: "Strong department-store trust for premium beauty and fragrance purchases.",
    affiliateUrl: "https://www.nordstrom.com/browse/beauty",
  },
  {
    slug: "ulta",
    name: "Ulta Beauty",
    description: "Ulta is useful when prestige beauty, salon brands, and broader price tiers need to be compared in one journey.",
    bestFor: ["Mixed price tiers", "Rewards shopping", "Beauty staples"],
    trustSignal: "Good for comparing prestige and accessible beauty in one retailer path.",
    affiliateUrl: "https://www.ulta.com/",
  },
];

export const beautyBrandCategories = [
  { brandSlug: "dior", categorySlug: "makeup", title: "Dior Makeup", summary: "Compare Dior complexion, lip, and color products before selecting a seller." },
  { brandSlug: "chanel", categorySlug: "fragrance", title: "CHANEL Fragrance", summary: "Compare CHANEL fragrance buying paths, gift sets, and signature scents." },
  { brandSlug: "la-mer", categorySlug: "skin-care", title: "La Mer Skin Care", summary: "Compare La Mer creams, serums, and ultra-premium skin care routines." },
  { brandSlug: "tom-ford-beauty", categorySlug: "lip-care", title: "Tom Ford Lip Color", summary: "Compare premium lip color and luxury makeup seller routes." },
];

export const beautyCategoryPages = [
  {
    slug: "beauty",
    title: "Beauty",
    description: "Explore LipFlower's luxury beauty routes across skin care, hair care, makeup, fragrance, body care, nail care, lip care, and beauty tools.",
    intro:
      "The Beauty hub is the broad starting point for shoppers who want polished, claim-safe beauty research before comparing sellers, categories, routines, and product formats.",
    eyebrow: "Beauty",
    sections: [
      {
        title: "Core beauty pillars",
        links: [
          { href: "/skin-care", label: "Skin care", description: "Compare premium serums, moisturizers, SPF, cleansers, and routine-led skin care." },
          { href: "/hair-care", label: "Hair care", description: "Compare salon-inspired shampoos, masks, scalp care, and styling support." },
          { href: "/makeup", label: "Makeup", description: "Compare luxury complexion, cheek, lip, eye, and finishing products." },
          { href: "/fragrance", label: "Fragrance", description: "Compare discovery sets, signature scents, gifts, and luxury fragrance houses." },
          { href: "/body-care", label: "Body care", description: "Compare body moisturizers, exfoliants, hand care, and fragrance layering routes." },
          { href: "/beauty-tools", label: "Beauty tools", description: "Compare brushes, facial tools, manicure tools, and hair styling tools." },
        ],
      },
      {
        title: "Authority and comparison paths",
        links: [
          { href: "/beauty-university", label: "Beauty University", description: "Read claim-safe guides before choosing ingredients, routines, or products." },
          { href: "/compare", label: "Compare products and routines", description: "Use head-to-head pages before clicking through to sellers." },
          { href: "/brands", label: "Brand directory", description: "Research luxury and prestige brands across category-specific paths." },
          { href: "/sellers", label: "Seller directory", description: "Choose trusted seller routes with affiliate disclosure and buying context." },
        ],
      },
    ],
  },
  {
    slug: "skin-care",
    title: "Luxury Skin Care",
    description: "Compare premium serums, creams, cleansers, eye treatments, SPF, and skin-care routines.",
    intro:
      "Luxury skin care shoppers need more than a brand logo. This route keeps concern, texture, routine role, seller trust, and giftability visible.",
    eyebrow: "Skin care",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/skin-care/anti-aging-serums", label: "Anti-aging serums", description: "Start here for targeted treatment and prestige active stories." },
          { href: "/skin-care/barrier-repair-moisturizers", label: "Barrier-support moisturizers", description: "Compare moisturizer texture, comfort, and routine anchoring." },
          { href: "/skin-care/vitamin-c-serums", label: "Vitamin C serums", description: "Compare radiance-focused serum pages with claim-safe ingredient context." },
          { href: "/skin-care/sunscreen-for-makeup-prep", label: "Sunscreen for makeup prep", description: "Compare SPF finish, tint, and layering behavior before foundation." },
          { href: "/brands/la-mer", label: "La Mer", description: "Compare ultra-premium skin care before choosing a seller." },
          { href: "/compare/luxury-serum-vs-moisturizer", label: "Serum vs moisturizer", description: "Use the comparison when routine role is still unclear." },
        ],
      },
    ],
  },
  {
    slug: "makeup",
    title: "Luxury Makeup",
    description: "Compare prestige foundation, lipstick, eye makeup, blush, bronzer, and finishing products.",
    intro:
      "Luxury makeup is about finish, shade, occasion, packaging, and seller confidence, not just the most prominent product tile.",
    eyebrow: "Makeup",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/makeup/luxury-foundation", label: "Luxury foundation", description: "Compare complexion products by finish, coverage, and shade path." },
          { href: "/makeup/luxury-concealer", label: "Luxury concealer", description: "Compare high-end concealer by coverage, finish, and undertone." },
          { href: "/makeup/cream-blush", label: "Cream blush", description: "Compare fresh color, pigment, texture, and seller confidence." },
          { href: "/makeup/setting-powder", label: "Setting powder", description: "Compare finish, blur positioning, tone support, and event makeup fit." },
          { href: "/brands/dior", label: "Dior Beauty", description: "Move into designer makeup and lip color research." },
          { href: "/compare/luxury-foundation-vs-skin-tint", label: "Foundation vs skin tint", description: "Choose the right complexion lane before clicking out." },
        ],
      },
    ],
  },
  {
    slug: "lip-care",
    title: "Luxury Lip Care",
    description: "Compare premium lip masks, balms, oils, plumpers, liners, gloss, and lipstick routines.",
    intro:
      "LipFlower gives lip care its own premium lane because affluent beauty shoppers often move between treatment, color, texture, and gifting.",
    eyebrow: "Lip care",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/lip-care/lip-masks", label: "Lip masks", description: "Compare overnight and balm-mask treatment formats." },
          { href: "/lip-care/lip-oils", label: "Lip oils", description: "Compare glossy comfort, tint, applicator, and fragrance preferences." },
          { href: "/lip-care/tinted-lip-balms", label: "Tinted lip balms", description: "Compare low-effort color, comfort, and daily-carry appeal." },
          { href: "/lip-care/lip-plumpers", label: "Lip plumpers", description: "Compare sensation, shine, and claim-safe makeup expectations." },
          { href: "/compare/lip-mask-vs-lip-balm", label: "Lip mask vs lip balm", description: "Decide between ritual treatment and everyday comfort." },
          { href: "/brands/tom-ford-beauty", label: "Tom Ford Beauty", description: "Explore luxury lip color and designer beauty positioning." },
        ],
      },
    ],
  },
  {
    slug: "fragrance",
    title: "Luxury Fragrance",
    description: "Compare prestige fragrance, discovery sets, designer scents, and premium gifting paths.",
    intro:
      "Fragrance shoppers need seller trust, format clarity, bottle size, occasion, and gift presentation before committing to a luxury scent.",
    eyebrow: "Fragrance",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/fragrance/fragrance-discovery-sets", label: "Fragrance discovery sets", description: "Compare sample sets, scent families, and lower-risk luxury fragrance paths." },
          { href: "/fragrance/luxury-perfume-gifts", label: "Luxury perfume gifts", description: "Compare bottle size, presentation, scent confidence, and seller flexibility." },
          { href: "/fragrance/signature-scent-guide", label: "Signature scent guide", description: "Use occasion, scent family, and sampling routes before buying a full bottle." },
          { href: "/brands/chanel", label: "CHANEL Beauty", description: "Compare classic luxury fragrance buying paths." },
          { href: "/sellers/nordstrom", label: "Nordstrom", description: "Use department-store service for premium fragrance and gifting." },
          { href: "/luxury-beauty", label: "Luxury beauty edit", description: "Return to a broader prestige-shopping route." },
        ],
      },
    ],
  },
  {
    slug: "hair-care",
    title: "Luxury Hair Care",
    description: "Compare premium shampoos, conditioners, masks, scalp care, stylers, and heat tools.",
    intro:
      "Luxury hair care decisions work best when shoppers compare hair type, routine step, fragrance, treatment intensity, and seller trust before clicking out.",
    eyebrow: "Hair care",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/hair-care/luxury-shampoo-conditioner", label: "Luxury shampoo and conditioner", description: "Compare premium wash-day staples by hair type, fragrance, and finish." },
          { href: "/hair-care/hair-masks", label: "Hair masks", description: "Compare rinse-out and treatment-style masks by texture and routine role." },
          { href: "/hair-care/scalp-care", label: "Scalp care", description: "Compare scalp-focused formats with conservative, claim-safe guidance." },
          { href: "/beauty-university", label: "Routine guides", description: "Use education routes before building a premium hair routine." },
          { href: "/sellers/sephora", label: "Sephora", description: "Compare salon and prestige beauty hair-care sellers." },
          { href: "/luxury-beauty", label: "Luxury beauty edit", description: "Return to a broader prestige shopping path." },
        ],
      },
    ],
  },
  {
    slug: "body-care",
    title: "Luxury Body Care",
    description: "Compare body moisturizers, exfoliants, SPF, hand care, body fragrance, and bath products.",
    intro:
      "Premium body care may support a polished routine through texture, scent, hydration feel, and gifting appeal without promising guaranteed skin outcomes.",
    eyebrow: "Body care",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/body-care/body-moisturizers", label: "Body moisturizers", description: "Compare premium body creams and lotions by texture, scent, and routine role." },
          { href: "/body-care/body-exfoliants", label: "Body exfoliants", description: "Compare scrubs and exfoliating body products with use-direction context." },
          { href: "/body-care/luxury-hand-care", label: "Luxury hand care", description: "Compare hand creams and portable body-care gifts by finish and fragrance." },
          { href: "/fragrance", label: "Fragrance", description: "Pair body care with scent and gifting decisions." },
          { href: "/sellers/nordstrom", label: "Nordstrom", description: "Use department-store routes for luxury body care and gifting." },
          { href: "/beauty-university", label: "Beauty University", description: "Read routine guidance before choosing a product lane." },
        ],
      },
    ],
  },
  {
    slug: "nail-care",
    title: "Luxury Nail Care",
    description: "Compare nail polish, treatments, cuticle care, manicure tools, and premium hand-care systems.",
    intro:
      "Nail care pages should help shoppers compare finish, wear expectations, tool quality, and routine fit without overclaiming repair results.",
    eyebrow: "Nail care",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/nail-care/luxury-nail-polish", label: "Luxury nail polish", description: "Compare premium shades, finishes, and seller confidence." },
          { href: "/nail-care/cuticle-care", label: "Cuticle care", description: "Compare oils, creams, and hand-care pairings with claim-safe language." },
          { href: "/nail-care/manicure-tools", label: "Manicure tools", description: "Compare material, care, and handling before upgrading at-home tools." },
          { href: "/beauty-tools", label: "Beauty tools", description: "Compare tools that support polished at-home routines." },
          { href: "/luxury-beauty", label: "Luxury beauty edit", description: "Explore broader prestige beauty categories." },
          { href: "/sellers/amazon", label: "Amazon", description: "Use seller checks carefully when comparing nail-care offers." },
        ],
      },
    ],
  },
  {
    slug: "beauty-tools",
    title: "Luxury Beauty Tools",
    description: "Compare premium brushes, facial tools, hair tools, organizers, and routine accessories.",
    intro:
      "Beauty tools should be compared by material, ergonomics, routine role, care instructions, and seller confidence rather than trend language alone.",
    eyebrow: "Beauty tools",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/beauty-tools/makeup-brushes", label: "Makeup brushes", description: "Compare shape, material, application role, and cleaning needs." },
          { href: "/beauty-tools/facial-tools", label: "Facial tools", description: "Compare routine role, materials, and care instructions without unsupported claims." },
          { href: "/beauty-tools/hair-styling-tools", label: "Hair styling tools", description: "Compare heat settings, attachments, warranty context, and seller trust." },
          { href: "/makeup", label: "Makeup", description: "Pair brushes and applicators with complexion and color decisions." },
          { href: "/hair-care", label: "Hair care", description: "Compare tools that support salon-style hair routines." },
          { href: "/beauty-university", label: "Beauty University", description: "Use education routes before selecting specialized tools." },
        ],
      },
    ],
  },
  {
    slug: "natural-beauty",
    title: "Natural Beauty",
    description: "Compare natural-positioned beauty products with careful ingredient, seller, and claim context.",
    intro:
      "Natural beauty pages should keep claims conservative, explain what is visible from product positioning, and avoid treating natural language as a safety guarantee.",
    eyebrow: "Natural beauty",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/skin-care", label: "Skin care", description: "Compare ingredient-led skin-care routines." },
          { href: "/body-care", label: "Body care", description: "Explore body products with texture and fragrance context." },
          { href: "/about/editorial-policy", label: "Editorial policy", description: "Understand how LipFlower frames beauty claims." },
        ],
      },
    ],
  },
  {
    slug: "luxury-beauty",
    title: "Luxury Beauty Edit",
    description: "Shop a premium beauty path across skin care, makeup, fragrance, lip care, and giftable products.",
    intro:
      "The luxury edit is built for affluent shoppers who want high-end beauty, polished packaging, brand trust, and seller confidence in one decision path.",
    eyebrow: "Luxury edit",
    sections: [
      {
        title: "Best next routes",
        links: [
          { href: "/skin-care", label: "Skin care", description: "Start with treatment-led luxury routines." },
          { href: "/makeup", label: "Makeup", description: "Move into color, complexion, and designer beauty." },
          { href: "/fragrance", label: "Fragrance", description: "Compare scent and gifting paths." },
        ],
      },
    ],
  },
];

export const beautySystemPages = [];

export const beautyUniversityTopics = [
  {
    slug: "shade-matching-guide",
    title: "Luxury Foundation Shade Matching Guide",
    description: "Learn how undertone, coverage, finish, and return policy shape a better high-end foundation purchase.",
    intro:
      "Shade matching is where luxury foundation shopping succeeds or fails, so this guide keeps undertone and seller flexibility front and center.",
  },
  {
    slug: "luxury-lip-care-routine",
    title: "Luxury Lip Care Routine Guide",
    description: "Build a premium lip routine with exfoliation, treatment masks, balms, oils, liners, and color.",
    intro:
      "Lip care works best as a small routine, especially when treatment texture and makeup finish need to work together.",
  },
  {
    slug: "amazon-luxury-beauty-seller-checklist",
    title: "Amazon Luxury Beauty Seller Checklist",
    description: "Use seller, return, packaging, and authenticity signals before buying luxury beauty through Amazon.",
    intro:
      "Amazon can be a useful beauty seller, but premium beauty shoppers should pay close attention to seller identity and return clarity.",
  },
  {
    slug: "skin-barrier-basics",
    title: "Skin Barrier Basics for Beauty Shoppers",
    description: "Understand how comfort, dryness, texture, and moisturizer choice fit into a claim-safe skin-care routine.",
    intro:
      "Barrier language is common in beauty marketing, but shoppers should keep the decision grounded in product directions, texture, comfort, and visible brand claims.",
  },
  {
    slug: "ingredient-claims-guide",
    title: "How to Read Beauty Ingredient Claims",
    description: "Learn how to evaluate ingredient-led beauty pages without treating marketing claims as guaranteed results.",
    intro:
      "Ingredient-led shopping works best when the shopper separates visible product claims, concentration context, sensitivity history, and seller trust.",
  },
  {
    slug: "makeup-prep-routine",
    title: "Makeup Prep Routine Guide",
    description: "Build a polished makeup-prep path across moisturizer, SPF, primer, complexion, and setting products.",
    intro:
      "Makeup prep is about compatibility and finish. This guide keeps layering, pilling risk, skin feel, and product directions in view.",
  },
  {
    slug: "ingredients-to-watch-in-lip-plumpers",
    title: "Ingredients to Watch in Lip Plumpers",
    description: "Understand common lip-plumper sensation language, sensitivity concerns, and claim-safe shopping signals.",
    intro:
      "Lip plumpers can involve tingling or warming sensations, so shoppers should compare formula positioning and personal sensitivity before choosing a product.",
  },
  {
    slug: "fragrance-gifting-guide",
    title: "Luxury Fragrance Gifting Guide",
    description: "Compare discovery sets, bottle sizes, scent families, and seller return paths before buying fragrance as a gift.",
    intro:
      "Fragrance gifting works best when the shopper thinks about scent family, presentation, return flexibility, and whether a discovery set is safer than a full bottle.",
  },
];

export function getBeautyHubPage(slug = "home") {
  return beautyHubPages[slug] || null;
}

export function getBeautyLandingPage(slug = "") {
  return beautyLandingPages.find((page) => page.slug === slug) || null;
}

export function getBeautyLandingPagesForCategory(categoryPath = "") {
  return beautyLandingPages.filter((page) => page.categoryPath === categoryPath);
}

export function getBeautyLandingPageForCategory(categoryPath = "", slug = "") {
  return beautyLandingPages.find(
    (page) => page.categoryPath === categoryPath && page.slug === slug,
  ) || null;
}

export function getBeautyComparePage(slug = "") {
  return beautyComparePages.find((page) => page.slug === slug) || null;
}

export function getBeautyCalculator(slug = "") {
  return beautyCalculators.find((tool) => tool.slug === slug) || null;
}

export function getBeautyBrandPage(slug = "") {
  return beautyBrands.find((brand) => brand.slug === slug) || null;
}

export function getBeautyBrandCategoryPage(brandSlug = "", categorySlug = "") {
  return beautyBrandCategories.find(
    (page) => page.brandSlug === brandSlug && page.categorySlug === categorySlug,
  ) || null;
}

export function getBeautyCategoryPage(slug = "") {
  return beautyCategoryPages.find((page) => page.slug === slug) || null;
}

export function getBeautySeller(slug = "") {
  return beautySellers.find((seller) => seller.slug === slug) || null;
}

export function getBeautySystemPage(slug = "") {
  return beautySystemPages.find((page) => page.slug === slug) || null;
}

export function getBeautyUniversityTopic(slug = "") {
  return beautyUniversityTopics.find((page) => page.slug === slug) || null;
}
