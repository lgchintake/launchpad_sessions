import React, { useEffect, useLayoutEffect } from "react";

const SecondHomeComponent = ({color}) => {
  const [name, setName] = React.useState("Manasi");
  const [id, setId] = React.useState(123);

  const changeName = () => {
    setName("Rutvik");
    console.log("Rutvik");
  };

  useEffect(() => {
    console.log("UseEffect");
  });

  useLayoutEffect(() => {
    console.log("useLalyoutEffect");
  });

  return (
    <div>
      {console.log("In return method")}
      <h1>Hello, {name}!</h1>
      <button onClick={() => changeName()}>Change Name</button>
      <button onClick={() => setId(456)}>Message {id}</button>
      <div> I got color prop: {color}</div>
    </div>
  );
};

export default SecondHomeComponent;
