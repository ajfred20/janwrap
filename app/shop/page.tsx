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
import Link from "next/link";
import { products } from "@/data/products";

const categories = ["All", "Furniture", "Decor", "Lighting", "Textiles"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

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
  const [itemsAddedCount, setItemsAddedCount] = useState(0);
  const [lastDialogShown, setLastDialogShown] = useState(0);

  const shouldShowDialog = (count: number) => {
    // Show dialog on first item and then every 3 items after continuing shopping
    return (
      count === 1 ||
      (count > lastDialogShown && (count - lastDialogShown) % 3 === 0)
    );
  };

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
      default:
        // Featured - no specific sorting
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort, priceRange]);

  const handleAddToCart = (product: (typeof products)[0]) => {
    setSelectedProduct(product.name);
    setAddedToCart((prev) => ({ ...prev, [product.name]: true }));

    const newCount = itemsAddedCount + 1;
    setItemsAddedCount(newCount);

    if (shouldShowDialog(newCount)) {
      setIsDialogOpen(true);
    }

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
    setLastDialogShown(itemsAddedCount);
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
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-800">
                {product.name}
              </h3>
              <p className="text-[#8B7355]">${product.price}</p>
            </Link>
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
