import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import CardFlipGamePage from '../CardFlipGamePage'

import './index.css'

class CardFlipGameRulesPage extends Component {
  state = {gameInProgress: false}

  onClickStartPlayingBtn = () => {
    this.setState({gameInProgress: true})
  }

  onClickRulesPageBckBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickGamePageBckBtn = () => {
    this.setState({gameInProgress: false})
  }

  functionForPlayAgainBtnClicked = () => {
    this.setState({gameInProgress: false})
  }

  render() {
    const {gameInProgress} = this.state
    return (
      <>
        {!gameInProgress ? (
          <div className="card-flip-rules-page-bg">
            <button
              type="button"
              className="back-btn"
              onClick={this.onClickRulesPageBckBtn}
            >
              <BiArrowBack className="back-arrow" />
              Back
            </button>
            <img
              src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1726821344/animals_2_lh1let.png"
              alt="card flip memory game"
              className="rules-page-img"
            />
            <h1 className="rules-heading"> Rules </h1>
            <ul className="card-flip-rules-container">
              <div className="half-rules-container">
                <li className="flip-card-rules">
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </li>
                <li className="flip-card-rules">
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </li>
                <li className="flip-card-rules">
                  The Timer starts from 2 Minutes.
                </li>
                <li className="flip-card-rules">
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </li>
              </div>

              <div className="half-rules-container">
                <li className="flip-card-rules">
                  Users should be able to compare only two cards at a time.
                </li>
                <li className="flip-card-rules">
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </li>
                <li className="flip-card-rules">
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </li>
              </div>
            </ul>
            <button
              className="start-playing-btn"
              type="button"
              onClick={this.onClickStartPlayingBtn}
            >
              Start playing
            </button>
          </div>
        ) : (
          <CardFlipGamePage
            onClickGamePageBckBtn={this.onClickGamePageBckBtn}
            functionForPlayAgainBtnClicked={this.functionForPlayAgainBtnClicked}
          />
        )}
      </>
    )
  }
}

export default CardFlipGameRulesPage
