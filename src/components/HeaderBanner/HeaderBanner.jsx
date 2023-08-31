import { CurrentWhiteBtn, ImageUl , PartnorList } from "..";
import { useSelector } from "react-redux";

const HeaderBanner = ({header, partners }) => {
const {lang} = useSelector(state => state.LanguageSlice)

console.log(header);

  return (  
    <header className="py-8 md:pt-20 pb-[150px] bg-neutral-950 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="order-2 space-y-5 text-center text-white md:space-y-8 md:text-start md:order-1">
          <h1 className="text-6xl font-semibold break-all md:text-7xl">
            {
             lang === 'ru' ? header[0]?.title_ru : header[0]?.title_uz
            }
             {/* <span className="gradient-background">вашу мечту</span> */}
          </h1>
          <p className="text-sm font-thin lg:text-lg">
          {
             lang === 'ru' ? header[0]?.content_ru : header[0]?.content_uz
            }
            
          </p>
          <CurrentWhiteBtn text={'Начать работу'} />
        </div>
        <div className="order-1 relative md:h-full md:order-2 aspect-video flex items-center justify-center  rotate-[60deg] hover:rotate-0 duration-500">
                <ImageUl src={header[0]?.image} imgStyle={'object-contain'} alt={'Abduganiev icon'} />
        </div>
      </div>
      <div className="container overflow-hidden pt-8 md:pt-[100px]">
        <PartnorList partners={partners} />
      </div>
    </header>
  );
};

export default HeaderBanner;
