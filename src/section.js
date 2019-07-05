import React from "react";
import "./styles.css";
import { SectionWrapper, HeadButton } from "./styling.js";

function ToggleSection({ children, title }) {
  const [state, setState] = React.useState(true);

  function Toggle() {
    setState(!state);
  }

  return (
    <SectionWrapper>
      <h2 onClick={Toggle}>{title}</h2>
      {state ? null : children}
    </SectionWrapper>
  );
}

export default ToggleSection;
