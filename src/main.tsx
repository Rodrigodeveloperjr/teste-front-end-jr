import GlobalStyled from "./styles/global";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
