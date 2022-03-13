import React, { Component } from "react";
import banner from "./Banner.jpg";
import { Link } from "react-router-dom";
export default class Index extends Component {
  rendermedicines = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <Link to={`/details/${item.id}`} style={{ textDecoration: "none" ,color: 'black'}}>
            <div className="medicine-info" key={item._id}>
              <div className="medicine-img">
                <img src={item.image} alt="medicine" />
              </div>
              <div className="medicine-desc">
                <h4>{item.name}</h4>
                <p className="desc-text">{item.description}</p>
              </div>
              <div className="medi-cost">₹{item.cost}</div>
            </div>
          </Link>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="container-fluid page-container">
          <div className="covid-banner">
            <img src={banner} alt="_covidbanner_" />
          </div>
          <div className="container">
            <div className="heading text-center">
              <h2>Buy Covid-saftey Products at Medimax</h2>
            </div>
            <div className="body">
              <div className="all-medicines">
                {this.rendermedicines(this.props.coviddata)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
