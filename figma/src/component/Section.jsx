import React from 'react';

const Section = () => {
  return (
    <div className= "bg-[#F2F2F2] max-w-7xl py-16 sm:py-20 px-4 sm:px-6 lg:py-0 capitalize">
      <div className="max-w-4xl mx-auto bg-[#F2F2F2] rounded-2xl p-8 sm:p-10 md:p-12 text-center">
        <h2 className=" lg:text-3xl text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
          didn't find your industry solution?
        </h2>
        <h4 className=" lg:text-2xl text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-8 max-w-7xl mx-auto">
          discuss your mobile app development requirements with your team & get the finest fit for your business
        </h4>
        <button className="bg-[#3666FD] border-none text-white py-3 px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-[#2555e0] transition">
          get started
        </button>
      </div>
    </div>
  );
};

export default Section;