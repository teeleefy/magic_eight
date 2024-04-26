import './EightBall.css'

const EightBall = ({answers, index, setIndex}) => {
  const changeFortune = () => {
    let randomIndex = (Math.floor(Math.random() * (answers.length))) + 1;
    return randomIndex;
  }
  
  let color = answers[index].color;
  let message = answers[index].msg;
  
  return <p onClick={() => setIndex(changeFortune)} className={`${color} word`}>{message}</p>
}


export default EightBall
