"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Leather Accent Chair",
    price: "$299",
    image: "/products/chair.jpg",
    category: "Furniture",
  },
  // Add more products...
];

export default function Shop() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light text-neutral-800 mb-8">Shop All</h1>

        {/* Filters */}
        <div className="flex gap-8 mb-12 pb-8 border-b border-neutral-200">
          <select className="px-4 py-2 rounded-full border border-neutral-200">
            <option>Category</option>
            <option>Furniture</option>
            <option>Decor</option>
          </select>
          <select className="px-4 py-2 rounded-full border border-neutral-200">
            <option>Price Range</option>
            <option>$0 - $100</option>
            <option>$100 - $500</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-neutral-500 text-sm mb-1">
                {product.category}
              </p>
              <h3 className="text-neutral-800 font-medium mb-2">
                {product.name}
              </h3>
              <p className="text-[#8B7355]">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
