import React from "react";

const cards = [
  { title: "free cost analysis", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" },
];

export const Choose = () => {
  return (
    <section className="font-sans capitalize py-12">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          why choose us?
        </h2>

        <h3 className="text-lg md:text-xl mt-2 text-gray-600">
          experience a world class mobile app development services from best mobile app development company
        </h3>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-20 mt-10">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm text-left hover:shadow-md transition"
          >
            <h4 className="text-base md:text-lg font-semibold mb-2">
              {card.title}
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};