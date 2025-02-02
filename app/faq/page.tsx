"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Domestic orders typically arrive within 5-7 business days. International shipping can take 10-15 business days. All orders over $500 qualify for free shipping.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, you'll receive a tracking number via email once your order ships. You can use this to monitor your delivery status in real-time.",
      },
      {
        question: "What's your return policy?",
        answer:
          "We offer a 30-day return policy for unused items in their original packaging. Custom orders are non-returnable.",
      },
    ],
  },
  {
    category: "Products & Care",
    questions: [
      {
        question: "How do I care for my furniture?",
        answer:
          "Each piece comes with specific care instructions. Generally, we recommend regular dusting and avoiding direct sunlight to maintain the quality of your pieces.",
      },
      {
        question: "Do you offer custom sizes?",
        answer:
          "Yes, many of our pieces can be customized. Contact our customer service team for custom order inquiries.",
      },
      {
        question: "Are your products sustainably sourced?",
        answer:
          "Yes, we partner with suppliers who share our commitment to sustainable practices. Learn more on our sustainability page.",
      },
    ],
  },
  {
    category: "Account & Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and Shop Pay. For orders over $1000, we also offer financing options.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Click the account icon in the top right corner and follow the prompts to register. You can also check out as a guest.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard encryption to protect your payment information. We never store your card details.",
      },
    ],
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-neutral-800">{question}</span>
        <svg
          className={`w-5 h-5 text-neutral-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-neutral-600">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(faqs[0].category);

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-neutral-800 mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-600 text-center mb-12">
            Find answers to common questions about our products and services.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.category
                    ? "bg-[#8B7355] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs
              .find((category) => category.category === selectedCategory)
              ?.questions.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-light text-neutral-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-600 mb-6">
              Our customer service team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
