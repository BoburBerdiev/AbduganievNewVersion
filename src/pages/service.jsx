import { PageSectionTItle, ImageUl, ServiceTextCard } from "@/components";
import axios from "axios";
import Head from "next/head";
import { useSelector } from "react-redux";
import i18next from "i18next";


const service = ({ service , serviceTitle }) => {


  return (
    <>
    
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="/abduganiev-logoA.png" />
        <title>Abduganiev Technology - {i18next.language === 'ru' ?  serviceTitle[0]?.title_ru : serviceTitle[0]?.title_uz} </title>
        <meta
          name="description"
          content="Все наши услуги доступны по отдельности, а также внутри пакета услуг"
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
          content=" Мы предоставляем широкий спектр услуг в сфере IT и SMM."
        />
        <meta
          property="og:description"
          content="Все наши услуги доступны по отдельности, а также внутри пакета услуг"
        />
        
        <meta
          property="og:image"
          content="/public/abduganiev-min.png"
        />
        <meta
          property="og:url"
          content="https://abduganiev.uz/"
        />
        <meta property="og:site_name" content="Abduganiev Technology" />

        <meta name="twitter:card" content="/public/abduganiev-min.png" />
        <meta name="twitter:site" content="@AbduganievTechnology" />
        <meta
          name="twitter:title"
          content="И имеем свою крупную базу
          постоянных клиентов."
        />
        <meta
          name="twitter:description"
          content="Все наши услуги доступны по отдельности, а также внутри пакета услуг"
        />
        <meta
          name="twitter:image"
          content="/abduganiev-logoA.png"
        />

      </Head>
    <main className="py-10 md:py-14 xl:py-24 bg-neutral-950">
      <div className="container">
      <PageSectionTItle
          title_ru={serviceTitle[0]?.title_ru}
          title_uz={serviceTitle[0]?.title_uz}
          subTitle_ru={serviceTitle[0]?.description_ru}
          subTitle_uz={serviceTitle[0]?.description_uz}
          row={true}
          
        />

        {service?.map((item,key) => 
        <div key={item.id}>
         <div className="py-5 md:py-10 lg:py-13 xl:py-18">
             <div className={`grid items-center   grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10`}>
             <div data-aos='fade-up' className={`${ item.id % 2 !== 0 ? 'order-2 md:order-1' :'order-1 md:order-2' }`}>
               <ServiceTextCard
                 description_ru={item?.description_ru}
                 description_uz={item?.description_uz}
                 name_ru={item?.name_ru}
                 name_uz={item?.name_uz}
                 id={key}
               />
             </div>
             <div data-aos='fade-up' data-aos-delay='50' className={` ${ item.id % 2 !== 0 ? 'order-2 md:order-2' :'order-1 md:order-1' } relative  w-full aspect-video`}>
               <ImageUl
                 src={item?.image}
                 alt={"UX/UI Design"}
                 imgStyle={"object-cover rounded-lg"}
               />
             </div>
           </div>
         
        </div>
           
        <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
        {
          item.service_child?.map((child ,id) => (
            <div key={id}>
              <ServiceTextCard
                description_ru={child?.description_ru}
                description_uz={child?.description_uz}
                name_ru={child?.name_ru}
                name_uz={child?.name_uz}
              />
            </div>
            
          ))
        }
            
          </div>
        </div>
        </div>
        )}
       
       
      </div>
    </main>
    </>
  );
};

export default service;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [service] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/service-with-image`),
  ]);
  const [serviceTitle] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/main-service`),
  ]);

  // Pass data to the page via props
  return {
    props: {
      service: service.data,
      serviceTitle: serviceTitle.data,
    },
  };
}
