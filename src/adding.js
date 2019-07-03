import React from "react";

import "./styles.css";

function AddBox () {
  const [randomNumber,setRandomNumber] = React.useState(0);

  function onButtonPress(){
    setRandomNumber(randomNumber+1);
  }
  function reset(){
    setRandomNumber(0);
  }
  
  return (
    <>
    <button onClick = {onButtonPress}>{randomNumber}</button>
    <button onClick = {reset}>Reset Counter</button>
    </>
  );
}

export default AddBox;