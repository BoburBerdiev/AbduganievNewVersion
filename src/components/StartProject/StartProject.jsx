import {  CurrentBtn  , ContactForm} from "..";

const StartProject = () => {
  return (
    <>
      <ContactForm  />

      <section className="py-20 md:py-[100px] lg:py-[150px] bg-neutral-950 ">
        <div className="container relative">
          <div className='w-[10%] top-5 left-0 absolute aspect-square rounded-full z-[2] animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] '>
                
          </div>
          <div className="relative z-10 grid grid-cols-4 mb-5 md:mb-10 lg:mb-16">
            <div className="col-span-4 space-y-10 md:space-y-20 md:col-span-2">
              <h1 className="text-5xl font-bold text-center md:text-start md:text-7xl">
                <span className="gradient-background">
                  Есть проект? Давайте начинать
                </span>
              </h1>
              <div className="flex items-center justify-center md:justify-start">
                <CurrentBtn 
                  style={"py-4 px-9 after:rounded-[50px] before:rounded-[50px]"}
                  text={"Связаться"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartProject;
