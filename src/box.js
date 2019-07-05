import React from "react";

import "./styles.css";
import { StyledButton, StyledInput } from "./styling";

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
      <StyledInput id="Box" />
      <StyledButton onClick={setText}>Enter</StyledButton>
      <h2>{userInput}</h2>
      <StyledButton onClick={Clear}>Clear</StyledButton>
    </>
  );
}

export default InputBox;
