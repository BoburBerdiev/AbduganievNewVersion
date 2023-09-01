import { PageSectionTItle, ImageUl, ServiceTextCard } from "@/components";
import axios from "axios";
import { useSelector } from "react-redux";


const service = ({ service , serviceTitle }) => {


  return (
    <main className="py-10 md:py-14 xl:py-24 bg-neutral-950">
      <div className="container">
      <PageSectionTItle
          title_ru={serviceTitle[0]?.title_ru}
          title_uz={serviceTitle[0]?.title_uz}
          subTitle_ru={serviceTitle[0]?.description_ru}
          subTitle_uz={serviceTitle[0]?.description_uz}
          row={true}
          
        />

        {service?.map((item) => 
        <>
         <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
            <div className="order-2 md:order-1">
              <ServiceTextCard
                description_ru={item?.description_ru}
                description_uz={item?.description_uz}
                name_ru={item?.name_ru}
                name_uz={item?.name_uz}
              />
            </div>
            <div className="relative order-1 w-full aspect-video md:order-2">
              <ImageUl
                src={item?.image}
                alt={"UX/UI Design"}
                imgStyle={"object-cover rounded-lg"}
              />
            </div>
          </div>
        </div>
           
        <div className="py-5 md:py-10 lg:py-13 xl:py-18">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10">
        {
          item.service_child?.map(child => (
            <ServiceTextCard
                description_ru={child?.description_ru}
                description_uz={child?.description_uz}
                name_ru={child?.name_ru}
                name_uz={child?.name_uz}
              />
          ))
        }
            
          </div>
        </div>
        </>
        )}
       
       
      </div>
    </main>
  );
};

export default service;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [service] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/service-with-image`),
  ]);
  const [serviceTitle] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/main-service`),
  ]);

  // Pass data to the page via props
  return {
    props: {
      service: service.data,
      serviceTitle: serviceTitle.data,
    },
  };
}
