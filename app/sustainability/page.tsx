"use client";

import React from "react";
import Image from "next/image";

const initiatives = [
  {
    title: "Responsible Sourcing",
    description:
      "We partner with suppliers who share our commitment to sustainable practices and ethical labor conditions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Zero Waste Production",
    description:
      "Our manufacturing process is designed to minimize waste and maximize material efficiency.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "All our packaging materials are recyclable or biodegradable, reducing environmental impact.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

export default function Sustainability() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
          alt="Sustainability"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                Our Commitment to Sustainability
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Building a better future through conscious design and
                responsible practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 text-[#8B7355] bg-[#FAF7F2] rounded-xl flex items-center justify-center">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-neutral-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-neutral-800">
                Our Environmental Impact
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  We believe that beautiful design and environmental
                  responsibility go hand in hand. Our commitment to
                  sustainability extends beyond our products to every aspect of
                  our business.
                </p>
                <p>
                  Through careful material selection, efficient production
                  processes, and partnerships with eco-conscious suppliers,
                  we're working to minimize our environmental footprint while
                  maximizing our positive impact.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80"
                alt="Environmental impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
