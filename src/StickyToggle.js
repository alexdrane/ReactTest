import React from "react";
import { Sticky } from "./styling.js";

function StickyToggle({ children, head }) {
  const [state, setState] = React.useState(true);

  function Toggle() {
    setState(!state);
  }

  return (
    <>
      <Sticky onClick={Toggle}>{head}</Sticky>
      {state ? null : children}
    </>
  );
}

export default StickyToggle;
