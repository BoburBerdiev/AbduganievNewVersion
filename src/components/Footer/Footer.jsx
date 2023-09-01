import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsInstagram } from "react-icons/bs";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import apiService from "@/service/api";

const Footer = () => {
  const { data: contact } = useQuery("contact", () =>
    apiService.getData("/contact/2")
  );

  const { lang } = useSelector((state) => state.LanguageSlice);

  const { t } = useTranslation();
  return (
    <>
      <footer className="py-20 md:py-20 xl:py-24 bg-neutral-900">
        <div className="container flex flex-col space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start space-y-2.5  ">
            <p className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start">
              <span className="font-bold ">{t("footer.workTime")}:</span>
              <span className="font-thin">
                {lang === "ru"
                  ? contact?.data?.working_hours_ru
                  : contact?.data?.working_hours_uz}
              </span>
            </p>
            <a
              href={contact?.data?.phone}
              target="_blank"
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.phone")}:</span>
              <span className="font-thin">+998 90 707 07 07</span>
            </a>
            <a
              target="_blank"
              href={contact?.data?.email}
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.email")}:</span>
              <span className="font-thin">{contact?.data?.email}</span>
            </a>
            <a
              target="_blank"
              href={contact?.data?.map}
              className="block space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
            >
              <span className="font-bold ">{t("footer.address")}:</span>
              <span className="font-thin">
                {lang === "ru"
                  ? contact?.data?.address_ru
                  : contact?.data?.address_uz}
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
                  target="_blank"
                  href={"#"}
                  className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsInstagram className="text-3xl " />
                </a>
                <a
                  href={"#"}
                  target="_blank"
                  className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsInstagram className="text-3xl " />
                </a>
                <Link
                  href={"#"}
                  target="_blank"
                  className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsInstagram className="text-3xl " />
                </Link>
                <Link
                  href={"#"}
                  target="_blank"
                  className="block space-x-2 text-lg text-zinc-200 hover:text-zinc-300"
                >
                  <BsInstagram className="text-3xl " />
                </Link>
              </div>
            </div>
            <p className="lg:text-sm md:text-[11px] text-[10px] text-center md:text-end  text-zinc-200 ">
              © Abduganiev technology 2023. {t("footer.reserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


