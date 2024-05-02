import React from 'react'
import {RiDoubleQuotesR} from 'react-icons/ri'
import {  ImageUl } from "..";
import { useSelector } from "react-redux";

const FeedbackCard = ({img , title_ru , title_uz , author_ru ,author_uz , job_ru , job_uz ,description_ru ,description_uz ,id }) => {

  const {lang} = useSelector(state => state.LanguageSlice)

  return (
    <>

    
      <div data-aos='fade-up' data-aos-delay={id*10} className="relative  px-6 py-6 space-y-3 rounded-lg md:p-10 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-6xl md:text-8xl right-5 md:-top-[45px] -top-[25px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl font-roboto lg:text-2xl">
                {
                lang === 'ru' ? title_ru : title_uz
                }
                </h6>
                <p className="text-sm md:text-base lg:text-xl font-thin font-openSans">
                  {
                lang === 'ru' ? description_ru : description_uz
                }
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative rounded-full md:w-20  w-[60px] aspect-square flex-shrink-0">
                  <ImageUl src={img}   alt={'feedback'} imgStyle={'object-cover rounded-full '} />
                </div>
                <div className="space-y-2 font-semibold">
                  <h6 className="text-sm md:text-base lg:text-xl font-roboto">
                  {
                lang === 'ru' ? author_ru : author_uz
                }
                  </h6>
                  <p className="text-xs font-openSans gradient-background md:text-sm lg:text-base">
                  {
                lang === 'ru' ? job_ru : job_uz
                }
                  </p>
                </div>
              </div>
            </div> 
    </>
  )
}

export default FeedbackCard
