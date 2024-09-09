import "./Card.css"
import addToCourtLogo from "./icon-add-to-cart.svg"


function Card(props:any) {
  return (
    <>
      <div className="mainBox">
        <div className="container">
        <img src={props.imgSrc} alt="error" className="product"/>
        <center><button className="btn"><img src={addToCourtLogo} 
        alt="error" className="img2"/><span className="btntxt">Add to court</span> </button></center>
        <p className="txt3">{props.category}</p>
        <h2 className="txt4">Waffle with Berries</h2>
        <h4 className="txt5">${props.price}</h4>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />
      


    </>
  )
}

export default Card