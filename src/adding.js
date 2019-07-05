import React from "react";
import styled from "styled-components";

import "./styles.css";
import { StyledButton } from "./styling";

const EvenOddButton = styled(StyledButton)`
  &:hover {
    background-color: ${props =>
      props.number % 2 === 0 ? "#660000" : "#003399"};
  }
`;

function AddButton() {
  const [count, setCount] = React.useState(0);

  function onButtonPress() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <EvenOddButton number={count} onClick={onButtonPress}>
        {count}
      </EvenOddButton>
      {count === 0 ? null : (
        <StyledButton onClick={reset}>Reset Counter</StyledButton>
      )}
    </>
  );
}

export default AddButton;
