
import React from "react";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
          className="  overflow-visible relative bg-cover bg-center h-[0px]  md:min-h-[550px]  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dor9gqwao/image/upload/v1773387052/Group_76_vmhi2i.png')",
        }}>
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-16 md:pt-20 lg:pt-24">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
            {/* LEFT TEXT */}
            <div className="text-white w-full lg:w-1/2 xl:w-[500px] tracking-widest ">
              <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-light">
                Experience A World-Class <span className="font-semibold lg:text-[32px]" >Mobile App Development Service</span>
              </h2>

              <p className="mt-4 sm:text-base md:text-[16px] text-gray-200 tracking-widest lg:text-xl">
                Build Affordable, Easy-to-use & Feature Rich Mobile Apps For Your Business</p>
              <button className="  border-none mt-6 bg-white text-black px-7 py-2.5 md:px-10 md:py-3 rounded-full text-sm md:text-base font-bold hover:bg-gray-100 transition">
                Book a Demo
              </button>
            </div>

            {/* FORM CARD */}
            <div className="bg-white w-full mx-0 lg:w-[500px] lg:h-[500px]  lg:font-2xl rounded-xl sm:p-8 shadow-xl mt-8 lg:mt-0">
              <h2 className="text-lg sm:text-xl text-gray-600 mb-6 lg:text-3xl text-center font-normal">
                Let's Build Your <span className="font-bold text-gray-800">Dream App!</span>
              </h2>

               <form className="space-y-10 px-6 lg:text-4xl row-span-5">        

              <div style={{borderBottom:"1px solid gray"}}>
                <input
                type="text"
                placeholder="First Name"
                className="w-full border-0 border-gray-300 outline-none pb-2 text-base"
              /></div>
               

               <div style={{borderBottom:"1px solid gray"}}>
                <input
                type="email"
                placeholder="Email"
                className="w-full border-0  border-gray-300 outline-none pb-2 text-base"
              />
               </div>


              {/* PHONE INPUT */}
              <div style={{borderBottom: "1px solid black"}} className="flex items-center pb-2 text-base ">

                <img
                  src="https://flagcdn.com/w20/in.png"
                  className="w-5 h-4 mr-2 text-base"
                />

                <svg
                  className="w-4 h-4 mr-2 text-gray-500 text-base"
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
                  className="w-full border-0 outline-none text-base"
                />

              </div>

              <div style={{borderBottom: "1px solid black"}}>
                  <textarea
                placeholder="What's your Project about?"
                className="w-full border-0 border-gray-300  outline-none pb-2 placeholder:text-base"
              />
              </div>


              <button className=" border-none mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-9 py-4 rounded-full text-sm">
                SUBMIT
              </button>

            </form>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      
    </>
  );
};

export default Home;