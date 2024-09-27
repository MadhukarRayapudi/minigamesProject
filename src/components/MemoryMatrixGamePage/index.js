import {Component} from 'react'
// import Popup from 'reactjs-popup'
import {BiArrowBack} from 'react-icons/bi'
// import {CgClose} from 'react-icons/cg'
import MemoryMatrixGrid from '../MemoryMatrixGrid'
import MemoryMatrixResultPage from '../MemoryMatrixResultPage'
import './index.css'

// <Popup
//             modal
//             trigger={
//               <button className="rules-btn" type="button">
//                 Rules
//               </button>
//             }
//           >
//             {close => (
//               <>
//                 <ul className="popup-container">
//                   <button
//                     className="close-button"
//                     type="button"
//                     data-testid="close"
//                     onClick={() => close()}
//                   >
//                     <CgClose />
//                   </button>
//                   <h1 className="popup-rules-heading"> Rules </h1>
//                   <div className="rules-container-md-devices">
//                     <div className="half-rules-container1">
//                       <li className="popup-rules">
//                         In each level of the Game, Users should be able to see
//                         the Grid with (N X N) size starting from 3 and the grid
//                         will highlight N cells in Blue, the N highlighted cells
//                         will be picked randomly.
//                       </li>
//                       <li className="popup-rules">
//                         The highlighted cells will remain N seconds for the user
//                         to memorize the cells. At this point, the user should
//                         not be able to perform any action.
//                       </li>
//                       <li className="popup-rules">
//                         After N seconds, the grid will clear the N highlighted
//                         cells.
//                       </li>
//                     </div>

//                     <div className="half-rules-container">
//                       <li className="popup-rules">
//                         At N seconds, the user can click on any cell. Clicking
//                         on a cell that was highlighted before it will turn blue.
//                         Clicking on the other cells that were not highlighted
//                         before then will turn to red.
//                       </li>
//                       <li className="popup-rules">
//                         The user should be promoted to the next level if they
//                         guess all N cells correctly in one attempt.
//                       </li>
//                       <li className="popup-rules">
//                         The user should be taken to the results page if the user
//                         clicks on the wrong cell.
//                       </li>
//                       <li className="popup-rules">
//                         If the user completed all the levels, then the user
//                         should be taken to the results page.
//                       </li>
//                     </div>
//                   </div>
//                 </ul>
//               </>
//             )}
//           </Popup>

class MemoryMatrixGamePage extends Component {
  state = {
    level: 1,
    maxLevel: 15, // Max level of the game
    numberOfGrids: 3,
    randomCells: [],
    selectedCells: [],
    isMemorizing: true,
    isGameOver: false,
    showResults: false,
  }

  componentDidMount() {
    this.initializeGame()
  }

  initializeGame = () => {
    const {level} = this.state
    const gridSize = 3 + (level - 1) // Increase grid size as the level increases
    const randomCells = this.getRandomCells(gridSize)
    this.setState(
      {numberOfGrids: gridSize, randomCells, isMemorizing: true},
      () => {
        setTimeout(() => {
          this.setState({isMemorizing: false})
        }, gridSize * 1000) // Memorization phase lasts for N seconds
      },
    )
  }

  getRandomCells = gridSize => {
    const randomNums = []
    while (randomNums.length < gridSize) {
      const randomIndex = Math.floor(Math.random() * gridSize * gridSize)
      if (!randomNums.includes(randomIndex)) {
        randomNums.push(randomIndex)
      }
    }
    return randomNums
  }

  handleCellClick = index => {
    const {randomCells, selectedCells, level, maxLevel} = this.state
    if (randomCells.includes(index)) {
      if (!selectedCells.includes(index)) {
        selectedCells.push(index)
      }
      this.setState({selectedCells})
      if (selectedCells.length === randomCells.length) {
        if (level < maxLevel) {
          this.setState(
            prevState => ({
              level: prevState.level + 1,
              selectedCells: [],
              randomCells: [],
              isMemorizing: true,
            }),
            this.initializeGame,
          )
        } else {
          this.setState({showResults: true})
        }
      }
    } else {
      this.setState({isGameOver: true})
    }
  }

  onClickBackBtn = () => {
    const {onClickGamePageBckBtn} = this.props
    onClickGamePageBckBtn()
  }

  onClickRestart = () => {
    this.setState({showResults: false})
  }

  onClickPlayagainBtn = () => {
    this.setState({showResults: false})
  }

  render() {
    const {
      level,
      numberOfGrids,
      randomCells,
      isMemorizing,
      showResults,
      isGameOver,
      selectedCells,
    } = this.state

    if (showResults) {
      const {onClickGamePageBckBtn} = this.props
      return (
        // <div className="result-container">
        //   <h1>Congratulations! You have completed all levels.</h1>
        //   <button onClick={this.onClickRestart}>Restart</button>
        // </div>
        <MemoryMatrixResultPage
          score={level}
          onClickGamePageBckBtn={onClickGamePageBckBtn}
        />
      )
    }

    if (isGameOver) {
      const {onClickGamePageBckBtn} = this.props
      return (
        // <div className="result-container">
        //   <h1>Game Over!</h1>
        //   <button onClick={this.onClickBackBtn}>Restart</button>
        // </div>

        <MemoryMatrixResultPage
          score={level}
          onClickGamePageBckBtn={onClickGamePageBckBtn}
        />
      )
    }

    return (
      <div className="memory-matrix-game-page-container">
        <div className="back-btn-and-rules-btn-container">
          <button
            type="button"
            className="memory-game-page-back-btn"
            onClick={this.onClickBackBtn}
          >
            <BiArrowBack /> Back
          </button>
        </div>
        <h1 className="game-page-heading">Memory Matrix - Level {level}</h1>
        <MemoryMatrixGrid
          numberOfGrids={numberOfGrids}
          randomCells={randomCells}
          selectedCells={selectedCells}
          isMemorizing={isMemorizing}
          onCellClick={this.handleCellClick}
        />
      </div>
    )
  }
}

export default MemoryMatrixGamePage
