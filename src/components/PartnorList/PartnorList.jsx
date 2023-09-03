import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay  } from "swiper";

import { ImageUl } from "..";



const PartnorList = ({partners}) => {

  return (
    <>
    <div className="container overflow-hidden">
    <Swiper
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5
            }
          }}

          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={40}
          grabCursor={true}
         
          freeMode={true}
          speed={800}
         
          className="mt-10 mySwiper partnor-swipper"
        >

          {
            partners?.map(item => (
              <SwiperSlide key={item.id}>
                <a href={item.link}  className="block h-[60px] relative duration-500  filter grayscale hover:filter-none hover:grayscale-0">
                  <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={item.image} />
                </a>
              </SwiperSlide>
              
            ))
          }
         
        </Swiper>
    </div>
     
    </>
  )
}

export default PartnorList
