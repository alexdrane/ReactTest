import React from "react";

import "./styles.css";

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
      <input id="Box" />
      <button onClick={setText}>Enter</button>
      <h2>{userInput}</h2>
      <button onClick={Clear}>Clear</button>
    </>
  );
}

export default InputBox;
