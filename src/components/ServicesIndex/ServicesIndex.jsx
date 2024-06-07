import { SectionTitle, ServiceCard } from "..";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const ServicesIndex = ({ serviceIndex }) => {
  gsap.registerPlugin(ScrollTrigger)
  const { t } = useTranslation();
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length-1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current ,
          pin: true,
          scrub: 2,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component );
    return () => ctx.revert();
  }, []);

  return (
      <section
          className="pt-20 md:pt-[100px] lg:pt-[150px] pb-10 md:pb-[50px] lg:pb-[75px] bg-neutral-950 service overflow-hidden"
          ref={component}
      >
        <div className="container" >
          <div className="mb-5 md:mb-10 lg:mb-14">
            <SectionTitle text={t('home.service')} />
          </div>
          <div className="flex gap-x-1 md:gap-x-5" ref={slider}>
            {serviceIndex?.map((item, id) => (
                <div className="shrink-0  w-[300px] md:w-[500px] panel" key={item?.id}>
                  <ServiceCard
                      id={id}
                      bg={item.image}
                      title_ru={item.title_ru}
                      title_uz={item.title_uz}
                      description_uz={item.description_uz}
                      description_ru={item.description_ru}
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesIndex;
