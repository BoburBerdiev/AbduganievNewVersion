import { ServiceTextCard } from ".."


const ServiceTextRow = () => {
  return (
    <div className='grid items-center grid-cols-1 md:grid-cols-2 xl:gap-x-20 lg:gap-x-18 md:gap-x-14 gap-x-0 gap-y-10'>

      <ServiceTextCard title={'ERP cистемы'} text={'IT Системы любого уровня сложности в удобные для вас сроки. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид.'} />
      <ServiceTextCard title={'Создание Сайтов'} text={' Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер. Проектируем любые пользовательские интерфейсы в которых удобство использования так же важно как и внешний вид.'} />
    </div>
  )
}

export default ServiceTextRow
