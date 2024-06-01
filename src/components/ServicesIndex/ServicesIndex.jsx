import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,  {Pagination,   Autoplay} from "swiper";
import { SectionTitle , ServiceCard } from "..";
import { useTranslation } from "react-i18next";


//

// import required modules
SwiperCore.use([Autoplay]);

const ServicesIndex = ({serviceIndex}) => {
  const {t} = useTranslation()

  return (
    <>
      <section className="pt-20 md:pt-[100px] lg:pt-[150px] pb-10 md:pb-[50px] lg:pb-[75px] bg-neutral-950 service">
        <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-14">
            <SectionTitle text={t('home.service')}  />
            </div>
          <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            
          }}
            centeredSlides={false}
            spaceBetween={10}
            grabCursor={true}
            autoplay={{
              delay: 3000,
                disableOnInteraction:false
          }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="py-4 mySwiper"
          >
            {
              serviceIndex?.map((item , id) => (
              <SwiperSlide key={item.id}>
                <ServiceCard id={id} bg={item.image} title_ru={item.title_ru} title_uz={item.title_uz} description_uz={item.description_uz} description_ru={item.description_ru} />
              </SwiperSlide>
              ))
            }



          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ServicesIndex;
