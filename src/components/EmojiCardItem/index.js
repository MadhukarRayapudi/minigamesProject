import EmojiGameContext from '../EmojiGameContext'

import './index.css'

const EmojiCardItem = props => {
  const {eachEmoji} = props
  const {emojiUrl, emojiName, id} = eachEmoji

  return (
    <EmojiGameContext.Consumer>
      {value => {
        const {cardItemClicked} = value
        return (
          <li className="each-emoji-item">
            <button
              className="each-emoji-button"
              type="button"
              onClick={() => cardItemClicked(id)}
            >
              <img className="emoji" src={emojiUrl} alt={emojiName} />
            </button>
          </li>
        )
      }}
    </EmojiGameContext.Consumer>
  )
}

export default EmojiCardItem
