import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form className="container">
          <div class="form-group">
            <label for="email">Name:</label>
            <input
              type="name"
              class="form-control"
              id="mane"
              placeholder="Enter your Name"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Create account
          </button>
        </form>
      </div>
    );
  }
}
