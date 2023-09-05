import Link from "next/link";
import { CircleBg, InputUl } from "..";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { btnForm } from "@/slice/formSlice";
import { useTranslation } from "react-i18next";
import {useMutation, useQuery } from "react-query";
import apiService from "@/service/api";

import {useForm} from "react-hook-form";

const ContactForm = ({}) => {
  const { data: contactData } = useQuery("contact", () =>
  apiService.getData("/contact/2")
);
const {
  mutate: userPost, data: userPostData, isLoading: userPostLoading, isSuccess: userPostSuccess
} = useMutation(({url, data}) => apiService.postData(url, data))

const {register, handleSubmit, reset, formState: {errors}} = useForm()


  const {form} = useSelector(state => state.formSlice)
  const dispatch = useDispatch()
  const {t, i18n} = useTranslation()


  console.log(userPostData);

  const onSubmit = (data) => {

    console.log(data);
    userPost({url: '/submit-application/', data})
}
  return (

    <main className={`fixed ${form ? 'flex' : 'hidden'}  top-0   py-14 md:py-0  justify-center items-center left-0 z-[101] w-full h-fit md:min-h-screen bg-neutral-950`}>
      <section className="relative ">
        <div className="container relative ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 space-y-[70px] md:space-y-[90px] xl:gap-20">
            <div className="relative">
              <h3 className="text-zinc-200 text-3xl mb-5 text-center md:text-start md:mb-10 lg:mb-[60px] font-extrabold md:text-[40px] lg:text-5xl">
                Заполните анкету и мы
                <span className="gradient-background">
                  скоро свяжемся с вами
                </span>
              </h3>
              <CircleBg  bgStyle={'top-0 left-[20%] md:top-[80%] w-[40%]'}/>
              <div className="flex flex-col items-center md:items-start space-y-2.5  ">
                <a
                  target="_blank"
                  href={contactData?.data?.phone}
                  className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
                >
                  <span className="font-bold ">{'footer.phone'} :</span>
                  <span className="font-thin">+998 90 707 07 07</span>
                </a>
                <a
                  href={'mailo:' + contactData?.data?.email}
                  target="_blank"
                  className="space-x-2 text-sm text-center md:text-base lg:text-lg text-zinc-200 hover:text-zinc-300 md:text-start"
                >
                  <span className="font-bold ">{t("footer.email")}:</span>
                  <span className="font-thin">{contactData?.data?.email}</span>
                </a>
              </div>
            </div>
            <div  className="relative ">
              <button onClick={() => (dispatch(btnForm))} className="absolute right-0 p-1 text-3xl rounded-lg -top-10 hover:bg-zinc-200 hover:text-neutral-950 md:-top-20 text-zinc-200 ">
                <AiOutlineClose />
              </button>
              <form className="px-6 static md:relative py-10 lg:px-[70px] space-y-[23px] md:space-y-[30px]  rounded-xl md:py-[50px] bg-neutral-900" onSubmit={handleSubmit(onSubmit)}>
                <InputUl name={{...register('name', {required: true})}} type={"text"} placeholder={t('form.name')} />
                {errors.name && <span className={'text-xs text-red-600'}>Требуется имя</span>}
                <InputUl name={{...register('company_name', {required: true})}} type={"text"} placeholder={t('form.company')} />
                {errors.company_name && <span className={'text-xs text-red-600'}>Требуется название компании</span>}
                <InputUl name={{...register('email', {required: true})}} type={"text"} placeholder={t('form.email')} />
                {errors.email && <span className={'text-xs text-red-600'}>Требуется электронная почта</span>}
                <textarea
                {...register('message', {required: true})}
                  rows="5"
                  placeholder={t('form.project')}
                  className="w-full p-2 bg-transparent border rounded-lg outline-none md:p-4 text-zinc-200 placeholder:text-neutral-600 border-zinc-200"
                ></textarea>
                {errors.message && <span className={'text-xs text-red-600'}>Требуется краткое описание</span>}
                <button className="glow-on-hover py-3 px-7 rounded-[50px]"> Заявка</button>
              
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
