import {Component} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'
import CardFlipCardItem from '../CardFlipCardItem'
import CardFlipResultPage from '../CardFlipResultPage'
import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

Modal.setAppElement('#root')

class CardFlipGamePage extends Component {
  state = {
    time: 120,
    flipCount: 0,
    lowestFlip: 999999999999999999999999999999999,
    matchedCards: [],
    flippedCards: [],
    disabled: false,
    shuffledCards: [],
    score: 0,
    numberOfClicks: 0,
    showResultPage: false,
    result: '',
    isRulesModalOpen: false,
  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    const shuffledCards = this.shuffleCards(
      [...cardsData, ...cardsData].map((card, index) => ({
        ...card,
        id: `${card.name}-${index}`,
      })),
    )
    this.setState({shuffledCards})

    this.timer = setInterval(() => {
      this.setState(
        prevState => {
          if (prevState.time > 0) {
            return {time: prevState.time - 1}
          }
          clearInterval(this.timer)
          return {time: 0}
        },
        () => {
          const {time, score} = this.state
          if (time === 0 || score === 10) {
            this.resultPage()
          }
        },
      )
    }, 1000)
  }

  shuffleCards = array => {
    const copiedArray = [...array]
    for (let i = copiedArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]]
    }
    return copiedArray
  }

  onCardClick = clickedCard => {
    const {flippedCards, matchedCards, disabled, score} = this.state

    if (flippedCards.length === 1 && flippedCards[0].id === clickedCard.id) {
      return
    }

    if (
      flippedCards.length === 1 &&
      flippedCards[0].name === clickedCard.name
    ) {
      this.setState(prevState => ({
        matchedCards: [...matchedCards, clickedCard.name],
        flippedCards: [],
        score: prevState.score + 1,
      }))
    } else if (
      flippedCards.length === 1 &&
      flippedCards[0].name !== clickedCard.name
    ) {
      this.setState({
        flippedCards: [...flippedCards, clickedCard],
        disabled: true,
      })
      setTimeout(() => {
        this.setState({flippedCards: [], disabled: false})
      }, 2000)
    } else {
      this.setState({flippedCards: [clickedCard]})
    }

    const {numberOfClicks} = this.state
    if (numberOfClicks === 1 && disabled === false) {
      this.setState(prevState => ({
        flipCount: prevState.flipCount + 1,
        numberOfClicks: 0,
      }))
    } else {
      this.setState(prevState => ({
        numberOfClicks: prevState.numberOfClicks + 1,
      }))
    }

    if (score === 10) {
      this.resultPage()
    }
  }

  resultPage = () => {
    const {score, time, flipCount, lowestFlip} = this.state
    this.setState({showResultPage: true})
    clearInterval(this.timer)

    if (score === 10 && time > 0) {
      this.setState({result: 'won'})
    } else {
      this.setState({result: 'lose'})
    }
    if (flipCount < lowestFlip) {
      this.setState({lowestFlip: flipCount})
    }
  }

  pressBackButtonOnGamePage = () => {
    const {functionForPlayAgainBtnClicked} = this.props
    clearInterval(this.timer)
    functionForPlayAgainBtnClicked()
  }

  renderTimer = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${formattedMinutes}:${formattedSeconds}`
  }

  openRulesModal = () => {
    this.setState({isRulesModalOpen: true})
  }

  closeRulesModal = () => {
    this.setState({isRulesModalOpen: false})
  }

  render() {
    const {
      matchedCards,
      flippedCards,
      disabled,
      shuffledCards,
      score,
      flipCount,
      result,
      lowestFlip,
      showResultPage,
      isRulesModalOpen,
    } = this.state

    const {functionForPlayAgainBtnClicked} = this.props

    const displayedScore = score > 9 ? `${score}` : `0${score}`
    const lowestFlipCount =
      lowestFlip === 999999999999999999999999999999999 ? '00' : lowestFlip

    return (
      <>
        {!showResultPage && (
          <div className="card-flip-game-bg">
            <div className="back-and-rules-btn-container">
              <button
                type="button"
                className="back-btn"
                onClick={this.pressBackButtonOnGamePage}
              >
                <BiArrowBack className="back-arrow" />
                Back
              </button>

              <button
                className="rules-btn"
                type="button"
                onClick={this.openRulesModal}
              >
                Rules
              </button>
            </div>
            <h1 className="card-flip-memory-game-heading">
              Card-Flip Memory Game
            </h1>
            <div className="timer-and-paragraph-container">
              <p className="paragraph"> Lowest Flip - {lowestFlipCount} </p>
              <p className="paragraph"> {this.renderTimer()} </p>
            </div>
            <div className="paragraphs-container-sm">
              <p className="paragraph"> Card Flip Count - {flipCount} </p>
              <p className="paragraph"> Score - {displayedScore} </p>
            </div>

            <p className="timer"> {this.renderTimer()} </p>
            <div className="paragraphs-container">
              <p className="paragraph-md"> Card Flip Count - {flipCount} </p>
              <p className="paragraph-md"> Lowest Flip - {lowestFlipCount} </p>
              <p className="paragraph-md"> Score - {displayedScore} </p>
            </div>

            <ul className="cardsContainer">
              {shuffledCards.map(eachCardData => (
                <CardFlipCardItem
                  key={eachCardData.id}
                  eachCardData={eachCardData}
                  isFlipped={
                    flippedCards.includes(eachCardData) ||
                    matchedCards.includes(eachCardData.name)
                  }
                  disabled={disabled}
                  onCardClick={this.onCardClick}
                />
              ))}
            </ul>
          </div>
        )}
        {showResultPage && (
          <CardFlipResultPage
            result={result}
            flipCount={flipCount}
            functionForPlayAgainBtnClicked={functionForPlayAgainBtnClicked}
          />
        )}

        <Modal
          isOpen={isRulesModalOpen}
          onRequestClose={this.closeRulesModal}
          className="rules-modal"
          overlayClassName="rules-modal-overlay"
          contentLabel="Rules Modal"
        >
          <div className="rules-content">
            <CgClose
              type="button"
              onClick={this.closeRulesModal}
              className="close-modal-btn"
            />
            <h2 className="game-page-rules-heading">Rules</h2>
            <ul className="rules-unordered-container">
              <div className="half-rules-container">
                <li className="each-rule">
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </li>

                <li className="each-rule">
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </li>

                <li className="each-rule">The Timer starts from 2 Minutes.</li>

                <li className="each-rule">
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </li>
              </div>

              <div className="half-rules-container">
                <li className="each-rule">
                  Users should be able to compare only two cards at a time.
                </li>

                <li className="each-rule">
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </li>

                <li className="each-rule">
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </li>
              </div>
            </ul>
          </div>
        </Modal>
      </>
    )
  }
}

export default CardFlipGamePage
