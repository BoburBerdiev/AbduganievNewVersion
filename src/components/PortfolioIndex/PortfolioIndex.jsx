import {SectionTitle , PortfolioCard ,CurrentWhiteBtn } from '..'
import bgService from 'public/nurafshon business city-min.jpg'


const PortfolioIndex = () => {
  return (
    <>
    <section className="py-20 md:py-[50px] lg:py-[75px] bg-neutral-950 service">
      <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-16">
          <SectionTitle text={"Портфолио"} />
        </div>
        <div className="grid grid-cols-1 gap-3 py-5 md:py-10 md:grid-cols-2 ">
          <PortfolioCard img={bgService} title={'Realtex'} subTitle={'Интернет Магазин'} href={'#'} />
          <PortfolioCard img={bgService} title={'Realtex'} subTitle={'Интернет Магазин'} href={'#'} />
          <PortfolioCard img={bgService} title={'Realtex'} subTitle={'Интернет Магазин'} href={'#'} />
        </div>
          <div className="flex items-center justify-center ">
            <CurrentWhiteBtn text={'Все проекты'}/>
          </div>
      </div>
    </section>
  </>
  )
}

export default PortfolioIndex
