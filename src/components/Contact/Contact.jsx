import {CircleBg} from ".."
import {AiOutlineClose} from 'react-icons/ai'
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {btnContact} from "@/slice/contactSlice"

import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {FaLinkedin, FaTelegram, FaYoutube} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";

const Contact = () => {
  const {data: contactData} = useQuery("contact", () =>
      apiService.getData("/contact")
  );
  const {lang} = useSelector((state) => state.LanguageSlice);
  const {contact} = useSelector(state => state.contactSlice)
  const dispatch = useDispatch()
  const {t} = useTranslation();


  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4
      }
    }
  };

  return (
      <AnimatePresence>
        {
            contact &&
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className={`fixed flex  top-0 w-full md:py-0  justify-center items-center min-h-screen left-0 z-[101] bg-neutral-950`}>
              <motion.div initial={{ y: "100vh" ,scaleY: 0 }}
                          animate={{ y: 0 , scaleY: 1 }}
                          exit={{  y: "100vh" , scaleY:0 }}
                          transition={{ duration: 0.4 }} className="relative w-full h-full">
                <div className="container relative py-[10%] md:px-[10%] ">
                  <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 gap-y-16 md:gap-y-20 xl:gap-20"
                       onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative space-y-[30px] md:space-y-[50px] col-span-1">
                      <h3
                          className="text-zinc-200 text-3xl  text-center md:text-start  font-extrabold md:text-[40px] lg:text-5xl">
              <span className="gradient-background">
                {t('office')}
              </span>
                      </h3>
                      <CircleBg bgStyle={'top-0 left-[20%] md:top-[80%] w-[40%]'}/>
                      <div


                          className="flex flex-col font-openSans items-center md:items-start space-y-2.5  ">
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
                          <span className="font-thin">+998 99 807 07 08</span>
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
                              href={contactData?.data[0]?.telegram}
                              target="_blank"
                              className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                          >
                            <FaTelegram className="text-3xl "/>
                          </a>
                          <a
                              href={contactData?.data[0]?.linkedin}
                              target="_blank"
                              className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                          >
                            <FaLinkedin className="text-3xl "/>
                          </a>
                          <a
                              href={contactData?.data[0]?.youtube}
                              target="_blank"
                              className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                          >
                            <FaYoutube className="text-3xl "/>
                          </a>
                          <a
                              href={contactData?.data[0]?.instagram}
                              target="_blank"
                              className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                          >
                            <BsInstagram className="text-3xl "/>
                          </a>
                          <a
                              href={contactData?.data[0]?.facebook}
                              target="_blank"
                              className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                          >
                            <BsFacebook className="text-3xl "/>
                          </a>


                        </div>
                      </div>
                    </div>
                    <div className="static w-full col-span-1 md:relative ">
                      <button onClick={() => (dispatch(btnContact(false)))}
                              className="absolute right-[2%] md:right-0 p-1 text-3xl rounded-lg top-[1%] hover:bg-zinc-200 hover:text-neutral-950 md:-top-20 text-zinc-200 ">
                        <AiOutlineClose/>
                      </button>
                      <iframe className="w-full  h-[30vh] lg:min-h-[60vh]  rounded-lg"
                              src={contactData?.data[0]?.map}
                              allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        }
      </AnimatePresence>

  )
}

export default Contact
