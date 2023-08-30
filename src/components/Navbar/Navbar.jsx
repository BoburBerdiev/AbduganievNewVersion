import Image from "next/image";
import Link from "next/link";
import logo from "public/abduganiev-min.png";
import { Contact, CurrentBtn } from "@/components/";
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {CiMenuFries} from 'react-icons/ci'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { btnContact } from "@/slice/contactSlice"
import {useTranslation} from "react-i18next";
import { checkLanguageAction } from "@/slice/LanguageSlice";

const Navbar = () => {
  const [navLang , setNavLang] = useState(true)

  const [menu , setMenu] = useState(true);
  const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const [checkLang, setCheckLang] = useState('ru')
  const [isChangeLang, setIsChangeLang] = useState(false)
  const openContact = () => {
    dispatch(btnContact())
  }


  useEffect(() => {
    if (isChangeLang) {
        i18n.changeLanguage(checkLang)
        dispatch(checkLanguageAction(checkLang))
        // localStorage.setItem('langLeap', checkLang)
    }
}, [checkLang]);
const changLang = (lang) => {
    setIsChangeLang(true)
    setCheckLang(lang)
    // setOpenNavbar(false)
}


  return (
<>
<Contact />
    <nav className="fixed top-0 left-0 w-full bg-neutral-950 z-[100]">
      <div className="h-full py-5 border-line bg-neutral-950">
            <div className="container flex items-center justify-between bg-neutral-950 ">
              <Link
                className="relative w-[120px] h-[60px] block flex-shrink-0"
                href={"/"}
              >
                <Image fill className="object-contain w-full h-full " src={logo} />
              </Link>
              <aside className="flex space-x-9">
                <ul className={`${menu ? 'h-[calc(100vh-120px)] bottom-0 left-0': 'left-[100%] h-0 opacity-0' } duration-200 flex fixed  md:static   md:h-auto  bg-black/90 md:bg-transparent  space-y-10 font-medium flex-col md:flex-row text-2xl border-b md:border-none w-full py-10 md:py-0 md:w-auto text-[#E4E4E7] md:text-lg md:space-y-0 md:space-x-9`}>
                  <li className="flex items-center justify-center">
                    <Link
                      className="relative duration-700 after:w-full "
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
                      href={"/service"}
                    >
                      {t('navbar.service')}
                    </Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <Link
                      className="duration-700 hover:text-white hover:underline-offset-8 hover:underline"
                      href={"/portfolio"}
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
                  <li className="flex items-center ">
            <button
              type="button"
              onClick={() => setNavLang(!navLang)}
              className="cursor-pointer hover:text-white"
            >
              Язык
            </button>
            <div className={`z-50   my-4 text-base absolute list-none top-[85%] border border-white ${navLang ? 'hidden' : 'block'}  bg-neutral-950  divide-y divide-neutral-900 rounded-lg shadow `}>
              <ul className="py-2 " >
                <li>
                  <button
                    className="block px-4 py-2 text-sm "
                  >
                    <div className="" onClick={() => changLang('ru')}>Ru</div>
                  </button>
                  <button
                    className="block px-4 py-2 text-sm "
                  >
                    <div className="" onClick={() => changLang('uz')}>Uz</div>
                  </button>
                 
                </li>
              </ul>
            </div>
           
          </li>
                  <li className="flex items-center justify-center">
                    <CurrentBtn  onClick={openContact}  style={"py-3 px-7 rounded-[50px]"} text={"Контакты"} />

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
      </div>
    </nav>
</>

    
  );
};

export default Navbar;
