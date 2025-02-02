"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SearchResult = {
  name: string;
  price: number;
  image: string;
  category: string;
};

const mockProducts = [
  {
    name: "Leather Accent Chair",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
  },
  {
    name: "Ceramic Vase Set",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
  },
  // Add more products as needed
];

export function SearchDialog({
  isOpen,
  onOpenChangeAction,
}: {
  isOpen: boolean;
  onOpenChangeAction: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    onOpenChangeAction(false);
    // Reset search
    setSearchQuery("");
    setResults([]);
    // Navigate to product (you might want to adjust this based on your routing)
    router.push(`/shop`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChangeAction}>
      <DialogContent className="sm:max-w-2xl p-0">
        <DialogTitle className="sr-only">Search Products</DialogTitle>
        <div className="border-b border-neutral-200">
          <div className="flex items-center px-4">
            <svg
              className="w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-6 text-neutral-800 placeholder-neutral-400 bg-transparent border-0 focus:outline-none focus:ring-0"
              autoFocus
            />
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto py-4">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((result) => (
                <button
                  key={result.name}
                  onClick={() => handleSelectResult(result)}
                  className="w-full px-4 py-2 hover:bg-neutral-50 flex items-center gap-4 transition-colors"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={result.image}
                      alt={result.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-neutral-800 font-medium">
                      {result.name}
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      {result.category}
                    </p>
                    <p className="text-[#8B7355]">${result.price}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="px-4 py-8 text-center">
              <p className="text-neutral-600">
                No results found for "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-neutral-600">
                Start typing to search for products
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
