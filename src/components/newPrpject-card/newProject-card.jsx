import React from 'react';
import {CurrentBtn, ImageUl} from "@/components";
import {useTranslation} from "react-i18next";
import Link from "next/link";

const NewProjectCard = ({img,  name_uz, name_ru, href, type_uz, type_ru, text_uz, text_ru}) => {
    const {i18n, t} = useTranslation()
    return (
                <a target={'_blank'} href={href && href} className="relative w-full h-full bg-[#232323]  rounded-[20px] group">
                    {/*<div className="absolute top-0 left-0 w-full h-full bg-[#9bdc28] clip-circle-150 duration-500 group-hover:clip-circle-300"></div>*/}

                    <div className="relative z-10  delay-300 transition-all aspect-square duration-500  ">
                        <div className={'absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full group-hover:top-[20%] group-hover:translate-x-0  duration-500'}>
                            <ImageUl src={'/laptop.png'} imgStyle={'object-contain'}/>
                        </div>
                    </div>
                    <div className=" w-full h-full text-center transition-all duration-500 z-10 ">
                        {/*<h2 className="relative font-semibold tracking-wide mb-6 text-white m-0">{i18n.language === 'ru'? name_ru : name_uz}</h2>*/}
                        <h2 className=" text-2xl lg:text-3xl font-extrabold italic text-white opacity-5 w-full group-hover:opacity-100 group-hover:rotate-90 group-hover:translate-x-[-55%] group-hover:translate-y-[-600%] duration-500  line-clamp-1">{i18n.language === 'ru'? name_ru : name_uz}</h2>
                        <p className={'text-white translate-y-[20px]  gradient-background text-lg font-bold px-2 opacity-0 font-roboto group-hover:-translate-y-36 group-hover:opacity-100 duration-500'}>
                                {i18n.language === 'ru' ? type_ru : type_uz}
                           </p>
                        <p className={'text-white translate-y-[20px] absolute opacity-0 font-roboto group-hover:-translate-y-36 px-2 text-sm group-hover:opacity-100 duration-500'}>{i18n.language === 'ru' ? text_ru : text_uz}</p>
                    </div>
                </a>
    );
};

export default NewProjectCard;