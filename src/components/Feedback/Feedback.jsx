import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import {  SectionTitle } from "..";
import Image from "next/image";
import {RiDoubleQuotesR} from 'react-icons/ri'

const Feedback = () => {
  return (
    <section className="py-20 md:py-[50px] lg:py-[75px] bg-neutral-950 service  ">
      <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-14">
          <SectionTitle text={"Отзывы клиентов"} />
        </div>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mt-10 mySwiper"
        >
          <SwiperSlide >
            <div className="relative px-8 pt-20 space-y-5 rounded-lg py-9 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-9xl right-5 -top-[60px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl lg:text-2xl">Великолепно!</h6>
                <p className="text-sm md:text-base lg:text-xl">
                  Оперативная работа, креативные идеи и море эмоций. Вот как бы
                  я описал нашу совместную работу. Хотелось бы предложить
                  сотрудничество.
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative w-20 h-20 rounded-full">
                  <Image src={'/feedback-1.jpg'} alt="feedback" className="object-cover w-full" fill />
                </div>
                <div className="space-y-2 font-semibold">
                  <h6 className="text-sm md:text-base lg:text-xl ">
                  Кадыров Сарвар
                  </h6>
                  <p className="text-xs gradient-background md:text-sm lg:text-base">
                  Директор Rewolt Ventures
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative px-8 pt-20 space-y-5 rounded-lg py-9 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-9xl right-5 -top-[60px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl lg:text-2xl">Великолепно!</h6>
                <p className="text-sm md:text-base lg:text-xl">
                  Оперативная работа, креативные идеи и море эмоций. Вот как бы
                  я описал нашу совместную работу. Хотелось бы предложить
                  сотрудничество.
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative w-20 h-20 rounded-full">
                  <Image src={'/feedback-1.jpg'} alt="feedback" className="object-cover w-full" fill />
                </div>
                <div className="space-y-2 font-semibold">
                  <h6 className="text-sm md:text-base lg:text-xl ">
                  Кадыров Сарвар
                  </h6>
                  <p className="text-xs gradient-background md:text-sm lg:text-base">
                  Директор Rewolt Ventures
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative px-8 pt-20 space-y-5 rounded-lg py-9 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-9xl right-5 -top-[60px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl lg:text-2xl">Великолепно!</h6>
                <p className="text-sm md:text-base lg:text-xl">
                  Оперативная работа, креативные идеи и море эмоций. Вот как бы
                  я описал нашу совместную работу. Хотелось бы предложить
                  сотрудничество.
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative w-20 h-20 rounded-full">
                  <Image src={'/feedback-1.jpg'} alt="feedback" className="object-cover w-full" fill />
                </div>
                <div className="space-y-2 font-semibold">
                  <h6 className="text-sm md:text-base lg:text-xl ">
                  Кадыров Сарвар
                  </h6>
                  <p className="text-xs gradient-background md:text-sm lg:text-base">
                  Директор Rewolt Ventures
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
