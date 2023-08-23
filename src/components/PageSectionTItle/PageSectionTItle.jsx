
const PageSectionTItle = ({title , subTitle , row}) => {
  return (
    <>
    {
      row ? 
    <div className="flex flex-col space-y-2.5 md:space-y-0 items-center justify-between font-semibold md:items-start md:flex-row text-zinc-200 ">
      <h1 className="text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      {title}
      </h1>      
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl  text-center  md:text-left w-full md:w-[60%]">
        {subTitle}  
      </p>
    </div>
    : 
    <div className="flex relative flex-col space-y-2.5 lg:space-y-6 items-center  md:items-start font-semibold text-zinc-200 ">
      <h1 className="text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      {title}
      </h1>      
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl  text-center  md:text-left w-full md:w-[60%]">
        {subTitle}  
      </p>
      <div className='w-[20%] md:block hidden -top-20 right-0 absolute aspect-square rounded-full z-[2] animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] '>
                
      </div>
    </div>
    }
    </>

    
  )
}

export default PageSectionTItle
