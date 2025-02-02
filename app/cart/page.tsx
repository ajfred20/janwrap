"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

const initialCartItems: CartItem[] = [
  {
    name: "Leather Accent Chair",
    price: 299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
  },
  {
    name: "Ceramic Vase Set",
    price: 89,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <h1 className="text-4xl font-light text-neutral-800 mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-light text-neutral-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 pb-8 border-b border-neutral-200"
                  >
                    <div className="relative aspect-square w-24 sm:w-32 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="text-neutral-800 font-medium">
                            {item.name}
                          </h3>
                          <p className="text-neutral-500 text-sm">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-neutral-400 hover:text-neutral-600"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(index, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-neutral-600">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(index, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-300"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-[#8B7355] font-medium">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-neutral-50 rounded-xl p-6">
                <h2 className="text-lg font-medium text-neutral-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="text-neutral-800">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="text-neutral-800">
                      {shipping === 0 ? "Free" : `$${shipping}`}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-neutral-200">
                    <div className="flex justify-between text-base font-medium">
                      <span className="text-neutral-800">Total</span>
                      <span className="text-[#8B7355]">${total}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
                  Proceed to Checkout
                </button>
                <p className="text-center text-sm text-neutral-500 mt-4">
                  Free shipping on orders over $500
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
