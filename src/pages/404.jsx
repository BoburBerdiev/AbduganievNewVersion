import { NewProjectCard,PageSectionTItle } from "@/components";
import axios from "axios";
import Head from "next/head";
import {useTranslation} from "react-i18next";


const Page404 = ({}) => {

    const project = {
        projects: [
            {
                id : 1,
                image: 'src',
                name_ru: "Abduganiev Card",
                type_ru: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tempora.',
                text_ru: "text",
                href: '/'
            }
        ],
        projectTitle: [
            {
                title_ru: "",
                subtitle_ru: "subtitle",
            }
        ]
    }



    const {i18n} = useTranslation()
    return (
        <>
            <main className="py-10 md:py-14 xl:py-24 bg-neutral-950">
                <div className="container">

                    <PageSectionTItle
                        title_ru={project.projectTitle[0]?.title_ru}
                        subTitle_ru={project.projectTitle[0]?.description_ru}
                        row={true}

                    />
                    <div className="md:py-[100px] py-10 container">
                        <div className="grid grid-cols-1 py-5 md:py-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                project.projects?.map(item => (
                                    <NewProjectCard
                                        key={item.id}
                                        img={item.image}
                                        name_ru={item.name_ru}
                                        type_ru={item.type_ru}
                                        text_ru={item?.description_ru}
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

export default Page404;

//
// export async function getServerSideProps({ req, res }) {
//     res.setHeader(
//         "Cache-Control",
//         "public, s-maxage=10, stale-while-revalidate=59"
//     );
//     // Fetch data from external API
//     const [projects] = await Promise.all([
//         axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio`),
//     ])
//     const [projectTitle] = await Promise.all([
//         axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/portfolio-page`),
//     ])
//
//
//     return {
//         props: {
//             projects: projects.data,
//             projectTitle: projectTitle.data,
//         },
//     };
// }
