import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"


// import {Num} from '../num'
const NumberCount = ({ number, text}) => {

  const [counterOn , setCounterOn] = useState(false)

  return (
    <div className="space-y-5 text-center">
      <ScrollTrigger onEnter={() => (setCounterOn(true))} onExit={() => (setCounterOn(false))}>
        <h5 className="font-extrabold text-7xl gradient-background">
          {
            counterOn &&
          <CountUp start={0} end={number} duration={5} delay={0} />
          }
        </h5>
      </ScrollTrigger>
    <p className="text-3xl font-bold text-zinc-200">
      {text}
    </p>
  </div>
  )
}

export default NumberCount
