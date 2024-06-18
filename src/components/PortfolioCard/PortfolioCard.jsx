import { ImageUl } from "..";
import {useTranslation} from "react-i18next";

const PortfolioCard = ({ img, name_uz ,name_ru , type_ru , type_uz ,  href }) => {
  const {i18n} = useTranslation()
  return (
    <>
      <a
        href={href}
        target='_blank'
        className="relative group  block duration-750 rounded-lg overflow-clip aspect-square md:aspect-video group "
      >
        <div className="border-2 rounded-lg ">
          <ImageUl imgStyle={'object-cover z-[2]'} src={img} alt={name_uz} />
          <div className="absolute group-hover:bg-neutral-900/80 duration-500 ease-in-out bg-neutral-900/60 space-y-2 bottom-0  left-0 right-0 p-3 z-[3] text-zinc-200">
            <h6 className="text-lg md:text-xl lg:text-2xl font-roboto font-semibold">
              {
                i18n.language === 'ru' ? name_uz : name_ru
              }
            </h6>
            <p className={'font-roboto text-sm font-thin'}>
            {
                i18n.language === 'ru' ? type_ru : type_uz
              }
              </p>

          </div>
        </div>
      </a>
    </>
  );
};

export default PortfolioCard;
