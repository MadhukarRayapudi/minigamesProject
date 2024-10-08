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

      // Here i wrote the conditions for highlihting(highlighted grids)
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
        <li
          key={i}
          className={cellClass}
          onClick={() => onCellClick(i)}
          data-testid={dataTestId}
        />,
      )
    }
    return cells
  }

  render() {
    const {numberOfGrids} = this.props

    // Update the grid-template-columns based on the number of grids
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
