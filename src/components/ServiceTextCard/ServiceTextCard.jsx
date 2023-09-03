import { useState } from "react";
import { useSelector } from "react-redux";

const ServiceTextCard = ({ description_ru ,description_uz , name_ru , name_uz  , id}) => {
  const [hover, setHover] = useState(false);
  const {lang} = useSelector(state => state.LanguageSlice)


  return (
    <div
    data-aos='fade-up' data-aos-delay={id * 10} 
      className="space-y-5 md:space-y-2.5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2
        className={`text-zinc-200 ${
          hover ? "gradient-background" : ""
        } lg:text-4xl md:text-3xl text-2xl font-semibold `}
      >
        {
                lang === 'ru' ? name_ru : name_uz
        }
      </h2>
      <p className="text-base text-justify lg:text-xl md:text-lg text-zinc-200">
      {
                lang === 'ru' ? description_ru : description_uz
        }
      </p>
    </div>
  );
};

export default ServiceTextCard;
