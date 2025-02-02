"use client";

import React from "react";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Personal information (name, email, address, phone number)",
      "Payment information (processed securely through our payment providers)",
      "Device information and browsing data",
      "Order history and preferences",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Process and fulfill your orders",
      "Send order updates and shipping notifications",
      "Provide customer support",
      "Improve our products and services",
      "Send marketing communications (with your consent)",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We never sell your personal information",
      "Shared only with service providers who help us operate",
      "May be disclosed if required by law",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access your personal information",
      "Request corrections or deletions",
      "Opt out of marketing communications",
      "Data portability",
    ],
  },
  {
    title: "Security Measures",
    content: [
      "Industry-standard encryption",
      "Regular security assessments",
      "Strict access controls",
      "Secure data storage",
    ],
  },
];

export default function Privacy() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <h1 className="text-4xl font-light text-neutral-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 mb-12">Last updated: March 15, 2024</p>

        <div className="prose prose-neutral max-w-none">
          <p className="lead">
            At Maison, we take your privacy seriously. This policy describes how
            we collect, use, and protect your personal information when you use
            our website and services.
          </p>

          {sections.map((section) => (
            <div key={section.title} className="mt-12">
              <h2 className="text-2xl font-light text-neutral-800 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2 text-neutral-600">
                {section.content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5">
                      <svg
                        className="w-4 h-4 text-[#8B7355]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-12">
            <h2 className="text-2xl font-light text-neutral-800 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600">
              If you have any questions about our privacy policy or how we
              handle your data, please contact our privacy team at{" "}
              <a
                href="mailto:privacy@maison.com"
                className="text-[#8B7355] hover:text-[#7A6548]"
              >
                privacy@maison.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
