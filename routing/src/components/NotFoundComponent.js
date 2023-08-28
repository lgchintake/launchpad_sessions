import React from "react";

class NotFoundComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Oops! Sorry, URL not found</h1>
      </div>
    );
  }
}

export default NotFoundComponent;
