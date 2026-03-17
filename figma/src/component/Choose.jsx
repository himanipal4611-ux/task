import React from "react";

const cards = [
  { title: "free cost analysis", description: "Get free cost-analysis & excellent pieces of advice on your Mobile app development idea from industry experts", isActive : true},
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!",isActive : false },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!",isActive : false },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" ,isActive : false},
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!",isActive : false },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!",isActive : false },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!",isActive : false },
  { title: "fast delivery", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, eos dolorum dolorem in ipsam nemo qui labore!" ,isActive : false},
];

export const Choose = () => {
  return (
    <section className="py-16 sm:py-20  sm:px-6">
      <div className="max-w-7xl mx-auto lg:text-base">
            <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            why choose us?
          </h2>
          <h3 className=" max-w-full text-base sm:text-lg md:text-xl text-gray-600">
            experience a world class mobile app development services from best mobile app development company
          </h3>
        </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 px-20 tracking-wider">
          {cards.map((card, index) => (
            <div
              key={index}
              
              className={`bg-white p-4
                 shadow-sm hover:shadow-md transition border-[3px] border-solid ${card.isActive === true ? "border-blue-500" : "border-gray-100"}`}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-3 capitalize">
                {card.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};