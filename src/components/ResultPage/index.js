import './index.css'

const ResultPage = props => {
  const {
    result,
    score,
    userSelectedOptionImage,
    computerChoiceImage,
    changeGameStatus,
  } = props
  console.log(userSelectedOptionImage)

  let resultText = ''
  let resultEmoji = ''
  let resultEmojiAlt = ''
  let resultBigEmoji = ''
  let resultBigEmojiAlt = ''
  let resultUserChoiceImageAlt = ''
  let resultComputerChoiceImage = ''

  if (result === 'won') {
    resultText = 'YOU WON'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677608/Emoji_1_wozmqa.png'
    resultEmojiAlt = 'Smiling face with star eyes'
    resultBigEmoji =
      'https://res.cloudinary.com/dwtnrleoa/image/upload/v1724501857/Group_7618_1_ltejkt.png'
    resultBigEmojiAlt = 'won emoji'
  } else if (result === 'draw') {
    resultText = 'IT IS DRAW'
    resultEmojiAlt = 'Face without mouth'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677755/Emoji_2_cn5ikn.png'
    resultBigEmoji =
      'https://res.cloudinary.com/dwtnrleoa/image/upload/v1724502376/Group_7618_egfrhn.png'
    resultBigEmojiAlt = 'draw emoji'
  } else {
    resultText = 'YOU LOSE'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677782/Emoji_3_u0ydyh.png'
    resultEmojiAlt = 'Face without mouth'
    resultBigEmoji =
      'https://res.cloudinary.com/dwtnrleoa/image/upload/v1724502411/Group_7618_2_b2xxmg.png'
    resultBigEmojiAlt = 'lose emoji'
  }

  if (userSelectedOptionImage.includes('rock-image')) {
    resultUserChoiceImageAlt = 'rock'
  } else if (userSelectedOptionImage.includes('scissor-image')) {
    resultUserChoiceImageAlt = 'scissor'
  } else {
    resultUserChoiceImageAlt = 'paper'
  }

  if (computerChoiceImage.includes('rock-image')) {
    resultComputerChoiceImage = 'rock'
  } else if (computerChoiceImage.includes('paper-image')) {
    resultComputerChoiceImage = 'paper'
  } else {
    resultComputerChoiceImage = 'scissor'
  }

  const onClickPlayAgainBtn = () => {
    changeGameStatus()
  }
  return (
    <div className="result-page">
      <h1 className="result-page-heading">Rock Paper Scissor</h1>
      <div className="result-page-top-container">
        <h1 className="rock-paper-scissor-heading2">Rock Paper Scissor</h1>
        <div className="heading-sm-container">
          <li className="li-item">Rock</li>
          <li className="li-item"> Paper </li>
          <li className="li-item"> Scissor </li>
        </div>
        <div className="image-score-container">
          <img
            src={resultBigEmoji}
            className="result-img"
            alt={resultBigEmojiAlt}
          />
          <div className="score-container">
            <p className="score-heading"> Score </p>
            <p className="result-score">{score}</p>
          </div>
        </div>
      </div>
      <div className="result-page-you-and-opponent-container">
        <p className="result-page-you-and-opponent-container-heading"> You </p>
        <p className="result-page-you-and-opponent-container-heading">
          Opponent
        </p>
      </div>
      <div className="result-bottom-container">
        <img
          src={userSelectedOptionImage}
          alt={resultUserChoiceImageAlt}
          className="choice-image"
        />
        <div className="won-or-lose-container">
          <img src={resultEmoji} className="emoji" alt={resultEmojiAlt} />
          <p className="result-txt"> {resultText} </p>
          <button
            className="rslt-page-play-again-btn"
            onClick={onClickPlayAgainBtn}
            type="button"
          >
            Play Again
          </button>
        </div>
        <img
          src={computerChoiceImage}
          alt={resultComputerChoiceImage}
          className="choice-image"
        />
      </div>
    </div>
  )
}

export default ResultPage
