import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow">

      <img
        src="https://res.cloudinary.com/dor9gqwao/image/upload/v1773466150/Kds_logo_1_1_ryhsjd.png"
        alt="Kushel Digi Solution"
        className="h-[45px] md:h-[60px]"
      />

      <h3 className="text-sm md:text-lg font-semibold">
        Call: +91 9045301702
      </h3>

    </nav>
  );
};

export default Navbar;