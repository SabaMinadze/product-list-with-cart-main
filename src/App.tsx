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
  const [panna , setPanna ] = useState("")
  

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

