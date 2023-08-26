import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,  {Pagination,   Autoplay} from "swiper";

import { SectionTitle , ServiceCard } from "..";
import bgService from 'public/service-bg/CRM-система-min.jpg'
import bgService1 from 'public/service-bg/SMM-min.jpg'
import bgService2 from 'public/service-bg/Брендинг-min.jpg'
import bgService3 from 'public/service-bg/Кибербезопасность-min.jpg'
import bgService4 from 'public/service-bg/Медиа-min.jpg'



//

// import required modules
SwiperCore.use([Autoplay]);

const ServicesIndex = () => {

  
  return (
    <>
      <section className="py-20 md:py-[100px] lg:py-[150px] bg-neutral-950 service">
        <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-14">
            <SectionTitle text={"Наши услуги"} />
            </div>
          <Swiper
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            }
          }}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={10}
            grabCursor={true}
            autoplay={{
              delay: 3000
          }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="py-4 mySwiper"
          >
            <SwiperSlide>
              <ServiceCard bg={bgService} title={'ERP cистемы'} subTitle={'IT Системы любого уровня сложности в удобные для вас сроки.'} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard bg={bgService1} title={'ERP cистемы'} subTitle={'IT Системы любого уровня сложности в удобные для вас сроки.'} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard bg={bgService2} title={'ERP cистемы'} subTitle={'IT Системы любого уровня сложности в удобные для вас сроки.'} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard bg={bgService3} title={'ERP cистемы'} subTitle={'IT Системы любого уровня сложности в удобные для вас сроки.'} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard bg={bgService4} title={'ERP cистемы'} subTitle={'IT Системы любого уровня сложности в удобные для вас сроки.'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ServicesIndex;
