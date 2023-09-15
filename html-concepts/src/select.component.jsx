import React, { useEffect } from "react";
const SelectComponent = () => {
  const [department, setDepartment] = React.useState([]);
  const submitDetails = () => {
    console.log(department);
  };

  const departmentSelection = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // add deparment
      setDepartment((preState) => [...preState, value]);
    } else {
      // remove department
      const filteredValues = department.filter((element) => element != value);
      setDepartment(filteredValues.length > 0 ? filteredValues : []);
    }
  };

  useEffect(() => {
    console.log(department);
  }, [department]);

  return (
    <div>
      <input
        type="checkbox"
        name="department"
        value={"It"}
        onChange={(e) => departmentSelection(e)}
      />
      IT <br />
      <input
        type="checkbox"
        name="department"
        value={"hr"}
        onChange={(e) => departmentSelection(e)}
      />{" "}
      HR <br />
      <input
        type="checkbox"
        name="department"
        value={"cleaning"}
        onChange={(e) => departmentSelection(e)}
      />{" "}
      Cleaning <br />
      <input
        type="checkbox"
        name="department"
        value={"admin"}
        onChange={(e) => departmentSelection(e)}
      />{" "}
      Admin <br />
      <br />
      <input type="button" value="submit" onClick={() => submitDetails()} />
    </div>
  );
};

export default SelectComponent;
