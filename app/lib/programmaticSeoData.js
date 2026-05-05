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
  { slug: "lip-scrub", label: "lip scrub", plural: "lip scrubs", vertical: "lip care", categoryPath: "/lip-care", examples: ["Fresh Sugar Lip Polish", "Dior Lip Sugar Scrub", "Sara Happ The Lip Scrub"] },
  { slug: "spf-lip-balm", label: "SPF lip balm", plural: "SPF lip balms", vertical: "lip care", categoryPath: "/lip-care/tinted-lip-balms", examples: ["Supergoop Play Lip Balm", "Sun Bum SPF Lip Balm", "COOLA Organic Liplux"] },
  { slug: "body-oil", label: "body oil", plural: "body oils", vertical: "body care", categoryPath: "/body-care/body-moisturizers", examples: ["Osea Undaria Algae Body Oil", "Nuxe Huile Prodigieuse", "Necessaire The Body Oil"] },
  { slug: "shower-oil", label: "shower oil", plural: "shower oils", vertical: "body care", categoryPath: "/body-care", examples: ["L'Occitane Almond Shower Oil", "Bioderma Atoderm Shower Oil", "Avene XeraCalm Cleansing Oil"] },
  { slug: "eau-de-parfum", label: "eau de parfum", plural: "eaux de parfum", vertical: "fragrance", categoryPath: "/fragrance/signature-scent-guide", examples: ["Yves Saint Laurent Libre", "Valentino Donna Born In Roma", "Gucci Bloom"] },
  { slug: "perfume-oil", label: "perfume oil", plural: "perfume oils", vertical: "fragrance", categoryPath: "/fragrance/signature-scent-guide", examples: ["Nest Madagascar Vanilla Perfume Oil", "Maison Louis Marie Perfume Oil", "By Rosie Jane Perfume Oil"] },
  { slug: "fragrance-mist", label: "fragrance mist", plural: "fragrance mists", vertical: "fragrance", categoryPath: "/fragrance", examples: ["Sol de Janeiro Perfume Mist", "Ouai Body Mist", "Phlur Body Mist"] },
  { slug: "travel-fragrance", label: "travel fragrance", plural: "travel fragrances", vertical: "fragrance", categoryPath: "/fragrance/fragrance-discovery-sets", examples: ["Sephora Travel Spray", "Maison Margiela Replica Travel Spray", "Jo Malone Travel Cologne"] },
  { slug: "gel-polish", label: "gel polish", plural: "gel polishes", vertical: "nail care", categoryPath: "/nail-care/luxury-nail-polish", examples: ["OPI GelColor", "Essie Gel Couture", "Le Mini Macaron Gel Polish"] },
  { slug: "press-on-nails", label: "press-on nails", plural: "press-on nails", vertical: "nail care", categoryPath: "/nail-care/manicure-tools", examples: ["Static Nails Pop-On Manicure", "Olive and June Press-On Nails", "KISS Impress Nails"] },
  { slug: "manicure-kit", label: "manicure kit", plural: "manicure kits", vertical: "nail care", categoryPath: "/nail-care/manicure-tools", examples: ["Tweezerman Manicure Kit", "Olive and June Mani System", "Deborah Lippmann Manicure Set"] },
  { slug: "nail-tool", label: "nail tool", plural: "nail tools", vertical: "nail care", categoryPath: "/nail-care/manicure-tools", examples: ["Glass Nail File", "Cuticle Pusher", "Nail Buffer Block"] },
  { slug: "beauty-sponge", label: "beauty sponge", plural: "beauty sponges", vertical: "beauty tools", categoryPath: "/beauty-tools/makeup-brushes", examples: ["Beautyblender Original Sponge", "Real Techniques Miracle Complexion Sponge", "Sephora Collection Makeup Sponge"] },
  { slug: "makeup-mirror", label: "makeup mirror", plural: "makeup mirrors", vertical: "beauty tools", categoryPath: "/beauty-tools", examples: ["Simplehuman Sensor Mirror", "Riki Loves Riki Mirror", "Fancii Lighted Makeup Mirror"] },
  { slug: "curling-iron", label: "curling iron", plural: "curling irons", vertical: "beauty tools", categoryPath: "/beauty-tools/hair-styling-tools", examples: ["T3 SinglePass Curl", "Dyson Airwrap Barrel", "GHD Curve Curl Iron"] },
  { slug: "luxury-makeup-set", label: "luxury makeup set", plural: "luxury makeup sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Charlotte Tilbury Makeup Set", "Dior Beauty Makeup Set", "Sephora Favorites Makeup Set"] },
  { slug: "luxury-skin-care-set", label: "luxury skin care set", plural: "luxury skin care sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["La Mer Skin Care Set", "Tatcha Ritual Set", "Dr. Barbara Sturm Skin Care Set"] },
  { slug: "beauty-advent-calendar", label: "beauty advent calendar", plural: "beauty advent calendars", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Dior Advent Calendar", "Saks Beauty Advent Calendar", "Liberty Beauty Advent Calendar"] },
  { slug: "luxury-fragrance-set", label: "luxury fragrance set", plural: "luxury fragrance sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Jo Malone Cologne Collection", "Maison Margiela Replica Set", "Tom Ford Fragrance Set"] },
  { slug: "premium-beauty-tool-set", label: "premium beauty tool set", plural: "premium beauty tool sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Dyson Beauty Gift Set", "Sonia G Brush Set", "T3 Styling Tool Set"] },
  { slug: "face-oil", label: "face oil", plural: "face oils", vertical: "skin care", categoryPath: "/skin-care", examples: ["Sunday Riley Juno Oil", "Herbivore Phoenix Face Oil", "Biossance Squalane Oil"] },
  { slug: "sheet-mask", label: "sheet mask", plural: "sheet masks", vertical: "skin care", categoryPath: "/skin-care", examples: ["SK-II Facial Treatment Mask", "Dr. Jart Dermask", "Tatcha Luminous Dewy Skin Mask"] },
  { slug: "spot-treatment", label: "spot treatment", plural: "spot treatments", vertical: "skin care", categoryPath: "/skin-care", examples: ["Mario Badescu Drying Lotion", "Peace Out Acne Dots", "Kate Somerville EradiKate"] },
  { slug: "makeup-setting-product", label: "makeup setting product", plural: "makeup setting products", vertical: "makeup", categoryPath: "/makeup/setting-powder", examples: ["Urban Decay All Nighter", "Laura Mercier Translucent Powder", "Charlotte Tilbury Setting Spray"] },
  { slug: "face-palette", label: "face palette", plural: "face palettes", vertical: "makeup", categoryPath: "/makeup", examples: ["Hourglass Ambient Lighting Palette", "Dior Backstage Glow Palette", "Charlotte Tilbury Face Palette"] },
  { slug: "false-lashes", label: "false lashes", plural: "false lashes", vertical: "makeup", categoryPath: "/makeup", examples: ["Ardell Demi Wispies", "Lilly Lashes", "Velour Lash Kit"] },
  { slug: "hair-dryer", label: "hair dryer", plural: "hair dryers", vertical: "beauty tools", categoryPath: "/beauty-tools/hair-styling-tools", examples: ["Dyson Supersonic", "T3 AireLuxe", "GHD Helios"] },
  { slug: "flat-iron", label: "flat iron", plural: "flat irons", vertical: "beauty tools", categoryPath: "/beauty-tools/hair-styling-tools", examples: ["GHD Platinum+ Styler", "Dyson Corrale", "T3 Smooth ID"] },
  { slug: "led-face-mask", label: "LED face mask", plural: "LED face masks", vertical: "beauty tools", categoryPath: "/beauty-tools/facial-tools", examples: ["Dr. Dennis Gross LED Mask", "CurrentBody LED Mask", "Omnilux Contour Mask"] },
  { slug: "facial-steamer", label: "facial steamer", plural: "facial steamers", vertical: "beauty tools", categoryPath: "/beauty-tools/facial-tools", examples: ["Dr. Dennis Gross Pro Facial Steamer", "Vanity Planet Facial Steamer", "Conair Facial Sauna"] },
  { slug: "deodorant", label: "deodorant", plural: "deodorants", vertical: "body care", categoryPath: "/body-care", examples: ["Nécessaire The Deodorant", "Kosas Chemistry Deodorant", "Salt & Stone Deodorant"] },
  { slug: "body-spf", label: "body SPF", plural: "body SPF products", vertical: "body care", categoryPath: "/body-care", examples: ["Supergoop Play Lotion", "Vacation Classic Lotion", "La Roche-Posay Anthelios Body"] },
  { slug: "self-tanner", label: "self tanner", plural: "self tanners", vertical: "body care", categoryPath: "/body-care", examples: ["St. Tropez Self Tan", "Isle of Paradise Drops", "Tan-Luxe The Body"] },
  { slug: "cuticle-cream", label: "cuticle cream", plural: "cuticle creams", vertical: "nail care", categoryPath: "/nail-care/cuticle-care", examples: ["Dior Creme Abricot", "Burt's Bees Lemon Butter Cuticle Cream", "L'Occitane Nail and Cuticle Oil"] },
  { slug: "base-coat", label: "base coat", plural: "base coats", vertical: "nail care", categoryPath: "/nail-care/luxury-nail-polish", examples: ["OPI Natural Nail Base Coat", "Essie Here To Stay", "Deborah Lippmann Hard Rock"] },
  { slug: "top-coat", label: "top coat", plural: "top coats", vertical: "nail care", categoryPath: "/nail-care/luxury-nail-polish", examples: ["Seche Vite Top Coat", "Essie Gel Setter", "Dior Gel Coat"] },
  { slug: "hair-perfume", label: "hair perfume", plural: "hair perfumes", vertical: "fragrance", categoryPath: "/fragrance", examples: ["Byredo Hair Perfume", "Diptyque Hair Mist", "Maison Francis Kurkdjian Hair Mist"] },
  { slug: "candle-gift", label: "candle gift", plural: "candle gifts", vertical: "fragrance", categoryPath: "/fragrance", examples: ["Diptyque Candle", "Jo Malone Candle", "Maison Margiela Replica Candle"] },
  { slug: "fashion-hair-accessory", label: "fashion hair accessory", plural: "fashion hair accessories", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Pearl Hair Clip Set", "Crystal Headband", "Gold-Tone Hair Pin"] },
  { slug: "occasion-jewelry", label: "occasion jewelry", plural: "occasion jewelry pieces", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/jewelry-gift-sets", examples: ["Crystal Drop Earrings", "Pearl Choker", "Gold-Tone Occasion Set"] },
  { slug: "lip-serum", label: "lip serum", plural: "lip serums", vertical: "lip care", categoryPath: "/lip-care", examples: ["Rhode Peptide Lip Treatment", "Paula's Choice Lip Booster", "Fresh Advanced Therapy Lip Serum"] },
  { slug: "overnight-lip-treatment", label: "overnight lip treatment", plural: "overnight lip treatments", vertical: "lip care", categoryPath: "/lip-care/lip-masks", examples: ["Laneige Lip Sleeping Mask", "Fresh Recovery Lip Mask", "Tatcha Kissu Lip Mask"] },
  { slug: "clear-lip-gloss", label: "clear lip gloss", plural: "clear lip glosses", vertical: "lip care", categoryPath: "/lip-care/lip-oils", examples: ["Fenty Glass Slipper", "Tower 28 Clear Lip Jelly", "Dior Lip Maximizer Clear"] },
  { slug: "hair-gloss", label: "hair gloss", plural: "hair glosses", vertical: "hair care", categoryPath: "/hair-care", examples: ["dpHUE Gloss+", "Kristin Ess Signature Gloss", "John Frieda Glaze"] },
  { slug: "dry-shampoo", label: "dry shampoo", plural: "dry shampoos", vertical: "hair care", categoryPath: "/hair-care", examples: ["Living Proof Perfect Hair Day Dry Shampoo", "Klorane Dry Shampoo", "Oribe Gold Lust Dry Shampoo"] },
  { slug: "hair-mousse", label: "hair mousse", plural: "hair mousses", vertical: "hair care", categoryPath: "/hair-care", examples: ["Oribe Grandiose Mousse", "Bumble and bumble Thickening Mousse", "Moroccanoil Volumizing Mousse"] },
  { slug: "texture-spray", label: "texture spray", plural: "texture sprays", vertical: "hair care", categoryPath: "/hair-care", examples: ["Oribe Dry Texturizing Spray", "Ouai Texturizing Hair Spray", "Bumble and bumble Thickening Dryspun Spray"] },
  { slug: "hair-clip", label: "hair clip", plural: "hair clips", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Pearl Hair Clip", "Gold Claw Clip", "Crystal Barrette"] },
  { slug: "headband", label: "headband", plural: "headbands", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Padded Velvet Headband", "Crystal Headband", "Pearl Headband"] },
  { slug: "anklet", label: "anklet", plural: "anklets", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Gold-Tone Anklet", "Pearl Anklet", "Crystal Anklet Set"] },
  { slug: "brooch", label: "brooch", plural: "brooches", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Crystal Brooch", "Pearl Floral Brooch", "Gold-Tone Pin"] },
  { slug: "beauty-mini-set", label: "beauty mini set", plural: "beauty mini sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Sephora Favorites Mini Set", "Charlotte Tilbury Mini Icons", "Sol de Janeiro Mini Set"] },
  { slug: "luxury-lip-set", label: "luxury lip set", plural: "luxury lip sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Dior Lip Set", "Charlotte Tilbury Pillow Talk Set", "Laneige Lip Kit"] },
  { slug: "luxury-hair-set", label: "luxury hair set", plural: "luxury hair sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Oribe Hair Set", "Kerastase Gift Set", "Olaplex Routine Kit"] },
  { slug: "luxury-body-care-set", label: "luxury body care set", plural: "luxury body care sets", vertical: "luxury beauty", categoryPath: "/luxury-beauty", examples: ["Sol de Janeiro Body Set", "Necessaire Body Set", "Aesop Body Care Kit"] },
  { slug: "under-eye-patch", label: "under-eye patch", plural: "under-eye patches", vertical: "skin care", categoryPath: "/skin-care", examples: ["Patchology Eye Gels", "Skyn Iceland Eye Gels", "Peter Thomas Roth Eye Patches"] },
  { slug: "cleansing-water", label: "cleansing water", plural: "cleansing waters", vertical: "skin care", categoryPath: "/skin-care", examples: ["Bioderma Sensibio Micellar Water", "Garnier Micellar Water", "Caudalie Cleansing Water"] },
  { slug: "color-corrector", label: "color corrector", plural: "color correctors", vertical: "makeup", categoryPath: "/makeup", examples: ["Bobbi Brown Corrector", "NARS Color Corrector", "Charlotte Tilbury Magic Vanish"] },
  { slug: "makeup-remover-balm", label: "makeup remover balm", plural: "makeup remover balms", vertical: "skin care", categoryPath: "/skin-care", examples: ["Clinique Take The Day Off Balm", "Farmacy Green Clean", "Elemis Pro-Collagen Cleansing Balm"] },
  { slug: "scented-body-lotion", label: "scented body lotion", plural: "scented body lotions", vertical: "body care", categoryPath: "/body-care/body-moisturizers", examples: ["Sol de Janeiro Bum Bum Cream", "Jo Malone Body Creme", "Chanel Body Lotion"] },
  { slug: "neck-cream", label: "neck cream", plural: "neck creams", vertical: "skin care", categoryPath: "/skin-care", examples: ["StriVectin Neck Cream", "Perricone MD Cold Plasma Plus Neck", "Clarins Extra-Firming Neck Cream"] },
  { slug: "cleansing-oil", label: "cleansing oil", plural: "cleansing oils", vertical: "skin care", categoryPath: "/skin-care", examples: ["DHC Deep Cleansing Oil", "Tatcha Camellia Cleansing Oil", "Shu Uemura Cleansing Oil"] },
  { slug: "face-mist", label: "face mist", plural: "face mists", vertical: "skin care", categoryPath: "/skin-care", examples: ["Tatcha Luminous Dewy Skin Mist", "Caudalie Beauty Elixir", "Tower 28 SOS Spray"] },
  { slug: "eyeshadow-palette", label: "eyeshadow palette", plural: "eyeshadow palettes", vertical: "makeup", categoryPath: "/makeup", examples: ["Natasha Denona Eyeshadow Palette", "Pat McGrath Mothership Palette", "Dior Backstage Eye Palette"] },
  { slug: "cream-eyeshadow", label: "cream eyeshadow", plural: "cream eyeshadows", vertical: "makeup", categoryPath: "/makeup", examples: ["Charlotte Tilbury Eyes to Mesmerise", "Laura Mercier Caviar Stick", "Bobbi Brown Long-Wear Cream Shadow"] },
  { slug: "contour-stick", label: "contour stick", plural: "contour sticks", vertical: "makeup", categoryPath: "/makeup", examples: ["Westman Atelier Face Trace", "Fenty Match Stix", "Rare Beauty Bronzer Stick"] },
  { slug: "brow-pencil", label: "brow pencil", plural: "brow pencils", vertical: "makeup", categoryPath: "/makeup", examples: ["Anastasia Brow Wiz", "Benefit Precisely My Brow", "Kosas Brow Pop"] },
  { slug: "scalp-scrub", label: "scalp scrub", plural: "scalp scrubs", vertical: "hair care", categoryPath: "/hair-care/scalp-care", examples: ["Ouai Scalp and Body Scrub", "Briogeo Scalp Revival Scrub", "Christophe Robin Cleansing Purifying Scrub"] },
  { slug: "hair-spray", label: "hair spray", plural: "hair sprays", vertical: "hair care", categoryPath: "/hair-care", examples: ["Oribe Superfine Hair Spray", "Living Proof Flex Hairspray", "Moroccanoil Luminous Hairspray"] },
  { slug: "shine-spray", label: "shine spray", plural: "shine sprays", vertical: "hair care", categoryPath: "/hair-care", examples: ["Color Wow Extra Mist-ical Shine Spray", "Oribe Shine Light Reflecting Spray", "Kenra Shine Spray"] },
  { slug: "hair-towel", label: "hair towel", plural: "hair towels", vertical: "beauty tools", categoryPath: "/beauty-tools", examples: ["Aquis Hair Towel", "Kitsch Microfiber Hair Towel", "Turbie Twist Hair Towel"] },
  { slug: "lash-curler", label: "lash curler", plural: "lash curlers", vertical: "beauty tools", categoryPath: "/beauty-tools", examples: ["Shu Uemura Eyelash Curler", "Surratt Relevee Lash Curler", "Tweezerman Lash Curler"] },
  { slug: "tweezer-set", label: "tweezer set", plural: "tweezer sets", vertical: "beauty tools", categoryPath: "/beauty-tools", examples: ["Tweezerman Tweezer Set", "Anastasia Beverly Hills Tweezers", "Rubis Tweezer Set"] },
  { slug: "fragrance-sampler", label: "fragrance sampler", plural: "fragrance samplers", vertical: "fragrance", categoryPath: "/fragrance/fragrance-discovery-sets", examples: ["Sephora Favorites Fragrance Sampler", "Scentbird Sampler Set", "Maison Margiela Replica Sampler"] },
  { slug: "rollerball-perfume", label: "rollerball perfume", plural: "rollerball perfumes", vertical: "fragrance", categoryPath: "/fragrance", examples: ["Nest Rollerball Perfume", "Clean Reserve Rollerball", "Skylar Rollerball Perfume"] },
  { slug: "body-butter", label: "body butter", plural: "body butters", vertical: "body care", categoryPath: "/body-care/body-moisturizers", examples: ["The Body Shop Body Butter", "Josie Maran Body Butter", "Sol de Janeiro Body Butter"] },
  { slug: "foot-cream", label: "foot cream", plural: "foot creams", vertical: "body care", categoryPath: "/body-care", examples: ["L'Occitane Shea Foot Cream", "Kiehl's Intensive Treatment Foot Cream", "Margaret Dabbs Foot Cream"] },
  { slug: "nail-care-set", label: "nail care set", plural: "nail care sets", vertical: "nail care", categoryPath: "/nail-care/manicure-tools", examples: ["Olive and June Nail Set", "Deborah Lippmann Nail Set", "Tweezerman Nail Care Set"] },
  { slug: "clip-on-earrings", label: "clip-on earrings", plural: "clip-on earrings", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-earrings", examples: ["Pearl Clip-On Earrings", "Crystal Clip-On Earrings", "Gold-Tone Clip-On Hoops"] },
  { slug: "jewelry-organizer", label: "jewelry organizer", plural: "jewelry organizers", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Velvet Jewelry Box", "Travel Jewelry Organizer", "Acrylic Jewelry Stand"] },
  { slug: "waterproof-mascara", label: "waterproof mascara", plural: "waterproof mascaras", vertical: "makeup", categoryPath: "/makeup", examples: ["Lancôme Monsieur Big Waterproof", "Dior Diorshow Waterproof", "Maybelline Lash Sensational Waterproof"] },
  { slug: "tubing-mascara", label: "tubing mascara", plural: "tubing mascaras", vertical: "makeup", categoryPath: "/makeup", examples: ["Caliray Come Hell or High Water", "Thrive Causemetics Liquid Lash Extensions", "Kevyn Aucoin Tubing Mascara"] },
  { slug: "liquid-blush", label: "liquid blush", plural: "liquid blushes", vertical: "makeup", categoryPath: "/makeup/cream-blush", examples: ["Rare Beauty Soft Pinch Liquid Blush", "Armani Fluid Sheer", "Saie Dew Blush"] },
  { slug: "powder-blush", label: "powder blush", plural: "powder blushes", vertical: "makeup", categoryPath: "/makeup/cream-blush", examples: ["Dior Rosy Glow", "NARS Powder Blush", "Hourglass Ambient Lighting Blush"] },
  { slug: "bb-cream", label: "BB cream", plural: "BB creams", vertical: "makeup", categoryPath: "/makeup/luxury-foundation", examples: ["Erborian BB Cream", "Jane Iredale Glow Time", "Dr. Jart Premium BB"] },
  { slug: "cc-cream", label: "CC cream", plural: "CC creams", vertical: "makeup", categoryPath: "/makeup/luxury-foundation", examples: ["IT Cosmetics CC+ Cream", "Erborian CC Cream", "Chanel CC Cream"] },
  { slug: "mineral-sunscreen", label: "mineral sunscreen", plural: "mineral sunscreens", vertical: "skin care", categoryPath: "/skin-care/sunscreen-for-makeup-prep", examples: ["EltaMD UV Physical", "Summer Fridays ShadeDrops", "Supergoop Mineral Sheerscreen"] },
  { slug: "tinted-sunscreen", label: "tinted sunscreen", plural: "tinted sunscreens", vertical: "skin care", categoryPath: "/skin-care/sunscreen-for-makeup-prep", examples: ["EltaMD UV Clear Tinted", "La Roche-Posay Tinted Mineral SPF", "Colorescience Flex SPF"] },
  { slug: "hydrating-serum", label: "hydrating serum", plural: "hydrating serums", vertical: "skin care", categoryPath: "/skin-care", examples: ["Vichy Mineral 89", "Drunk Elephant B-Hydra", "The Ordinary Hyaluronic Acid"] },
  { slug: "barrier-serum", label: "barrier serum", plural: "barrier serums", vertical: "skin care", categoryPath: "/skin-care/barrier-repair-moisturizers", examples: ["Cocokind Barrier Serum", "Byoma Barrier+ Serum", "The Ordinary Barrier Support Serum"] },
  { slug: "hair-bond-builder", label: "hair bond builder", plural: "hair bond builders", vertical: "hair care", categoryPath: "/hair-care/hair-masks", examples: ["Olaplex No. 3", "K18 Leave-In Molecular Repair Mask", "Redken Acidic Bonding Concentrate"] },
  { slug: "purple-shampoo", label: "purple shampoo", plural: "purple shampoos", vertical: "hair care", categoryPath: "/hair-care/luxury-shampoo-conditioner", examples: ["Kérastase Blond Absolu", "Amika Bust Your Brass", "Oribe Bright Blonde Shampoo"] },
  { slug: "hair-edge-control", label: "hair edge control", plural: "hair edge controls", vertical: "hair care", categoryPath: "/hair-care", examples: ["Pattern Edge Control", "Mielle Edge Gel", "Briogeo Style + Treat Edge Control"] },
  { slug: "scalp-oil", label: "scalp oil", plural: "scalp oils", vertical: "hair care", categoryPath: "/hair-care/scalp-care", examples: ["Mielle Rosemary Mint Oil", "Fable & Mane HoliRoots Oil", "Act+Acre Scalp Oil"] },
  { slug: "body-mist", label: "body mist", plural: "body mists", vertical: "body care", categoryPath: "/body-care", examples: ["Sol de Janeiro Body Mist", "Phlur Body Mist", "Bath & Body Works Fine Fragrance Mist"] },
  { slug: "body-serum", label: "body serum", plural: "body serums", vertical: "body care", categoryPath: "/body-care/body-moisturizers", examples: ["Nécessaire The Body Serum", "Soft Services Smoothing Solution", "Topicals Slather"] },
  { slug: "exfoliating-body-lotion", label: "exfoliating body lotion", plural: "exfoliating body lotions", vertical: "body care", categoryPath: "/body-care/body-exfoliants", examples: ["AmLactin Daily Lotion", "Paula's Choice 10% AHA Body Lotion", "Soft Services Smoothing Solution"] },
  { slug: "travel-jewelry-case", label: "travel jewelry case", plural: "travel jewelry cases", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry", examples: ["Velvet Travel Jewelry Case", "Leather Jewelry Organizer", "Mini Jewelry Roll"] },
  { slug: "pearl-necklace", label: "pearl necklace", plural: "pearl necklaces", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-necklaces", examples: ["Pearl Pendant Necklace", "Layered Pearl Necklace", "Pearl Choker"] },
  { slug: "gold-hoop-earrings", label: "gold hoop earrings", plural: "gold hoop earrings", vertical: "artificial jewelry", categoryPath: "/artificial-jewelry/fashion-earrings", examples: ["Gold-Tone Hoop Earrings", "Chunky Gold Hoops", "Small Everyday Hoop Earrings"] },
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
