import './index.css'

const CardFlipResultPage = props => {
  const {result, flipCount, functionForPlayAgainBtnClicked} = props

  const resultPageEmoji =
    result === 'won'
      ? 'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728483853/03_Optimistic_ewkzzk.png'
      : 'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1728483914/05_Pokerface_yycm4q.png'
  const resultPageAltText =
    result === 'won' ? 'grinning face with big eyes' : 'neutral face'
  const resultPageHeading =
    result === 'won' ? 'Congratulations' : 'Better luck next time!'
  const resultPageText =
    result === 'won'
      ? 'You matched all of the cards in record time'
      : 'You did not match all of the cards in record time'

  const onClickPlayAgainBtn = () => {
    functionForPlayAgainBtnClicked()
  }
  return (
    <div className="result-page">
      <img src={resultPageEmoji} alt={resultPageAltText} />
      <h1 className="result-page-heading"> {resultPageHeading} </h1>
      <p className="result-page-flip-count"> No.of Flips - {flipCount} </p>
      <h1 className="result-page-text"> {resultPageText} </h1>
      <button
        className="result-page-play-again-btn"
        type="button"
        onClick={onClickPlayAgainBtn}
      >
        Play Again
      </button>
    </div>
  )
}

export default CardFlipResultPage
