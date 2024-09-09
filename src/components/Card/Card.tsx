import "./Card.css"
import addToCourtLogo from "./icon-add-to-cart.svg"

function Card() {
  return (
    <>
    <div className="container">
    <div className="image"></div>
    <center><button className="btn"><img src={addToCourtLogo} 
    alt="error" className="img2"/><span className="btntxt">Add to court</span> </button></center>
    </div>
    </>
  )
}

export default Card