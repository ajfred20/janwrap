"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light text-neutral-800">
                Our Story
              </h1>
              <p className="text-neutral-600 leading-relaxed">
                Founded in 2020, Maison began with a simple vision: to create
                thoughtfully designed pieces that transform houses into homes.
                We believe in the power of intentional design and sustainable
                craftsmanship.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/about/story.jpg"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sustainability",
                description:
                  "We're committed to using eco-friendly materials and sustainable practices in all our creations.",
              },
              {
                title: "Craftsmanship",
                description:
                  "Each piece is thoughtfully designed and crafted by skilled artisans who take pride in their work.",
              },
              {
                title: "Community",
                description:
                  "We believe in building lasting relationships with our artisans, customers, and community.",
              },
            ].map((value) => (
              <div key={value.title} className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-800">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & Creative Director" },
              { name: "Michael Chen", role: "Head of Design" },
              { name: "Emma Davis", role: "Product Development" },
              { name: "James Wilson", role: "Customer Experience" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#FAF7F2]" />
                <h3 className="font-medium text-neutral-800">{member.name}</h3>
                <p className="text-neutral-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
