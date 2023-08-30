import "./HomeComponent.css";
import React from "react";

export const HomeComponent = () => {
  const [firstName, setFirstName] = React.useState("");
  
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <div className="home-component">
      <span className="first">First span from HomeComponent</span> <br />
      <span>World</span>
      <div>
        <label>First Name</label>{" "}
        <input
          type="text"
          onChange={(e) => firstNameChange(e)}
          value={firstName}
        />
        <br />
        <br />
        <label>Input data: {firstName}</label>
      </div>
    </div>
  );
};
