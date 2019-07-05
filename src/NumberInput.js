import styled from "styled-components";

const NumberInput = styled(StyledInput)`
  color: white;
  background-color: ${props =>
    Number.isNaN(Number(props.num)) ? "Red" : "Green"};
`;
