"use client";

import React from "react";
import Image from "next/image";

const featuredProducts = [
  {
    name: "Leather Accent Chair",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
  },
  {
    name: "Ceramic Vase Set",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
  },
  {
    name: "Wooden Coffee Table",
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1532372320978-9b6d003b5b4d?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
  },
  {
    name: "Linen Throw Pillow",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
  },
];

const categories = [
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    count: "124 items",
  },
  {
    name: "Decor",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    count: "86 items",
  },
  {
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    count: "53 items",
  },
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
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Featured collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Improved mobile layout */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 md:mb-12 text-center lg:text-left">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-medium mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {category.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Better mobile grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 md:mb-12 text-center lg:text-left">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 md:mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-neutral-500 text-xs md:text-sm mb-1">
                  {product.category}
                </p>
                <h3 className="text-neutral-800 font-medium text-sm md:text-base mb-1 md:mb-2">
                  {product.name}
                </h3>
                <p className="text-[#8B7355] text-sm md:text-base">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy - Responsive layout */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80"
                alt="Our design philosophy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 md:space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-800">
                Our Design Philosophy
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We believe in creating spaces that tell your story. Each piece
                in our collection is thoughtfully crafted to bring both function
                and beauty to your home, creating an environment that&apos;s
                uniquely yours.
              </p>
              <button className="text-[#8B7355] font-medium hover:text-[#7A6548] transition-colors inline-flex items-center gap-2">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed - Responsive grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 md:mb-12 text-center lg:text-left">
            @maison on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: 4 }).map((_, i) => {
              const images = [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80",
              ];
              return (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={images[i]}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews - Mobile friendly */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 md:mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <div className="flex gap-1 md:gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-[#8B7355]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 text-sm md:text-base mb-4 md:mb-6">
                  &quot;Absolutely love the quality and design of every piece.
                  The attention to detail is remarkable.&quot;
                </p>
                <div className="text-neutral-800 font-medium text-sm md:text-base">
                  Sarah Mitchell
                </div>
                <div className="text-neutral-500 text-xs md:text-sm">
                  Verified Customer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Mobile optimized */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-3 md:mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-neutral-600 text-sm md:text-base mb-6 md:mb-8">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
            />
            <button className="bg-[#8B7355] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#7A6548] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
