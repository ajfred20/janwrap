import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/cart-context";

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
  );
}
