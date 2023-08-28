import { BsInstagram } from "react-icons/bs";
import { ImageUl } from "..";


const TeamCard = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center p-3 pt-2 duration-1000 bg-black border-white rounded-lg card card-img group ">
        <div className="relative w-full h-full px-3 py-2 text-white duration-1000 bg-transparent border rounded-lg opacity-0 group-hover:opacity-100">
          <h5 className="text-base font-bold md:text-md lg:text-2xl ">Patrick Stewart</h5>
          <p className="text-sm ">
            Frountend
          </p>
          <div className="absolute flex flex-col items-center space-y-3 text-xl icons bottom-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
