import React from 'react'
import {RiDoubleQuotesR} from 'react-icons/ri'
import {  ImageUl } from "..";

const FeedbackCard = ({img , title , subTitle , content}) => {
  return (
    <>
      <div className="relative px-8 pt-10 space-y-5 rounded-lg py-9 text-zinc-200 bg-neutral-900 md:space-y-7">
              <RiDoubleQuotesR  className="absolute gradient-background text-8xl right-5 -top-[40px]"/>
              <div>
                <h6 className="mb-2 text-lg font-semibold md:mb-2.5 md:text-xl lg:text-2xl">Великолепно!</h6>
                <p className="text-sm md:text-base lg:text-xl">
                  {content}
                </p>
              </div>
              <div className='flex items-center space-x-7'>
                <div className="relative w-20 h-20 rounded-full">
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
