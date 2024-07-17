import {CurrentBtn, ImageUl, } from "@/components"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";




const ProjectCardVideo = dynamic(() => import('../projectCardVideo/projectCardVideo'), {
    loading: () => <div className={'!w-full !h-full  flex justify-center flex-col items-center'}>
        <div className={'w-10 h-10 relative'}>
        </div>
    </div>,
    ssr: false, // Optional: set to false ro disable server-side rendering if needed
});


const NewProjectCard = ({img,  name_uz, name_ru, href, type_uz, type_ru, text_uz, text_ru}) => {
    const {i18n, t} = useTranslation()
    const [isHovered, setIsHovered] = useState(false);
    const videoSrc = `https://www.youtube.com/embed/iXiGokQUcEA?autoplay=1&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&mute=1`;

    return (
        <>
            <div className={'w-full h-fit relative rounded-lg overflow-hidden bg-neutral-900 project-card shadow-md duration-300 group cursor-pointer hover:shadow-none lg:rounded-xl shadow-white/20 flex flex-col items-center'}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
                <div className={' w-[100%] aspect-[16/10] translate-x-0 rotate-3d duration-700 delay-[5ms]'}>
                    <ImageUl src={img} imgStyle={''}/>
                    <div className={`!w-full !h-full scale-[1.5]`}>
                        <ProjectCardVideo videoSrc={videoSrc} isHovered={isHovered}  />
                    </div>

                </div>
                <div
                    className={'w-full bg-[linear-gradient(0deg,rgba(12,13,13,1)0%,rgba(33,33,33,1)43%,rgba(75,75,75,1)100%)] -mt-4 relative z-10  -bottom-0 duration-300 group-hover:bottom-0 rounded-t-lg p-5'}>
                    <h2 className="relative font-bold tracking-wide mb-3 text-white text-2xl">{i18n.language === 'ru'? name_ru : name_uz}</h2>
                    <p className={'text-white line-clamp-5 font-openSans duration-500'}>{i18n.language === 'ru' ? text_ru : text_uz}</p>
                    <a href={href} className={'text-white text-sm mt-2 block  font-openSans'}>Подробнее</a>
                </div>
            </div>
            {/*<a target={'_blank'} href={href && href}*/}
            {/*   className="relative w-full h-full bg-[#232323]  rounded-[20px] group">*/}
            {/*    /!*<div className="absolute top-0 left-0 w-full h-full bg-[#9bdc28] clip-circle-150 duration-500 group-hover:clip-circle-300"></div>*!/*/}
            {/*    <div className="relative z-10  delay-300 transition-all aspect-[3/2] duration-500  ">*/}
            {/*        <div*/}
            {/*            className={'absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full group-hover:top-[20%] group-hover:scale-75  group-hover:translate-x-0  duration-500'}>*/}
            {/*            <ImageUl src={'/laptop.png'} imgStyle={'object-contain'}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className=" w-full h-full text-center transition-all duration-500 z-10 absolute  ">*/}
            {/*        /!*<h2 className="relative font-semibold tracking-wide mb-6 text-white m-0">{i18n.language === 'ru'? name_ru : name_uz}</h2>*!/*/}
            {/*        <h2 className=" text-2xl lg:text-3xl font-extrabold italic text-white opacity-5 w-full group-hover:opacity-100 group-hover:rotate-90 group-hover:translate-x-[-55%] group-hover:translate-y-[-600%] duration-500  line-clamp-1">{i18n.language === 'ru' ? name_ru : name_uz}</h2>*/}
            {/*        <p className={'text-white translate-y-[20px]  gradient-background text-lg font-bold px-2 opacity-0 h-0  font-roboto group-hover:-translate-y-36 group-hover:opacity-100 duration-500'}>*/}
            {/*            {i18n.language === 'ru' ? type_ru : type_uz}*/}
            {/*        </p>*/}
            {/*        <p className={'text-white translate-y-[20px] absolute opacity-0 font-roboto group-hover:-translate-y-36 px-2 text-sm group-hover:opacity-100 duration-500'}>{i18n.language === 'ru' ? text_ru : text_uz}</p>*/}
            {/*    </div>*/}
            {/*</a>*/}
        </>
    );
};

export default NewProjectCard;