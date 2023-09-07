import { useTranslation } from "react-i18next";
import { CurrentWhiteBtn, ImageUl , PartnorList ,ContactForm } from "..";
import { useDispatch, useSelector } from "react-redux";
import { btnForm } from "@/slice/formSlice";
const HeaderBanner = ({header, partners }) => {
const {lang} = useSelector(state => state.LanguageSlice)
const dispatch = useDispatch()
const openForm = () => {
  dispatch(btnForm())
}
const {t} = useTranslation()
  return (  
    <header className="py-8 md:pt-20 pb-[150px] bg-neutral-950 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="order-2 space-y-5 text-center text-white md:space-y-8 md:text-start md:order-1">
          <h1 className="text-6xl font-semibold md:text-7xl" data-aos="fade-up">
            {
             lang === 'ru' ? header[0]?.title_ru : header[0]?.title_uz
            }
             {/* <span className="gradient-background">вашу мечту</span> */}
          </h1>
          <p className="text-sm font-thin lg:text-lg" data-aos='fade-up' data-aos-delay='50'>
          {
             lang === 'ru' ? header[0]?.content_ru : header[0]?.content_uz
            }
            
          </p>
          <div  data-aos='fade-up' data-aos-delay='70'>
            <CurrentWhiteBtn onClick={openForm} text={t('button.start')} />
            
          </div>
        </div>
        <div data-aos="zoom-in" className="relative flex items-center justify-center order-1 duration-500 md:h-full md:order-2 aspect-video group ">
                <ImageUl src={header[0]?.image} imgStyle={'object-contain rotate-[60deg] group-hover:rotate-0'} alt={'Abduganiev icon'} />
        </div>
      </div>
      <div className=" pt-8 md:pt-[100px]">
        <PartnorList partners={partners} />
      </div>
    </header>
  );
};

export default HeaderBanner;
