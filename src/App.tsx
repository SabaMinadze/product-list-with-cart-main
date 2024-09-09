import "./App.css"
import Card from "./components/Card/Card"
import data from "../data.json"

function App() {
  
  return (
    <>
    <h1 className="txt">Deserts</h1>
    <div>{data.map(e => <h2>{e.price}</h2>)}</div>
    <div>{data.map(e => <Card price={e.price} category="asd"/>)}</div>
    </>
  )
}

export default App
