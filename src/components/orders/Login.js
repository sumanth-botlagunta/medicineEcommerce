import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import './index.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form className="container auth">
          <h2 className="text-center">Login</h2>
          <div className="form-group">
            <label type="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label type="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
