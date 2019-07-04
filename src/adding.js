import React from "react";

import "./styles.css";
import styles from "./styling";

function AddButton() {
  const [randomNumber, setRandomNumber] = React.useState(0);

  function onButtonPress() {
    setRandomNumber(randomNumber + 1);
  }
  function reset() {
    setRandomNumber(0);
  }

  return (
    <>
      <button style={styles.button} onClick={onButtonPress}>
        {randomNumber}
      </button>
      <button style={styles.button} onClick={reset}>
        Reset Counter
      </button>
    </>
  );
}

export default AddButton;
