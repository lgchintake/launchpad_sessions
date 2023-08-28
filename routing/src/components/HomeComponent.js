import React from "react";
import RouteComponent from "./RouteComponent";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteComponent />
        <h1>Home Component</h1>
      </div>
    );
  }
}

export default HomeComponent;
