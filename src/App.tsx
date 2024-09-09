import "./App.css"
import Card from "./components/Card/Card"
import data from "../data.json"

function App() {
  
  return (
    <>
    <h1 className="txt">Deserts</h1>
    <div className="card-container">
      <div>{data.map(e => <Card price={e.price} category={e.category} imgSrc={e.image.desktop}/>)}</div>
    </div>
    </>
  )
}

export default App
