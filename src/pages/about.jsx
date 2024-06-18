import {
  ImageUl,
  PageSectionTItle,
  SectionTitle,
} from "@/components";
import SwiperCore, {  Autoplay } from "swiper";
import apiService from "@/service/api";
import { useQuery } from "react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Head from "next/head";

SwiperCore.use([Autoplay]);

const about = ({ about }) => {
  const { data: partnor } = useQuery("get-partnor", () =>
    apiService.getData("/partners/")
  );
  const {i18n} = useTranslation()
  const { data: team } = useQuery("get-team", () =>
    apiService.getData("/team/")
  );

  const { data: whyWe } = useQuery("get-whyWe", () =>
    apiService.getData("/why-we/1")
  );

  const { t } = useTranslation();
  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/abduganiev-logoA.png" />
        <title>
          Abduganiev Technology -{" "}
          {i18n.language === "ru" ? about[0]?.title_ru : about[0]?.title_uz}{" "}
        </title>
        <meta
          name="description"
          content="Изменение функций и другие услуги. Мы реализуем все ваши планы на высшем уровне."
        />
        <meta
          name="keywords"
          content="
          графический дизайн
          разработка сайтов
          веб сайт
          IT
          UX
          UI
          техническая поддержка сайтов
          смм
          медиа услуги
          разработка сайтов в ташкенте
          графический дизайнер ташкент
          смм специалист ташкент
          агенство смм ташкент
          услуги разработки сайтов
          SMM
          CRM
          веб дизайнер
          системная безопасность
          абдуганиев.уз
          сайт
          веб сайт
          технологии
          новые технологии
          реклама
          таргет
          таргетин
          медиа
          мобилография
          копирайтинг"
        />
        <meta name="author" content="Abdug'aniev Team" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Разработка сайтов различных сложностей"
        />
        <meta
          property="og:description"
          content="Мы разработаем индивидуальный план разработки для каждого клиента."
        />

        <meta property="og:image" content="/public/abduganiev-min.png" />
        <meta property="og:url" content="https://abduganiev.uz/" />
        <meta property="og:site_name" content="Abduganiev Technology" />

        <meta name="twitter:card" content="/public/abduganiev-min.png" />
        <meta name="twitter:site" content="@AbduganievTechnology" />
        <meta
          name="twitter:title"
          content="Разработка сайтов различных сложностей"
        />
        <meta
          name="twitter:description"
          content="Изменение функций и другие услуги. Мы реализуем все ваши планы на высшем уровне.."
        />
        <meta name="twitter:image" content="/abduganiev-logoA.png" />

      </Head>
    <main className="py-10 md:py-[60px] lg:py-[100px] xl:py-[150px] bg-neutral-950">
     
      <div className="container ">
        <PageSectionTItle
          title_ru={about[0]?.title_ru}
          title_uz={about[0]?.title_uz}
          subTitle_ru={about[0]?.description_ru}
          subTitle_uz={about[0]?.description_uz}
          row={true}
        />
        <section className="relative w-full  aspect-video md:aspect-[16/6] my-20 md:my-[100px] lg:my-[150px]">
          <ImageUl
            priority={true}
            src={about[0]?.image}
            alt={"team"}
            imgStyle={"object-cover"}
          />
        </section>
        <section className="text-zinc-200 my-20 md:my-[100px] lg:my-[150px]">
          <div className="w-full  md:w-[50%] mb-5 md:mb-10 lg:mb-[60px]">
            <h3
              data-aos="fade-up"
              className="text-2xl mb-2.5 font-roboto font-bold text-center md:text-start md:text-3xl lg:text-4xl"
            >
              {i18n.language === "ru" ? whyWe?.data?.title_ru : whyWe?.data?.title_uz}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="80"
              className="font-openSans text-start md:text-md lg:text-lg xl:text-xl"
            >
              {i18n.language === "ru"
                ? whyWe?.data?.short_text_ru
                : whyWe?.data?.short_text_uz}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
            <div className="items-center justify-center hidden col-span-2 md:flex">
              <div className="w-[60%] aspect-square rounded-full animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] "></div>
            </div>
            <div className="col-span-3 ">
              <ol className="space-y-4 text-base font-openSans list-decimal list-inside md:space-y-5 lg:space-y-7 md:text-md lg:text-lg xl:text-xl">
                {whyWe?.data?.why_we_childs?.map((item, id) => (
                  <li key={item.id} data-aos="fade-up" data-aos-delay={id * 10}>
                    <span className="mr-2 font-semibold">
                      {i18n.language === "ru" ? item.title_ru : item.title_uz}
                    </span>
                    {i18n.language === "ru" ? item.text_ru : item.text_uz}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        {/* <Swiper
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
                1536: {
                  slidesPerView: 4.5,
                },
              }}
              slidesPerView={4.5}
              centeredSlides={true}
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
                team?.data.map((item , id) => (
                <SwiperSlide key={item.id}>
                <TeamCard person={item} id={id} />
              </SwiperSlide>
                ))
              }
              
              
            </Swiper> */}
        {/* <section className="my-20 md:my-[100px] lg:my-[150px] service">
          <SectionTitle text={t('about.team')}  />

          <div className=" lg:pt-[60px] md:pt-10 pt-5">
            
                <div className="grid grid-cols-1 gap-5 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {
                team?.data.map((item , id) => (
                <div key={item.id}>
                  <TeamCard person={item} id={id} />
                </div>
                ))
               }
                  
                </div>
          </div>
        </section> */}
        <section>
          <SectionTitle text={t("about.trust")} />
          <div className="grid grid-cols-2 xl:gap-14 lg:gap-10 md:gap-8 gap-3 md:grid-cols-5 lg:pt-[60px] md:pt-10 pt-5">
            {partnor?.data?.map((item) => (
                <div className=" relative w-[80%]  aspect-video filter grayscale hover:filter-none hover:grayscale-0 duration-200">
                  <ImageUl
                    src={item?.image}
                    imgStyle={"object-contain"}
                    alt={'abduganiev partnor'}
                  />
                </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default about;

export async function getServerSideProps({  res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [about] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/about`),
  ]);

  // Pass data to the page via props
  return {
    props: {
      about: about.data,
    },
  };
}
