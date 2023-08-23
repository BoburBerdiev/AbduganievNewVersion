
const PageSectionTItle = ({title , subTitle}) => {
  return (
    <div className="flex flex-col space-y-2.5 md:space-y-0 items-center justify-between font-semibold md:items-start md:flex-row text-zinc-200 ">
      <h1 className="text-4xl break-normal md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      {title}
      </h1>      
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl  text-center  md:text-left w-full md:w-[60%]">
        {subTitle}  
      </p>
    </div>
  )
}

export default PageSectionTItle
