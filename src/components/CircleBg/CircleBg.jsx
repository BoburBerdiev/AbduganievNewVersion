
const CircleBg = ({bgStyle}) => {
  return (
    <>
      <div className={` opacity-60  ${bgStyle}  absolute aspect-square rounded-full z-[2] animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-[100px] to-[rgba(0,30,255,0.50)]`}>
                
      </div>
    </>
  )
}

export default CircleBg
