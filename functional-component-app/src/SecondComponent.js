import React from "react";

const SecondComponent = ({ color }) => {
  console.log(color);
  console.log("test");
  const [temp, setTemp] = React.useState("Hello");
  return (
    <div>
      {console.log("In Second component render")}
      <div>temp data: {temp}</div> <br />
      <button
        style={{ backgroundColor: color }}
        onClick={() => setTemp("Help")}
      >
        Hello, {color}
      </button>
    </div>
  );
};

export default SecondComponent;
