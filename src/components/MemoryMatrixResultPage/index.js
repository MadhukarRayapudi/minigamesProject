import {Line} from 'rc-progress'
import './index.css'

const MemoryMatrixResultPage = props => {
  const {score, onClickGamePageBckBtn} = props

  const calculateProgress = () => {
    if (score <= 10) {
      return ((score - 1) / 9) * 60 // Progress from 0% to 60% for levels 1 to 10
    }
    return 60 + ((score - 10) / 5) * 40 // Progress from 60% to 100% for levels 11 to 15
  }

  const progressPercentage = calculateProgress()

  const playAgainClicked = () => {
    onClickGamePageBckBtn()
  }

  return (
    <div className="result-page-bg">
      <div className="emojis-container">{/* Emojis display */}</div>
      <Line
        className="score-bar"
        percent={progressPercentage}
        strokeWidth={4}
        strokeColor="#D3D3D3"
      />
      <div className="levels-container">
        <p className="level"> Level 1 </p>
        <p className="level"> Level 5 </p>
        <p className="level"> Level 10 </p>
        <p className="level"> Level 15 </p>
      </div>
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
