import {useTranslation} from "react-i18next";

const TeamCard = ({person , id}) => {
  const {i18n} = useTranslation()
  return (
    <div  data-aos='fade-up' data-aos-delay={id * 10}>
      <div 
      style={{backgroundImage:`url(${person?.image})`}}
      className={`relative flex items-center  justify-center p-3 pt-2  bg-black border-white rounded-lg card card-img group  `}
      >
        <div className="relative w-full h-full px-3 py-2 text-white duration-300 bg-transparent border rounded-lg opacity-0 group-hover:opacity-100">
          <h5 className="text-base font-bold md:text-md lg:text-2xl ">
          {i18n.language === 'ru' ? person?.name_ru : person?.name_uz}
            
            </h5>
          <p className="text-sm font-openSans">
            {i18n.language=== 'ru' ? person?.profession_ru : person?.profession_uz}
          </p>
          {/* <div className="absolute flex flex-col items-center space-y-3 text-xl icons bottom-5">
            <a href="#">
              <BsInstagram className="text-2xl text-white" />
            </a>
            <a href="#">
              <BsInstagram className="text-2xl text-white" />
            </a>
            <a href="#">
              <BsInstagram className="text-2xl text-white" />
            </a>
            <a href="#">
              <BsInstagram className="text-2xl text-white" />
            </a>
            <a href="#">
              <BsInstagram className="text-2xl text-white" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
