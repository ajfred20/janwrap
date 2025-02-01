"use client";

import React from "react";
import Image from "next/image";

const collections = [
  {
    name: "Summer 2024",
    description: "Light and airy pieces for the warmer months",
    image: "/collections/summer.jpg",
  },
  // Add more collections...
];

export default function Collections() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light text-neutral-800 mb-12">
          Collections
        </h1>

        <div className="grid md:grid-cols-2 gap-12 pb-20">
          {collections.map((collection) => (
            <div key={collection.name} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-medium text-neutral-800 mb-2">
                {collection.name}
              </h2>
              <p className="text-neutral-600">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
