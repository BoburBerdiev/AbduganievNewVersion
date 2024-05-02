import {
  HeaderBanner,
  AboutIndex,
  ServicesIndex,
  PortfolioIndex,
  Feedback,
} from "@/components";
import axios from "axios";
import Head from "next/head";
export default function Home({
  header,
  partners,
  numberCount,
  about,
  serviceIndex,
  feedback,
  projects,
}) {

 
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="/abduganiev-logoA.png" />
        <title>Abduganiev Technology</title>
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
          content="Разработка сайтов различных сложностей"
        />
        <meta
          name="twitter:description"
          content="Изменение функций и другие услуги. Мы реализуем все ваши планы на высшем уровне.."
        />
        <meta
          name="twitter:image"
          content="/abduganiev-logoA.png"
        />


      </Head>

      <main>
        <HeaderBanner header={header} partners={partners} />
        <AboutIndex about={about} numberCount={numberCount} />
        <ServicesIndex serviceIndex={serviceIndex} />
        <PortfolioIndex projects={projects} />
        <Feedback feedback={feedback} />
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [partners] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/partners`),
  ]);

  const [numberCount] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/experience`),
  ]);
  const [about] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/whoarewe`),
  ]);
  const [header] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/header-banner`),
  ]);
  const [serviceIndex] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/index-service`),
  ]);
  const [projects] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio/?digit=4`),
  ]);
  const [feedback] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/feedback`),
  ]);

  // Pass data to the page via props
  return {
    props: {
      partners: partners.data,
      numberCount: numberCount.data,
      about: about.data,
      header: header.data,
      serviceIndex: serviceIndex.data,
      projects: projects.data,
      feedback: feedback.data,
    },
  };
}
