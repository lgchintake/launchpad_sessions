import React from "react";
import { Link } from "react-router-dom";

class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/home">Home</Link> &emsp;
        <Link to="/department">Department</Link> &emsp;
        <Link to="/contact-us">Contact Us</Link> &emsp;
        <Link to="/about-us">About Us</Link> &emsp;
      </div>
    );
  }
}

export default RouteComponent;
