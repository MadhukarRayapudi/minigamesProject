import './index.css'

const ResultPage = props => {
  const {
    result,
    score,
    userSelectedOptionImage,
    computerChoiceImage,
    changeGameStatus,
  } = props

  let resultText = ''
  let resultEmoji = ''

  if (result === 'won') {
    resultText = 'You Won'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677608/Emoji_1_wozmqa.png'
  } else if (result === 'draw') {
    resultText = 'It Is Draw'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677755/Emoji_2_cn5ikn.png'
  } else {
    resultText = 'You Lose'
    resultEmoji =
      'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1724677782/Emoji_3_u0ydyh.png'
  }

  const onClickPlayAgainBtn = () => {
    changeGameStatus()
  }
  return (
    <div className="result-page">
      <h1 className="result-page-heading">ROCK PAPER SCISSOR</h1>
      <div className="result-page-top-container">
        <ul className="unordered-list">
          <li className="list-item"> Rock </li>
          <li className="list-item"> Paper </li>
          <li className="list-item"> Scissor </li>
        </ul>
        {result === 'won' && (
          <div className="image-score-container">
            <img
              src="https://res.cloudinary.com/dwtnrleoa/image/upload/v1724501857/Group_7618_1_ltejkt.png"
              className="result-img"
              alt="won"
            />
            <div className="score-container">
              <p className="score-heading"> Score </p>
              <p className="result-score">{score}</p>
            </div>
          </div>
        )}
        {result === 'lose' && (
          <div className="image-score-container">
            <img
              src="https://res.cloudinary.com/dwtnrleoa/image/upload/v1724502411/Group_7618_2_b2xxmg.png"
              className="lose-img"
              alt="lose"
            />
            <div className="score-container">
              <p className="score-heading"> Score </p>
              <p className="result-score">{score}</p>
            </div>
          </div>
        )}
        {result === 'draw' && (
          <div className="image-score-container">
            <img
              src="https://res.cloudinary.com/dwtnrleoa/image/upload/v1724502376/Group_7618_egfrhn.png"
              className="result-img"
              alt=""
            />
            <div className="score-container">
              <p className="score-heading"> Score </p>
              <p className="result-score">{score}</p>
            </div>
          </div>
        )}
        )
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
          alt="user choice"
          className="choice-image"
        />
        <div className="won-or-lose-container">
          <img src={resultEmoji} className="emoji" alt="result emoji" />
          <p className="result-txt"> {resultText} </p>
          <button
            className="play-again-btn"
            onClick={onClickPlayAgainBtn}
            type="button"
          >
            Play Again
          </button>
        </div>
        <img
          src={computerChoiceImage}
          alt="computer choice"
          className="choice-image"
        />
      </div>
    </div>
  )
}

export default ResultPage
