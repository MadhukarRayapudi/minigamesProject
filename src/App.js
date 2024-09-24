import {Route, Switch} from 'react-router-dom'

import HomeScreen from './components/HomeScreen'

import EmojiGameRulesPage from './components/EmojiGameRulesPage'

import RPSRulesPage from './components/RPSRulesPage'

import MemoryMatrixRules from './components/MemoryMatrixRules'

import CardFlipGameRulesPage from './components/CardFlipGameRulesPage'

import './App.css'

// const emojisList = [
//   {
//     id: 0,
//     emojiName: 'Face with stuck out tongue',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
//   },
//   {
//     id: 1,
//     emojiName: 'Face with head bandage',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
//   },
//   {
//     id: 2,
//     emojiName: 'Face with hugs',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
//   },
//   {
//     id: 3,
//     emojiName: 'Face with laughing',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
//   },
//   {
//     id: 4,
//     emojiName: 'Laughing face with hand in front of mouth',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
//   },
//   {
//     id: 5,
//     emojiName: 'Face with mask',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
//   },
//   {
//     id: 6,
//     emojiName: 'Face with silence',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
//   },
//   {
//     id: 7,
//     emojiName: 'Face with stuck out tongue and winked eye',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
//   },
//   {
//     id: 8,
//     emojiName: 'Grinning face with sweat',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
//   },
//   {
//     id: 9,
//     emojiName: 'Smiling face with heart eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
//   },
//   {
//     id: 10,
//     emojiName: 'Grinning face',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
//   },
//   {
//     id: 11,
//     emojiName: 'Smiling face with star eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
//   },
// ]

// const choicesList = [
//   {
//     id: 'rock',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
//   },
//   {
//     id: 'scissor',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
//   },
//   {
//     id: 'paper',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
//   },
// ]

// const cardsData = [
//   {
//     name: 'tiger',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
//   },
//   {
//     name: 'lion',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
//   },
//   {
//     name: 'rat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
//   },
//   {
//     name: 'hen',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
//   },
//   {
//     name: 'elephant',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
//   },
//   {
//     name: 'buffalo',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
//   },
//   {
//     name: 'goat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
//   },
//   {
//     name: 'zebra',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
//   },
//   {
//     name: 'duck',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
//   },
//   {
//     name: 'pigeon',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
//   },
// ]

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/emoji-game" component={EmojiGameRulesPage} />
    <Route exact path="/rock-paper-scissor" component={RPSRulesPage} />
    <Route exact path="/memory-matrix" component={MemoryMatrixRules} />
    <Route
      exact
      path="/card-flip-memory-game"
      component={CardFlipGameRulesPage}
    />
  </Switch>
)
export default App
