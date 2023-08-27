import React from "react";
class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button>{this.props.text}</button>;
  }
}

export default MyButton;
