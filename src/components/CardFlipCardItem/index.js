// import React from 'react'
import './index.css'

const CardFlipCardItem = props => {
  const {eachCardData, isFlipped, disabled, onCardClick} = props

  const handleClick = () => {
    if (!isFlipped && !disabled) {
      onCardClick(eachCardData)
    }
  }

  // const increaseFlipCardCount = () => {
  //   setFlipCount()
  // }

  const cardImage = isFlipped
    ? eachCardData.image
    : 'https://res.cloudinary.com/dqv0mp6k8/image/upload/v1727075798/foot-print_1_gjzqlu.png'

  return (
    <li className="eachCard">
      <button
        className="eachCardBtn"
        type="button"
        onClick={handleClick}
        data-testid={eachCardData.name}
      >
        <img
          src={cardImage}
          alt={eachCardData.name}
          className="eachCardImage"
        />
      </button>
    </li>
  )
}

export default CardFlipCardItem
