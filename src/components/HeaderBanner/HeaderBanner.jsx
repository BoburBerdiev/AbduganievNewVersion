import logoA from "public/abduganiev-logoA.png";
import { CurrentWhiteBtn, ImageUl } from "..";

const HeaderBanner = () => {
  return (
    <header className="py-8 md:py-24 bg-neutral-950 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="order-2 space-y-5 text-center text-white md:space-y-8 md:text-start md:order-1">
          <h1 className="text-6xl font-semibold break-all md:text-7xl">
            Поможем осуществить 
             <span className="gradient-background">вашу мечту</span>
          </h1>
          <p className="text-sm font-thin lg:text-lg">
            Мы интернациональная компания, выполняющая услуги в сфере IT более 5
            лет на долгосрочной основе: дизайн, SMM, хостинг, создание сайтов и
            их поддержка и развитие.
          </p>
          <CurrentWhiteBtn text={'Начать работу'} />
        </div>
        <div className="order-1 md:h-full md:order-2 aspect-square">
          <div className="relative h-full ">
            <ImageUl src={logoA} imgStyle={'object-contain'} alt={'Abduganiev icon'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
