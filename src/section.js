import React from "react";
import styled from "styled-components";
import "./styles.css";
import { SectionWrapper, HeadButton } from "./styling.js";

function ToggleSection({ children, title }) {
  const [state, setState] = React.useState(true);

  function Toggle() {
    setState(!state);
  }

  return (
    <SectionWrapper>
      <HeadButton onClick={Toggle}>{title}</HeadButton>
      {state ? null : children}
    </SectionWrapper>
  );
}

export default ToggleSection;
