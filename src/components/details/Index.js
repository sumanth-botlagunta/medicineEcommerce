import React, { Component } from "react";
import "./index.css";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  rendermedicine = (item) => {
    if (item) {
      return (
        <div className="container med-details" key={item.id}>
          <div className="med-image">
            <img src={item.image} alt={item.name} className="img-fluid" />
          </div>
          <div className="med-details-content">
            <ul>
              <li>
                <h2>{item.name}</h2>
              </li>
              <li>
                <span>Brand: </span>
                {item.brand}
              </li>
              <li>
                <span>Type: </span>
                {item.form}
              </li>
              <li>
                <span>Price: </span>
                ₹ {item.cost}
              </li>
              <li>{item.usess}{item.uses}</li>
            </ul>
            <div className="med-buttons">
              <button className="btn btn-danger" value={item.id}>
                Add to cart
              </button>
              <button className="btn btn-black" value={item.id}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <>{this.rendermedicine(this.props.meddata)}</>;
  }
}
