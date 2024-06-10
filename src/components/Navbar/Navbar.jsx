import Link from "next/link";
import logo from "public/abduganiev-min.png";
import {  CurrentBtn } from "@/components/";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { btnContact } from "@/slice/contactSlice";
import { useTranslation } from "react-i18next";
import { navItems } from "@/config/routerConfig";
import {useRouter} from "next/router";
import {ImageUl} from "@/components";

const Navbar = () => {
  const {pathname}=useRouter()
  const [menu, setMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [checkLang, setCheckLang] = useState("ru");
  const [isChangeLang, setIsChangeLang] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const openContact = () => {
    dispatch(btnContact(true));
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  useEffect(()=>{
    navItems.map((nav,ind)=>{
      if (nav.link===pathname){
        setIsActive(ind)
      }
    })
  },[])
  
  useEffect(() => {
    if (isChangeLang) {
      i18n.changeLanguage(checkLang);

    }
  }, [checkLang]);
  const changLang = (lang) => {
    setIsChangeLang(!isChangeLang);
    setCheckLang(lang);
  };

  const handleLink=(menu,isActive)=>{
    setMenu(menu)
    setIsActive(isActive)
  }


  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-neutral-950 z-[100]">
        <div className="h-full py-5 border-line bg-neutral-950">
          <div className="container flex items-center justify-between bg-neutral-950 ">
            <div className="relative md:w-[120px] w-[90px]  md:h-[60px]  h-[50px] block flex-shrink-0 cursor-pointer">
              <Link className="" href={"/"} passHref>
                <ImageUl
                    alt={"Abdug'aniev Technology"}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full "
                  src={logo}
                />
              </Link>
            </div>
            <aside className="flex space-x-9">
              <ul
                className={`${
                  menu ? "left-0" : "-left-[100%]"
                  
                } font-openSans h-[calc(100vh-90px)] top-[90px] duration-500 flex fixed  md:static   md:h-auto  bg-black/90 md:bg-transparent  space-y-10 font-medium flex-col md:flex-row text-2xl border-b md:border-none w-full py-10 md:py-0 md:w-auto text-[#E4E4E7] md:text-lg md:space-y-0 md:space-x-8`}
              >
                {navItems.map((item, id) => (
                  <li
                    key={id}
                    className={`flex items-center justify-center ${
                      isActive === id ? "gradient-background" : ""
                    } relative cursor-pointer duration-700 whitespace-nowrap	 after:w-full `}
                    onClick={() => handleLink(false,id)}
                  >
                    <Link href={item.link}>
                        {t(item.navName)}
                    </Link>
                  </li>
                ))}

                {/* <li className="flex flex-col items-center justify-center ">
                  <button
                    type="button"
                    onClick={(e) => setIsChangeLang(!isChangeLang)}
                    className="block cursor-pointer hover:text-white"
                  >
                    {t("navbar.lang")}
                  </button>
                  <div
                    className={`z-50   my-4 text-base relative md:absolute list-none md:top-[85%]   ${
                      isChangeLang ? "block" : "hidden"
                    }  bg-neutral-950  divide-y divide-neutral-900 rounded-lg shadow `}
                  >
                    <ul className="py-2 ">
                      <li>
                        <button className="block px-4 py-2 text-sm ">
                          <div className="" onClick={() => changLang("ru")}>
                            {t("navbar.ru")}
                          </div>
                        </button>
                        <button className="block px-4 py-2 text-sm ">
                          <div className="" onClick={() => changLang("uz")}>
                            {t("navbar.uz")}
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li className="flex items-center justify-center">
                  <CurrentBtn
                    onClick={openContact}
                    style={"py-3 px-7 rounded-[50px]"}
                    text={t("navbar.contact")}
                  />
                </li>
              </ul>

              <button
                onClick={openMenu}
                className="block p-2 md:p-3 glow-on-hover md:hidden"
              >
                {menu ? (
                  <AiOutlineClose className="flex-shrink-0 text-xl text-white md:text-2xl" />
                ) : (
                  <HiOutlineMenuAlt1 className="flex-shrink-0 text-xl text-white md:text-2xl" />
                )}
              </button>
            </aside>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
