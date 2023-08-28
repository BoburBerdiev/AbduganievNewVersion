import React from 'react'
import {RiDoubleQuotesR} from 'react-icons/ri'
import {  ImageUl } from "..";

const FeedbackCard = ({img , title , subTitle , content}) => {
  return (
    <>
      <div className="relative px-6 py-6 space-y-3 rounded-lg md:p-10 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-6xl md:text-8xl right-5 md:-top-[45px] -top-[25px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl lg:text-2xl">Великолепно!</h6>
                <p className="text-sm md:text-base lg:text-xl">
                  {content}
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative rounded-full md:w-20  w-[60px] aspect-square">
                  <ImageUl src={img}   alt={'feedback'} imgStyle={'object-cover'} />
                </div>
                <div className="space-y-2 font-semibold">
                  <h6 className="text-sm md:text-base lg:text-xl ">
                    {title}
                  </h6>
                  <p className="text-xs gradient-background md:text-sm lg:text-base">
                    {subTitle}
                  </p>
                </div>
              </div>
            </div> 
    </>
  )
}

export default FeedbackCard
