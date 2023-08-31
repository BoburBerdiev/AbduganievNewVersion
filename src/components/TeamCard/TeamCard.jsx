import { BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";


const TeamCard = ({person}) => {

  const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <div>
      <div className={`relative flex items-center  justify-center p-3 pt-2 duration-1000 bg-black border-white rounded-lg card card-img group `}
      style={{backgroundImage:`url(${person?.image})`}}
      >
        <div className="relative w-full h-full px-3 py-2 text-white duration-1000 bg-transparent border rounded-lg opacity-0 group-hover:opacity-100">
          <h5 className="text-base font-bold md:text-md lg:text-2xl ">
          {lang === 'ru' ? person?.name_ru : person?.name_uz}
            
            </h5>
          <p className="text-sm ">
            {lang === 'ru' ? person?.profession_ru : person?.profession_uz}
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
