import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import EmojiGamePage from '../EmojiGamePage'

import './index.css'

class EmojiGameRulesPage extends Component {
  state = {showGamePage: false}

  onClickBackBtn = () => {
    const {history} = this.props
    history.push('/')
  }

  startPlayingClicked = () => {
    this.setState(prevState => ({showGamePage: !prevState.showGamePage}))
  }

  render() {
    const {showGamePage} = this.state
    return (
      <div
        className={`emoji-game-container ${
          showGamePage ? 'gamepage-true' : ''
        }`}
      >
        {showGamePage ? (
          <EmojiGamePage startPlayingClicked={this.startPlayingClicked} />
        ) : (
          <>
            <button
              type="button"
              className="button"
              onClick={this.onClickBackBtn}
            >
              <BiArrowBack className="back-icon" />
              Back
            </button>
            <div className="game-rules-container">
              <img
                className="image"
                src="https://res.cloudinary.com/dwtnrleoa/image/upload/v1722441258/Group_7471_1_decakd.png"
                alt="emoji game"
              />
              <ul className="rules-container">
                <h1 className="ruled-heading"> Rules </h1>
                <li className="rules">
                  User should be able to see the list of Emojis
                </li>
                <li className="rules">
                  When the user clicks any one of the Emoji for the first time,
                  then the count of the score should be incremented by 1 and the
                  List of emoji cards should be shuffled.
                </li>
                <li className="rules">
                  This process should be repeated every time the user clicks on
                  an emoji card
                </li>
                <li className="rules">
                  When the user clicks on all Emoji cards without clicking any
                  of it twice, then the user will win the game
                </li>
                <li className="rules">
                  When the user clicks on the same Emoji for the second time,
                  then the user will lose the game.
                </li>
                <li className="rules">
                  Once the game is over, the user will be redirected to the
                  results page.
                </li>
                <button
                  type="button"
                  className="start-play-button"
                  onClick={this.startPlayingClicked}
                >
                  Start playing
                </button>
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGameRulesPage
