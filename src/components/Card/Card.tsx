import "./Card.css"
import addToCourtLogo from "./icon-add-to-cart.svg"

function Card() {
  return (
    <>
    <div className="container">
    <div className="image"></div>
    <center><button className="btn"><img src={addToCourtLogo} alt="error" /> Add to court</button></center>
    </div>
    </>
  )
}

export default Card