import "./App.css";
import Card from "./components/Card/Card";
import data from "../data.json";

function App() {
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
            />
          ))}
        </div>
      </div>
      <br />

      <center><div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
      </div></center>
    </>
  );
}

export default App;

