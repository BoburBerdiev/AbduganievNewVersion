import { PortfolioCard ,PageSectionTItle } from "@/components";
import axios from "axios";


const projects = ({projects , projectTitle}) => {

  return (
    <>
      <main className="py-10 md:py-14 xl:py-24">
        <div className="container">
         <PageSectionTItle
          title_ru={projectTitle[0]?.title_ru}
          title_uz={projectTitle[0]?.title_uz}
          subTitle_ru={projectTitle[0]?.description_ru}
          subTitle_uz={projectTitle[0]?.description_uz}
          row={true}
          
        /> 
          <div className="md:py-[100px] py-10">
            <div className="grid grid-cols-1 gap-3 py-5 md:py-10 md:grid-cols-2 ">

            {
              projects?.map(item => (
                <PortfolioCard
                key={item?.id}
                img={item.image}
                name_uz={item.name_uz}
                name_ru={item.name_ru}
                type_ru={item.type_ru}
                type_uz={item.type_uz}
                description_ru={item.description_ru}
                description_uz={item.description_uz}
                href={item.link}
              />
              ))
            }
             
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [projects] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio`),
])
  const [projectTitle] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio-page`),
])


  // Pass data to the page via props
  return {
    props: {
      projects: projects.data,
      projectTitle: projectTitle.data,
    },
  };
}
