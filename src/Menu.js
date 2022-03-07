import React, { Component } from "react";
import "./Menu.css";
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">DE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li><NavLink className="nav-item nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/list">List</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default Menu;