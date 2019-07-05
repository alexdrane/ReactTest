import "./styles.css";
import styled from "styled-components";
const font = "Calibri";

export const BodyWrapper = styled.div`
  color: navy;
  font-family: ${font};
  margin: auto;
  text-align: center;
`;

export const Sticky = styled.div`
  color: white;
  background-color: #004466;
  font-size: 30px;
  font-family: ${font};
  position: sticky;
  padding: 10px 10px;
  top: 10px;
`;

export const SectionWrapper = styled.div`
  padding: 10px 0px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  transition-duration: 0.4s;
  border: 1px solid #004466;
  padding: 4px 10px;
  margin: 0 5px;

  &:hover {
    background-color: #004466;
    color: white;
    border: 1px solid black;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #004466;
  color: navy;
  padding: 4px 10px;
`;
