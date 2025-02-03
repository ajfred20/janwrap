import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/cart-context";

const clerkAppearance = {
  elements: {
    formButtonPrimary: "bg-[#8B7355] hover:bg-[#7A6548] text-sm normal-case",
    footerActionLink: "text-[#8B7355] hover:text-[#7A6548]",
    card: "bg-white shadow-none",
    headerTitle: "text-neutral-800",
    headerSubtitle: "text-neutral-600",
    socialButtonsBlockButton:
      "border-neutral-200 text-neutral-600 hover:bg-neutral-50",
    socialButtonsBlockButtonText: "text-sm font-normal",
    formFieldInput:
      "border-neutral-200 focus:border-[#8B7355] focus:ring-[#8B7355]",
    formFieldLabel: "text-neutral-600",
    footer: "hidden",
    dividerLine: "bg-neutral-200",
    dividerText: "text-neutral-600",
  },
  layout: {
    socialButtonsPlacement: "bottom" as const,
    showOptionalFields: false,
    logoPlacement: "inside" as const,
  },
};

export const metadata: Metadata = {
  title: "Maison - Luxury Home Furnishings",
  description:
    "Discover our curated collection of artisanal furniture and decor pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en">
        <body>
          <CartProvider>
            <Navigation />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
