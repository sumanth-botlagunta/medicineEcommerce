import React, { Component } from "react";
import "./index.css";
import Covidmeds from "./Index";
//api url for courses
const url = "https://medicineapi.onrender.com/covid-medicines";
class Apicall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coviddata: "",
    };
  }

  render() {
    return <Covidmeds coviddata={this.state.coviddata} />;
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ coviddata: data });
      });
  }
}
export default Apicall;
