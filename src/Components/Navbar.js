import React, { Component } from "react";
import Link from "./link";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link id="section1">Section1</Link>
            </li>
            <li className="nav-item">
              <Link id="section2">Section2</Link>
            </li>
            <li className="nav-item">
              <Link id="section3">Section3</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
