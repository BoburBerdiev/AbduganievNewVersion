import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import i18next from "i18next";

const SectionTitle = ({ text_uz, text_ru, text }) => {

  return (
      <>
        <motion.h2
            initial={{ opacity: 0  , y:'50px'}}
            whileInView={{ opacity: 1  , y:0}}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center md:text-start md:text-5xl lg:text-6xl text-zinc-200 font-roboto"
        >
          {i18next.language === "ru" ? text_ru : text_uz}
          {text}
        </motion.h2>
      </>
  );
};

export default SectionTitle;
