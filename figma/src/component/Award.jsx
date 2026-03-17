import React from 'react';

export const Award = () => {
  return (
    <section className="bg-[#18225A] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          an award-winning mobile app development company
        </h2>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
          leverage our industry expertise to create company delivery mobile app for your business
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 text-left rounded-2xl hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <img
                src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png"
                alt="rating"
                className="h-5 w-5 mr-2"
              />
              <h3 className="font-semibold text-lg">4.9/5</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645829/34cdab2f5c45458a06225af3546f76aea894cab3_jncblw.png"
              alt="goodfirms"
              className="h-6 mb-3"
            />
            <p className="text-sm text-gray-600">
              reviewed by goodfirms with 4.9/5 rating based upon client reviews
            </p>
          </div>

          <div className="bg-white p-6 text-left rounded-2xl hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <img
                src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png"
                alt="rating"
                className="h-5 w-5 mr-2"
              />
              <h3 className="font-semibold text-lg">4.0/5</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773647336/041d4bef9125d551a26658d4f30a139e7cec32d6_gxzmsc.png"
              alt="appfutura"
              className="h-6 mb-3"
            />
            <p className="text-sm text-gray-600">
              platinum certified with a 4.0/5 ratings. interviewed by appfutura
            </p>
          </div>

          <div className="bg-white p-6 text-left rounded-2xl hover:shadow-xl transition sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0">
            <div className="flex items-center mb-3">
              <img
                src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773645511/Mask_group_j43i9m.png"
                alt="rating"
                className="h-5 w-5 mr-2"
              />
              <h3 className="font-semibold text-lg">4.6/5</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773647548/ee282aa25d2b1ff6436b6b5367e16f2c8348a820_nfwwlw.png"
              alt="upwork"
              className="h-6 mb-3"
            />
            <p className="text-sm text-gray-600">
              with astounding 4.6/5 rating we're amongst the top companies on upwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};