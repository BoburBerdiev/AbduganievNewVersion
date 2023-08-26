import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { ImageUl } from "..";



const PartnorList = () => {
  return (
    <>
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
          autoplay={{
            delay: 3000,
          }}
         
          className="mt-10 mySwiper partnor-swipper"
        >
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/bank-ipak-yoli.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/export-uz.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/fond-bozor.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/santek.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/orgres.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/real-house.png'} />
              
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" h-[60px] ">
              <ImageUl imgStyle={'object-contain'} alt={'partnor'} src={'/partnor/fond-bozor.png'} />
              
            </div>
          </SwiperSlide>
        </Swiper>
    </>
  )
}

export default PartnorList
