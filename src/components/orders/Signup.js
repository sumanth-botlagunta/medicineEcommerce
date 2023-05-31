import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

// const url =
//   "https://medimaxauth.herokuapp.com/api/authentication/register";

const url =
  "https://medimaxauth.onrender.com/api/authentication/register";
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone: "",
      name: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/login"));
    console.log(">>>> register",JSON.stringify(this.state))
  };

  render() {
    return (
      <div>
        <Navbar />
        <form className="container auth">
          <h2 className="text-center">Register</h2>
          <div className="form-group">
            <label type="string">Enter your name:</label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label type="string">Username:</label>
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Enter User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div> */}
          <div className="form-group">
            <label type="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label type="phone">PhoneNumber:</label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="Enter Phone Number:"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label type="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="hidden"
              className="form-control"
              id="qualification"
              name="qualification"
              value="NO"
            />
          </div> */}
          <div className="form-group">
            <input
              type="hidden"
              className="form-control"
              id="user"
              name="user"
              value="customer"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Create account
          </button>
          <h4 className="text-center">Register as a doctor</h4>
        </form>
      </div>
    );
  }
}
