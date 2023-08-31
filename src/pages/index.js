import { HeaderBanner ,  AboutIndex , ServicesIndex, PortfolioIndex, Feedback , } from "@/components";
import axios from "axios";
import Head from "next/head";

export default function Home({header , partners , numberCount ,about , serviceIndex ,feedback , projects}) {



  return (
      <>
      <Head>
        <link rel="icon" href="/abduganiev-logoA.png" />
      </Head>
        <main>
          <HeaderBanner header={header} partners={partners} />
          <AboutIndex about={about} numberCount={numberCount} />
          <ServicesIndex serviceIndex={serviceIndex} />
          <PortfolioIndex projects={projects} />
          <Feedback feedback={feedback} />
        </main>
      </>
    )

}


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [partners] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/partners`),
])

  const [numberCount] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/experience`)
  ])
  const [about] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/whoarewe`)
  ])
  const [header] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/header-banner`)
  ])
  const [serviceIndex] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/index-service`)
  ])
  const [projects] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio`),
])
  const [feedback] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/feedback`),
])

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