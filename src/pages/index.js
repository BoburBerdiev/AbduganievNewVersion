import { HeaderBanner ,  AboutIndex , ServicesIndex, PortfolioIndex, StartProject, Feedback } from "@/components";

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