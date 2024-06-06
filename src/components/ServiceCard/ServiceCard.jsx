import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from 'react';
import {ServiceIcon} from "@/components";

const ServiceCard = ({id,
                       title_uz,
                       title_ru,
                       description_uz,
                       description_ru,
                     }) => {

  const { lang } = useSelector((state) => state.LanguageSlice);
  const cardsRef = useRef(
      null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [gradientCenter, setGradientCenter] = useState({ cx: "50", cy: "50" });

  useEffect(() => {
      const cardRect = cardsRef.current.getBoundingClientRect();
    if(+cardsRef.current.id === +id) {
      setGradientCenter({
        cx:Math.floor((cursor.x / cardRect.width) * 100),
        cy:  Math.floor((cursor.y / cardRect.height) * 100)
      });
    }
  }, [cursor, cardsRef]);
  const handleMouseMove = (event) => {
    if(+event.target.id === +id) {
      const rect = cardsRef.current.getBoundingClientRect();
      setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };
  return (

          <div
              className={'p-[1px] glow-on-hover group bg-transparent w-full h-full col-span-1 relative rounded-xl overflow-hidden'}
          >
            <div  id={id} ref={cardsRef}
                   onMouseMove={handleMouseMove} className='w-full h-full bg-black  shadow-xl  rounded-lg flex flex-row p-8 justify-between '>
              <div id={id} className='flex flex-col w-full items-center'>
                <ServiceIcon id={id} gradientCenter={gradientCenter} />
                <div id={id} className='flex flex-col gap-5 text-center items-center mt-4'>
                  <h2 id={id} className='font-notoSans text-neutral-200 tracking-wide text-2xl'>
                    {lang === 'ru' ? title_ru : title_uz}
                  </h2>
                  <p id={id} className='-mt-2 font-notoSans text-neutral-500 tracking-wide'>
                    {lang === 'ru' ? description_ru : description_uz}
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
};


export default ServiceCard;
