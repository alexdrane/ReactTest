import React from "react";

import "./styles.css";
import { StyledButton } from "./styling";

function randomNumberGenerator() {
  return Math.floor(Math.random() * 10000);
}

function RandomButton() {
  const [randomNumber, setRandomNumber] = React.useState(
    randomNumberGenerator()
  );

  function onButtonPress() {
    setRandomNumber(randomNumberGenerator());
  }

  return (
    <>
      <StyledButton onClick={onButtonPress}>{randomNumber}</StyledButton>
    </>
  );
}

export default RandomButton;
