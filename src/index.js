import React from "react";
import ReactDOM from "react-dom";
import "./canvas.js";
import RandomButton from "./randomButton.js";
import AddBox from "./adding.js";
import "./styles.css";
import JSCanvas from "./canvas.js";

function App() {
  return (
    <div className="App">
      <h1>Awesome counter!</h1>
      <AddBox />
      <h1>Awesome number generator!</h1>
      <RandomButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
