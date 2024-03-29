import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "./index.css";

const url =
  "https://medimaxauth.onrender.com/api/authentication/login";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          this.setState({ message: data.token });
          console.log(">>>login failed");
        } else {
          sessionStorage.setItem("ltk", data.token);
          console.log(">>> login sucessfully");
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <form className="container auth">
          <h2 className="text-center">Login</h2>
          <div className="form-group">
            <label type="email">Enter Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter User Name"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label type="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
