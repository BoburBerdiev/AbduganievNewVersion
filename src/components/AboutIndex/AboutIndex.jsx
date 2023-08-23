import { NumberCount, SectionTitle } from "..";

const AboutIndex = () => {
  return (
    <>
      <section className="py-20 md:py-[50px] lg:py-[75px] bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1  xl:grid-cols-2 gap-[50px]">
            <div className="text-center space-y-[70px] md:text-start text-zinc-200">
              <div className="space-y-5">
              <SectionTitle text={'Кто Мы'}/>
              
              <p className="text-xl lg:text-2xl ">
              ABDUGANIEV TECHNOLOGY уже долгое время как начало свою работу и тем самым обладает обширным опытом и занимает ведущие позиции в IT- сфере. Мы обеспечиваем трансформацию бизнеса наших клиентов на более эффективной основе современных информационных технологий.
              </p>
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] ">
                <NumberCount number={5} text={'Лет Опыта'}/>
                <NumberCount number={'30+'} text={'Проектов'}/>
                <NumberCount number={3} text={'Офиса'}/>
              </div>
            </div>
            <div>
            <iframe className="w-full rounded-xl aspect-video" src="https://www.youtube.com/embed/zOGyVZuFHhs" title="Abduganiev Otabek. Maqsadlar yanada kengaymoqda. HUAWEI dan o&#39;zbek bolaga taklif" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutIndex;
