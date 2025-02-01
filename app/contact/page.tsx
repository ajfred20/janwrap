"use client";

import React from "react";

export default function Contact() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-light text-neutral-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-neutral-600 mb-8">
              Have a question or feedback? We'd love to hear from you. Fill out
              the form below and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-medium text-neutral-800 mb-2">
                  Visit Our Store
                </h3>
                <p className="text-neutral-600">
                  123 Design District
                  <br />
                  San Francisco, CA 94110
                </p>
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 mb-2">
                  Contact Info
                </h3>
                <p className="text-neutral-600">
                  Email: hello@maison.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#8B7355]"
              />
            </div>
            <button className="bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
