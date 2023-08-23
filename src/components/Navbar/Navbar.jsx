import Image from "next/image";
import Link from "next/link";
import logo from "public/abduganiev-min.png";
import { CurrentBtn } from "@/components/";
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {

  const [menu , setMenu] = useState(true);

  return (
    <nav className=" py-5 bg-neutral-950 z-[100] fixed top-0 left-0 w-full">
      <div className="container flex items-center justify-between">
        <Link
          className="relative w-[130px] h-[80px] block flex-shrink-0"
          href={"/"}
        >
          <Image fill className="object-contain w-full h-full " src={logo} />
        </Link>
        <aside className="flex space-x-9">
          <ul className={`${menu ? 'h-[calc(100vh-120px)] bottom-0 left-0': 'left-[100%] h-0 opacity-0' } duration-200 flex fixed  md:static   md:h-auto  bg-black/90 md:bg-transparent  space-y-10 font-medium flex-col md:flex-row text-2xl border-b md:border-none w-full py-10 md:py-0 md:w-auto text-[#E4E4E7] md:text-lg md:space-y-0 md:space-x-9`}>
            <li className="flex items-center justify-center">
              <Link
                className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                href={"/"}
              >
                Главная
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                href={"/about"}
              >
                О нас
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                href={"#"}
              >
                Услуги
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                href={"#"}
              >
                Портфолио
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                href={"#"}
              >
                Язык
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <CurrentBtn style={"py-3 px-7 rounded-[50px]"} text={"Контакты"} />

            </li>
          </ul>
            
            <button onClick={() => (setMenu(!menu))} className="block p-3 glow-on-hover md:hidden">
                {
                  menu ?
                <AiOutlineClose  className="flex-shrink-0 text-2xl text-white"  />:
                <HiOutlineMenuAlt1  className="flex-shrink-0 text-2xl text-white"  />
                }
            </button>
          
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
