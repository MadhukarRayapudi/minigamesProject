import {Component} from 'react'

import {FaArrowLeft} from 'react-icons/fa'

import Modal from 'react-modal'

import {CgClose} from 'react-icons/cg'

import RPSChoiceItem from '../RPSChoiceItem'

import ResultPage from '../ResultPage'

import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSGamePage extends Component {
  state = {
    userSelectedOption: '',
    computerChoice: '',
    userSelectedOptionImage: '',
    computerChoiceImage: '',
    result: '',
    gameInProgress: true,
    score: 0,
    isRulesModalOpen: false,
  }

  changeGameStatus = () => this.setState({gameInProgress: true})

  GoBackToRulesPageBtn = () => {
    const {onClickStartPlayingBtn} = this.props
    onClickStartPlayingBtn()
  }

  onClickAnOption = async id => {
    const userChoice = choicesList.filter(eachItem => eachItem.id === id)
    const num = Math.floor(Math.random() * 3)
    this.setState(
      {
        userSelectedOption: id,
        userSelectedOptionImage: userChoice[0].imageUrl,
        computerChoice: choicesList[num].id,
        computerChoiceImage: choicesList[num].imageUrl,
      },
      this.gameResult,
    )

    // await this.setState({
    //   computerChoice: choicesList[num].id,
    //   computerChoiceImage: choicesList[num].imageUrl,
    // })
  }
  // we can also write the logic inside gameResult function in the onClickOption function, for my convenience i wrote it as a seperate function.

  gameResult = async () => {
    const {computerChoice, userSelectedOption} = this.state

    if (
      (computerChoice === 'rock' && userSelectedOption === 'paper') ||
      (computerChoice === 'paper' && userSelectedOption === 'scissor') ||
      (computerChoice === 'scissor' && userSelectedOption === 'rock')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'won',
        gameInProgress: false,
      }))
    }
    if (computerChoice === userSelectedOption) {
      this.setState({result: 'draw', gameInProgress: false})
    }
    if (
      (computerChoice === 'rock' && userSelectedOption === 'scissor') ||
      (computerChoice === 'paper' && userSelectedOption === 'rock') ||
      (computerChoice === 'scissor' && userSelectedOption === 'paper')
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'lose',
        gameInProgress: false,
      }))
    }
  }

  openRulesModal = () => {
    this.setState({isRulesModalOpen: true})
  }

  closeRulesModal = () => {
    this.setState({isRulesModalOpen: false})
  }

  render() {
    const {
      gameInProgress,
      result,
      score,
      userSelectedOptionImage,
      computerChoiceImage,
      isRulesModalOpen,
    } = this.state
    return (
      <>
        <Modal
          isOpen={isRulesModalOpen}
          onRequestClose={this.closeRulesModal}
          className="rules-modal"
          overlayClassName="rules-modal-overlay"
          contentLabel="Rules Modal"
        >
          <div className="rules-content">
            <button data-testid="close" type="button" className="close-btn">
              <CgClose
                onClick={this.closeRulesModal}
                className="close-modal-btn"
              />
            </button>
            <h2 className="game-page-rules-heading">Rules</h2>
            <div className="rules-unordered-container">
              <ul className="popup-six-rules-container">
                <li className="popup-rules">
                  The game result should be based on user and user opponent
                  choices
                </li>
                <li className="popup-rules">
                  When the user choice is rock and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    IT IS DRAW
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is paper and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU WON
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU LOSE
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is paper and his opponent choice is paper
                  then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    IT IS DRAW
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU WON
                  </span>
                </li>
              </ul>

              <ul className="popup-six-rules-container">
                <li className="popup-rules">
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU WON
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU LOSE
                  </span>
                </li>
                <li className="popup-rules">
                  When the user choice is scissors and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    IT IS DRAW
                  </span>
                </li>
                <li className="popup-rules">
                  When the result is{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU WON
                  </span>
                  , then the count of the score should be incremented by 1
                </li>
                <li className="popup-rules">
                  When the result is{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    IT IS DRAW
                  </span>
                  , then the count of the score should be the same
                </li>
                <li className="popup-rules">
                  When the result is{' '}
                  <span className="span-for-popup-md-and-above-devices">
                    YOU LOSE
                  </span>
                  , then the count of the score should be decremented by 1.
                </li>
              </ul>
            </div>
          </div>
        </Modal>
        {gameInProgress ? (
          <div className="rps-game-page">
            <div className="back-btn-rules-and-btn-container">
              <button
                type="button"
                className="rps-game-page-back-button"
                onClick={this.GoBackToRulesPageBtn}
              >
                <FaArrowLeft className="rps-back-icon" />
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
            <h1 className="rps-game-page-heading"> ROCK PAPER SCISSOR </h1>
            <h1 className="rps-game-page-pick-heading"> Let&apos;s Pick </h1>
            <div className="images-container">
              {choicesList.map(eachItem => (
                <RPSChoiceItem
                  eachItem={eachItem}
                  onClickAnOption={this.onClickAnOption}
                  key={eachItem.id}
                />
              ))}
            </div>
          </div>
        ) : (
          <ResultPage
            result={result}
            score={score}
            userSelectedOptionImage={userSelectedOptionImage}
            computerChoiceImage={computerChoiceImage}
            changeGameStatus={this.changeGameStatus}
          />
        )}
      </>
    )
  }
}

export default RPSGamePage
