import React from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  ThemeConsumer,
} from "styled-components";
import { reset, themes } from "react95";

import Homepage from "./components/Homepage";

const ResetStyles = createGlobalStyle`${reset}`;

function App() {
  return (
    <div style={{ background: "teal", height: "100vh", width: "100vw" }}>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
