import "./App.css";
import Card from "./components/Card/Card";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
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
                
              }}
            />
          ))}
        </div>
      </div>
      

      <div className="answer">
        <h1>{count}</h1>
      </div>

      <center><div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/SabaMinadze">Saba Minadze</a>.
      </div></center>
    </>
  );
}

export default App;

