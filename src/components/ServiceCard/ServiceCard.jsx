import React from "react";
import {useState} from 'react'
import Image from "next/image";

const ServiceCard = ({bg ,  title, subTitle}) => {

  const [hoverCard , setHoverCard] = useState(false)


  return (
    <div
      onMouseLeave={() => setHoverCard(!hoverCard)}
      onMouseEnter={() => setHoverCard(!hoverCard)}
      className={`py-[67px] duration-300   relative bg-gradient-to-r from-[#05498e]  to-[#10f56c] cursor-pointer md:py-[100px] lg:py-[125px]  px-8  space-y-3  text-zinc-200 rounded-xl`}
    >
      <Image
        src={bg}
        fill
        className={`z-[9] rounded-xl duration-200 object-cover ${
          hoverCard ? "opacity-100" : "opacity-0"
        } `}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold md:text-2xl">
          {title}
        </h3>
        <p className="text-base">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
