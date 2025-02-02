"use client";

import React from "react";
import Image from "next/image";

const collections = [
  {
    name: "Summer 2024",
    description: "Light and airy pieces for the warmer months",
    image:
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1200&q=80",
    itemCount: "42 pieces",
  },
  {
    name: "Minimalist Living",
    description: "Clean lines and timeless design for modern spaces",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    itemCount: "38 pieces",
  },
  {
    name: "Artisan Crafted",
    description: "Handcrafted pieces with unique character",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    itemCount: "29 pieces",
  },
  {
    name: "Scandinavian Edit",
    description: "Nordic-inspired designs for cozy living",
    image:
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1200&q=80",
    itemCount: "45 pieces",
  },
  {
    name: "Natural Elements",
    description: "Organic materials and earth tones",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    itemCount: "31 pieces",
  },
  {
    name: "Urban Luxe",
    description: "Contemporary pieces for city living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    itemCount: "35 pieces",
  },
];

export default function Collections() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-light text-neutral-800 mb-4">
            Our Collections
          </h1>
          <p className="text-neutral-600">
            Explore our thoughtfully curated collections, each telling a unique
            story through design, materials, and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 pb-20">
          {collections.map((collection) => (
            <div key={collection.name} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-medium text-white mb-2">
                    {collection.name}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {collection.itemCount}
                  </p>
                </div>
              </div>
              <p className="text-neutral-600">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
