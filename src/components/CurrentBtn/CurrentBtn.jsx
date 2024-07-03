import {motion} from 'framer-motion'
const CurrentBtn = ({style , text  , onClick }) => {
  return (
    <div onClick={(e)=>e.stopPropagation()}>
      <motion.button whileTap={{opacity:0.9 , scale:0.98}}  onClick={()=>onClick(true)} className={`  glow-on-hover ${style ? style : ''} `} type="button"> {text} </motion.button>
    </div>
  )
}

export default CurrentBtn
