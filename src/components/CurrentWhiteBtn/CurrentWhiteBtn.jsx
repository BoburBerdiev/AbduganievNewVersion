import Link from 'next/link'

const CurrentWhiteBtn = ({text, href,onClick}) => {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            {
                href ?
                    <div
                        className='sm:px-8 px-7 ease-in sm:py-4 py-3 border-2 text-zinc-200 hover:bg-zinc-200 hover:text-neutral-950 duration-150 rounded-[50px] border-zinc-200 text-sm font-medium sm:text-lg'>
                        <Link href={href} data-aos='fade-up' data-aos-delay='50'>
                            {text}
                        </Link>

                    </div>
                    :
                    <button
                        onClick={()=>onClick()}
                        data-aos='fade-up' data-aos-delay='50'
                            className='sm:px-8 px-7 ease-in sm:py-4 py-3 border-2 text-zinc-200 hover:bg-zinc-200 hover:text-neutral-950 duration-150 rounded-[50px] border-zinc-200 text-sm font-medium sm:text-lg'>
                        {text}
                    </button>

            }
        </div>
    )
}

export default CurrentWhiteBtn
