import React from "react";

export const Development = () => {
  const images = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773478684/Group_58_xoyv89.png",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773479331/Group_59_c9tkyw.png",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773483501/Group_60_m5qhqq.png",
    },
    {
      id: "4",
      url: "https://res.cloudinary.com/dor9gqwao/image/upload/v1773486893/Group_61_2_fx5e1o.png",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 place-items-center ">
      {images.map((item) => (
        <img
          key={item.id}
          src={item.url}
          alt="images"
          className="h-[220px] w-[220px] object-cover"
        />
      ))}
    </div>
  );
};

export default Development;