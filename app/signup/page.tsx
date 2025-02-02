"use client";

import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-neutral-800 mb-3">
              Create an Account
            </h1>
            <p className="text-neutral-600">
              Join us to start shopping our curated collection
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-200">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg border text-neutral-600 border-neutral-200 focus:outline-none focus:border-[#8B7355]"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#8B7355] border-neutral-300 rounded focus:ring-[#8B7355]"
                />
                <label className="ml-2 text-sm text-neutral-600">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[#8B7355] hover:text-[#7A6548] transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#8B7355] hover:text-[#7A6548] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B7355] text-white px-8 py-3 rounded-full hover:bg-[#7A6548] transition-colors"
              >
                Create Account
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-neutral-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#8B7355] hover:text-[#7A6548] transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
