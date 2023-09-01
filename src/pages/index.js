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
        {/* <meta
          name="description"
          content="Explore breathtaking travel destinations around the world."
        />
        <meta
          name="keywords"
          content="travel, destinations, explore, adventure"
        />
        <meta name="author" content="Abdug'aniev Team" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Discover Amazing Travel Destinations"
        />
        <meta
          property="og:description"
          content="Explore breathtaking travel destinations around the world."
        />
        <meta
          property="og:image"
          content="https://example.com/images/travel.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/travel-destinations"
        />
        <meta property="og:site_name" content="Travel Explorer" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelExplorer" />
        <meta
          name="twitter:title"
          content="Discover Amazing Travel Destinations"
        />
        <meta
          name="twitter:description"
          content="Explore breathtaking travel destinations around the world."
        />
        <meta
          name="twitter:image"
          content="/abduganiev-logoA.png"
        /> */}
        <link rel="icon" href="/abduganiev-logoA.png" />
        <title>Abdug'aniev Technology</title>
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
