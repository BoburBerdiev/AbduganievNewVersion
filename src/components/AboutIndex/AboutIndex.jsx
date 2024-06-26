import { ImageUl, NumberCount, SectionTitle } from "..";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

const AboutIndex = ({numberCount , about}) => {
  const {i18n} = useTranslation()
  return (
    <>




      <section className="py-20 md:py-[100px] lg:py-[150px] bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-[40px] xl:gap-[80px]">
            <div className="text-center space-y-[70px] md:text-start text-zinc-200">
              <div className="space-y-5">
                
              <SectionTitle text_uz={about[0]?.title_uz} text_ru={about[0]?.title_ru}/>
              
              <p
                  className="text-lg text-justify lg:text-xl  font-openSans">
                {
                  i18n.language === 'ru' ? about[0]?.description_ru : about[0]?.description_uz
                }
              </p>
                
              </div>

  

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]  ">
                {
                  numberCount?.map((item , key) => (
                    <div key={item.id}>
                    <NumberCount  number={item.number} text_uz={item.name_uz} text_ru={item.name_ru}/>

                    </div>
                  ))
                }
              </div>
            </div>
            <div className="relative ">
              <ImageUl src={'/office 1-min.jpg'} imgStyle={'object-cover  rounded-[5%] overflow-hidden'} />
            {/* <iframe data-aos='fade-up' data-aos-delay='100' className="w-full rounded-xl aspect-square md:h-full" src={about[0]?.link} title="Abduganiev Otabek. Maqsadlar yanada kengaymoqda. HUAWEI dan o&#39;zbek bolaga taklif" ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutIndex;
