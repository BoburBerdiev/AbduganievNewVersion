import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const ServiceCard = ({
  bg,
  id,
  title_uz,
  title_ru,
  description_uz,
  description_ru,
}) => {


  const { lang } = useSelector((state) => state.LanguageSlice);
  return (
    <div data-aos="fade-up" data-aos-delay={id * 10}>
      <div

        className={`py-[67px] transition-all duration-700 h-[400px] group hover:duration-500 hover:-top-3 relative bg-gradient-to-r from-[#05498e] to-[#10f56c] cursor-pointer md:py-[100px]   px-8  space-y-3  text-zinc-200 rounded-xl`}
      >
        <Image
          src={bg}
          layout="fill"
          className={`z-[9] rounded-xl transition ease-in-out duration-500 object-cover group-hover:opacity-100 opacity-0`}
        />
        <div className="relative z-10 font-openSans">
          <h3 className="text-xl font-semibold md:text-2xl">
            {lang === "ru" ? title_ru : title_uz}
          </h3>
          <p className="text-base text-start">
            {lang === "ru" ? description_ru : description_uz}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
