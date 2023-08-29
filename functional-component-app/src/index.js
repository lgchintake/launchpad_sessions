import React from "react";
import ReactDOM from "react-dom/client";
import HomeComponent from "./HomeComponent";
import SecondHomeComponent from "./SecondHomeComponent";

function abc() {
  return (
    <div>
      <h1>Welcome to IndexJs</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeComponent color="Blue" />
    <SecondHomeComponent color="Yellow" />
  </React.StrictMode>
);
