import './index.css'

const CardFlipResultPage = props => {
  const {result, flipCount, functionForPlayAgainBtnClicked} = props

  const resultPageEmoji = result === 'won' ? '😃' : '😐'
  const resultPageHeading =
    result === 'won' ? 'Congratulations!' : 'Better luck next time!'
  const resultPageText =
    result === 'won'
      ? 'You matched all of the cards in record time'
      : 'You did not match all of the cards in record time'

  const onClickPlayAgainBtn = () => {
    functionForPlayAgainBtnClicked()
  }
  return (
    <div className="result-page">
      <h1 className="result-page-emoji"> {resultPageEmoji} </h1>
      <h1 className="result-page-heading"> {resultPageHeading} </h1>
      <p className="result-page-flip-count"> No.of Flips - {flipCount} </p>
      <p className="result-page-text"> {resultPageText} </p>
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
