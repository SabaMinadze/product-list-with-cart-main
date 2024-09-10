import "./App.css";
import Card from "./components/Card/Card";
import data from "../data.json";
import { useState } from "react";
import empty from "../public/images/illustration-empty-cart.svg"

function App() {
  const [count, setCount] = useState(0)
  const [vaffle, setVaffle] = useState("")
  const [vanilla, setVanilla] = useState("")
  const [macaron, setMacaron] = useState("")
  const [tiramisu, setTiramisu] = useState("")
  const [pistachio, setPistachio] = useState("")
  const [lemon, setLemon] = useState("")
  const [caramel, setCaramel] = useState("")
  const [panna , setPanna] = useState("")
  

  return (
    <>
      <h1 className="txt">Deserts</h1>
      <div className="mainBody">
        <div className="card-container">
          {data.map((e, index) => (
            <Card
              key={index}
              price={e.price}
              category={e.category}
              name={e.name}
              imgSrc={e.image.desktop}
              onClick={() => {
                console.log("Hello wolrd");
                setCount(count + 1)
                {e.name === "Waffle with Berries" ? setVaffle("Waffle with Berries") : null}
                {e.name === "Vanilla Bean Crème Brûlée" ? setVanilla("Vanilla Bean Crème Brûlée") : null}
                {e.name === "Macaron Mix of Five" ? setMacaron("Macaron Mix of Five") : null}
                {e.name === "Classic Tiramisu" ? setTiramisu("Classic Tiramisu") : null} 
                {e.name === "Pistachio Baklava" ? setPistachio("Pistachio Baklava") : null} 
                {e.name === "Lemon Meringue Pie" ? setLemon("Lemon Meringue Pie") : null}
                {e.name === "Red Velvet Cake" ? setCaramel("Red Velvet Cake") : null}
                {e.name === "Salted Caramel Brownie" ? setPanna("Salted Caramel Brownie") : null}
                {e.name === "Vanilla Panna Cotta" ? setLemon("Vanilla Panna Cotta") : null}  
                
                
              }}
            />
          ))}
        </div>
      </div>
      

      <div className="answer">
        <h1 className="txt2">Your Cart ({count})</h1>
        <h3 className="inf">{vaffle === "Waffle with Berries" ? <h3>Waffle with Berries</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{vanilla === "Vanilla Bean Crème Brûlée" ? <h3>Vanilla Bean Crème Brûlée</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{macaron === "Macaron Mix of Five" ? <h3>Macaron Mix of Five</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{tiramisu === "Classic Tiramisu" ? <h3>Classic Tiramisu</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{pistachio === "Pistachio Baklava" ? <h3>Pistachio Baklava</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{lemon === "Lemon Meringue Pie" ? <h3>Lemon Meringue Pie</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{caramel === "Red Velvet Cake" ? <h3>Red Velvet Cake</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{panna === "Salted Caramel Brownie" ? <h3>Salted Caramel Brownie</h3> : null}</h3>
        {count >= 1 ? <hr/> : null}
        <h3 className="inf">{lemon === "Vanilla Panna Cotta" ? <h3>Vanilla Panna Cotta</h3> : null}</h3>
        {count >= 1 ? <button></button> : null}
        {count <= 0 ? <img src={empty} alt="error" /> : null}
        {count <= 0 ? <p className="info">Your added items will appear here</p> : null}
      </div>

      <center><div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/SabaMinadze">Saba Minadze</a>.
      </div></center>
    </>
  );
}

export default App;

