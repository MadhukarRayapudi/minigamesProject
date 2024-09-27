// import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const HomeScreen = () => (
  <div className="home-screen-bg">
    <h1 className="main-heading">Games</h1>
    <div className="home-page-games-container">
      <ul className="home-screen-games-container">
        <li className="home-page-each-game-card">
          <Link className="home-page-each-game-link-container" to="/emoji-game">
            <img
              className="game-image"
              src="https://res.cloudinary.com/dwtnrleoa/image/upload/v1722441258/Group_7471_1_decakd.png"
              alt="emoji game"
            />
          </Link>
        </li>

        <li className="home-page-each-game-card">
          <Link
            className="home-page-each-game-link-container"
            to="/memory-matrix"
          >
            <h1 className="game-name">Memory Matrix</h1>
            <img
              className="memory-matrix-game-image"
              src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722491450/sfohq2ibvncjvejwt7zo.png"
              alt="memory matrix"
            />
          </Link>
        </li>

        <li className="home-page-each-game-card">
          <Link
            className="home-page-each-game-link-container"
            to="/rock-paper-scissor"
          >
            <h1 className="game-name">Rock Paper Scissor</h1>
            <img
              className="game-image"
              src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722492072/Group_7469_m56m8y.png"
              alt="rock paper scissor"
            />
          </Link>
        </li>

        <li className="home-page-each-game-card">
          <Link
            className="home-page-each-game-link-container"
            to="/card-flip-memory-game"
          >
            <img
              className="flip-card-game-image"
              src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722492197/animals_z3zmkc.png"
              alt="card flip"
            />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default HomeScreen
