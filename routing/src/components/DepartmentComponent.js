import React from "react";
import RouteComponent from "./RouteComponent";
import HealthDepartmentComponent from "./HealthDepartmentComponent";

class DepartmentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteComponent />
        <h1>Department Component</h1>
        <HealthDepartmentComponent color="red" />
      </div>
    );
  }
}

export default DepartmentComponent;
