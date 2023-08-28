import Link from "next/link";
import { CircleBg, InputUl } from "..";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { btnForm } from "@/slice/formSlice";

const ContactForm = ({}) => {
  const [closeModal , setCloseModal] = useState(false)

  const {form} = useSelector(state => state.formSlice)
  const dispatch = useDispatch()
  
  return (

    <main className={`fixed ${form ? 'hidden' : 'flex'}  top-0   py-14 md:py-0  justify-center items-center left-0 z-[101] w-full h-fit md:min-h-screen bg-neutral-950`}>
      <section className="relative ">
        <div className="container relative ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 space-y-[70px] md:space-y-[90px] xl:gap-20">
            <div className="relative">
              <h3 className="text-zinc-200 text-3xl mb-5 text-center md:text-start md:mb-10 lg:mb-[60px] font-extrabold md:text-[40px] lg:text-5xl">
                Заполните анкету и мы
                <span className="gradient-background">
                  скоро свяжемся с вами
                </span>
              </h3>
              <CircleBg  bgStyle={'top-0 left-[20%] md:top-[80%] w-[40%]'}/>
              <div className="flex flex-col items-center md:items-start space-y-2.5  ">
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
              </div>
            </div>
            <form className="px-6 static md:relative py-10 lg:px-[70px] space-y-[23px] md:space-y-[30px]  rounded-xl md:py-[50px] bg-neutral-900">
              <button onClick={() => (dispatch(btnForm))} className="absolute right-0 p-1 text-3xl rounded-lg -top-10 hover:bg-zinc-200 hover:text-neutral-950 md:-top-20 text-zinc-200 ">
                <AiOutlineClose />
              </button>
              <InputUl type={"text"} placeholder={"Ваше имя"} />
              <InputUl type={"text"} placeholder={"Ваше имя"} />
              <InputUl type={"text"} placeholder={"Ваше имя"} />
              <textarea
                rows="10"
                className="w-full p-2 bg-transparent border rounded-lg outline-none md:p-4 text-zinc-200 placeholder:text-neutral-600 border-zinc-200"
              ></textarea>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
