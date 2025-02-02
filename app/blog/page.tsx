"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Design Tips",
  "Sustainability",
  "Behind the Scenes",
  "Trends",
];

const posts = [
  {
    title: "The Art of Mixing Vintage and Modern Pieces",
    excerpt:
      "Learn how to create a harmonious space by combining vintage finds with contemporary designs.",
    category: "Design Tips",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Sustainable Materials in Modern Furniture",
    excerpt:
      "Exploring eco-friendly materials that don't compromise on style or durability.",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    date: "March 12, 2024",
    readTime: "4 min read",
  },
  {
    title: "Meet Our Artisans: The Hands Behind Maison",
    excerpt:
      "Get to know the skilled craftspeople who bring our designs to life.",
    category: "Behind the Scenes",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
  {
    title: "Color Trends for Spring 2024",
    excerpt:
      "Discover the colors that will define interior design this season.",
    category: "Trends",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80",
    date: "March 8, 2024",
    readTime: "4 min read",
  },
  {
    title: "Small Space Solutions: Maximizing Your Home",
    excerpt:
      "Creative ways to make the most of limited space without sacrificing style.",
    category: "Design Tips",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    date: "March 5, 2024",
    readTime: "5 min read",
  },
  {
    title: "The Future of Sustainable Home Decor",
    excerpt:
      "Exploring innovative materials and practices shaping eco-friendly design.",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
    date: "March 1, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = posts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-light text-neutral-800 mb-4">
            The Maison Blog
          </h1>
          <p className="text-neutral-600">
            Insights, inspiration, and behind-the-scenes stories from the world
            of design.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-[#8B7355] text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-medium text-neutral-800 group-hover:text-[#8B7355] transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-600">{post.excerpt}</p>
                <span className="inline-block text-[#8B7355] text-sm">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-[#FAF7F2] rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-light text-neutral-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Get the latest articles, design tips, and behind-the-scenes stories
            delivered to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
            />
            <button className="bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
