import Link from 'next/link'
import {motion} from 'framer-motion'

const CurrentWhiteBtn = ({text, href,onClick}) => {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            {
                href ?
                    <motion.div
                        whileTap={{opacity:0.9 , scale:0.98}}
                        initial={{ opacity: 0  , y:50}}
                        whileInView={{ opacity: 1  , y:0}}  viewport={{ once: true }}
                        className='sm:px-8 px-7 ease-in sm:py-4 py-3 border-2 text-zinc-200 hover:bg-zinc-200 hover:text-neutral-950 duration-150 rounded-[50px] border-zinc-200 text-sm font-medium sm:text-lg font-openSans'>
                        <Link href={href}  prefetch={false} >
                            {text}
                        </Link>

                    </motion.div>
                    :
                    <motion.button
                        whileTap={{opacity:0.9 , scale:0.98}}
                        onClick={()=>onClick()}
                        initial={{ opacity: 0  , y:50}}
                        whileInView={{ opacity: 1  , y:0}}  viewport={{ once: true }}
                        className='sm:px-8 px-7 ease-in sm:py-4 py-3 border-2 text-zinc-200 hover:bg-zinc-200 hover:text-neutral-950 duration-150 rounded-[50px] border-zinc-200 text-sm font-medium sm:text-lg'>
                        {text}
                    </motion.button>

            }
        </div>
    )
}

export default CurrentWhiteBtn
