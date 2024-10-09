import {Component} from 'react'
import './index.css'

class MemoryMatrixGrid extends Component {
  renderGrid = () => {
    const {
      numberOfGrids,
      randomCells, // Array of highlighted cell indexes
      selectedCells, // Array of cells the user has clicked
      isMemorizing, // Whether the game is in memorization phase
      onCellClick,
    } = this.props
    const gridSize = numberOfGrids * numberOfGrids // Total number of cells
    const cells = []

    for (let i = 0; i < gridSize; i += 1) {
      const isHighlighted = randomCells.includes(i) // Check if the current cell should be highlighted
      let cellClass = 'grid-cell'
      let dataTestId = 'notHighlighted' // Default to "notHighlighted"

      if (isMemorizing && isHighlighted) {
        cellClass += ' highlighted'
        dataTestId = 'highlighted'
      } else if (!isMemorizing && !isHighlighted && selectedCells.includes(i)) {
        cellClass += ' incorrect'
      } else if (!isMemorizing && isHighlighted && selectedCells.includes(i)) {
        cellClass += ' correct'
        dataTestId = 'highlighted'
      }

      cells.push(
        <li key={`cell-${i}`} className="cell-item">
          <button
            className={cellClass}
            onClick={() => onCellClick(i)}
            data-testid={dataTestId}
            type="button"
            aria-label="{
              isHighlighted ? 'highlighted cell' : 'non-highlighted cell'
            }"
          />
        </li>,
      )
    }

    return cells
  }

  render() {
    const {numberOfGrids} = this.props

    // Dynamically set the grid layout
    const gridStyle = {
      gridTemplateColumns: `repeat(${numberOfGrids}, 1fr)`,
      gridTemplateRows: `repeat(${numberOfGrids}, 1fr)`,
    }

    return (
      <ul className="grid-container" style={gridStyle}>
        {this.renderGrid()}
      </ul>
    )
  }
}

export default MemoryMatrixGrid
