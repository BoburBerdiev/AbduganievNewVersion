import { useSelector } from "react-redux";
import i18next from "i18next";

const ServiceTextCard = ({ description_ru ,description_uz , name_ru , name_uz  , id}) => {


  return (
    <div
    data-aos='fade-up' data-aos-delay={id * 10} 
      className="space-y-5 md:space-y-2.5"
    >
      <h2
        className={`text-zinc-200 gradient-background lg:text-4xl md:text-3xl text-2xl font-bold font-roboto `}
      >
        {
               i18next.language === 'ru' ? name_ru : name_uz
        }
      </h2>
      <p className="text-base font-openSans text-justify lg:text-xl md:text-lg text-zinc-200">
      {
               i18next.language === 'ru' ? description_ru : description_uz
        }
      </p>
    </div>
  );
};

export default ServiceTextCard;
