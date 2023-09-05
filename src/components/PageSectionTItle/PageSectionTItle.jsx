import { useSelector } from "react-redux"
import { CircleBg } from ".."

const PageSectionTItle = ({title_ru , title_uz, subTitle_ru , subTitle_uz , row}) => {
  const {lang} = useSelector(state => state.LanguageSlice)

  return (
    <>
    {
      row ? 
    <div className="flex flex-col space-y-2.5 md:space-y-0 items-center justify-between font-semibold md:items-start md:flex-row text-zinc-200 ">
      <h1 data-aos='fade-up' className="text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      
      {
        lang === 'ru' ? title_ru : title_uz
      }
      </h1>      
      <p data-aos='fade-up' data-aos-delay='80' className="text-base md:text-lg lg:text-xl   text-center  md:text-justify w-full md:w-[50%]">
      {
        lang === 'ru' ? subTitle_ru : subTitle_uz
      }
      </p>
    </div>
    : 
    <div className="flex relative flex-col space-y-2.5 lg:space-y-6 items-center  md:items-start font-semibold text-zinc-200 ">
      <h1 data-aos='fade-up' className="text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      {
        lang === 'ru' ? title_ru : title_uz
      }
      </h1>      
      <p data-aos='fade-up' data-aos-delay='80' className="text-base md:text-lg lg:text-xl   text-center  md:text-justify w-full md:w-[60%]">
      {
        lang === 'ru' ? subTitle_ru : subTitle_uz
      }
      </p>
      <CircleBg bgStyle={'-top-20 right-0 w-[20%] md:block hidden'} />
    </div>
    }
    </>

    
  )
}

export default PageSectionTItle
