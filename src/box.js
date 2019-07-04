import React from "react";

import "./styles.css";
import styles from "./styling";

function InputBox() {
  const [userInput, setUserInput] = React.useState("");

  function setText() {
    var input = document.getElementById("Box");
    setUserInput(input.value);
  }

  function Clear() {
    setUserInput("");
    var input = document.getElementById("Box");
    input.value = "";
  }

  return (
    <>
      <input style={styles.input} id="Box" />
      <button style={styles.button} onClick={setText}>
        Enter
      </button>
      <h2 style={styles.label}>{userInput}</h2>
      <button style={styles.button} onClick={Clear}>
        Clear
      </button>
    </>
  );
}

export default InputBox;
