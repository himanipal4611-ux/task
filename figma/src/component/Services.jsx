import React from 'react'

export const Services = () => {
  return (
              <div
            className=" lg:max-w-full  relative bg-cover bg-center  md:py-16 mt-16 text-white text-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dor9gqwao/image/upload/v1773468740/Rectangle_10_slcz0o.png)",
            }}
          >
            <p className="lg:max-w-full  text-base sm:text-lg md:text-xl lg:text-2xl capitalize mb-6  mx-auto">
              take your business to next level with your mobile app development service
            </p>
            <button className="  border-none py-2.5 px-6 md:py-3 md:px-8 rounded-full bg-[#3666FD] capitalize text-white text-sm md:text-base hover:bg-[#2555e0] transition">
              get started
            </button>
          </div>
  )
}
