"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { useCart } from "@/contexts/cart-context";
import { toast } from "react-hot-toast";
import { useState, use } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [selectedVariation, setSelectedVariation] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
      variation: selectedVariation,
    });
    setIsDialogOpen(true);
    toast.success("Added to cart");
  };

  // Find related products in the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="pt-32 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#8B7355] mb-2">{product.category}</p>
              <h1 className="text-3xl font-light text-neutral-800 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-[#8B7355]">${product.price}</p>
            </div>

            <div className="prose prose-neutral">
              <p className="text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variations */}
            {product.variations && (
              <div>
                <h3 className="text-sm font-medium text-neutral-800 mb-3">
                  {product.variations.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variations.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedVariation(option)}
                      className={`px-6 py-2 border rounded-full text-sm transition-colors ${
                        selectedVariation === option
                          ? "border-[#8B7355] text-[#8B7355] bg-white"
                          : "text-neutral-600 hover:border-[#8B7355] hover:text-[#8B7355] bg-white"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.useCases && (
              <div>
                <h3 className="text-sm font-medium text-neutral-800 mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  {product.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#8B7355] mt-0.5 flex-shrink-0"
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
                      <span className="text-neutral-600">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#8B7355] text-white py-4 rounded-full hover:bg-[#7A6548] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="text-2xl font-light text-neutral-800 mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-[#8B7355]">${relatedProduct.price}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add to Cart Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl text-neutral-800 font-medium text-center">
              Added to Cart Successfully!
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-6 py-6 border-y border-neutral-200">
            <div className="relative w-24 h-24 bg-[#FAF7F2] rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-neutral-800 mb-1">
                {product.name}
              </h3>
              <p className="text-[#8B7355] font-medium">${product.price}</p>
              {selectedVariation && (
                <p className="text-sm text-neutral-600 mt-1">
                  {product.variations?.name}: {selectedVariation}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="flex gap-3 mt-6">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="flex-1 px-4 py-3 border border-neutral-200 rounded-full text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Continue Shopping
            </button>
            <Link
              href="/cart"
              className="flex-1 px-4 py-3 bg-[#8B7355] text-white rounded-full hover:bg-[#7A6548] transition-colors text-center"
            >
              View Cart
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
