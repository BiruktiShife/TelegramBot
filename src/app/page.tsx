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
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col items-center gap-10 border border-purple-100">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 drop-shadow mb-2 text-center tracking-tight">
          Electronics Store Bot
        </h1>
        <section className="w-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6c0-2.21 3.582-4 8-4s8 1.79 8 4v8c0 2.21-3.582 4-8 4z"
              />
            </svg>
            Available Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <a
                key={p.id}
                href={`/products/${p.id}`}
                className="bg-white rounded-xl border border-purple-200 shadow-md p-6 flex flex-col items-start hover:scale-[1.03] transition-transform duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
                tabIndex={0}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 group-hover:scale-125 transition-transform"></span>
                  <span className="font-bold text-lg text-purple-800 group-hover:text-purple-600">
                    {p.name}
                  </span>
                </div>
                <div className="text-gray-600 mb-3 text-sm">
                  {p.description}
                </div>
                <div className="mt-auto font-mono text-lg text-blue-700 font-semibold">
                  ${p.price}
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="w-full mt-6">
          <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            How to Order
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-base text-gray-700 bg-purple-50/60 rounded-lg p-4 border border-purple-100">
            <li>
              Open Telegram and search for your bot (created with BotFather).
            </li>
            <li>
              Send{" "}
              <span className="font-mono bg-blue-100 px-1 rounded">/start</span>{" "}
              to begin.
            </li>
            <li>
              Send{" "}
              <span className="font-mono bg-blue-100 px-1 rounded">
                /products
              </span>{" "}
              to see the product list.
            </li>
            <li>Reply with the product number to order.</li>
            <li>Send your address to complete the order.</li>
          </ol>
          <div className="mt-4 text-sm text-gray-500 text-center">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              Note:
            </span>{" "}
            If you haven&apos;t set up your bot, follow the instructions in the
            README to get started.
          </div>
        </section>
      </div>
    </div>
  );
}
