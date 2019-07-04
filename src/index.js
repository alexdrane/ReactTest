import React from "react";
import ReactDOM from "react-dom";
import RandomButton from "./randomButton.js";
import InputBox from "./box.js";
import AddButton from "./adding.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <AddButton />
      <h1>Number generator</h1>
      <RandomButton />
      <h1>InputBox</h1>
      <InputBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
