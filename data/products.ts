export const products = [
  {
    id: 1,
    name: "Artisan Coffee Table",
    slug: "artisan-coffee-table",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=800",
    category: "Furniture",
    description:
      "Hand-crafted coffee table made from reclaimed oak wood, featuring a sleek modern design with traditional craftsmanship. Each piece tells its own story through the natural grain patterns and subtle imperfections that make it unique.",
    variations: {
      name: "Finish",
      options: ["Natural Oak", "Dark Walnut", "Weathered Grey"],
    },
    useCases: [
      "Perfect centerpiece for living rooms",
      "Ideal for both modern and traditional spaces",
      "Great for entertaining guests",
      "Doubles as a workspace",
    ],
    reviews: 124,
  },
  {
    id: 2,
    name: "Linen Throw Pillow",
    slug: "linen-throw-pillow",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=800",
    category: "Textiles",
    description:
      "Luxurious linen throw pillow with a soft, lived-in feel. Made from 100% European flax and filled with premium down alternative.",
    variations: {
      name: "Color",
      options: ["Natural", "Sage", "Terracotta", "Navy"],
    },
    useCases: [
      "Adds texture to any seating",
      "Perfect for layering",
      "Suitable for both indoor and outdoor use",
      "Easy to style in multiple rooms",
    ],
    reviews: 89,
  },
  {
    id: 3,
    name: "Modern Floor Lamp",
    slug: "modern-floor-lamp",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800",
    category: "Lighting",
    description:
      "Sleek floor lamp with adjustable arm and dimmable LED light. Perfect for creating ambiance in any room.",
    variations: {
      name: "Finish",
      options: ["Brass", "Matte Black", "Chrome"],
    },
    useCases: [
      "Reading nook essential",
      "Ambient lighting for living spaces",
      "Workspace illumination",
      "Accent lighting",
    ],
  },
  {
    id: 4,
    name: "Ceramic Vase Set",
    slug: "ceramic-vase-set",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Set of 3 handmade ceramic vases in varying sizes. Each piece is uniquely crafted with organic shapes and textures.",
    variations: {
      name: "Color",
      options: ["White", "Sand", "Terra Cotta"],
    },
    useCases: [
      "Perfect for fresh or dried flowers",
      "Beautiful standalone decor",
      "Great as a gift set",
      "Mix and match for different looks",
    ],
  },
  {
    id: 5,
    name: "Woven Basket Set",
    slug: "woven-basket-set",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Handwoven storage baskets made from sustainable materials. Perfect for organizing with style.",
    variations: {
      name: "Size",
      options: ["Small", "Medium", "Large", "Set of 3"],
    },
    useCases: [
      "Stylish storage solution",
      "Natural home decor",
      "Versatile organization",
      "Perfect for any room",
    ],
  },
  {
    id: 6,
    name: "Minimalist Dining Chair",
    slug: "minimalist-dining-chair",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800",
    category: "Furniture",
    description:
      "Sleek dining chair with ergonomic design and premium upholstery. Perfect blend of comfort and style.",
    variations: {
      name: "Color",
      options: ["Light Grey", "Charcoal", "Forest Green", "Navy"],
    },
    useCases: [
      "Dining room seating",
      "Home office chair",
      "Accent piece",
      "Versatile extra seating",
    ],
  },
  {
    id: 7,
    name: "Pendant Light Fixture",
    slug: "pendant-light-fixture",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800",
    category: "Lighting",
    description:
      "Modern pendant light with adjustable height and warm, ambient glow. Perfect for dining areas and entryways.",
    variations: {
      name: "Finish",
      options: ["Brushed Gold", "Matte Black", "Chrome", "Copper"],
    },
    useCases: [
      "Dining room lighting",
      "Kitchen island illumination",
      "Entryway statement piece",
      "Ambient lighting",
    ],
  },
  {
    id: 8,
    name: "Wool Area Rug",
    slug: "wool-area-rug",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
    category: "Textiles",
    description:
      "Hand-tufted wool rug with contemporary geometric pattern. Adds warmth and style to any room.",
    variations: {
      name: "Size",
      options: ["5x7", "6x9", "8x10", "9x12"],
    },
    useCases: [
      "Living room centerpiece",
      "Bedroom comfort",
      "Sound dampening",
      "Space definition",
    ],
  },
  {
    id: 9,
    name: "Wall Mirror Set",
    slug: "wall-mirror-set",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Set of three decorative mirrors with geometric frames. Perfect for creating an artistic wall arrangement.",
    variations: {
      name: "Frame",
      options: ["Gold", "Silver", "Black", "Copper"],
    },
    useCases: [
      "Wall decoration",
      "Space enhancement",
      "Light reflection",
      "Artistic arrangement",
    ],
  },
  {
    id: 10,
    name: "Storage Ottoman",
    slug: "storage-ottoman",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800",
    category: "Furniture",
    description:
      "Multifunctional ottoman with hidden storage space. Combines style with practicality.",
    variations: {
      name: "Fabric",
      options: ["Velvet", "Linen", "Leather", "Bouclé"],
    },
    useCases: [
      "Extra seating",
      "Storage solution",
      "Footrest",
      "Coffee table alternative",
    ],
  },
  {
    id: 11,
    name: "Rattan Accent Chair",
    slug: "rattan-accent-chair",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800",
    category: "Furniture",
    description:
      "Handwoven rattan chair with comfortable cushioning. Perfect blend of natural materials and modern comfort.",
    variations: {
      name: "Cushion Color",
      options: ["Natural", "Charcoal", "Ivory", "Sage"],
    },
    useCases: [
      "Reading nook",
      "Living room accent",
      "Sunroom seating",
      "Bedroom corner piece",
    ],
  },
  {
    id: 12,
    name: "Marble Side Table",
    slug: "marble-side-table",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=800",
    category: "Furniture",
    description:
      "Elegant side table with genuine marble top and brass-finished steel base. A perfect blend of luxury and minimalism.",
    variations: {
      name: "Marble Type",
      options: ["White Carrara", "Black Marquina", "Green Verde", "Rose Pink"],
    },
    useCases: [
      "Bedside table",
      "Living room accent",
      "Entryway table",
      "Lamp stand",
    ],
  },
  {
    id: 13,
    name: "Handwoven Wall Tapestry",
    slug: "wall-tapestry",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1615529610458-1801f844d377?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Artisanal wall tapestry handwoven from natural fibers. Each piece tells a unique story through texture and pattern.",
    variations: {
      name: "Design",
      options: ["Abstract", "Geometric", "Botanical", "Minimalist"],
    },
    useCases: [
      "Wall art",
      "Sound dampening",
      "Room focal point",
      "Textile art display",
    ],
  },
  {
    id: 14,
    name: "Ceramic Table Lamp",
    slug: "ceramic-table-lamp",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800",
    category: "Lighting",
    description:
      "Handcrafted ceramic lamp with textured finish and linen shade. Creates a warm, inviting ambiance.",
    variations: {
      name: "Color",
      options: ["Ivory", "Sage Green", "Terracotta", "Ocean Blue"],
    },
    useCases: [
      "Bedside lighting",
      "Desk lamp",
      "Accent lighting",
      "Reading light",
    ],
  },
  {
    id: 15,
    name: "Velvet Throw Blanket",
    slug: "velvet-throw-blanket",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800",
    category: "Textiles",
    description:
      "Luxuriously soft velvet throw blanket with subtle sheen. Perfect for adding warmth and texture to any space.",
    variations: {
      name: "Color",
      options: ["Deep Emerald", "Dusty Rose", "Navy Blue", "Golden"],
    },
    useCases: [
      "Couch accent",
      "Bed layering",
      "Reading nook essential",
      "Decorative drape",
    ],
  },
  {
    id: 16,
    name: "Brass Wall Sconce",
    slug: "brass-wall-sconce",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?auto=format&fit=crop&w=800",
    category: "Lighting",
    description:
      "Modern wall sconce with adjustable arm and warm brass finish. Perfect for creating focused lighting.",
    variations: {
      name: "Finish",
      options: ["Brushed Brass", "Polished Brass", "Antique Brass", "Black"],
    },
    useCases: [
      "Bedside lighting",
      "Hallway illumination",
      "Reading light",
      "Accent lighting",
    ],
  },
  {
    id: 17,
    name: "Macrame Plant Hanger",
    slug: "macrame-plant-hanger",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1615889898166-06a8dc086d03?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Handcrafted macrame plant hanger made from natural cotton rope. Adds bohemian charm to any space.",
    variations: {
      name: "Size",
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
    useCases: [
      "Plant display",
      "Boho decor",
      "Window accent",
      "Garden decoration",
    ],
  },
  {
    id: 18,
    name: "Geometric Wall Mirror",
    slug: "geometric-wall-mirror",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1618220048045-10a6b3cf9e43?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Modern geometric mirror with brass frame. Creates an illusion of space while adding contemporary style.",
    variations: {
      name: "Shape",
      options: ["Hexagon", "Circle", "Rectangle", "Arch"],
    },
    useCases: [
      "Wall decor",
      "Space enhancement",
      "Light reflection",
      "Statement piece",
    ],
  },
  {
    id: 19,
    name: "Handmade Ceramic Plates",
    slug: "ceramic-plates",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800",
    category: "Decor",
    description:
      "Set of 4 handmade ceramic plates with organic shapes and textures. Each piece is unique and food-safe.",
    variations: {
      name: "Color Scheme",
      options: ["Earth Tones", "Ocean Blues", "Desert Sand", "Forest Green"],
    },
    useCases: [
      "Dining table setting",
      "Wall display",
      "Decorative accent",
      "Serving plates",
    ],
  },
  {
    id: 20,
    name: "Linen Curtains",
    slug: "linen-curtains",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
    category: "Textiles",
    description:
      "Pure linen curtains with a subtle texture and natural drape. Filters light beautifully while maintaining privacy.",
    variations: {
      name: "Color",
      options: ["Natural", "Off-White", "Light Gray", "Oatmeal"],
    },
    useCases: [
      "Window treatment",
      "Room divider",
      "Light filtering",
      "Space definition",
    ],
  },
];
