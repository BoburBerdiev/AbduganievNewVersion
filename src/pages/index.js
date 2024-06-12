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
  // const overlayRef = useRef(null);
  // const loaderRef = useRef(null);
  // const overlayTL = useRef(gsap.timeline());
  // const loaderTL = useRef(gsap.timeline());

  // const animateOut_2 = () => {
  //   overlayTL.current.to(overlayRef.current, {
  //     duration: 5,
  //     top: '100%',
  //     ease: 'expo',
  //     delay: 0.25,
  //   });
  //
  //   loaderTL.current.from(loaderRef.current, {
  //     duration: 0.1,
  //     rotate:'90deg',
  //     opacity: 0
  //   });
  //   loaderTL.current.to(loaderRef.current, {
  //     duration: 0.3,
  //     y: '50%',
  //     scale: 2,
  //     opacity: 0,
  //   });
  // };

  // SVG


  // SVG


  // const animateIn = () => {
  //   overlayTL.current.fromTo(
  //       overlayRef.current,
  //       { top: '100%', bottom: 0 },
  //       { top: 0, duration: 0.6, ease: 'expo' }
  //   );
  //   loaderTL.current.fromTo(
  //       loaderRef.current,
  //       { y: '40', opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.6 }
  //   );
  // };

  // useEffect(() => {
  //   setTimeout(animateOut_2, 5000);
  // }, []);


  return (
      <>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

          <link rel="icon" href="/abduganiev-logoA.png"/>
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
          <meta name="author" content="Abdug'aniev Team"/>

          <meta name="robots" content="index, follow"/>

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
          <meta property="og:site_name" content="Abduganiev Technology"/>

          <meta name="twitter:card" content="/public/abduganiev-min.png"/>
          <meta name="twitter:site" content="@AbduganievTechnology"/>
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
          <HeaderBanner header={header} partners={partners}/>
          <AboutIndex about={about} numberCount={numberCount}/>
          <ServicesIndex serviceIndex={serviceIndex}/>
          <PortfolioIndex projects={projects}/>
          <Feedback feedback={feedback}/>
        </main>
      </>
  );
}

export async function getServerSideProps({req, res}) {
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
