import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { SectionTitle, FeedbackCard } from "..";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Feedback = ({ feedback }) => {
  console.log(feedback);
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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
          {feedback.map((item) => (
            <SwiperSlide key={item.id}>
              <FeedbackCard
                img={item.author_image}
                title_ru={item?.title_ru}
                title_uz={item?.title_uz}
                job_ru={item?.job_ru}
                job_uz={item?.job_uz}
                author_ru={item?.author_ru}
                author_uz={item?.author_uz}
                description_ru={item?.description_ru}
                description_uz={item?.description_uz}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
