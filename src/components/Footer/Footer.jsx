import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-20 md:py-20 xl:py-24 bg-neutral-900">
        <div className="container flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between">
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
              <span className="font-thin">
                Abduganiev Technology, 100100, Узбекистан город Ташкент, улица
                Эхтиром-2, д.8
              </span>
            </Link>
          </div>
            <div className="flex flex-col justify-between space-y-16 md:space-y-0">
              <div className="space-y-2.5 text-center md:text-end">
                <span className="text-lg font-bold text-zinc-200">
                  Режим работы:
                </span>
                <div className="flex justify-center space-x-5 md:justify-end">
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
              <p className="lg:text-sm md:text-[11px] text-[10px] text-center md:text-end  text-zinc-200 ">
              © Abduganiev technology 2023. Все права защищены
              </p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
