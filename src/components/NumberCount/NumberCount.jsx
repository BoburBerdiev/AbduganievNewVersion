import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import {useTranslation} from "react-i18next";

const NumberCount = ({ number, text_uz , text_ru}) => {
    const {i18n} = useTranslation()
  const [counterOn , setCounterOn] = useState(false)
  // counterOn &&
// CountUp ni oliga qoyiw kk  har safar ref resh
  
  return (
    <div className="space-y-5 text-center" data-aos='fade-up' >
      <ScrollTrigger onEnter={() => (setCounterOn(true))} onExit={() => (setCounterOn(false))}>
        <h5 className="text-6xl font-extrabold gradient-background">
          {
       
          <CountUp start={0} end={number} duration={10} delay={0} />
          }
          {
            'Лет Опыта' === text_ru ? ' +' : ''
          }
          {
            'Проектов' === text_ru ? ' +' : ''
          }

          
        </h5>
      </ScrollTrigger>
    <p className="text-xl font-bold md:text-2xl text-zinc-200">
      {
        i18n.language === 'ru' ? text_ru : text_uz
      }
    </p>
  </div>
  )
}

export default NumberCount
