

const CurrentBtn = ({style , text }) => {
  return (
    <div>
      <button className={`  glow-on-hover ${style ? style : ''}`} type="button"> {text} </button>
    </div>
  )
}

export default CurrentBtn
