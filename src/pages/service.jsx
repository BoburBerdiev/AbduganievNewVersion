import {
  PageSectionTItle,
  ImageUl,
  ServiceTextCard,
  ServiceTextRow,
} from "@/components";

const service = () => {
  return (
    <main className="py-10 md:py-14 xl:py-24">
      <div className="container">
        <PageSectionTItle
          title={"Услуги"}
          row={false}
          subTitle={
            "Каждая крупная компания должна благодарить не только себя, но и тех, кто стоял рядом с ней и верил в нее. Ведь самый главный принцип в нашей работе – доверие."
          }
        />
        <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
            <div className="order-2 md:order-1">
              <ServiceTextCard
                title={"UXUI Design"}
                text={
                  "Наша компания придерживается подхода к дизайну, ориентированного на человека. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид."
                }
              />
            </div>
            <div className="relative order-1 w-full aspect-video md:order-2">
              <ImageUl
                src={"/ux-ui-min.jpg"}
                alt={"UX/UI Design"}
                imgStyle={"object-cover"}
              />
            </div>
          </div>
        </div>
        <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <ServiceTextRow />
        </div>
        <div className="grid items-center grid-cols-1 py-5 md:py-10 lg:py-13 xl:py-18 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
          <div className="relative w-full aspect-video ">
            <ImageUl
              src={"/ux-ui-min.jpg"}
              alt={"UX/UI Design"}
              imgStyle={"object-cover"}
            />
          </div>
          <div className="">
            <ServiceTextCard
              title={"UXUI Design"}
              text={
                "Наша компания придерживается подхода к дизайну, ориентированного на человека. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид."
              }
            />
          </div>
          
        
        </div>
        <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <ServiceTextRow />
        </div>
        <div className="grid items-center grid-cols-1 py-5 md:py-10 lg:py-13 xl:py-18 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
            <div className="order-2 md:order-1">
              <ServiceTextCard
                title={"UXUI Design"}
                text={
                  "Наша компания придерживается подхода к дизайну, ориентированного на человека. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид."
                }
              />
            </div>
            <div className="relative order-1 w-full aspect-video md:order-2">
              <ImageUl
                src={"/ux-ui-min.jpg"}
                alt={"UX/UI Design"}
                imgStyle={"object-cover"}
              />
            </div>
          </div>
      </div>
    </main>
  );
};

export default service;
