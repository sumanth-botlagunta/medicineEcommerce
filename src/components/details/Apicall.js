import React, { Component } from "react";
import axios from "axios";
import Meddisplay from "./Index";
import Navbar from "../navbar/Navbar";

const url = "https://medicineapi.onrender.com/covid-medicines?covidID=";

export default class Apicall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicineid: "",
    };
  }
  render() {
    return (
      <>
        <Navbar />
        <Meddisplay meddata={this.state.medicineid} />
      </>
    );
  }

  async componentDidMount() {
    let medId = this.props.match.params.medId;
    let response = await axios.get(`${url}${medId}`);
    this.setState({ medicineid: response.data[0] });
  }
}
