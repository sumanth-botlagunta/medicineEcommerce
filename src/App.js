import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/orders/Login";
import Signup from "./components/orders/Signup";
import Details from "./components/details/Apicall";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/details/:medId" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
