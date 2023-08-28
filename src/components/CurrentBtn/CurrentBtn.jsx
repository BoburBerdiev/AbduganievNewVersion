const CurrentBtn = ({style , text  , onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`  glow-on-hover ${style ? style : ''}`} type="button"> {text} </button>
    </div>
  )
}

export default CurrentBtn
