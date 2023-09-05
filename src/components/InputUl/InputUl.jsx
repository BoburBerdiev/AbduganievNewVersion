
const InputUl = ({type , placeholder,name }) => {
  return (
    <>
      <input {...name} placeholder={placeholder} type={type} className="w-full pb-2.5 bg-transparent border-b outline-none checked:outline-b text-zinc-200 placeholder:text-neutral-600 border-b-zinc-200" />
    </>
  )
}

export default InputUl
