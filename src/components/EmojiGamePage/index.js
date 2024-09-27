import {Component} from 'react'

import {FaArrowLeft} from 'react-icons/fa'

// import {CgClose} from 'react-icons/cg'

// import Popup from 'reactjs-popup'

import Navbar from '../Navbar'

import EmojisCardsContainer from '../EmojisCardsContainer'

import EmojiGameContext from '../EmojiGameContext'

import './index.css'

// <Popup
//                   modal
//                   trigger={
//                     <button className="rules-btn" type="button">
//                       Rules
//                     </button>
//                   }
//                 >
//                   {close => (
//                     <>
//                       <ul className="popup-container">
//                         <button
//                           className="close-button"
//                           type="button"
//                           data-testid="close"
//                           onClick={() => close()}
//                         >
//                           <CgClose />
//                         </button>
//                         <h1 className="popup-rules-heading"> Rules </h1>
//                         <li className="popup-rules">
//                           User should be able to see the list of Emojis
//                         </li>
//                         <li className="popup-rules">
//                           When the user clicks any one of the Emoji for the
//                           first time, then the count of the score should be
//                           incremented by 1 and the List of emoji cards should be
//                           shuffled.
//                         </li>
//                         <li className="popup-rules">
//                           This process should be repeated every time the user
//                           clicks on an emoji card
//                         </li>
//                         <li className="popup-rules">
//                           When the user clicks on all Emoji cards without
//                           clicking any of it twice, then the user will win the
//                           game
//                         </li>
//                         <li className="popup-rules">
//                           When the user clicks on the same Emoji for the second
//                           time, then the user will lose the game.
//                         </li>
//                         <li className="popup-rules">
//                           Once the game is over, the user will be redirected to
//                           the results page.
//                         </li>
//                       </ul>
//                     </>
//                   )}
//                 </Popup>

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGamePage extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiIds: [],
    gameCompleted: false,
  }

  GoBackToRulesPageBtn = () => {
    const {startPlayingClicked} = this.props
    startPlayingClicked()
  }

  declareResults = () => {
    this.setState({gameCompleted: true})
  }

  getShuffledArray = array => array.sort(() => Math.random() - 0.5)

  cardItemClicked = id => {
    const {clickedEmojiIds, score, topScore} = this.state

    if (clickedEmojiIds.includes(id)) {
      this.setState({gameCompleted: true, score: 0, clickedEmojiIds: []})
      if (score > topScore) {
        this.setState({topScore: score})
      }

      this.declareResults()
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojiIds: [...prevState.clickedEmojiIds, id],
      }))
    }

    if (score === emojisList.length - 1) {
      this.setState({topScore: 12})
      this.declareResults()
    }
    // this.setState(prevState => ({
    //   clickedEmojiIds: [...prevState.clickedEmojiIds, id],
    // }))
  }

  onClickPlayAgain = () => {
    this.setState({
      gameCompleted: false,
      clickedEmojiIds: [],
      score: 0,
      // gameResult: '',
    })
  }

  render() {
    const {score, topScore, gameCompleted} = this.state
    const shuffledArray = this.getShuffledArray(emojisList)
    return (
      <EmojiGameContext.Provider
        value={{cardItemClicked: this.cardItemClicked, shuffledArray}}
      >
        {!gameCompleted ? (
          <>
            <Navbar score={score} topScore={topScore} />
            <div className="emoji-game-container-excluding-nav">
              <div className="back-btn-rules-btn-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.GoBackToRulesPageBtn}
                >
                  <FaArrowLeft className="back-icon" />
                  Back
                </button>
              </div>
              <EmojisCardsContainer />
            </div>
          </>
        ) : (
          <>
            <Navbar />
            <div className="game-result-page-excluding-navbar">
              {score === 12 ? (
                <div className="game-result-container">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722603751/Image_nb9wkh.png"
                      alt="game won"
                      className="result-image"
                    />
                  </div>

                  <div className="won-container">
                    <h1 className="won-or-lose-text"> You Won </h1>
                    <p className="best-score-text"> Best Score </p>
                    <p className="best-score"> {score}/12 </p>
                    <button
                      type="button"
                      className="play-again-btn"
                      onClick={this.onClickPlayAgain}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              ) : (
                <div className="game-result-container">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722609015/Image_1_ll8r90.png"
                      alt="game won"
                      className="result-image"
                    />
                  </div>

                  <div className="lose-container">
                    <h1 className="won-or-lose-text"> You Loss </h1>
                    <p className="best-score-text"> Best Score </p>
                    <p className="best-score"> {topScore}/12 </p>
                    <button
                      type="button"
                      className="play-again-btn"
                      onClick={this.onClickPlayAgain}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </EmojiGameContext.Provider>
    )
  }
}

export default EmojiGamePage
