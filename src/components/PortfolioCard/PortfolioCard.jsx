import { ImageUl } from "..";
import { useSelector } from "react-redux";

const PortfolioCard = ({ img, name_uz ,name_ru , type_ru , type_uz ,description_ru ,description_uz  ,id ,  href }) => {
  const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <>
      <a
        href={href}
        target='_blank'
        data-aos='zoom-in'
        data-aos-delay={id * 10}
        className="relative block duration-500 rounded-lg overflow-clip aspect-square md:aspect-video group "
      >
        <div className="border-2 rounded-lg ">
          <ImageUl imgStyle={'object-cover z-[2] group-hover:blur-sm group-hover:scale-105'} src={img} alt={name_uz} />
          <div className="absolute -bottom-[20%] bg-neutral-900/60 duration-500  group-hover:bottom-0 left-0 right-0 pt-2 pb-6 px-5 z-[3] text-zinc-200">
            <h6 className="text-lg md:text-xl lg:text-2xl font-roboto">
              {
                lang === 'ru' ? name_uz : name_ru
              }
            </h6>
            <p className={'font-openSans'}>
            {
                lang === 'ru' ? type_ru : type_uz
              }
              </p>
              <p className="font-openSans text-sm mt-2 opacity-0 group-hover:opacity-[100]  group-hover:h-full">
              {
                lang === 'ru' ? description_ru : description_uz
              }
              </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default PortfolioCard;
