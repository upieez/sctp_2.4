import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /** we will ignore this first but we will keep it */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
