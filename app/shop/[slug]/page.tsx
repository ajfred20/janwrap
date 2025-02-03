import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
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
                      className="px-6 py-2 border rounded-full text-sm text-neutral-600 hover:border-[#8B7355] hover:text-[#8B7355] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases */}
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
            <button className="w-full bg-[#8B7355] text-white py-4 rounded-full hover:bg-[#7A6548] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
