"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#FAF7F2] rounded-2xl p-6 space-y-6">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h2 className="text-lg font-medium text-neutral-800">
                  Sarah Anderson
                </h2>
                <p className="text-neutral-600 text-sm">Member since 2024</p>
              </div>

              <nav className="space-y-2">
                <Link
                  href="/profile"
                  className="block w-full text-left px-4 py-2 rounded-lg bg-[#8B7355] text-white"
                >
                  Profile Overview
                </Link>
                <Link
                  href="/profile/orders"
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Order History
                </Link>
                <Link
                  href="/profile/addresses"
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Saved Addresses
                </Link>
                <Link
                  href="/profile/settings"
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Settings
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-8">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah"
                    className="w-full px-4 py-2 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Anderson"
                    className="w-full px-4 py-2 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="sarah@example.com"
                    className="w-full px-4 py-2 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
              </div>
              <button className="mt-6 bg-[#8B7355] text-white px-6 py-2 rounded-full hover:bg-[#7A6548] transition-colors">
                Save Changes
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Recent Orders
              </h3>
              <div className="space-y-4">
                {[1, 2].map((order) => (
                  <div
                    key={order}
                    className="flex items-center justify-between p-4 rounded-lg border border-neutral-200"
                  >
                    <div>
                      <p className="font-medium text-neutral-800">
                        Order #{order}23456
                      </p>
                      <p className="text-sm text-neutral-600">
                        Placed on Jan {order + 14}, 2024
                      </p>
                    </div>
                    <button className="text-[#8B7355] hover:text-[#7A6548] transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
