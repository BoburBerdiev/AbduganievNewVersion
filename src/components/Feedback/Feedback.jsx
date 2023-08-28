import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {  Autoplay , EffectCoverflow, Pagination } from "swiper";

import {  SectionTitle , FeedbackCard } from "..";

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Feedback = () => {
  return (
    <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950 service  ">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-14">
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
          effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
          <SwiperSlide >
            <FeedbackCard img={'/feedback-1.jpg'} title={'Кадыров Сарвар'} subTitle={'Директор Rewolt Ventures'} content={'Оперативная работа, креативные идеи и море эмоций. Вот как бы я описал нашу совместную работу. Хотелось бы предложить сотрудничество.'} />
          </SwiperSlide>
          <SwiperSlide >
            <FeedbackCard img={'/feedback-1.jpg'} title={'Кадыров Сарвар'} subTitle={'Директор Rewolt Ventures'} content={'Оперативная работа, креативные идеи и море эмоций. Вот как бы я описал нашу совместную работу. Хотелось бы предложить сотрудничество.'} />
          </SwiperSlide>
          <SwiperSlide >
            <FeedbackCard img={'/feedback-1.jpg'} title={'Кадыров Сарвар'} subTitle={'Директор Rewolt Ventures'} content={'Оперативная работа, креативные идеи и море эмоций. Вот как бы я описал нашу совместную работу. Хотелось бы предложить сотрудничество.'} />
          </SwiperSlide>
      
          
        
          
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
