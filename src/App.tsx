import "./App.css";
import Card from "./components/Card/Card";
import data from "../data.json";
import { useState } from "react";
import empty from "../public/images/illustration-empty-cart.svg"
import carbon from "../public/images/icon-carbon-neutral.svg"

function App() {
  const [count, setCount] = useState(0)

  const [vaffle, setVaffle] = useState("")
  const [vanilla, setVanilla] = useState("")
  const [macaron, setMacaron] = useState("")
  const [tiramisu, setTiramisu] = useState("")
  const [pistachio, setPistachio] = useState("")
  const [lemon, setLemon] = useState("")
  const [cake, setCake] = useState("")
  const [caramel, setCaramel] = useState("")
  const [panna , setPanna] = useState("")

  const [price, setPrice] = useState(0)

  const [vaffleprice, setVaffleprice] = useState(0)
  const [vanillaprice, setVanillaprice] = useState(0) 
  const [macaronprice, setMacaronprice] = useState(0) 
  const [tiramisuprice, setiramisuprice] = useState(0) 
  const [pistachioprice, setpistachioprice] = useState(0) 
  const [lemonprice, setlemonprice] = useState(0) 
  const [cakeprice, setCakePrice] = useState(0)
  const [caramelprice, setcaramelprice] = useState(0) 
  const [pannaprice, setpannaprice] = useState(0)  
  

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
                {e.name === "Red Velvet Cake" ? setCake("Red Velvet Cake") : null}
                {e.name === "Salted Caramel Brownie" ? setCaramel("Salted Caramel Brownie") : null}
                {e.name === "Vanilla Panna Cotta" ? setPanna("Vanilla Panna Cotta") : null}


                {e.category === "Waffle" ? setPrice(price + e.price) : null}
                {e.category === "Crème Brûlée" ? setPrice(price + e.price) : null}
                {e.category === "Macaron" ? setPrice(price + e.price) : null}
                {e.category === "Tiramisu" ? setPrice(price + e.price) : null}
                {e.category === "Baklava" ? setPrice(price + e.price) : null}
                {e.category === "Pie" ? setPrice(price + e.price) : null}
                {e.category === "Cake" ? setPrice(price + e.price) : null}
                {e.category === "Brownie" ? setPrice(price + e.price) : null}
                {e.category === "Panna Cotta" ? setPrice(price + e.price) : null}

                {e.category === "Waffle" ? setVaffleprice(e.price) : null}
                {e.category === "Crème Brûlée" ? setVanillaprice(e.price) : null}
                {e.category === "Macaron" ? setMacaronprice(e.price) : null}
                {e.category === "Tiramisu" ? setiramisuprice(e.price) : null}
                {e.category === "Baklava" ? setpistachioprice(e.price) : null}
                {e.category === "Pie" ? setlemonprice(e.price) : null}
                {e.category === "Cake" ? setCakePrice(e.price) : null}
                {e.category === "Brownie" ? setcaramelprice(e.price) : null}
                {e.category === "Panna Cotta" ? setpannaprice(e.price) : null}
                
              }}
            />
          ))}
        </div>
      </div>
      

      <div className="answer">
        <h1 className="txt2">Your Cart ({count})</h1>
        <h3 className="inf">{vaffle === "Waffle with Berries" ? <h3>Waffle with Berries</h3> : null}</h3>
        {vaffle === "Waffle with Berries" ? <h2>@{vaffleprice}</h2> : null}
        <h3 className="inf">{vanilla === "Vanilla Bean Crème Brûlée" ? <h3>Vanilla Bean Crème Brûlée</h3> : null}</h3>
        {vanilla === "Vanilla Bean Crème Brûlée" ? <h2>@{vanillaprice}</h2> : null}
        <h3 className="inf">{macaron === "Macaron Mix of Five" ? <h3>Macaron Mix of Five</h3> : null}</h3>
        {macaron === "Macaron Mix of Five" ? <h2>@{macaronprice}</h2> : null}
        <h3 className="inf">{tiramisu === "Classic Tiramisu" ? <h3>Classic Tiramisu</h3> : null}</h3>
        {tiramisu === "Classic Tiramisu" ? <h2>@{tiramisuprice}</h2> : null}
        <h3 className="inf">{pistachio === "Pistachio Baklava" ? <h3>Pistachio Baklava</h3> : null}</h3>
        {pistachio === "Pistachio Baklava" ? <h2>@{pistachioprice}</h2> : null}
        <h3 className="inf">{lemon === "Lemon Meringue Pie" ? <h3>Lemon Meringue Pie</h3> : null}</h3>
        {lemon === "Lemon Meringue Pie" ? <h2>@{lemonprice}</h2> : null}
        <h3 className="inf">{cake === "Red Velvet Cake" ? <h3>Red Velvet Cake</h3> : null}</h3>
        {cake === "Red Velvet Cake" ? <h2>@{cakeprice}</h2> : null}
        <h3 className="inf">{caramel === "Salted Caramel Brownie" ? <h3>Salted Caramel Brownie</h3> : null}</h3>
        {caramel === "Salted Caramel Brownie" ? <h2>@{caramelprice}</h2> : null}
        <h3 className="inf">{panna === "Vanilla Panna Cotta" ? <h3>Vanilla Panna Cotta</h3> : null}</h3>
        {panna === "Vanilla Panna Cotta" ? <h2>@{pannaprice}</h2> : null}
        <div className="orderBox">      
          {count >= 1 ? <p className="order">Order Total</p> : null}
          {count >= 1 ? <p className="count">${price}</p> : null}
        </div>
        {count >= 1 ? <div className="carbon"><img src={carbon} alt="error" />This is a carbon-neutral delivery</div> : null}
        <br />
        {count >= 1 ? <button className="cnfrm">confirm order</button> : null}
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

