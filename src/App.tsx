import "./App.css";
import Card from "./components/Card/Card";
import data from "../data.json";

function App() {
  return (
    <>
      <h1 className="txt">Deserts</h1>
      <div className="card-container">
        {data.map((e, index) => (
          <Card
            key={index}
            price={e.price}
            category={e.category}
            imgSrc={e.image.desktop}
          />
        ))}
      </div>
    </>
  );
}

export default App;

