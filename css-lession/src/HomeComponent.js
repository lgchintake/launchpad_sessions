import "./HomeComponent.css";
import React, { useEffect } from "react";

export const HomeComponent = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("Patil");

  const [count, setCount] = React.useState(0);

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    //console.log("previous count: " + count);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    //console.log("current count: " + count);
  };

  useEffect(() => {
    console.log(firstName);
  }, [count]);

  return (
    <div className="home-component">
      <span className="first">First span from HomeComponent</span> <br />
      <span>World</span>
      <div>
        <label style={{color: "red", backgroundColor: "yellow"}}>First Name</label>{" "}
        <input
          type="text"
          onChange={(e) => firstNameChange(e)}
          value={firstName}
        />
        <br />
        <br />
        <label>Input data: {firstName}</label>
        <br />
        <div>{count}</div>
      </div>
    </div>
  );
};
