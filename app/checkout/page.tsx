"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/cart-context";
import { OrderDialog } from "@/components/order-dialog";
import { useRouter } from "next/navigation";

const VisaIcon = () => (
  <svg
    className="h-5 w-auto"
    viewBox="0 0 36 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8881 10.1545H11.9254L13.8419 0.583496H16.8045L14.8881 10.1545Z"
      fill="#00579F"
    />
    <path
      d="M25.3476 0.871645C24.7678 0.644455 23.8583 0.388672 22.7324 0.388672C19.9861 0.388672 18.0373 1.75446 18.0249 3.71043C17.9999 5.15847 19.4045 5.96184 20.4556 6.44748C21.5316 6.94554 21.8814 7.26616 21.8814 7.70561C21.8689 8.37772 21.0591 8.68592 20.3047 8.68592C19.2411 8.68592 18.6613 8.50789 17.7766 8.12643L17.4019 7.94841L17.002 10.2935C17.6939 10.5847 18.9693 10.8379 20.2944 10.8501C23.1901 10.8501 25.1016 9.50912 25.1265 7.42415C25.1389 6.26169 24.3416 5.37307 22.7199 4.64712C21.7479 4.17391 21.1557 3.84086 21.1557 3.35522C21.1682 2.91577 21.6797 2.47632 22.7199 2.47632C23.5895 2.46389 24.2317 2.67949 24.7244 2.89509L24.9746 3.01099L25.3476 0.871645Z"
      fill="#00579F"
    />
    <path
      d="M29.1747 6.67545C29.4124 6.05718 30.4261 3.42471 30.4261 3.42471C30.4136 3.44956 30.6638 2.78987 30.8145 2.37528L31.028 3.32123C31.028 3.32123 31.6576 6.13224 31.7709 6.67545C31.2345 6.67545 29.8098 6.67545 29.1747 6.67545ZM32.9467 0.583496H30.7119C30.0449 0.583496 29.5459 0.773951 29.2584 1.4213L25.1265 10.1545H28.1762C28.1762 10.1545 28.7435 8.64889 28.8692 8.33069H32.1618C32.2627 8.74528 32.5627 10.1545 32.5627 10.1545H35.2841L32.9467 0.583496Z"
      fill="#00579F"
    />
    <path
      d="M9.51051 0.583496L6.64917 7.08734L6.37401 5.85275C5.88086 4.27033 4.18212 2.53859 2.30322 1.69007L4.95712 10.142H8.01974L12.573 0.583496H9.51051Z"
      fill="#00579F"
    />
    <path
      d="M4.39492 0.583496H0.0249395L0 0.773951C3.39392 1.63247 5.63065 3.52819 6.37402 5.85275L5.45944 1.43373C5.29629 0.786457 4.89883 0.608431 4.39492 0.583496Z"
      fill="#FAA61A"
    />
  </svg>
);

const MastercardIcon = () => (
  <svg
    className="h-5 w-auto"
    viewBox="0 0 36 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.2234 2.04883H13.7766V19.9512H22.2234V2.04883Z"
      fill="#FF5F00"
    />
    <path
      d="M14.4074 11C14.4074 7.48772 16.1434 4.37188 18.8021 2.04889C16.8578 0.466947 14.3882 -0.344727 11.9186 -0.344727C5.33391 -0.344727 0 4.89307 0 11C0 17.1069 5.33391 22.3447 11.9186 22.3447C14.3882 22.3447 16.8578 21.5331 18.8021 19.9511C16.1434 17.6281 14.4074 14.5123 14.4074 11Z"
      fill="#EB001B"
    />
    <path
      d="M36 11C36 17.1069 30.6661 22.3447 24.0814 22.3447C21.6118 22.3447 19.1422 21.5331 17.1979 19.9511C19.8758 17.6281 21.5926 14.5123 21.5926 11C21.5926 7.48772 19.8566 4.37188 17.1979 2.04889C19.1422 0.466947 21.6118 -0.344727 24.0814 -0.344727C30.6661 -0.344727 36 4.89307 36 11Z"
      fill="#F79E1B"
    />
  </svg>
);

export default function Checkout() {
  const { items } = useCart();
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState<"success" | "error">(
    "success"
  );
  const router = useRouter();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // Simulate random success/failure
    const isSuccess = Math.random() > 0.3; // 70% success rate
    setOrderStatus(isSuccess ? "success" : "error");
    setIsOrderDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOrderDialogOpen(false);
    if (orderStatus === "success") {
      router.push("/shop"); // Or wherever you want to redirect after success
    }
  };

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
                    <VisaIcon />
                    <MastercardIcon />
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
                {items.map((item) => (
                  <div key={item.name} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-neutral-800 font-medium">
                        {item.name}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-[#8B7355]">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="border-t border-neutral-200 pt-6 space-y-4">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-neutral-800 font-medium pt-4 border-t border-neutral-200">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#8B7355] text-white px-8 py-4 rounded-full hover:bg-[#7A6548] transition-colors mt-8"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <OrderDialog
        isOpen={isOrderDialogOpen}
        onClose={handleCloseDialog}
        status={orderStatus}
      />
    </main>
  );
}
