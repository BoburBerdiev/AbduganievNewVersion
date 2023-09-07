import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay  } from "swiper";
// import { Virtual } from 'swiper/modules';
import { ImageUl } from "..";


import 'swiper/css/virtual';

const PartnorList = ({partners}) => {

  return (
    <>
    <div className="container overflow-hidden">
    <Swiper
        id={'mySwiper1'}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 2,
              spaceBetween:40
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween:40
            },
            1024: {
              slidesPerView: 4,
              spaceBetween:40
            },
            1200: {
              slidesPerView: 5,
              spaceBetween:40
            }
          }}

          loop={true}
          
          autoplay={{
            delay: 3000,
        }}

          className="mt-10 mySwiper "
        >

          {
            partners?.map(item => (
              <SwiperSlide key={item.id}>
                <a href={item.link} target="_blank"  className="block h-[60px] relative duration-500  filter grayscale hover:filter-none hover:grayscale-0">
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
