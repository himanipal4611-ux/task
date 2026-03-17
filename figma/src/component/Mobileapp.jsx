import React from 'react'

export const Mobileapp = () => {

  const data = [
    {
      title: "iOS App Development",
      img: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773743137/315f563099e146772ebfdccdf910265b3d1c2766_d3hxcb.png",
      outline: "outline-gray-400"
    },
    {
      title: "Android App Development",
      img: "https://cdn-icons-png.flaticon.com/512/226/226770.png",
      outline: "outline-green-500"
    },
    {
      title: "Web App Development",
      img: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773464651/app-development_l4mrqu.png",
      outline: "outline-blue-500"
    },
    {
      title: "Hybrid-Native App Development",
      img: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773464203/cloud-computing_zrlb5e.png",
      outline: "outline-purple-500"
    }
  ]

  return (
    <section className="bg-[#f5f5f5] pt-24 pb-8 ">
      
      {/*  aur tight container */}
      <div className="max-w-3xl mx-auto px-2 sm:px-3">

        <div className="text-center mb-10 max-w-full ">
          <h2 className="lg:text-2xl font-medium text-3xl lg:pt-20">
            Vast Mobile App Development <br /><span className='font-bold text-3xl'>Services We Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {data.map((item, index) => (
            <div 
              key={index}
              className={`rounded-xl py-4 px-2 text-center outline ${item.outline}`}
            >
              <img
                src={item.img}
                className="h-10 w-10 mx-auto "
                alt=""
              />

              <h4 className="font-semibold text-base sm:text-lg">
                {item.title}
              </h4>


            </div>
          ))}

        </div>

      </div>
    </section>
  )
}