import { useTranslation } from 'react-i18next'
import {SectionTitle , PortfolioCard ,CurrentWhiteBtn } from '..'


const PortfolioIndex = ({projects}) => {
  const {t} = useTranslation()

  return (
    <>
    <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950 service">
      <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-16">
          <SectionTitle text={t('navbar.portfolio')} />
        </div>
        <div className="grid grid-cols-2 gap-5" >
        {
              projects?.map((item , id) => (
                  <div className={'portfolio shrink-0  '}>
                <PortfolioCard
                key={item?.id}
                img={item.image}
                name_uz={item.name_uz}
                name_ru={item.name_ru}
                type_ru={item.type_ru}
                type_uz={item.type_uz}
                href={item.link}
                id={id}
              />
                  </div>
              ))
            }
        </div>
          <div className="flex items-center justify-center mt-5 ">
              <CurrentWhiteBtn href={'/portfolio'} text={t('button.project')}/>
          </div>
      </div>
    </section>
  </>
  )
}

export default PortfolioIndex
