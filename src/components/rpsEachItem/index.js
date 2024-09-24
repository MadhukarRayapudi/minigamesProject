import './index.css'

const rpsEachItem = props => {
  const {eachItem} = props
  const {imageUrl} = eachItem

  return (
    <>
      <div className="rock-and-scissor-img-container">
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722707011/Group_6941_bgdpbx.png"
          alt="rock"
          className="rps-paper-img"
        />
        <div className="beats-and-arrow-container-straight">
          <p className="middle-text"> Beats </p>
          <img
            src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722709717/trending_flat_rounded_hgtqpk.png"
            className="rps-arrow"
            alt="arrow"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722707081/Group_6940_t0lq5j.png"
          alt="scissor"
          className="rps-paper-img"
        />
      </div>

      <div className="beats-and-arrow-container-cross-to-down">
        <p className="middle-text"> Beats </p>
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722709717/trending_flat_rounded_hgtqpk.png"
          className="rps-arrow"
          alt="arrow"
        />
      </div>

      <div className="beats-and-arrow-container-cross-to-up">
        <p className="middle-text">Beats</p>
        <img
          src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722709717/trending_flat_rounded_hgtqpk.png"
          className="rps-arrow"
          alt="arrow"
        />
      </div>

      <img
        src="https://res.cloudinary.com/dqv0mp6k8/image/upload/v1722706865/Paper_zhyfgv.png"
        alt="paper"
        className="rps-paper-img"
      />
    </>
  )
}
