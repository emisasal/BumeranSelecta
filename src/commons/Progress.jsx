import ProgressBar from "react-bootstrap/ProgressBar"
import "../assets/styles/Progress.scss"

const Progress = ({ ranking }) => {
  return (
    <div className="containerProgress">
      <div className="containerIcon">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
      </div>
      <div className="containerBarra">
        <ProgressBar
          className="progressBarra"
          variant="white"
          now={100 - ranking * 10}
        />
      </div>
    </div>
  )
}

export default Progress
