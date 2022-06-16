import { useState } from "react";
import "./App.css";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <div className={`container ${active}`}>
        <div
          className="split left"
          onMouseEnter={() => setActive("hover-left")}
          onMouseLeave={() => setActive("")}
        >
          <h1>Playstation 5</h1>
          <a href="#" className="btn">
            Buy now
          </a>
        </div>
        <div
          className="split right"
          onMouseEnter={() => setActive("hover-right")}
          onMouseLeave={() => setActive("")}
        >
          <h1>Xbox Series X</h1>
          <a href="#" className="btn">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
