import React from "react";
import { render } from "react-dom";
import App from "./App";

function Main() {
  return (
    <>
      Main index.js
      <br />
      <App />
    </>
  );
}

render(<Main />, document.getElementById("app"));
