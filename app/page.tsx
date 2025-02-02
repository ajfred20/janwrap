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
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
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

      {/* New: Design Philosophy Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1600&q=80"
                alt="Interior Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-light text-neutral-800 mb-6">
                Our Design Philosophy
              </h2>
              <p className="text-neutral-600 mb-8">
                At Maison, we believe in the power of thoughtful design to
                transform spaces and elevate daily living. Each piece in our
                collection is carefully curated to blend functionality with
                timeless elegance.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#8B7355] mb-2">
                    Sustainable Materials
                  </h3>
                  <p className="text-neutral-600">
                    Responsibly sourced materials that respect both nature and
                    craftsmanship.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#8B7355] mb-2">
                    Timeless Design
                  </h3>
                  <p className="text-neutral-600">
                    Pieces that transcend trends and remain beautiful for
                    generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New: Customer Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-light text-neutral-800 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The quality of their furniture is exceptional. My leather accent chair is both beautiful and comfortable.",
                author: "Sarah M.",
                role: "Interior Designer",
                rating: 5,
              },
              {
                text: "Maison's attention to detail and customer service exceeded my expectations. A truly luxurious experience.",
                author: "James P.",
                role: "Homeowner",
                rating: 5,
              },
              {
                text: "Their sustainable practices and timeless designs make every purchase feel like an investment in the future.",
                author: "Emily R.",
                role: "Architect",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-neutral-200"
              >
                <div className="flex text-[#8B7355] mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 mb-6">{review.text}</p>
                <div>
                  <p className="font-medium text-neutral-800">
                    {review.author}
                  </p>
                  <p className="text-sm text-neutral-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Design Services Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">
                Professional Design Services
              </h2>
              <p className="text-neutral-300 mb-8">
                Transform your space with our expert design consultation
                services. Our team of experienced interior designers will help
                you create a home that reflects your style and meets your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Personal Consultation</h3>
                    <p className="text-neutral-400">
                      One-on-one sessions with our expert designers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8B7355] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.164-5.6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Custom Solutions</h3>
                    <p className="text-neutral-400">
                      Tailored design plans for your unique space
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 px-8 py-4 bg-[#8B7355] text-white rounded-full hover:bg-[#7A6548] transition-colors">
                Book a Consultation
              </button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                alt="Interior Design Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-light text-neutral-800 text-center mb-12">
            @maison on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80",
            ].map((image, index) => (
              <a
                key={index}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* New Modern Section: Design Process */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-light mb-6">Our Design Process</h2>
            <p className="text-neutral-300">
              We believe in a thoughtful approach to design, where every detail
              matters and every piece tells a story.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Inspiration",
                description:
                  "Drawing inspiration from nature, architecture, and cultural heritage.",
              },
              {
                number: "02",
                title: "Creation",
                description:
                  "Carefully crafting each piece with attention to detail and quality materials.",
              },
              {
                number: "03",
                title: "Curation",
                description:
                  "Selecting pieces that complement each other and create harmonious spaces.",
              },
            ].map((step) => (
              <div key={step.number} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B7355] to-[#7A6548] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-neutral-900 p-8 rounded-lg border border-neutral-800">
                  <span className="text-4xl font-light text-[#8B7355] mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
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
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
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
