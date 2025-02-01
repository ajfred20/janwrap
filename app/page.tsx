"use client";

import React from "react";
import Image from "next/image";

const featuredProducts = [
  {
    name: "Leather Accent Chair",
    price: "$299",
    image: "/products/chair.jpg",
    category: "Furniture",
  },
  {
    name: "Ceramic Vase Set",
    price: "$89",
    image: "/products/vase.jpg",
    category: "Decor",
  },
  // Add more products
];

const categories = [
  {
    name: "Furniture",
    image: "/categories/furniture.jpg",
    count: "124 items",
  },
  {
    name: "Decor",
    image: "/categories/decor.jpg",
    count: "86 items",
  },
  // Add more categories
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-800 leading-tight">
                Timeless pieces for your
                <span className="text-[#8B7355]"> home</span>
              </h1>
              <p className="text-neutral-600 text-lg md:text-xl max-w-xl">
                Discover our curated collection of artisanal furniture and decor
                pieces that bring warmth and elegance to your space.
              </p>
              <button className="bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
                Shop Collection
              </button>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/hero-image.jpg"
                alt="Featured collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-medium mb-1">{category.name}</h3>
                  <p className="text-white/80">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/design-philosophy.jpg"
                alt="Our design philosophy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-neutral-800">
                Our Design Philosophy
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We believe in creating spaces that tell your story. Each piece
                in our collection is thoughtfully crafted to bring both function
                and beauty to your home, creating an environment that's uniquely
                yours.
              </p>
              <button className="text-[#8B7355] font-medium hover:text-[#7A6548] transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12">
            @maison on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/instagram/${i + 1}.jpg`}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#8B7355]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6">
                  "Absolutely love the quality and design of every piece. The
                  attention to detail is remarkable."
                </p>
                <div className="text-neutral-800 font-medium">
                  Sarah Mitchell
                </div>
                <div className="text-neutral-500 text-sm">
                  Verified Customer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-neutral-800 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-neutral-600 mb-8">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
            />
            <button className="bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
