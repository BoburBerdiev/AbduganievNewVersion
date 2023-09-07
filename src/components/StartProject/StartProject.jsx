import { btnForm } from "@/slice/formSlice";
import {  CurrentBtn  , ContactForm} from "..";
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next";

const StartProject = () => {
  const dispatch = useDispatch()
  
      const openForm = () => {
        dispatch(btnForm(true))
      }
      const {t} = useTranslation()
      return (
    <>
      <ContactForm  />

      <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950 ">
        <div className="container relative">
          <div className='w-[10%] top-5 left-0 absolute aspect-square rounded-full z-[2] animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] '>
                
          </div>
          <div className="relative z-10 grid grid-cols-5 mb-5 md:mb-10 lg:mb-16">
            <div className="col-span-5 space-y-10 md:space-y-20 md:col-span-4">
              <h1 className="text-5xl font-extrabold text-center md:text-start md:text-7xl" data-aos='fade-up' >
                <span className="gradient-background">
                 {
                  t('home.startProject')
                 }
                </span>
              </h1>
              <div className="flex items-center justify-center md:justify-start">
                <CurrentBtn  onClick={openForm}
                  style={"py-4 px-9 after:rounded-[50px] before:rounded-[50px]"}
                  text={t('button.start')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartProject;
