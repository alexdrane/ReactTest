import React from "react";
import ReactDOM from "react-dom";
import RandomButton from "./randomButton.js";
import InputBox from "./box.js";
import AddButton from "./adding.js";
import MAthBox from "./MathBox.js";
import "./styles.css";
import styles from "./styling";

function App() {
  return (
    <div className="App">
      <h1 style={styles.label}>Calculator</h1>
      <MAthBox />
      <h1 style={styles.label}>Counter</h1>
      <AddButton />
      <h1 style={styles.label}>InputBox</h1>
      <InputBox />
      <h1 style={styles.label}>Number generator</h1>
      <RandomButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
