"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/contexts/cart-context";

const products = [
  {
    name: "Leather Accent Chair",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    name: "Ceramic Vase Set",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isNew: false,
    rating: 4.5,
    reviews: 89,
  },
  {
    name: "Modern Coffee Table",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: false,
    rating: 4.7,
    reviews: 156,
  },
  {
    name: "Linen Throw Pillow",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    isNew: true,
    rating: 4.3,
    reviews: 67,
  },
  {
    name: "Pendant Light Fixture",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    isNew: false,
    rating: 4.6,
    reviews: 94,
  },
  {
    name: "Woven Area Rug",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    isNew: false,
    rating: 4.4,
    reviews: 112,
  },
  {
    name: "Marble Side Table",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: true,
    rating: 4.9,
    reviews: 78,
  },
  {
    name: "Wall Mirror Set",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isNew: false,
    rating: 4.7,
    reviews: 143,
  },
  {
    name: "Velvet Dining Chair",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: false,
    rating: 4.6,
    reviews: 98,
  },
  {
    name: "Brass Floor Lamp",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    isNew: true,
    rating: 4.8,
    reviews: 67,
  },
  {
    name: "Woven Basket Set",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1622153093514-4dd0078ac132?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Decor",
    isNew: false,
    rating: 4.4,
    reviews: 45,
  },
  {
    name: "Teak Wood Shelf",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: false,
    rating: 4.7,
    reviews: 89,
  },
  {
    name: "Macrame Wall Hanging",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isNew: true,
    rating: 4.5,
    reviews: 56,
  },
  {
    name: "Linen Bedding Set",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    isNew: false,
    rating: 4.9,
    reviews: 178,
  },
  {
    name: "Concrete Planter",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isNew: false,
    rating: 4.3,
    reviews: 34,
  },
  {
    name: "Rattan Armchair",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    isNew: true,
    rating: 4.8,
    reviews: 145,
  },
  {
    name: "Glass Pendant Light",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    isNew: false,
    rating: 4.6,
    reviews: 87,
  },
  {
    name: "Wool Throw Blanket",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    isNew: false,
    rating: 4.7,
    reviews: 93,
  },
];

const categories = ["All", "Furniture", "Decor", "Lighting", "Textiles"];
const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [priceRange, setPriceRange] = useState([0]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const router = useRouter();
  const { addItem } = useCart();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply price filter
    filtered = filtered.filter((product) => product.price >= priceRange[0]);

    // Apply sorting
    switch (selectedSort) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Most Popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Featured - no specific sorting
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort, priceRange]);

  const handleAddToCart = (product: (typeof products)[0]) => {
    setSelectedProduct(product.name);
    setAddedToCart((prev) => ({ ...prev, [product.name]: true }));
    setIsDialogOpen(true);
    addItem({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success("Added to cart");

    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.name]: false }));
    }, 2000);
  };

  const handleContinueShopping = () => {
    setIsDialogOpen(false);
  };

  const handleProceedToCheckout = () => {
    router.push("/cart");
  };

  return (
    <main className="bg-white pt-32">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-light text-neutral-800 mb-2">
              Shop All
            </h1>
            <p className="text-neutral-600">
              Discover our curated collection of premium pieces
            </p>
          </div>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="mt-4 md:mt-0 flex items-center gap-2 text-neutral-600 hover:text-[#8B7355] transition-colors md:hidden"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 4h18M3 12h18M3 20h18"
              />
            </svg>
            Filters
          </button>
        </div>

        {/* Filters Section */}
        <div
          className={`${
            isFiltersOpen ? "block" : "hidden"
          } md:block border-b border-neutral-200 pb-6 mb-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Categories */}
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-[#8B7355] text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range with Shadcn Slider */}
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Price Range
              </label>
              <div className="space-y-4">
                <Slider
                  defaultValue={[0]}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full"
                />
                <span className="text-sm text-neutral-600">
                  ${priceRange[0]} - $1000
                </span>
              </div>
            </div>

            {/* Sort with Shadcn Select */}
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Sort By
              </label>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select sorting" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pb-20">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.name} className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-[#8B7355] text-white text-xs px-3 py-1 rounded-full">
                    New
                  </div>
                )}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 text-neutral-600 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#8B7355] hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-neutral-500 text-sm">{product.category}</p>
                <h3 className="text-neutral-800 font-medium group-hover:text-[#8B7355] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#8B7355]"
                            : "text-neutral-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-500">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-[#8B7355] font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[90vw] max-w-md mx-auto p-4 sm:p-6 rounded-lg">
          <DialogHeader className="space-y-2 sm:space-y-3">
            <DialogTitle className="text-lg sm:text-xl text-neutral-800">
              Item Added to Cart
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-neutral-600">
              Would you like to proceed to checkout or continue shopping?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
            <button
              onClick={handleContinueShopping}
              className="w-full sm:flex-1 px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border border-neutral-200 text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleProceedToCheckout}
              className="w-full sm:flex-1 px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-[#8B7355] text-white hover:bg-[#7A6548] transition-colors"
            >
              Proceed to Checkout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
