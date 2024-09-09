import "./App.css"
import data from "../data.json"

function App() {
  
  return (
    <>
    <h1 className="txt">Deserts</h1>
    <h3>{data.map(e => <h1>{e.name}</h1>)}</h3>
    </>
  )
}

export default App
