import { useSelector } from "react-redux"

const SectionTitle = ({text_uz , text_ru , text}) => {

  const {lang} = useSelector(state => state.LanguageSlice)
  return (
    <>
      <h2 className="text-3xl font-extrabold text-center md:text-start md:text-5xl lg:text-6xl text-zinc-200">
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
