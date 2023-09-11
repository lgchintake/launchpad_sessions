import React from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {
  const [color, setColor] = React.useState("blue");

  const divClicked = () => {
    console.log("div clicked");
    setColor("yellow");
  };
  return (
    <div>
      {console.log("In FirstComponent render")}
      <SecondComponent color={color} />
      <div onClick={() => divClicked()}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default FirstComponent;
