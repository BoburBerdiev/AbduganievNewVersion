import { useSelector } from "react-redux";
import { ImageUl, NumberCount, SectionTitle } from "..";

const AboutIndex = ({numberCount , about}) => {
  const {lang} = useSelector(state => state.LanguageSlice)

  return (
    <>




      <section className="py-20 md:py-[100px] lg:py-[150px] bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-[40px] xl:gap-[80px]">
            <div className="text-center space-y-[70px] md:text-start text-zinc-200">
              <div className="space-y-5">
                
              <SectionTitle text_uz={about[0]?.title_uz} text_ru={about[0]?.title_ru}/>
              
              <p className="text-lg text-justify lg:text-xl " data-aos='fade-up' data-aos-delay='50'>
                {
                  lang === 'ru' ? about[0]?.description_ru : about[0]?.description_uz
                }
              </p>
                
              </div>

  

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] ">
                {
                  numberCount?.map(item => (
                    
                    <NumberCount key={item.id} number={item.number} text_uz={item.name_uz} text_ru={item.name_ru}/>
                  ))
                }
              </div>
            </div>
            <div className="relative">
              <ImageUl src={'/abduganiev-logoA.png'} imgStyle={'object-contain'} />
            {/* <iframe data-aos='fade-up' data-aos-delay='100' className="w-full rounded-xl aspect-square md:h-full" src={about[0]?.link} title="Abduganiev Otabek. Maqsadlar yanada kengaymoqda. HUAWEI dan o&#39;zbek bolaga taklif" ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutIndex;
