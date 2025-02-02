"use client";

import React from "react";
import Image from "next/image";

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every piece is thoughtfully crafted with attention to detail and quality materials.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We're committed to responsible sourcing and eco-friendly practices.",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Blending traditional techniques with modern design sensibilities.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    bio: "With over 15 years in interior design, Sarah brings her vision of timeless elegance to every piece.",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Michael's innovative approach combines traditional craftsmanship with modern aesthetics.",
  },
  {
    name: "Emma Davis",
    role: "Product Development",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    bio: "Emma ensures each product meets our high standards of quality and sustainability.",
  },
  {
    name: "James Wilson",
    role: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "James leads our commitment to exceptional service and customer satisfaction.",
  },
];

export default function About() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=2000&q=80"
          alt="Our workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                Crafting Beauty for Your Home
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Founded in 2020, Maison began with a simple vision: to create
                thoughtfully designed pieces that transform houses into homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-4">
              Our Values
            </h2>
            <p className="text-neutral-600">
              These core principles guide everything we do, from design to
              delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 text-[#8B7355] bg-[#FAF7F2] rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-neutral-800">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  What started as a small workshop has grown into a community of
                  artisans, designers, and craftspeople who share a passion for
                  beautiful, functional design.
                </p>
                <p>
                  We believe in the power of thoughtful design to enhance daily
                  life. Each piece in our collection is created with intention,
                  combining traditional craftsmanship with contemporary
                  aesthetics.
                </p>
                <p>
                  Our commitment to sustainability guides every decision, from
                  material sourcing to packaging, ensuring we create pieces that
                  are kind to both your home and the environment.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-neutral-600">
              The passionate individuals behind our vision.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#8B7355] text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
