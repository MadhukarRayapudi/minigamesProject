import {Component} from 'react'
import Popup from 'reactjs-popup'
import {v4 as uuidv4} from 'uuid' // Import UUID for unique keys
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
  }

  componentDidMount() {
    this.startGame()
  }

  startGame = () => {
    // Generate unique IDs for each card
    const shuffledCards = this.shuffleCards(
      [...cardsData, ...cardsData].map(card => ({...card, id: uuidv4()})),
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
          // This callback ensures we check the updated state values
          const {time, score} = this.state
          if (time === 0 || score === 10) {
            this.resultPage()
          }
        },
      )
    }, 1000)
  }

  shuffleCards = array => {
    const copiedArray = [...array] // Copy the array instead of modifying it directly
    for (let i = copiedArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]]
    }
    return copiedArray
  }

  onCardClick = clickedCard => {
    const {flippedCards, matchedCards, disabled, score} = this.state

    // Prevent clicking more than two cards at once
    if (flippedCards.length === 1 && flippedCards[0].id === clickedCard.id) {
      return // I will not do anything here for now
    }

    if (
      flippedCards.length === 1 &&
      flippedCards[0].name === clickedCard.name
    ) {
      // Cards match, keep them revealed
      this.setState(prevState => ({
        matchedCards: [...matchedCards, clickedCard.name],
        flippedCards: [],
        score: prevState.score + 1,
      }))
    } else if (
      flippedCards.length === 1 &&
      flippedCards[0].name !== clickedCard.name
    ) {
      // Cards do not match, flip them back after 2 seconds
      this.setState({
        flippedCards: [...flippedCards, clickedCard],
        disabled: true,
      })
      setTimeout(() => {
        this.setState({flippedCards: [], disabled: false})
      }, 2000)
    } else {
      // First card click
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

  // setFlipCount = () => {
  //   const {numberOfClicks, disabled} = this.state

  //   if (numberOfClicks === 1 && disabled === false) {
  //     this.setState(prevState => ({
  //       flipCount: prevState.flipCount + 1,
  //       numberOfClicks: 0,
  //     }))
  //   } else {
  //     this.setState(prevState => ({
  //       numberOfClicks: prevState.numberOfClicks + 1,
  //     }))
  //   }
  // }

  resultPage = () => {
    const {score, time, flipCount, lowestFlip} = this.state
    this.setState({showResultPage: true})

    if (score === 10 && time > 0) {
      this.setState({result: 'won'})
    } else {
      this.setState({result: 'lose'})
    }
    if (flipCount < lowestFlip) {
      this.setState({lowestFlip: flipCount})
    }
  }

  renderTimer = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${formattedMinutes}:${formattedSeconds}`
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
                onClick={this.onClickBckBtn}
              >
                <BiArrowBack className="back-arrow" /> Back
              </button>
              <Popup
                modal
                trigger={
                  <button className="rules-btn" type="button">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <ul className="popup-container">
                      <button
                        className="close-button"
                        type="button"
                        data-testid="close"
                        onClick={() => close()}
                      >
                        <CgClose />
                      </button>
                      <h1 className="popup-rules-heading">Rules</h1>
                      <div className="fc-rules-container">
                        {/* Game rules */}
                      </div>
                    </ul>
                  </>
                )}
              </Popup>
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
                  key={eachCardData.id} // Use the unique ID for the key prop
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
      </>
    )
  }
}

export default CardFlipGamePage
