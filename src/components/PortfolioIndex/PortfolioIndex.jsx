import { useTranslation } from 'react-i18next'
import {SectionTitle , PortfolioCard ,CurrentWhiteBtn } from '..'
import Link from 'next/link'


const PortfolioIndex = ({projects}) => {
  const {t} = useTranslation()
  return (
    <>
    <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950 service">
      <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-16">
          <SectionTitle text={t('navbar.portfolio')} />
        </div>
        <div className="grid grid-cols-1 gap-3 py-5 md:py-10 md:grid-cols-2 ">
        {
              projects?.map((item , id) => (
                <PortfolioCard
                key={item?.id}
                img={item.image}
                name_uz={item.name_uz}
                name_ru={item.name_ru}
                type_ru={item.type_ru}
                type_uz={item.type_uz}
                description_ru={item.description_ru}
                description_uz={item.description_uz}
                href={item.link}
                id={id}
              />
              ))
            }
        </div>
          <div className="flex items-center justify-center ">
              <CurrentWhiteBtn href={'/portfolio'} text={t('button.project')}/>
          </div>
      </div>
    </section>
  </>
  )
}

export default PortfolioIndex
