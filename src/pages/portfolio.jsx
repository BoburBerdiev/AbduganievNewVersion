import { PortfolioCard ,PageSectionTItle } from "@/components";
import axios from "axios";
import Head from "next/head";
import {useTranslation} from "react-i18next";
import NewProjectCard from "@/components/newPrpject-card/newProject-card";


const projects = ({projects , projectTitle}) => {
    const {i18n} = useTranslation()
  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="/abduganiev-logoA.png" />
        <title>Abduganiev Technology - {i18n.language === 'ru' ?  projectTitle[0]?.title_ru : projectTitle[0]?.title_uz} </title>
        <meta
          name="description"
          content=" Мы уже 5 лет работаем в сфере IT и сотрудничали со многими
          крупными компаниями включая зарубежных."
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
          content=" И имеем свою крупную базу
          постоянных клиентов."
        />
        <meta
          property="og:description"
          content="Мы уже 5 лет работаем в сфере IT и сотрудничали со многими
          крупными компаниями включая зарубежных."
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
          content="Мы уже 5 лет работаем в сфере IT и сотрудничали со многими
          крупными компаниями включая зарубежных."
        />
        <meta
          name="twitter:image"
          content="/abduganiev-logoA.png"
        />

      </Head>
      <main className="py-10 md:py-14 xl:py-24 bg-neutral-950">
        <div className="container">
         <PageSectionTItle
          title_ru={projectTitle[0]?.title_ru}
          title_uz={projectTitle[0]?.title_uz}
          subTitle_ru={projectTitle[0]?.description_ru}
          subTitle_uz={projectTitle[0]?.description_uz}
          row={true}
          
        /> 
          <div className="md:py-[100px] py-10">
            <div className="grid grid-cols-1 gap-4 md:gap-5 py-5 md:py-10 md:grid-cols-2  ">
            {
              projects?.map(item => (
                <PortfolioCard
                key={item.id}
                img={item.image}
                name_uz={item.name_uz}
                name_ru={item.name_ru}
                type_ru={item.type_ru}
                type_uz={item.type_uz}
                href={item.link}
              />
              ))
            }
              {/*{*/}
              {/*  projects?.map(item => (*/}
              {/*      <NewProjectCard*/}
              {/*          key={item.id}*/}
              {/*          img={item.image}*/}
              {/*          name_uz={item.name_uz}*/}
              {/*          name_ru={item.name_ru}*/}
              {/*          type_ru={item.type_ru}*/}
              {/*          type_uz={item.type_uz}*/}
              {/*          href={item.link}*/}
              {/*      />*/}
              {/*  ))*/}
              {/*}*/}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;


export async function getServerSideProps({  res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [projects] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio`),
])
  const [projectTitle] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio-page`),
])


  return {
    props: {
      projects: projects.data,
      projectTitle: projectTitle.data,
    },
  };
}
