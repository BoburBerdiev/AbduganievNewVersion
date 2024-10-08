import React, {  useRef, useState } from 'react';
import {ServiceIcon} from "@/components";
import {useTranslation} from "react-i18next";

const ServiceCard = ({id,
                       title_uz,
                       title_ru,
                       description_uz,
                       description_ru,
                       src , item
                     }) => {
  const {i18n} = useTranslation()
  const cardsRef = useRef(
      null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [gradientCenter, setGradientCenter] = useState({ cx: "50", cy: "50" });
  //
  // useEffect(() => {
  //     const cardRect = cardsRef.current.getBoundingClientRect();
  //   if(+cardsRef.current.id === +id) {
  //     setGradientCenter({
  //       cx:Math.floor((cursor.x / cardRect.width) * 100),
  //       cy:  Math.floor((cursor.y / cardRect.height) * 100)
  //     });
  //   }
  // }, [cursor, cardsRef]);
  // const handleMouseMove = (event) => {
  //   if(+event.target.id === +id) {
  //     const rect = cardsRef.current.getBoundingClientRect();
  //     setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  //   }
  // };
  return (
          <div
              className={'p-[1px] glow-on-hover group bg-transparent w-full h-full col-span-1 relative rounded-xl overflow-hidden'}
          >
            <div  id={id} ref={cardsRef}
                   className='w-full h-full bg-black  shadow-xl  rounded-lg flex flex-row p-4 md:p-8 justify-between '>
              <div  className='flex flex-col w-full items-center stroke-1'>
                <ServiceIcon id={id} src={src}  gradientCenter={gradientCenter} />
                <div  className='flex flex-col gap-5 text-center items-center mt-4'>
                  <h2  className='font-notoSans text-neutral-200 tracking-wide text-2xl md:text-3xl font-roboto font-bold'>
                    {i18n.language === 'ru' ? title_ru : title_uz}
                  </h2>
                  <p  className='-mt-2 font-notoSans text-neutral-500 tracking-wide'>
                    {i18n.language === 'ru' ? description_ru : description_uz}
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
};


export default ServiceCard;
