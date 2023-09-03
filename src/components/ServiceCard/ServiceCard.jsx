import React from "react";
import {useState} from 'react'
import Image from "next/image";
import { useSelector } from "react-redux";

const ServiceCard = ({bg , id , title_uz , title_ru , description_uz ,description_ru}) => {

  const [hoverCard , setHoverCard] = useState(false)

  const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <div
    data-aos='fade-up'
    data-aos-delay={id * 10}
      onMouseLeave={() => setHoverCard(!hoverCard)}
      onMouseEnter={() => setHoverCard(!hoverCard)}
      className={`py-[67px] duration-300  h-[400px]  relative bg-gradient-to-r from-[#05498e]  to-[#10f56c] cursor-pointer md:py-[100px]   px-8  space-y-3  text-zinc-200 rounded-xl`}
    >
      <Image
        src={bg}
        fill
        className={`z-[9] rounded-xl transition ease-in-out duration-500 object-cover ${
          hoverCard ? "opacity-100" : "opacity-0"
        } `}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold md:text-2xl">
          {
          
          lang === 'ru'? title_ru : title_uz

          
        }
        </h3>
        <p className="text-base text-justify">
          {
          
          lang === 'ru'? description_ru : description_uz

          
        }
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
