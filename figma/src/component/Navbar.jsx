
import React from "react";

const Navbar = () => {
  return (
    <nav  className=" flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-2 md:py-4 bg-white shadow sticky top-0 z-50 overflow-hidden">
      <img
        src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773466150/Kds_logo_1_1_ryhsjd.png"
        alt="Kushel Digi Solution"
        className="h-10 sm:h-12 md:h-14 lg:h-[60px]"
      />
      <h3 className="text-sm sm:text-base md:text-lg font-semibold capitalize">
        Call: +91 9045301702
      </h3>
    </nav>
  );
};

export default Navbar;