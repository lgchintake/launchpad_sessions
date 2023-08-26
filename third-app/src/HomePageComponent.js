import React from "react";

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Raj",
      lastName: "Chaudhari",
      city: "Pune",
      isAllowed: true,
    };
  }

  componentDidMount = () => {
    console.log("in component did mount");
    // Go to server and fetch some dynamic data
  };

  shouldComponentUpdate = () => {
    console.log("Should Component Update");
    return true;
  };

  changeCandidateName = () => {
    console.log("Name change called...", this.state);

    this.setState({
      firstName: "Yash",
      lastName: "Chauhan",
      pinCode: "444365",
    });

    // this.props.color = "Yellow";

    // this.state.firstName = "Rahul";
    // console.log(this.state);
  };

  changePermission = () => {
    this.setState({ isAllowed: !this.state.isAllowed });
  };

  render() {
    console.log("in render");
    return (
      <div style={{ margin: "50px" }}>
        <p>Welcome to HomePageComponent</p>
        <h1>
          {this.state.firstName} {this.state.lastName}, {this.state.city}
        </h1>
        <button onClick={() => this.changeCandidateName()}>Chagne Name</button>
        <br />
        <br />
        <button onClick={() => this.changePermission()}>
          {this.state.isAllowed ? "Dis Allow" : "Allow"}
        </button>
        <br /> <br /> <br />
        {this.state.pinCode} <br />
        {this.state.isAllowed ? <button>{this.props.color}</button> : <></>}
      </div>
    );
  }
}

export default HomePageComponent;
