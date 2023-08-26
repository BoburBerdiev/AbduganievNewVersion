import { PortfolioCard ,PageSectionTItle } from "@/components";
import bgService from 'public/nurafshon business city-min.jpg'


const projects = () => {
  return (
    <>
      <main className="py-10 md:py-14 xl:py-24">
        <div className="container">
          <PageSectionTItle
            title={"Портфолио"}
            row={true}
            subTitle={
              "Каждая крупная компания должна благодарить не только себя, но и тех, кто стоял рядом с ней и верил в нее. Ведь самый главный принцип в нашей работе – доверие."
            }
          />
          <div className="md:py-[100px] py-10">
            <div className="grid grid-cols-1 gap-3 py-5 md:py-10 md:grid-cols-2 ">
              <PortfolioCard
                img={bgService}
                title={"Realtex"}
                subTitle={"Интернет Магазин"}
                href={"#"}
              />
              <PortfolioCard
                img={bgService}
                title={"Realtex"}
                subTitle={"Интернет Магазин"}
                href={"#"}
              />
              <PortfolioCard
                img={bgService}
                title={"Realtex"}
                subTitle={"Интернет Магазин"}
                href={"#"}
              />
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
