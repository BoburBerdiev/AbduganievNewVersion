import {
  ImageUl,
  PageSectionTItle,
  SectionTitle,
  TeamCard,
} from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import apiService from "@/service/api";
import { useQuery } from "react-query";

SwiperCore.use([Autoplay]);

const about = () => {
  const { data: partnor } = useQuery("get-partnor", () =>
    apiService.getData("/partners/")
  );

  const {data: team } = useQuery("get-team", () =>
  apiService.getData("/team/")
);



  return (
    <main className="py-10 md:py-[60px] lg:py-[100px] xl:py-[150px]">
      <div className="container ">
        <PageSectionTItle
          title={"О нас"}
          row={true}
          subTitle={
            "Каждая крупная компания должна благодарить не только себя, но и тех, кто стоял рядом с ней и верил в нее. Ведь самый главный принцип в нашей работе – доверие."
          }
        />
        <section className="relative w-full  aspect-video my-20 md:my-[100px] lg:my-[150px]">
          <ImageUl
            src={"/team-min.jpg"}
            alt={"team"}
            imgStyle={"object-cover"}
          />
        </section>
        <section className="text-zinc-200 my-20 md:my-[100px] lg:my-[150px]">
          <div className="w-full  md:w-[50%] mb-5 md:mb-10 lg:mb-[60px]">
            <h3 className="text-2xl mb-2.5 font-semibold text-center md:text-start md:text-3xl lg:text-4xl">
              Почему Мы?
            </h3>
            <p className="text-start">
              Центр ориентирован на обучение студентов по следующим
              направлениям: Advanced Front-end, Basic Front-end, Back-end,
              UX/UI, Мобильная разработка.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
            <div className="items-center justify-center hidden col-span-2 md:flex">
              <div className="w-[60%] aspect-square rounded-full animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] "></div>
            </div>
            <div className="col-span-3 ">
              <ol className="space-y-4 text-base font-normal list-decimal list-inside md:space-y-5 lg:space-y-7 md:text-md lg:text-lg">
                {Array(4)
                  .fill("")
                  .map((_, ind) => (
                    <li key={ind} className="">
                      <span className="font-semibold">Совместность.</span>
                      Мы слушаем, придумываем и поддерживаем друг друга на пути
                      к созданию чего-то действительно уникального в наших
                      совместных усилиях.
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </section>
        <section className="my-20 md:my-[100px] lg:my-[150px] service">
          <SectionTitle text={"Они доверяют нам "} className="" />

          <div className=" lg:pt-[60px] md:pt-10 pt-5">
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
                },
                1100: {
                  slidesPerView: 4.5,
                },
              }}
              slidesPerView={4.5}
              centeredSlides={false}
              spaceBetween={10}
              grabCursor={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="py-4 mySwiper"
            >
              {
                team?.data.map(item => {
                <SwiperSlide key={item.id}>
                <TeamCard person={item} />
              </SwiperSlide>
                })
              }
              
              
            </Swiper>
          </div>
        </section>
        {/* {
                            about[0]?.aboutSystems?.systems.map((system) => (
                                <HoverCard key={system?._id} image={`${process.env.NEXT_PUBLIC_API_URL}/${system?.image?.path}`}
                                           title={lang === 'ru' ? system?.titleRu : system?.titleUz}
                                           text={lang === 'ru' ? system?.descriptionRu : system?.descriptionUz}/>
                            ))
                        } */}
        <section>
          <SectionTitle text={"Они доверяют нам "} className="" />
          <div className="grid grid-cols-2 xl:gap-14 lg:gap-10 md:gap-8 gap-3 xl:grid-cols-4 lg:grid-cols-3 lg:pt-[60px] md:pt-10 pt-5">
          
            {partnor?.data?.map((item) => (
              <div key={item?.id} className="flex items-center justify-center">
                <div className=" relative w-[80%] md:w-[280px] aspect-video filter grayscale hover:filter-none hover:grayscale-0 duration-500">
                  <ImageUl
                    src={item?.image}
                    imgStyle={"object-contain"}
                    alt={item?.image}
                  />
                </div>
              </div>
            ))}

           
          </div>
        </section>
      </div>
    </main>
  );
};

export default about;
