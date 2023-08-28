import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import HomePageComponent from "./HomePageComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HomePageComponent isAdminUser={true} color="Red" />
  </StrictMode>
);
