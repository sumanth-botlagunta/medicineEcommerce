import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Apicall from "../covidproducts/Apicall";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Apicall />
      </>
    );
  }
}
