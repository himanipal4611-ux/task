import React from "react";
import feature01 from "../assets/Features/feature01.png";
import feature02 from "../assets/Features/feature02.png";
import feature03 from "../assets/Features/feature03.png";
import feature04 from "../assets/Features/feature04.png";
import feature05 from "../assets/Features/feature05.png";
import feature06 from "../assets/Features/feature06.png";
import feature07 from "../assets/Features/feature07.png";
import feature08 from "../assets/Features/feature08.png";
import feature09 from "../assets/Features/feature09.png";

const apps = [
  { title: "Multiple payment", image: feature01 },
  { title: "Advanced analytical", image: feature02 },
  { title: "Mobile friendly", image: feature03 },
  { title: "Multi-language", image: feature04 },
  { title: "Discount & promo", image: feature05 },
  { title: "Reviews & ratings", image: feature06 },
  { title: "Geo-location", image: feature07 },
  { title: "Push notification", image: feature08 },
  { title: "Integrated chat system", image: feature09 },
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          A complete feature-suite to build your custom mobile apps
        </h2>
        <h3 className="text-center text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer end-to-end features to drive engagement & revenue for your brand
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {apps.map((app, index) => (
            <div
              className="flex flex-col items-center border border-blue-100 rounded-xl p-6 md:p-8 shadow-lg transition"
              key={index}
            >
              <img src={app.image} alt={app.title} className="h-12 sm:h-14 md:h-16 mb-4" />
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-center">{app.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};