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
 <div>
     <section className="font-sans tracking-tighter py-10">
      <h2 className="text-center font-medium  text-3xl capitalize">A complete feature-suite to build your custom mobile apps</h2>
      <h3 className="text-center font-normal text-2xl capitalize pb-10">We offer end-to-end features to drive engagement & revenue for your brand</h3>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto text-center capitalize font-normal text-xl">
        {apps.map((app, index) => (
          <div className="flex flex-col items-center outline  outline-blue-100 py-10" key={index}>
            <img src={app.image} alt={app.title} />
            <h4>{app.title}</h4>
          </div>
        ))}
      </div>
    </section>
 </div>
  );
};