import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/#section1">Section1</Link>
            </li>
            <li className="nav-item">
              <Link to="/#section2">Section2</Link>
            </li>
            <li className="nav-item">
              <Link to="/#section3">Section3</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
