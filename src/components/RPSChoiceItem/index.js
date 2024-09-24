import './index.css'

const RPSChoiceItem = props => {
  const {eachItem, onClickAnOption} = props

  const onSelectAnOption = () => {
    onClickAnOption(eachItem.id)
  }
  return (
    <button
      type="button"
      key={eachItem.id}
      className="image-btn"
      onClick={onSelectAnOption}
    >
      <img src={eachItem.imageUrl} className="image" alt={eachItem.id} />
    </button>
  )
}

export default RPSChoiceItem
