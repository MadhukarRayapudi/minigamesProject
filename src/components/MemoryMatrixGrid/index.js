import {Component} from 'react'
import './index.css'

class MemoryMatrixGrid extends Component {
  renderGrid = () => {
    const {
      numberOfGrids,
      randomCells,
      selectedCells,
      isMemorizing,
      onCellClick,
    } = this.props
    const gridSize = numberOfGrids * numberOfGrids
    const cells = []

    for (let i = 0; i < gridSize; i += 1) {
      const isHighlighted = randomCells.includes(i)
      let cellClass = 'grid-cell'
      let dataTestId = 'notHighlighted'

      // Highlighting conditions (highlighted grids)
      if (isMemorizing && isHighlighted) {
        cellClass += ' highlighted'
        dataTestId = 'highlighted'
      } else if (!isMemorizing && !isHighlighted && selectedCells.includes(i)) {
        cellClass += ' incorrect'
      } else if (!isMemorizing && isHighlighted && selectedCells.includes(i)) {
        cellClass += ' correct'
        dataTestId = 'highlighted'
      }

      console.log(
        `Rendering cell ${i}: class=${cellClass} data-testid=${dataTestId}`,
      )

      cells.push(
        <li
          key={`cell-${i}`} // Ensure unique key for each cell
          className={cellClass}
          onClick={() => onCellClick(i)}
          data-testid={dataTestId}
        />,
      )
    }

    // Ensure that at least two list items are being rendered
    if (cells.length < 2) {
      console.error('Error: Less than two grid cells are being rendered.')
    }

    return cells
  }

  render() {
    const {numberOfGrids} = this.props

    // Update the grid-template-columns and rows based on the number of grids
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
