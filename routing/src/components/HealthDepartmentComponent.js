import React from "react";
import ButtonComponent from "./ButtonComponent";

class HealthDepartmentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Health Department Component</h1>
        <ButtonComponent color1={this.props.color} />
      </div>
    );
  }
}

export default HealthDepartmentComponent;
