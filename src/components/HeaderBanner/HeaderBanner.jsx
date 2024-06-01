import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CurrentWhiteBtn, ImageUl, PartnorList, ContactForm } from "..";
import { useDispatch, useSelector } from "react-redux";
import { btnForm } from "@/slice/formSlice";
import { motion } from "framer-motion";

const HeaderBanner = ({ header, partners }) => {
  const { lang } = useSelector((state) => state.LanguageSlice);
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(btnForm(true));
  };
  const { t } = useTranslation();

  const [currentFrame, setCurrentFrame] = useState(0);
  const frameSize = 1; // Number of lines to display in each frame

  const textLines =
      lang === "ru"
          ? header[0]?.content_ru.split("\n")
          : header[0]?.content_uz.split("\n");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % textLines.length);
    }, 2000); // Change frame every 2 seconds

    return () => clearInterval(interval);
  }, [textLines.length]);

  const currentText = textLines.slice(currentFrame, currentFrame + frameSize);

  return (
      <header className="py-8 md:pt-20 pb-[100px] bg-neutral-950">
        <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="order-2 space-y-5 text-center text-white md:space-y-8 md:text-start md:order-1">
            <motion.h1
                className="text-6xl font-bold md:text-7xl font-roboto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
              {lang === "ru" ? header[0]?.title_ru : header[0]?.title_uz}
            </motion.h1>
            <motion.p
                className="text-sm font-thin lg:text-lg font-openSans"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
              {currentText}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
              <CurrentWhiteBtn onClick={openForm} text={t("button.start")} />
            </motion.div>
          </div>
          <motion.div
              className="relative flex items-center justify-center order-1 duration-500 md:h-full md:order-2 aspect-video group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ImageUl
                src={header[0]?.image}
                imgStyle={"object-contain rotate-[60deg] group-hover:rotate-0"}
                alt={"Abduganiev icon"}
            />
          </motion.div>
        </div>
        <div className="pt-8 md:pt-[100px]">
          <PartnorList partners={partners} />
        </div>
      </header>
  );
};

export default HeaderBanner;
