import { HeaderBanner ,  AboutIndex , ServicesIndex, PortfolioIndex, StartProject, Feedback } from "@/components";
import Head from "next/head";

export default function Home() {

    return (
      <>
      
        <main>
          <HeaderBanner />
          <AboutIndex />
          <ServicesIndex />
          <PortfolioIndex/>
          <Feedback />
        </main>
      </>
    )

}