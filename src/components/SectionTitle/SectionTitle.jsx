import { useSelector } from "react-redux"

const SectionTitle = ({text_uz , text_ru , text}) => {

  const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <>
      <h2 data-aos='fade-up' className="text-3xl font-bold text-center md:text-start md:text-5xl lg:text-6xl text-zinc-200 font-roboto">
        {
          
          lang === 'ru'? text_ru : text_uz

          
        }
        {
          text
        }
        </h2>
    </>
  )
}

export default SectionTitle
