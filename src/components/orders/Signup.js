import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form className="container auth">
        <h2 className="text-center">Register</h2>
          <div className="form-group">
            <label type="string">Name:</label>
            <input
              type="name"
              className="form-control"
              id="mane"
              placeholder="Enter your Name"
              name="name"
            />
          </div>
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
            Create account
          </button>
          <h4 className="text-center">Register as a doctor</h4> 
        </form>
      </div>
    );
  }
}
