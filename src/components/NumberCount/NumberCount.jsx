import { useState } from "react"
import CountUp from "react-countup"
import { useSelector } from "react-redux"
import ScrollTrigger from "react-scroll-trigger"

const NumberCount = ({ number, text_uz , text_ru}) => {
  const {lang} = useSelector(state => state.LanguageSlice)

  const [counterOn , setCounterOn] = useState(false)
  // counterOn &&
// CountUp ni oliga qoyiw kk  har safar ref resh
  
  return (
    <div className="space-y-5 text-center" data-aos='fade-up'>
      <ScrollTrigger onEnter={() => (setCounterOn(true))} onExit={() => (setCounterOn(false))}>
        <h5 className="text-6xl font-extrabold gradient-background">
          {
       
          <CountUp start={0} end={number} duration={5} delay={0} />  
          }
        </h5>
      </ScrollTrigger>
    <p className="text-2xl font-bold text-zinc-200">
      {
        lang === 'ru' ? text_ru : text_uz
      }
    </p>
  </div>
  )
}

export default NumberCount
