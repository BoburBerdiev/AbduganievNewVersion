
import {ImageUl, PageSectionTItle, SectionTitle } from '@/components'

const about = () => {
  return (
    <main className='py-24'>
      <div className="container ">
      <PageSectionTItle title={'О нас'} row={true} subTitle={'Каждая крупная компания должна благодарить не только себя, но и тех, кто стоял рядом с ней и верил в нее. Ведь самый главный принцип в нашей работе – доверие.'} />      
        <section className='relative w-full  aspect-video my-20 md:my-[50px] lg:my-[75px]'>
          <ImageUl src={'/team-min.jpg'} alt={'team'} imgStyle={'object-cover'} />
        </section>
        <section className='text-zinc-200 my-20 md:my-[50px] lg:my-[75px]'>
          <div className='w-full text-center md:text-start md:w-[50%] mb-5 md:mb-10 lg:mb-[60px]'>
            <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Почему Мы?
            </h3>
            <p>
            Центр ориентирован на обучение студентов по следующим направлениям: Advanced Front-end, Basic Front-end, Back-end, UX/UI, Мобильная разработка.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
            <div className='items-center justify-center hidden col-span-2 md:flex'>
              <div className='w-[60%] aspect-square rounded-full animate-spin-slow bg-gradient-to-r from-[rgba(0,255,126,0.50)] blur-3xl to-[rgba(0,30,255,0.50)] '>
                
              </div>
            </div>
            <div className='col-span-3 '>
              <ol className='space-y-4 text-base font-normal list-decimal list-inside md:space-y-5 lg:space-y-7 md:text-md lg:text-lg'>
                {
                  Array(4).fill('').map(( _ , ind) => (
                    
                <li key={ind} className=''>
                  <span className='font-semibold'>
                  Совместность.
                  </span>
                   Мы слушаем, придумываем и поддерживаем друг друга на пути к созданию чего-то действительно уникального в наших совместных усилиях.
                </li>
                  ))
                }
              </ol>
            </div>

          </div>
        </section>
        <section>
            <SectionTitle text={'Они доверяют нам '} className='' />
            <div className="grid grid-cols-2 xl:gap-14 lg:gap-10 md:gap-8 gap-3 xl:grid-cols-4 lg:grid-cols-3 lg:pt-[60px] md:pt-10 pt-5">
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/santek.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/export-uz.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/fond-bozor.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/export-uz.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/real-house.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
              <div className='relative aspect-video'>
                <ImageUl src={'/partnor/santek.png'} imgStyle={'object-contain'} alt={'partnor'} />
              </div>
            </div>
        </section>
      </div>
    </main>
  )
}

export default about
