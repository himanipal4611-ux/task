


import React from "react";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center min-h-[420px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dor9gqwao/image/upload/v1773387052/Group_76_vmhi2i.png')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 md:px-20 pt-20">

          {/* LEFT TEXT */}
          <div className="text-white w-full md:w-[500px]">

            <h2 className="text-[22px] md:text-[28px] font-light">
              Experience A World-Class
            </h2>

            <h1 className="text-[26px] md:text-[32px] font-bold leading-snug">
              Mobile App Development
              <br />
              Service
            </h1>

            <p className="mt-4 text-[14px] md:text-[16px] text-gray-200">
              Build Affordable, Easy-to-use & Feature
              <br />
              Rich Mobile Apps For Your Business
            </p>

            <button className="mt-6 bg-white text-black px-7 py-2 rounded-full text-sm">
              Book a Demo
            </button>

          </div>

          {/* FORM CARD */}
          <div className="bg-white w-full md:w-[420px] rounded-xl p-8 ml-0 shadow-xl mt-10 lg:mt-0 lg:absolute lg:right-[140px] lg:top-[80px]">
 <div className="">

            <h2 className="text-xl text-gray-600 mb-6">
              Let’s Build Your <span className="font-bold text-gray-800">Dream App!</span>
            </h2>

            <form className="space-y-6">         responsive proper kha h kha nahi hai bta 

              <div style={{borderBottom:"1px solid gray"}}>
                <input
                type="text"
                placeholder="First Name"
                className="w-full border-0 border-gray-300 outline-none pb-2"
              /></div>
               

               <div style={{borderBottom:"1px solid gray"}}>
                <input
                type="email"
                placeholder="Email"
                className="w-full border-0  border-gray-300 outline-none pb-2"
              />
               </div>


              {/* PHONE INPUT */}
              <div style={{borderBottom: "1px solid black"}} className="flex items-center pb-2 ">

                <img
                  src="https://flagcdn.com/w20/in.png"
                  className="w-5 h-4 mr-2"
                />

                <svg
                  className="w-4 h-4 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-0 outline-none"
                />

              </div>

              <div style={{borderBottom: "1px solid black"}}>
                  <textarea
                placeholder="What's your Project about?"
                className="w-full border-0 border-gray-300 outline-none pb-2"
              />
              </div>


              <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-sm">
                SUBMIT
              </button>

            </form>

          </div>


          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#f5f5f5] pt-40 pb-16">

        <div className="text-center mb-12">

          <h2 className="text-xl text-gray-700">
            Vast Mobile App Development
          </h2>

          <h3 className="text-2xl font-bold">
            Services We Offer
          </h3>

        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6">

          <div className="bg-white rounded-xl p-6 text-center border">
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              className="h-12 mx-auto mb-3"
              alt=""
            />
            <h4 className="font-semibold">iOS App</h4>
            <p className="text-gray-600 text-sm">Development</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border">
            <img
              src="https://cdn-icons-png.flaticon.com/512/226/226770.png"
              className="h-12 mx-auto mb-3"
              alt=""
            />
            <h4 className="font-semibold">Android App</h4>
            <p className="text-gray-600 text-sm">Development</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border">
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773464651/app-development_l4mrqu.png"
              className="h-12 mx-auto mb-3"
              alt=""
            />
            <h4 className="font-semibold">Web App</h4>
            <p className="text-gray-600 text-sm">Development</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border">
            <img
              src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773464203/cloud-computing_zrlb5e.png"
              className="h-12 mx-auto mb-3"
              alt=""
            />
            <h4 className="font-semibold">Hybrid-Native</h4>
            <p className="text-gray-600 text-sm">App Development</p>
          </div>

        </div>

        {/* three-images */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-6">

          <img
            src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773466617/Frame_1000010904_ieeekz.png"
            className="w-full h-[300px] object-contain"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773467482/Frame_1000010901_s0zfj8.png"
            className="w-full h-[300px] object-contain"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773467729/Frame_1000010902_n5qejs.png"
            className="w-full h-[300px] object-contain"
            alt=""
          />

        </div>

        {/* banner */}
        <div
          className="relative bg-cover bg-center py-16 mt-16 text-white text-center px-6"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dor9gqwao/image/upload/v1773468740/Rectangle_10_slcz0o.png)",
          }}
        >

          <p className="text-lg md:text-2xl capitalize mb-5">
            take your business to next level with your mobile app development service
          </p>

          <button className="py-3 px-6 rounded-3xl bg-[#3666FD] capitalize text-white">
            get started
          </button>

        </div>

      </section>
    </>
  );
};

export default Home;