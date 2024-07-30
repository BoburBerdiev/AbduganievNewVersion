import { CircleBg } from ".."
import {useTranslation} from "react-i18next";
import { motion } from "framer-motion";

const PageSectionTItle = ({title_ru , title_uz, subTitle_ru , subTitle_uz , row}) => {

  const {   i18n} = useTranslation()

  return (
    <>
    {
      row ? 
    <div className="flex flex-col space-y-2.5 md:space-y-0 items-center justify-between font-bold md:items-start md:flex-row text-zinc-200 ">
      <motion.h2 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}  viewport={{ once: true }}  className="font-roboto text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      
      {
        i18n.language === 'ru' ? title_ru : title_uz
      }
      </motion.h2>
      <motion.p  initial={{ opacity: 0  , y:50}}
                 whileInView={{ opacity: 1  , y:0}}  viewport={{ once: true }}   className="font-openSans text-base md:text-lg lg:text-xl   text-center  md:text-justify w-full md:w-[50%]">
      {
        i18n.language === 'ru' ? subTitle_ru : subTitle_uz
      }
      </motion.p>
    </div>
    : 
    <div className="flex relative flex-col space-y-2.5 lg:space-y-6 items-center  md:items-start font-bold text-zinc-200 ">
      <motion.h2 initial={{ opacity: 0  , y:50}}
                 whileInView={{ opacity: 1  , y:0}} viewport={{ once: true }} className="font-roboto text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      {
        i18n.language === 'ru' ? title_ru : title_uz
      }
      </motion.h2>
      <motion.p  initial={{ opacity: 0  , y:50}}
                 whileInView={{ opacity: 1  , y:0}}  viewport={{ once: true }} data-aos='fade-up' data-aos-delay='80' className="font-openSans text-base md:text-lg lg:text-xl   text-center  md:text-justify w-full md:w-[60%]">
      {
        i18n.language === 'ru' ? subTitle_ru : subTitle_uz
      }
      </motion.p>
      <CircleBg bgStyle={'-top-20 right-0 w-[20%] md:block hidden'} />
    </div>
    }
    </>

    
  )
}

export default PageSectionTItle
