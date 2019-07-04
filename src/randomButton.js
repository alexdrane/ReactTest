import React from "react";

import "./styles.css";

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
      <button onClick={onButtonPress}>{randomNumber}</button>
    </>
  );
}

export default RandomButton;
