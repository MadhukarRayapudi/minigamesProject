import './index.css'

const Navbar = props => {
  const {score, topScore} = props
  return (
    <nav className="nav">
      <div className="nav-child-container">
        <img
          className="logo"
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722502973/wink_1_cjc6yl.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {score >= 0 && (
        <div className="nav-child-score-container">
          <h1 className="score">Score: {score}</h1>
          <h1 className="score">Top Score: {topScore}</h1>
        </div>
      )}
    </nav>
  )
}

export default Navbar
