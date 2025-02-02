"use client";

import React from "react";
import Image from "next/image";

export default function Checkout() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h1 className="text-3xl font-light text-neutral-800 mb-8">
              Checkout
            </h1>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Contact Information
              </h2>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
              />
            </div>

            {/* Shipping Address */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 mt-4 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full px-4 py-3 mt-4 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
              />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-medium text-neutral-800 mb-4">
                Payment
              </h2>
              <div className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      className="text-[#8B7355] focus:ring-[#8B7355]"
                      defaultChecked
                    />
                    <label htmlFor="card" className="text-neutral-800">
                      Credit Card
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/visa.svg"
                      alt="Visa"
                      width={32}
                      height={20}
                      className="h-5 w-auto"
                    />
                    <Image
                      src="/mastercard.svg"
                      alt="Mastercard"
                      width={32}
                      height={20}
                      className="h-5 w-auto"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355] mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:pl-12">
            <div className="bg-[#FAF7F2] rounded-2xl p-8">
              <h2 className="text-lg font-medium text-neutral-800 mb-6">
                Order Summary
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80"
                      alt="Product"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-neutral-800 font-medium">
                      Leather Accent Chair
                    </h3>
                    <p className="text-neutral-600 text-sm">Quantity: 1</p>
                    <p className="text-[#8B7355]">$299</p>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="border-t border-neutral-200 pt-6 space-y-4">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>$299</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-neutral-800 font-medium pt-4 border-t border-neutral-200">
                  <span>Total</span>
                  <span>$299</span>
                </div>
              </div>

              <button className="w-full bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors mt-8">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
