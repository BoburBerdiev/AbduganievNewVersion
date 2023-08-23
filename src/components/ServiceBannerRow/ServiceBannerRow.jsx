import { useState } from "react"
import { ImageUl } from ".."

const ServiceBannerRow = () => {
  const [hover , setHover] = useState(false)
  return (

    <div className='grid grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10 '>
      <div className="space-y-5 md:space-y-2.5" onMouseEnter={() => (setHover(true))} onMouseLeave={() => (setHover(false))}>
        <h2 className={`text-zinc-200 ${hover ? 'gradient-background' : ''} lg:text-4xl md:text-3xl text-2xl font-semibold ` }>
        UX\UI Design
        </h2>
        <p className="text-base lg:text-xl md:text-lg text-zinc-200">
        Наша компания придерживается подхода к дизайну, ориентированного на человека. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид.
        </p>
      </div>
      <div className="w-full aspect-square">
        <ImageUl src={'/public/ux-ui-min.jpg'} alt={'UX/UI Design'} />
      </div>
    </div>
  )
}

export default ServiceBannerRow
