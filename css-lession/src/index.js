import React from "react";
import ReactDOM from "react-dom/client";
import { HomeComponent } from "./HomeComponent";
import { SecondComponent } from "./SecondComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeComponent />
  </React.StrictMode>
);
