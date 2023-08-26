import { BsInstagram } from "react-icons/bs";
import { ImageUl } from "..";


const TeamCard = () => {
  return (
    <div>
      <div class="card card-img p-3 pt-2 border-white  bg-black rounded-lg relative flex justify-center group items-center duration-1000 ">
        <div class="border   text-white w-full h-full bg-transparent rounded-lg relative px-3 py-2 duration-1000 group-hover:opacity-100 opacity-0">
          <h5 className="text-base font-bold md:text-md lg:text-2xl ">Patrick Stewart</h5>
          <p className="text-sm ">
            Frountend
          </p>
          <div class="icons bottom-5 space-y-3 text-xl flex absolute flex-col items-center">
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
