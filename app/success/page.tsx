"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/contexts/cart-context";
import { CheckCircle2, Truck, Mail, Phone } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCart();

  // Clear cart on successful order
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="pt-32 pb-20 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-light text-neutral-800 mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-neutral-600">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-8">
            <h2 className="text-xl font-medium text-neutral-800 mb-6">
              Next Steps
            </h2>

            {/* Delivery Timeline */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Truck className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 mb-2">
                  Delivery Timeline
                </h3>
                <p className="text-neutral-600">
                  Your order will be processed within 1-2 business days. Expected
                  delivery time is 3-5 business days.
                </p>
              </div>
            </div>

            {/* Email Updates */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 mb-2">
                  Track Your Order
                </h3>
                <p className="text-neutral-600">
                  You'll receive an email with tracking information once your order
                  ships. Check your spam folder if you don't see it.
                </p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <h3 className="font-medium text-neutral-800 mb-2">
                  Need Help?
                </h3>
                <p className="text-neutral-600">
                  Our support team is available Monday-Friday, 9am-5pm EST.
                  Contact us at support@maison.com
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href="/shop"
              className="flex-1 px-6 py-3 text-center border border-neutral-200 rounded-full text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/profile"
              className="flex-1 px-6 py-3 text-center bg-[#8B7355] text-white rounded-full hover:bg-[#7A6548] transition-colors"
            >
              View Order History
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 