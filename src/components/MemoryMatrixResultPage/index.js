import './index.css'

const MemoryMatrixResultPage = props => {
  const {score, onClickGamePageBckBtn} = props
  // console.log(`${score - 1}0`)
  const playAgainClicked = () => {
    onClickGamePageBckBtn()
  }
  // const percent = `${score - 1}0` / 7
  // console.log(percent)

  return (
    <div className="result-page-bg">
      <ul className="emojis-container">
        <li className="emoji"> 😐 </li>
        <li className="emoji"> 😬</li>
        <li className="emoji">🙂</li>
        <li className="emoji"> 😃</li>
        <li className="emoji">😄</li>
        <li className="emoji">😁</li>
        <li className="emoji"> 😀 </li>
        <li className="emoji"> 😎 </li>
      </ul>
      <div className="score-bar-parent">
        <div className="score-bar" style={{width: `${score - 1}0%`}} />
      </div>
      <ul className="levels-container">
        <li className="level"> Level 1 </li>
        <li className="level"> Level 5 </li>
        <li className="level"> Level 10 </li>
        <li className="level"> Level 15 </li>
      </ul>
      <h1 className="congo-heading"> Congratulations </h1>
      <p className="result-txt"> You have reached level {score} </p>
      <button
        type="button"
        className="play-again-btn"
        onClick={playAgainClicked}
      >
        Play Again
      </button>
    </div>
  )
}

export default MemoryMatrixResultPage
