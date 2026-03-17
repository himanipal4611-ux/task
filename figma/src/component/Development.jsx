import React from "react";

// imges (keeping your imports)
import service1 from "../assets/Images/img01.png";
import service2 from "../assets/Images/img02.png";
import service3 from "../assets/Images/img03.png";
import service4 from "../assets/Images/img04.png";
import service5 from "../assets/Images/img05.png";
import service6 from "../assets/Images/img06.png";
import service7 from "../assets/Images/img07.png";
import service8 from "../assets/Images/img08.png";
import service9 from "../assets/Images/img09.png";
import service10 from "../assets/Images/img010.png";
import service11 from "../assets/Images/img011.png";
import service12 from "../assets/Images/img012.png";
import service13 from "../assets/Images/img013.png";
import service14 from "../assets/Images/img014.png";
import service15 from "../assets/Images/img015.png";

import icon01 from "../assets/Icons/icon01.png";
import icon02 from "../assets/Icons/icon02.png";
import icon03 from "../assets/Icons/icon03.png";
import icon04 from "../assets/Icons/icon04.png";
import icon05 from "../assets/Icons/icon05.png";
import icon06 from "../assets/Icons/icon06.png";
import icon07 from "../assets/Icons/icon07.png";
import icon08 from "../assets/Icons/icon08.png";
import icon09 from "../assets/Icons/icon09.png";
import icon010 from "../assets/Icons/icon010.png";
import icon011 from "../assets/Icons/icon011.png";
import icon012 from "../assets/Icons/icon012.png";
import icon013 from "../assets/Icons/icon013.png";
import icon014 from "../assets/Icons/icon014.png";
import icon015 from "../assets/Icons/icon015.png";

const services = [
  { title: "On-Demand App Solution", img: service1, icon: icon01 },
  { title: "Ecommerce & Marketplace Solution", img: service2, icon: icon02 },
  { title: "Food & Beverage Solution", img: service3, icon: icon03, span: "lg:col-span-2" },
  { title: "Pickup & Delivery Solution", img: service4, icon: icon04, span: "lg:col-span-2" },
  { title: "Blockchain Development", img: service5, icon: icon05 },
  { title: "Internet of Things (IOT)", img: service6, icon: icon06 },
  { title: "On-Demand App Solution", img: service7, icon: icon07 },
  { title: "Ecommerce & Marketplace Solution", img: service8, icon: icon08 },
  { title: "Food & Beverage Solution", img: service9, icon: icon09, span: "lg:col-span-2" },
  { title: "Pickup & Delivery Solution", img: service10, icon: icon010, span: "lg:col-span-2" },
  { title: "Blockchain Development", img: service11, icon: icon011 },
  { title: "Internet of Things (IOT)", img: service12, icon: icon012 },
  { title: "Pickup & Delivery Solution", img: service13, icon: icon013 },
  { title: "Blockchain Development", img: service14, icon: icon014 },
  { title: "Internet of Things (IOT)", img: service15, icon: icon015, span: "lg:col-span-2" },
];

function Development() {
  return (
    <div className="bg-gray-100 py-16 sm:py-20 max-w-full sm:px-6 ">
      <div className="max-w-7xl px-20 mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-12">
          Fully Customized <span className="font-bold">Mobile App Development Services</span>
          <br className="hidden sm:block" />
          For Your Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow ${
                item.span || ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
              <div className="absolute top-3 left-3 text-white w-8 h-8 sm:w-10 sm:h-10">
                <img src={item.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white font-medium text-xs sm:text-sm md:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Development;

  