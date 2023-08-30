import Link from "next/link"
import { CircleBg } from ".."
import {AiOutlineClose} from 'react-icons/ai'
import { BsInstagram } from "react-icons/bs";
import { btnContact } from "@/slice/contactSlice"

import { useSelector ,useDispatch } from "react-redux";

const Contact = () => {

  const {contact} = useSelector(state => state.contactSlice)
  const dispatch = useDispatch()

  return (
    <main className={`fixed  ${contact ? 'flex' : 'hidden'}    top-0 w-full md:py-0  justify-center items-center left-0 z-[101] min-h-screen bg-neutral-950`}>
    <section className="relative w-full h-full">
      <div className="container relative  md:px-[10%] ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 gap-y-20 xl:gap-20">
          <div className="relative space-y-[50px] col-span-1">
            <h3 className="text-zinc-200 text-3xl  text-center md:text-start  font-extrabold md:text-[40px] lg:text-5xl">
              <span className="gradient-background">
                Наш офис
              </span>
            </h3>
            <CircleBg  bgStyle={'top-0 left-[20%] md:top-[80%] w-[40%]'}/>
            <div className="flex flex-col items-center md:items-start space-y-2.5  ">
              <Link
                href={"#"}
                className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">Режим работы:</span>
                <span className="font-thin">Пн-Пт с 10:00 до 19:00</span>
              </Link>
              <Link
                href={"#"}
                className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">Телефон:</span>
                <span className="font-thin">+998 90 707 07 07</span>
              </Link>
             
              <Link
                href={"#"}
                className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">Электронная почта:</span>
                <span className="font-thin">info@abduganiev.uz</span>
              </Link>
              <Link
                href={"#"}
                className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
              >
                <span className="font-bold ">Адрес:</span>
                <span className="font-thin"> Abduganiev Technology, 100100, Узбекистан город Ташкент, улица Эхтиром-2, д.8 </span>
              </Link>
            </div>
            <div className="space-y-2.5">
                <div className="text-lg font-bold text-center md:text-start text-zinc-200">
                  <p>
                    Мы в соцсетях:
                    
                  </p>
                </div>
                <div className="flex justify-center space-x-5 md:justify-start">
                  <Link
                    href={"#"}
                    className="space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsInstagram className="text-3xl " />
                  </Link>
                  <Link
                    href={"#"}
                    className="space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsInstagram className="text-3xl " />
                  </Link>
                  <Link
                    href={"#"}
                    className="space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsInstagram className="text-3xl " />
                  </Link>
                  <Link
                    href={"#"}
                    className="space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                  >
                    <BsInstagram className="text-3xl " />
                  </Link>
                </div>
              </div>
          </div>
          <div className="static w-full col-span-1 md:relative ">
          <button onClick={() => (dispatch(btnContact()))}  className="absolute right-0 p-1 text-3xl rounded-lg -top-10 hover:bg-zinc-200 hover:text-neutral-950 md:-top-20 text-zinc-200 ">
                <AiOutlineClose />
              </button>
          <iframe className="w-full  h-[50vh] lg:min-h-[60vh]  rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.000945559697!2d69.2642451755967!3d41.33059279951688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be02d75a5cb%3A0x6fe69b8a266e8aa4!2sOOO%20%22MARSS%20TEAM%20%22!5e0!3m2!1suz!2s!4v1692872461280!5m2!1suz!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Contact
