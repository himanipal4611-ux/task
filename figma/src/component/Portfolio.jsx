import React from 'react';

export const Portfolio = () => {
  return (
  
    <div className="bg-[#24204E] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773640234/Group_11_tjgbdk.png"
              alt="Web Application"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6">web application</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8">
             Crypto apps are mobile or web applications designed to facilitate various activities related to cryptocurrencies. These apps allow users to buy, sell, trade, and manage their digital assets securely. Features often include real-time price tracking.
            </p>
            <div className="flex items-center gap-4 cursor-pointer group">
              <p className="text-base sm:text-lg md:text-xl">view our project</p>
              <img
                src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773641649/Group_3_krycrp.png"
                alt="arrow"
                className="h-4 sm:h-5 group-hover:translate-x-2 transition-transform"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};