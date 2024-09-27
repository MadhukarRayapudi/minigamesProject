import './index.css'

const RPSChoiceItem = props => {
  const {eachItem, onClickAnOption} = props
  console.log(eachItem)

  let dataTestId = null

  if (eachItem.id === 'rock') {
    dataTestId = 'rockButton'
  } else if (eachItem.id === 'scissor') {
    dataTestId = 'scissorButton'
  } else {
    dataTestId = 'paperButton'
  }
  // console.log(dataTestId)
  const onSelectAnOption = () => {
    onClickAnOption(eachItem.id)
  }
  return (
    <button
      type="button"
      key={eachItem.id}
      className="image-btn"
      onClick={onSelectAnOption}
      data-testid={dataTestId}
    >
      <img src={eachItem.imageUrl} className="image" alt={eachItem.id} />
    </button>
  )
}

export default RPSChoiceItem
