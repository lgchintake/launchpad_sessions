import React from "react";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={{ backgroundColor: this.props.color1 }}>
        Hello, my color is: {this.props.color1}
      </button>
    );
  }
}

export default ButtonComponent;
