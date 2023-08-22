import {  CurrentBtn } from "..";

const StartProject = () => {
  return (
    <>
      <section className="py-20 md:py-[50px] lg:py-[75px] bg-neutral-950 ">
        <div className="container">
          <div className="grid grid-cols-4 mb-5 md:mb-10 lg:mb-16 ">
            <div className="col-span-2 space-y-20">
              <h1 className="text-6xl font-bold md:text-7xl">
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
