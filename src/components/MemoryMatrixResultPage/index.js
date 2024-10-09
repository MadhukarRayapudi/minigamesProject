import {Line} from 'rc-progress'
import './index.css'

const MemoryMatrixResultPage = props => {
  const {score, onClickGamePageBckBtn} = props

  const calculateProgress = () => {
    if (score <= 10) {
      // for 1-10 levels
      return ((score - 1) / 9) * 60
    }
    // for 11-15 levels
    return 60 + ((score - 10) / 5) * 40
  }

  const progressPercentage = calculateProgress()

  const playAgainClicked = () => {
    onClickGamePageBckBtn()
  }

  return (
    <div className="result-page-bg">
      <div className="emojis-container">
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728393614/cz62vzeuw2egoxwun4ge.png"
          alt="neutral face"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728393773/jmil9at2cdnfqijamnoe.png"
          alt="grimacing face"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728393871/2x_guakoj.png"
          alt="slightly smiling face"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728393998/03_Optimistic_fcbmnz.png"
          alt="grinning face with big eyes"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728394088/04_Grin_driej2.png"
          alt="grinning face with smiling eyes"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728394169/05_Laugh_t9khn2.png"
          alt="beaming face with smiling eyes"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728394255/02_Happy_iyqxc4.png"
          alt="grinning face"
        />
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728394328/02_Like_a_boss_oez0ba.png"
          alt="smiling face with sunglasses"
        />
      </div>
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
