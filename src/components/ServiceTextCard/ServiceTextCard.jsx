import { useSelector } from "react-redux";

const ServiceTextCard = ({ description_ru ,description_uz , name_ru , name_uz  , id}) => {
  const {lang} = useSelector(state => state.LanguageSlice)


  return (
    <div
    data-aos='fade-up' data-aos-delay={id * 10} 
      className="space-y-5 md:space-y-2.5"
    >
      <h2
        className={`text-zinc-200 gradient-background lg:text-4xl md:text-3xl text-2xl font-bold font-roboto `}
      >
        {
                lang === 'ru' ? name_ru : name_uz
        }
      </h2>
      <p className="text-base font-openSans text-justify lg:text-xl md:text-lg text-zinc-200">
      {
                lang === 'ru' ? description_ru : description_uz
        }
      </p>
    </div>
  );
};

export default ServiceTextCard;
