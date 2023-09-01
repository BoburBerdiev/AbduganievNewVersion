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
import { useSelector } from "react-redux";
import axios from "axios";


SwiperCore.use([Autoplay]);

const about = ({about}) => {
  const { data: partnor } = useQuery("get-partnor", () =>
    apiService.getData("/partners/")
  );

  const {data: team } = useQuery("get-team", () =>
  apiService.getData("/team/")
);

const {data: whyWe } = useQuery("get-whyWe", () =>
apiService.getData("/why-we/1")
);
const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <main className="py-10 md:py-[60px] lg:py-[100px] xl:py-[150px] bg-neutral-950">
      <div className="container ">
        <PageSectionTItle
          title_ru={about[0]?.title_ru}
          title_uz={about[0]?.title_uz}
          subTitle_ru={about[0]?.description_ru}
          subTitle_uz={about[0]?.description_uz}
          row={true}
          
        />
        <section className="relative w-full  aspect-video my-20 md:my-[100px] lg:my-[150px]">
          <ImageUl
          priority={true}
            src={"/team-min.jpg"}
            alt={"team"}
            imgStyle={"object-cover"}
          />
        </section>
        <section className="text-zinc-200 my-20 md:my-[100px] lg:my-[150px]">
          <div className="w-full  md:w-[50%] mb-5 md:mb-10 lg:mb-[60px]">
            {
            }
            
            <h3 className="text-2xl mb-2.5 font-semibold text-center md:text-start md:text-3xl lg:text-4xl">
              {
                lang === 'ru' ? whyWe?.data?.title_ru : whyWe?.data?.title_uz
              }
            </h3>
            <p className="text-start md:text-md lg:text-lg xl:text-xl">
              {
                lang === 'uz' ? whyWe?.data?.short_text_ru : whyWe?.data?.short_text_uz
              }
             
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
            <div className="items-center justify-center hidden col-span-2 md:flex">
              <div className="w-[60%] aspect-square rounded-full animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] "></div>
            </div>
            <div className="col-span-3 ">
              <ol className="space-y-4 text-base font-normal list-decimal list-inside md:space-y-5 lg:space-y-7 md:text-md lg:text-lg xl:text-xl">
                {whyWe?.data?.why_we_childs?.map(item => (
                    <li key={item.id} >
                      <span className="font-semibold">{lang === 'ru' ? item.title_ru : item.title_uz}</span>
                      {lang === 'ru' ? item.text_uz : item.text_uz}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </section>
        <section className="my-20 md:my-[100px] lg:my-[150px] service">
          <SectionTitle text={"Они доверяют нам "}  />

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
                team?.data.map(item => (
                <SwiperSlide key={item.id}>
                <TeamCard person={item} />
              </SwiperSlide>
                ))
              }
              
              
            </Swiper>
          </div>
        </section>
        <section>
          <SectionTitle text={"Они доверяют нам "}  />
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


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [about] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/about`),
])

  // Pass data to the page via props
  return {
    props: {
      about: about.data,
    },
  };
}
