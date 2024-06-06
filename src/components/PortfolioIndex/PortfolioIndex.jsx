import { useTranslation } from 'react-i18next'
import {SectionTitle , PortfolioCard ,CurrentWhiteBtn } from '..'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


const PortfolioIndex = ({projects}) => {
  gsap.registerPlugin(ScrollTrigger)
  const {t} = useTranslation()
  const portfolioSection = useRef();
  const portfolioSlider = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".portfolio");
      gsap.to(panels, {
        xPercent: -120 * (panels.length-2),
        ease: "none",
        scrollTrigger: {
          trigger: portfolioSection.current ,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + portfolioSlider.current.offsetWidth
        }
      });
    }, portfolioSection );
    return () => ctx.revert();
  }, []);
  return (
    <>
    <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950 service" ref={portfolioSection}>
      <div className="container">
        <div className="mb-5 md:mb-10 lg:mb-16">
          <SectionTitle text={t('navbar.portfolio')} />
        </div>
        <div className="flex gap-x-5" ref={portfolioSlider}>
        {
              projects?.map((item , id) => (
                  <div className={'portfolio shrink-0 w-full md:w-[800px] '}>
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
