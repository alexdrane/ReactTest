import React from "react";
import ReactDOM from "react-dom";
import RandomButton from "./randomButton.js";
import InputBox from "./box.js";
import AddButton from "./adding.js";
import MathBox from "./MathBox.js";
import ToggleSection from "./section.js";
import StickyToggle from "./StickyToggle.js";
import "./styles.css";
import { BodyWrapper, Sticky } from "./styling";

function App() {
  return (
    <>
      <BodyWrapper>
        <StickyToggle head="The Amazing Thing Do-er!">
          <ToggleSection title="Calculator ">
            <MathBox />
          </ToggleSection>
          <ToggleSection title="Counter">
            <AddButton />
          </ToggleSection>
          <ToggleSection title="InputBox">
            <InputBox />
          </ToggleSection>
          <ToggleSection title="InputBox">
            <RandomButton />
          </ToggleSection>
        </StickyToggle>
      </BodyWrapper>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
