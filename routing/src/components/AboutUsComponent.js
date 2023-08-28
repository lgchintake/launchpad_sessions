import React from "react";
import RouteComponent from "./RouteComponent";

class AboutUsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteComponent />
        <h1>About Us Component</h1>
      </div>
    );
  }
}

export default AboutUsComponent;
