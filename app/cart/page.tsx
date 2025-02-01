"use client";

import React from "react";
import Image from "next/image";

const cartItems = [
  {
    name: "Leather Accent Chair",
    price: 299,
    quantity: 1,
    image: "/products/chair.jpg",
  },
  // Add more items...
];

export default function Cart() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h1 className="text-4xl font-light text-neutral-800 mb-12">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex gap-6 py-6 border-b border-neutral-200"
              >
                <div className="relative w-24 aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-neutral-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[#8B7355]">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={item.quantity}
                    className="px-3 py-2 rounded-lg border border-neutral-200"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button className="text-neutral-400 hover:text-neutral-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAF7F2] rounded-xl p-6">
              <h2 className="text-lg font-medium text-neutral-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-medium text-neutral-800 pt-4 border-t border-neutral-200">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <button className="w-full bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
