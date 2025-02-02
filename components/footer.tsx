"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Shop",
    links: ["All Products", "Featured", "New Arrivals", "Best Sellers"],
  },
  {
    title: "About",
    links: ["Our Story", "Artisans", "Sustainability", "Blog"],
  },
  {
    title: "Support",
    links: ["FAQ", "Shipping", "Returns", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-medium text-[#8B7355] mb-4 block"
            >
              maison
            </Link>
            <p className="text-neutral-600 mb-6 max-w-sm">
              Curating beautiful spaces with thoughtfully designed pieces that
              bring warmth and elegance to your home.
            </p>
            <div className="flex gap-4">
              {["twitter", "instagram", "facebook", "pinterest"].map(
                (social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-neutral-600 hover:bg-[#8B7355] hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Add appropriate social media icon paths */}
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="font-medium text-neutral-800 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-[#8B7355] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#8B7355] transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-[#8B7355] transition-colors">
              Terms
            </Link>
          </div>
          <p>© 2024 Maison. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Template Built with ❤️ by</span>
            <Link
              href="https://x.com/iamajfred_"
              target="_blank"
              className="text-[#8B7355] hover:text-[#7A6548] transition-colors font-medium"
            >
              Aj Fred
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
