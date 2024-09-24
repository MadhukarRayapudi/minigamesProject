// import React from 'react'
import EmojiCardItem from '../EmojiCardItem'
import EmojiGameContext from '../EmojiGameContext'
import './index.css'

const EmojisCardsContainer = () => (
  <EmojiGameContext.Consumer>
    {value => {
      const {shuffledArray} = value

      return (
        <ul className="emojis-unordered-list">
          {shuffledArray.map(eachItem => (
            <EmojiCardItem eachEmoji={eachItem} key={eachItem.id} />
          ))}
        </ul>
      )
    }}
  </EmojiGameContext.Consumer>
)

export default EmojisCardsContainer
