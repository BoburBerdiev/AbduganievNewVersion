import {
  HeaderBanner,
  AboutIndex,
  ServicesIndex,
  PortfolioIndex,
  Feedback, ImageUl,
    Loader
} from "@/components";
import axios from "axios";
import Head from "next/head";
import React, { useRef, useEffect } from 'react';
import logo from "public/abduganiev-min.png";
import logoA from "public/logo-A.png";
import { gsap } from 'gsap';
export default function Home({
  header,
  partners,
  numberCount,
  about,
  serviceIndex,
  feedback,
  projects,
}) {
  const overlayRef = useRef(null);
  const loaderRef = useRef(null);
  const overlayTL = useRef(gsap.timeline());
  const loaderTL = useRef(gsap.timeline());

  const animateOut_2 = () => {
    overlayTL.current.to(overlayRef.current, {
      duration: 5,
      top: '100%',
      ease: 'expo',
      delay: 0.25,
    });

    loaderTL.current.from(loaderRef.current, {
      duration: 0.1,
      rotate:'90deg',
      opacity: 0
    });
    loaderTL.current.to(loaderRef.current, {
      duration: 0.3,
      y: '50%',
      scale: 2,
      opacity: 0,
    });
  };

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

  useEffect(() => {
    setTimeout(animateOut_2, 5000);
  }, []);


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
          <div ref={overlayRef}
               className="overlay w-full h-full fixed bg-black z-[100000] flex justify-center items-center">
            <div ref={loaderRef} className="overlay-loader relative  w-[90vh] aspect-video">
              {/*<ImageUl src={logoA} priority={100} imgStyle={'object-contain'}/>*/}
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 606 841" fill="none">
                <g filter="url(#filter0_f_928_515)">
                  <rect width="439.747" height="169.913" rx="84.9563"
                        transform="matrix(4.52594e-05 1.00013 -0.999873 -0.000332092 376.153 200.508)"
                        fill="url(#paint0_linear_928_515)" fill-opacity="0.3"/>
                </g>
                <rect width="439.971" height="169.826" rx="84.913"
                      transform="matrix(0.499674 -0.866252 -0.865994 -0.499987 187.117 634.442)" fill="#00FF78"/>
                <g filter="url(#filter1_dddddd_928_515)">
                  <rect width="439.521" height="170" rx="84.9999"
                        transform="matrix(0.500264 0.866019 -0.866174 0.499489 321.62 169.156)"
                        fill="url(#paint1_linear_928_515)"/>
                </g>
                <defs>
                  <filter id="filter0_f_928_515" x="6.26532" y="0.479401" width="569.903" height="839.802"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_928_515"/>
                  </filter>
                  <filter id="filter1_dddddd_928_515" x="12.2382" y="26.4032" width="574.904" height="673.395"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-1.07858" dy="-0.719056"/>
                    <feGaussianBlur stdDeviation="2.65625"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0674074 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_928_515"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-4.74577" dy="-3.16385"/>
                    <feGaussianBlur stdDeviation="5.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109926 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_928_515" result="effect2_dropShadow_928_515"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-11.6487" dy="-7.7658"/>
                    <feGaussianBlur stdDeviation="10.9688"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
                    <feBlend mode="normal" in2="effect2_dropShadow_928_515" result="effect3_dropShadow_928_515"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-22.4345" dy="-14.9564"/>
                    <feGaussianBlur stdDeviation="21.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.170074 0"/>
                    <feBlend mode="normal" in2="effect3_dropShadow_928_515" result="effect4_dropShadow_928_515"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-37.7504" dy="-25.167"/>
                    <feGaussianBlur stdDeviation="39.5312"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.212593 0"/>
                    <feBlend mode="normal" in2="effect4_dropShadow_928_515" result="effect5_dropShadow_928_515"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-58.2435" dy="-38.829"/>
                    <feGaussianBlur stdDeviation="67.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
                    <feBlend mode="normal" in2="effect5_dropShadow_928_515" result="effect6_dropShadow_928_515"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_928_515" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_928_515" x1="68.7074" y1="186.01" x2="315.039" y2="23.7574"
                                  gradientUnits="userSpaceOnUse">
                    <stop offset="0.347752" stop-color="#00FF7E"/>
                    <stop offset="0.957455" stop-color="#001EFF"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_928_515" x1="68.6722" y1="186.105" x2="315.031" y2="24.0015"
                                  gradientUnits="userSpaceOnUse">
                    <stop offset="0.347752" stop-color="#00FF7E"/>
                    <stop offset="0.957455" stop-color="#001EFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <Loader/>
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
