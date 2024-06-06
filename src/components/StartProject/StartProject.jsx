import { btnForm } from "@/slice/formSlice";
import { CurrentBtn } from "..";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const StartProject = () => {
  const dispatch = useDispatch();
  const main = useRef(null);
  const textElement = useRef(null);
  const btnElement = useRef(null);
  const { t } = useTranslation();
  const openForm = () => {
    dispatch(btnForm(true));
  };

  useEffect(() => {
    const element = textElement.current;
    if(main && element) {
      gsap.fromTo(element,
          {
            opacity: 0,
            x: 200,
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: main.current,
            }
          }
      );
      gsap.fromTo(document.querySelector('.btn'),
          {
            opacity: 0,
            x: "-200px",
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: element,
            }
          }
      );
    }
  }, []);

  return (
      <>
        <section className="py-10 md:py-[50px] lg:py-[75px] bg-neutral-950">
          <div className="container relative">
            <div className="w-[10%] top-5 left-0 absolute aspect-square rounded-full z-[2] animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)]">
            </div>
            <div className="relative z-10 grid grid-cols-5 mb-5 md:mb-10 lg:mb-16">
              <div className="col-span-5 space-y-10 md:space-y-20 md:col-span-4" ref={main}>
                <h3 className="text-5xl font-roboto font-bold text-center md:text-start md:text-7xl" ref={textElement}>
                <span className="gradient-background">
                  {t('home.startProject')}
                </span>
                </h3>
                <div className="flex items-center justify-center md:justify-start btn">
                  <CurrentBtn
                      onClick={openForm}
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
