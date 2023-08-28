import React from "react";
import RouteComponent from "./RouteComponent";

class ContactUsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteComponent />
        <h1>Contact Us Component</h1>
      </div>
    );
  }
}

export default ContactUsComponent;
