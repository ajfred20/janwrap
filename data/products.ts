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
];
