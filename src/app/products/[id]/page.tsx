import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299,
    description: "Latest model smartphone.",
  },
  {
    id: 2,
    name: "Laptop",
    price: 799,
    description: "High performance laptop.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 59,
    description: "Noise-cancelling earbuds.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 149,
    description: "Feature-rich smartwatch.",
  },
];

type ProductDetailPageProps = {
  params: { id: string };
};

export default async function ProductDetailPage(props: ProductDetailPageProps) {
  const params = await props.params;
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col items-center gap-8 border border-purple-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 drop-shadow text-center mb-2">
          {product.name}
        </h1>
        <div className="text-gray-700 text-lg mb-4 text-center">
          {product.description}
        </div>
        <div className="font-mono text-2xl text-blue-700 font-semibold mb-6">
          ${product.price}
        </div>
        <div className="bg-purple-50/60 rounded-lg p-4 border border-purple-100 text-base text-gray-700 w-full text-center">
          To order this product, open Telegram and send the product number{" "}
          <span className="font-mono bg-blue-100 px-1 rounded">
            {product.id}
          </span>{" "}
          to your bot.
        </div>
        <Link href="/" className="mt-6 text-blue-600 hover:underline">
          ← Back to products
        </Link>
      </div>
    </div>
  );
}
