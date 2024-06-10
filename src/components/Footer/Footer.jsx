import { useTranslation } from "react-i18next";
import { BsInstagram , BsFacebook } from "react-icons/bs";
import {FaLinkedin, FaTelegram, FaYoutube} from "react-icons/fa";
import { useQuery } from "react-query";
import apiService from "@/service/api";

const Footer = () => {
  const { data: contact } = useQuery("contact", () =>
    apiService.getData("/contact")
  );


  const { t, i18n } = useTranslation();
  return (
    <>
      <footer className="py-10 md:py-16 bg-neutral-900">
        <div className="container flex flex-col space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start space-y-2.5  ">
            <p className="space-x-2 text-sm font-openSans text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start">
              <span className="font-bold ">{t("footer.workTime")}:</span>
              <span className="font-thin">
                {i18n.language === "ru"
                  ? contact?.data[0]?.working_hours_ru
                  : contact?.data[0]?.working_hours_uz}
              </span>
            </p>
            <a
              href={`${contact?.data[0]?.phone}`}
              target="_blank"
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.phone")}:</span>
              <span className="font-thin">+998 99 807 07 08</span>
            </a>
            <a
              target="_blank"
              href={`mailto:${contact?.data[0]?.email}`}
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.email")}:</span>
              <span className="font-thin">{contact?.data[0]?.email}</span>
            </a>
            <a
              target="_blank"
              href={`${contact?.data[0]?.map}`}
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.address")}:</span>
              <span className="font-thin">
                {i18n.language === "ru"
                  ? contact?.data[0]?.address_ru
                  : contact?.data[0]?.address_uz}
              </span>
            </a>
          </div>
          <div className="flex flex-col justify-between space-y-16 md:space-y-0">
            <div className="space-y-2.5 text-center md:text-end">
              <span className="text-lg font-bold text-zinc-200">
                {t("footer.messenger")}
              </span>
              <div className="flex justify-center space-x-5 md:justify-end">
                <a
                    href={contact?.data[0]?.telegram}
                    target="_blank"
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <FaTelegram className="text-3xl "/>
                </a>
                <a
                    href={contact?.data[0]?.linkedin}
                    target="_blank"
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <FaLinkedin className="text-3xl "/>
                </a>
                <a
                    href={contact?.data[0]?.youtube}
                    target="_blank"
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <FaYoutube  className="text-3xl "/>
                </a>
                <a
                    href={contact?.data[0]?.instagram}
                    target="_blank"
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsInstagram className="text-3xl "/>
                </a>
                <a
                    href={contact?.data[0]?.facebook}
                    target="_blank"
                    className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsFacebook className="text-3xl "/>
                </a>

              </div>
            </div>
            <p className="lg:text-sm md:text-[11px] text-[10px] text-center md:text-end  text-zinc-200 font-openSans">
              © Abduganiev technology  {new Date().getFullYear()} {t("footer.reserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


