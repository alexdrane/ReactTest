import React from "react";
import styled from "styled-components";

import "./styles.css";
import { StyledButton, StyledInput } from "./styling.js";

const NumberInput = styled(StyledInput)`
  color: white;
  background-color: ${props =>
    Number.isNaN(Number(props.num)) ? "Red" : "Green"};
`;

const TrueInput = styled(StyledInput)`
  background-color: ${props => (props.state ? "Green" : "Red")};
`;

function MathBox() {
  const ops = ["+", "-", "x", "/", "^"];
  const [operatorNum, setOperator] = React.useState(0);
  const [lh, setLh] = React.useState("");
  const [rh, setRh] = React.useState("");

  function onLhChange(evt) {
    setLh(evt.target.value);
  }

  function onRhChange(evt) {
    setRh(evt.target.value);
  }

  function scrollOp() {
    const len = ops.length;
    if (operatorNum < len - 1) {
      setOperator(operatorNum + 1);
    } else {
      setOperator(0);
    }
  }

  function CalculateAns() {
    var val1 = lh;
    var val2 = rh;
    var int1 = Number(val1);
    var int2 = Number(val2);
    if (Number.isNaN(int1) || Number.isNaN(int2)) {
      return false;
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
        case "^":
          ans = Math.pow(int1, int2);
          break;
        default:
          break;
      }
      return ans;
    }
  }

  const ans = CalculateAns();

  return (
    <>
      <NumberInput num={lh} value={lh} onChange={onLhChange} />
      <StyledButton onClick={scrollOp}>{ops[operatorNum]}</StyledButton>
      <NumberInput num={rh} value={rh} onChange={onRhChange} />
      <StyledButton onClick={CalculateAns}>=</StyledButton>
      <TrueInput
        state={ans !== false}
        value={ans === false ? "Must be numerical input" : ans}
      />
    </>
  );
}

export default MathBox;
