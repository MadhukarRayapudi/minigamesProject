import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import RPSGamePage from '../RPSGamePage'

import './index.css'

class RPSRulesPage extends Component {
  state = {gameStarted: false}

  onClickbckBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickStartPlayingBtn = () => {
    this.setState(prevState => ({gameStarted: !prevState.gameStarted}))
  }

  render() {
    const {gameStarted} = this.state
    return (
      <>
        {!gameStarted ? (
          <div className="rps-rules-page-container">
            <button
              type="button"
              className="rps-rules-page-bck-btn"
              onClick={this.onClickbckBtn}
            >
              <BiArrowBack className="rps-rules-page-back-icon" />
              Back
            </button>
            <h1 className="rps-heading"> Rock Paper Scissor </h1>
            <img
              src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722664335/Group_7469_1_le785t.png"
              alt="rock paper scissor"
              className="rps-rules-page-img"
            />
            <h1 className="rps-rules-heading"> Rules </h1>
            <ul className="rps-rules-container">
              <div className="rps-rules-container-for-md-above-devices">
                <div className="rps-six-rules-container rps-six-rules-container-frst">
                  <li className="rps-rule">
                    The game result should be based on user and user opponent
                    choices
                  </li>

                  <li className="rps-rule">
                    When the user choice is rock and his opponent choice is rock
                    then the result will be{' '}
                    <span className="span-element-for-md-devices">
                      IT IS DRAW
                    </span>
                    <span className="span-element-for-sm-devices">
                      IT IS DRAW
                    </span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is paper and his opponent choice is
                    rock then the result will be{' '}
                    <span className="span-element-for-md-devices">YOU WON</span>
                    <span className="span-element-for-sm-devices">YOU WON</span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is a scissor and his opponent choice is
                    rock then the result will be{' '}
                    <span className="span-element-for-md-devices">
                      YOU LOSE
                    </span>
                    <span className="span-element-for-sm-devices">
                      YOU LOSE
                    </span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is paper and his opponent choice is
                    paper then the result will be{' '}
                    <span className="span-element-for-md-devices">
                      IT IS DRAW
                    </span>
                    <span className="span-element-for-sm-devices">
                      IT IS DRAW
                    </span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is scissors and his opponent choice is
                    paper then the result will be{' '}
                    <span className="span-element-for-md-devices">YOU WON</span>
                    <span className="span-element-for-sm-devices">YOU WON</span>
                  </li>
                </div>

                <div className="rps-six-rules-container">
                  <li className="rps-rule">
                    When the user choice is rock and his opponent choice is
                    scissors then the result will be{' '}
                    <span className="span-element-for-md-devices">YOU WON</span>
                    <span className="span-element-for-sm-devices">YOU WON</span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is paper and his opponent choice is
                    scissors then the result will be{' '}
                    <span className="span-element-for-md-devices">
                      YOU LOSE
                    </span>
                    <span className="span-element-for-sm-devices">
                      YOU LOSE
                    </span>
                  </li>

                  <li className="rps-rule">
                    When the user choice is scissors and his opponent choice is
                    scissors then the result will be{' '}
                    <span className="span-element-for-md-devices">
                      IT IS DRAW
                    </span>
                    <span className="span-element-for-sm-devices">
                      IT IS DRAW
                    </span>
                  </li>

                  <li className="rps-rule">
                    When the result is{' '}
                    <span className="span-element-for-md-devices">YOU WON</span>
                    <span className="span-element-for-sm-devices">YOU WON</span>
                    , then the count of the score should be incremented by 1
                  </li>

                  <li className="rps-rule">
                    When the result is{' '}
                    <span className="span-element-for-md-devices">
                      IT IS DRAW
                    </span>
                    <span className="span-element-for-sm-devices">
                      IT IS DRAW
                    </span>
                    , then the count of the score should be the same
                  </li>

                  <li className="rps-rule">
                    When the result is{' '}
                    <span className="span-element-for-md-devices">
                      IT IS DRAW
                    </span>
                    <span className="span-element-for-sm-devices">
                      IT IS DRAW
                    </span>
                    , then the count of the score should be decremented by 1.
                  </li>
                </div>
              </div>
            </ul>
            <button
              type="button"
              className="rps-start-playing-btn"
              onClick={this.onClickStartPlayingBtn}
            >
              Start playing
            </button>
          </div>
        ) : (
          <RPSGamePage onClickStartPlayingBtn={this.onClickStartPlayingBtn} />
        )}
      </>
    )
  }
}

export default RPSRulesPage
