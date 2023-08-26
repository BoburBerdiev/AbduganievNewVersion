
// import {Num} from '../num'
const NumberCount = ({ number, text}) => {
  return (
    <div className="space-y-5 text-center">
      {/* <Num n={10} /> */}
      {number}
    <h5 className="font-extrabold text-7xl gradient-background">
    </h5>
    <p className="text-3xl font-bold text-zinc-200">
      {text}
    </p>
  </div>
  )
}

export default NumberCount
