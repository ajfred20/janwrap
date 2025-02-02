"use client";

import React from "react";
import Image from "next/image";

const shippingInfo = [
  {
    title: "Free Shipping",
    description: "On all orders over $500",
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
  {
    title: "Express Delivery",
    description: "2-3 business days",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    description: "30-day return window",
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
          d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
        />
      </svg>
    ),
  },
];

const returnSteps = [
  {
    number: "01",
    title: "Initiate Return",
    description:
      "Log into your account and select the items you wish to return.",
  },
  {
    number: "02",
    title: "Package Items",
    description: "Carefully pack items in their original packaging.",
  },
  {
    number: "03",
    title: "Ship Back",
    description: "Use our prepaid shipping label to send items back.",
  },
  {
    number: "04",
    title: "Refund",
    description: "Receive your refund within 5-7 business days of receipt.",
  },
];

export default function Shipping() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2000&q=80"
          alt="Shipping"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                Shipping & Returns
              </h1>
              <p className="text-lg text-white/90">
                Fast, reliable shipping and hassle-free returns on all orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {shippingInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 text-[#8B7355] bg-[#FAF7F2] rounded-xl flex items-center justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-neutral-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Details */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-neutral-800 mb-6">
                Shipping Information
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  We offer worldwide shipping on all orders. Standard shipping
                  takes 5-7 business days for domestic orders and 10-15 business
                  days for international orders.
                </p>
                <p>
                  All orders over $500 qualify for free shipping. For orders
                  under $500, shipping costs are calculated at checkout based on
                  your location and the items in your cart.
                </p>
                <p>
                  Express shipping is available for an additional fee and
                  typically delivers within 2-3 business days domestically.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-neutral-800 mb-6">
                Return Policy
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  We want you to be completely satisfied with your purchase. If
                  you're not happy with your order, you can return it within 30
                  days of delivery.
                </p>
                <p>
                  Items must be unused and in their original packaging. Custom
                  orders are non-returnable unless damaged during shipping.
                </p>
                <p>
                  We provide free return shipping labels for all domestic
                  returns. International returns are the responsibility of the
                  customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-light text-neutral-800 mb-12 text-center">
            How to Return
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {returnSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-medium">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
