import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from 'react';

const ServiceCard = ({
                       bg,
                       title_uz,
                       title_ru,
                       description_uz,
                       description_ru,
                     }) => {
  const { lang } = useSelector((state) => state.LanguageSlice);
  const cardsRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [gradientCenter, setGradientCenter] = useState({ cx: "50", cy: "50" });

  const handleMouseMove = (event) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  useEffect(() => {
    if (cardsRef.current) {
      const cardRect = cardsRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: cxPercentage.toFixed(2),
        cy: cyPercentage.toFixed(2),
      });
    }
  }, [cursor]);

  return (

          <div
              className={'p-1 bg-[rbga(0,0,0,20)] w-full h-full col-span-1 relative rounded-lg overflow-hidden'}
              ref={cardsRef}
              onMouseMove={handleMouseMove}
          >
            <div
                className='absolute backdrop-blur-sm bg-neutral-700 bg-[radial-gradient(circle,var(--tw-gradient-stops))] rounded-full from-[#10b981] to-transparent duration-200 w-full aspect-square'
                style={{
                  top: `${Math.floor(gradientCenter.cy)}%`,
                  left: `${Math.floor(gradientCenter.cx)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
            />
            <div className='w-full h-full bg-neutral-900 bg-opacity-75 shadow-xl backdrop-blur-sm rounded-lg flex flex-row p-8 justify-between stroke-[0.1] hover:stroke-[0.3]'>
              <div className='flex flex-col w-full items-center'>
                <Icon gradientCenter={gradientCenter} />
                <div className='flex flex-col gap-5 text-center items-center'>
                  <h2 className='font-notoSans text-neutral-200 tracking-wide text-2xl'>
                    {lang === 'ru' ? title_ru : title_uz}
                  </h2>
                  <p className='-mt-2 font-notoSans text-neutral-500 tracking-wide'>
                    {lang === 'ru' ? description_ru : description_uz}
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
};


export default ServiceCard;

export const Icon = ({ gradientCenter }) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-40 h-40 duration-200 transition-all">
        <defs>
          <radialGradient
              id='emeraldGradient'
              gradientUnits='userSpaceOnUse'
              cx={`${gradientCenter?.cx}%`}
              cy={`${gradientCenter?.cy}%`}
          >
            <stop stopColor='#10b981' />
            <stop offset="90%" stopColor='#404040' />
          </radialGradient>
        </defs>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className='fill-neutral-900/50'
            stroke='url(#emeraldGradient)'
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className='fill-neutral-800/50'
            stroke='url(#emeraldGradient)'
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </svg>
  );
};
