"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <h1 className="text-8xl font-light text-neutral-800 mb-6">404</h1>
        <h2 className="text-2xl font-light text-neutral-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
