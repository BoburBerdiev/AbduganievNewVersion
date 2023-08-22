import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ img, title, subTitle, href }) => {
  return (
    <>
      <Link
        href={href}
        className="relative duration-200 rounded-lg overflow-clip aspect-video group "
      >
        <div className="border-2 rounded-lg ">
          <Image fill src={img} className="object-cover z-[2] " />
          <div className="absolute group-hover:bottom-0 bg-neutral-900/60 duration-200 bottom-[-100%] left-0 right-0 pt-2 pb-6 px-5 z-[3] text-zinc-200">
            <h6 className="text-lg md:text-xl lg:text-2xl">{title}</h6>
            <p>{subTitle}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PortfolioCard;
