import React from "react";

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

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 flex flex-col items-center gap-12">
      <h1 className="text-3xl font-bold mb-4">Electronics Store Bot</h1>
      <section className="w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-2">Available Products</h2>
        <ul className="space-y-4">
          {products.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-gray-600">{p.description}</div>
              </div>
              <div className="mt-2 sm:mt-0 font-mono text-base">${p.price}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full max-w-xl mt-8">
        <h2 className="text-lg font-semibold mb-2">How to Order</h2>
        <ol className="list-decimal list-inside space-y-1 text-base">
          <li>
            Open Telegram and search for your bot (created with BotFather).
          </li>
          <li>
            Send <span className="font-mono">/start</span> to begin.
          </li>
          <li>
            Send <span className="font-mono">/products</span> to see the product
            list.
          </li>
          <li>Reply with the product number to order.</li>
          <li>Send your address to complete the order.</li>
        </ol>
        <div className="mt-4 text-sm text-gray-500">
          Note: If you haven&apos;t set up your bot, follow the instructions in
          the README to get started.
        </div>
      </section>
    </div>
  );
}
