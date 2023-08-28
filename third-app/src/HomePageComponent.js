import React from "react";
import axios from "axios";
import MyButton from "./MyButton";

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("In contructor");

    this.state = {
      firstName: "Raj",
      lastName: "Chaudhari",
      city: "Pune",
      isAllowed: true,
      colors: ["Red", "Green", "Blue", "Orange"],
    };
  }

  componentDidMount = () => {
    // Go to server and fetch some dynamic data
    var products = [];
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then(function (response) {
    //     products = response.data;
    //     console.log(JSON.stringify(products[5]));

    //     console.log("second call");
    //     axios
    //       .get("https://fakestoreapi.com/products/category/jewelery")
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log("Fail: ", error);
    //       });
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log("Fail: ", error);
    //   });
  };

  shouldComponentUpdate = () => {
    // console.log("Should Component Update");
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

  test = () => {
    console.log("test function called");
  };

  addColors = () => {
    this.setState({
      colors: [
        ...this.state.colors,
        ...["Yellow", "Pink", "White", "Purple", "Violet"],
      ],
    });
  };

  changePermission = () => {
    console.log("Going to update ", this.state);
    this.setState({ isAllowed: !this.state.isAllowed }, () => {
      console.log("Just updated! ", this.state);
      this.test();
    });
    console.log("Permission updated! ", this.state);
  };

  render() {
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
        <br />
        <br />
        <MyButton text="First Button" />
        <MyButton text="Second Button" />
        {this.state.colors.map((color, index) => (
          <MyButton key={index} text={color} />
        ))}
        <br />
        <br />
        <br />
        <button onClick={() => this.addColors()}>Add Colors</button>
      </div>
    );
  }
}

export default HomePageComponent;
