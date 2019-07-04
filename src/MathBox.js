import React from "react";

import "./styles.css";

import styles from "./styling";

function MathBox() {
  const ops = ["+", "-", "x", "/"];
  const [operatorNum, setOperator] = React.useState(0);

  function scrollOp() {
    const len = ops.length;
    if (operatorNum < len - 1) {
      setOperator(operatorNum + 1);
    } else {
      setOperator(0);
    }
  }

  function CalculateAns() {
    var display = document.getElementById("Out");
    var val1 = document.getElementById("Val1").value;
    var val2 = document.getElementById("Val2").value;
    var int1 = Number(val1);
    var int2 = Number(val2);
    if (Number.isNaN(int1) || Number.isNaN(int2)) {
      display.value = "Must be numerical input";
    } else {
      var ans = 0;
      switch (ops[operatorNum]) {
        case "+":
          ans = int1 + int2;
          break;
        case "-":
          ans = int1 - int2;
          break;
        case "x":
          ans = int1 * int2;
          break;
        case "/":
          ans = int1 / int2;
          break;
        default:
          break;
      }
      display.value = ans;
    }
  }

  return (
    <>
      <input style={styles.input} id="Val1" />
      <button style={styles.button} onClick={scrollOp}>
        {ops[operatorNum]}
      </button>
      <input style={styles.input} id="Val2" />
      <button style={styles.button} onClick={CalculateAns}>
        =
      </button>
      <input style={styles.input} id="Out" />
    </>
  );
}

export default MathBox;
