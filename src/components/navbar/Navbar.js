import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Medi-Max
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
            <form className="location-detect">
            <input
              className="form-control search-field"
              type="search"
              placeholder="detect Location"
              aria-label="Location"
            />
            <button className="btn btn-success" type="submit">
              Detect
            </button>
          </form>
            </li>
            <li>
              <a href="/">categories</a>
            </li>
            <li>
              <Link to="/">Browse Medicines</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="glyphicon glyphicon-shopping-cart"></span> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
