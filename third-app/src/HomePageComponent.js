import React from "react";

class HomePageComponent extends React.Component {
  constructor() {
    super();
    console.log("in constructor");
    this.state = {
      firstName: "Raj",
      lastName: "Chaudhari",
      city: "Pune",
    };
  }

  //   componentDidMount = () => {
  //     console.log("in component did mount");
  //     // Go to server and fetch some dynamic data
  //   };

  changeCandidateName = () => {
    console.log("Name change called...", this.state);

    this.setState({
      firstName: "Yash",
      lastName: "Chauhan",
      pinCode: "444365",
    });
    // this.state.firstName = "Rahul";
    // console.log(this.state);
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
        <br /> <br /> <br />
        {this.state.pinCode}
      </div>
    );
  }
}

export default HomePageComponent;
