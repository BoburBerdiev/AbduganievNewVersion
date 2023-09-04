import { CircleBg } from ".."
import {AiOutlineClose} from 'react-icons/ai'
import { BsInstagram , BsFacebook} from "react-icons/bs";
import { btnContact } from "@/slice/contactSlice"

import { useSelector ,useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import apiService from "@/service/api";

const Contact = () => {
  const { data: contactData,isLoading } = useQuery("contact", () =>
  apiService.getData("/contact")
);




  const { lang } = useSelector((state) => state.LanguageSlice);
  const {contact} = useSelector(state => state.contactSlice)
  const dispatch = useDispatch()
  const { t } = useTranslation();
  return (
    <main className={`fixed  ${contact ? 'flex' : 'hidden'}    top-0 w-full md:py-0  justify-center items-center min-h-screen left-0 z-[101] bg-neutral-950`}>
    <section className="relative w-full h-full">
      <div className="container relative py-[10%] md:px-[10%] ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 gap-y-16 md:gap-y-20 xl:gap-20">
          <div className="relative space-y-[30px] md:space-y-[50px] col-span-1">
            <h3 data-aos='fade-up'   className="text-zinc-200 text-3xl  text-center md:text-start  font-extrabold md:text-[40px] lg:text-5xl">
              <span className="gradient-background">
                {t('office')}
              </span>
            </h3>
            <CircleBg  bgStyle={'top-0 left-[20%] md:top-[80%] w-[40%]'}/>
            <div 
              data-aos='fade-up' data-aos-delay='20' 
            
            className="flex flex-col items-center md:items-start space-y-2.5  ">
              <p 
                className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">{t("footer.workTime")}:</span>
                <span className="font-thin">
                {lang === "ru"
                  ? contactData?.data[0]?.working_hours_ru
                  : contactData?.data[0]?.working_hours_uz}
                </span>
              </p>
              <a
                 href={`tel:${contactData?.data[0]?.phone}`}
                className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">{t("footer.phone")}:</span>
                <span className="font-thin">+998 90 707 07 07</span>
              </a>
             
              <a
                target="_blank"
                href={`mailto:${contactData?.data[0]?.email}`}

                className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">{t("footer.email")}:</span>
                <span className="font-thin">{contactData?.data[0]?.email}</span>
              </a>
              <a
                target="_blank"
                href={contactData?.data[0]?.map}
                className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">{t("footer.address")}:</span>
                <span className="font-thin">
                {lang === "ru"
                  ? contactData?.data[0]?.address_ru
                  : contactData?.data[0]?.address_uz
                  }  
                </span>
              </a>
            </div>
            <div className="space-y-2.5">
                <div className="text-lg font-bold text-center md:text-start text-zinc-200">
                  <p>
                    {t("footer.messenger")}
                  </p>
                </div>
                <div className="flex justify-center space-x-5 md:justify-start">
                  <a
                  target="_blank"
                  href={contactData?.data[0]?.instagram}
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsInstagram className="text-3xl " />
                  </a>
                  <a
                  target="_blank"
                  href={contactData?.data[0]?.facebook}
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsFacebook className="text-3xl " />
                  </a>
                
                  
                </div>
              </div>
          </div>
          <div className="static w-full col-span-1 md:relative ">
          <button onClick={() => (dispatch(btnContact()))}  className="absolute right-[2%] md:right-0 p-1 text-3xl rounded-lg top-[1%] hover:bg-zinc-200 hover:text-neutral-950 md:-top-20 text-zinc-200 ">
                <AiOutlineClose />
              </button>
          <iframe className="w-full  h-[30vh] lg:min-h-[60vh]  rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.000945559697!2d69.2642451755967!3d41.33059279951688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be02d75a5cb%3A0x6fe69b8a266e8aa4!2sOOO%20%22MARSS%20TEAM%20%22!5e0!3m2!1suz!2s!4v1692872461280!5m2!1suz!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Contact
