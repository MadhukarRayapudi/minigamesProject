import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import MemoryMatrixGamePage from '../MemoryMatrixGamePage'

import './index.css'

class MemoryMatrixRules extends Component {
  state = {gameInProgress: false}

  onClickStartBtn = () => {
    this.setState({gameInProgress: true})
  }

  onClickGamePageBckBtn = () => {
    this.setState({gameInProgress: false})
  }

  onClickBckBtn = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {gameInProgress} = this.state
    return !gameInProgress ? (
      <div className="memory-matrix-rules-page">
        <button
          type="button"
          className="rules-page-bck-btn"
          onClick={this.onClickBckBtn}
        >
          <BiArrowBack /> Back
        </button>
        <h1 className="memory-game-heading"> Memory Matrix </h1>
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1725001931/memory_1_j6rvv7.png"
          className="memory-matrix-image"
          alt="memory matrix"
        />
        <h1 className="memory-matrix-rules-heading"> Rules </h1>

        <ul className="memory-matrix-rules-container">
          <div className="rules-half-container">
            <li className="memory-matrix-rule">
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>
            <li className="memory-matrix-rule">
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li className="memory-matrix-rule">
              After N seconds, the grid will clear the N highlighted cells.
            </li>
            <button
              type="button"
              className="start-md-btn"
              onClick={this.onClickStartBtn}
            >
              Start playing
            </button>
          </div>

          <div className="rules-half-container">
            <li className="memory-matrix-rule">
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
            <li className="memory-matrix-rule">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li className="memory-matrix-rule">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li className="memory-matrix-rule">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
          </div>
        </ul>
        <button
          type="button"
          className="start-sm-btn"
          onClick={this.onClickStartBtn}
        >
          Start playing
        </button>
      </div>
    ) : (
      <MemoryMatrixGamePage
        onClickGamePageBckBtn={this.onClickGamePageBckBtn}
      />
    )
  }
}

export default MemoryMatrixRules
